import { Reveal, Scene, useScene } from 'beatdeck';
import { CODE } from '../code';
import { Eyebrow, Mono, PersonIntro, Say } from '../ui';

const C = 'var(--accent)';
const code = (s: string) => s.split('\n');

function ShiftLeft_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Shift left" color={C} line="Fixed today. Broken again on Thursday." />

      <Eyebrow on={at(1)} out={gone(1)} text="Muviss today" color={C} />
      <Say on={at(1)} out={gone(1)} text="Lint fails the build. Nothing else does." size={72} />
      <Reveal on={at(1)} out={gone(1)} x={150} y={420}>
        <div className="t-editorial" style={{ fontSize: 52, lineHeight: 1.3, color: 'var(--ink-2)' }}>
          Missing label: caught.<br />
          Announced twice, hidden cards, 200% text: not.<br />
          No accessibility checks in the tests.
        </div>
      </Reveal>

      <Eyebrow on={at(2)} out={gone(2)} text="Accessibility Test Framework · Compose 1.8+" color={C} />
      <Say on={at(2)} out={gone(2)} text="Checks that run with your tests." size={76} />
      <Mono on={at(2)} out={gone(2)} x={150} y={400} size={24} lines={code(CODE.atf)} />

      <Eyebrow on={at(3)} out={gone(3)} text="tell the agent, once · AGENTS.md" color={C} />
      <Say on={at(3)} out={gone(3)} text="Rules the next agent reads." size={76} />
      <Reveal on={at(3)} out={gone(3)} x={150} y={400}>
        <div style={{ width: 1620 }}>
          {code(CODE.agents).map((rule) => (
            <p key={rule} className="t-editorial" style={{ fontSize: 34, lineHeight: 1.25, margin: '0 0 22px', color: 'var(--ink-2)' }}>{rule}</p>
          ))}
        </div>
      </Reveal>

      <Eyebrow on={at(4)} out={gone(4)} text="hephestus · a11y-pr-review" color={C} />
      <Say on={at(4)} out={gone(4)} text="Review only what the diff adds." size={76} />
      <Mono on={at(4)} out={gone(4)} x={150} y={400} size={30} lines={['$ skills/a11y-pr-review/scripts/scan_diff.sh origin/main']} />
      <Reveal on={at(4)} out={gone(4)} x={150} y={520}>
        <div className="t-editorial" style={{ fontSize: 50, lineHeight: 1.3, color: 'var(--ink-2)' }}>Findings on added lines only.<br />Exit 1 on errors. Comment first, gate later.</div>
      </Reveal>
    </>
  );
}

/** 10 SHIFT LEFT — keep it fixed: tests, rules for the agent, review of the diff. */
export const ShiftLeft = () => <Scene index={9}><ShiftLeft_ /></Scene>;
