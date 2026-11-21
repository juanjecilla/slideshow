import { QR, Reveal, Scene, qrConfigured, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { Quote } from '../quote/Quote';
import { QUOTES } from '../quotes';
import { GithubMark, Panel } from '../ui';

const ACCESSIBLE = [
  'Contraste AA en ambos temas',
  'El escenario está oculto a los lectores de pantalla; cada paso se anuncia',
  'Anterior y Siguiente son botones reales; las flechas y T también funcionan',
  'Se respeta el movimiento reducido',
];

const LINKS: [string, string][] = [
  ['toolkit', 'github.com/juanjecilla/hephaestus'],
  ['app', 'github.com/juanjecilla/muviss-kmp'],
  ['diapositivas', 'juanjecilla.github.io/slideshow/a11y_ai/jerez26'],
];

function Close_() {
  const { here, b } = useScene();
  const qr = qrConfigured(config.qrUrl);
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={120} y={330}><div className="t-statement" style={{ fontSize: 210 }}>Hephaestus</div></Reveal>
      <Reveal on={here && b === 0} out={here && b > 0} x={124} y={610} delay={300}><span className="chip">Dios griego de la fragua · cojo</span></Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={120} y={300}><div className="t-statement" style={{ fontSize: 100, lineHeight: 1.1 }}>Forjó doncellas de oro<br />para ayudarle a andar.</div></Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={124} y={640} delay={500}><span className="chip">Ilíada, canto XVIII</span></Reveal>

      <Quote quote={QUOTES.bjarno} on={here && b === 2} out={here && b > 2} y={290} />

      <Reveal on={here && b === 3} out={here && b > 3} x={120} y={260}><div className="t-statement" style={{ fontSize: 130, lineHeight: 1.05 }}>Construye lo<br />que necesites.</div></Reveal>
      <Reveal on={here && b === 3} out={here && b > 3} x={124} y={620} delay={300}><span className="chip info">Llévate el toolkit</span></Reveal>
      {qr && (
        <Reveal on={here && b === 3} out={here && b > 3} x={1260} y={200} delay={400}>
          <Panel center title={<><GithubMark />{config.qrLabel.replace(/^github\.com\//, '')}</>} style={{ width: 460 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}><QR url={config.qrUrl} size={380} /></div>
          </Panel>
        </Reveal>
      )}

      <Reveal on={here && b === 4} out={here && b > 4} x={120} y={170}><div className="t-statement" style={{ fontSize: 100, lineHeight: 1.05 }}>Ve y rómpelo.</div></Reveal>
      {LINKS.map(([k, u], i) => (
        <Reveal key={k} on={here && b === 4} out={here && b > 4} x={158} y={400 + i * 130} delay={200 + i * 150}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'baseline' }}>
            <span className="t-meta" style={{ fontSize: 22, width: 230 }}>{k}</span>
            <span className="mono" style={{ fontSize: 44 }}>{u}</span>
          </div>
        </Reveal>
      ))}

      <Reveal on={here && b === 5} x={120} y={150}><div className="t-statement" style={{ fontSize: 110, lineHeight: 1.05 }}>Esta presentación<br />intenta ser accesible.</div></Reveal>
      <Reveal on={here && b === 5} x={120} y={450} delay={300}>
        <Panel title="comprobado con tools/check-a11y.mjs" style={{ width: 1500 }}>
          {ACCESSIBLE.map((line) => (
            <div key={line} style={{ display: 'flex', gap: 24, alignItems: 'baseline', padding: '8px 0' }}>
              <span aria-hidden="true" style={{ color: 'var(--ok)', fontWeight: 800, fontSize: 40 }}>✓</span>
              <span className="t-editorial" style={{ fontSize: 40 }}>{line}</span>
            </div>
          ))}
        </Panel>
      </Reveal>
      <Reveal on={here && b === 5} x={120} y={900} delay={900}><span className="chip info">Ábrela con tu lector de pantalla. Dime qué se rompe.</span></Reveal>
    </>
  );
}

/** 12 CLOSE — Hephaestus built his own assistive technology; take the toolkit; this deck tries too. */
export const Close = () => <Scene index={11}><Close_ /></Scene>;
