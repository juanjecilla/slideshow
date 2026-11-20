import { CountUp, Reveal, Scene, useScene } from 'beatdeck';
import { Panel } from '../ui';

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
      <Reveal on={here && b === 0} out={here && b > 0} x={120} y={130}><div className="t-eyebrow">Who needs accessibility</div></Reveal>
      {SPECTRUM.map(([kind, who], i) => (
        <Reveal key={kind} on={here && b === 0} out={here && b > 0} x={120 + i * 590} y={260} delay={200 + i * 250}>
          <Panel title={kind} style={{ width: 550 }}>
            <div className="t-statement" style={{ fontSize: 64 }}>{who}</div>
          </Panel>
        </Reveal>
      ))}
      <Reveal on={here && b === 0} out={here && b > 0} x={120} y={560} delay={1000}>
        <div className="t-statement" style={{ fontSize: 84, color: 'var(--ink-2)' }}>Same need. Different day.</div>
      </Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={120} y={200}>
        <Panel title="World Health Organization" style={{ width: 1500 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 36 }}>
            <div className="t-numeral" style={{ fontSize: 260 }}><CountUp value={1.3} from={0} entry={entry} decimals={1} ms={1400} /></div>
            <div className="t-statement" style={{ fontSize: 96, color: 'var(--ink-2)' }}>billion</div>
          </div>
          <div className="t-editorial" style={{ fontSize: 60, marginTop: 28 }}>people live with a significant disability.</div>
          <div style={{ display: 'flex', gap: 14, marginTop: 28 }}><span className="chip info">16% of the world</span><span className="chip">1 in 6</span></div>
        </Panel>
      </Reveal>

      <Reveal on={here && b === 2} out={here && b > 2} x={120} y={160}><div className="t-eyebrow">European Accessibility Act · Directive (EU) 2019/882</div></Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={120} y={230} delay={150}>
        <div className="t-statement" style={{ fontSize: 190 }}>28 June 2025</div>
      </Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={120} y={520} delay={450}>
        <Panel title="applies to" style={{ width: 1500 }}>
          <div className="t-editorial" style={{ fontSize: 52 }}>Mobile apps of covered services</div>
          <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap' }}>
            {['e-commerce', 'banking', 'transport', 'communications'].map((t) => <span key={t} className="chip">{t}</span>)}
            <span className="chip info">Spain · Ley 11/2023</span>
          </div>
        </Panel>
      </Reveal>

      <Reveal on={here && b === 3} x={120} y={260}>
        <div className="t-statement" style={{ fontSize: 100, lineHeight: 1.12 }}>It was never hard to <span style={{ color: 'var(--accent)' }}>want</span><br />accessibility.</div>
      </Reveal>
      <Reveal on={here && b === 3} x={120} y={600} delay={700}>
        <div className="t-statement" style={{ fontSize: 100, color: 'var(--ink-2)' }}>It was hard to afford.</div>
      </Reveal>
    </>
  );
}

/** 04 WHY NOW — who needs it, how many, what the law says, what changed. */
export const WhyNow = () => <Scene index={3}><WhyNow_ /></Scene>;
