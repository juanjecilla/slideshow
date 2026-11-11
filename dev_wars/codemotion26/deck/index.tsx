import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import './deck.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { SceneLayer } from './SceneLayer';

function Stage() {
  return (
    <>
      {SCENES.map((_, i) => <SceneLayer key={i} scene={i} />)}
    </>
  );
}

export default defineDeck({
  id: 'dev-wars-codemotion26',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  Chrome: null, // the original slides carry no chrome of their own
  fonts: ['400 40px "IBM Plex Sans"', '600 40px "IBM Plex Sans"', '700 40px "IBM Plex Sans"'],
  qrUrl: config.qrUrl,
});
