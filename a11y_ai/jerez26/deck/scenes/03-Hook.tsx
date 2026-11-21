import { Reveal, Scene, useScene } from 'beatdeck';
import { Phone, TalkBackClip } from '../ui';
import talkbackClip from '../assets/talkback-clip.mp4';
import settings from '../assets/settings-before.png';
import search from '../assets/search-before.png';

function Hook_() {
  const { here, b } = useScene();
  return (
    <>
      <Reveal on={here && b === 0} out={here && b > 0} x={120} y={400}>
        <div className="t-statement" style={{ fontSize: 170 }}>Cierra los ojos.</div>
      </Reveal>

      <Reveal on={here && b === 1} out={here && b > 1} x={120} y={330}>
        <div className="t-statement" style={{ fontSize: 150 }}>Esto es Muviss.</div>
      </Reveal>
      <Reveal on={here && b === 1} out={here && b > 1} x={124} y={520} delay={250}>
        <span className="chip">Una app real. Mía.</span>
      </Reveal>
      <Phone on={here && b === 1} out={here && b > 1} src={search} alt="Pantalla de búsqueda de Muviss en un teléfono" x={1380} y={110} />

      {/* 03.3 the clip: TalkBack recorded on the Pixel on the unfixed build, with sound (decision R-21). */}
      <Reveal on={here && b === 2} out={here && b > 2} x={120} y={330}>
        <div className="t-statement" style={{ fontSize: 76 }}>Esto es lo que dice TalkBack.</div>
      </Reveal>
      <TalkBackClip on={here && b === 2} out={here && b > 2} src={talkbackClip} label="Grabación, con sonido, de TalkBack en la app Muviss antes de cualquier trabajo de accesibilidad" x={1380} y={110} />

      <Reveal on={here && b === 3} x={120} y={250}>
        <div className="t-statement" style={{ fontSize: 112, lineHeight: 1.1 }}>Así conocen algunos<br />usuarios<br />tu app.</div>
      </Reveal>
      <Phone on={here && b === 3} src={settings} alt="Pantalla de ajustes de Muviss" x={1380} y={110} />
    </>
  );
}

/** 03 HOOK — close your eyes, then TalkBack on the unfixed app. */
export const Hook = () => <Scene index={2}><Hook_ /></Scene>;
