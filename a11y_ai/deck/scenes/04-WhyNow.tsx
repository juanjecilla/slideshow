import { CountUp, Reveal, Scene, useScene } from 'beatdeck';

/** Microsoft Inclusive Design: the same need, permanent / temporary / situational. */
const SPECTRUM: [string, string][] = [
  ['Permanent', 'One arm'],
  ['Temporary', 'Arm injury'],
  ['Situational', 'New parent'],
];

function WhyNow_() {
  const { here, b, entry } = useScene();
  return (
    <>
      {/* 04.1 spectrum */}
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={160}>
        <div className="t-eyebrow">// who needs accessibility</div>
      </Reveal>
      {SPECTRUM.map(([kind, who], i) => (
        <Reveal key={kind} on={here && b === 0} out={here && b > 0} x={150 + i * 570} y={330} delay={200 + i * 250}>
          <div style={{ width: 520, borderTop: '3px solid var(--accent)', paddingTop: 28 }}>
            <div className="t-meta" style={{ fontSize: 28 }}>{kind}</div>
            <div className="t-statement" style={{ fontSize: 96, marginTop: 28 }}>{who}</div>
          </div>
        </Reveal>
      ))}
      <Reveal on={here && b === 0} out={here && b > 0} x={158} y={760} delay={1000}>
        <div className="t-editorial" style={{ fontSize: 52, color: 'var(--ink-2)' }}>Same need. Different day.</div>
      </Reveal>

      {/* 04.2 people (R4.1) */}
      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={170}>
        <div className="t-numeral" style={{ fontSize: 330 }}>
          <CountUp value={1.3} from={0} entry={entry} decimals={1} ms={1400} />
          <span style={{ fontSize: 120, color: 'var(--ink-2)' }}> billion</span>
        </div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={158} y={640} delay={500}>
        <div className="t-editorial" style={{ fontSize: 76 }}>people live with a significant disability.</div>
        <div className="t-meta" style={{ fontSize: 26, marginTop: 32 }}>16% of the world · 1 in 6 · WHO</div>
      </Reveal>

      {/* 04.3 law (R4.2, R4.3) */}
      <Reveal on={here && b === 2} out={here && b > 2} x={158} y={160}>
        <div className="t-eyebrow">// European Accessibility Act · Directive (EU) 2019/882</div>
      </Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={150} y={250} delay={150}>
        <div className="t-statement" style={{ fontSize: 230 }}>28 June<br />2025</div>
      </Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={1120} y={300} delay={450}>
        <div style={{ width: 660 }}>
        <div className="t-editorial" style={{ fontSize: 50, lineHeight: 1.25 }}>
          Mobile apps of covered services<br />
          <span style={{ color: 'var(--ink-2)' }}>e-commerce · banking · transport · communications</span>
        </div>
        <div className="t-meta" style={{ fontSize: 26, marginTop: 40 }}>Spain · Ley 11/2023</div>
        </div>
      </Reveal>

      {/* 04.4 cost */}
      <Reveal on={here && b === 3} x={150} y={250}>
        <div className="t-statement" style={{ fontSize: 120, lineHeight: 1.1 }}>It was never hard<br />to <span style={{ color: 'var(--accent)' }}>want</span> accessibility.</div>
      </Reveal>
      <Reveal on={here && b === 3} x={150} y={640} delay={700}>
        <div className="t-statement" style={{ fontSize: 120, lineHeight: 1.1, color: 'var(--ink-2)' }}>It was hard to afford.</div>
      </Reveal>
    </>
  );
}

/** 04 WHY NOW — who needs it, how many, what the law says, what changed. */
export const WhyNow = () => <Scene index={3}><WhyNow_ /></Scene>;
