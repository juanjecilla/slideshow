import { Arrow, NodeBox, Reveal, Scene, Typewriter, useScene, type Rect } from 'beatdeck';

const AGENT: Rect = { x: 150, y: 560, w: 360, h: 170 };
const DEVFEST: Rect = { x: 700, y: 400, w: 420, h: 130 };
const CALENDAR: Rect = { x: 700, y: 580, w: 420, h: 130 };
const MESSAGES: Rect = { x: 700, y: 760, w: 420, h: 130 };

const call = (on: boolean, y: number, fn: string, res: string, warn = false) => (
  <Reveal on={on} x={1190} y={y} axis="x">
    <div className="mono" style={{ fontSize: 28, color: 'var(--agent)' }}>{fn}</div>
    <div className="mono" style={{ fontSize: 28, marginTop: 8, color: warn ? 'var(--warning)' : 'var(--ink)' }}>{res}</div>
  </Reveal>
);

function Scenario_() {
  const { here, b, entry } = useScene();
  const planned = here && b >= 1;
  return (
    <>
      {/* the user's sentence */}
      <Reveal on={here && b < 7} out={here && b >= 7} x={150} y={120}>
        <div className="t-eyebrow" style={{ fontSize: 20 }}>// tú dices</div>
        <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2, marginTop: 14, width: 1620 }}>
          <Typewriter run={here && b === 0} entry={entry} charMs={32} lines={[
            'Guarda las charlas de IA de después de comer en favoritos,',
            'bloquéalas en mi calendario y dile a mi equipo dónde estaré.',
          ]} />
        </div>
      </Reveal>

      <NodeBox rect={AGENT} on={planned} kind="agente" value="planifica · llama" tone={here && b === 5 ? 'hot' : 'normal'} />
      <NodeBox rect={DEVFEST} on={planned} kind="app" value="DevFest" tone={here && (b === 2 || b === 3) ? 'hot' : here && b >= 7 ? 'dim' : 'normal'} />
      <NodeBox rect={CALENDAR} on={planned} kind="app" value="Calendario" tone={here && b === 4 ? 'hot' : here && b >= 7 ? 'dim' : 'normal'} />
      <NodeBox rect={MESSAGES} on={planned} kind="app" value="Mensajes" tone={here && b === 6 ? 'hot' : here && b >= 7 ? 'dim' : 'normal'} />

      <Arrow from={AGENT} to={DEVFEST} on={planned} tone={here && (b === 2 || b === 3) ? 'hot' : 'dim'} />
      <Arrow from={AGENT} to={CALENDAR} on={planned} tone={here && b === 4 ? 'hot' : 'dim'} />
      <Arrow from={AGENT} to={MESSAGES} on={planned} tone={here && b === 6 ? 'hot' : 'dim'} />

      {call(here && b >= 2, 392, 'searchTalks("ai", "15:00")', '→ 2 charlas')}
      {call(here && b >= 3, 476, 'addToFavorites(2 charlas)', '→ hecho')}
      {call(here && b >= 4, 590, 'createEvents(2 charlas)', '→ conflicto: choca con la cena', true)}
      {call(here && b >= 6, 770, 'send(equipo, "Estaré en…")', '→ enviado')}

      <Reveal on={here && b === 5} out={here && b > 5} x={150} y={800}>
        <div className="t-eyebrow" style={{ fontSize: 20 }}>// el agente te pregunta</div>
        <div style={{ fontSize: 40, fontWeight: 500, marginTop: 12, width: 480 }}>La charla de las 18:30 choca con tu cena. ¿La mantengo?</div>
      </Reveal>

      <Reveal on={here && b >= 7} x={150} y={150}>
        <div className="t-statement" style={{ fontSize: 120 }}>No se abrió ninguna app.</div>
      </Reveal>
      <Reveal on={here && b >= 7} x={158} y={340} delay={500}>
        <div className="t-meta" style={{ fontSize: 34 }}>¿Cómo expone <span style={{ color: 'var(--accent)' }}>tu</span> app eso?</div>
      </Reveal>
    </>
  );
}

/** 03 SCENARIO — apertura animada: una frase, tres apps, nada se abre. */
export const Scenario = () => <Scene index={2}><Scenario_ /></Scene>;
