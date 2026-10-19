/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'a11y on Android? AI makes it easy',
  /** One line under the title. Empty = none. */
  subtitle: 'From AI-driven audits to on-device inference',
  author: 'Juanje Cilla',
  role: 'Software Engineer · Revolut',
  event: 'DevFest Jerez de la Frontera 2026 · 21 Nov 2026',
  links: {
    github: 'github.com/juanjecilla',
    linkedin: 'linkedin.com/in/juanje-cilla',
    substack: 'codingpit.substack.com',
    youtube: 'youtube.com/@Welcometolasecta',
  },
  /** Destination of the QR on the closing screen: the toolkit repo. Private until 2026-11-21 (see docs/RELEASE-CHECKLIST). */
  qrUrl: 'https://github.com/juanjecilla/hephaestus',
  /** Shown under the QR. */
  qrLabel: 'github.com/juanjecilla/hephaestus',
} as const;
