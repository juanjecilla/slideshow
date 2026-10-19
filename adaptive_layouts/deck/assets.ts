/**
 * Captures and clips of Muviss desktop, taken from `main` (commit 2d2c7e40) with an isolated data directory, so
 * no personal library appears. Frames are composed on a neutral canvas: no desktop behind the window.
 * Imported, so Vite fingerprints and bundles them and the deck works offline. How they were made: tools/muviss_cap.py.
 * Posters and data come from TMDB (credit on 1.7 and in docs/CONTENT-AUDIT.md).
 */
import detailCompact from './assets/muviss-detail-compact.png';
import detailExpanded from './assets/muviss-detail-expanded.png';
import railCompact from './assets/muviss-rail-compact.png';
import railExpanded from './assets/muviss-rail-expanded.png';
import videoDetail from './assets/muviss-detail.mp4';
import videoFull from './assets/muviss-full.mp4';
import videoGrid from './assets/muviss-grid.mp4';
import videoKeys from './assets/muviss-keys.mp4';
import videoRail from './assets/muviss-rail.mp4';

export const CAP = { railCompact, railExpanded, detailCompact, detailExpanded, videoRail, videoDetail, videoGrid, videoKeys, videoFull } as const;

/** Stage boxes with the captures' real proportions: window 480×800 pt (compact), 1100×720 pt (expanded and clips). */
export const BOX = {
  compact: { w: 444, h: 740 },
  expanded: { w: 1131, h: 740 },
  clip: { w: 1222, h: 800 },
} as const;
