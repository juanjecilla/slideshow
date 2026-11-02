import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';

function Open_() {
  const { here, b } = useScene();
  const title = here && b === 1;
  return (
    <>
      {/* standby: a quiet mark */}
      <div style={{ position: 'absolute', left: 952, top: 532, width: 16, height: 16, background: 'var(--accent)', opacity: here && b === 0 ? 1 : 0, transition: 'opacity 400ms' }} />

      <Reveal on={title} x={158} y={150}>
        <div className="t-eyebrow">// {config.subtitle}</div>
      </Reveal>
      <Reveal on={title} x={150} y={250} delay={120} ms={1100}>
        <div className="t-statement" style={{ fontSize: 168, lineHeight: 0.98 }}>
          Turn your app<br />into a <span style={{ color: 'var(--accent)' }}>skill</span><br />with App Functions
        </div>
      </Reveal>
      <Reveal on={title} x={158} y={850} delay={400}>
        <div className="t-meta" style={{ fontSize: 24 }}>{config.author} · {config.event}</div>
        <div className="t-meta" style={{ fontSize: 24, marginTop: 14, color: 'var(--accent)' }}>{config.slot}</div>
      </Reveal>
    </>
  );
}

/** 01 OPEN — standby, then the title. */
export const Open = () => <Scene index={0}><Open_ /></Scene>;
