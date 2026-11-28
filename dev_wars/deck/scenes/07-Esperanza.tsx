import { strings as s } from '../i18n';
import { Caption, Img, Lines, Photo, Sc, Title, defineBeats, useBeats } from '../ui';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const esperanza = defineBeats([
  { name: 'hope', ref: 'slide 69' },
  { name: 'team', ref: 'slide 70' },
  { name: 'realism', ref: 'slide 71' },
  { name: 'padawan', ref: 'slide 72' },
  { name: 'conclusions', ref: 'slide 73' },
] as const);

const I = esperanza.i;

function Body() {
  const { at } = useBeats(I);
  const h = s.hope;
  return (
    <>
      <Title on={at('hope')} y={270} size={230}>{h.title[0]}</Title>
      <Title on={at('hope')} y={510} size={230} color="var(--accent)" delay={140}>{h.title[1]}</Title>

      <Photo on={at('team')} src="team.webp" shade="bottom" />
      <Caption on={at('team')} eyebrow={h.team.eyebrow} title={h.team.title} />

      <Title on={at('realism')} y={100} size={110}>{h.realismTitle}</Title>
      <Lines on={at('realism')} y={300} size={56} width={1060} gap={1.55} step={230} lines={[
        { t: h.realism[0], accent: true }, h.realism[1], h.realism[2], h.realism[3], h.realism[4], h.realism[5],
      ]} />
      <Img on={at('realism')} src="luke-pilot.webp" x={1290} y={300} w={480} h={410} delay={300} />

      <Title on={at('padawan')} y={100} size={110}>{h.padawanTitle}</Title>
      <Lines on={at('padawan')} y={320} size={62} width={1000} gap={1.65} step={230} lines={h.padawan} />
      <Img on={at('padawan')} src="younglings.webp" x={1130} y={300} w={640} h={462} delay={300} />

      <Title on={at('conclusions')} y={100} size={110}>{h.conclusionsTitle}</Title>
      <Lines on={at('conclusions')} y={310} size={68} width={1620} gap={1.6} step={260} lines={[
        h.conclusions[0], h.conclusions[1], h.conclusions[2], h.conclusions[3], { t: h.conclusions[4], accent: true },
      ]} />
    </>
  );
}

export const Esperanza = () => <Sc index={6}><Body /></Sc>;
