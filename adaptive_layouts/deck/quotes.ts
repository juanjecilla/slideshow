/**
 * Quotes shown with <Quote> (deck/quote/Quote.tsx). Data only.
 * The base deck is in English: `text` is the verbatim quote. (The Spanish edition `jaen2026` shows a translation in `text` and the English in `original`.)
 * The source URLs live in docs/research.md, not here: the build fails on any remote reference (offline rule).
 */
export interface QuoteData {
  id: string;
  /** What is read on stage. */
  text: string;
  /** Verbatim original, shown small. */
  original?: string;
  author: string;
  /** Short role or affiliation, shown beside the author. */
  role?: string;
  /** Where the line comes from, shown as the small meta line. Ignored when `attributed`. */
  source: string;
  /** Date the source was last checked (YYYY-MM-DD). Always shown. */
  checked: string;
  /** Substring of `text` drawn in the accent colour: the phrase the speaker lands on. */
  emphasis?: string;
  /** True when no primary source was found: the meta line says so instead of citing one. */
  attributed?: boolean;
}

export const QUOTES: Record<string, QuoteData> = {
  android37: {
    id: 'android37',
    text: 'When you target API level 37, your app must be capable of adapting to a variety of display sizes.',
    author: 'Fahd Imtiaz',
    role: 'Android Developers Blog',
    source: 'Adaptive development for the expanding Android ecosystem, 19 May 2026',
    checked: '2026-11-11',
    emphasis: 'must be capable of adapting',
  },
};
