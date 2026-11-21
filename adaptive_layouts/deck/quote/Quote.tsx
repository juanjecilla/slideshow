import { Reveal } from 'beatdeck';
import type { QuoteData } from '../quotes';
import { splitEmphasis } from './emphasis';
import './quote.css';

interface Props {
  quote: QuoteData;
  on: boolean;
  out?: boolean;
  x?: number;
  y?: number;
  /** Font size of the quote text in px (default 72). */
  size?: number;
}

/**
 * An attributed quote for any beat: big wrapping text, one emphasised phrase, author, and a small source line.
 * The source line is always there. When `quote.attributed` is set (no primary source found) it says so instead
 * of citing one, with the check date, so the slide never looks better sourced than it is.
 *
 * Semantics: <figure><blockquote>…</blockquote><figcaption>…</figcaption></figure>. The stage is hidden from
 * assistive tech (the live region reads deck/sr.ts), so this is for portability, not for the deck's own a11y.
 * Motion: the whole figure rides one Reveal; the caption fades in 600 ms later with a CSS transition (reduced
 * motion is handled by the engine). Tokens only (--accent, --ink, --ink-2), so both themes work.
 */
export function Quote({ quote, on, out, x = 210, y = 200, size }: Props) {
  const parts = splitEmphasis(quote.text, quote.emphasis);
  const meta = quote.attributed
    ? `Attributed to ${quote.author} · original source not found (checked ${quote.checked})`
    : `${quote.source} · checked ${quote.checked}`;
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <figure className="quote">
        <span className="quote-glyph" aria-hidden="true">“</span>
        <blockquote className="quote-text t-editorial" style={size ? { fontSize: size } : undefined}>
          {parts.map((p, i) => (p.em ? <span key={i} className="quote-em">{p.text}</span> : p.text))}
        </blockquote>
        <figcaption className="quote-caption" style={{ opacity: on ? 1 : 0 }}>
          <span className="quote-author">{quote.author}</span>
          {quote.role && !quote.attributed && <span className="quote-role"> · {quote.role}</span>}
          {quote.original && <span className="quote-original" lang="en">Original: “{quote.original}”</span>}
          <span className="quote-meta t-meta">{meta}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
