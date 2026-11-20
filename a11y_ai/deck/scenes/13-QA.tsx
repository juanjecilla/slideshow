import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';

function QA_() {
  const { here } = useScene();
  return (
    <>
      <Reveal on={here} x={120} y={330}><div className="t-statement" style={{ fontSize: 220 }}>Questions<span style={{ color: 'var(--accent)' }}>?</span></div></Reveal>
      <Reveal on={here} x={124} y={660} delay={200}>
        <div style={{ display: 'flex', gap: 14 }}><span className="chip">{config.author}</span><span className="chip info">{config.qrLabel}</span></div>
      </Reveal>
    </>
  );
}

/** 13 Q&A */
export const QA = () => <Scene index={12}><QA_ /></Scene>;
