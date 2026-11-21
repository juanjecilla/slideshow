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
      <PersonIntro on={at(0)} out={gone(0)} name="Ceguera" color={C} line="TalkBack lee el árbol. Solo el árbol." />
      <Phone on={at(0)} out={gone(0)} src={settings} alt="Pantalla de ajustes de Muviss" x={PX} y={110} />

      <Eyebrow on={at(1)} out={gone(1)} text="a11y-audit · tree_audit.py · antes de las correcciones" />
      <Say on={at(1)} out={gone(1)} text="Cuatro controles sin nombre." />
      <Mono right={1340} on={at(1)} out={gone(1)} x={120} y={300} size={26} title="tree_audit.py" lines={CAP.auditBroken.map((l) => mark(l, 'unlabeled'))} />
      <Phone on={at(1)} out={gone(1)} src={settings} alt="Pantalla de ajustes con los dos interruptores sin etiqueta enmarcados en rojo" x={PX} y={110} overlays={OV.settingsBefore} boxes={at(1)} />

      <Eyebrow on={at(2)} out={gone(2)} text="talkback-speak · un interruptor de ajustes" />
      <Say on={at(2)} out={gone(2)} text="Lo que oye una persona ciega." />
      <Mono right={1340} on={at(2)} out={gone(2)} x={120} y={300} size={28} title="antes" lines={CAP.speakSettingsBefore.map((l) => (l.includes('unlabeled') ? mark(l, '«unlabeled»') : l))} />
      <Mono right={1340} on={at(2)} out={gone(2)} x={120} y={600} size={28} title="después" lines={[...CAP.speakSettingsAfter]} />
      <Phone on={at(2)} out={gone(2)} src={settings} alt="Pantalla de ajustes" x={PX} y={110} overlays={OV.settingsBefore} boxes={at(2)} />

      <Eyebrow on={at(3)} out={gone(3)} text="lo que el escáner no marca" />
      <Say on={at(3)} out={gone(3)} text="Cada póster, dos veces." />
      <Mono right={1340} on={at(3)} out={gone(3)} x={120} y={300} size={24} title="antes" lines={CAP.speakPostersBefore.map((l, i) => (i % 2 === 1 ? mark(l, l) : l))} />
      <Mono right={1340} on={at(3)} out={gone(3)} x={120} y={600} size={24} title="después" lines={[...CAP.speakPostersAfter]} />
      <Phone on={at(3)} out={gone(3)} src={posters} alt="Fila de pósters de Muviss: el primer póster se lee como botón y otra vez como texto" x={PX} y={110} overlays={OV.postersBefore} boxes={at(3)} />

      <Eyebrow on={at(4)} out={gone(4)} text="una casilla junto a una fila pulsable" />
      <Say on={at(4)} out={gone(4)} text="Dos controles, uno sin nombre." size={56} />
      <Mono on={at(4)} out={gone(4)} x={120} y={250} size={22} right={1340} title="antes" lang="kotlin" lines={code(CODE.watchedBefore)} />
      <Mono on={at(4)} out={gone(4)} x={120} y={520} size={22} right={1340} title="después" lang="kotlin" lines={code(CODE.watchedAfter)} />
      <Phone on={at(4)} out={gone(4)} src={detail} alt="Pantalla de detalle: la fila dice botón y una casilla aparte sin etiqueta aparece enmarcada" x={PX} y={110} overlays={OV.detailBefore} boxes={at(4)} />

      <Eyebrow on={at(5)} out={gone(5)} text="talkback-speak · la fila de «vista»" />
      <Say on={at(5)} out={gone(5)} text="Un control, un nombre." size={56} />
      <Mono right={1340} on={at(5)} out={gone(5)} x={120} y={300} size={28} title="antes" lines={CAP.speakDetailBefore.map((l) => mark(l, 'button'))} />
      <Mono right={1340} on={at(5)} out={gone(5)} x={120} y={600} size={28} title="después" lines={CAP.speakDetailAfter.map((l) => mark(l, 'checkbox'))} />
      <Phone on={at(5)} out={gone(5)} src={detail} alt="Pantalla de detalle: la fila dice botón y una casilla aparte sin etiqueta aparece enmarcada" x={PX} y={110} overlays={OV.detailBefore} boxes={at(5)} />

      <Eyebrow on={at(6)} out={gone(6)} text="un mazo de tarjetas" />
      <Say on={at(6)} out={gone(6)} text="TalkBack recorre toda la pila." size={56} />
      <Mono right={1340} on={at(6)} out={gone(6)} x={120} y={290} size={24} title="antes" lines={CAP.speakTriageBefore.map((l, i) => (i < 2 ? mark(l, l) : l))} />
      <Mono right={1340} on={at(6)} out={gone(6)} x={120} y={560} size={24} title="después" lines={[...CAP.speakTriageAfter]} />
      <Mono on={at(6)} out={gone(6)} x={120} y={800} size={18} right={1340} fit={false} lang="kotlin" lines={code(CODE.triageHide)} />
      <Phone on={at(6)} out={gone(6)} src={triage} alt="Mazo de triaje: las tarjetas detrás de la de arriba aparecen enmarcadas" x={PX} y={110} overlays={OV.triageBefore} boxes={at(6)} />

      <Eyebrow on={at(7)} out={gone(7)} text="en el dispositivo · Gemini Nano vía ML Kit GenAI" />
      <Say on={at(7)} out={gone(7)} text="Una imagen que nadie describió." />
      <Mono right={1340} on={at(7)} out={gone(7)} x={120} y={260} size={20} title="MlKitOnDeviceAi.describeImage" lang="kotlin" lines={code(CODE.describe)} />
      <Reveal on={at(7)} out={gone(7)} x={120} y={720}>
        <Panel title="Pixel 9 Pro · en el dispositivo · salida de la propia app" style={{ width: 1150 }}>
          <div className="t-editorial" style={{ fontSize: 38 }}>“A dark car drives down a dusty road towards a sunset with strange, fiery plumes rising in the distance.”</div>
          <div className="t-meta" style={{ fontSize: 24, marginTop: 14, textTransform: 'none', letterSpacing: '0.02em' }}>En inglés: la API solo describe en inglés.</div>
        </Panel>
      </Reveal>
      <Phone on={at(7)} out={gone(7)} src={pixelDescribe} alt="Pantalla de detalle de Muviss en un Pixel 9 Pro: la descripción del fondo generada en el dispositivo, en inglés, bajo la sinopsis" x={PX} y={110} aspect={960 / 1990} />

      <Reveal on={at(8)} x={120} y={230}><div className="panel" style={{ width: 1500 }}><div className="panel-body"><div className="t-statement" style={{ fontSize: 120 }}>Solo en inglés.</div></div></div></Reveal>
      <Reveal on={at(8)} x={120} y={470} delay={200}><div className="panel" style={{ width: 1500 }}><div className="panel-body"><div className="t-statement" style={{ fontSize: 120, color: 'var(--warning)' }}>Beta.</div></div></div></Reveal>
      <Reveal on={at(8)} x={120} y={710} delay={400}><div className="panel" style={{ width: 1500 }}><div className="panel-body"><div className="t-statement" style={{ fontSize: 76 }}>Puede describir lo que no está.</div></div></div></Reveal>
    </>
  );
}

/** 06 BLIND — audit, listen, fix; then what a model on the phone can add. */
export const Blind = () => <Scene index={5}><Blind_ /></Scene>;
