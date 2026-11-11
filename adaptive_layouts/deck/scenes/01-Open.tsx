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
      <Say on={at(1)} out={gone(1)} text="Adaptarse o Morir" y={540} size={120} color="var(--accent)" />

      {/* 1.3 who: name, role and communities in one beat */}
      <Say on={at(2)} out={gone(2)} text="Juanje Cilla" y={170} size={170} />
      <Line on={at(2)} out={gone(2)} text="Senior Software Engineer · Más de 10 años en Android" y={400} size={58} />
      <Eyebrow on={at(2)} out={gone(2)} text="Comunidad" y={560} />
      <Bullets here={here} b={b} from={2} to={2} together y={640} size={64} gap={26}
        items={['GDG Aranjuez · Organizador', 'Coding Pit', 'Welcome to La Secta']} />

      {/* 1.4 Muviss */}
      <Eyebrow on={at(3)} out={gone(3)} text="La app de esta charla" />
      <Western on={at(3)} out={gone(3)} text="Muviss" y={260} size={230} />
      <Line on={at(3)} out={gone(3)} text="Android · iOS (iPhone e iPad) · escritorio · web" y={620} size={58} />
      <Line on={at(3)} out={gone(3)} text="Todo el código que veréis es suyo." y={730} size={58} dim />
      <Src on={at(3)} out={gone(3)} y={900} text="Datos y pósters de TMDB. Esta app usa la API de TMDB, pero TMDB no la respalda ni la certifica." />

      {/* 1.5 agenda */}
      <Eyebrow on={at(4)} text="Agenda" />
      <Bullets here={here} b={b} from={4} to={4} together y={240} size={84} gap={40}
        items={['1 · Problemática', '2 · Soluciones antiguas', '3 · Adaptive Layouts', '4 · Conclusiones']} />
    </>
  );
}
export const Open = () => <Scene index={0}><Open_ /></Scene>;
