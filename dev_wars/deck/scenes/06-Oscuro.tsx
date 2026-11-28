import { strings as s } from '../i18n';
import { Caption, Eyebrow, Img, Lines, Paper, Photo, Sc, Title, defineBeats, useBeats } from '../ui';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const oscuro = defineBeats([
  { name: 'dark', ref: 'slide 54' },
  { name: 'ladder', ref: 'slide 55' },
  { name: 'tl', ref: 'slide 56' },
  { name: 'prove', ref: 'slide 57' },
  { name: 'guru', ref: 'slide 58' },
  { name: 'wheel', ref: 'slide 59' },
  { name: 'toxic', ref: 'slide 60' },
  { name: 'competition', ref: 'slide 61' },
  { name: 'weekend', ref: 'slide 62' },
  { name: 'weekend-1', ref: 'slide 63' },
  { name: 'weekend-2', ref: 'slide 64' },
  { name: 'weekend-3', ref: 'slide 65' },
  { name: 'weekend-4', ref: 'slide 66' },
  { name: 'weekend-5', ref: 'slide 67' },
  { name: 'result', ref: 'slide 68' },
] as const);

const I = oscuro.i;

function Body() {
  const { at, between } = useBeats(I);
  const d = s.dark;
  return (
    <>
      <Title on={at('dark')} y={280} size={200}>{d.title[0]}</Title>
      <Title on={at('dark')} y={490} size={200} color="var(--accent)" delay={140}>{d.title[1]}</Title>

      {/* career ladder: the real diagram, on paper */}
      <Paper on={at('ladder')} />
      <Title on={at('ladder')} tone="paper" y={90} size={84}>{d.ladder} <span style={{ color: 'var(--paper-ink-2)', fontWeight: 500 }}>{d.ladderAlt}</span></Title>
      <Img on={at('ladder')} src="ladder.webp" x={210} y={250} w={1500} h={651} />

      <Photo on={at('tl')} src="vader.webp" shade="bottom" />
      <Caption on={at('tl')} eyebrow={d.tl.eyebrow} title={d.tl.title} />

      <Title on={at('prove')} y={110} size={100} text={d.proveTitle}>{d.proveTitle}</Title>
      <Lines on={at('prove')} y={340} size={62} width={980} gap={1.65} step={240} lines={[
        d.prove[0], d.prove[1], { t: d.prove[2], accent: true }, d.prove[3],
      ]} />
      <Img on={at('prove')} src="bigbird.webp" x={1190} y={300} w={580} h={580} delay={300} />

      <Photo on={at('guru')} src="palpatine.webp" shade="bottom" />
      <Caption on={at('guru')} eyebrow={d.guru.eyebrow} title={d.guru.title} />

      <Title on={at('wheel')} y={100} size={96} text={d.wheelTitle}>{d.wheelTitle}</Title>
      <Lines on={at('wheel')} y={340} size={62} width={1000} gap={1.65} step={240} lines={[
        d.wheel[0], d.wheel[1], d.wheel[2], { t: d.wheel[3], accent: true },
      ]} />
      <Img on={at('wheel')} src="palpatine-red.webp" x={1230} y={250} w={500} h={600} delay={300} />

      {/* the company: the CTO label is gone, we already met him */}
      <Photo on={at('toxic')} src="deathstar.webp" shade="bottom" />
      <Caption on={at('toxic')} eyebrow={d.toxic.eyebrow} title={d.toxic.title} />

      <Title on={at('competition')} y={110} size={100} text={d.competitionTitle}>{d.competitionTitle}</Title>
      <Lines on={at('competition')} y={340} size={62} width={980} gap={1.65} step={240} lines={d.competition} />
      <Img on={at('competition')} src="jedi-fight.webp" x={1100} y={360} w={670} h={497} delay={300} />

      <Title on={at('weekend')} y={270} size={230}>{d.weekend[0]}</Title>
      <Title on={at('weekend')} y={510} size={230} color="var(--accent)" delay={140}>{d.weekend[1]}</Title>

      <Photo on={at('weekend-1')} src="duel-calm.webp" shade="top" />
      <Photo on={at('weekend-2')} src="duel.webp" shade="top" />
      <Photo on={at('weekend-3')} src="duel-lightsabers.webp" shade="top" />
      <Photo on={at('weekend-4')} src="leia.webp" shade="top" />
      <Photo on={at('weekend-5')} src="luke-scream.webp" shade="top" />
      <Eyebrow on={between('weekend-1', 'weekend-5')} y={90} color="var(--accent)">{d.weekendText}</Eyebrow>

      <Title on={at('result')} y={110} size={120}>{d.resultTitle}</Title>
      <Lines on={at('result')} y={340} size={62} width={1030} gap={1.65} step={240} lines={[
        d.result[0], d.result[1], d.result[2], { t: d.result[3], accent: true },
      ]} />
      <Img on={at('result')} src="palpatine-vader.webp" x={1290} y={200} w={450} h={602} delay={300} />
    </>
  );
}

export const Oscuro = () => <Sc index={5}><Body /></Sc>;
