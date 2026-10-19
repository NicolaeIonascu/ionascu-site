// Dev-machine helper: cuts a short, silent, small MP4 out of one of your own YouTube videos (public/clips/<slug>-<start>-<duration>.mp4).
// Needs yt-dlp (python -m yt_dlp) and ffmpeg (./.tools/ffmpeg.exe, or any ffmpeg on the PATH). Used by the CRM through the dev server only.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const clipsDir = path.join(root, 'public', 'clips');
export const clipName = (slug, start, duration) => `${slug}-${start}-${duration}.mp4`;

const ffmpeg = () => {
  const local = path.join(root, '.tools', 'ffmpeg.exe');
  return fs.existsSync(local) ? local : 'ffmpeg';
};

export async function makeClip({ slug, id, start, duration }) {
  const out = path.join(clipsDir, clipName(slug, start, duration));
  if (fs.existsSync(out)) return 'exists';
  fs.mkdirSync(clipsDir, { recursive: true });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'clip-'));
  try {
    // the section is cut with re-encoded cut points, so it starts exactly at the chosen second
    await run('python', [
      '-m', 'yt_dlp', '-q', '--no-warnings', '--no-playlist',
      '-f', 'bv*[height<=720]/b[height<=720]',
      '--download-sections', `*${start}-${start + duration}`, '--force-keyframes-at-cuts',
      '--ffmpeg-location', ffmpeg(),
      '-o', path.join(tmp, 'raw.%(ext)s'),
      `https://www.youtube.com/watch?v=${id}`,
    ], { maxBuffer: 1 << 26, timeout: 240000 });
    const raw = fs.readdirSync(tmp).find((f) => f.startsWith('raw.'));
    if (!raw) throw new Error('download failed');
    await run(ffmpeg(), [
      '-y', '-loglevel', 'error', '-i', path.join(tmp, raw), '-t', String(duration), '-an',
      '-vf', 'scale=854:-2', '-c:v', 'libx264', '-crf', '27', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out,
    ], { timeout: 120000 });
    return 'made';
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

// builds the missing clips and deletes the ones nobody refers to any more
export async function syncClips(list) {
  const wanted = new Map();
  for (const c of list) wanted.set(clipName(c.slug, c.start, c.duration), c);
  let made = 0;
  const failed = [];
  for (const c of wanted.values()) {
    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) { // YouTube sometimes refuses a request once; try again
      try { if ((await makeClip(c)) === 'made') made++; ok = true; } catch (e) { console.log('[crm] clip ' + c.slug + ' attempt ' + attempt + ' failed: ' + String(e.message || e).split(String.fromCharCode(10)).filter(Boolean).slice(-2).join(' | ').slice(0, 300)); }
    }
    if (!ok) failed.push(c.slug);
  }
  if (fs.existsSync(clipsDir)) {
    for (const f of fs.readdirSync(clipsDir)) if (f.endsWith('.mp4') && !wanted.has(f)) fs.rmSync(path.join(clipsDir, f), { force: true });
  }
  return { made, failed };
}
