import { Caption, Eyebrow, Img, Lines, Paper, Photo, Sc, Title, defineBeats, useBeats } from '../ui';

export const oscuro = defineBeats([
  { name: 'oscuro', ref: 'slide 54' },
  { name: 'ladder', ref: 'slide 55' },
  { name: 'tl', ref: 'slide 56' },
  { name: 'necesidad', ref: 'slide 57' },
  { name: 'guru', ref: 'slide 58' },
  { name: 'volante', ref: 'slide 59' },
  { name: 'toxica', ref: 'slide 60' },
  { name: 'cultura', ref: 'slide 61' },
  { name: 'finde', ref: 'slide 62' },
  { name: 'finde-1', ref: 'slide 63' },
  { name: 'finde-2', ref: 'slide 64' },
  { name: 'finde-3', ref: 'slide 65' },
  { name: 'finde-4', ref: 'slide 66' },
  { name: 'finde-5', ref: 'slide 67' },
  { name: 'resultado', ref: 'slide 68' },
] as const);

const I = oscuro.i;

function Body() {
  const { at, between } = useBeats(I);
  return (
    <>
      <Title on={at('oscuro')} y={280} size={200}>El Lado Oscuro</Title>
      <Title on={at('oscuro')} y={490} size={200} color="var(--accent)" delay={140}>del Liderazgo</Title>

      {/* career ladder: the real diagram, on paper */}
      <Paper on={at('ladder')} />
      <Title on={at('ladder')} tone="paper" y={90} size={84}>Plan de carrera <span style={{ color: 'var(--paper-ink-2)', fontWeight: 500 }}>(Career ladder)</span></Title>
      <Img on={at('ladder')} src="ladder.webp" x={210} y={250} w={1500} h={651} />

      <Photo on={at('tl')} src="vader.webp" shade="bottom" />
      <Caption on={at('tl')} eyebrow="Lead Software Engineer a.k.a" title="“El TL”" />

      <Title on={at('necesidad')} y={110} size={100} text="La necesidad por demostrar">La necesidad por demostrar</Title>
      <Lines on={at('necesidad')} y={340} size={62} width={980} gap={1.65} step={240} lines={[
        'El career plan exige resultados',
        'No todos pueden ascender',
        { t: 'Cultura tóxica', accent: true },
        'Métricas everywhere',
      ]} />
      <Img on={at('necesidad')} src="bigbird.webp" x={1190} y={300} w={580} h={580} delay={300} />

      <Photo on={at('guru')} src="palpatine.webp" shade="bottom" />
      <Caption on={at('guru')} eyebrow="CTO a.k.a" title="“El gurú”" />

      <Title on={at('volante')} y={100} size={96} text="Un plan sin nadie al volante">Un plan sin nadie al volante</Title>
      <Lines on={at('volante')} y={340} size={62} width={1000} gap={1.65} step={240} lines={[
        'El gurú tiene una idea',
        'Decisiones unilaterales',
        'Tecnología desconocida',
        { t: 'Cambios de alto riesgo', accent: true },
      ]} />
      <Img on={at('volante')} src="palpatine-red.webp" x={1230} y={250} w={500} h={600} delay={300} />

      <Photo on={at('toxica')} src="deathstar.webp" shade="bottom" />
      <Eyebrow on={at('toxica')} y={690} color="var(--ink-2)">CTO a.k.a “El gurú”</Eyebrow>
      <Caption on={at('toxica')} eyebrow="La empresa a.k.a" title="“la tóxica”" y={800} size={130} />

      <Title on={at('cultura')} y={110} size={100} text="Cultura de la competición">Cultura de la competición</Title>
      <Lines on={at('cultura')} y={340} size={62} width={980} gap={1.65} step={240} lines={[
        'Fomentar la productividad',
        'Presión permanente',
        'Sobrecarga de trabajo',
        'Cambios constantes',
      ]} />
      <Img on={at('cultura')} src="jedi-fight.webp" x={1100} y={360} w={670} h={497} delay={300} />

      <Title on={at('finde')} y={270} size={230}>El finde</Title>
      <Title on={at('finde')} y={510} size={230} color="var(--accent)" delay={140}>fantasma</Title>

      <Photo on={at('finde-1')} src="duel-calm.webp" shade="top" />
      <Photo on={at('finde-2')} src="duel.webp" shade="top" />
      <Photo on={at('finde-3')} src="duel-lightsabers.webp" shade="top" />
      <Photo on={at('finde-4')} src="leia.webp" shade="top" />
      <Photo on={at('finde-5')} src="luke-scream.webp" shade="top" />
      <Eyebrow on={between('finde-1', 'finde-5')} y={90} color="var(--accent)">El finde fantasma</Eyebrow>

      <Title on={at('resultado')} y={110} size={120}>El resultado</Title>
      <Lines on={at('resultado')} y={340} size={62} width={1030} gap={1.65} step={240} lines={[
        'El desarrollador quedó invisibilizado',
        'Méritos para la persona que no tocaba',
        'La empresa salió ganando',
        { t: 'La cultura se vio debilitada', accent: true },
      ]} />
      <Img on={at('resultado')} src="palpatine-vader.webp" x={1290} y={200} w={450} h={602} delay={300} />
    </>
  );
}

export const Oscuro = () => <Sc index={5}><Body /></Sc>;
