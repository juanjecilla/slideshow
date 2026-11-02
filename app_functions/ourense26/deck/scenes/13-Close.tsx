import { QR, Reveal, Scene, qrConfigured, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const CHECKLIST = [
  'KDoc escrito para un modelo',
  'IDs y tipos estrechos, no texto libre',
  'escrituras idempotentes, errores tipados',
  'confirmar las acciones destructivas',
  'suspend + Dispatchers.IO, delega en tus casos de uso',
];

const LINKS: [string, string][] = [
  ['docs', 'developer.android.com/ai/appfunctions'],
  ['versiones', 'developer.android.com/jetpack/androidx/releases/appfunctions'],
  ['ejemplos', 'github.com/android/appfunctions'],
  ['skill', 'github.com/android/skills · device-ai/appfunctions'],
];

function Close_() {
  const { here, b } = useScene();
  const only = (k: number) => ({ on: here && b === k, out: here && b > k });
  const qr = qrConfigured(config.qrUrl);
  return (
    <>
      <Eyebrow on={here}>{['preparación agéntica', 'recursos', 'gracias'][b] ?? ''}</Eyebrow>

      <Statement {...only(0)} y={180} size={96}>Preparación <G>agéntica.</G></Statement>
      {CHECKLIST.map((t, i) => (
        <Reveal key={t} {...only(0)} x={158} y={400 + i * 110} delay={200 + i * 160}>
          <div style={{ display: 'flex', gap: 36, alignItems: 'baseline' }}>
            <span style={{ fontSize: 48, color: 'var(--accent)' }}>✓</span>
            <span style={{ fontSize: 50, fontWeight: 500, letterSpacing: '-0.02em' }}>{t}</span>
          </div>
        </Reveal>
      ))}

      <Statement {...only(1)} y={180} size={96}>Ve a <A>leer</A> las fuentes.</Statement>
      {LINKS.map(([k, u], i) => (
        <Reveal key={k} {...only(1)} x={158} y={430 + i * 110} delay={200 + i * 160}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
            <span className="t-meta" style={{ fontSize: 22, width: 170 }}>{k}</span>
            <span className="mono" style={{ fontSize: 36 }}>{u}</span>
          </div>
        </Reveal>
      ))}

      <Meta {...only(1)} y={900} size={22} delay={900}>enlaces comprobados el 2026-11-02 · la documentación puede ir por detrás de las notas de versión de Jetpack</Meta>

      <Reveal on={here && b === 2} x={160} y={170}>
        <div className="t-statement" style={{ fontSize: 190 }}><span style={{ color: 'var(--accent)' }}>¿</span>Preguntas<span style={{ color: 'var(--accent)' }}>?</span></div>
      </Reveal>
      <Reveal on={here && b === 2} x={170} y={440} delay={200}>
        <div className="t-meta" style={{ fontSize: 28 }}>{config.author} · {config.role}</div>
      </Reveal>
      {Object.values(config.links).map((u, i) => (
        <Reveal key={u} on={here && b === 2} x={170} y={520 + i * 56} delay={300 + i * 100}>
          <div className="mono" style={{ fontSize: 32, color: 'var(--ink-2)' }}>{u}</div>
        </Reveal>
      ))}
      {config.qrLabel && (
        <Reveal on={here && b === 2} x={170} y={820} delay={700}>
          <div className="t-eyebrow" style={{ fontSize: 20 }}>// estas slides</div>
          <div className="mono" style={{ fontSize: 44, marginTop: 14, color: 'var(--accent)' }}>{config.qrLabel}</div>
        </Reveal>
      )}
      {qr && (
        <Reveal on={here && b === 2} x={1400} y={260} delay={300}>
          <QR url={config.qrUrl} size={380} />
        </Reveal>
      )}
    </>
  );
}

/** 13 CLOSE — checklist, recursos, preguntas + enlaces. */
export const Close = () => <Scene index={12}><Close_ /></Scene>;
