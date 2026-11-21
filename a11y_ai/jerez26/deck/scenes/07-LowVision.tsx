import { Reveal, Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { OV } from '../overlays';
import { Eyebrow, Mono, Panel, PersonIntro, Phone, Say } from '../ui';
import navBefore from '../assets/nav-200-before.png';
import navAfter from '../assets/nav-200-after.png';
import grid100 from '../assets/grid-100.png';
import grid200 from '../assets/grid-200-after.png';

const C = 'var(--lowvision)';
const code = (s: string) => s.split('\n');
const PX = 1380;

function LowVision_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Baja visión" color={C} line="Texto al 200 %. Todo tiene que aguantarlo." />
      <Phone on={at(0)} out={gone(0)} src={navBefore} alt="Muviss con el texto al 200 %" x={PX} y={110} />

      <Eyebrow on={at(1)} out={gone(1)} text="device-toggles · escala de fuente 2.0 + una captura" />
      <Say on={at(1)} out={gone(1)} text="La auditoría no ve nada." size={84} y={250} />
      <Reveal on={at(1)} out={gone(1)} x={120} y={400}><span className="chip ok" style={{ fontSize: 30 }}>tree_audit.py: 0 errores</span></Reveal>
      <Say on={at(1)} out={gone(1)} text="Tus ojos sí." size={84} y={520} color="var(--fault)" />
      <Phone on={at(1)} out={gone(1)} src={navBefore} alt="Barra inferior con el texto al 200 %: «Searc/h», «Librar/y», «Progr/ess», cortadas a mitad de palabra" x={PX} y={110} overlays={OV.navBefore} boxes={at(1)} />

      <Eyebrow on={at(2)} out={gone(2)} text="la corrección" />
      <Say on={at(2)} out={gone(2)} text="Etiquetas con tope en 1,3×." size={60} />
      <Reveal on={at(2)} out={gone(2)} x={120} y={280}><Panel style={{ width: 820 }}><div className="t-editorial" style={{ fontSize: 36, lineHeight: 1.25, color: 'var(--ink-2)' }}>Contrapartida, dicha en voz alta: estas cinco etiquetas dejan de seguir del todo al usuario. El resto de la app, sí.</div></Panel></Reveal>
      <Mono on={at(2)} out={gone(2)} x={120} y={770} size={21} title="MuvissApp.kt" lang="kotlin" lines={code(CODE.navCap)} />
      <Phone on={at(2)} out={gone(2)} src={navBefore} alt="Antes" x={1060} y={110} h={640} overlays={OV.navBefore} boxes={at(2)} />
      <Phone on={at(2)} out={gone(2)} src={navAfter} alt="Después: palabras completas" x={1420} y={110} h={640} overlays={OV.navAfter} boxes={at(2)} />

      <Eyebrow on={at(3)} out={gone(3)} text="la misma señal, otro lugar" />
      <Say on={at(3)} out={gone(3)} text="Más texto, menos columnas." size={60} />
      <Mono on={at(3)} out={gone(3)} x={120} y={850} size={22} title="PosterGridCells.kt" lang="kotlin" lines={code(CODE.gridCells)} />
      <Phone on={at(3)} out={gone(3)} src={grid100} alt="Resultados de búsqueda con el tamaño de texto normal" x={1060} y={110} h={640} />
      <Phone on={at(3)} out={gone(3)} src={grid200} alt="Resultados de búsqueda con el texto al 200 %: una sola tarjeta ancha" x={1420} y={110} h={640} />
      <Reveal on={at(3)} out={gone(3)} x={1100} y={765}><span className="chip">100%</span></Reveal>
      <Reveal on={at(3)} out={gone(3)} x={1460} y={765}><span className="chip ok">200%</span></Reveal>

      <Eyebrow on={at(4)} out={gone(4)} text="contrast-check · literales" />
      <Say on={at(4)} out={gone(4)} text="Texto ámbar sobre un póster." size={70} />
      <Mono on={at(4)} out={gone(4)} x={120} y={300} size={28} title="contrast.py literals" lines={[...CAP.literalsShort]} />
      <Reveal on={at(4)} out={gone(4)} x={120} y={520}><Panel style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 52, lineHeight: 1.25 }}>El fondo es lo que sea el póster.<br /><span style={{ color: 'var(--ink-2)' }}>Ningún script puede aprobar ni suspender eso.</span></div></Panel></Reveal>
    </>
  );
}

/** 07 LOW VISION — font scale: the audit misses it, the screenshot shows it. */
export const LowVision = () => <Scene index={6}><LowVision_ /></Scene>;
