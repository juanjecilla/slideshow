import { Scene, useScene } from 'beatdeck';
import { SlideView } from './Slide';
import { beatsOf, locate, slidesOf } from './model';

/** Draws the slides of one scene. Only the slide on screen and its neighbours are mounted (images decode ahead). */
function Layer({ scene }: { scene: number }) {
  const { here, b } = useScene();
  if (!here) return null;
  const at = locate(scene, b);
  if (!at) return null;
  const list = slidesOf(scene);
  const i = list.findIndex((s) => s.n === at.slide.n);
  return (
    <>
      {list.slice(Math.max(0, i - 1), i + 2).map((s) => (
        <SlideView key={s.n} slide={s} live={s.n === at.slide.n} local={s.n === at.slide.n ? at.local : s.n < at.slide.n ? beatsOf(s) - 1 : 0} />
      ))}
    </>
  );
}

export const SceneLayer = ({ scene }: { scene: number }) => (
  <Scene index={scene}><Layer scene={scene} /></Scene>
);
