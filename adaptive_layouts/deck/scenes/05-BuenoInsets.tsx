import { Scene } from 'beatdeck';
import { CODE, SRC } from '../code';
import { Bullets, Eyebrow, Mono, Say, useBeat, Western } from '../ui';

function BuenoInsets_() {
  const { here, b, at, gone } = useBeat();
  return (
    <>
      {/* 5.1 */}
      <Western on={at(0)} out={gone(0)} text="Window Insets" y={380} size={190} />

      {/* 5.2 */}
      <Eyebrow on={at(1)} out={gone(1)} text="Scaffold Components" />
      <Bullets here={here} b={b} from={1} to={1} together y={300} size={110} gap={50} items={['TopAppBar', 'BottomAppBar', 'NavigationBar']} />

      {/* 5.3 */}
      <Eyebrow on={at(2)} out={gone(2)} text="And when they do not" />
      <Mono on={at(2)} out={gone(2)} y={400} size={76} lines={['Modifier.windowInsetsPadding']} />

      {/* 5.4 Muviss case 2 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Case 2 · Muviss · MainActivity.kt" />
      <Mono on={at(3)} out={gone(3)} y={330} size={48} lines={CODE.edge} title={SRC.edge} />

      {/* 5.5 one place for every screen */}
      <Eyebrow on={at(4)} out={gone(4)} text="Muviss · ScreenInsets.kt" />
      <Mono on={at(4)} out={gone(4)} y={250} size={30} lines={CODE.screenInsets} title={SRC.screenInsets} />

      {/* 5.6 */}
      <Eyebrow on={at(5)} out={gone(5)} text="Muviss · why safeDrawing, and not the bottom" />
      <Mono on={at(5)} out={gone(5)} y={300} size={32} lines={CODE.insetsWhy} title={SRC.insetsWhy} />

      {/* 5.7 */}
      <Eyebrow on={at(6)} out={gone(6)} text="Muviss · why a nested Scaffold does not pad twice" />
      <Mono on={at(6)} out={gone(6)} y={300} size={34} lines={CODE.insetsConsumed} title={SRC.insetsConsumed} />

      {/* 5.8 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Muviss · and it can be tested" />
      <Mono on={at(7)} out={gone(7)} y={300} size={32} lines={CODE.insetsTest} title={SRC.insetsTest} />
      <Say on={at(7)} out={gone(7)} text="Insets, a parameter." y={700} size={100} color="var(--accent)" />
    </>
  );
}
export const BuenoInsets = () => <Scene index={4}><BuenoInsets_ /></Scene>;
