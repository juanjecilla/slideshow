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

/** Announces each beat to screen readers from deck/sr.ts. Polite, atomic, never the speaker notes. */
export function LiveRegion() {
  const { s, b } = usePos();
  const scene = deck.scenes[s];
  const beat = scene?.beats[b];
  const text = scene && beat ? (SR[`${scene.id}.${beat.name}`] ?? `${scene.title}, ${beat.name}`) : '';
  return <div role="status" aria-live="polite" aria-atomic="true" data-audit="off" style={hidden}>{text}</div>;
}
