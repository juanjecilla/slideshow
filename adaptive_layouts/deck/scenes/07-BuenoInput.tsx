import { Scene } from 'beatdeck';
import { CODE, SRC } from '../code';
import { Bullets, Eyebrow, Line, Mono, Say, useBeat, Western } from '../ui';

function BuenoInput_() {
  const { here, b, at, gone } = useBeat();
  return (
    <>
      {/* 7.1 */}
      <Eyebrow on={at(0)} out={gone(0)} text="Adaptive input methods" />
      <Say on={at(0)} out={gone(0)} text="Different devices," y={330} size={130} />
      <Say on={at(0)} out={gone(0)} text="new inputs." y={500} size={130} color="var(--accent)" />

      {/* 7.2 */}
      <Eyebrow on={at(1)} out={gone(1)} text="Adaptive input methods" />
      <Bullets here={here} b={b} from={1} to={1} together y={260} size={100} gap={44} items={['Stylus', 'Keyboards', 'Mice', 'Accessibility tools']} />

      {/* 7.3 Muviss case 4 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Case 4 · Muviss desktop · Main.kt" />
      <Mono on={at(2)} out={gone(2)} y={180} size={30} lines={CODE.menubar} title={SRC.menubar} />

      {/* 7.4 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Muviss · one shortcut per platform" />
      <Mono on={at(3)} out={gone(3)} y={230} size={30} lines={CODE.accelerator} title={SRC.accelerator} />
      <Mono on={at(3)} out={gone(3)} y={520} size={32} lines={CODE.viewShortcuts} title={SRC.viewShortcuts} />

      {/* 7.5 the ⌘Q trap */}
      <Eyebrow on={at(4)} out={gone(4)} text="Muviss · the macOS trap" />
      <Say on={at(4)} out={gone(4)} text="⌘Q already belongs to the system." y={200} size={90} />
      <Mono on={at(4)} out={gone(4)} y={440} size={30} lines={CODE.quitWhy} title={SRC.quitWhy} />

      {/* 7.6 */}
      <Eyebrow on={at(5)} out={gone(5)} text="Muviss · DesktopWindowState.kt" />
      <Mono on={at(5)} out={gone(5)} y={280} size={30} lines={CODE.windowState} title={SRC.windowState} />
      <Line on={at(5)} out={gone(5)} text="The window remembers its size and position." y={780} size={64} dim />

      {/* 7.7 */}
      <Eyebrow on={at(6)} out={gone(6)} text="Muviss · Triage with the keyboard" />
      <Mono on={at(6)} out={gone(6)} y={170} size={30} lines={CODE.triageKeys} title={SRC.triageKeys} />

      {/* 7.8 */}
      <Say on={at(7)} out={gone(7)} text="S: what a keyboard has" y={330} size={110} />
      <Say on={at(7)} out={gone(7)} text="instead of a long press." y={490} size={110} color="var(--accent)" />

      {/* 7.9 */}
      <Western on={at(8)} out={gone(8)} text="Other options" y={380} size={190} />

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
