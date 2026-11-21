import { Scene } from 'beatdeck';
import { BOX, CAP } from '../assets';
import { CODE, SRC } from '../code';
import { DOCS } from '../docs-code';
import { Bullets, Capture, Eyebrow, Intertitle, Line, Mono, Say, Src, useBeat, Western } from '../ui';

/** R1. `isNew` marks what the original deck (3 classes) did not have. */
const CLASSES = [
  { name: 'Compact', w: '< 600 dp', isNew: false },
  { name: 'Medium', w: '600 dp ≤ width < 840 dp', isNew: false },
  { name: 'Expanded', w: '840 dp ≤ width < 1200 dp', isNew: false },
  { name: 'Large', w: '1200 dp ≤ width < 1600 dp', isNew: true },
  { name: 'Extra-large', w: '≥ 1600 dp', isNew: true },
] as const;

function BuenoWsc_() {
  const { here, b, at, gone, span } = useBeat();
  return (
    <>
      {/* 4.1 */}
      <Intertitle on={at(0)} out={gone(0)} part="3 · Adaptive Layouts" name="The Good" />

      {/* 4.2 the five pieces */}
      <Eyebrow on={at(1)} out={gone(1)} text="Adaptive Layouts" />
      <Bullets here={here} b={b} from={1} to={1} together y={240} size={84} gap={40}
        items={['Jetpack Compose', 'Window Size Classes', 'Window Insets', 'Material 3 Adaptive', 'Adaptive input methods']} />

      {/* 4.3 */}
      <Eyebrow on={at(2)} out={gone(2)} text="Window Size Classes" />
      <Say on={at(2)} out={gone(2)} text="Independent" y={330} size={170} />
      <Say on={at(2)} out={gone(2)} text="of the device." y={540} size={170} color="var(--accent)" />

      {/* 4.4–4.5 the classes: three in the original, five today */}
      <Eyebrow on={span(3, 4)} out={gone(4)} text={at(3) ? 'Window Size Classes · 3 sizes' : 'Window Size Classes · today, 5'} />
      {CLASSES.map((c, i) => (
        <div key={c.name}>
          <Say on={i < 3 ? span(3, 4) : at(4)} out={gone(4)} text={c.name} y={230 + i * 140} size={84} color={c.isNew ? 'var(--accent)' : undefined} />
          <Line on={i < 3 ? span(3, 4) : at(4)} out={gone(4)} x={800} y={265 + i * 140} size={44} text={c.w} dim />
        </div>
      ))}
      <Src on={at(4)} out={gone(4)} y={930} text="developer.android.com · Use window size classes (updated 22 Sep 2026)" />

      {/* 4.6 opt-in */}
      <Eyebrow on={at(5)} out={gone(5)} text="Large and Extra-large" />
      <Say on={at(5)} out={gone(5)} text="They are opt-in." y={250} size={170} />
      <Mono on={at(5)} out={gone(5)} y={560} size={34} lines={DOCS.largeXl} title="Official documentation · not from Muviss" />

      {/* 4.7 posture */}
      <Say on={at(6)} out={gone(6)} text="HingeInfo / Posture" y={330} size={140} />
      <Line on={at(6)} out={gone(6)} text="Foldables: hinge and posture." y={560} size={64} />
      <Line on={at(6)} out={gone(6)} text="Muviss does not use it yet." y={680} size={64} dim />

      {/* 4.8 Muviss case 1 */}
      <Eyebrow on={at(7)} out={gone(7)} text="Case 1 · Muviss" />
      <Western on={at(7)} out={gone(7)} text="Bar or rail?" y={380} size={200} />

      {/* 4.9–4.10 code */}
      <Eyebrow on={at(8)} out={gone(8)} text="Muviss · MuvissApp.kt" />
      <Mono on={at(8)} out={gone(8)} y={330} size={40} lines={CODE.wscCode} title={SRC.wscCode} />
      <Line on={at(8)} out={gone(8)} text="That is where the window width comes from." y={620} size={64} dim />
      <Eyebrow on={at(9)} out={gone(9)} text="Muviss · MuvissApp.kt" />
      <Mono on={at(9)} out={gone(9)} y={260} size={28} lines={CODE.wscWhen} title={SRC.wscWhen} />

      {/* 4.11 captures */}
      <Capture on={at(10)} out={gone(10)} x={150} y={170} w={BOX.compact.w} h={BOX.compact.h} src={CAP.railCompact} label="Compact: bottom bar" todo="Muviss at compact width (< 600 dp), with the navigation bar at the bottom." />
      <Capture on={at(10)} out={gone(10)} x={654} y={170} w={BOX.expanded.w} h={BOX.expanded.h} src={CAP.railExpanded} label="Expanded: rail" todo="Muviss at expanded width, with the rail on the left." />

      {/* 4.12 why */}
      <Eyebrow on={at(11)} out={gone(11)} text="Muviss · why" />
      <Say on={at(11)} out={gone(11)} text="A rail leaves the posters" y={290} size={120} />
      <Say on={at(11)} out={gone(11)} text="at full width." y={450} size={120} />
      <Line on={at(11)} out={gone(11)} text="Five destinations do not justify a drawer." y={700} size={64} dim />
      <Src on={at(11)} out={gone(11)} y={820} text={`${SRC.wscWhy} · the code comment`} />
    </>
  );
}
export const BuenoWsc = () => <Scene index={3}><BuenoWsc_ /></Scene>;
