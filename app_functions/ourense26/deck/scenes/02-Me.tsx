import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { Eyebrow, Statement } from '../ui';

const LINKS: [string, string][] = [
  ['GitHub', config.links.github],
  ['LinkedIn', config.links.linkedin],
  ['Substack', config.links.substack],
  ['YouTube', config.links.youtube],
];

const QUESTIONS = [
  '¿Quién usa IA a diario?',
  '¿Quién desarrolla para Android?',
  '¿Quién sigue abriendo Android Studio?',
];

function Me_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b < 2} out={here && b >= 2} x={150} y={250}>
        <div className="t-statement" style={{ fontSize: 220 }}>{config.author}</div>
      </Reveal>
      <Reveal on={here && b < 2} out={here && b >= 2} x={158} y={520} delay={150}>
        <div className="t-meta" style={{ fontSize: 34 }}>{config.role}</div>
      </Reveal>
      {LINKS.map(([name, url], i) => (
        <Reveal key={name} on={here && b === 1} out={here && b >= 2} x={158} y={640 + i * 76} delay={i * 120}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
            <span className="t-meta" style={{ fontSize: 22, width: 170 }}>{name}</span>
            <span className="mono" style={{ fontSize: 40 }}>{url}</span>
          </div>
        </Reveal>
      ))}

      <Eyebrow on={here && b >= 2}>manos arriba</Eyebrow>
      <Statement on={here && b >= 2} y={170} size={110}>¿Quién está en la sala?</Statement>

      {QUESTIONS.map((question, i) => {
        const active = b === 2 + i;
        return (
          <Reveal key={question} on={here && b >= 2 + i} x={158} y={430 + i * 130}>
            <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 30, width: 70, color: active ? 'var(--accent)' : 'var(--ink-3)', transition: 'color 300ms' }}>{`0${i + 1}`}</span>
              <span style={{ fontSize: 54, fontWeight: 500, letterSpacing: '-0.02em', color: active ? 'var(--ink)' : 'var(--ink-3)', transition: 'color 300ms' }}>{question}</span>
            </div>
          </Reveal>
        );
      })}

      {/* 2.6 — click to reveal the twist */}
      <Reveal on={here && b >= 5} x={260} y={820}>
        <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--warning)' }}>Tu app no se abrirá.</div>
      </Reveal>
      <Reveal on={here && b >= 5} x={260} y={890}>
        <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--accent)' }}>Se invocará.</div>
      </Reveal>
    </>
  );
}

/** 02 INTRO — quién habla, enlaces y una ronda de manos. */
export const Me = () => <Scene index={1}><Me_ /></Scene>;
