import { Scene, useScene } from 'beatdeck';
import { SCENES } from './scenes';

/** Draft scene: shows the scene title and the current beat name. Replaced one by one by the real scenes. */
function Placeholder_({ index }: { index: number }) {
  const { here, b } = useScene();
  const scene = SCENES[index];
  return (
    <>
      <div className="t-eyebrow" style={{ position: 'absolute', left: 168, top: 250, opacity: here ? 1 : 0 }}>// {scene.id} · {scene.title}</div>
      <h1 className="t-statement" style={{ position: 'absolute', left: 150, top: 330, margin: 0, fontSize: 150, opacity: here ? 1 : 0 }}>{scene.beats[b]?.name}</h1>
    </>
  );
}

export const Placeholder = ({ index }: { index: number }) => <Scene index={index}><Placeholder_ index={index} /></Scene>;
