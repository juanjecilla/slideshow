import { Reveal, Scene, useScene, type TermLine } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { Eyebrow, Mono, PersonIntro, Say } from '../ui';

const C = 'var(--blind)';
const mark = (t: string, ...texts: string[]): TermLine => ({ t, marks: texts.map((text) => ({ text })) });
const code = (s: string) => s.split('\n');

function Blind_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      {/* 06.1 */}
      <PersonIntro on={at(0)} out={gone(0)} name="Blind" color={C} line="TalkBack reads the tree. Only the tree." />

      {/* 06.2 the audit finds the cheap ones */}
      <Eyebrow on={at(1)} out={gone(1)} text="a11y-audit · tree_audit.py · before the fixes" color={C} />
      <Say on={at(1)} out={gone(1)} text="Four controls with no name." />
      <Mono on={at(1)} out={gone(1)} x={150} y={420} size={30} lines={CAP.auditBroken.map((l) => mark(l, 'unlabeled'))} />

      {/* 06.3 what TalkBack says: settings switch */}
      <Eyebrow on={at(2)} out={gone(2)} text="talkback-speak · a settings switch" color={C} />
      <Reveal on={at(2)} out={gone(2)} x={150} y={200}><div className="t-meta" style={{ fontSize: 26 }}>before</div></Reveal>
      <Mono on={at(2)} out={gone(2)} x={150} y={260} size={32} lines={CAP.speakSettingsBefore.map((l) => (l.includes('unlabeled') ? mark(l, '«unlabeled»') : l))} />
      <Reveal on={at(2)} out={gone(2)} x={150} y={560}><div className="t-meta" style={{ fontSize: 26 }}>after</div></Reveal>
      <Mono on={at(2)} out={gone(2)} x={150} y={620} size={32} lines={[...CAP.speakSettingsAfter]} />

      {/* 06.4 the tool does not flag it: announced twice */}
      <Eyebrow on={at(3)} out={gone(3)} text="what the scanner does not flag" color={C} />
      <Say on={at(3)} out={gone(3)} text="Every poster, twice." />
      <Reveal on={at(3)} out={gone(3)} x={150} y={400}><div className="t-meta" style={{ fontSize: 26 }}>before</div></Reveal>
      <Mono on={at(3)} out={gone(3)} x={150} y={460} size={24} lines={CAP.speakPostersBefore.map((l, i) => (i % 2 === 1 ? mark(l, l) : l))} />
      <Reveal on={at(3)} out={gone(3)} x={1060} y={400}><div className="t-meta" style={{ fontSize: 26 }}>after</div></Reveal>
      <Mono on={at(3)} out={gone(3)} x={1060} y={460} size={24} lines={[...CAP.speakPostersAfter]} />

      {/* 06.5 two controls for one thing */}
      <Eyebrow on={at(4)} out={gone(4)} text="a checkbox beside a clickable row" color={C} />
      <Say on={at(4)} out={gone(4)} text="One thing, two controls, one unnamed." size={72} />
      <Reveal on={at(4)} out={gone(4)} x={150} y={300}><div className="t-meta" style={{ fontSize: 24 }}>before</div></Reveal>
      <Mono on={at(4)} out={gone(4)} x={150} y={350} size={24} lines={code(CODE.watchedBefore)} />
      <Reveal on={at(4)} out={gone(4)} x={150} y={540}><div className="t-meta" style={{ fontSize: 24 }}>after</div></Reveal>
      <Mono on={at(4)} out={gone(4)} x={150} y={585} size={22} lines={code(CODE.watchedAfter)} />
      <Mono on={at(4)} out={gone(4)} x={150} y={900} size={24} lines={[...CAP.speakDetailBefore.map((l) => mark(l, 'button')), ...CAP.speakDetailAfter.map((l) => mark(l, 'checkbox'))]} />

      {/* 06.6 the stack behind the top card */}
      <Eyebrow on={at(5)} out={gone(5)} text="a card deck" color={C} />
      <Say on={at(5)} out={gone(5)} text="TalkBack walks the whole stack." />
      <Reveal on={at(5)} out={gone(5)} x={150} y={400}><div className="t-meta" style={{ fontSize: 26 }}>before</div></Reveal>
      <Mono on={at(5)} out={gone(5)} x={150} y={460} size={26} lines={CAP.speakTriageBefore.map((l, i) => (i < 2 ? mark(l, l) : l))} />
      <Reveal on={at(5)} out={gone(5)} x={1060} y={400}><div className="t-meta" style={{ fontSize: 26 }}>after</div></Reveal>
      <Mono on={at(5)} out={gone(5)} x={1060} y={460} size={26} lines={[...CAP.speakTriageAfter]} />
      <Mono on={at(5)} out={gone(5)} x={150} y={760} size={24} lines={code(CODE.triageHide)} />

      {/* 06.7 a picture with no description */}
      <Eyebrow on={at(6)} out={gone(6)} text="on-device · Gemini Nano via ML Kit GenAI" color={C} />
      <Say on={at(6)} out={gone(6)} text="A picture nobody described." />
      <Mono on={at(6)} out={gone(6)} x={150} y={400} size={22} lines={code(CODE.describe)} />
      <Reveal on={at(6)} out={gone(6)} x={150} y={800}>
        <div data-audit="off" style={{ width: 1620, border: '3px dashed var(--hair-strong)', padding: '26px 34px' }}>
          <span className="t-eyebrow">TODO · capture on the Pixel</span>
          <span className="t-editorial" style={{ fontSize: 40, marginLeft: 32 }}>the description Gemini Nano gives for a real backdrop</span>
        </div>
      </Reveal>

      {/* 06.8 limits of that */}
      <Say on={at(7)} text="English only." y={250} size={150} />
      <Say on={at(7)} text="Beta." y={440} size={150} color="var(--ink-2)" />
      <Say on={at(7)} text="It can describe what is not there." y={630} size={92} />
    </>
  );
}

/** 06 BLIND — audit, listen, fix; then what a model on the phone can add. */
export const Blind = () => <Scene index={5}><Blind_ /></Scene>;
