import { Reveal, Scene, useScene } from 'beatdeck';
import { CODE } from '../code';
import { OV } from '../overlays';
import { Eyebrow, Mono, Panel, PersonIntro, Phone, Say } from '../ui';
import synopsis from '../assets/detail-synopsis.png';
import detailAfter from '../assets/detail-after.png';

const C = 'var(--cognitive)';
const code = (s: string) => s.split('\n');
const PX = 1380;

const SUPPORT: [string, string][] = [
  ['Image description', 'English'],
  ['Summarization', 'English · Japanese · Korean'],
  ['Rewriting (shorten)', 'English · Spanish · French · German · Italian · Japanese · Korean'],
];

function Cognitive_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Cognitive" color={C} line="Dyslexia. Attention. A wall of text is a wall." />
      <Phone on={at(0)} out={gone(0)} src={synopsis} alt="A movie detail screen" x={PX} y={110} />

      <Eyebrow on={at(1)} out={gone(1)} text="a movie's detail screen" />
      <Say on={at(1)} out={gone(1)} text="One block. 68 words." size={84} y={260} />
      <Reveal on={at(1)} out={gone(1)} x={120} y={420}><span className="chip info" style={{ fontSize: 30 }}>counted from the capture</span></Reveal>
      <Phone on={at(1)} out={gone(1)} src={synopsis} alt="Detail screen: the synopsis is one long paragraph, boxed" x={PX} y={110} overlays={OV.synopsis} boxes={at(1)} />

      <Eyebrow on={at(2)} out={gone(2)} text="on-device · Rewriting · SHORTEN" />
      <Say on={at(2)} out={gone(2)} text="A button. Nothing leaves the phone." size={56} />
      <Mono on={at(2)} out={gone(2)} x={120} y={260} size={20} title="MlKitOnDeviceAi.shorten" lines={code(CODE.shorten)} />
      <Reveal on={at(2)} out={gone(2)} x={120} y={720}>
        <div data-audit="off" style={{ width: 1150, border: '3px dashed var(--hair-strong)', borderRadius: 18, padding: '24px 30px', background: 'var(--surface)' }}>
          <span className="t-eyebrow">TODO · capture on the Pixel</span>
          <div className="t-editorial" style={{ fontSize: 38, marginTop: 10 }}>“Short &amp; simple” on a real synopsis, with its label</div>
        </div>
      </Reveal>
      <Phone on={at(2)} out={gone(2)} src={detailAfter} alt="Detail screen" x={PX} y={110} />

      <Eyebrow on={at(3)} out={gone(3)} text="which languages, per API" />
      <Say on={at(3)} out={gone(3)} text="Check the language first." size={72} />
      {SUPPORT.map(([api, langs], i) => (
        <Reveal key={api} on={at(3)} out={gone(3)} x={120} y={310 + i * 200} delay={i * 200}>
          <Panel title={api} style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 44 }}>{langs}</div></Panel>
        </Reveal>
      ))}
      <Reveal on={at(3)} out={gone(3)} x={120} y={930}><div className="t-meta" style={{ fontSize: 22, textTransform: 'none' }}>Google ML Kit GenAI docs, beta · docs/research.md R1.3–R1.5</div></Reveal>
    </>
  );
}

/** 08 COGNITIVE — "Short & simple" with a model on the phone. */
export const Cognitive = () => <Scene index={7}><Cognitive_ /></Scene>;
