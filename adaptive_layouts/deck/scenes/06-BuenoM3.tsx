import { Scene } from 'beatdeck';
import { CAP } from '../assets';
import { CODE, SRC } from '../code';
import { DOCS } from '../docs-code';
import { Bullets, Capture, Eyebrow, Line, Mono, Say, Src, useBeat, Western } from '../ui';

function BuenoM3_() {
  const { here, b, at, gone } = useBeat();
  return (
    <>
      {/* 6.1 */}
      <Western on={at(0)} out={gone(0)} text="Material 3" y={250} size={200} />
      <Western on={at(0)} out={gone(0)} text="Adaptive" y={480} size={200} />

      {/* 6.2 */}
      <Say on={at(1)} out={gone(1)} text="NavigationSuiteScaffold" y={330} size={120} />
      <Line on={at(1)} out={gone(1)} text="Lo que ya vimos en Muviss." y={560} size={64} dim />

      {/* 6.3–6.4 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Material 3 Adaptive" />
      <Say on={at(2)} out={gone(2)} text="PaneScaffolds" y={250} size={150} />
      <Bullets here={here} b={b} from={2} to={2} together y={520} size={96} gap={40} items={['Supporting', 'ListDetail']} />
      <Eyebrow on={at(3)} out={gone(3)} text="Material 3 Adaptive" />
      <Bullets here={here} b={b} from={3} to={3} together y={300} size={120} gap={50} items={['Predictive Back', 'Navigable']} />

      {/* 6.5–6.6 the docs' list-detail, NOT Muviss */}
      <Eyebrow on={at(4)} out={gone(4)} text="Documentación oficial · no es Muviss" />
      <Mono on={at(4)} out={gone(4)} y={170} size={28} lines={DOCS.listDetail} />
      <Src on={at(4)} out={gone(4)} y={950} text="developer.android.com · List-detail layout (actualizada 16-oct-2026) · abreviado con …" />
      <Eyebrow on={at(5)} out={gone(5)} text="Documentación oficial · no es Muviss" />
      <Mono on={at(5)} out={gone(5)} y={250} size={30} lines={DOCS.listDetailBack} />
      <Line on={at(5)} out={gone(5)} text="Predictive back: por defecto al apuntar a la API 36." y={640} size={56} />
      <Src on={at(5)} out={gone(5)} y={780} text="developer.android.com · List-detail layout" />

      {/* 6.7 versions */}
      <Eyebrow on={at(6)} out={gone(6)} text="Versiones · 19 oct 2026" />
      <Mono on={at(6)} out={gone(6)} y={290} size={50} lines={['material3-adaptive  1.3.0         estable   12 ago 2026', 'material3-adaptive  1.4.0-alpha03  alpha      7 oct 2026', 'Muviss              1.2.0']} />
      <Src on={at(6)} out={gone(6)} y={560} text="developer.android.com · Compose Material3 Adaptive releases" />

      {/* 6.8 Muviss case 3 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Caso 3 · Muviss" />
      <Western on={at(7)} out={gone(7)} text="El detalle" y={380} size={200} />

      {/* 6.9 */}
      <Eyebrow on={at(8)} out={gone(8)} text="Muviss · DetailScreen.kt" />
      <Mono on={at(8)} out={gone(8)} y={220} size={34} lines={CODE.detailBp} />
      <Mono on={at(8)} out={gone(8)} y={390} size={34} lines={CODE.detailIf} />
      <Src on={at(8)} out={gone(8)} y={840} text={`${SRC.detailBp} · ${SRC.detailIf}`} />

      {/* 6.10 */}
      <Capture on={at(9)} out={gone(9)} x={150} y={170} w={560} h={740} src={CAP.detailCompact} label="Compact: una columna" todo="El detalle de una serie en ancho compact." />
      <Capture on={at(9)} out={gone(9)} x={760} y={170} w={1010} h={740} src={CAP.detailExpanded} label="Expanded: póster y texto, en dos columnas" todo="El detalle en ancho expanded (≥ 840 dp)." />

      {/* 6.11 grid */}
      <Eyebrow on={at(10)} out={gone(10)} text="Muviss · SearchScreen.kt" />
      <Mono on={at(10)} out={gone(10)} y={250} size={44} lines={CODE.grid} />
      <Src on={at(10)} out={gone(10)} y={540} text={SRC.grid} />
      <Say on={at(10)} out={gone(10)} text="Las columnas salen del ancho." y={700} size={100} color="var(--accent)" />

      {/* 6.12 caps */}
      <Eyebrow on={at(11)} out={gone(11)} text="Muviss · topes de ancho" />
      <Mono on={at(11)} out={gone(11)} x={60} y={250} size={28} lines={CODE.detailCap} />
      <Mono on={at(11)} out={gone(11)} x={60} y={420} size={28} lines={CODE.cardCap} />
      <Src on={at(11)} out={gone(11)} x={60} y={520} text={`${SRC.detailCap} · ${SRC.cardCap}`} />
      <Say on={at(11)} out={gone(11)} text="Para que se pueda leer." y={730} size={100} color="var(--accent)" />

      {/* 6.13 the bug */}
      <Eyebrow on={at(12)} out={gone(12)} text="Muviss · un bug de verdad (#64)" />
      <Say on={at(12)} out={gone(12)} text="En tablet, la leyenda" y={300} size={130} />
      <Say on={at(12)} out={gone(12)} text="de la gráfica se estiraba." y={470} size={130} />

      {/* 6.14 the fix */}
      <Eyebrow on={at(13)} out={gone(13)} text="Muviss · ProfileCharts.kt" />
      <Mono on={at(13)} out={gone(13)} x={60} y={190} size={22} lines={CODE.legendBp} />
      <Mono on={at(13)} out={gone(13)} y={340} size={28} lines={CODE.legendWide} />
      <Src on={at(13)} out={gone(13)} y={880} text={`${SRC.legendBp} · ${SRC.legendWide} · abreviado con …`} />
    </>
  );
}
export const BuenoM3 = () => <Scene index={5}><BuenoM3_ /></Scene>;
