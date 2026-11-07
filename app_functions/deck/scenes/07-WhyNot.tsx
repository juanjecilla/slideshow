import { Reveal, Scene, useScene } from 'beatdeck';
import { Eyebrow, G, Statement } from '../ui';

const COLS = ['headless', 'discoverable', 'typed', 'OS permission', 'no network'];
type M = '✓' | '✗' | '~';
const ROWS: { name: string; v: M[]; hot?: boolean }[] = [
  { name: 'Intent / deep link', v: ['✗', '✗', '✗', '✗', '✓'] },
  { name: 'Bound Service + AIDL', v: ['✓', '✗', '~', '~', '✓'] },
  { name: 'Remote MCP server', v: ['✓', '✓', '✓', '✗', '✗'] },
  { name: 'Foreground Service', v: ['~', '✗', '✗', '✗', '✓'] },
  { name: 'AppFunctions', v: ['✓', '✓', '✓', '✓', '✓'], hot: true },
];
const COLOR: Record<M, string> = { '✓': 'var(--accent)', '✗': 'var(--fault)', '~': 'var(--warning)' };

function WhyNot_() {
  const { here, b } = useScene();
  return (
    <>
      <Eyebrow on={here}>why not just…</Eyebrow>
      <Statement on={here && b === 0} out={here && b > 0} y={330} size={190}>Why not<br />just…?</Statement>

      {COLS.map((c, i) => (
        <Reveal key={c} on={here && b >= 1} x={720 + i * 224} y={210}>
          <div className="t-meta" style={{ fontSize: 20, width: 224, textAlign: 'center' }}>{c}</div>
        </Reveal>
      ))}
      {ROWS.map((r, i) => (
        <Reveal key={r.name} on={here && b >= i + 1} x={150} y={290 + i * 130}>
          <div style={{ display: 'flex', alignItems: 'center', height: 90 }}>
            <div style={{ width: 570, fontSize: 38, fontWeight: r.hot ? 700 : 500, color: r.hot ? 'var(--accent)' : 'var(--ink)' }}>{r.name}</div>
            {r.v.map((m, k) => (
              <div key={k} style={{ width: 224, textAlign: 'center', fontSize: 52, color: COLOR[m] }}>{m}</div>
            ))}
          </div>
        </Reveal>
      ))}
      <Reveal on={here && b >= 5} x={150} y={960}>
        <div className="t-meta" style={{ fontSize: 22 }}><G>✓</G> yes · <span style={{ color: 'var(--warning)' }}>~</span> partly · <span style={{ color: 'var(--fault)' }}>✗</span> no</div>
      </Reveal>
    </>
  );
}

/** 07 WHY NOT — comparison, one row per beat. */
export const WhyNot = () => <Scene index={6}><WhyNot_ /></Scene>;
