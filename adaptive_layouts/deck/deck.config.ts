/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Adaptive Layouts',
  /** One line under the title. Empty = none. */
  subtitle: 'Adaptarse o Morir',
  author: 'Juanje Cilla',
  /** Destination of the QR on the closing screen. Where the talk is deployed (D9); confirm after the first deploy. */
  qrUrl: 'https://juanjecilla.github.io/slideshow/adaptive_layouts/',
  /** Shown under the QR, e.g. "example.com/talk". */
  qrLabel: 'juanjecilla.github.io/slideshow/adaptive_layouts',
} as const;
