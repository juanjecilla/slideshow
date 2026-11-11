import type { CSSProperties } from 'react';
import { config } from '../deck.config';
import { formatRemaining } from './standbyState';
import { useStandby } from './useStandby';
import './standby.css';

/**
 * Full-screen loading animation for 01.standby, in the Inspector look: the talk scans itself while people sit
 * down. Four phases over progress 0→1, and each one stays on screen (so the completed frame has all four):
 *
 *   0–25%   grid glow spreads from the centre            → blind ✓
 *   25–50%  a bounds box is drawn around each title word → low vision ✓
 *   50–75%  a focus box hops across the screen           → cognitive ✓
 *   75–100% focus settles on the title (Heading)         → motor ✓, "ready"
 *
 * Everything is DOM/SVG and aria-hidden (the live region says "Talk starting."). Frozen runs (capture, reduced
 * motion, print) render progress = 1 and nothing moves.
 */

const WORDS = [['a11y', 'on', 'Android?'], ['AI', 'makes', 'it', 'easy']] as const;
const WORD_COUNT = WORDS.flat().length;

interface Rect { x: number; y: number; w: number; h: number }
const EVENT: Rect = { x: 580, y: 90, w: 760, h: 56 };
const TITLE: Rect = { x: 160, y: 250, w: 1600, h: 310 };
const AUTHOR: Rect = { x: 810, y: 600, w: 300, h: 56 };
const personaRect = (i: number): Rect => ({ x: 430 + i * 270, y: 710, w: 250, h: 96 });
const COUNTDOWN: Rect = { x: 710, y: 860, w: 500, h: 64 };

/** Where the focus box goes, in order, and what it announces. The last stop is the title. */
const HOPS: { rect: Rect; label: string }[] = [
  { rect: EVENT, label: 'Text' },
  { rect: AUTHOR, label: 'Text' },
  { rect: personaRect(0), label: 'Button' },
  { rect: personaRect(1), label: 'Button' },
  { rect: personaRect(2), label: 'Button' },
  { rect: personaRect(3), label: 'Button' },
  { rect: COUNTDOWN, label: 'Live region' },
  { rect: TITLE, label: 'Heading' },
];

const PERSONAS = [
  { name: 'Blind', color: 'var(--blind)', paths: ['M3 3l18 18', 'M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 8.5 4 9.5 6a14 14 0 0 1-2.6 3.3', 'M6.3 7.6C4.3 9 2.9 10.9 2.5 12c1 2 4.5 6 9.5 6 1.4 0 2.7-.3 3.8-.8', 'M9.9 9.9a3 3 0 0 0 4.2 4.2'] },
  { name: 'Low vision', color: 'var(--lowvision)', paths: ['M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z', 'M21 21l-5-5', 'M8 11h6', 'M11 8v6'] },
  { name: 'Cognitive', color: 'var(--cognitive)', paths: ['M9 18h6', 'M10 21h4', 'M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z'] },
  { name: 'Motor', color: 'var(--motor)', paths: ['M9 11V5a1.5 1.5 0 0 1 3 0v6', 'M12 10.5a1.5 1.5 0 0 1 3 0V12', 'M15 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-1a6 6 0 0 1-4.6-2.2L4 16.3a1.6 1.6 0 0 1 2.4-2L9 16.5'] },
];

const abs = (r: Rect): CSSProperties => ({ position: 'absolute', left: r.x, top: r.y, width: r.w, height: r.h });
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function Icon({ paths, size = 44 }: { paths: readonly string[]; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

/** The standby layer. `on` = the standby beat is current; it fades out on the click that starts the talk. */
export function Standby({ on }: { on: boolean }) {
  const s = useStandby(on);
  const { progress: p, mode, frozen } = s;
  const idle = mode === 'idle';

  const grid = clamp01(p / 0.25);
  const bounds = clamp01((p - 0.25) / 0.25);
  const hop = clamp01((p - 0.5) / 0.25);
  const settled = p >= 0.75;
  const stop = settled ? HOPS.length - 1 : Math.min(HOPS.length - 2, Math.floor(hop * (HOPS.length - 1)));
  const focus = HOPS[stop];
  const focusing = p >= 0.5;

  const countdown =
    mode === 'ready' ? 'ready'
    : s.remainingMs != null && mode !== 'loop' ? `starts in ${formatRemaining(s.remainingMs)}`
    : s.done ? 'ready' : 'starting soon';
  const isReady = countdown === 'ready';
  let word = 0;

  return (
    <div className={`sb${frozen ? ' frozen' : ''}`} aria-hidden="true" style={{ opacity: on ? 1 : 0 }}>
      {/* phase 1 — the dot grid lights up from the centre */}
      <div className="sb-grid" style={{ ['--r' as string]: `${(idle ? 280 : 280 + grid * 1000).toFixed(0)}px` }} />

      <div style={{ ...abs(EVENT), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="chip info">{config.event}</span>
      </div>

      {/* phase 2 — a bounds box per word, numbered in reading order like TalkBack's focus order */}
      <div className="sb-title" style={abs(TITLE)}>
        <h1 className="t-statement sb-glow">
          {WORDS.map((line, li) => (
            <span key={li} className="sb-line">
              {line.map((w) => {
                const i = word++;
                const shown = !idle && bounds >= (i + 1) / WORD_COUNT;
                return (
                  <span key={i} className="sb-word">
                    {w}
                    <i className={`sb-bounds${shown ? ' on' : ''}`}><b>{i + 1}</b></i>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
      </div>

      <div style={{ ...abs(AUTHOR), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="chip">{config.author}</span>
      </div>

      {/* each persona checks in at the end of its phase */}
      {PERSONAS.map((x, i) => {
        const checked = !idle && p >= (i + 1) / 4;
        return (
          <div key={x.name} className={`sb-persona${checked ? ' checked' : ''}${idle ? ' hidden' : ''}`} style={{ ...abs(personaRect(i)), ['--c' as string]: x.color }}>
            <Icon paths={x.paths} />
            <span>{x.name}</span>
            <em>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
            </em>
          </div>
        );
      })}

      <div className={`sb-count mono${isReady ? ' ready' : ''}`} style={abs(COUNTDOWN)}>{countdown}</div>

      {/* phases 3–4 — the focus box hops, then settles on the title */}
      <div className={`sb-focus${focusing ? ' on' : ''}`} style={{ left: focus.rect.x - 12, top: focus.rect.y - 12, width: focus.rect.w + 24, height: focus.rect.h + 24 }}>
        <span className="mono">{focus.label}</span>
      </div>

      <div className="sb-bar"><i style={{ width: `${(p * 100).toFixed(2)}%` }} /></div>
    </div>
  );
}
