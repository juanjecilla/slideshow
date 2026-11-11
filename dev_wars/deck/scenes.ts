import type { BeatDef, SceneDef } from 'beatdeck';
import { config } from './deck.config';
import { SCENE_RANGES, beatsOf, slidesOf } from './model';

const CLIP_NOTES: Record<number, string> = {
  14: `Clips: ${config.clipSources.youtubeTrail} (YouTube, bundled locally) and ${config.clipSources.driveTrail}`,
  15: `Clips: ${config.clipSources.driveMarathon} and ${config.clipSources.driveSpeedProject}`,
};

/** Beat map: scene = section of the original deck, beat = one slide (+ one per click animation of that slide). */
export const SCENES: SceneDef[] = SCENE_RANGES.map((r, scene) => ({
  id: r.id,
  title: r.title,
  beats: slidesOf(scene).flatMap((s): BeatDef[] => {
    const beats: BeatDef[] = [];
    for (let k = 0; k < beatsOf(s); k++) {
      const clip = s.play !== undefined && k === s.play;
      // An animated GIF on screen changes frame between captures: allow that much difference (verify only).
      const gif = s.items.some((i) => i.src?.endsWith('.gif') && (!i.step || k >= i.step));
      beats.push({
        ...(gif ? { tolerance: 3 } : {}),
        name: clip ? `${s.n}: clips` : k === 0 ? `${s.n}` : `${s.n}.${k}`,
        ref: `slide ${s.n}`,
        source: k === 0 ? s.text || undefined : undefined,
        note: clip ? `Starts the clips. ${CLIP_NOTES[s.n]}` : undefined,
      });
    }
    return beats;
  }),
}));
