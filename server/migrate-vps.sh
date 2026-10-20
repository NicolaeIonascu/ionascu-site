#!/usr/bin/env bash
# Run on the VPS with sudo, from the uploaded migration directory.
# Keeps WordPress and its database intact for rollback.
set -euo pipefail
test "$(id -u)" = 0 || { echo "Run with sudo"; exit 1; }
stage="$(cd -- "$(dirname -- "$0")" && pwd)"
test -s "$stage/dist/index.html"
test -s "$stage/dist/404.html"
nginx -t
exec 9>/var/lock/ionascu-migration.lock
flock -n 9
test ! -e /var/www/ionascu-static/current || { echo "Already migrated; stopping."; exit 1; }
stamp="$(date -u +%Y%m%dT%H%M%SZ)"
if [[ "${1:-}" == "--resume-backup" ]]; then
    [[ "${2:-}" =~ ^[0-9]{8}T[0-9]{6}Z$ ]] || { echo "Invalid backup timestamp"; exit 1; }
    backup="/var/backups/ionascu/$2"
    test -s "$backup/wordpress.sql.gz"
    test -s "$backup/wordpress.tar.gz"
    cmp -s "$backup/ionascu.conf" /etc/nginx/sites-available/ionascu.conf ||
        { echo "Nginx configuration has changed since backup; stopping."; exit 1; }
    echo "Reusing verified backup: $backup (WordPress remains intact)"
else
    test "$#" -eq 0 || { echo "Unknown arguments"; exit 1; }
backup="/var/backups/ionascu/$stamp"
install -d -m 700 "$backup"
echo "Backing up WordPress to $backup"
cp -a /etc/nginx/sites-available/ionascu.conf "$backup/ionascu.conf"
tar_status=0
LC_ALL=C tar -czf "$backup/wordpress.tar.gz" -C /var/www/ionascu2 www \
    2>"$backup/tar.log" || tar_status=$?
if (( tar_status != 0 )); then
    cat "$backup/tar.log" >&2
    # A live WP cache may change directory metadata. Accept only that case;
    # changed regular files, missing files, and read errors still stop migration.
    test "$tar_status" -eq 1 && test -s "$backup/tar.log" || exit "$tar_status"
    while IFS= read -r warning; do
        case "$warning" in
            "tar: www/"*": file changed as we read it")
                path="${warning#tar: }"
                path="${path%: file changed as we read it}"
                test -d "/var/www/ionascu2/$path" || exit 1
                ;;
            *) exit 1 ;;
        esac
    done < "$backup/tar.log"
    echo "Directory metadata changed during backup; original WordPress is retained."
fi
python3 "$stage/backup-wordpress.py" "$backup"
gzip "$backup/wordpress.sql"
fi
gzip -t "$backup/wordpress.tar.gz"
tar -tzf "$backup/wordpress.tar.gz" >/dev/null
gzip -t "$backup/wordpress.sql.gz"
echo "Backups verified; installing static site."
id ionascu-deploy >/dev/null 2>&1 || useradd --create-home --shell /bin/bash ionascu-deploy
install -d -m 755 -o ionascu-deploy -g ionascu-deploy /var/www/ionascu-static /var/www/ionascu-static/releases
release="/var/www/ionascu-static/releases/initial-$stamp"
install -d -m 755 "$release"
cp -a "$stage/dist/." "$release/"
chown -R ionascu-deploy:ionascu-deploy "$release"
chmod -R u=rwX,go=rX "$release"
ln -s "$release" /var/www/ionascu-static/current
install -m 644 "$stage/redirects.nginx.conf" /etc/nginx/snippets/ionascu-redirects.conf
rollback() {
    cp -a "$backup/ionascu.conf" /etc/nginx/sites-available/ionascu.conf
    nginx -t && systemctl reload nginx
    unlink /var/www/ionascu-static/current
    echo "Restored previous Nginx configuration. Backup: $backup" >&2
}
trap rollback ERR
install -m 644 "$stage/ionascu-static.nginx.conf" /etc/nginx/sites-available/ionascu.conf
nginx -t
systemctl reload nginx
# Reload is asynchronous: old workers may still serve the first connection.
healthy=false
for attempt in {1..15}; do
    if curl --fail --silent --show-error --connect-timeout 3 --max-time 5 \
        --resolve ionascu.com:443:127.0.0.1 https://ionascu.com/ \
        -o "$backup/home-check-$stamp.html" &&
        cmp -s "$release/index.html" "$backup/home-check-$stamp.html"; then
        healthy=true
        break
    fi
    echo "Waiting for Nginx to serve the new release ($attempt/15)..."
    sleep 1
done
test "$healthy" = true
trap - ERR
echo "Migration successful. WordPress retained. Backup: $backup"
