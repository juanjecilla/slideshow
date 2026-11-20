import { Reveal, Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { OV } from '../overlays';
import { Eyebrow, Mono, Panel, PersonIntro, Phone, Say } from '../ui';
import navBefore from '../assets/nav-200-before.png';
import navAfter from '../assets/nav-200-after.png';
import grid100 from '../assets/grid-100.png';
import grid200 from '../assets/grid-200-after.png';

const C = 'var(--lowvision)';
const code = (s: string) => s.split('\n');
const PX = 1380;

function LowVision_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Low vision" color={C} line="Text at 200%. Everything has to survive it." />
      <Phone on={at(0)} out={gone(0)} src={navBefore} alt="Muviss at 200% text" x={PX} y={110} />

      <Eyebrow on={at(1)} out={gone(1)} text="device-toggles · font-scale 2.0 + a screenshot" />
      <Say on={at(1)} out={gone(1)} text="The audit sees nothing." size={84} y={250} />
      <Reveal on={at(1)} out={gone(1)} x={120} y={400}><span className="chip ok" style={{ fontSize: 30 }}>tree_audit.py: 0 errors</span></Reveal>
      <Say on={at(1)} out={gone(1)} text="Your eyes do." size={84} y={520} color="var(--fault)" />
      <Phone on={at(1)} out={gone(1)} src={navBefore} alt="Bottom bar at 200% text: Searc/h, Librar/y, Progr/ess" x={PX} y={110} overlays={OV.navBefore} boxes={at(1)} />

      <Eyebrow on={at(2)} out={gone(2)} text="the fix" />
      <Say on={at(2)} out={gone(2)} text="Labels stop growing at 1.3×." size={60} />
      <Reveal on={at(2)} out={gone(2)} x={120} y={280}><Panel style={{ width: 820 }}><div className="t-editorial" style={{ fontSize: 36, lineHeight: 1.25, color: 'var(--ink-2)' }}>Trade-off, said out loud: these five labels stop following the user fully. The rest of the app does.</div></Panel></Reveal>
      <Mono on={at(2)} out={gone(2)} x={120} y={770} size={21} title="MuvissApp.kt" lang="kotlin" lines={code(CODE.navCap)} />
      <Phone on={at(2)} out={gone(2)} src={navBefore} alt="Before" x={1060} y={110} h={640} overlays={OV.navBefore} boxes={at(2)} />
      <Phone on={at(2)} out={gone(2)} src={navAfter} alt="After: whole words" x={1420} y={110} h={640} overlays={OV.navAfter} boxes={at(2)} />

      <Eyebrow on={at(3)} out={gone(3)} text="same signal, another place" />
      <Say on={at(3)} out={gone(3)} text="Bigger text, fewer columns." size={60} />
      <Mono on={at(3)} out={gone(3)} x={120} y={850} size={22} title="PosterGridCells.kt" lang="kotlin" lines={code(CODE.gridCells)} />
      <Phone on={at(3)} out={gone(3)} src={grid100} alt="Search results at normal text size" x={1060} y={110} h={640} />
      <Phone on={at(3)} out={gone(3)} src={grid200} alt="Search results at 200% text: one wide card" x={1420} y={110} h={640} />
      <Reveal on={at(3)} out={gone(3)} x={1100} y={765}><span className="chip">100%</span></Reveal>
      <Reveal on={at(3)} out={gone(3)} x={1460} y={765}><span className="chip ok">200%</span></Reveal>

      <Eyebrow on={at(4)} out={gone(4)} text="contrast-check · literals" />
      <Say on={at(4)} out={gone(4)} text="Amber text over a poster." size={70} />
      <Mono on={at(4)} out={gone(4)} x={120} y={300} size={28} title="contrast.py literals" lines={[...CAP.literalsShort]} />
      <Reveal on={at(4)} out={gone(4)} x={120} y={520}><Panel style={{ width: 1500 }}><div className="t-editorial" style={{ fontSize: 52, lineHeight: 1.25 }}>The background is whatever the poster is.<br /><span style={{ color: 'var(--ink-2)' }}>No script can pass or fail that.</span></div></Panel></Reveal>
    </>
  );
}

/** 07 LOW VISION — font scale: the audit misses it, the screenshot shows it. */
export const LowVision = () => <Scene index={6}><LowVision_ /></Scene>;
