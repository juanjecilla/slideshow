import { CONTENT } from './content';

/** Scene id → tone (themes/poster.css). Declared per scene in content.ts. */
export const TONES: Record<string, string> = Object.fromEntries(CONTENT.map((s) => [s.id, s.tone]));
/** Scene indexes that carry no giant numeral behind the content. */
export const NO_NUMERAL = CONTENT.map((s, i) => (s.numeral === false ? i : -1)).filter((i) => i >= 0);
