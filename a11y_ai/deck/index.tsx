import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import '../themes/a11y.css';
import { LiveRegion, ThemeToggle } from './a11y';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { Open } from './scenes/01-Open';
import { Me } from './scenes/02-Me';
import { Hook } from './scenes/03-Hook';
import { WhyNow } from './scenes/04-WhyNow';
import { MapScene } from './scenes/05-Map';
import { Backup, Blind, Cognitive, LowVision, Motor, ShiftLeft } from './scenes/06-Placeholders';
import { Limits } from './scenes/11-Limits';
import { Close } from './scenes/12-Close';
import { QA } from './scenes/13-QA';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <ThemeToggle />
      <LiveRegion />
      <Open />
      <Me />
      <Hook />
      <WhyNow />
      <MapScene />
      <Blind />
      <LowVision />
      <Cognitive />
      <Motor />
      <ShiftLeft />
      <Limits />
      <Close />
      <QA />
      <Backup />
    </>
  );
}

export default defineDeck({
  id: 'a11y-on-android-ai-makes-it-easy',
  title: config.title,
  lang: 'en',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
