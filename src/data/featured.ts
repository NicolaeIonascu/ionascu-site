// The home-page tiles are configured in featured.json (edited with the private page /portfolio-short-select/).
//   slug      – project from projects.ts
//   start     – second where the preview starts
//   duration  – seconds that are looped
// The first three entries are shown on the home page; further entries are spare fragments.
import data from './featured.json';

export const featuredTiles = (data as { slug: string; start?: number; duration?: number; source?: 'youtube' | 'file' }[]).slice(0, 6);
