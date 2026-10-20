// The portfolio card previews, readable by the private picker page. Generated at build time.
import data from '../../../data/previews.json';

export function GET() {
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
