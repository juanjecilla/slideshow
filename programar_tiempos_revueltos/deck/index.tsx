import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import '../themes/poster.css';
import { LiveRegion, SrNav, StagePicture, ThemeToggle } from './a11y-kit';
import { config } from './deck.config';
import { Scenes } from './Beats';
import { Numeral, ToneTheme } from './poster';
import { SCENES } from './scenes';
import { SR } from './sr';
import { NUMERALS, TONES } from './tones';

/** Every layer of the stage, back to front. The scenes are drawn from content.ts by Beats.tsx. */
function Stage() {
  return (
    <>
      <ThemeToggle />
      <ToneTheme tones={TONES} />
      <LiveRegion summaries={SR} />
      <SrNav />
      <StagePicture>
        <Numeral labels={NUMERALS} />
        <Scenes />
      </StagePicture>
    </>
  );
}

export default defineDeck({
  id: 'progr-amar-en-tiempos-revueltos',
  title: config.title,
  lang: 'en',
  scenes: SCENES,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '800 100px "Fraunces Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
