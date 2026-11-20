import { Reveal, Scene, useScene } from 'beatdeck';
import { Phone } from '../ui';
import settings from '../assets/settings-before.png';
import search from '../assets/search-before.png';

function Hook_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={120} y={400}>
        <div className="t-statement" style={{ fontSize: 170 }}>Close your eyes.</div>
      </Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={120} y={330}>
        <div className="t-statement" style={{ fontSize: 150 }}>This is Muviss.</div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={124} y={520} delay={250}>
        <span className="chip">A real app. Mine.</span>
      </Reveal>
      <Phone on={here && b === 1} out={here && b > 1} src={search} alt="Muviss search screen on a phone" x={1380} y={110} />

      {/* 03.3 the clip: live TalkBack on the Pixel (decision R-21), so the screen stays black while it plays. */}
      <Reveal on={here && b === 2} out={here && b > 2} x={120} y={330}>
        <div className="t-statement" style={{ fontSize: 90 }}>This is what TalkBack says.</div>
      </Reveal>
      <Reveal on={here && b === 2} out={here && b > 2} x={1380} y={110}>
        <div className="phone" data-audit="off">
          <div className="phone-screen" style={{ width: 383, height: 860, display: 'grid', placeItems: 'center', background: '#000', textAlign: 'center' }}>
            <div><div className="t-eyebrow">Live</div><div className="t-editorial" style={{ fontSize: 34, marginTop: 14, padding: '0 28px', color: '#fff' }}>TalkBack on the app, with sound</div></div>
          </div>
        </div>
      </Reveal>

      <Reveal on={here && b === 3} x={120} y={250}>
        <div className="t-statement" style={{ fontSize: 112, lineHeight: 1.1 }}>That is how some<br />users meet<br />your app.</div>
      </Reveal>
      <Phone on={here && b === 3} src={settings} alt="Muviss settings screen" x={1380} y={110} />
    </>
  );
}

/** 03 HOOK — close your eyes, then TalkBack on the unfixed app. */
export const Hook = () => <Scene index={2}><Hook_ /></Scene>;
