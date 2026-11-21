import { useEffect, useState } from 'react';
import { flags, reducedMotion, Reveal } from 'beatdeck';
import { DEVICES } from './devices';
import './visuals.css';

/** Verify/screenshots (`?capture=1`) and reduced motion: one still frame, nothing loops. */
const useStill = () => flags.capture || reducedMotion.get();

/**
 * The devices, one beat each. Beat k (0-based) brings device k to the middle, large and named; the ones before it
 * shrink into a row along the bottom. After the last, the final beat (k = N) lays all of them out as a grid.
 * Position, scale and opacity are CSS transitions on one transform, so each hop is a single smooth move.
 */
export function DeviceStory({ k, show }: { k: number; show: boolean }) {
  const N = DEVICES.length;
  const final = k >= N;
  const cols = Math.ceil(N / 2);
  return (
    <div className="ds" style={{ opacity: show ? 1 : 0 }} aria-hidden="true" data-audit="off">
      {DEVICES.map((d, i) => {
        let x: number, y: number, s: number, o: number, label = 0;
        if (final) {
          const row = Math.floor(i / cols), col = i % cols, inRow = row === 0 ? cols : N - cols;
          const gap = 300;
          x = 960 + (col - (inRow - 1) / 2) * gap; y = 420 + row * 330; s = 1.15; o = 1; label = 1;
        } else if (i === k) { x = 960; y = 410; s = 2.3; o = 1; label = 1; }
        else if (i < k) { x = 960 + (i - (Math.min(k, N) - 1) / 2) * Math.min(150, 1500 / N); y = 910; s = 0.62; o = 1; }
        else { x = 960; y = 520; s = 1.2; o = 0; }
        return (
          <div key={d.id} className="ds-item" style={{ transform: `translate(${x - 100}px, ${y - 100}px) scale(${s})`, opacity: o }}>
            <svg viewBox="0 0 200 200" width="200" height="200">{d.icon}</svg>
            <div className="ds-label" style={{ opacity: label, transform: `scale(${1 / s})` }}>{d.name}</div>
          </div>
        );
      })}
      {!final && k >= 0 && k < N && (
        <div className="ds-sub t-meta" key={k}>{DEVICES[k].sub}</div>
      )}
    </div>
  );
}

/** A tiny app: a poster, a title and lines. Everything is drawn in units of `u` so it can be zoomed or its text grown. */
export function AppMock({ f = 1, text = false, w = 300, h = 420 }: { f?: number; text?: boolean; w?: number; h?: number }) {
  return (
    <div className="am" style={{ width: w, height: h }} data-audit="off">
      <div className="am-bar" style={{ height: 30 * f }} />
      <div style={{ padding: 14 * f, display: 'flex', flexDirection: 'column', gap: 12 * f }}>
        {text ? (
          <>
            <div className="am-t" style={{ fontSize: 26 * f }}>Muviss</div>
            <div className="am-p" style={{ fontSize: 20 * f }}>Series y películas que quieres ver, todas en un solo sitio.</div>
          </>
        ) : (
          <>
            <div style={{ height: 70 * f, background: 'var(--ochre)', borderRadius: 6 * f }} />
            <div className="am-l" style={{ height: 14 * f, width: '90%', background: 'var(--accent)' }} />
            <div className="am-l" style={{ height: 14 * f, width: '100%' }} />
            <div className="am-l" style={{ height: 14 * f, width: '70%' }} />
            <div style={{ height: 46 * f, background: 'var(--ink)', borderRadius: 8 * f, marginTop: 4 * f }} />
            <div className="am-l" style={{ height: 14 * f, width: '100%' }} />
            <div className="am-l" style={{ height: 14 * f, width: '60%' }} />
          </>
        )}
      </div>
    </div>
  );
}

/** Foldable poses, drawn from the side: closed, open flat, half-folded (tabletop). */
export function Poses({ on, out, y = 560 }: { on: boolean; out?: boolean; y?: number }) {
  const S = { stroke: 'var(--ink)', strokeWidth: 9, strokeLinejoin: 'round', strokeLinecap: 'round', fill: 'var(--surface)' } as const;
  const hinge = <circle r="7" fill="var(--ochre)" />;
  const items = [
    { name: 'Cerrado', svg: <><rect x="-90" y="-16" width="180" height="14" rx="6" {...S} /><rect x="-90" y="-2" width="180" height="14" rx="6" {...S} /></> },
    { name: 'Abierto', svg: <><rect x="-130" y="-8" width="130" height="16" rx="6" {...S} /><rect x="0" y="-8" width="130" height="16" rx="6" {...S} /><g>{hinge}</g></> },
    { name: 'Doblado', svg: <><rect x="-120" y="0" width="120" height="16" rx="6" {...S} /><g transform="rotate(-100)"><rect x="0" y="0" width="120" height="16" rx="6" {...S} /></g><g>{hinge}</g></> },
  ];
  return (
    <>
      {items.map((it, i) => (
        <Reveal key={it.name} on={on} out={out} x={150 + i * 560} y={y}>
          <svg width="500" height="260" viewBox="-250 -170 500 260" aria-hidden="true">{it.svg}</svg>
          <div className="say-sm">{it.name}</div>
        </Reveal>
      ))}
    </>
  );
}

