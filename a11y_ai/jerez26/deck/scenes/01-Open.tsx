import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { OV } from '../overlays';
import { Quote } from '../quote/Quote';
import { QUOTES } from '../quotes';
import { Standby } from '../standby/Standby';
import { Phone } from '../ui';
import home from '../assets/home-before.png';

function Open_() {
  const { here, b } = useScene();
  const title = here && b === 1;
  const vote = here && b === 2;
  const hands = here && b >= 3 && b < 7;
  const handsOut = here && b >= 7;
  return (
    <>
      <Standby on={here && b === 0} />

      <Reveal on={title} out={here && b > 1} x={120} y={230}>
        <div className="chip info">{config.subtitle}</div>
      </Reveal>
      <Reveal on={title} out={here && b > 1} x={120} y={330} delay={120} ms={900}>
        <h1 className="t-statement" style={{ fontSize: 100, margin: 0 }}>¿a11y en Android?<br />Ahora es fácil con la IA</h1>
      </Reveal>
      <Reveal on={title} out={here && b > 1} x={120} y={720} delay={400}>
        <div style={{ display: 'flex', gap: 14 }}>
          <span className="chip">{config.author}</span>
          <span className="chip">{config.event}</span>
        </div>
      </Reveal>
      <Phone on={title} out={here && b > 1} src={home} alt="Muviss en un teléfono Android, con cajas dibujadas sobre algunos de sus controles" x={1380} y={110} overlays={OV.searchBefore} boxes={title} />

      <Reveal on={vote} out={here && b > 2} x={120} y={300}>
        <div className="t-statement" style={{ fontSize: 200 }}>¿Oscuro<br />o claro?</div>
      </Reveal>
      <Reveal on={vote} out={here && b > 2} x={120} y={760} delay={300}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <kbd className="chip" style={{ fontSize: 40, padding: '10px 34px', fontFamily: 'var(--font-mono)' }}>T</kbd>
          <span className="t-meta" style={{ fontSize: 28 }}>cambia el tema</span>
        </div>
      </Reveal>

      {/* 1.3–1.5 — show of hands, one question per click. 1.6 — the twist, only on click (no auto delay). */}
      <Reveal on={hands} out={handsOut} x={120} y={170}>
        <div className="t-eyebrow">mano arriba</div>
      </Reveal>
      {HANDS.map((question, i) => {
        const active = b === 3 + i;
        return (
          <Reveal key={question} on={hands && b >= 3 + i} out={handsOut} x={120} y={290 + i * 150}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 30, width: 70, color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 300ms' }}>{`0${i + 1}`}</span>
              <span style={{ fontSize: 60, fontWeight: 500, letterSpacing: '-0.02em', color: active ? 'var(--ink)' : 'var(--ink-3)', transition: 'color 300ms' }}>{question}</span>
            </div>
          </Reveal>
        );
      })}
      <Reveal on={hands && b >= 6} out={handsOut} x={190} y={780}>
        <div style={{ fontSize: 60, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--warning)' }}>Acabas de elegir un ajuste de accesibilidad.</div>
      </Reveal>
      <Reveal on={hands && b >= 6} out={handsOut} x={190} y={870} delay={150}>
        <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--accent)' }}>Todos sois usuarios.</div>
      </Reveal>

      {/* 1.7 — Radabaugh: the twist said it is easier for you; for some people it is what makes it possible. */}
      <Quote quote={QUOTES.radabaugh} on={here && b === 7} out={here && b > 7} y={290} />
    </>
  );
}

const HANDS = [
  '¿Has activado TalkBack en tu propia app?',
  '¿Has publicado una corrección de accesibilidad?',
  '¿Has cambiado la letra o el modo oscuro de tu móvil?',
];

/** 01 OPEN — standby, title with a real device, the dark/light vote, a show of hands, a click-revealed twist and the Radabaugh quote. */
export const Open = () => <Scene index={0}><Open_ /></Scene>;
