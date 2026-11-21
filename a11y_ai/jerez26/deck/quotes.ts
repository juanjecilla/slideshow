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
    text: 'Para [las personas] sin discapacidad, la tecnología hace las cosas más fáciles. Para [las personas] con discapacidad, la tecnología las hace posibles.',
    author: 'Mary Pat Radabaugh',
    role: 'IBM, 1988',
    source: 'traducido del inglés; citada por el National Council on Disability, 1993',
    checked: '2026-11-11',
    emphasis: 'posibles',
  },
  bjarno: {
    id: 'bjarno',
    text: 'Cuando diseñas pensando en la accesibilidad, no limitas tus opciones. Amplías tu audiencia.',
    author: 'Helle Bjarnø',
    source: 'traducida del inglés; fuente original no encontrada',
    checked: '2026-11-11',
    emphasis: 'Amplías tu audiencia',
    attributed: true,
  },
};
