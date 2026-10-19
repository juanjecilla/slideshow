import { Reveal, Scene, useScene } from 'beatdeck';
import { CAP } from '../captures';
import { CODE } from '../code';
import { Eyebrow, Mono, PersonIntro, Say, Shot } from '../ui';
import navBefore from '../assets/nav-200-before.png';
import navAfter from '../assets/nav-200-after.png';
import grid100 from '../assets/grid-100.png';
import grid200 from '../assets/grid-200-after.png';

const C = 'var(--lowvision)';
const code = (s: string) => s.split('\n');

function LowVision_() {
  const { here, b } = useScene();
  const at = (k: number) => here && b === k;
  const gone = (k: number) => here && b > k;
  return (
    <>
      <PersonIntro on={at(0)} out={gone(0)} name="Low vision" color={C} line="Text at 200%. Everything has to survive it." />

      {/* 07.2 the tools see nothing */}
      <Eyebrow on={at(1)} out={gone(1)} text="device-toggles · font-scale 2.0 + a screenshot" color={C} />
      <Say on={at(1)} out={gone(1)} text="The audit sees nothing. Your eyes do." size={72} />
      <Shot on={at(1)} out={gone(1)} src={navBefore} alt="Muviss home at 200% text: the bottom bar labels break mid-word, Searc-h, Librar-y, Progr-ess" x={150} y={320} h={700} />
      <Reveal on={at(1)} out={gone(1)} x={720} y={420}>
        <div className="t-editorial" style={{ fontSize: 60, lineHeight: 1.15 }}>Searc/h<br />Librar/y<br />Progr/ess<br />Profil/e<br />Settin/gs</div>
      </Reveal>
      <Reveal on={at(1)} out={gone(1)} x={720} y={840}><div className="t-meta" style={{ fontSize: 24 }}>tree_audit.py: 0 errors</div></Reveal>

      {/* 07.3 the fix */}
      <Eyebrow on={at(2)} out={gone(2)} text="the fix" color={C} />
      <Say on={at(2)} out={gone(2)} text="Labels stop growing at 1.3×." size={76} />
      <Mono on={at(2)} out={gone(2)} x={150} y={400} size={22} lines={code(CODE.navCap)} />
      <Shot on={at(2)} out={gone(2)} src={navAfter} alt="Muviss home at 200% text after the fix: Search, Library, Progress, Profile and Settings are whole words" x={1180} y={200} h={780} />

      {/* 07.4 the grid follows the text */}
      <Eyebrow on={at(3)} out={gone(3)} text="same signal, another place" color={C} />
      <Say on={at(3)} out={gone(3)} text="Bigger text, fewer columns." size={76} />
      <Shot on={at(3)} out={gone(3)} src={grid100} alt="Search results for dune at normal text size" x={150} y={280} h={520} caption="100%" />
      <Shot on={at(3)} out={gone(3)} src={grid200} alt="Search results for dune at 200% text: one wide card" x={450} y={280} h={520} caption="200%" />
      <Mono on={at(3)} out={gone(3)} x={150} y={900} size={24} lines={code(CODE.gridCells)} />

      {/* 07.5 contrast: what a script cannot judge */}
      <Eyebrow on={at(4)} out={gone(4)} text="contrast-check · literals" color={C} />
      <Say on={at(4)} out={gone(4)} text="Amber text over a poster." size={88} />
      <Mono on={at(4)} out={gone(4)} x={150} y={400} size={32} lines={[...CAP.literalsShort]} />
      <Reveal on={at(4)} out={gone(4)} x={150} y={600}>
        <div className="t-editorial" style={{ fontSize: 56, lineHeight: 1.2, color: 'var(--ink-2)' }}>
          The background is whatever the poster is.<br />No script can pass or fail that.
        </div>
      </Reveal>
    </>
  );
}

/** 07 LOW VISION — font scale: the audit misses it, the screenshot shows it. */
export const LowVision = () => <Scene index={6}><LowVision_ /></Scene>;
