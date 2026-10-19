import { Reveal, Scene, useScene } from 'beatdeck';
import { PEOPLE } from '../people';

const LAYERS: [string, string, string][] = [
  ['01', 'In your editor', 'audit · fix · test'],
  ['02', 'On the device', 'describe · shorten'],
  ['03', 'In the UI', 'adapt to the person'],
];

function Map_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b < 3} out={here && b >= 3} x={158} y={130}>
        <div className="t-eyebrow">// where AI helps</div>
      </Reveal>
      {LAYERS.map(([n, name, what], i) => (
        <Reveal key={n} on={here && b >= i && b < 3} out={here && b >= 3} x={150} y={250 + i * 220} delay={i === b ? 150 : 0}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 48 }}>
            <span className="mono" style={{ fontSize: 40, color: 'var(--accent)' }}>{n}</span>
            <span className="t-statement" style={{ fontSize: 130 }}>{name}</span>
            <span className="t-meta" style={{ fontSize: 32 }}>{what}</span>
          </div>
        </Reveal>
      ))}

      {/* 05.4 four people, one colour each */}
      <Reveal on={here && b === 3} out={here && b > 3} x={158} y={130}>
        <div className="t-eyebrow">// four people, one colour each</div>
      </Reveal>
      {PEOPLE.map((p, i) => (
        <Reveal key={p.key} on={here && b === 3} out={here && b > 3} x={150} y={260 + i * 190} delay={i * 200}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
            <span style={{ width: 28, height: 110, background: p.color, display: 'block' }} />
            <span className="t-statement" style={{ fontSize: 110, color: p.color }}>{p.name}</span>
            <span className="t-meta" style={{ fontSize: 30 }}>{p.tool}</span>
          </div>
        </Reveal>
      ))}

      {/* 05.5 toolkit preview */}
      <Reveal on={here && b === 4} x={158} y={300}>
        <div className="t-eyebrow">// everything you will see ships as</div>
      </Reveal>
      <Reveal on={here && b === 4} x={150} y={380} delay={200}>
        <div className="t-statement" style={{ fontSize: 250 }}>hephestus</div>
      </Reveal>
      <Reveal on={here && b === 4} x={158} y={720} delay={500}>
        <div className="t-meta" style={{ fontSize: 32 }}>an open toolkit of skills for AI agents</div>
      </Reveal>
    </>
  );
}

/** 05 MAP — three places AI helps, four people, one toolkit. */
export const MapScene = () => <Scene index={4}><Map_ /></Scene>;
