import { Reveal, Scene, useScene } from 'beatdeck';
import { CODE } from '../code';
import { OV } from '../overlays';
import { Eyebrow, Mono, Panel, PersonIntro, Phone, Say } from '../ui';
import synopsis from '../assets/detail-synopsis.png';
import pixelShorten from '../assets/pixel-shorten.png';

const C = 'var(--cognitive)';
const code = (s: string) => s.split('\n');
const PX = 1380;

const SUPPORT: [string, string][] = [
  ['Descripción de imágenes', 'Inglés'],
  ['Resúmenes', 'Inglés · japonés · coreano'],
  ['Reescritura (acortar)', 'Inglés · español · francés · alemán · italiano · japonés · coreano'],
];

function Cognitive_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Cognitiva" color={C} line="Dislexia. Atención. Un muro de texto es un muro." />
      <Phone on={at(0)} out={gone(0)} src={synopsis} alt="Pantalla de detalle de una película" x={PX} y={110} />

      <Eyebrow on={at(1)} out={gone(1)} text="la pantalla de detalle de una película" />
      <Say on={at(1)} out={gone(1)} text="Un bloque. 68 palabras." size={84} y={260} />
      <Reveal on={at(1)} out={gone(1)} x={120} y={420}><span className="chip info" style={{ fontSize: 30 }}>contadas en la captura</span></Reveal>
      <Phone on={at(1)} out={gone(1)} src={synopsis} alt="Pantalla de detalle: la sinopsis es un único párrafo largo, enmarcado" x={PX} y={110} overlays={OV.synopsis} boxes={at(1)} />

      <Eyebrow on={at(2)} out={gone(2)} text="en el dispositivo · Rewriting · SHORTEN" />
      <Say on={at(2)} out={gone(2)} text="Un botón. Nada sale del teléfono." size={56} />
      <Mono on={at(2)} out={gone(2)} x={120} y={640} size={22} title="MlKitOnDeviceAi.shorten" lang="kotlin" lines={code(CODE.shorten)} />
      <Reveal on={at(2)} out={gone(2)} x={120} y={260}>
        <Panel title="Pixel 9 Pro · en el dispositivo · 78 palabras → 36" style={{ width: 1150 }}>
          <div className="t-editorial" style={{ fontSize: 36 }}>Sam y Dean Winchester perdieron a su madre por una fuerza demoníaca. Su padre los entrenó como soldados para luchar contra el mal en América. Ahora viajan en su Impala del '67, enfrentándose a amenazas sobrenaturales.</div>
        </Panel>
      </Reveal>
      <Phone on={at(2)} out={gone(2)} src={pixelShorten} alt="Pantalla de detalle de Muviss en un Pixel 9 Pro: la sinopsis acortada en el dispositivo, con la etiqueta «Acortado en tu dispositivo»" x={PX} y={110} h={500} aspect={960 / 1990} />

      <Eyebrow on={at(3)} out={gone(3)} text="qué idiomas admite cada API" />
      <Say on={at(3)} out={gone(3)} text="Comprueba antes el idioma." size={72} />
      {SUPPORT.map(([api, langs], i) => (
        <Reveal key={api} on={at(3)} out={gone(3)} x={120} y={310 + i * 200} delay={i * 200}>
          <Panel title={api} style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 40 }}>{langs}</div></Panel>
        </Reveal>
      ))}
      <Reveal on={at(3)} out={gone(3)} x={120} y={930}><div className="t-meta" style={{ fontSize: 22, textTransform: 'none' }}>Documentación de Google ML Kit GenAI, beta</div></Reveal>
    </>
  );
}

/** 08 COGNITIVE — "Short & simple" with a model on the phone. */
export const Cognitive = () => <Scene index={7}><Cognitive_ /></Scene>;
