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
  /**
   * When the talk starts, ISO with offset (e.g. '2026-11-21T10:00:00+01:00'). The standby screen counts down to
   * it and scans over the last 10 minutes. Empty = no clock: the standby animation just loops.
   * `?start=HH:MM` on the URL overrides it for rehearsals.
   */
  startsAt: '',
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
