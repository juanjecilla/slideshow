import { Reveal, Scene, useScene, type TermLine } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { OV } from '../overlays';
import { Eyebrow, Mono, Panel, PersonIntro, Phone, Say } from '../ui';
import pixelDescribe from '../assets/pixel-describe.png';
import settings from '../assets/settings-before.png';
import posters from '../assets/posters-before.png';
import detail from '../assets/detail-before.png';
import triage from '../assets/triage-before.png';

const C = 'var(--blind)';
const mark = (t: string, ...texts: string[]): TermLine => ({ t, marks: texts.map((text) => ({ text })) });
const code = (s: string) => s.split('\n');
const PX = 1380;

function Blind_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Blind" color={C} line="TalkBack reads the tree. Only the tree." />
      <Phone on={at(0)} out={gone(0)} src={settings} alt="Muviss settings screen" x={PX} y={110} />

      <Eyebrow on={at(1)} out={gone(1)} text="a11y-audit · tree_audit.py · before the fixes" />
      <Say on={at(1)} out={gone(1)} text="Four controls with no name." />
      <Mono right={1340} on={at(1)} out={gone(1)} x={120} y={300} size={26} title="tree_audit.py" lines={CAP.auditBroken.map((l) => mark(l, 'unlabeled'))} />
      <Phone on={at(1)} out={gone(1)} src={settings} alt="Settings screen with the two unlabeled switches boxed in red" x={PX} y={110} overlays={OV.settingsBefore} boxes={at(1)} />

      <Eyebrow on={at(2)} out={gone(2)} text="talkback-speak · a settings switch" />
      <Say on={at(2)} out={gone(2)} text="What a blind user hears." />
      <Mono right={1340} on={at(2)} out={gone(2)} x={120} y={300} size={28} title="before" lines={CAP.speakSettingsBefore.map((l) => (l.includes('unlabeled') ? mark(l, '«unlabeled»') : l))} />
      <Mono right={1340} on={at(2)} out={gone(2)} x={120} y={600} size={28} title="after" lines={[...CAP.speakSettingsAfter]} />
      <Phone on={at(2)} out={gone(2)} src={settings} alt="Settings screen" x={PX} y={110} overlays={OV.settingsBefore} boxes={at(2)} />

      <Eyebrow on={at(3)} out={gone(3)} text="what the scanner does not flag" />
      <Say on={at(3)} out={gone(3)} text="Every poster, twice." />
      <Mono right={1340} on={at(3)} out={gone(3)} x={120} y={300} size={24} title="before" lines={CAP.speakPostersBefore.map((l, i) => (i % 2 === 1 ? mark(l, l) : l))} />
      <Mono right={1340} on={at(3)} out={gone(3)} x={120} y={600} size={24} title="after" lines={[...CAP.speakPostersAfter]} />
      <Phone on={at(3)} out={gone(3)} src={posters} alt="Muviss poster row: the first poster is read as a button and again as text" x={PX} y={110} overlays={OV.postersBefore} boxes={at(3)} />

      <Eyebrow on={at(4)} out={gone(4)} text="a checkbox beside a clickable row" />
      <Say on={at(4)} out={gone(4)} text="Two controls, one unnamed." size={56} />
      <Mono on={at(4)} out={gone(4)} x={120} y={250} size={22} right={1340} title="before" lang="kotlin" lines={code(CODE.watchedBefore)} />
      <Mono on={at(4)} out={gone(4)} x={120} y={520} size={22} right={1340} title="after" lang="kotlin" lines={code(CODE.watchedAfter)} />
      <Phone on={at(4)} out={gone(4)} src={detail} alt="Detail screen: the row says button and a separate unlabeled checkbox is boxed" x={PX} y={110} overlays={OV.detailBefore} boxes={at(4)} />

      <Eyebrow on={at(5)} out={gone(5)} text="talkback-speak · the watched row" />
      <Say on={at(5)} out={gone(5)} text="One control, one name." size={56} />
      <Mono right={1340} on={at(5)} out={gone(5)} x={120} y={300} size={28} title="before" lines={CAP.speakDetailBefore.map((l) => mark(l, 'button'))} />
      <Mono right={1340} on={at(5)} out={gone(5)} x={120} y={600} size={28} title="after" lines={CAP.speakDetailAfter.map((l) => mark(l, 'checkbox'))} />
      <Phone on={at(5)} out={gone(5)} src={detail} alt="Detail screen: the row says button and a separate unlabeled checkbox is boxed" x={PX} y={110} overlays={OV.detailBefore} boxes={at(5)} />

      <Eyebrow on={at(6)} out={gone(6)} text="a card deck" />
      <Say on={at(6)} out={gone(6)} text="TalkBack walks the whole stack." size={56} />
      <Mono right={1340} on={at(6)} out={gone(6)} x={120} y={290} size={24} title="before" lines={CAP.speakTriageBefore.map((l, i) => (i < 2 ? mark(l, l) : l))} />
      <Mono right={1340} on={at(6)} out={gone(6)} x={120} y={560} size={24} title="after" lines={[...CAP.speakTriageAfter]} />
      <Mono on={at(6)} out={gone(6)} x={120} y={800} size={18} right={1340} fit={false} lang="kotlin" lines={code(CODE.triageHide)} />
      <Phone on={at(6)} out={gone(6)} src={triage} alt="Triage deck: the cards behind the top one are boxed" x={PX} y={110} overlays={OV.triageBefore} boxes={at(6)} />

      <Eyebrow on={at(7)} out={gone(7)} text="on-device · Gemini Nano via ML Kit GenAI" />
      <Say on={at(7)} out={gone(7)} text="A picture nobody described." />
      <Mono right={1340} on={at(7)} out={gone(7)} x={120} y={260} size={20} title="MlKitOnDeviceAi.describeImage" lang="kotlin" lines={code(CODE.describe)} />
      <Reveal on={at(7)} out={gone(7)} x={120} y={720}>
        <Panel title="Pixel 9 Pro · on device · the app's own output" style={{ width: 1150 }}>
          <div className="t-editorial" style={{ fontSize: 38 }}>“A dark car drives down a dusty road towards a sunset with strange, fiery plumes rising in the distance.”</div>
        </Panel>
      </Reveal>
      <Phone on={at(7)} out={gone(7)} src={pixelDescribe} alt="Muviss detail screen on a Pixel 9 Pro: the on-device description of the backdrop, in English, shown under the synopsis" x={PX} y={110} aspect={960 / 1990} />

      <Reveal on={at(8)} x={120} y={230}><div className="panel" style={{ width: 1500 }}><div className="panel-body"><div className="t-statement" style={{ fontSize: 120 }}>English only.</div></div></div></Reveal>
      <Reveal on={at(8)} x={120} y={470} delay={200}><div className="panel" style={{ width: 1500 }}><div className="panel-body"><div className="t-statement" style={{ fontSize: 120, color: 'var(--warning)' }}>Beta.</div></div></div></Reveal>
      <Reveal on={at(8)} x={120} y={710} delay={400}><div className="panel" style={{ width: 1500 }}><div className="panel-body"><div className="t-statement" style={{ fontSize: 76 }}>It can describe what is not there.</div></div></div></Reveal>
    </>
  );
}

/** 06 BLIND — audit, listen, fix; then what a model on the phone can add. */
export const Blind = () => <Scene index={5}><Blind_ /></Scene>;
