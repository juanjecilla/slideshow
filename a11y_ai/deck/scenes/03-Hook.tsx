import { Reveal, Scene, useScene } from 'beatdeck';

function Hook_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={150} y={400}>
        <div className="t-statement" style={{ fontSize: 210 }}>Close your eyes.</div>
      </Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={340}>
        <div className="t-statement" style={{ fontSize: 210 }}>This is Muviss.</div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={158} y={620} delay={250}>
        <div className="t-meta" style={{ fontSize: 34 }}>A real app. Mine.</div>
      </Reveal>

      {/* 03.3 the clip. TODO: replace the frame with the recorded video (docs/AUDIT.md → media). */}
      <Reveal on={here && b === 2} out={here && b > 2} x={260} y={150}>
        <div data-audit="off" style={{ width: 1400, height: 780, border: '3px dashed var(--hair-strong)', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
          <div>
            <div className="t-eyebrow">TODO · clip</div>
            <div className="t-editorial" style={{ fontSize: 56, marginTop: 24 }}>TalkBack on the app, before any fix</div>
          </div>
        </div>
      </Reveal>

      <Reveal on={here && b === 3} x={150} y={300}>
        <div className="t-statement" style={{ fontSize: 150, lineHeight: 1.05 }}>That is how some<br />users meet<br />your app.</div>
      </Reveal>
    </>
  );
}

/** 03 HOOK — close your eyes, then TalkBack on the unfixed app. */
export const Hook = () => <Scene index={2}><Hook_ /></Scene>;
