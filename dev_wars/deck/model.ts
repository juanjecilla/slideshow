import type { SlideData } from './slides.types';
import { SLIDES } from './slides.gen';

/**
 * The talk is the Google Slides deck as presented at Codemotion Madrid 2026, without the event branding and without its
 * closing feedback-QR slide (76): 75 slides, grouped into 8 scenes by its own sections
 * (keys 1-8 jump between them). One slide = one beat; an entrance animation of the original = one more beat of
 * that slide; the slides with clips get one extra beat that starts them (in the original the poster links to the clip).
 */
export const SCENE_RANGES = [
  { id: '01', title: 'Prólogo', from: 1, to: 8 },
  { id: '02', title: 'El conflicto galáctico', from: 9, to: 16 },
  { id: '03', title: 'Opiniones opinionadas', from: 17, to: 31 },
  { id: '04', title: 'El templo de la sabiduría', from: 32, to: 40 },
  { id: '05', title: 'El arquitecto de marfil', from: 41, to: 53 },
  { id: '06', title: 'El lado oscuro del liderazgo', from: 54, to: 68 },
  { id: '07', title: 'Una nueva esperanza', from: 69, to: 73 },
  { id: '08', title: 'Cierre', from: 74, to: 75 },
] as const;

/** Beats a slide takes: the slide itself + its click animations (+ the clip-start beat). */
export const beatsOf = (s: SlideData): number => (s.play ? s.play + 1 : s.steps + 1);

export const slidesOf = (scene: number): SlideData[] => {
  const r = SCENE_RANGES[scene];
  return SLIDES.filter((s) => s.n >= r.from && s.n <= r.to);
};

/** Which slide, and which beat inside it, a scene-local beat index points at. */
export function locate(scene: number, b: number): { slide: SlideData; local: number } | null {
  let at = 0;
  for (const slide of slidesOf(scene)) {
    const n = beatsOf(slide);
    if (b >= at && b < at + n) return { slide, local: b - at };
    at += n;
  }
  return null;
}
