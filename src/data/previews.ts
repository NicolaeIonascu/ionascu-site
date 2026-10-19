// Hover previews of the portfolio cards: a YouTube fragment per project, edited in /crm/ ("Select video fragment").
// previews.json: { "<project slug>": { "start": seconds, "duration": seconds } }
import data from './previews.json';

export const previews = data as Record<string, { start: number; duration?: number }>;
