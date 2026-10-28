# ionascu.com – new site (Astro)

Static, SEO-first site for IONASCU: 3D assembly and installation instruction animations.

## For the hosting person (hand-over)

**Server setup checklist: [server/FOR-HOSTING.md](server/FOR-HOSTING.md)** (redirects for Apache/Nginx are ready in server/).

This is a **static site**: no server code, no database. The host only serves the `dist/` folder.

| | |
|---|---|
| Node.js | **22.12 or newer** (24 LTS is fine) |
| Install | `npm ci` (or `npm install`) |
| Build | `npm run build` |
| Publish folder | `dist/` |
| Framework preset (Netlify / Cloudflare Pages / Vercel) | **Astro** |
| Domain | `https://ionascu.com`, trailing slash on all URLs (set in `astro.config.mjs`) |

Recommended flow: GitHub repository, then the host builds on every push to `main` (auto-deploy). The owner edits files in the repository; nothing to do on the server.

**Redirects from the old WordPress URLs** are in `public/_redirects` (Netlify / Cloudflare Pages format, 301). They matter for SEO. On Apache or Nginx they must be converted to `.htaccess` / `nginx.conf` rules. If the host is plain Apache/Nginx, please ask the owner before launch.

**Private page `/crm/`** (clip and tile picker for the owner): it exists only in the local dev server (`npm run dev`) and is never built into `dist/`. Nothing to protect on the server.

**Do not commit:** `node_modules/`, `dist/`, `.astro/`, `.env`. They are in `.gitignore`.

---

## Local development

```bash
npm install        # once
npm run dev        # http://localhost:4321  (live reload)
npm run build      # outputs the finished site to /dist
npm run preview    # serve /dist locally
```
## Where to edit what

| What | File |
|---|---|
| Company name, email, social links, nav | `src/data/site.ts` |
| Portfolio (23 projects, YouTube ids, categories) | `src/data/projects.ts` (images in `src/assets/portfolio/`) |
| Services (5 pages) + FAQ | `src/data/services.ts` |
| Testimonials | `src/data/testimonials.ts` (logos in `src/assets/clients/`) |
| Page template, SEO tags, JSON-LD | `src/layouts/Base.astro` |
| Styles (plain CSS) | `src/styles/global.css` |
| Blog posts | `src/pages/blog/` (add to the list in `blog/index.astro`) |
| Redirects from the old WordPress URLs | `public/_redirects` |

Every page gets its own title, description, canonical, Open Graph tags; `sitemap-index.xml` and `robots.txt` are generated.

## TODO before launch (owner)

1. **Contact form**: create a free key at web3forms.com, put it in `src/data/site.ts` (`formKey`). Until then the page shows a mailto link.
2. **Project descriptions**: in `projects.ts` replace the generated titles/summaries with the real product names and one-line descriptions. Fill `product` for each.
3. **Duplicate video**: "Double modular" used the same YouTube video as "Roofart TDM" on the old site. Supply the right link or remove it.
4. **IKEA HELMER** is shown as a *personal showcase* (it is not a commissioned IKEA project). Keep it that way.
5. **Testimonials**: several are cut off with "…". Paste the full texts.
6. **Marantec** has no category on the old site ("Other"). Choose one.
7. **Business email**: use something@ionascu.com (the domain already uses Google Workspace MX records) instead of a Gmail address.
8. **VideoObject schema**: add `uploadDate` for each YouTube video, then add the markup (see TODO in `portfolio/[slug].astro`).
9. **Social image**: `public/og-default.jpg` is generated from the IKEA thumbnail. Replace with a branded 1200x630 image.
10. **FAQ and service copy**: review wording so it matches exactly what you offer (nothing about prices or turnaround is stated on purpose).
11. Blog post is a **draft**; review it and remove the "(Draft…)" note.
12. Web 3D demos (deck drain, elbow/endcap, rainwater system) were on the old `/sample-page-2/`. Only the description was moved; re-host the WebGL demos under `/public/` or link them.

## Launch checklist

1. Back up the old WordPress (files + database) and ask the server owner where it is hosted.
2. Deploy `/dist` (see "For the hosting person" above), keep the redirects.
3. Switch the A record in GoDaddy DNS to the new host (keep the Google MX records untouched!).
4. Add the site to Google Search Console and Bing Webmaster Tools, submit `https://ionascu.com/sitemap-index.xml`.
