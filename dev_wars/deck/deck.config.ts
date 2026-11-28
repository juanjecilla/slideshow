/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  /** One build per locale: English (default, at /) and Spanish (at /es/). The texts live in deck/i18n. */
  locales: ['en', 'es'],
  author: 'Juanje Cilla',
  /** Fill in when the talk is given at an event. Empty = nothing about an event anywhere in the deck. */
  event: '',
  /**
   * Where the clips on "El Ego en el deporte" come from. Never fetched: the clips are bundled with the deck.
   * Shown only in the presenter notes. Checked 2026-11-11.
   */
  clipSources: {
    youtubeTrail: 'https://www.youtube.com/watch?v=2Y3gmYO8TCE',
    driveTrail: 'https://drive.google.com/file/d/1qhPB4Dr05iBmHNNhHUHM8jVQHy6k6qpy/view',
    driveMarathon: 'https://drive.google.com/file/d/1FMKyfudDjwXjGRaoS9r0do1QhmFKoAeM/view',
    driveSpeedProject: 'https://drive.google.com/file/d/1sWFhMhuLHc6xKNxMF8CBPJ0yon_2tncx/view',
  },
  /** Closing QR: decoded from the QR on the original closing slide (a Linktree QR link). */
  qrUrl: 'https://linktr.ee/qr/e00b807c-0ec4-41d2-aee0-d9b0568de362',
  /** Handle shown next to the LinkedIn mark on the closing slide. */
  handle: 'juanjecilla',
} as const;
