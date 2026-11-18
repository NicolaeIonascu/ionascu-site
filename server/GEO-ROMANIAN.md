# Language versions: visitors from Romania and Moldova

The site exists in three languages:

- English: `https://ionascu.com/...` (as always)
- Romanian: `https://ionascu.com/ro/...` (same pages, same paths)
- Russian: `https://ionascu.com/ru/...` (same pages, same paths)

Every page has a language switch (EN / RO / RU) in the menu, and the pages tell Google about all versions (`hreflang`, sitemap).

## What already works without any server setting

- A visitor who clicks the switch gets that language, and the choice is remembered (cookie `lang`).
- On the **first visit** to an English page, the page itself (JavaScript) looks at the browser languages, in order: the first one the site has decides. Romanian or Moldovan goes to `/ro/`, Russian goes to `/ru/`, English stays. This does not depend on the country.

## What the server adds (about 20 minutes)

Send visitors **from Romania (RO) and Moldova (MD)** away from the English home page on their **first visit**:

- if the browser's first language is Russian: to `/ru/`
- everyone else from RO / MD: to `/ro/`

Visitors from other countries stay on English (a Russian browser abroad is still handled by the page script above). Search engine bots are never redirected. A visitor who chose a language (cookie `lang`) is never redirected.

Only `https://ionascu.com/` is redirected. Deep links (for example a link to a project) open as they are.

### 1. Install the GeoIP module and the country database (Ubuntu)

```bash
sudo apt install libnginx-mod-http-geoip2
# Country database: free "GeoLite2 Country" from MaxMind (needs a free account), file GeoLite2-Country.mmdb
# Put it at /usr/share/GeoIP/GeoLite2-Country.mmdb  (geoipupdate can keep it current)
```

If the site is behind Cloudflare, no module is needed: Cloudflare sends the country in the header `CF-IPCountry`. Use `map $http_cf_ipcountry $visitor_is_ro { default 0; RO 1; MD 1; }` instead of the `geoip2` block below.

### 2. `http { }` level (for example `/etc/nginx/conf.d/geo-ro.conf`)

```nginx
geoip2 /usr/share/GeoIP/GeoLite2-Country.mmdb {
    $geoip2_country_code default=XX source=$remote_addr country iso_code;
}

# visitors from Romania or Moldova
map $geoip2_country_code $visitor_is_ro { default 0; RO 1; MD 1; }

# crawlers and link-preview bots always get the English page
map $http_user_agent $visitor_is_bot {
    default 0;
    "~*(bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|google|bing|yandex|duckduckgo|baidu)" 1;
}

# redirect only: Romanian/Moldovan visitor, not a bot, no language chosen yet (no cookie "lang")
map "$visitor_is_ro:$visitor_is_bot:$cookie_lang" $go_ro { default 0; "1:0:" 1; }

# Russian is the first language of the browser: send to /ru/, otherwise to /ro/
map $http_accept_language $geo_lang   { default ro; "~*^\s*ru" ru; }
map $http_accept_language $geo_target { default /ro/; "~*^\s*ru" /ru/; }
```

### 3. Inside `server { ... }` for `ionascu.com` (next to the existing `location /`)

```nginx
# home page: first visit from RO / MD goes to the Romanian or the Russian version
location = / {
    if ($go_ro) {
        add_header Set-Cookie "lang=$geo_lang; Path=/; Max-Age=31536000; SameSite=Lax" always;
        add_header Cache-Control "no-store" always;
        return 302 $geo_target;
    }
    try_files /index.html =404;
    add_header Cache-Control "no-cache";
    add_header Vary "Cookie, Accept-Language";
}

# Romanian "page not found"
location ^~ /ro/ {
    error_page 404 /ro/404/index.html;
    try_files $uri $uri/ =404;
    add_header Cache-Control "no-cache";
}

# Russian "page not found"
location ^~ /ru/ {
    error_page 404 /ru/404/index.html;
    try_files $uri $uri/ =404;
    add_header Cache-Control "no-cache";
}
```

(The existing `error_page 404 /404.html;` stays for the English pages.)

### 4. Check

```bash
sudo nginx -t && sudo systemctl reload nginx
curl -sI https://ionascu.com/ | head -3                                                   # English visitor: 200
curl -sI -H "CF-IPCountry: RO" https://ionascu.com/ | head -3                              # only if behind Cloudflare: 302 to /ro/
curl -sI -H "CF-IPCountry: MD" -H "Accept-Language: ru-RU,ru" https://ionascu.com/ | head -3 # 302 to /ru/
```
From Romania or Moldova (a phone on mobile data is enough): open `https://ionascu.com/`, it must show the Romanian page (or the Russian page if the phone's first language is Russian). Open it again after clicking EN: it must stay English.

## Adding a page later

A new page needs an English file, a Romanian file and a Russian file; texts go to `src/i18n/*.ts`. See `README.md`, section "Languages".
