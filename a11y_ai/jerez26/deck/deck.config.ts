/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: '¿a11y en Android? Ahora es fácil con la IA',
  /** One line under the title. Empty = none. */
  subtitle: 'De las auditorías con IA a la inferencia en el dispositivo',
  author: 'Juanje Cilla',
  role: 'Ingeniero de software · Revolut',
  event: 'DevFest Jerez de la Frontera 2026 · 21 nov 2026',
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
  /** Destination of the QR on the closing screen: the toolkit repo. Public since 2026-11-21. */
  qrUrl: 'https://github.com/juanjecilla/hephaestus',
  /** Shown under the QR. */
  qrLabel: 'github.com/juanjecilla/hephaestus',
} as const;
