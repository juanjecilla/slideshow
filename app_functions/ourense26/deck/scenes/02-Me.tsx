import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';

const LINKS: [string, string][] = [
  ['GitHub', config.links.github],
  ['LinkedIn', config.links.linkedin],
  ['Substack', config.links.substack],
  ['YouTube', config.links.youtube],
];

function Me_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={150} y={250}>
        <div className="t-statement" style={{ fontSize: 220 }}>{config.author}</div>
      </Reveal>
      <Reveal on={here} x={158} y={520} delay={150}>
        <div className="t-meta" style={{ fontSize: 34 }}>{config.role}</div>
      </Reveal>
      {LINKS.map(([name, url], i) => (
        <Reveal key={name} on={here && b >= 1} x={158} y={640 + i * 76} delay={i * 120}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
            <span className="t-meta" style={{ fontSize: 22, width: 170 }}>{name}</span>
            <span className="mono" style={{ fontSize: 40 }}>{url}</span>
          </div>
        </Reveal>
      ))}
    </>
  );
}

/** 02 ME — who is talking. */
export const Me = () => <Scene index={1}><Me_ /></Scene>;
