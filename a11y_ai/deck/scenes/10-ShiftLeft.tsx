import { Reveal, Scene, useScene } from 'beatdeck';
import { CODE } from '../code';
import { Eyebrow, Mono, Panel, PersonIntro, Say } from '../ui';

const code = (s: string) => s.split('\n');

function ShiftLeft_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Shift left" color="var(--accent)" line="Fixed today. Broken again on Thursday." />

      <Eyebrow on={at(1)} out={gone(1)} text="Muviss today" />
      <Say on={at(1)} out={gone(1)} text="Lint fails the build. Nothing else does." size={64} />
      <Reveal on={at(1)} out={gone(1)} x={120} y={330}>
        <Panel title="what is guarded" style={{ width: 1500 }}>
          <div className="chip ok" style={{ marginBottom: 18 }}>Missing label: caught</div><br />
          <div className="chip bad" style={{ marginBottom: 18 }}>Announced twice · hidden cards · 200% text: not caught</div><br />
          <div className="chip bad">No accessibility checks in the tests</div>
        </Panel>
      </Reveal>

      <Eyebrow on={at(2)} out={gone(2)} text="Accessibility Test Framework · Compose 1.8+" />
      <Say on={at(2)} out={gone(2)} text="Checks that run with your tests." size={64} />
      <Mono on={at(2)} out={gone(2)} x={120} y={300} size={24} title="androidInstrumentedTest" lang="kotlin" lines={code(CODE.atf)} />

      <Eyebrow on={at(3)} out={gone(3)} text="tell the agent, once · AGENTS.md" />
      <Say on={at(3)} out={gone(3)} text="Rules the next agent reads." size={64} />
      <Reveal on={at(3)} out={gone(3)} x={120} y={300}>
        <Panel title="AGENTS.md" style={{ width: 1600 }}>
          {code(CODE.agents).map((rule) => (
            <p key={rule} className="t-editorial" style={{ fontSize: 32, lineHeight: 1.25, margin: '0 0 18px', color: 'var(--ink-2)' }}>{rule}</p>
          ))}
        </Panel>
      </Reveal>

      <Eyebrow on={at(4)} out={gone(4)} text="Hephaestus · a11y-pr-review" />
      <Say on={at(4)} out={gone(4)} text="Review only what the diff adds." size={64} />
      <Mono on={at(4)} out={gone(4)} x={120} y={300} size={28} title="terminal" lines={['$ skills/a11y-pr-review/scripts/scan_diff.sh origin/main']} />
      <Reveal on={at(4)} out={gone(4)} x={120} y={450}><Panel style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 48, lineHeight: 1.3, color: 'var(--ink-2)' }}>Findings on added lines only.<br />Exit 1 on errors. Comment first, gate later.</div></Panel></Reveal>
    </>
  );
}

/** 10 SHIFT LEFT — keep it fixed: tests, rules for the agent, review of the diff. */
export const ShiftLeft = () => <Scene index={9}><ShiftLeft_ /></Scene>;
