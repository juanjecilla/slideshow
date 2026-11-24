import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import '../themes/western.css';
import { LiveRegion, SrNav, StagePicture } from './a11y';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { Open } from './scenes/01-Open';
import { Malo } from './scenes/02-Malo';
import { Feo } from './scenes/03-Feo';
import { BuenoWsc } from './scenes/04-BuenoWsc';
import { BuenoInsets } from './scenes/05-BuenoInsets';
import { BuenoM3 } from './scenes/06-BuenoM3';
import { BuenoInput } from './scenes/07-BuenoInput';
import { Demo } from './scenes/08-Demo';
import { Fin } from './scenes/09-Fin';
import { Backup } from './scenes/10-Backup';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <LiveRegion />
      <SrNav />
      <StagePicture>
      <Open />
      <Malo />
      <Feo />
      <BuenoWsc />
      <BuenoInsets />
      <BuenoM3 />
      <BuenoInput />
      <Demo />
      <Fin />
      <Backup />
      </StagePicture>
    </>
  );
}

export default defineDeck({
  id: 'adaptive-layouts-jaen2026',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Rye"', '400 100px "Inter Variable"', '700 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
