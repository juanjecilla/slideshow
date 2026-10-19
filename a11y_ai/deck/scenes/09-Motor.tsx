import { Reveal, Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { Eyebrow, Mono, PersonIntro, Say } from '../ui';

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

      <Eyebrow on={at(1)} out={gone(1)} text="a11y-audit · scan_compose.py" color={C} />
      <Say on={at(1)} out={gone(1)} text="The scan says 24 dp." />
      <Mono on={at(1)} out={gone(1)} x={150} y={400} size={30} lines={small.map((l) => ({ t: l, marks: [{ text: 'small-target' }] }))} />
      <Mono on={at(1)} out={gone(1)} x={150} y={520} size={24} lines={[CODE.clearButton]} />

      <Eyebrow on={at(2)} out={gone(2)} text="before the fix: a test" color={C} />
      <Say on={at(2)} out={gone(2)} text="So: measure it." />
      <Mono on={at(2)} out={gone(2)} x={150} y={400} size={22} lines={code(CODE.clearTest)} />

      <Say on={at(3)} text="It passes." y={260} size={190} color={C} />
      <Reveal on={at(3)} x={150} y={520}><div className="t-editorial" style={{ fontSize: 64, lineHeight: 1.2 }}>On the original code.<br />Compose already makes the touch area 48 dp.</div></Reveal>
      <Reveal on={at(3)} x={150} y={800}><div className="t-meta" style={{ fontSize: 30 }}>The “error” was not a bug. We nearly “fixed” it.</div></Reveal>

      <Eyebrow on={at(4)} out={gone(4)} text="the same day" color={C} />
      <Say on={at(4)} text="The agent was wrong too." y={200} size={96} />
      <Reveal on={at(4)} x={150} y={420}>
        <div className="t-editorial" style={{ fontSize: 52, lineHeight: 1.3 }}>
          “Watching has no button.”<br />
          “No custom actions on the swipe deck.”
        </div>
      </Reveal>
      <Reveal on={at(4)} x={150} y={700}><div className="t-statement" style={{ fontSize: 84, color: C }}>Verify, then fix.</div></Reveal>
    </>
  );
}

/** 09 MOTOR — the lesson is the test you write before the fix. */
export const Motor = () => <Scene index={8}><Motor_ /></Scene>;
