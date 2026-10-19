import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';

function Open_() {
  const { here, b } = useScene();
  const title = here && b === 1;
  const vote = here && b === 2;
  return (
    <>
      {/* 01.1 standby: nothing but a quiet mark */}
      <div style={{ position: 'absolute', left: 952, top: 532, width: 16, height: 16, background: 'var(--accent)', opacity: here && b === 0 ? 1 : 0, transition: 'opacity 400ms' }} />

      {/* 01.2 title */}
      <Reveal on={title} out={here && b > 1} x={168} y={250}>
        <div className="t-eyebrow">// {config.subtitle}</div>
      </Reveal>
      <Reveal on={title} out={here && b > 1} x={150} y={330} delay={120} ms={1100}>
        <h1 className="t-statement" style={{ fontSize: 190, margin: 0 }}>a11y on Android?<br />AI makes it easy</h1>
      </Reveal>
      <Reveal on={title} out={here && b > 1} x={168} y={800} delay={400}>
        <div className="t-meta" style={{ fontSize: 26 }}>{config.author}</div>
        <div className="t-meta" style={{ fontSize: 22, marginTop: 14 }}>{config.event}</div>
      </Reveal>

      {/* 01.3 the joke: dark or light? */}
      <Reveal on={vote} x={150} y={300}>
        <div className="t-statement" style={{ fontSize: 260 }}>Dark<br />or light<span style={{ color: 'var(--accent)' }}>?</span></div>
      </Reveal>
      <Reveal on={vote} x={168} y={860} delay={300}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <kbd className="mono" style={{ fontSize: 44, padding: '8px 30px', border: '2px solid var(--hair-strong)', borderRadius: 10, color: 'var(--ink)' }}>T</kbd>
          <span className="t-meta" style={{ fontSize: 28 }}>switches the theme</span>
        </div>
      </Reveal>
    </>
  );
}

/** 01 OPEN — standby, title, then the opening joke: the room picks dark or light. */
export const Open = () => <Scene index={0}><Open_ /></Scene>;
