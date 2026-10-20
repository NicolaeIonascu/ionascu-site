# ionascu.com VPS deployment

The VPS is `176.58.98.83`. The existing site uses
`/etc/nginx/sites-available/ionascu.conf` and `/var/www/ionascu2/www`.
Other virtual hosts must not be changed.

## First migration

Build with Node 24 and `npm ci && npm run build`. Upload `dist/` and
`migrate-vps.sh`, `backup-wordpress.py`, `ionascu-static.nginx.conf`,
`redirects.nginx.conf` into `~/ionascu-migration/` on the VPS.

Review the files, then run:

```sh
ssh -t user@176.58.98.83 'sudo bash /home/user/ionascu-migration/migrate-vps.sh'
```

The script archives WordPress, exports its database, and saves the old
Nginx configuration under `/var/backups/ionascu/<UTC timestamp>/`.
It stops on backup errors before changing Nginx. Database export uses table locks limited to the WordPress database
(writes may wait briefly); this avoids the global FLUSH privilege requirement
of `--single-transaction` in the installed MySQL 8.0.32 client. It installs a static
release, validates Nginx, reloads it, and compares the HTTPS response with the
built home page. A failed activation restores the old Nginx configuration.
WordPress files and database remain available for rollback.
The CRM is blocked in production until real server authentication is configured.

After a rolled-back activation, an existing backup can be reused with
`migrate-vps.sh --resume-backup <UTC timestamp>`. Its archives are verified again
and the live Nginx configuration must match the saved configuration. This does
not capture WordPress edits made since that backup.

## GitHub Actions

The workflow builds pull requests and pushes. Production deployment remains
disabled until repository Actions variable `VPS_DEPLOY_ENABLED` is `true`.

Before enabling it:

1. Install a dedicated Ed25519 public key in
   `/home/ionascu-deploy/.ssh/authorized_keys` (directory mode 700, file mode 600,
   both owned by `ionascu-deploy`). Use `restrict` before the key to disable
   forwarding and PTY access. This account needs no sudo rights.
   Alternatively, upload the public key as `github-actions.pub` alongside
   `install-deploy-key.sh` and run that script with sudo.
2. Add the corresponding private key as repository Actions secret `VPS_SSH_KEY`.
   Do not use the administrator's personal key.
3. Add verified VPS known-hosts lines as secret `VPS_KNOWN_HOSTS`.
4. Commit and push the workflow and deployment documentation to `main`.
5. Set `VPS_DEPLOY_ENABLED=true`, then run the workflow manually to verify it.

Each deployment uploads a unique release directory, atomically switches
`/var/www/ionascu-static/current`, and checks the HTTPS response. Failure restores
the previous link. Nginx does not need a reload for ordinary deployments.
Older releases are retained; monitor disk usage and prune only confirmed unused
releases, preserving the current and rollback releases.

Nginx redirects are installed during migration, not during normal deployments.
Changes to redirects or Nginx configuration require a separate administrative
installation followed by `nginx -t` and a reload.

## Rollback to WordPress

Restore `ionascu.conf` from the chosen backup to
`/etc/nginx/sites-available/ionascu.conf`, run `sudo nginx -t`, and only if that
passes run `sudo systemctl reload nginx`. The original WordPress files and
database have not been deleted. Disable `VPS_DEPLOY_ENABLED` while investigating.
