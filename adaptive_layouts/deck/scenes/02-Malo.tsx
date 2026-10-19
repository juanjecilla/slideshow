import { CountUp, Scene } from 'beatdeck';
import { Bullets, Device, Eyebrow, Intertitle, Line, Say, Src, useBeat } from '../ui';

/** The three axes of the problem, in the order the original deck gives them. */
const AXES = ['Dispositivos', 'Contexto', 'Estado'] as const;

/** Illustrative boxes (1x, 2x, 3x): the proportions are drawn, not measured. */
function Scale({ on, out, x, y, kind }: { on: boolean; out?: boolean; x: number; y: number; kind: 'zoom' | 'font' }) {
  const sizes = [1, 2, 3];
  return (
    <>
      {sizes.map((k, i) => (
        <Device key={k} on={on} out={out} x={x + i * 330} y={y + (kind === 'zoom' ? 160 - k * 50 : 0)} w={k * 100} h={k * 100} label={`${k}x`} desk={false} />
      ))}
    </>
  );
}

function Malo_() {
  const { here, b, entry, at, gone, span } = useBeat();
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
      <Src on={at(2)} out={gone(2)} y={800} text="Cifra anunciada en Google I/O 2021" />

      {/* 2.4 large screens */}
      <Eyebrow on={at(3)} out={gone(3)} text="Dispositivos" />
      <div className="t-numeral" style={{ position: 'absolute', left: 150, top: 260, fontSize: 340, opacity: at(3) ? 1 : 0, transition: 'opacity 600ms var(--ease)' }}>
        <CountUp value={580} from={at(3) ? 0 : undefined} entry={entry} prefix="+" suffix="M" />
      </div>
      <Line on={at(3)} out={gone(3)} text="pantallas grandes en manos de usuarios" y={690} size={64} />
      <Src on={at(3)} out={gone(3)} y={800} text="Android Developers Blog · 19 de mayo de 2026" />

      {/* 2.5 forms */}
      <Eyebrow on={at(4)} out={gone(4)} text="Dispositivos" />
      <Device on={at(4)} out={gone(4)} x={170} y={330} w={150} h={300} label="Móvil" />
      <Device on={at(4)} out={gone(4)} x={480} y={330} w={300} h={300} label="Plegable" fold />
      <Device on={at(4)} out={gone(4)} x={940} y={350} w={380} h={280} label="Tablet" />
      <Device on={at(4)} out={gone(4)} x={1480} y={350} w={300} h={220} label="Escritorio" desk />

      {/* 2.6 orientation */}
      <Eyebrow on={at(5)} out={gone(5)} text="Contexto" />
      <Say on={at(5)} out={gone(5)} text="Orientación" y={250} size={170} />
      <Line on={at(5)} out={gone(5)} text="Portrait / Landscape" y={470} size={72} dim />
      <Device on={at(5)} out={gone(5)} x={300} y={640} w={160} h={290} label="Portrait" />
      <Device on={at(5)} out={gone(5)} x={760} y={700} w={290} h={160} label="Landscape" />

      {/* 2.7 zoom */}
      <Eyebrow on={at(6)} out={gone(6)} text="Contexto" />
      <Say on={at(6)} out={gone(6)} text="Zoom" y={250} size={170} />
      <Line on={at(6)} out={gone(6)} text="1x … 3x" y={470} size={72} dim />
      <Scale on={at(6)} out={gone(6)} x={300} y={640} kind="zoom" />

      {/* 2.8 font size */}
      <Eyebrow on={at(7)} out={gone(7)} text="Contexto" />
      <Say on={at(7)} out={gone(7)} text="Font size" y={250} size={170} />
      <Line on={at(7)} out={gone(7)} text="2x, 3x…" y={470} size={72} dim />
      {[1, 2, 3].map((k) => (
        <div key={k} className="t-western" style={{ position: 'absolute', left: 300 + (k - 1) * 380, top: 700 - k * 20, fontSize: 70 * k, opacity: at(7) ? 1 : 0, transition: 'opacity 500ms var(--ease)' }}>Aa</div>
      ))}

      {/* 2.9 state, same app */}
      <Eyebrow on={at(8)} out={gone(8)} text="Estado" />
      <Say on={at(8)} out={gone(8)} text="Misma app" y={250} size={170} />
      <Bullets here={here} b={b} from={8} to={8} together y={520} size={80} gap={36} items={['Abierto', 'Cerrado', 'Doblado']} />

      {/* 2.10 state, several apps */}
      <Eyebrow on={at(9)} out={gone(9)} text="Estado" />
      <Say on={at(9)} out={gone(9)} text="Varias apps" y={250} size={170} />
      <Bullets here={here} b={b} from={9} to={9} together y={520} size={80} gap={36} items={['Ajuste de tamaño', 'Comunicación']} />

      {/* 2.11 recap */}
      <Bullets here={here} b={b} from={10} to={10} together y={230} size={150} gap={50} items={AXES} />

      {/* 2.12 */}
      <Say on={at(11)} out={gone(11)} text="¿Y todo a la vez?" y={400} size={170} />

      {/* 2.13 */}
      <Say on={span(12, 12)} text="Dispositivos ×" y={190} size={160} />
      <Say on={span(12, 12)} text="Contexto ×" y={390} size={160} />
      <Say on={span(12, 12)} text="Estado" y={590} size={160} color="var(--accent)" />
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
