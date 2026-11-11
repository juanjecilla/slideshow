import { usePos } from 'beatdeck';
import { SlideView } from './Slide';
import { beatsOf, locate } from './model';
import { SLIDES } from './slides.gen';

/**
 * Draws the slide on screen (and its neighbours, hidden, so images decode ahead).
 * One layer for the whole talk instead of one `<Scene>` per scene: `<Scene>` fades out, waits, then fades in,
 * which shows as a black gap between scenes. The original deck has no transitions, so slides cut.
 */
export function SceneLayer() {
  const { s, b } = usePos();
  const at = locate(s, b);
  if (!at) return null;
  const i = SLIDES.findIndex((x) => x.n === at.slide.n);
  return (
    <div className="layer">
      {SLIDES.slice(Math.max(0, i - 1), i + 2).map((x) => (
        <SlideView key={x.n} slide={x} live={x.n === at.slide.n} local={x.n === at.slide.n ? at.local : x.n < at.slide.n ? beatsOf(x) - 1 : 0} />
      ))}
    </div>
  );
}
