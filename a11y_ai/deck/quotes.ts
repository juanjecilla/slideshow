/**
 * Quotes shown with <Quote> (deck/quote/Quote.tsx). Data only: swap this file to translate the deck.
 * The source URLs live in docs/research.md (R7), not here: the build fails on any remote reference (offline rule).
 * The slide shows `source`, `checked` and, when `attributed`, the caveat.
 */
export interface QuoteData {
  id: string;
  text: string;
  author: string;
  /** Short role or affiliation, shown beside the author. */
  role?: string;
  /** Where the line comes from, shown as the small meta line. Ignored when `attributed`. */
  source: string;
  /** Date the source was last checked (YYYY-MM-DD). Always shown. */
  checked: string;
  /** Substring of `text` drawn in the accent colour: the word the speaker lands on. */
  emphasis?: string;
  /** True when no primary source was found: the meta line says so instead of citing one. */
  attributed?: boolean;
}

export const QUOTES: Record<string, QuoteData> = {
  radabaugh: {
    id: 'radabaugh',
    text: 'For [people] without disabilities, technology makes things easier. For [people] with disabilities, technology makes things possible.',
    author: 'Mary Pat Radabaugh',
    role: 'IBM, 1988',
    source: 'cited by the National Council on Disability, 1993',
    checked: '2026-11-11',
    emphasis: 'possible',
  },
  bjarno: {
    id: 'bjarno',
    text: "When you design for accessibility, you're not limiting your options. You're expanding your audience.",
    author: 'Helle Bjarnø',
    source: 'original source not found',
    checked: '2026-11-11',
    emphasis: 'expanding your audience',
    attributed: true,
  },
};
