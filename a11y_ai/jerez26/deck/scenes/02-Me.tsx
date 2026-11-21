import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { Panel } from '../ui';

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
      <Reveal on={here} x={120} y={230}>
        <div className="t-statement" style={{ fontSize: 150 }}>{config.author}</div>
      </Reveal>
      <Reveal on={here} x={124} y={420} delay={150}>
        <div className="chip">{config.role}</div>
      </Reveal>
      <Reveal on={here && b >= 1} x={120} y={560}>
        <Panel title="enlaces" style={{ width: 1000 }}>
          {LINKS.map(([name, url]) => (
            <div key={name} style={{ display: 'flex', gap: 40, alignItems: 'baseline', padding: '10px 0' }}>
              <span className="t-meta" style={{ fontSize: 22, width: 170 }}>{name}</span>
              <span className="mono" style={{ fontSize: 38 }}>{url}</span>
            </div>
          ))}
        </Panel>
      </Reveal>
    </>
  );
}

/** 02 ME — who is talking. */
export const Me = () => <Scene index={1}><Me_ /></Scene>;
