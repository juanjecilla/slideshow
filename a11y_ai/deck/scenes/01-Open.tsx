import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { OV } from '../overlays';
import { Phone } from '../ui';
import home from '../assets/home-before.png';

function Open_() {
  const { here, b } = useScene();
  const title = here && b === 1;
  const vote = here && b === 2;
  return (
    <>
      <div style={{ position: 'absolute', left: 952, top: 532, width: 16, height: 16, background: 'var(--accent)', borderRadius: 4, opacity: here && b === 0 ? 1 : 0, transition: 'opacity 400ms' }} />

      <Reveal on={title} out={here && b > 1} x={120} y={230}>
        <div className="chip info">{config.subtitle}</div>
      </Reveal>
      <Reveal on={title} out={here && b > 1} x={120} y={330} delay={120} ms={900}>
        <h1 className="t-statement" style={{ fontSize: 128, margin: 0 }}>a11y on Android?<br />AI makes it easy</h1>
      </Reveal>
      <Reveal on={title} out={here && b > 1} x={120} y={720} delay={400}>
        <div style={{ display: 'flex', gap: 14 }}>
          <span className="chip">{config.author}</span>
          <span className="chip">{config.event}</span>
        </div>
      </Reveal>
      <Phone on={title} out={here && b > 1} src={home} alt="Muviss on an Android phone, with boxes drawn over some of its controls" x={1380} y={110} overlays={OV.searchBefore} boxes={title} />

      <Reveal on={vote} x={120} y={300}>
        <div className="t-statement" style={{ fontSize: 200 }}>Dark<br />or light?</div>
      </Reveal>
      <Reveal on={vote} x={120} y={760} delay={300}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <kbd className="chip" style={{ fontSize: 40, padding: '10px 34px', fontFamily: 'var(--font-mono)' }}>T</kbd>
          <span className="t-meta" style={{ fontSize: 28 }}>switches the theme</span>
        </div>
      </Reveal>
    </>
  );
}

/** 01 OPEN — standby, title with a real device, then the opening joke: the room picks dark or light. */
export const Open = () => <Scene index={0}><Open_ /></Scene>;
