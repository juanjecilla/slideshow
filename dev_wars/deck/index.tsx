import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import '../themes/devwars.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { Prologue } from './scenes/01-Prologue';
import { Ego } from './scenes/02-Ego';
import { Opiniones } from './scenes/03-Opiniones';
import { Templo } from './scenes/04-Templo';
import { Marfil } from './scenes/05-Marfil';
import { Oscuro } from './scenes/06-Oscuro';
import { Esperanza } from './scenes/07-Esperanza';
import { Cierre } from './scenes/08-Cierre';

function Stage() {
  return (
    <>
      <Prologue />
      <Ego />
      <Opiniones />
      <Templo />
      <Marfil />
      <Oscuro />
      <Esperanza />
      <Cierre />
    </>
  );
}

export default defineDeck({
  id: 'dev-wars',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  // No chrome of our own on stage; the operator UI (overview O, presenter P) is the engine's.
  Chrome: null,
  fonts: ['600 100px "Inter Variable"', '500 60px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
