/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: '(progr)Amar en tiempos revueltos',
  /** One line under the title. Empty = none. */
  subtitle: '',
  author: 'Juanje Cilla',
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'TODO',
  /** Shown under the QR, e.g. "example.com/talk". */
  qrLabel: '',
} as const;
