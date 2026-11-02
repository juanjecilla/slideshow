import { Reveal, Scene, Terminal, useScene } from 'beatdeck';
import { CONFIRM, IDEMPOTENT, INPUT_GUARD, KDOC_BAD, KDOC_GOOD, STATE_RESULT, TYPES_BAD, TYPES_GOOD } from '../code';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const TAGS = ['', 'segura', 'segura', 'determinista', 'determinista', 'sin fricción', 'sin fricción', 'diseño del esquema', 'diseño del esquema'];

function Safe_() {
  const { here, b } = useScene();
  const only = (k: number) => ({ on: here && b === k, out: here && b > k });
  const term = (k: number, lines: Parameters<typeof Terminal>[0]['lines'], x: number, y: number, size = 32) => (
    <Reveal {...only(k)} x={x} y={y} delay={200}><Terminal prompt="" size={size} lines={lines} /></Reveal>
  );
  return (
    <>
      <Eyebrow on={here && b > 0}>{TAGS[b] ?? ''}</Eyebrow>

      {/* 0 · the CFP promise */}
      <Statement {...only(0)} y={230} size={150}><G>Segura.</G><br />Determinista.<br /><A>Sin fricción.</A></Statement>

      {/* 1 · who can call */}
      <Statement {...only(1)} y={190} size={104}>¿Quién puede llamar?</Statement>
      {['EXECUTE_APP_FUNCTIONS en quien llama', 'BIND_APP_FUNCTION_SERVICE en tu servicio', 'isEnabled = false · setAppFunctionEnabled()', 'control del usuario en ejecución (API 37.2)'].map((t, i) => (
        <Reveal key={t} {...only(1)} x={158} y={420 + i * 96} delay={200 + i * 150}><div className="mono" style={{ fontSize: 40 }}>{t}</div></Reveal>
      ))}

      {/* 2 · input is untrusted */}
      <Statement {...only(2)} y={190} size={104}>Los argumentos vienen<br />de un modelo.</Statement>
      <Meta {...only(2)} y={520} size={34} delay={200}>Valídalos como cualquier entrada externa.</Meta>
      {term(2, INPUT_GUARD, 150, 650, 26)}

      {/* 3 · types */}
      <Statement {...only(3)} y={190} size={104}>IDs, no <G>suposiciones.</G></Statement>
      {term(3, TYPES_BAD, 150, 520, 30)}
      {term(3, TYPES_GOOD, 1010, 520, 30)}

      {/* 4 · idempotent */}
      <Statement {...only(4)} y={190} size={104}>Los agentes <G>reintentan.</G></Statement>
      <Meta {...only(4)} y={420} size={34} delay={200}>La misma llamada dos veces, el mismo estado.</Meta>
      {term(4, IDEMPOTENT, 150, 600, 40)}

      {/* 5 · confirm */}
      <Statement {...only(5)} y={150} size={90}>¿Destructiva? <G>Confirma primero.</G></Statement>
      {term(5, CONFIRM, 150, 300, 28)}

      {/* 6 · state */}
      <Statement {...only(6)} y={190} size={104}>Devuelve lo bastante<br />para <G>informar al usuario.</G></Statement>
      {term(6, STATE_RESULT, 150, 520, 30)}

      {/* 7–8 · KDoc */}
      <Statement on={here && b >= 7} y={140} size={84}>El KDoc <G>es</G> la interfaz.</Statement>
      <Reveal {...only(7)} x={150} y={330}>
        <div className="t-meta" style={{ fontSize: 22, color: 'var(--fault)', marginBottom: 20 }}>vago</div>
        <Terminal prompt="" size={30} lines={KDOC_BAD} />
      </Reveal>
      <Reveal on={here && b >= 8} x={150} y={290} delay={200}>
        <div className="t-meta" style={{ fontSize: 22, color: 'var(--accent)', marginBottom: 16 }}>escrito para un modelo</div>
        <Terminal prompt="" size={25} lines={KDOC_GOOD} />
      </Reveal>
    </>
  );
}

/** 10 SAFE — lo prometido en el CFP: segura, determinista, sin fricción. */
export const Safe = () => <Scene index={9}><Safe_ /></Scene>;
