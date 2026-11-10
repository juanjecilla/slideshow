import { Reveal, Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { Eyebrow, Mono, Panel, PersonIntro, Say } from '../ui';

const C = 'var(--motor)';
const code = (s: string) => s.split('\n');

function Motor_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  const small = CAP.scanShort.filter((l) => l.includes('small-target'));
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Motor" color={C} line="A target you cannot hit is a button that is not there." />

      <Eyebrow on={at(1)} out={gone(1)} text="a11y-audit · scan_compose.py" />
      <Say on={at(1)} out={gone(1)} text="The scan says 24 dp." size={84} />
      <Mono on={at(1)} out={gone(1)} x={120} y={300} size={30} title="scan_compose.py" lines={small.map((l) => ({ t: l, marks: [{ text: 'small-target' }] }))} />
      <Mono on={at(1)} out={gone(1)} x={120} y={470} size={26} title="SearchScreen.kt" lang="kotlin" lines={[CODE.clearButton]} />

      <Eyebrow on={at(2)} out={gone(2)} text="before the fix: a test" />
      <Say on={at(2)} out={gone(2)} text="So: measure it." size={84} />
      <Mono on={at(2)} out={gone(2)} x={120} y={300} size={22} title="AccessibilityTest.kt" lang="kotlin" lines={code(CODE.clearTest)} />

      <Reveal on={at(3)} x={120} y={200}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
          <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'var(--ok-fill)', border: '8px solid var(--ok)', display: 'grid', placeItems: 'center', fontSize: 120, color: 'var(--ok)' }} aria-hidden="true">✓</div>
          <div className="t-statement" style={{ fontSize: 190 }}>It passes.</div>
        </div>
      </Reveal>
      <Reveal on={at(3)} x={120} y={520} delay={300}>
        <Panel title="on the original code" style={{ width: 1500 }}>
          <div className="t-editorial" style={{ fontSize: 56, lineHeight: 1.2 }}>Compose already makes the touch area 48 dp.</div>
          <div className="chip bad" style={{ marginTop: 28 }}>The “error” was not a bug. We nearly “fixed” it.</div>
        </Panel>
      </Reveal>

      <Eyebrow on={at(4)} out={gone(4)} text="the same day" />
      <Say on={at(4)} out={gone(4)} text="The agent was wrong too." size={90} />
      <Reveal on={at(4)} x={120} y={330}><Panel title="the agent said" style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 50 }}>“Watching has no button.”</div></Panel></Reveal>
      <Reveal on={at(4)} x={120} y={520} delay={250}><Panel title="the agent said" style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 50 }}>“No custom actions on the swipe deck.”</div></Panel></Reveal>
      <Reveal on={at(4)} x={120} y={730} delay={500}><div className="t-statement" style={{ fontSize: 96, color: C }}>Verify, then fix.</div></Reveal>
    </>
  );
}

/** 09 MOTOR — the lesson is the test you write before the fix. */
export const Motor = () => <Scene index={8}><Motor_ /></Scene>;
