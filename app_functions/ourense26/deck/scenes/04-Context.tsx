import { NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';
import { Eyebrow, G, Statement } from '../ui';

const W = 360;
const node = (i: number): Rect => ({ x: 150 + i * 420, y: 330, w: W, h: 140 });

const ITEMS = [
  { kind: '2018', name: 'Slices', what: 'Plantillas de UI remota dibujadas dentro de Search y Assistant.', fail: 'Quien llamaba era una superficie.' },
  { kind: 'BII', name: 'App Actions', what: 'Intents predefinidos que abren tu app.', fail: 'En primer plano, atado a la UI.' },
  { kind: 'Nov 2024', name: 'MCP', what: 'Los modelos llaman a tools descritas por un esquema.', fail: 'Pensado para servidores, no para móviles.' },
  { kind: '2025 · 2026', name: 'AppFunctions', what: 'Primera alpha en mayo de 2025, primera beta en octubre de 2026: funciones que expone la app, sin UI.', fail: '' },
];

function Context_() {
  const { here, b } = useScene();
  return (
    <>
      <Eyebrow on={here}>cómo las apps se hicieron invocables</Eyebrow>
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
        Quien llama ya no es una pantalla.<br /><G>Es un modelo.</G>
      </Statement>
    </>
  );
}

/** 04 CONTEXT — Slices → App Actions → MCP → AppFunctions. */
export const Context = () => <Scene index={3}><Context_ /></Scene>;
