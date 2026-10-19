import { Reveal, Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { Eyebrow, Mono, Say, Shot } from '../ui';
import navBefore from '../assets/nav-200-before.png';
import navAfter from '../assets/nav-200-after.png';
import grid200 from '../assets/grid-200-after.png';
import synopsis from '../assets/detail-synopsis.png';

/** 14 BACKUP — real captures from the audit, in case the live demo fails. Reach it from the overview (O). */
function Backup_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <Eyebrow on={at(0)} out={gone(0)} text="backup · device captures" />
      <Say on={at(0)} out={gone(0)} text="If the demo fails." size={90} />
      <Shot on={at(0)} out={gone(0)} src={navBefore} alt="Bottom bar at 200% text before the fix" x={150} y={300} h={640} caption="200%, before" />
      <Shot on={at(0)} out={gone(0)} src={navAfter} alt="Bottom bar at 200% text after the fix" x={640} y={300} h={640} caption="200%, after" />
      <Shot on={at(0)} out={gone(0)} src={grid200} alt="Search results at 200% text: one wide card" x={1130} y={300} h={640} caption="grid at 200%" />

      <Eyebrow on={at(1)} out={gone(1)} text="backup · tool output" />
      <Say on={at(1)} out={gone(1)} text="The tools, as they ran." size={90} />
      <Mono on={at(1)} out={gone(1)} x={150} y={330} size={28} lines={[...CAP.auditBroken]} />
      <Mono on={at(1)} out={gone(1)} x={150} y={620} size={28} lines={[...CAP.scanShort]} />
      <Shot on={at(1)} out={gone(1)} src={synopsis} alt="Detail screen with the long synopsis" x={1500} y={260} h={640} />
      <Reveal on={at(1)} out={gone(1)} x={150} y={960}><div className="t-meta" style={{ fontSize: 22 }}>reference/audit/ · docs/AUDIT.md</div></Reveal>
    </>
  );
}

export const Backup = () => <Scene index={13}><Backup_ /></Scene>;
