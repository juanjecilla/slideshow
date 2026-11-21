export interface QuotePart { text: string; em: boolean }

/** Splits `text` around the first case-insensitive match of `emphasis`. No match (or no emphasis) = one plain part. */
export function splitEmphasis(text: string, emphasis?: string): QuotePart[] {
  if (!emphasis) return [{ text, em: false }];
  const at = text.toLowerCase().indexOf(emphasis.toLowerCase());
  if (at < 0) return [{ text, em: false }];
  const end = at + emphasis.length;
  return [
    { text: text.slice(0, at), em: false },
    { text: text.slice(at, end), em: true },
    { text: text.slice(end), em: false },
  ].filter((p) => p.text !== '');
}
