import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';

function QA_() {
  const { here } = useScene();
  return (
    <>
      <Reveal on={here} x={160} y={380}>
        <div className="t-statement" style={{ fontSize: 220 }}>Questions<span style={{ color: 'var(--accent)' }}>?</span></div>
      </Reveal>
      <Reveal on={here} x={170} y={680} delay={200}>
        <div className="t-meta" style={{ fontSize: 24 }}>{config.author}</div>
        <div className="mono" style={{ fontSize: 34, marginTop: 20 }}>{config.qrLabel}</div>
      </Reveal>
    </>
  );
}

/** 13 Q&A */
export const QA = () => <Scene index={12}><QA_ /></Scene>;
