import { strings as s } from '../i18n';
import { Eyebrow, Img, Lines, Mark, Redact, Sc, Title, defineBeats, useBeats } from '../ui';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const marfil = defineBeats([
  { name: 'ivory', ref: 'slide 41' },
  { name: 'list', ref: 'slide 42' },
  { name: 'tweet-1', ref: 'slide 43' },
  { name: 'tweet-2', ref: 'slide 44', note: 'Author name and handle covered.' },
  { name: 'tweet-3', ref: 'slide 45', note: 'Names, avatar and internal identifiers covered; the two passages are marked in red.' },
  { name: 'black-mirror', ref: 'slide 46' },
  { name: 'drugs', ref: 'slide 47' },
  { name: 'compare', ref: 'slide 48' },
  { name: 'exponential', ref: 'slide 49' },
  { name: 'cool', ref: 'slide 50' },
  { name: 'trick', ref: 'slide 51' },
  { name: 'reality', ref: 'slide 52' },
  { name: 'git-wars', ref: 'slide 53' },
] as const);

const I = marfil.i;

function Body() {
  const { at, between } = useBeats(I);
  const v = s.ivory;
  return (
    <>
      <Title on={at('ivory')} y={290} size={210}>{v.lines[0]}</Title>
      <Title on={at('ivory')} y={500} size={210} color="var(--accent)" delay={140}>{v.lines[1]}</Title>

      <Title on={at('list')} y={110} size={104} text={v.headText}>{v.head[0]}<span style={{ color: 'var(--accent)' }}>{v.head[1]}</span></Title>
      <Lines on={at('list')} y={340} size={64} width={940} gap={1.65} step={240} lines={v.list} />
      <Img on={at('list')} src="thrawn.webp" x={1130} y={240} w={640} h={572} delay={200} />

      <Eyebrow on={between('tweet-1', 'tweet-3')} y={96}>{v.headText}</Eyebrow>
      <Img on={at('tweet-1')} src="tweet-santana.webp" x={310} y={190} w={1300} h={756} />

      {/* the tweet of an individual: author name and handle covered (same framing as the Codemotion deck) */}
      <Img on={at('tweet-2')} src="tweet-edery.webp" x={490.7} y={224.2} w={938.6} h={770.5} crop={[0.10011, 0.10506, 0.09383, 0.10797]}>{null}</Img>
      <Redact on={at('tweet-2')} x={704} y={332} w={238} h={50} />
      <Redact on={at('tweet-2')} x={708} y={378} w={290} h={60} />

      {/* the chat thread: avatar, names and internal identifiers covered, the two passages marked */}
      <Img on={at('tweet-3')} src="comments.webp" x={262.8} y={352.7} w={1500.4} h={454.2} crop={[0, 0.33368, 0, 0.26439]}>{null}</Img>
      <Redact on={at('tweet-3')} x={666.1} y={540} w={445.3} h={26.7} />
      <Redact on={at('tweet-3')} x={432.7} y={488.3} w={445.3} h={26.7} />
      <Redact on={at('tweet-3')} x={338.4} y={495.1} w={82} h={80.1} />
      <Redact on={at('tweet-3')} x={1328.7} y={537.9} w={235.1} h={26.7} />
      <Mark on={at('tweet-3')} x={1332.2} y={352.7} w={301} h={55.1} />
      <Mark on={at('tweet-3')} x={420.4} y={732} w={602} h={66} />

      <Title on={at('black-mirror')} y={290} size={200}>{v.blackMirror[0]}</Title>
      <Title on={at('black-mirror')} y={500} size={200} color="var(--accent)" delay={140}>{v.blackMirror[1]}</Title>

      <Title on={at('drugs')} y={130} size={112} text={v.drugs}>{v.drugs}</Title>
      <Img on={at('drugs')} src="stars.webp" x={462} y={440} w={996} h={276} delay={200} />

      <Title on={at('compare')} y={100} size={96} text={v.compare}>{v.compare}</Title>
      <Img on={at('compare')} src="star-history.webp" x={515} y={280} w={890} h={700} />

      <Title on={at('exponential')} y={100} size={96}>{v.exponential}</Title>
      <Img on={at('exponential')} src="spike.webp" x={300} y={290} w={1320} h={693} />

      <Title on={at('cool')} y={100} size={96}>{v.cool}</Title>
      <Img on={at('cool')} src="activity.webp" x={150} y={380} w={1620} h={415} />

      <Title on={at('trick')} y={100} size={96}>{v.trick}</Title>
      <Img on={at('trick')} src="private.webp" x={460} y={290} w={1000} h={586} />

      <Title on={at('reality')} y={100} size={96}>{v.reality}</Title>
      <Img on={at('reality')} src="torvalds.webp" x={260} y={290} w={1400} h={735} />

      <Title on={at('git-wars')} y={100} size={96}>{v.gitWars}</Title>
      <Img on={at('git-wars')} src="gitwars.webp" x={150} y={290} w={1620} h={665} />
    </>
  );
}

export const Marfil = () => <Sc index={4}><Body /></Sc>;
