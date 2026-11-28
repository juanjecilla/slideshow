import { CONTENT } from './content';

/** Scene id → tone (themes/poster.css). Declared per scene in content.ts. */
export const TONES: Record<string, string> = Object.fromEntries(CONTENT.map((s) => [s.id, s.tone]));
/** Scene index → the giant numeral behind its cover: the chapter's own number. Other scenes carry none. */
export const NUMERALS: Record<number, string> = Object.fromEntries(
  CONTENT.flatMap((s, i) => s.beats.flatMap((b) => (b.v.kind === 'chapter' ? [[i, b.v.n.replace(/\D/g, '')] as const] : []))),
);
