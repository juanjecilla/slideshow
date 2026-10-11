import { Reveal, Scene, Terminal, useScene } from 'beatdeck';
import { CONFIRM, IDEMPOTENT, INPUT_GUARD, KDOC_BAD, KDOC_GOOD, STATE_RESULT, TYPES_BAD, TYPES_GOOD } from '../code';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const TAGS = ['', 'secure', 'secure', 'deterministic', 'deterministic', 'unobtrusive', 'unobtrusive', 'schema design', 'schema design'];

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
      <Statement {...only(0)} y={230} size={150}><G>Secure.</G><br />Deterministic.<br /><A>Unobtrusive.</A></Statement>

      {/* 1 · who can call */}
      <Statement {...only(1)} y={190} size={104}>Who can call?</Statement>
      {['EXECUTE_APP_FUNCTIONS on the caller', 'BIND_APP_FUNCTION_SERVICE on your service', 'isEnabled = false · setAppFunctionEnabled()', 'runtime user control (API 37.2)'].map((t, i) => (
        <Reveal key={t} {...only(1)} x={158} y={420 + i * 96} delay={200 + i * 150}><div className="mono" style={{ fontSize: 40 }}>{t}</div></Reveal>
      ))}

      {/* 2 · input is untrusted */}
      <Statement {...only(2)} y={190} size={104}>Arguments come<br />from a model.</Statement>
      <Meta {...only(2)} y={520} size={34} delay={200}>Validate like any external input.</Meta>
      {term(2, INPUT_GUARD, 150, 650, 26)}

      {/* 3 · types */}
      <Statement {...only(3)} y={190} size={104}>Ids, not <G>guesses.</G></Statement>
      {term(3, TYPES_BAD, 150, 520, 30)}
      {term(3, TYPES_GOOD, 1010, 520, 30)}

      {/* 4 · idempotent */}
      <Statement {...only(4)} y={190} size={104}>Agents <G>retry.</G></Statement>
      <Meta {...only(4)} y={420} size={34} delay={200}>Same call twice, same state.</Meta>
      {term(4, IDEMPOTENT, 150, 600, 40)}

      {/* 5 · confirm */}
      <Statement {...only(5)} y={150} size={90}>Destructive? <G>Confirm first.</G></Statement>
      {term(5, CONFIRM, 150, 300, 28)}

      {/* 6 · state */}
      <Statement {...only(6)} y={190} size={104}>Return enough<br />to <G>tell the user.</G></Statement>
      {term(6, STATE_RESULT, 150, 520, 30)}

      {/* 7–8 · KDoc */}
      <Statement on={here && b >= 7} y={140} size={84}>The KDoc <G>is</G> the interface.</Statement>
      <Reveal {...only(7)} x={150} y={330}>
        <div className="t-meta" style={{ fontSize: 22, color: 'var(--fault)', marginBottom: 20 }}>vague</div>
        <Terminal prompt="" size={30} lines={KDOC_BAD} />
      </Reveal>
      <Reveal on={here && b >= 8} x={150} y={300} delay={200}>
        <div className="t-meta" style={{ fontSize: 22, color: 'var(--accent)', marginBottom: 20 }}>written for a model</div>
        <Terminal prompt="" size={28} lines={KDOC_GOOD} />
      </Reveal>
    </>
  );
}

/** 10 SAFE — the CFP promises: secure, deterministic, unobtrusive. */
export const Safe = () => <Scene index={9}><Safe_ /></Scene>;
