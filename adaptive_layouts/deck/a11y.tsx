import { deck, usePos } from 'beatdeck';
import { SR } from './sr';

const hidden = {
  position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden',
  clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0, fontSize: 18,
} as const;

/**
 * Everything drawn on the stage is a picture of the talk: every scene layer stays mounted (opacity only), so a
 * screen reader would read the whole deck at once. Hide the pictures; [LiveRegion] and [SrNav] are the text equivalent.
 * `display: contents` keeps the layers' absolute layout untouched.
 */
export function StagePicture({ children }: { children: React.ReactNode }) {
  return <div aria-hidden="true" style={{ display: 'contents' }}>{children}</div>;
}

/** Announces each beat to screen readers from deck/sr.ts. Polite, atomic, never the speaker notes. */
export function LiveRegion() {
  const { s, b } = usePos();
  const scene = deck.scenes[s];
  const beat = scene?.beats[b];
  const authored = scene && beat ? SR[`${scene.id}.${beat.name}`] : undefined;
  const text = scene && beat ? (authored ?? `${scene.title}, ${beat.name}`) : '';
  const where = scene && beat ? ` Scene ${scene.id}, step ${b + 1} of ${scene.beats.length}.` : '';
  return (
    <div role="status" aria-live="polite" aria-atomic="true" data-audit="off" data-source={authored ? 'sr' : 'fallback'} style={hidden}>
      {text}
      {where}
    </div>
  );
}

/**
 * Controls for someone who cannot see the deck or has no shortcuts at hand: two real buttons.
 * Hidden until focused (then they appear at the bottom-left). `stopPropagation`: the stage advances on any
 * click, and one press must be one step.
 */
export function SrNav() {
  const press = (go: () => void) => (e: React.MouseEvent) => { e.stopPropagation(); go(); };
  return (
    <div className="sr-nav" data-audit="off">
      <button type="button" onClick={press(() => deck.prev())}>Previous step</button>
      <button type="button" onClick={press(() => deck.next())}>Next step</button>
    </div>
  );
}
