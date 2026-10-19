import { Scene } from 'beatdeck';
import { BOX, CAP } from '../assets';
import { CODE, SRC } from '../code';
import { Capture, Eyebrow, Line, Mono, Say, Src, useBeat, Western } from '../ui';

function Demo_() {
  const { at, gone } = useBeat();
  return (
    <>
      {/* 8.1 */}
      <Western on={at(0)} out={gone(0)} text="La demo" y={330} size={220} />
      <Line on={at(0)} out={gone(0)} text="Muviss, redimensionándose." y={650} size={72} dim />

      {/* 8.2–8.5 clips (the live run is optional; docs/RUNBOOK.md) */}
      <Capture on={at(1)} out={gone(1)} x={349} y={140} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoRail} video label="De ancho a estrecho: rail y barra inferior" todo="Vídeo: la ventana de escritorio pasa de ancha a estrecha." />
      <Capture on={at(2)} out={gone(2)} x={349} y={140} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoDetail} video label="El detalle pasa a dos columnas" todo="Vídeo: el detalle cruza los 840 dp." />
      <Capture on={at(3)} out={gone(3)} x={349} y={140} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoGrid} video label="La rejilla recoloca las columnas" todo="Vídeo: GridCells.Adaptive al cambiar el ancho." />
      <Capture on={at(4)} out={gone(4)} x={349} y={140} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoKeys} video label="Atajos de teclado: ⌘F y ⌘," todo="Vídeo: atajos de teclado." />

      {/* 8.6 debt */}
      <Western on={at(5)} out={gone(5)} text="Lo que Muviss" y={260} size={190} />
      <Western on={at(5)} out={gone(5)} text="aún no hace" y={500} size={190} />

      {/* 8.7 */}
      <Eyebrow on={at(6)} out={gone(6)} text="Deuda 1" />
      <Say on={at(6)} out={gone(6)} text="Sin list-detail." y={300} size={150} />
      <Line on={at(6)} out={gone(6)} text="En pantalla ancha, el detalle sigue siendo otra pantalla." y={560} size={60} dim />

      {/* 8.8 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Deuda 2" />
      <Say on={at(7)} out={gone(7)} text="Predictive back" y={250} size={150} />
      <Mono on={at(7)} out={gone(7)} y={500} size={40} lines={CODE.backOptIn} />
      <Src on={at(7)} out={gone(7)} y={580} text={`Muviss · AndroidManifest.xml:25`} />
      <Line on={at(7)} out={gone(7)} text="Activado en el manifest, sin paneles que lo aprovechen." y={720} size={60} dim />

      {/* 8.9 */}
      <Eyebrow on={at(8)} out={gone(8)} text="Deuda 3" />
      <Say on={at(8)} out={gone(8)} text="Sin plegables." y={300} size={150} />
      <Line on={at(8)} out={gone(8)} text="Ni postura ni bisagra." y={560} size={64} dim />

      {/* 8.10 */}
      <Eyebrow on={at(9)} out={gone(9)} text="Deuda 4" />
      <Say on={at(9)} out={gone(9)} text="600 dp y 840 dp." y={300} size={150} />
      <Line on={at(9)} out={gone(9)} text="Dos breakpoints: uno por size class, otro por ancho de contenedor." y={560} size={56} dim />
      <Src on={at(9)} out={gone(9)} y={800} text={`${SRC.wscWhen} · ${SRC.detailBp}`} />
    </>
  );
}
export const Demo = () => <Scene index={7}><Demo_ /></Scene>;
