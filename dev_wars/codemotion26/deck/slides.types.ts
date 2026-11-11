/** Shapes of the data in slides.gen.ts (written by tools/pptx_to_deck.py). Geometry is in stage pixels (1920x1080). */
export interface Box { x: number; y: number; w: number; h: number; rot?: number; flipH?: boolean; flipV?: boolean }

export interface Run {
  t: string; sz: number; b?: boolean; i?: boolean; u?: boolean; c: string; font: string; cap?: string;
}
export interface Para {
  algn: 'left' | 'center' | 'right' | 'justify';
  marL: number; indent: number; before: number; after: number; line: number;
  bullet: { ch: string; sz: number; c: string } | null;
  runs: Run[];
}
export interface TextData { anchor: 'start' | 'center' | 'end'; ins: [number, number, number, number]; paras: Para[] }

export interface ItemData {
  id: string;
  kind: 'img' | 'video' | 'shape';
  box: Box;
  /** img/video poster file in deck/assets */
  src?: string;
  crop?: [number, number, number, number];
  alt?: string;
  /** video file name in deck/assets/video */
  video?: string;
  url?: string;
  link?: string;
  geom?: string;
  adj?: number;
  fill?: string;
  line?: { c: string; w: number };
  text?: TextData;
  role?: string;
  /** click on which the item appears (1-based); absent = visible from the start of the slide */
  step?: number;
}
export type Bg = { color: string } | { img: string };
export interface LayoutData { id: string; name: string; bg: Bg; items: ItemData[] }
export interface SlideData {
  n: number; layout: string; steps: number; items: ItemData[]; bg?: Bg;
  /** beat (inside the slide) that starts the clips, when the slide has any */
  play?: number;
  text: string;
}
