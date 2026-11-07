import { defineDeck } from 'beatdeck';
import '../themes/android.css';
import './code.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { Open } from './scenes/01-Open';
import { Me } from './scenes/02-Me';
import { Scenario } from './scenes/03-Scenario';
import { Context } from './scenes/04-Context';
import { Tools } from './scenes/05-Tools';
import { AppFunctions } from './scenes/06-AppFunctions';
import { WhyNot } from './scenes/07-WhyNot';
import { DeepDive } from './scenes/08-DeepDive';
import { Code } from './scenes/09-Code';
import { Safe } from './scenes/10-Safe';
import { Beyond } from './scenes/11-Beyond';
import { Demo } from './scenes/12-Demo';
import { Close } from './scenes/13-Close';
import { Backup } from './scenes/14-Backup';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <Open />
      <Me />
      <Scenario />
      <Context />
      <Tools />
      <AppFunctions />
      <WhyNot />
      <DeepDive />
      <Code />
      <Safe />
      <Beyond />
      <Demo />
      <Close />
      <Backup />
    </>
  );
}

export default defineDeck({
  id: 'app-functions-skill-es',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
