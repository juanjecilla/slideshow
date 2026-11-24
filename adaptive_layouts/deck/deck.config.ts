/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Adaptive Layouts',
  /** One line under the title. Empty = none. */
  subtitle: 'Adapt or Die',
  author: 'Juanje Cilla',
  role: 'Senior Software Engineer',
  event: 'DevFest Jaén 2026 · GDG Jaén · Online · 21 Nov 2026',
  /** Start time: not published anywhere I could read (checked 2026-11-11). The standby loops until the first click, so it is not needed. */
  slot: '',
  links: {
    muviss: 'github.com/juanjecilla/muviss-kmp',
    adaptive: 'developer.android.com/adaptive-apps',
    canonical: 'developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts',
    m3: 'developer.android.com/develop/ui/compose/layouts/adaptive',
    linktree: 'linktr.ee/juanje.cilla',
  },
  /** Date every link above was last opened and found live. Re-check the week of the talk. */
  linksChecked: '2026-11-11',
  /** Destination of the QR on the closing screen: the English base deck. The Spanish edition `jaen2026` points to its own path. */
  qrUrl: 'https://juanjecilla.github.io/slideshow/adaptive_layouts/',
  /** Shown under the QR, e.g. "example.com/talk". */
  qrLabel: 'juanjecilla.github.io/slideshow/adaptive_layouts',
} as const;
