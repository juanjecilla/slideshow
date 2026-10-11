/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Turn your app into a skill with App Functions',
  /** One line under the title. Empty = none. */
  subtitle: 'On-device agentic interactions on Android 16+',
  author: 'Juanje Cilla',
  role: 'Software Engineer · Revolut',
  event: 'DevFest Ourense 2026 · GDG Ourense',
  /** Library version every snippet is written against. Re-check 1 week before the talk (see research.md B6). */
  libVersion: '1.0.0-alpha10',
  links: {
    github: 'github.com/juanjecilla',
    linkedin: 'linkedin.com/in/juanje-cilla',
    substack: 'codingpit.substack.com',
    youtube: 'youtube.com/@Welcometolasecta',
  },
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'https://juanjecilla.github.io/slideshow/app_functions/',
  /** Shown on the last slide next to the QR. Live after the deploy on 2026-11-07 (ES copy: .../app_functions/ourense26/). */
  qrLabel: 'juanjecilla.github.io/slideshow/app_functions',
} as const;
