import { Eyebrow, Img, Lines, Sc, Title, defineBeats, useBeats } from '../ui';

export const marfil = defineBeats([
  { name: 'marfil', ref: 'slide 41' },
  { name: 'lista', ref: 'slide 42' },
  { name: 'tweet-1', ref: 'slide 43' },
  { name: 'tweet-2', ref: 'slide 44' },
  { name: 'tweet-3', ref: 'slide 45' },
  { name: 'black-mirror', ref: 'slide 46' },
  { name: 'drogas', ref: 'slide 47' },
  { name: 'comparar', ref: 'slide 48' },
  { name: 'exponencial', ref: 'slide 49' },
  { name: 'molo', ref: 'slide 50' },
  { name: 'truqui', ref: 'slide 51' },
  { name: 'realidad', ref: 'slide 52' },
  { name: 'git-wars', ref: 'slide 53' },
] as const);

const I = marfil.i;

function Body() {
  const { at, between } = useBeats(I);
  return (
    <>
      <Title on={at('marfil')} y={290} size={210}>El arquitecto</Title>
      <Title on={at('marfil')} y={500} size={210} color="var(--accent)" delay={140}>de marfil</Title>

      <Title on={at('lista')} y={110} size={104} text="El arquitecto de marfil">El arquitecto de <span style={{ color: 'var(--accent)' }}>marfil</span></Title>
      <Lines on={at('lista')} y={340} size={64} width={940} gap={1.65} step={240} lines={[
        'Diseña sin tener en cuenta el equipo',
        'Sólo excelencia técnica',
        'Portfolio demostrable',
        'Decisiones top-to-bottom',
      ]} />
      <Img on={at('lista')} src="thrawn.webp" x={1130} y={240} w={640} h={572} delay={200} />

      <Eyebrow on={between('tweet-1', 'tweet-3')} y={96}>El arquitecto de marfil</Eyebrow>
      <Img on={at('tweet-1')} src="tweet-santana.webp" x={310} y={190} w={1300} h={756} />
      <Img on={at('tweet-2')} src="tweet-edery.webp" x={497} y={190} w={926} h={760} />
      <Img on={at('tweet-3')} src="comments.webp" x={150} y={290} w={1620} h={490} />

      <Title on={at('black-mirror')} y={290} size={200}>Validación</Title>
      <Title on={at('black-mirror')} y={500} size={200} color="var(--accent)" delay={140}>Black Mirror style</Title>

      <Title on={at('drogas')} y={130} size={112} text="Nuevas drogas de diseño">Nuevas drogas de diseño</Title>
      <Img on={at('drogas')} src="stars.webp" x={462} y={440} w={996} h={276} delay={200} />

      <Title on={at('comparar')} y={100} size={96} text="Y por supuesto compararnos">Y por supuesto compararnos</Title>
      <Img on={at('comparar')} src="star-history.webp" x={515} y={280} w={890} h={700} />

      <Title on={at('exponencial')} y={100} size={96}>Are you going exponential?</Title>
      <Img on={at('exponencial')} src="spike.webp" x={300} y={290} w={1320} h={693} />

      <Title on={at('molo')} y={100} size={96}>Mira cómo molo</Title>
      <Img on={at('molo')} src="activity.webp" x={150} y={380} w={1620} h={415} />

      <Title on={at('truqui')} y={100} size={96}>El truqui</Title>
      <Img on={at('truqui')} src="private.webp" x={460} y={290} w={1000} h={586} />

      <Title on={at('realidad')} y={100} size={96}>La realidad</Title>
      <Img on={at('realidad')} src="torvalds.webp" x={260} y={290} w={1400} h={735} />

      <Title on={at('git-wars')} y={100} size={96}>Git wars</Title>
      <Img on={at('git-wars')} src="gitwars.webp" x={150} y={290} w={1620} h={665} />
    </>
  );
}

export const Marfil = () => <Sc index={4}><Body /></Sc>;
