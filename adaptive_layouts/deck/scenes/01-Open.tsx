import { Scene } from 'beatdeck';
import { Standby } from '../standby/Standby';
import { Bullets, Eyebrow, Line, Say, Src, useBeat, Western } from '../ui';

function Open_() {
  const { here, b, at, gone, span } = useBeat();
  return (
    <>
      {/* 1.1 standby */}
      <Eyebrow on={at(0)} out={gone(0)} text="DevFest Jaén 2026 · GDG Jaén · online" />
      <Western on={at(0)} out={gone(0)} text="Adaptive Layouts" y={190} size={130} />
      <Standby on={at(0)} out={gone(0)} />

      {/* 1.2 title */}
      <Western on={at(1)} out={gone(1)} text="Adaptive Layouts" y={300} size={150} />
      <Say on={at(1)} out={gone(1)} text="Adaptarse o Morir" y={540} size={120} color="var(--accent)" />

      {/* 1.3 event */}
      <Eyebrow on={at(2)} out={gone(2)} text="Gracias, GDG Jaén" />
      <Say on={at(2)} out={gone(2)} text="DevFest Jaén 2026" y={330} size={150} />
      <Line on={at(2)} out={gone(2)} text="GDG Jaén · Online · 21 de noviembre" y={560} size={64} dim />

      {/* 1.4–1.5 who */}
      <Say on={span(3, 4)} out={gone(4)} text="Juanje Cilla" y={230} size={170} />
      <Line on={at(3)} out={gone(3)} text="Senior Software Engineer" y={500} size={72} />
      <Line on={at(3)} out={gone(3)} text="Más de 10 años en Android" y={620} size={72} dim />
      <Line on={at(4)} out={gone(4)} text="Profesor en KeepCoding" y={500} size={72} />
      <Line on={at(4)} out={gone(4)} text="Bootcamp Desarrollo Mobile" y={620} size={72} dim />

      {/* 1.6 community */}
      <Eyebrow on={at(5)} out={gone(5)} text="Comunidad" />
      <Bullets here={here} b={b} from={5} to={5} together y={280} size={96} gap={44}
        items={['GDG Aranjuez · Organizador', 'Coding Pit', 'Welcome to La Secta']} />

      {/* 1.7 Muviss */}
      <Eyebrow on={at(6)} out={gone(6)} text="La app de esta charla" />
      <Western on={at(6)} out={gone(6)} text="Muviss" y={260} size={230} />
      <Line on={at(6)} out={gone(6)} text="Android · iOS (iPhone e iPad) · escritorio · web" y={620} size={58} />
      <Line on={at(6)} out={gone(6)} text="Todo el código que veréis es suyo." y={730} size={58} dim />
      <Src on={at(6)} out={gone(6)} y={900} text="Datos y pósters de TMDB. Esta app usa la API de TMDB, pero TMDB no la respalda ni la certifica." />

      {/* 1.8 agenda */}
      <Eyebrow on={at(7)} text="Agenda" />
      <Bullets here={here} b={b} from={7} to={7} together y={240} size={84} gap={40}
        items={['1 · Problemática', '2 · Soluciones antiguas', '3 · Adaptive Layouts', '4 · Conclusiones']} />
    </>
  );
}
export const Open = () => <Scene index={0}><Open_ /></Scene>;
