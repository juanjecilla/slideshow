import { Caption, Img, Lines, Photo, Sc, Title, defineBeats, useBeats } from '../ui';

export const esperanza = defineBeats([
  { name: 'esperanza', ref: 'slide 69' },
  { name: 'equipo', ref: 'slide 70' },
  { name: 'realismo', ref: 'slide 71' },
  { name: 'padawan', ref: 'slide 72' },
  { name: 'conclusiones', ref: 'slide 73' },
] as const);

const I = esperanza.i;

function Body() {
  const { at } = useBeats(I);
  return (
    <>
      <Title on={at('esperanza')} y={270} size={230}>Una nueva</Title>
      <Title on={at('esperanza')} y={510} size={230} color="var(--accent)" delay={140}>esperanza</Title>

      <Photo on={at('equipo')} src="team.webp" shade="bottom" />
      <Caption on={at('equipo')} eyebrow="El equipo a.k.a" title="“tus compis”" />

      <Title on={at('realismo')} y={100} size={110}>Realismo técnico</Title>
      <Lines on={at('realismo')} y={300} size={56} width={1060} gap={1.55} step={230} lines={[
        { t: 'Elige tus batallas', accent: true },
        'No luches por el lenguaje que más te gusta',
        'Elige el que mejor resuelve la problemática',
        'Entiende los diferentes puntos de vista',
        'Analiza el contexto y las necesidades',
        'Piensa siempre en tu equipo',
      ]} />
      <Img on={at('realismo')} src="luke-pilot.webp" x={1290} y={300} w={480} h={410} delay={300} />

      <Title on={at('padawan')} y={100} size={110}>El camino del padawan</Title>
      <Lines on={at('padawan')} y={320} size={62} width={1000} gap={1.65} step={230} lines={[
        'Ayuda a los que lo necesiten',
        'Defiende a tu equipo',
        'Impulsa su talento',
        'Hazles visibles',
        'Tenlos en cuenta',
      ]} />
      <Img on={at('padawan')} src="younglings.webp" x={1130} y={300} w={640} h={462} delay={300} />

      <Title on={at('conclusiones')} y={100} size={110}>Conclusiones</Title>
      <Lines on={at('conclusiones')} y={310} size={68} width={1620} gap={1.6} step={260} lines={[
        'Por lo general, no vas a heredar la empresa',
        'El equipo es lo más importante',
        'Las luchas internas suelen beneficiar a la empresa',
        'Mantén la mente abierta y elige bien tus batallas',
        { t: 'Simplemente, sé buena gente', accent: true },
      ]} />
    </>
  );
}

export const Esperanza = () => <Sc index={6}><Body /></Sc>;