/** Three ways several apps share a screen, as the platform names them. */
export function WindowModes({ on, out, y = 560 }: { on: boolean; out?: boolean; y?: number }) {
  const W = { stroke: 'var(--ink)', strokeWidth: 7, fill: 'var(--surface)', strokeLinejoin: 'round' } as const;
  const modes = [
    { name: 'Pantalla dividida', svg: <><rect x="10" y="10" width="280" height="170" rx="10" {...W} /><path d="M150 10 V180" stroke="var(--ink)" strokeWidth="7" /><rect x="22" y="26" width="116" height="22" rx="5" fill="var(--ochre)" /><rect x="162" y="26" width="116" height="22" rx="5" fill="var(--accent)" /></> },
    { name: 'Ventanas libres', svg: <><rect x="10" y="10" width="280" height="170" rx="10" {...W} /><rect x="30" y="34" width="150" height="100" rx="8" {...W} /><rect x="120" y="70" width="150" height="90" rx="8" {...W} fill="var(--bg)" /><rect x="34" y="38" width="142" height="16" fill="var(--ochre)" /><rect x="124" y="74" width="142" height="16" fill="var(--accent)" /></> },
    { name: 'Imagen en imagen', svg: <><rect x="10" y="10" width="280" height="170" rx="10" {...W} /><rect x="24" y="24" width="252" height="142" rx="6" fill="var(--hair)" stroke="none" /><rect x="188" y="108" width="84" height="54" rx="6" {...W} fill="var(--bg)" /><rect x="192" y="112" width="76" height="12" fill="var(--accent)" /></> },
  ];
  return (
    <>
      {modes.map((m, i) => (
        <Reveal key={m.name} on={on} out={out} x={150 + i * 560} y={y}>
          <svg width="500" height="300" viewBox="0 0 300 190" aria-hidden="true">{m.svg}</svg>
          <div className="say-sm">{m.name}</div>
        </Reveal>
      ))}
    </>
  );
}

/**
 * A window whose width keeps changing next to a second app, and an app that reacts with real container queries:
 * wide = list and detail side by side, narrow = list only, tiny = one stacked column. Loops; still frame = wide.
 */
export function ResizeDemo({ on, out, x = 210, y = 330 }: { on: boolean; out?: boolean; x?: number; y?: number }) {
  const still = useStill();
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className={`rd${still ? ' rd-still' : ''}`} aria-hidden="true" data-audit="off">
        <div className="rd-a">
          <div className="rd-app">
            <div className="rd-list"><i /><i /><i /><i /></div>
            <div className="rd-detail"><b /><i /><i /><i /></div>
          </div>
          <div className="rd-name t-meta">Tu app</div>
        </div>
        <div className="rd-split" />
        <div className="rd-b"><div className="rd-other"><i /><i /><i /></div><div className="rd-name t-meta">Otra app</div></div>
      </div>
    </Reveal>
  );
}

const PICK = {
  d: DEVICES.map((d) => d.name),
  c: ['Vertical', 'Horizontal', 'Zoom 1x', 'Zoom 3x', 'Fuente 1x', 'Fuente 2x'],
  s: ['Abierto', 'Cerrado', 'Doblado', 'Ajuste de tamaño', 'Pantalla dividida', 'Ventana libre'],
} as const;

/** Dispositivos × Contexto × Estado: three reels that keep landing on a new combination. Still frame = one fixed combination. */
export function Combinatorics({ on, out }: { on: boolean; out?: boolean }) {
  const still = useStill();
  const [t, setT] = useState(0);
  useEffect(() => {
    if (still || !on || out) return;
    const id = setInterval(() => setT((n) => n + 1), 1100);
    return () => clearInterval(id);
  }, [still, on, out]);
  const pick = (arr: readonly string[], salt: number) => arr[(t * salt + (salt * 3)) % arr.length];
  const reels = [
    { title: 'Dispositivo', v: pick(PICK.d, 1) },
    { title: 'Contexto', v: pick(PICK.c, 5) },
    { title: 'Estado', v: pick(PICK.s, 7) },
  ];
  return (
    <Reveal on={on} out={out} x={150} y={400}>
      <div className="cb" aria-hidden="true" data-audit="off">
        {reels.map((r, i) => (
          <div key={r.title} className="cb-reel">
            <div className="cb-title t-meta">{r.title}</div>
            <div className="cb-val" key={`${i}-${r.v}-${still ? 0 : t}`}>{r.v}</div>
            {i < 2 && <div className="cb-x">×</div>}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
