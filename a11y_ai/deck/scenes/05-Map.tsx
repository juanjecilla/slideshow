import { Reveal, Scene, useScene } from 'beatdeck';
import { PEOPLE } from '../people';
import { Panel } from '../ui';

const LAYERS: [string, string, string][] = [
  ['In your editor', 'audit · fix · test', 'Claude Code, Gemini in Android Studio'],
  ['On the device', 'describe · shorten', 'Gemini Nano via ML Kit GenAI'],
  ['In the UI', 'adapt to the person', 'font scale, grids, labels'],
];

function Map_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b < 3} out={here && b >= 3} x={120} y={130}><div className="t-eyebrow">Where AI helps</div></Reveal>
      {LAYERS.map(([name, what, how], i) => (
        <Reveal key={name} on={here && b >= i && b < 3} out={here && b >= 3} x={120 + i * 590} y={260} delay={i === b ? 150 : 0}>
          <Panel title={`0${i + 1}`} style={{ width: 550, height: 400 }}>
            <div className="t-statement" style={{ fontSize: 56, whiteSpace: 'normal' }}>{name}</div>
            <div className="chip info" style={{ marginTop: 28 }}>{what}</div>
            <div className="t-editorial" style={{ fontSize: 34, marginTop: 30, color: 'var(--ink-2)' }}>{how}</div>
          </Panel>
        </Reveal>
      ))}

      <Reveal on={here && b === 3} out={here && b > 3} x={120} y={130}><div className="t-eyebrow">Four people, one colour each</div></Reveal>
      {PEOPLE.map((p, i) => (
        <Reveal key={p.key} on={here && b === 3} out={here && b > 3} x={120} y={250 + i * 190} delay={i * 200}>
          <Panel style={{ width: 1500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              <span style={{ width: 24, height: 90, borderRadius: 12, background: p.color }} />
              <span className="t-statement" style={{ fontSize: 80, color: p.color }}>{p.name}</span>
              <span className="chip" style={{ marginLeft: 'auto' }}>{p.tool}</span>
            </div>
          </Panel>
        </Reveal>
      ))}

      <Reveal on={here && b === 4} x={120} y={260}><div className="t-eyebrow">Everything you will see ships as</div></Reveal>
      <Reveal on={here && b === 4} x={120} y={330} delay={200}>
        <div className="t-statement" style={{ fontSize: 190 }}>Hephaestus</div>
      </Reveal>
      <Reveal on={here && b === 4} x={124} y={600} delay={500}>
        <span className="chip info">an open toolkit of skills for AI agents</span>
      </Reveal>
    </>
  );
}

/** 05 MAP — three places AI helps, four people, one toolkit. */
export const MapScene = () => <Scene index={4}><Map_ /></Scene>;
