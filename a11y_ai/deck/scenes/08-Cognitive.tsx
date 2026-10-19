import { Reveal, Scene, useScene } from 'beatdeck';
import { CODE } from '../code';
import { Eyebrow, Mono, PersonIntro, Say, Shot } from '../ui';
import synopsis from '../assets/detail-synopsis.png';

const C = 'var(--cognitive)';
const code = (s: string) => s.split('\n');

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

      <Eyebrow on={at(1)} out={gone(1)} text="a movie's detail screen" color={C} />
      <Say on={at(1)} out={gone(1)} text="One block. 68 words." size={80} />
      <Shot on={at(1)} out={gone(1)} src={synopsis} alt="A movie detail screen: the synopsis is one long paragraph" x={150} y={290} h={700} />

      <Eyebrow on={at(2)} out={gone(2)} text="on-device · Rewriting · SHORTEN" color={C} />
      <Say on={at(2)} out={gone(2)} text="A button. Nothing leaves the phone." size={72} />
      <Mono on={at(2)} out={gone(2)} x={150} y={400} size={22} lines={code(CODE.shorten)} />
      <Reveal on={at(2)} out={gone(2)} x={150} y={800}>
        <div data-audit="off" style={{ width: 1620, border: '3px dashed var(--hair-strong)', padding: '26px 34px' }}>
          <span className="t-eyebrow">TODO · capture on the Pixel</span>
          <span className="t-editorial" style={{ fontSize: 40, marginLeft: 32 }}>“Short &amp; simple” on a real synopsis, with its label</span>
        </div>
      </Reveal>

      <Eyebrow on={at(3)} out={gone(3)} text="which languages, per API" color={C} />
      <Say on={at(3)} out={gone(3)} text="Check the language first." size={84} />
      {SUPPORT.map(([api, langs], i) => (
        <Reveal key={api} on={at(3)} out={gone(3)} x={150} y={400 + i * 170} delay={i * 200}>
          <div className="t-meta" style={{ fontSize: 26 }}>{api}</div>
          <div className="t-editorial" style={{ fontSize: 46, marginTop: 10, width: 1620 }}>{langs}</div>
        </Reveal>
      ))}
      <Reveal on={at(3)} out={gone(3)} x={150} y={930}><div className="t-meta" style={{ fontSize: 24, textTransform: 'none', letterSpacing: '0.02em' }}>Google ML Kit GenAI docs, beta · docs/research.md R1.3–R1.5</div></Reveal>
    </>
  );
}

/** 08 COGNITIVE — "Short & simple" with a model on the phone. */
export const Cognitive = () => <Scene index={7}><Cognitive_ /></Scene>;
