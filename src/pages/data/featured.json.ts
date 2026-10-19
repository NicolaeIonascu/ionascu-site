// The live tile configuration, readable by the private picker page. Generated at build time.
import data from '../../data/featured.json';

export function GET() {
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
