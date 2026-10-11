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
        <div className="t-eyebrow" style={{ fontSize: 20 }}>// you say</div>
        <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2, marginTop: 14, width: 1620 }}>
          <Typewriter run={here && b === 0} entry={entry} charMs={32} lines={[
            'Add the afternoon Android talks to my favourites,',
            'block them in my calendar and tell my team where I\'ll be.',
          ]} />
        </div>
      </Reveal>

      <NodeBox rect={AGENT} on={planned} kind="agent" value="plans · calls" tone={here && b === 5 ? 'hot' : 'normal'} />
      <NodeBox rect={DEVFEST} on={planned} kind="app" value="DevFest" tone={here && (b === 2 || b === 3) ? 'hot' : here && b >= 7 ? 'dim' : 'normal'} />
      <NodeBox rect={CALENDAR} on={planned} kind="app" value="Calendar" tone={here && b === 4 ? 'hot' : here && b >= 7 ? 'dim' : 'normal'} />
      <NodeBox rect={MESSAGES} on={planned} kind="app" value="Messages" tone={here && b === 6 ? 'hot' : here && b >= 7 ? 'dim' : 'normal'} />

      <Arrow from={AGENT} to={DEVFEST} on={planned} tone={here && (b === 2 || b === 3) ? 'hot' : 'dim'} />
      <Arrow from={AGENT} to={CALENDAR} on={planned} tone={here && b === 4 ? 'hot' : 'dim'} />
      <Arrow from={AGENT} to={MESSAGES} on={planned} tone={here && b === 6 ? 'hot' : 'dim'} />

      {call(here && b >= 2, 392, 'searchTalks("android", "14:00")', '→ 3 talks')}
      {call(here && b >= 3, 476, 'addToFavorites(3 talks)', '→ done')}
      {call(here && b >= 4, 590, 'createEvents(3 talks)', '→ conflict: overlaps lunch', true)}
      {call(here && b >= 6, 770, 'send(team, "I\'ll be at…")', '→ sent')}

      <Reveal on={here && b === 5} out={here && b > 5} x={150} y={800}>
        <div className="t-eyebrow" style={{ fontSize: 20 }}>// the agent asks you</div>
        <div style={{ fontSize: 40, fontWeight: 500, marginTop: 12, width: 480 }}>Talk 1 overlaps your lunch. Keep it?</div>
      </Reveal>

      <Reveal on={here && b >= 7} x={150} y={150}>
        <div className="t-statement" style={{ fontSize: 150 }}>No app was opened.</div>
      </Reveal>
      <Reveal on={here && b >= 7} x={158} y={340} delay={500}>
        <div className="t-meta" style={{ fontSize: 34 }}>How does <span style={{ color: 'var(--accent)' }}>your</span> app expose that?</div>
      </Reveal>
    </>
  );
}

/** 03 SCENARIO — animated opening: one sentence, three apps, nothing opened. */
export const Scenario = () => <Scene index={2}><Scenario_ /></Scene>;
