import { config } from '../deck.config';
import { strings as s } from '../i18n';
import { Clip, Img, Lines, Sc, Title, defineBeats, useBeats } from '../ui';

export const ego = defineBeats([
  { name: 'conflict', ref: 'slide 9' },
  { name: 'ego', ref: 'slide 10' },
  { name: 'dictionary', ref: 'slide 11' },
  { name: 'definition', ref: 'slide 12' },
  { name: 'not-bad', ref: 'slide 13' },
  { name: 'sport-good', ref: 'slide 14', note: `${s.ego.clips} ${config.clipSources.youtubeTrail} / ${config.clipSources.driveTrail}` },
  { name: 'sport-bad', ref: 'slide 15', note: `${s.ego.clips} ${config.clipSources.driveMarathon} / ${config.clipSources.driveSpeedProject}` },
  { name: 'tech', ref: 'slide 16' },
] as const);

const I = ego.i;

function Body() {
  const { at } = useBeats(I);
  return (
    <>
      <Title on={at('conflict')} center y={400} size={160}>{s.ego.conflict[0]}<span style={{ color: 'var(--accent)' }}>{s.ego.conflict[1]}</span></Title>

      {/* The Ego */}
      <Title on={at('ego')} y={110} size={150}>{s.ego.the}</Title>
      <Img on={at('ego')} src="planet.webp" x={150} y={400} w={562} h={470} delay={80} />
      <Img on={at('ego')} src="mask.webp" x={742} y={400} w={673} h={470} delay={160} />
      <Img on={at('ego')} src="ego-guardians.webp" x={1445} y={400} w={318} h={470} delay={240} fit="cover" />

      <Title on={at('dictionary')} y={110} size={150}>{s.ego.the}</Title>
      <Img on={at('dictionary')} src="rae-ego.webp" x={150} y={400} w={1620} h={314} />
      <Title on={at('definition')} y={110} size={150}>{s.ego.the}</Title>
      <Img on={at('definition')} src="rae-def.webp" x={150} y={400} w={1620} h={312} />

      <Title on={at('not-bad')} y={110} size={150}>{s.ego.the}</Title>
      <Lines on={at('not-bad')} y={400} size={78} gap={1.7} step={260} lines={[
        { t: s.ego.notBad[0], accent: true },
        s.ego.notBad[1],
        s.ego.notBad[2],
      ]} />

      {/* sport: both clips in the same size */}
      <Title on={at('sport-good')} y={110} size={76} color="var(--ink-2)">{s.ego.sports}</Title>
      <Title on={at('sport-good')} y={290} size={210} color="var(--accent)" delay={120}>{s.ego.good}</Title>
      <Clip on={at('sport-good')} name="trail-leire" x={760} y={250} w={394} h={700} />
      <Clip on={at('sport-good')} name="trail-leire-yt" x={1190} y={250} w={394} h={700} fit="cover" />

      <Title on={at('sport-bad')} y={110} size={76} color="var(--ink-2)">{s.ego.sports}</Title>
      <Title on={at('sport-bad')} y={290} size={210} color="var(--fault)" delay={120}>{s.ego.bad}</Title>
      <Clip on={at('sport-bad')} name="maraton-barcelona" x={760} y={250} w={394} h={700} />
      <Clip on={at('sport-bad')} name="speed-project-finisher" x={1190} y={250} w={394} h={700} />

      <Title on={at('tech')} y={110} size={120}>{s.ego.techTitle[0]}<span style={{ color: 'var(--accent)' }}>{s.ego.techTitle[1]}</span></Title>
      <Lines on={at('tech')} y={380} size={72} gap={1.7} step={260} lines={s.ego.tech} />
    </>
  );
}

export const Ego = () => <Sc index={1}><Body /></Sc>;
