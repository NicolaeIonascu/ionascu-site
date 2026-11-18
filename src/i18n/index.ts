// Three languages: English (default, URLs as they always were), Romanian (under /ro/) and Russian (under /ru/).
import { ui } from './ui';

export type Lang = 'en' | 'ro' | 'ru';
/** Order of the language switcher: English, Romanian, Russian (Russian last). */
export const LANGS: Lang[] = ['en', 'ro', 'ru'];

/** Language of a request, taken from the URL: /ro/... = Romanian, /ru/... = Russian, everything else = English. */
export const getLang = (url: URL | string): Lang => {
  const p = typeof url === 'string' ? url : url.pathname;
  if (p === '/ro' || p.startsWith('/ro/')) return 'ro';
  if (p === '/ru' || p.startsWith('/ru/')) return 'ru';
  return 'en';
};

/** The English (root) form of a path: /ro/services/ -> /services/ , /ru/ -> / */
export const stripLang = (path: string): string => {
  for (const l of ['ro', 'ru']) {
    if (path === `/${l}`) return '/';
    if (path.startsWith(`/${l}/`)) return path.slice(l.length + 1);
  }
  return path;
};

/** Link to a page in the given language: lp('ro', '/services/') -> '/ro/services/' */
export const lp = (lang: Lang, path: string): string => {
  if (!path.startsWith('/') || path.startsWith('//')) return path; // external or anchor
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
};

/**
 * Pages that already have a translated version (the same list for Romanian and Russian).
 * The language switcher and the hreflang tags only point to pages listed here, so nothing links
 * to a page that does not exist yet. An entry ending with '*' covers every path that starts with it.
 */
export const TRANSLATED: string[] = ['/', '/services/*', '/about/', '/contact/', '/testimonials/', '/process/', '/portfolio/*', '/blog/*', '/thank-you/', '/producatori/'];

/** Pages that exist only in Romanian and Russian (the banner landing page for Moldova); the English switch goes to the English home page. */
export const NO_ENGLISH: string[] = ['/producatori/'];

export const hasTranslation = (enPath: string): boolean =>
  TRANSLATED.some((t) => (t.endsWith('*') ? enPath.startsWith(t.slice(0, -1)) : enPath === t));

/** The same page in each language, in switcher order. English only when the page exists in English. */
export const langLinks = (pathname: string): { lang: Lang; href: string; exact: boolean }[] => {
  const en = stripLang(pathname);
  const translated = hasTranslation(en);
  return LANGS.map((l) => {
    if (l === 'en') return NO_ENGLISH.includes(en) ? { lang: l, href: '/', exact: false } : { lang: l, href: en, exact: true };
    return translated ? { lang: l, href: lp(l, en), exact: true } : { lang: l, href: lp(l, '/'), exact: false };
  });
};

export const t = (lang: Lang) => ui[lang];
export { ui };
