import { useEffect } from 'react';
import { deck, usePos } from 'beatdeck';
import { SR } from './sr';

type Theme = 'dark' | 'light';
const KEY = 'a11y-ai-theme';

const stored = (): Theme | null => {
  try { const v = localStorage.getItem(KEY); return v === 'dark' || v === 'light' ? v : null; } catch { return null; }
};
const preferred = (): Theme => (typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
const apply = (t: Theme) => { document.documentElement.dataset.theme = t; };

// Applied at import, before the first frame, so the stage never flashes the wrong theme.
apply(stored() ?? preferred());

/** Key T flips dark ↔ light (the opening joke, and a real option). Remembered per browser; works without storage. */
export function ThemeToggle() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key !== 't' && e.key !== 'T') || e.metaKey || e.ctrlKey || e.altKey) return;
      const next: Theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch { /* storage may be blocked: the toggle still works */ }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return null;
}

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
 * The deck's controls for someone who cannot see it or has no keyboard shortcuts in their hands: two real buttons.
 * Hidden until focused (then they appear at the bottom-left), so keyboard users see where they are.
 * `stopPropagation`: the stage advances on any click, and one press must be one step.
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
