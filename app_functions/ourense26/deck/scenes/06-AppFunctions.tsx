import { Arrow, NodeBox, Reveal, Scene, useScene, type Rect } from 'beatdeck';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const AGENT: Rect = { x: 150, y: 360, w: 460, h: 160 };
const APP: Rect = { x: 1310, y: 360, w: 460, h: 160 };
const SYSTEM: Rect = { x: 730, y: 700, w: 460, h: 160 };

const ROWS: [string, string, string][] = [
  ['transporte', 'JSON-RPC · stdio / HTTP', 'Binder IPC · local'],
  ['registro', 'tools/list', 'searchAppFunctions()'],
  ['esquema', 'JSON Schema', 'XML generado por KSP'],
  ['quién llama', 'cualquier cliente MCP', 'EXECUTE_APP_FUNCTIONS'],
];

const PILLARS: [string, string][] = [
  ['Local', 'Se ejecuta en el dispositivo. Sin viajes a la red.'],
  ['Indexada', 'Metadatos generados al compilar e indexados por el sistema.'],
  ['Descrita', 'El KDoc es el contrato que lee el modelo.'],
];

function AppFunctions_() {
  const { here, b } = useScene();
  const table = here && b >= 2 && b <= 5;
  return (
    <>
      {/* 0 · definition */}
      <Eyebrow on={here && b <= 1} out={here && b > 1}>AppFunctions</Eyebrow>
      <Statement on={here && b === 0} out={here && b > 0} y={260} size={150}>Tools<br /><G>en el dispositivo.</G></Statement>
      <Meta on={here && b === 0} out={here && b > 0} y={640} size={34}>El equivalente móvil de las tools de MCP, ejecutado en local.</Meta>
      <Meta on={here && b === 0} out={here && b > 0} y={720} size={24}>API de plataforma Android (16+) + librería Jetpack</Meta>

      {/* 1 · roles */}
      <NodeBox rect={AGENT} on={here && b === 1} kind="cliente" value="agente" />
      <NodeBox rect={APP} on={here && b === 1} kind="proveedor de tools" value="tu app" tone="hot" />
      <NodeBox rect={SYSTEM} on={here && b === 1} kind="registro" value="índice del sistema" />
      <Arrow from={APP} to={SYSTEM} on={here && b === 1} label="metadatos" lx={90} ly={-20} labelAnchor="start" />
      <Arrow from={AGENT} to={SYSTEM} on={here && b === 1} label="búsqueda" lx={-90} ly={-20} labelAnchor="end" delay={200} />
      <Arrow from={AGENT} to={APP} on={here && b === 1} tone="hot" label="ejecutar" ly={-20} delay={400} />

      {/* 2–5 · analogía, no protocolo */}
      <Eyebrow on={table}>analogy, not protocol</Eyebrow>
      <Reveal on={table} x={640} y={220}><div className="t-meta" style={{ fontSize: 28 }}>MCP</div></Reveal>
      <Reveal on={table} x={1200} y={220}><div className="t-meta" style={{ fontSize: 28, color: 'var(--accent)' }}>AppFunctions</div></Reveal>
      {ROWS.map(([k, mcp, af], i) => (
        <Reveal key={k} on={here && b >= 2 + i && b <= 5} x={150} y={320 + i * 150}>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <div className="t-meta" style={{ fontSize: 26, width: 490 }}>{k}</div>
            <div className="mono" style={{ fontSize: 36, width: 560, color: 'var(--ink-2)' }}>{mcp}</div>
            <div className="mono" style={{ fontSize: 36 }}>{af}</div>
          </div>
        </Reveal>
      ))}

      {/* 6 · status */}
      <Eyebrow on={here && b === 6}>estado</Eyebrow>
      <Statement on={here && b === 6} y={190} size={100}>Experimental.</Statement>
      <Meta on={here && b === 6} y={400} size={38} delay={150}>Jetpack <A>1.0.0-beta01</A> · primera beta, oct. 2026.</Meta>
      <Meta on={here && b === 6} y={470} size={38} delay={250}>La documentación sigue mostrando <A>alpha10</A>.</Meta>
      <Meta on={here && b === 6} y={540} size={38} delay={350}>Integración con Gemini: <A>private preview</A>.</Meta>
      <Meta on={here && b === 6} y={610} size={38} delay={450}>Quien llama necesita <A>EXECUTE_APP_FUNCTIONS</A>.</Meta>
      <Meta on={here && b === 6} y={760} size={28} delay={550}>El contrato que diseñes hoy sobrevive a la API.</Meta>

      {/* 7 · pillars */}
      {PILLARS.map(([h, t], i) => (
        <Reveal key={h} on={here && b === 7} x={150} y={230 + i * 250} delay={i * 200}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="t-statement" style={{ fontSize: 130, width: 800, color: i === 2 ? 'var(--accent)' : 'var(--ink)' }}>{h}</div>
            <div style={{ fontSize: 36, lineHeight: 1.35, width: 820, color: 'var(--ink-2)' }}>{t}</div>
          </div>
        </Reveal>
      ))}
    </>
  );
}

/** 06 APPFUNCTIONS — tools en el dispositivo, roles, tabla de analogía, estado, pilares. */
export const AppFunctions = () => <Scene index={5}><AppFunctions_ /></Scene>;
