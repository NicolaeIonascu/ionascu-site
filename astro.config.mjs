// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { syncClips } from './tools/clips.mjs';

// https://astro.build/config
// Dev-server only: lets the private /crm/ page write the home-page tile settings straight into src/data/featured.json
// (the static production build has no such endpoint, so the live site can never be edited this way).
const saveFeatured = {
  name: 'save-featured',
  configureServer(server) {
    // post hook: Astro adds its own handlers in a post hook too, so ours has to be added after them to end up in front
    return () => {
      const num = (v, min, max, d) => Math.max(min, Math.min(max, Math.round(+v || d)));
      const targets = {
        '/api/save-featured': ['./src/data/featured.json', (list) => {
          if (!Array.isArray(list) || list.length > 6 || !list.every((x) => x && typeof x.slug === 'string' && /^[a-z0-9-]+$/.test(x.slug))) throw new Error('bad data');
          return list.map((x) => ({ slug: x.slug, start: num(x.start, 0, 99999, 0), duration: num(x.duration, 3, 30, 8) }));
        }],
        '/api/save-previews': ['./src/data/previews.json', (obj) => {
          if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('bad data');
          const out = {};
          for (const k of Object.keys(obj).sort()) { if (!/^[a-z0-9-]+$/.test(k)) throw new Error('bad slug'); out[k] = { start: num(obj[k].start, 0, 99999, 0), duration: num(obj[k].duration, 3, 30, 8) }; }
          return out;
        }],
      };
      const handler = (file, clean, req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; return res.end(); }
        let body = '';
        req.on('data', (c) => (body += c));
        req.on('end', () => {
          try {
            const data = clean(JSON.parse(body));
            console.log('[crm] saved ' + file);
            fs.writeFileSync(new URL(file, import.meta.url), JSON.stringify(data, null, 2) + String.fromCharCode(10));
            res.setHeader('Content-Type', 'application/json'); res.end('{"ok":true}');
          } catch (e) { res.statusCode = 400; res.end('{"ok":false}'); }
        });
      };
      // Astro's own handler would answer first (trailing-slash 404), so ours goes to the very front of the stack
      let busy = Promise.resolve();
      const makeClips = (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; return res.end(); }
        let body = '';
        req.on('data', (c) => (body += c));
        req.on('end', () => {
          busy = busy.then(async () => {
            try {
              const list = JSON.parse(body);
              if (!Array.isArray(list) || list.length > 40) throw new Error('bad data');
              const ok = list.every((c) => c && /^[a-z0-9-]+$/.test(c.slug) && /^[\w-]{6,20}$/.test(c.id) && Number.isInteger(c.start) && c.start >= 0 && Number.isInteger(c.duration) && c.duration >= 3 && c.duration <= 30);
              if (!ok) throw new Error('bad clip');
              const r = await syncClips(list);
              console.log('[crm] clips: made ' + r.made + (r.failed.length ? ', FAILED ' + r.failed.join(',') : ''));
              res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify({ ok: r.failed.length === 0, ...r }));
            } catch (e) { res.statusCode = 400; res.end('{"ok":false}'); }
          });
        });
      };
      server.middlewares.stack.unshift({ route: '', handle: (req, res, next) => {
        const u = req.url.split('?')[0].replace(/\/$/, '');
        if (u === '/api/make-clips') return makeClips(req, res);
        const t = targets[u];
        return t ? handler(t[0], t[1], req, res) : next();
      } });
    };
  },
};

// The private CRM (src/crm/pages) is registered only for stro dev. It is never part of the production build.
const crmDevOnly = {
  name: 'crm-dev-only',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command !== 'dev') return;
      injectRoute({ pattern: '/crm', entrypoint: './src/crm/pages/index.astro' });
      injectRoute({ pattern: '/crm/vs', entrypoint: './src/crm/pages/vs.astro' });
      injectRoute({ pattern: '/data/projects.json', entrypoint: './src/crm/pages/data/projects.json.ts' });
      injectRoute({ pattern: '/data/previews.json', entrypoint: './src/crm/pages/data/previews.json.ts' });
      injectRoute({ pattern: '/data/featured.json', entrypoint: './src/crm/pages/data/featured.json.ts' });
    },
  },
};

export default defineConfig({
  site: 'https://ionascu.com',
  trailingSlash: 'always',
  vite: { plugins: [saveFeatured], server: { fs: { allow: ['..'] } } },
  integrations: [
    crmDevOnly,
    // noindex pages must not be listed in the sitemap
    sitemap({ filter: (page) => !page.includes('/thank-you/') && !page.includes('/404') && !page.includes('/crm/') }),
  ],
});
