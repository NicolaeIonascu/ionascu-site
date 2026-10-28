# Server setup for ionascu.com (static site)

Everything on the site side is ready. Only the server part is left. It takes about 30 minutes.

The site is plain static files. There is no PHP, no database, no Node on the server at runtime.

## 1. Get the files onto the server

Pick one:

**A. Build on your server (auto-update when the owner pushes to GitHub)**
```bash
git clone <repo-url> ionascu && cd ionascu
npm ci          # Node 22.12+ required
npm run build   # result: dist/
```
Point the web root (document root) to `dist/`. To update later: `git pull && npm ci && npm run build`.
You can run this from a webhook or a cron job so the owner never has to ask.

**B. Let GitHub / Cloudflare Pages / Netlify build it** and only receive the `dist/` folder.

## 2. Redirects from the old WordPress URLs (important for Google)

The old WordPress addresses must answer `301` to the new pages, otherwise the owner loses the search rankings.

- Apache: copy the contents of `server/redirects.htaccess` into the site's `.htaccess`
- Nginx: `include` the contents of `server/redirects.nginx.conf` inside the `server { }` block
- (Netlify / Cloudflare Pages use `public/_redirects`, no action needed)

After editing `public/_redirects` run `node tools/server-redirects.mjs` to regenerate both files.

## 3. Server settings

- HTTPS on, and `http://` and `www.` redirected to `https://ionascu.com` (the canonical address in the site)
- `404.html` as the error page for 404
- Pages are folders (`/about/` serves `/about/index.html`), so a trailing slash on all URLs
- Long cache for `/_astro/*` (file names are hashed), e.g. `Cache-Control: public, max-age=31536000, immutable`; short cache for HTML
- Enable gzip or brotli

Apache:
```apache
ErrorDocument 404 /404.html
DirectoryIndex index.html
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
</IfModule>
```

Nginx:
```nginx
error_page 404 /404.html;
location /_astro/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
```

## 4. The owner's CRM page

The private CRM (`/crm/`) works only on the owner's computer (`npm run dev`). It is **not part of the production build**: nothing to configure or password-protect on the server.

## 5. DNS and mail

- Change the A record of `ionascu.com` to the new server (DNS is at GoDaddy)
- **Do not touch the MX records**: mail runs on Google Workspace
- Keep the old WordPress copy until the new site is checked

## 6. After launch (owner or you)

- Open `https://ionascu.com/sitemap-index.xml` and a few old WordPress URLs to check the redirects
- Add the site to Google Search Console and submit the sitemap
