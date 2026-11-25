import { CAST, STANDBY } from '../content';
import { formatRemaining } from './standbyState';
import { useStandby } from './useStandby';
import './standby.css';

/**
 * 1.1: what loops while people sit down. Two prototypes (D21), picked with ?standby=a|b; delete the loser.
 *   a · "Next episode": headlines of the turbulent times → the cast → today's title.
 *   b · "Test card": the cast as colour bars, the title on the band, headlines and fears rotating under it.
 * Progress 0→1 comes from standbyState (pure clock). Frozen runs (capture, reduced motion, print) render
 * progress = 1, so screenshots are deterministic. Visuals are hidden from assistive tech with the rest of the stage.
 */

const VARIANT: 'a' | 'b' = new URLSearchParams(location.search).get('standby') === 'b' ? 'b' : 'a';

/** Which of `n` equal slices `p` (0..1) is in. */
const slice = (p: number, n: number) => Math.min(n - 1, Math.max(0, Math.floor(p * n)));

interface Props { on: boolean; eyebrow: string; line?: string }

export function Standby({ on, eyebrow, line }: Props) {
  const st = useStandby(on);
  if (!on) return null;
  const foot = (
    <div className="sb-foot t-meta">
      <span>{eyebrow}{line ? ` · ${line}` : ''}</span>
      <span>{st.remainingMs != null && st.remainingMs > 0 ? formatRemaining(st.remainingMs) : STANDBY.soon}</span>
    </div>
  );
  return (
    <div className={`sb sb-${VARIANT}${st.frozen ? ' frozen' : ''}`}>
      {VARIANT === 'a' ? <NextEpisode p={st.progress} /> : <TestCard p={st.progress} />}
      {foot}
    </div>
  );
}

function Headline({ i }: { i: number }) {
  const h = STANDBY.headlines[i];
  return (
    <div key={i} className="sb-in">
      <div className="t-statement sb-head">{h.text}</div>
      <div className="t-editorial sb-sub">{h.sub}</div>
      <div className="t-meta sb-source">{h.source}</div>
    </div>
  );
}

function Title({ size }: { size: number }) {
  return (
    <div className="t-statement" style={{ fontSize: size }}>
      <div>(progr)Amar</div>
      <div style={{ color: 'var(--accent)' }}>en tiempos revueltos</div>
    </div>
  );
}

/** Headlines (0–50%) → cast (50–75%) → title card (75–100%, held at the end of the loop). */
function NextEpisode({ p }: { p: number }) {
  if (p < 0.5) {
    const i = slice(p / 0.5, STANDBY.headlines.length);
    return (
      <>
        <div className="sb-at t-eyebrow" style={{ top: 150 }}>{STANDBY.previously}</div>
        <div className="sb-at" style={{ top: 300 }}><Headline i={i} /></div>
        <div className="sb-at sb-dots" style={{ top: 860 }}>
          {STANDBY.headlines.map((h, k) => <i key={h.text} className={k === i ? 'on' : ''} />)}
        </div>
      </>
    );
  }
  if (p < 0.75) {
    const shown = slice((p - 0.5) / 0.25, CAST.length + 1) + 1;
    return (
      <>
        <div className="sb-at t-eyebrow" style={{ top: 150 }}>{STANDBY.castTitle}</div>
        {CAST.map((name, k) => (k < shown ? (
          <div key={name} className={`sb-at sb-card sb-tone-${k} sb-in`} style={{ top: 220 + k * 132, left: 150 + k * 90 }}>
            <div className="t-statement" style={{ fontSize: 72 }}>{name}</div>
          </div>
        ) : null))}
      </>
    );
  }
  return (
    <>
      <div className="sb-at t-eyebrow" style={{ top: 250 }}>{STANDBY.today}</div>
      <div className="sb-at sb-in" style={{ top: 330 }}><Title size={150} /></div>
    </>
  );
}

/** Bars stay; under the band, headlines and fears take turns. */
function TestCard({ p }: { p: number }) {
  const i = slice(p, STANDBY.headlines.length);
  const lit = slice(p * STANDBY.headlines.length - i, 2);
  return (
    <>
      <div className="sb-bars">
        {CAST.map((name, k) => <div key={name} className={`sb-bar sb-tone-${k}`}><span className="t-meta">{name}</span></div>)}
      </div>
      <div className="sb-band"><Title size={104} /></div>
      <div className="sb-at" style={{ top: 640 }}>
        {lit === 0 ? <Headline i={i} /> : (
          <div key={`fear-${i}`} className="sb-in"><div className="t-statement sb-head">{STANDBY.fears[i % STANDBY.fears.length]}</div></div>
        )}
      </div>
    </>
  );
}

