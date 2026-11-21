import { Scene } from 'beatdeck';
import { Standby } from '../standby/Standby';
import { Bullets, Eyebrow, Line, Say, Src, useBeat, Western } from '../ui';

function Open_() {
  const { here, b, at, gone } = useBeat();
  return (
    <>
      {/* 1.1 standby */}
      <Eyebrow on={at(0)} out={gone(0)} text="DevFest Jaén 2026 · GDG Jaén · online" />
      <Western on={at(0)} out={gone(0)} text="Adaptive Layouts" y={190} size={130} />
      <Standby on={at(0)} out={gone(0)} />

      {/* 1.2 title */}
      <Western on={at(1)} out={gone(1)} text="Adaptive Layouts" y={300} size={150} />
      <Say on={at(1)} out={gone(1)} text="Adapt or Die" y={540} size={120} color="var(--accent)" />

      {/* 1.3 who: name, role and communities in one beat */}
      <Say on={at(2)} out={gone(2)} text="Juanje Cilla" y={170} size={170} />
      <Line on={at(2)} out={gone(2)} text="Senior Software Engineer · 10+ years on Android" y={400} size={58} />
      <Eyebrow on={at(2)} out={gone(2)} text="Community" y={560} />
      <Bullets here={here} b={b} from={2} to={2} together y={640} size={64} gap={26}
        items={['GDG Aranjuez · Organiser', 'Coding Pit', 'Welcome to La Secta']} />

      {/* 1.4 Muviss */}
      <Eyebrow on={at(3)} out={gone(3)} text="The app of this talk" />
      <Western on={at(3)} out={gone(3)} text="Muviss" y={260} size={230} />
      <Line on={at(3)} out={gone(3)} text="Android · iOS (iPhone and iPad) · desktop · web" y={620} size={58} />
      <Line on={at(3)} out={gone(3)} text="All the code you will see is its own." y={730} size={58} dim />
      <Src on={at(3)} out={gone(3)} y={900} text="Data and posters from TMDB. This app uses the TMDB API but is not endorsed or certified by TMDB." />

      {/* 1.5 agenda */}
      <Eyebrow on={at(4)} text="Agenda" />
      <Bullets here={here} b={b} from={4} to={4} together y={240} size={84} gap={40}
        items={['1 · The problem', '2 · The old solutions', '3 · Adaptive Layouts', '4 · Conclusions']} />
    </>
  );
}
export const Open = () => <Scene index={0}><Open_ /></Scene>;
