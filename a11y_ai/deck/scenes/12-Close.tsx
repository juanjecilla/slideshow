import { QR, Reveal, Scene, qrConfigured, useScene } from 'beatdeck';
import { config } from '../deck.config';

const ACCESSIBLE = [
  'Contrast AA in both themes',
  'The stage is hidden from screen readers; each step is announced instead',
  'Previous and Next are real buttons; arrows and T work too',
  'Reduced motion respected',
];

function Close_() {
  const { here, b } = useScene();
  const qr = qrConfigured(config.qrUrl);
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={300}>
        <div className="t-statement" style={{ fontSize: 230 }}>Hephaestus</div>
      </Reveal>
      <Reveal on={here && b === 0} out={here && b > 0} x={158} y={620} delay={300}>
        <div className="t-meta" style={{ fontSize: 34 }}>Greek god of the forge · lame</div>
      </Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={300}>
        <div className="t-statement" style={{ fontSize: 120, lineHeight: 1.1 }}>He built golden maidens<br />to help him walk.</div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={158} y={640} delay={500}>
        <div className="t-meta" style={{ fontSize: 30 }}>Iliad, book 18</div>
      </Reveal>

      <Reveal on={here && b === 2} out={here && b > 2} x={150} y={250}>
        <div className="t-statement" style={{ fontSize: 150, lineHeight: 1.05 }}>Build what<br />you need.</div>
      </Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={158} y={640} delay={300}>
        <div className="t-meta" style={{ fontSize: 34 }}>Take the toolkit</div>
      </Reveal>
      {qr && (
        <Reveal on={here && b === 2} out={here && b > 2} x={1360} y={300} delay={400}>
          <QR url={config.qrUrl} size={380} />
          <div className="t-meta" style={{ fontSize: 20, marginTop: 24, width: 380, textAlign: 'center', textTransform: 'none', letterSpacing: '0.02em' }}>{config.qrLabel}</div>
        </Reveal>
      )}

      <Reveal on={here && b === 3} x={150} y={180}>
        <div className="t-statement" style={{ fontSize: 150 }}>This deck tries<br />to be accessible.</div>
      </Reveal>
      {ACCESSIBLE.map((line, i) => (
        <Reveal key={line} on={here && b === 3} x={158} y={560 + i * 80} delay={400 + i * 200}>
          <div className="t-editorial" style={{ fontSize: 48, color: 'var(--ink-2)' }}>{line}</div>
        </Reveal>
      ))}
      <Reveal on={here && b === 3} x={158} y={930} delay={1400}>
        <div className="t-meta" style={{ fontSize: 28, color: 'var(--accent)' }}>Open it with your screen reader. Tell me what breaks.</div>
      </Reveal>
    </>
  );
}

/** 12 CLOSE — Hephaestus built his own assistive technology; take the toolkit; this deck is accessible too. */
export const Close = () => <Scene index={11}><Close_ /></Scene>;
