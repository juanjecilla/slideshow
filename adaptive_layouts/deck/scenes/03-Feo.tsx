import { Scene } from 'beatdeck';
import { CAP } from '../assets';
import { DOCS, ORIGINAL } from '../docs-code';
import { Quote } from '../quote/Quote';
import { QUOTES } from '../quotes';
import { Capture, Eyebrow, Intertitle, Line, Mono, Say, Src, useBeat, Western } from '../ui';

/** R4: what Android 16 ignores on sw ≥ 600 dp for apps that target API 36. */
const IGNORED = ['screenOrientation', 'resizeableActivity', 'minAspectRatio', 'maxAspectRatio', 'setRequestedOrientation()', 'getRequestedOrientation()'] as const;

function Feo_() {
  const { at, gone } = useBeat();
  return (
    <>
      {/* 3.1 */}
      <Intertitle on={at(0)} out={gone(0)} part="2 · The old solutions" name="The Ugly" />

      {/* 3.2–3.3 XML */}
      <Eyebrow on={at(1)} out={gone(1)} text="XML" />
      <Say on={at(1)} out={gone(1)} text="Multiple layouts." y={330} size={150} />
      <Say on={at(1)} out={gone(1)} text="Independent." y={540} size={150} color="var(--ink-2)" />
      <Eyebrow on={at(2)} out={gone(2)} text="XML" />
      <Say on={at(2)} out={gone(2)} text="Little reusability." y={330} size={150} />
      <Say on={at(2)} out={gone(2)} text="Complex configurations." y={540} size={130} color="var(--ink-2)" />

      {/* 3.4–3.5 the hacks, from the original's slide 16 */}
      <Eyebrow on={at(3)} out={gone(3)} text="The hacks" />
      <Say on={at(3)} out={gone(3)} text="Is it a tablet?" y={230} size={170} />
      <Mono on={at(3)} out={gone(3)} y={560} size={52} lines={ORIGINAL.isTablet} lang="xml" title="res/values/bools.xml" />
      <Eyebrow on={at(4)} out={gone(4)} text="The hacks" />
      <Say on={at(4)} out={gone(4)} text="We lock the orientation." y={230} size={120} />
      <Mono on={at(4)} out={gone(4)} y={560} size={52} lines={ORIGINAL.orientation} lang="xml" title="AndroidManifest.xml" />

      {/* 3.6 a11y? — full screen: the thing that is forgotten most often */}
      <Western on={at(5)} out={gone(5)} text="a11y?" y={330} size={420} />

      {/* 3.7 a11y — "you may remember me from such talks as…" (D15) */}
      <Eyebrow on={at(6)} out={gone(6)} text="Introductions, again" />
      <Capture on={at(6)} out={gone(6)} x={170} y={290} w={500} h={500} src={CAP.troy} label="Troy McClure · The Simpsons" todo="Troy McClure" />
      <Say on={at(6)} out={gone(6)} text="You may remember me" x={760} y={250} size={84} />
      <Say on={at(6)} out={gone(6)} text="from talks such as…" x={760} y={350} size={84} color="var(--accent)" />
      <Line on={at(6)} out={gone(6)} x={760} y={540} size={46} text="a11y, the ethical numeronym" />
      <Line on={at(6)} out={gone(6)} x={760} y={605} size={34} dim text="Commit Conf · Jun 2026 · juanjecilla.github.io/slideshow/a11y" />
      <Line on={at(6)} out={gone(6)} x={760} y={715} size={46} text="a11y on Android? AI makes it easy" />
      <Line on={at(6)} out={gone(6)} x={760} y={780} size={34} dim text="DevFest Jerez · 21 Nov 2026" />

      {/* 3.7–3.10 problems */}
      <Eyebrow on={at(7)} out={gone(7)} text="Problems" />
      <Say on={at(7)} out={gone(7)} text="Large screens." y={400} size={170} />
      <Eyebrow on={at(8)} out={gone(8)} text="Large screens" />
      <Say on={at(8)} out={gone(8)} text="Forced orientations." y={300} size={140} />
      <Mono on={at(8)} out={gone(8)} y={620} size={52} lines={ORIGINAL.orientation} lang="xml" title="AndroidManifest.xml" />
      <Eyebrow on={at(9)} out={gone(9)} text="Large screens" />
      <Say on={at(9)} out={gone(9)} text="MinAspectRatio" y={290} size={150} />
      <Say on={at(9)} out={gone(9)} text="MaxAspectRatio" y={480} size={150} />
      <Eyebrow on={at(10)} out={gone(10)} text="Large screens" />
      <Say on={at(10)} out={gone(10)} text="ResizeableActivity" y={380} size={150} />

      {/* 3.11 Android 16 */}
      <Eyebrow on={at(11)} out={gone(11)} text="Android 16 · API 36" />
      <Say on={at(11)} out={gone(11)} text="Ignored" y={250} size={170} />
      <Say on={at(11)} out={gone(11)} text="on screens ≥ 600 dp." y={450} size={150} color="var(--accent)" />
      <Line on={at(11)} out={gone(11)} text="If your app targets API 36." y={720} size={64} dim />
      <Src on={at(11)} out={gone(11)} y={860} text="developer.android.com · Behavior changes: Android 16" />

      {/* 3.12 the list */}
      <Eyebrow on={at(12)} out={gone(12)} text="Android 16 · what is ignored" />
      <Mono on={at(12)} out={gone(12)} y={230} size={46} lines={IGNORED} lang="plain" />
      <Line on={at(12)} out={gone(12)} text="Except: games · the user's choice · screens < sw600dp" y={820} size={46} dim />

      {/* 3.13 opt-out */}
      <Eyebrow on={at(13)} out={gone(13)} text="Android 16 · opt-out" />
      <Say on={at(13)} out={gone(13)} text="There is an opt-out. Temporary." y={230} size={104} />
      <Mono on={at(13)} out={gone(13)} y={400} size={30} lines={DOCS.optOut} lang="xml" title="Behavior changes: Android 16 · reformatted" />
      <Src on={at(13)} out={gone(13)} y={840} text="developer.android.com · Behavior changes: Android 16 · attributes on several lines" />

      {/* 3.14 Android 17 */}
      <Eyebrow on={at(14)} out={gone(14)} text="Android 17 · API 37" />
      <Say on={at(14)} out={gone(14)} text="No opt-out." y={190} size={150} color="var(--accent)" />
      <Quote quote={QUOTES.android37} on={at(14)} out={gone(14)} x={210} y={560} size={60} />

      {/* 3.15 */}
      <Western on={at(15)} text="Adapt or Die" y={380} size={160} />
    </>
  );
}
export const Feo = () => <Scene index={2}><Feo_ /></Scene>;
