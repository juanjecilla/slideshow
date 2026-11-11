/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Dev Wars - El despertar del ego',
  author: 'Juanje Cilla',
  event: 'Codemotion Madrid 2026',
  /**
   * Where the clips on slides 14 and 15 come from (the original slides link to them). Never fetched: the clips are
   * bundled with the deck. Shown only in the presenter notes. Checked 2026-11-11.
   */
  clipSources: {
    youtubeTrail: 'https://www.youtube.com/watch?v=2Y3gmYO8TCE',
    driveTrail: 'https://drive.google.com/file/d/1qhPB4Dr05iBmHNNhHUHM8jVQHy6k6qpy/view',
    driveMarathon: 'https://drive.google.com/file/d/1FMKyfudDjwXjGRaoS9r0do1QhmFKoAeM/view',
    driveSpeedProject: 'https://drive.google.com/file/d/1sWFhMhuLHc6xKNxMF8CBPJ0yon_2tncx/view',
  },
  /** No QR on the stage: the original has none. */
  qrUrl: 'TODO',
} as const;
