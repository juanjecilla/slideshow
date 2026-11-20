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
      <Reveal on={here} x={120} y={112}><div className="t-eyebrow" style={{ color: 'var(--fault)' }}>What AI does not fix</div></Reveal>
      {LINES.map(([head, sub], i) => (
        <Reveal key={head} on={here && b >= i} x={120} y={190 + i * 168} delay={i === b ? 150 : 0}>
          <div className="panel" style={{ width: 1680, opacity: i === b ? 1 : 0.9, borderColor: i === b ? 'var(--fault)' : undefined }}>
            <div className="panel-body" style={{ display: 'flex', alignItems: 'baseline', gap: 36, padding: '20px 30px' }}>
              <span aria-hidden="true" style={{ color: 'var(--fault)', fontSize: 44, fontWeight: 800 }}>!</span>
              <span className="t-statement" style={{ fontSize: 58 }}>{head}</span>
              <span className="t-editorial" style={{ fontSize: 30, color: 'var(--ink-2)' }}>{i === b ? sub : ''}</span>
            </div>
          </div>
        </Reveal>
      ))}
    </>
  );
}

/** 11 LIMITS — what AI does not fix. */
export const Limits = () => <Scene index={10}><Limits_ /></Scene>;
