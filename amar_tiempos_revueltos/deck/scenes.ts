import type { SceneDef } from 'beatdeck';
import { CONTENT } from './content';

/**
 * The beat map, derived from content.ts (the single source of the copy). One click = one beat.
 * `ref` = id in docs/research.md (R*, A*) or docs/DECISIONS.md (D*); `note` = speaker cue, never announced.
 */
export const SCENES: SceneDef[] = CONTENT.map((s) => ({
  id: s.id,
  title: s.title,
  beats: s.beats.map((b) => ({ name: b.name, ref: b.ref, note: b.note })),
}));
