import { Scene } from 'beatdeck';
import { CODE, SRC } from '../code';
import { Bullets, Eyebrow, Line, Mono, Say, Src, useBeat, Western } from '../ui';

function BuenoInput_() {
  const { here, b, at, gone } = useBeat();
  return (
    <>
      {/* 7.1 */}
      <Eyebrow on={at(0)} out={gone(0)} text="Adaptive input methods" />
      <Say on={at(0)} out={gone(0)} text="Diferentes dispositivos," y={330} size={130} />
      <Say on={at(0)} out={gone(0)} text="nuevas entradas." y={500} size={130} color="var(--accent)" />

      {/* 7.2 */}
      <Eyebrow on={at(1)} out={gone(1)} text="Adaptive input methods" />
      <Bullets here={here} b={b} from={1} to={1} together y={260} size={100} gap={44} items={['Stylus', 'Teclados', 'Ratones', 'Herramientas de accesibilidad']} />

      {/* 7.3 Muviss case 4 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Caso 4 · Muviss desktop · Main.kt" />
      <Mono on={at(2)} out={gone(2)} y={190} size={30} lines={CODE.menubar} />
      <Src on={at(2)} out={gone(2)} y={900} text={SRC.menubar} />

      {/* 7.4 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Muviss · un atajo por plataforma" />
      <Mono on={at(3)} out={gone(3)} y={250} size={24} lines={CODE.accelerator} />
      <Mono on={at(3)} out={gone(3)} y={460} size={36} lines={CODE.viewShortcuts} />
      <Src on={at(3)} out={gone(3)} y={680} text={`${SRC.accelerator} · ${SRC.viewShortcuts}`} />

      {/* 7.5 the ⌘Q trap */}
      <Eyebrow on={at(4)} out={gone(4)} text="Muviss · la trampa de macOS" />
      <Say on={at(4)} out={gone(4)} text="⌘Q ya es del sistema." y={200} size={110} />
      <Mono on={at(4)} out={gone(4)} y={440} size={30} lines={CODE.quitWhy} />
      <Src on={at(4)} out={gone(4)} y={760} text={SRC.quitWhy} />

      {/* 7.6 */}
      <Eyebrow on={at(5)} out={gone(5)} text="Muviss · DesktopWindowState.kt" />
      <Mono on={at(5)} out={gone(5)} y={280} size={28} lines={CODE.windowState} />
      <Src on={at(5)} out={gone(5)} y={640} text={SRC.windowState} />
      <Line on={at(5)} out={gone(5)} text="La ventana recuerda su tamaño y su posición." y={780} size={64} dim />

      {/* 7.7 */}
      <Eyebrow on={at(6)} out={gone(6)} text="Muviss · Triage con teclado" />
      <Mono on={at(6)} out={gone(6)} y={160} size={26} lines={CODE.triageKeys} />
      <Src on={at(6)} out={gone(6)} y={950} text={SRC.triageKeys} />

      {/* 7.8 */}
      <Say on={at(7)} out={gone(7)} text="S: lo que un teclado tiene" y={330} size={110} />
      <Say on={at(7)} out={gone(7)} text="en lugar de una pulsación larga." y={490} size={110} color="var(--accent)" />

      {/* 7.9 */}
      <Western on={at(8)} out={gone(8)} text="Otras opciones" y={380} size={190} />

      {/* 7.10 */}
      <Say on={at(9)} out={gone(9)} text="LazyVerticalGrid /" y={280} size={110} />
      <Say on={at(9)} out={gone(9)} text="LazyHorizontalGrid" y={430} size={110} />
      <Line on={at(9)} out={gone(9)} text="GridCells: Adaptive vs Fixed" y={700} size={64} dim />

      {/* 7.11 */}
      <Say on={at(10)} out={gone(10)} text="BoxWithConstraints" y={300} size={130} />
      <Say on={at(10)} out={gone(10)} text="SubcomposeLayout" y={490} size={130} color="var(--ink-2)" />

      {/* 7.12 */}
      <Say on={at(11)} out={gone(11)} text="Custom Layout" y={300} size={150} />
      <Line on={at(11)} out={gone(11)} text="Measurables, placeables" y={560} size={72} dim />
    </>
  );
}
export const BuenoInput = () => <Scene index={6}><BuenoInput_ /></Scene>;
