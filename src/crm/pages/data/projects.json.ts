// Project list for the private picker page (/portfolio-short-select/). Generated at build time.
import fs from 'node:fs';
import path from 'node:path';
import { projects } from '../../../data/projects';

export function GET() {
  const body = projects.map((p) => ({
    slug: p.slug,
    name: `${p.brand}${p.product ? ' ' + p.product : ''}`,
    id: p.youtube,
  }));
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } });
}
