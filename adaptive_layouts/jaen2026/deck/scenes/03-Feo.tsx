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
      <Intertitle on={at(0)} out={gone(0)} part="2 · Soluciones antiguas" name="El Feo" />

      {/* 3.2–3.3 XML */}
      <Eyebrow on={at(1)} out={gone(1)} text="XML" />
      <Say on={at(1)} out={gone(1)} text="Múltiples layouts." y={330} size={150} />
      <Say on={at(1)} out={gone(1)} text="Independientes." y={540} size={150} color="var(--ink-2)" />
      <Eyebrow on={at(2)} out={gone(2)} text="XML" />
      <Say on={at(2)} out={gone(2)} text="Poca reusabilidad." y={330} size={150} />
      <Say on={at(2)} out={gone(2)} text="Configuraciones complejas." y={540} size={130} color="var(--ink-2)" />

      {/* 3.4–3.5 the hacks, from the original's slide 16 */}
      <Eyebrow on={at(3)} out={gone(3)} text="Las ñapas" />
      <Say on={at(3)} out={gone(3)} text="¿Es tablet?" y={230} size={170} />
      <Mono on={at(3)} out={gone(3)} y={560} size={52} lines={ORIGINAL.isTablet} lang="xml" title="res/values/bools.xml" />
      <Eyebrow on={at(4)} out={gone(4)} text="Las ñapas" />
      <Say on={at(4)} out={gone(4)} text="Bloqueamos la orientación." y={230} size={120} />
      <Mono on={at(4)} out={gone(4)} y={560} size={52} lines={ORIGINAL.orientation} lang="xml" title="AndroidManifest.xml" />

      {/* 3.6 a11y? — full screen: the thing that is forgotten most often */}
      <Western on={at(5)} out={gone(5)} text="a11y?" y={330} size={420} />

      {/* 3.7 a11y — "you may remember me from such talks as…" (D15) */}
      <Eyebrow on={at(6)} out={gone(6)} text="Presentación, otra vez" />
      <Capture on={at(6)} out={gone(6)} x={170} y={290} w={500} h={500} src={CAP.troy} label="Troy McClure · Los Simpson" todo="Troy McClure" />
      <Say on={at(6)} out={gone(6)} text="Quizás me recordéis" x={760} y={250} size={84} />
      <Say on={at(6)} out={gone(6)} text="de charlas como…" x={760} y={350} size={84} color="var(--accent)" />
      <Line on={at(6)} out={gone(6)} x={760} y={540} size={46} text="a11y, el numerónimo ético" />
      <Line on={at(6)} out={gone(6)} x={760} y={605} size={34} dim text="Commit Conf · jun 2026 · juanjecilla.github.io/slideshow/a11y" />
      <Line on={at(6)} out={gone(6)} x={760} y={715} size={46} text="a11y on Android? AI makes it easy" />
      <Line on={at(6)} out={gone(6)} x={760} y={780} size={34} dim text="DevFest Jerez · 21 nov 2026" />

      {/* 3.7–3.10 problems */}
      <Eyebrow on={at(7)} out={gone(7)} text="Problemas" />
      <Say on={at(7)} out={gone(7)} text="Pantallas grandes." y={400} size={170} />
      <Eyebrow on={at(8)} out={gone(8)} text="Pantallas grandes" />
      <Say on={at(8)} out={gone(8)} text="Orientaciones forzadas." y={300} size={140} />
      <Mono on={at(8)} out={gone(8)} y={620} size={52} lines={ORIGINAL.orientation} lang="xml" title="AndroidManifest.xml" />
      <Eyebrow on={at(9)} out={gone(9)} text="Pantallas grandes" />
      <Say on={at(9)} out={gone(9)} text="MinAspectRatio" y={290} size={150} />
      <Say on={at(9)} out={gone(9)} text="MaxAspectRatio" y={480} size={150} />
      <Eyebrow on={at(10)} out={gone(10)} text="Pantallas grandes" />
      <Say on={at(10)} out={gone(10)} text="ResizeableActivity" y={380} size={150} />

      {/* 3.11 Android 16 */}
      <Eyebrow on={at(11)} out={gone(11)} text="Android 16 · API 36" />
      <Say on={at(11)} out={gone(11)} text="Se ignoran" y={250} size={170} />
      <Say on={at(11)} out={gone(11)} text="en pantallas ≥ 600 dp." y={450} size={150} color="var(--accent)" />
      <Line on={at(11)} out={gone(11)} text="Si tu app apunta a la API 36." y={720} size={64} dim />
      <Src on={at(11)} out={gone(11)} y={860} text="developer.android.com · Behavior changes: Android 16" />

      {/* 3.12 the list */}
      <Eyebrow on={at(12)} out={gone(12)} text="Android 16 · lo que se ignora" />
      <Mono on={at(12)} out={gone(12)} y={230} size={46} lines={IGNORED} lang="plain" />
      <Line on={at(12)} out={gone(12)} text="Excepto: juegos · la opción del usuario · pantallas < sw600dp" y={820} size={46} dim />

      {/* 3.13 opt-out */}
      <Eyebrow on={at(13)} out={gone(13)} text="Android 16 · opt-out" />
      <Say on={at(13)} out={gone(13)} text="Hay un opt-out. Temporal." y={230} size={120} />
      <Mono on={at(13)} out={gone(13)} y={400} size={30} lines={DOCS.optOut} lang="xml" title="Behavior changes: Android 16 · reformateado" />
      <Src on={at(13)} out={gone(13)} y={840} text="developer.android.com · Behavior changes: Android 16 · atributos en varias líneas" />

      {/* 3.14 Android 17 */}
      <Eyebrow on={at(14)} out={gone(14)} text="Android 17 · API 37" />
      <Say on={at(14)} out={gone(14)} text="Sin opt-out." y={190} size={150} color="var(--accent)" />
      <Quote quote={QUOTES.android37} on={at(14)} out={gone(14)} x={210} y={560} size={60} />

      {/* 3.15 */}
      <Western on={at(15)} text="Adaptarse o Morir" y={380} size={160} />
    </>
  );
}
export const Feo = () => <Scene index={2}><Feo_ /></Scene>;
