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

      <Reveal on={vote} out={here && b > 2} x={120} y={300}>
        <div className="t-statement" style={{ fontSize: 200 }}>Dark<br />or light?</div>
      </Reveal>
      <Reveal on={vote} out={here && b > 2} x={120} y={760} delay={300}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <kbd className="chip" style={{ fontSize: 40, padding: '10px 34px', fontFamily: 'var(--font-mono)' }}>T</kbd>
          <span className="t-meta" style={{ fontSize: 28 }}>switches the theme</span>
        </div>
      </Reveal>

      {/* 1.3–1.5 — show of hands, one question per click. 1.6 — the twist, only on click (no auto delay). */}
      <Reveal on={here && b >= 3} x={120} y={170}>
        <div className="t-eyebrow">show of hands</div>
      </Reveal>
      {HANDS.map((question, i) => {
        const active = b === 3 + i;
        return (
          <Reveal key={question} on={here && b >= 3 + i} x={120} y={290 + i * 150}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 30, width: 70, color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 300ms' }}>{`0${i + 1}`}</span>
              <span style={{ fontSize: 60, fontWeight: 500, letterSpacing: '-0.02em', color: active ? 'var(--ink)' : 'var(--ink-3)', transition: 'color 300ms' }}>{question}</span>
            </div>
          </Reveal>
        );
      })}
      <Reveal on={here && b >= 6} x={190} y={780}>
        <div style={{ fontSize: 60, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--warning)' }}>You just picked an accessibility setting.</div>
      </Reveal>
      <Reveal on={here && b >= 6} x={190} y={870} delay={150}>
        <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--accent)' }}>You are all users of it.</div>
      </Reveal>
    </>
  );
}

const HANDS = [
  'Turned on TalkBack on your own app?',
  'Shipped an accessibility fix?',
  'Changed font size or dark mode on your phone?',
];

/** 01 OPEN — standby, title with a real device, the dark/light vote, a show of hands and a click-revealed twist. */
export const Open = () => <Scene index={0}><Open_ /></Scene>;
