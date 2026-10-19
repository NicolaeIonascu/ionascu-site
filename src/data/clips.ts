// Short silent MP4 clips cut from your YouTube videos by the CRM (public/clips/<slug>-<start>-<duration>.mp4).
// Build/dev-time only: returns the clip URL when the file exists.
import fs from 'node:fs';
import path from 'node:path';

// A clip made from the chosen fragment wins. For videos YouTube will not hand to the clip maker there is an older short
// preview in public/clips-fallback/<slug>.mp4 (a fixed fragment, used only when no clip could be made).
export function clipFor(slug: string, start: number, duration: number): string | undefined {
  const name = `${slug}-${start}-${duration}.mp4`;
  if (fs.existsSync(path.join(process.cwd(), 'public', 'clips', name))) return `/clips/${name}`;
  if (fs.existsSync(path.join(process.cwd(), 'public', 'clips-fallback', `${slug}.mp4`))) return `/clips-fallback/${slug}.mp4`;
  return undefined;
}
