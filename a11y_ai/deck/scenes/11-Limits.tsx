import { Reveal, Scene, useScene } from 'beatdeck';

const LINES: [string, string][] = [
  ['AI describes what is not there.', 'Always read the result. Out loud.'],
  ['Passing lint is not being usable.', 'Checks find labels, not meaning.'],
  ['Beta APIs. English-only descriptions.', 'Check the device. Check the language.'],
  ['Real users are not optional.', 'Nothing replaces someone who actually uses TalkBack.'],
  ['AI speeds you up.', 'It does not sign off.'],
];

function Limits_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here} x={158} y={130}>
        <div className="t-eyebrow">// what AI does not fix</div>
      </Reveal>
      {LINES.map(([head, sub], i) => (
        <Reveal key={head} on={here && b >= i} x={150} y={240 + i * 165} delay={i === b ? 150 : 0}>
          <div style={{ color: i === b ? 'var(--ink)' : 'var(--ink-2)', transition: 'color 500ms' }}>
            <div className="t-statement" style={{ fontSize: 76 }}>{head}</div>
            <div className="t-meta" style={{ fontSize: 28, marginTop: 14, textTransform: 'none', letterSpacing: '0.02em', height: 34 }}>{i === b ? sub : ''}</div>
          </div>
        </Reveal>
      ))}
    </>
  );
}

/** 11 LIMITS — what AI does not fix. Earlier lines dim to --ink-2, which stays ≥ 4.5:1 (tools/contrast.mjs). */
export const Limits = () => <Scene index={10}><Limits_ /></Scene>;
