import { Scene } from 'beatdeck';
import { BOX, CAP } from '../assets';
import { CODE, SRC } from '../code';
import { Capture, Eyebrow, Line, Mono, Say, Src, useBeat, Western } from '../ui';

function Demo_() {
  const { at, gone } = useBeat();
  return (
    <>
      {/* 8.1 */}
      <Western on={at(0)} out={gone(0)} text="The demo" y={330} size={220} />
      <Line on={at(0)} out={gone(0)} text="Muviss, resizing." y={650} size={72} dim />

      {/* 8.2–8.5 clips (the live run is optional; docs/RUNBOOK.md) */}
      <Capture on={at(1)} out={gone(1)} x={349} y={125} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoRail} video label="Wide to narrow: rail and bottom bar" todo="Video: the desktop window goes from wide to narrow." />
      <Capture on={at(2)} out={gone(2)} x={349} y={125} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoDetail} video label="The detail goes to two columns" todo="Video: the detail crosses 840 dp." />
      <Capture on={at(3)} out={gone(3)} x={349} y={125} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoGrid} video label="The grid rearranges its columns" todo="Video: GridCells.Adaptive as the width changes." />
      <Capture on={at(4)} out={gone(4)} x={349} y={125} w={BOX.clip.w} h={BOX.clip.h} src={CAP.videoKeys} video label="Keyboard shortcuts: ⌘F and ⌘," todo="Video: keyboard shortcuts." />

      {/* 8.6 debt */}
      <Western on={at(5)} out={gone(5)} text="What Muviss" y={260} size={190} />
      <Western on={at(5)} out={gone(5)} text="still does not do" y={500} size={190} />

      {/* 8.7 */}
      <Eyebrow on={at(6)} out={gone(6)} text="Debt 1" />
      <Say on={at(6)} out={gone(6)} text="No list-detail." y={300} size={150} />
      <Line on={at(6)} out={gone(6)} text="On a wide screen, the detail is still another screen." y={560} size={60} dim />

      {/* 8.8 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Debt 2" />
      <Say on={at(7)} out={gone(7)} text="Predictive back" y={250} size={150} />
      <Mono on={at(7)} out={gone(7)} y={500} size={40} lines={CODE.backOptIn} title="Muviss · AndroidManifest.xml:25" />
      <Line on={at(7)} out={gone(7)} text="Enabled in the manifest, with no panes to take advantage of it." y={720} size={60} dim />

      {/* 8.9 */}
      <Eyebrow on={at(8)} out={gone(8)} text="Debt 3" />
      <Say on={at(8)} out={gone(8)} text="No foldables." y={300} size={150} />
      <Line on={at(8)} out={gone(8)} text="No posture or hinge." y={560} size={64} dim />

      {/* 8.10 */}
      <Eyebrow on={at(9)} out={gone(9)} text="Debt 4" />
      <Say on={at(9)} out={gone(9)} text="600 dp y 840 dp." y={300} size={150} />
      <Line on={at(9)} out={gone(9)} text="Two breakpoints: one by size class, another by container width." y={560} size={56} dim />
      <Src on={at(9)} out={gone(9)} y={800} text={`${SRC.wscWhen} · ${SRC.detailBp}`} />
    </>
  );
}
export const Demo = () => <Scene index={7}><Demo_ /></Scene>;
