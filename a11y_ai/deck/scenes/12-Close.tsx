import { QR, Reveal, Scene, qrConfigured, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { Panel } from '../ui';

const ACCESSIBLE = [
  'Contrast AA in both themes',
  'The stage is hidden from screen readers; each step is announced instead',
  'Previous and Next are real buttons; arrows and T work too',
  'Reduced motion respected',
];

const LINKS: [string, string][] = [
  ['toolkit', 'github.com/juanjecilla/hephaestus'],
  ['app', 'github.com/juanjecilla/muviss-kmp'],
  ['slides', 'juanjecilla.github.io/slideshow/a11y_ai'],
];

function Close_() {
  const { here, b } = useScene();
  const qr = qrConfigured(config.qrUrl);
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={120} y={330}><div className="t-statement" style={{ fontSize: 210 }}>Hephaestus</div></Reveal>
      <Reveal on={here && b === 0} out={here && b > 0} x={124} y={610} delay={300}><span className="chip">Greek god of the forge · lame</span></Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={120} y={300}><div className="t-statement" style={{ fontSize: 100, lineHeight: 1.1 }}>He built golden maidens<br />to help him walk.</div></Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={124} y={640} delay={500}><span className="chip">Iliad, book 18</span></Reveal>

      <Reveal on={here && b === 2} out={here && b > 2} x={120} y={260}><div className="t-statement" style={{ fontSize: 130, lineHeight: 1.05 }}>Build what<br />you need.</div></Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={124} y={620} delay={300}><span className="chip info">Take the toolkit</span></Reveal>
      {qr && (
        <Reveal on={here && b === 2} out={here && b > 2} x={1260} y={200} delay={400}>
          <Panel title={config.qrLabel} style={{ width: 460 }}><QR url={config.qrUrl} size={380} /></Panel>
        </Reveal>
      )}

      <Reveal on={here && b === 3} out={here && b > 3} x={120} y={170}><div className="t-statement" style={{ fontSize: 100, lineHeight: 1.05 }}>Go and break it.</div></Reveal>
      {LINKS.map(([k, u], i) => (
        <Reveal key={k} on={here && b === 3} out={here && b > 3} x={158} y={400 + i * 130} delay={200 + i * 150}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
            <span className="t-meta" style={{ fontSize: 22, width: 230 }}>{k}</span>
            <span className="mono" style={{ fontSize: 44 }}>{u}</span>
          </div>
        </Reveal>
      ))}
      <Reveal on={here && b === 3} out={here && b > 3} x={158} y={880} delay={900}><span className="t-meta" style={{ fontSize: 22 }}>links checked 2026-11-10 · the slides go live when the talk is merged</span></Reveal>

      <Reveal on={here && b === 4} x={120} y={150}><div className="t-statement" style={{ fontSize: 110, lineHeight: 1.05 }}>This deck tries<br />to be accessible.</div></Reveal>
      <Reveal on={here && b === 4} x={120} y={450} delay={300}>
        <Panel title="checked by tools/check-a11y.mjs" style={{ width: 1500 }}>
          {ACCESSIBLE.map((line) => (
            <div key={line} style={{ display: 'flex', gap: 24, alignItems: 'baseline', padding: '8px 0' }}>
              <span aria-hidden="true" style={{ color: 'var(--ok)', fontWeight: 800, fontSize: 40 }}>✓</span>
              <span className="t-editorial" style={{ fontSize: 40 }}>{line}</span>
            </div>
          ))}
        </Panel>
      </Reveal>
      <Reveal on={here && b === 4} x={120} y={900} delay={900}><span className="chip info">Open it with your screen reader. Tell me what breaks.</span></Reveal>
    </>
  );
}

/** 12 CLOSE — Hephaestus built his own assistive technology; take the toolkit; this deck tries too. */
export const Close = () => <Scene index={11}><Close_ /></Scene>;
