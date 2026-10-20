#!/usr/bin/env bash
set -euo pipefail
test "$(id -u)" = 0 || { echo "Run with sudo"; exit 1; }
stage="$(cd -- "$(dirname -- "$0")" && pwd)"
key_file="$stage/github-actions.pub"
ssh-keygen -l -f "$key_file" >/dev/null
test "$(wc -l < "$key_file")" -eq 1
key="$(cat "$key_file")"
[[ "$key" == ssh-ed25519\ * ]] || exit 1
account=ionascu-deploy
ssh_dir="/home/$account/.ssh"
install -d -m 700 -o "$account" -g "$account" "$ssh_dir"
touch "$ssh_dir/authorized_keys"
if ! grep -Fqx "restrict $key" "$ssh_dir/authorized_keys"; then
    printf 'restrict %s\n' "$key" >> "$ssh_dir/authorized_keys"
fi
chown "$account:$account" "$ssh_dir/authorized_keys"
chmod 600 "$ssh_dir/authorized_keys"
echo "GitHub Actions public key installed."
