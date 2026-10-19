import { Scene } from 'beatdeck';
import { CAP } from '../assets';
import { CODE, SRC } from '../code';
import { DOCS } from '../docs-code';
import { Bullets, Capture, Eyebrow, Intertitle, Line, Mono, Say, Src, useBeat, Western } from '../ui';

/** R1. `isNew` marks what the original deck (3 classes) did not have. */
const CLASSES = [
  { name: 'Compact', w: '< 600 dp', isNew: false },
  { name: 'Medium', w: '600 dp ≤ width < 840 dp', isNew: false },
  { name: 'Expanded', w: '840 dp ≤ width < 1200 dp', isNew: false },
  { name: 'Large', w: '1200 dp ≤ width < 1600 dp', isNew: true },
  { name: 'Extra-large', w: '≥ 1600 dp', isNew: true },
] as const;

function BuenoWsc_() {
  const { here, b, at, gone, span } = useBeat();
  return (
    <>
      {/* 4.1 */}
      <Intertitle on={at(0)} out={gone(0)} part="3 · Adaptive Layouts" name="El Bueno" />

      {/* 4.2 the five pieces */}
      <Eyebrow on={at(1)} out={gone(1)} text="Adaptive Layouts" />
      <Bullets here={here} b={b} from={1} to={1} together y={240} size={84} gap={40}
        items={['Jetpack Compose', 'Window Size Classes', 'Window Insets', 'Material 3 Adaptive', 'Adaptive input methods']} />

      {/* 4.3 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Window Size Classes" />
      <Say on={at(2)} out={gone(2)} text="Independiente" y={330} size={170} />
      <Say on={at(2)} out={gone(2)} text="del dispositivo." y={540} size={170} color="var(--accent)" />

      {/* 4.4–4.5 the classes: three in the original, five today */}
      <Eyebrow on={span(3, 4)} out={gone(4)} text={at(3) ? 'Window Size Classes · 3 tamaños' : 'Window Size Classes · hoy, 5'} />
      {CLASSES.map((c, i) => (
        <div key={c.name}>
          <Say on={i < 3 ? span(3, 4) : at(4)} out={gone(4)} text={c.name} y={230 + i * 140} size={84} color={c.isNew ? 'var(--accent)' : undefined} />
          <Mono on={i < 3 ? span(3, 4) : at(4)} out={gone(4)} x={800} y={250 + i * 140} size={44} lines={[c.w]} />
        </div>
      ))}
      <Src on={at(4)} out={gone(4)} y={950} text="developer.android.com · Use window size classes (actualizada 22-sep-2026)" />

      {/* 4.6 opt-in */}
      <Eyebrow on={at(5)} out={gone(5)} text="Large y Extra-large" />
      <Say on={at(5)} out={gone(5)} text="Son opt-in." y={250} size={170} />
      <Mono on={at(5)} out={gone(5)} y={560} size={34} lines={DOCS.largeXl} />
      <Src on={at(5)} out={gone(5)} y={680} text="Documentación oficial · no es de Muviss" />

      {/* 4.7 posture */}
      <Say on={at(6)} out={gone(6)} text="HingeInfo / Posture" y={330} size={140} />
      <Line on={at(6)} out={gone(6)} text="Plegables: bisagra y postura." y={560} size={64} />
      <Line on={at(6)} out={gone(6)} text="Muviss todavía no lo usa." y={680} size={64} dim />

      {/* 4.8 Muviss case 1 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Caso 1 · Muviss" />
      <Western on={at(7)} out={gone(7)} text="¿Barra o rail?" y={380} size={200} />

      {/* 4.9–4.10 code */}
      <Eyebrow on={at(8)} out={gone(8)} text="Muviss · MuvissApp.kt" />
      <Mono on={at(8)} out={gone(8)} y={300} size={30} lines={CODE.wscCode} />
      <Src on={at(8)} out={gone(8)} y={520} text={SRC.wscCode} />
      <Eyebrow on={at(9)} out={gone(9)} text="Muviss · MuvissApp.kt" />
      <Mono on={at(9)} out={gone(9)} x={60} y={250} size={24} lines={CODE.wscWhen} />
      <Src on={at(9)} out={gone(9)} x={60} y={700} text={SRC.wscWhen} />

      {/* 4.11 captures */}
      <Capture on={at(10)} out={gone(10)} x={150} y={170} w={700} h={740} src={CAP.railCompact} label="Compact: barra inferior" todo="Muviss en ancho compact (< 600 dp), con la barra de navegación abajo." />
      <Capture on={at(10)} out={gone(10)} x={900} y={170} w={870} h={740} src={CAP.railExpanded} label="Expanded: rail" todo="Muviss en ancho expanded, con el rail a la izquierda." />

      {/* 4.12 why */}
      <Eyebrow on={at(11)} out={gone(11)} text="Muviss · por qué" />
      <Say on={at(11)} out={gone(11)} text="Un rail deja los pósters" y={290} size={120} />
      <Say on={at(11)} out={gone(11)} text="a todo el ancho." y={450} size={120} />
      <Line on={at(11)} out={gone(11)} text="Cinco destinos no justifican un drawer." y={700} size={64} dim />
    </>
  );
}
export const BuenoWsc = () => <Scene index={3}><BuenoWsc_ /></Scene>;
