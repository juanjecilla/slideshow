import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import '../themes/poster.css';
import { LiveRegion, SrNav, StagePicture, ThemeToggle } from './a11y-kit';
import { config } from './deck.config';
import { Placeholder } from './Placeholder';
import { Numeral, ToneTheme } from './poster';
import { SCENES } from './scenes';
import { SR } from './sr';
import { TONES } from './tones';

/** Every layer of the stage, back to front. DRAFT: every scene is a placeholder until the visual direction is set. */
function Stage() {
  return (
    <>
      <ThemeToggle />
      <ToneTheme tones={TONES} />
      <LiveRegion summaries={SR} />
      <SrNav />
      <StagePicture>
        <Numeral hideOn={[0, 1, 5, 6, 7]} />
        {SCENES.map((_, i) => <Placeholder key={i} index={i} />)}
      </StagePicture>
    </>
  );
}

export default defineDeck({
  id: 'progr-amar-en-tiempos-revueltos',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '800 100px "Fraunces Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
