import { NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';
import { Eyebrow, G, Statement } from '../ui';

const W = 380;
const node = (i: number): Rect => ({ x: 150 + i * 440, y: 330, w: W, h: 140 });

const ITEMS = [
  { kind: '2018', name: 'Slices', what: 'Remote UI templates rendered inside Search and Assistant.', fail: 'The caller was a surface.' },
  { kind: 'BII', name: 'App Actions', what: 'Predefined intents that open your app.', fail: 'Foreground, UI-bound.' },
  { kind: 'Nov 2024', name: 'MCP', what: 'Models call tools described by a schema.', fail: 'Built for servers, not phones.' },
  { kind: '2025 · 2026', name: 'AppFunctions', what: 'First alpha May 2025, first beta Oct 2026: functions exposed by the app, no UI.', fail: '' },
];

function Context_() {
  const { here, b } = useScene();
  return (
    <>
      <Eyebrow on={here}>how apps became callable</Eyebrow>
      {ITEMS.map((it, i) => (
        <div key={it.name}>
          <NodeBox rect={node(i)} on={here && b >= i} kind={it.kind} value={it.name} tone={here && b === i ? 'hot' : b > i && i < 3 ? 'dim' : 'normal'} />
          <Reveal on={here && b >= i} x={node(i).x} y={510} delay={300}>
            <div style={{ width: W, fontSize: 28, lineHeight: 1.3, color: 'var(--ink)' }}>{it.what}</div>
            {it.fail && <div className="mono" style={{ width: W, fontSize: 24, marginTop: 20, color: 'var(--warning)' }}>{it.fail}</div>}
          </Reveal>
        </div>
      ))}
      <Statement on={here && b >= 4} y={790} size={78}>
        The caller is no longer a screen.<br /><G>It is a model.</G>
      </Statement>
    </>
  );
}

/** 04 CONTEXT — Slices → App Actions → MCP → AppFunctions. */
export const Context = () => <Scene index={3}><Context_ /></Scene>;
