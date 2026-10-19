import { Scene } from 'beatdeck';
import { CODE, SRC } from '../code';
import { Bullets, Eyebrow, Mono, Say, Src, useBeat, Western } from '../ui';

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
      <Eyebrow on={at(2)} out={gone(2)} text="Y cuando no" />
      <Mono on={at(2)} out={gone(2)} y={400} size={76} lines={['Modifier.windowInsetsPadding']} />

      {/* 5.4 Muviss case 2 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Caso 2 · Muviss · MainActivity.kt" />
      <Mono on={at(3)} out={gone(3)} y={330} size={48} lines={CODE.edge} />
      <Src on={at(3)} out={gone(3)} y={560} text={SRC.edge} />

      {/* 5.5 one place for every screen */}
      <Eyebrow on={at(4)} out={gone(4)} text="Muviss · ScreenInsets.kt" />
      <Mono on={at(4)} out={gone(4)} y={250} size={24} lines={CODE.screenInsets} />
      <Src on={at(4)} out={gone(4)} y={600} text={SRC.screenInsets} />

      {/* 5.6 */}
      <Eyebrow on={at(5)} out={gone(5)} text="Muviss · por qué safeDrawing, y sin abajo" />
      <Mono on={at(5)} out={gone(5)} y={300} size={32} lines={CODE.insetsWhy} />
      <Src on={at(5)} out={gone(5)} y={540} text={SRC.insetsWhy} />

      {/* 5.7 */}
      <Eyebrow on={at(6)} out={gone(6)} text="Muviss · por qué un Scaffold anidado no padea dos veces" />
      <Mono on={at(6)} out={gone(6)} y={300} size={36} lines={CODE.insetsConsumed} />
      <Src on={at(6)} out={gone(6)} y={500} text={SRC.insetsConsumed} />

      {/* 5.8 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Muviss · y se puede testear" />
      <Mono on={at(7)} out={gone(7)} y={300} size={36} lines={CODE.insetsTest} />
      <Src on={at(7)} out={gone(7)} y={500} text={SRC.insetsTest} />
      <Say on={at(7)} out={gone(7)} text="Los insets, un parámetro." y={700} size={100} color="var(--accent)" />
    </>
  );
}
export const BuenoInsets = () => <Scene index={4}><BuenoInsets_ /></Scene>;
