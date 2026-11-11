import { CountUp, Scene } from 'beatdeck';
import { DEVICES } from '../devices';
import { AppMock, Combinatorics, DeviceStory, Poses, ResizeDemo, WindowModes } from '../visuals';
import { Bullets, Device, Eyebrow, Intertitle, Line, Say, Src, useBeat } from '../ui';
import { Reveal } from 'beatdeck';

/** The three axes of the problem, in the order the original deck gives them. */
const AXES = ['Dispositivos', 'Contexto', 'Estado'] as const;

const N = DEVICES.length;
/** First beat of each part: 0 intertitle, 1 axes, 2 the 2021 figure, 3 large screens, then one beat per device and the grid. */
const DEV0 = 4;
const B = DEV0 + N + 1; // context starts after the grid beat

/** Title on the left, its one-line subtitle to the right of it: the picture gets the rest of the screen. */
function Head({ on, out, eyebrow, title, sub, subX = 1130, size = 150 }: { on: boolean; out?: boolean; eyebrow: string; title: string; sub: string; subX?: number; size?: number }) {
  return (
    <>
      <Eyebrow on={on} out={out} text={eyebrow} />
      <Say on={on} out={out} text={title} y={190} size={size} />
      <Line on={on} out={out} text={sub} x={subX} y={265} size={56} dim />
    </>
  );
}

/** Three copies of the same little app at 1x, 2x, 3x: zoom grows everything, font size grows only the text. */
function MockRow({ on, out, text }: { on: boolean; out?: boolean; text: boolean }) {
  return (
    <>
      {[1, 2, 3].map((k, i) => (
        <Reveal key={k} on={on} out={out} x={260 + i * 500} y={470} delay={i * 150}>
          <AppMock f={1 + (k - 1) * 0.5} text={text} w={340} h={380} />
          <div className="say-sm">{k}x</div>
        </Reveal>
      ))}
    </>
  );
}

function Malo_() {
  const { here, b, entry, at, gone, span } = useBeat();
  const inStory = span(DEV0, DEV0 + N);
  return (
    <>
      {/* 2.1 */}
      <Intertitle on={at(0)} out={gone(0)} part="1 · Problemática" name="El Malo" />

      {/* 2.2 the three axes */}
      <Bullets here={here} b={b} from={1} to={1} together y={230} size={150} gap={50} items={AXES} />

      {/* 2.3 the original's figure, with its date */}
      <Eyebrow on={at(2)} out={gone(2)} text="Dispositivos" />
      <Reveal3000 on={at(2)} out={gone(2)} />
      <Line on={at(2)} out={gone(2)} text="dispositivos Android en el mundo" y={690} size={64} />
      <Src on={at(2)} out={gone(2)} y={800} text="Dato de 2021 (Google I/O), desactualizado: no hay un total más reciente · comprobado 2026-11-11" />

      {/* 2.4 large screens */}
      <Eyebrow on={at(3)} out={gone(3)} text="Dispositivos" />
      <div className="t-numeral" style={{ position: 'absolute', left: 150, top: 260, fontSize: 340, opacity: at(3) ? 1 : 0, transition: 'opacity 600ms var(--ease)' }}>
        <CountUp value={580} from={at(3) ? 0 : undefined} entry={entry} prefix="+" suffix="M" />
      </div>
      <Line on={at(3)} out={gone(3)} text="pantallas grandes en manos de usuarios" y={690} size={64} />
      <Src on={at(3)} out={gone(3)} y={800} text="Android Developers Blog · 19 de mayo de 2026" />

      {/* 2.5 … one beat per kind of screen: each arrives in the middle, then settles into the row; the last beat is the grid */}
      <Eyebrow on={inStory} out={gone(DEV0 + N)} text={b === DEV0 + N ? 'Dispositivos · todos' : 'Dispositivos'} />
      <DeviceStory k={b - DEV0} show={inStory} />

      {/* context: orientation, zoom, font size */}
      <Head on={at(B)} out={gone(B)} eyebrow="Contexto" title="Orientación" sub="Portrait / Landscape" />
      <Device on={at(B)} out={gone(B)} x={420} y={470} w={200} h={360} label="Portrait" />
      <Device on={at(B)} out={gone(B)} x={900} y={560} w={360} h={200} label="Landscape" />

      <Head on={at(B + 1)} out={gone(B + 1)} eyebrow="Contexto" title="Zoom" sub="1x … 3x · todo crece" subX={760} />
      <MockRow on={at(B + 1)} out={gone(B + 1)} text={false} />

      <Head on={at(B + 2)} out={gone(B + 2)} eyebrow="Contexto" title="Font size" sub="2x, 3x… · crece el texto" subX={900} />
      <MockRow on={at(B + 2)} out={gone(B + 2)} text />

      {/* state: the same app (poses), several apps (concepts, then the resize) */}
      <Head on={at(B + 3)} out={gone(B + 3)} eyebrow="Estado" title="Misma app" sub="Abierto · Cerrado · Doblado" subX={1000} />
      <Poses on={at(B + 3)} out={gone(B + 3)} y={470} />

      <Head on={at(B + 4)} out={gone(B + 4)} eyebrow="Estado" title="Varias apps" sub="Multiventana" subX={1050} />
      <WindowModes on={at(B + 4)} out={gone(B + 4)} y={470} />

      <Head on={at(B + 5)} out={gone(B + 5)} eyebrow="Estado" title="Ajuste de tamaño" sub="la app se adapta" subX={1180} size={120} />
      <ResizeDemo on={at(B + 5)} out={gone(B + 5)} y={390} />

      {/* recap, all at once, the combinations */}
      <Bullets here={here} b={b} from={B + 6} to={B + 6} together y={230} size={150} gap={50} items={AXES} />
      <Say on={at(B + 7)} out={gone(B + 7)} text="¿Y todo a la vez?" y={400} size={170} />
      <Say on={at(B + 8)} text="Y todo a la vez." y={130} size={120} />
      <Combinatorics on={at(B + 8)} />
    </>
  );
}

/** "3.000M", as the original writes it: es-ES does not group four digits, so it is not animated. */
function Reveal3000({ on, out }: { on: boolean; out: boolean }) {
  return (
    <div className="t-numeral" style={{ position: 'absolute', left: 150, top: 260, fontSize: 340, opacity: on ? 1 : 0, transform: on ? 'none' : `translateY(${out ? -30 : 30}px)`, transition: 'opacity 600ms var(--ease), transform 600ms var(--ease)' }}>
      3.000M
    </div>
  );
}

export const Malo = () => <Scene index={1}><Malo_ /></Scene>;
