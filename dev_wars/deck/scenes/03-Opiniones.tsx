import { strings as s } from '../i18n';
import { Caption, Img, Lines, Paper, Photo, Sc, Title, Versus, defineBeats, useBeats } from '../ui';

/** `ref` = slide number in the Google Slides deck given at Codemotion Madrid 2026. */
export const opiniones = defineBeats([
  { name: 'title', ref: 'slide 17' },
  { name: 'ios-android', ref: 'slide 18' },
  { name: 'mac-microsoft', ref: 'slide 19' },
  { name: 'mac-linux', ref: 'slide 20' },
  { name: 'angular-react', ref: 'slide 21' },
  { name: 'three', ref: 'slide 22' },
  { name: 'five', ref: 'slide 23' },
  { name: 'clones', ref: 'slide 24' },
  { name: 'wall', auto: true, ref: 'slide 25', note: s.opinions.wallNote },
  { name: 'ecosystem', ref: 'slide 26' },
  { name: 'list', ref: 'slide 27' },
  { name: 'yeah-but', ref: 'slide 28' },
  { name: 'madrid-barca', ref: 'slide 29' },
  { name: 'cervantes-nadal', ref: 'slide 30' },
  { name: 'the-best', ref: 'slide 31' },
] as const);

const I = opiniones.i;

/** Frameworks in the order the original reveals them on its last build slide. */
const WALL = ['angular', 'react', 'vue', 'svelte', 'solid', 'next', 'nuxt', 'astro', 'deno', 'bun', 'node', 'remix', 'jquery', 'marko', 'ember', 'backbone', 'qwik'];

/** N things in a row with a VS between each pair, centred on the stage. */
function VersusRow({ on, logos, y = 300, boxH = 420 }: { on: boolean; logos: string[]; y?: number; boxH?: number }) {
  const n = logos.length;
  const vs = 150;
  const slot = (1620 - (n - 1) * vs) / n;
  return (
    <>
      {logos.map((l, k) => (
        <Img key={l} on={on} src={`${l}.webp`} x={150 + k * (slot + vs)} y={y} w={slot} h={boxH} delay={k * 90} />
      ))}
      {logos.slice(1).map((l, k) => (
        <Img key={`vs-${l}`} on={on} src="vs.webp" x={150 + (k + 1) * slot + k * vs + (vs - 130) / 2} y={y + boxH / 2 - 56} w={130} h={112} delay={k * 90 + 60} />
      ))}
    </>
  );
}

function Body() {
  const { at, between } = useBeats(I);
  const paper = between('title', 'five') || at('wall');
  return (
    <>
      <Paper on={paper} />

      {/* title on paper */}
      <Img on={at('title')} src="party.webp" x={150} y={110} w={540} h={284} />
      <Title on={at('title')} tone="paper" center y={440} size={190}>{s.opinions.title[0]}</Title>
      <Title on={at('title')} tone="paper" center y={640} size={190} delay={140}><span className="dw-mark">{s.opinions.title[1]}</span></Title>

      {/* versus beats */}
      <Title on={between('ios-android', 'five') || at('wall')} tone="paper" y={90} size={64}>{s.opinions.head}</Title>
      <Versus on={at('ios-android')} left="ios.webp" right="android.webp" y={260} boxH={520} />
      <Versus on={at('mac-microsoft')} left="macos.webp" right="microsoft.webp" y={260} boxH={520} />
      <Versus on={at('mac-linux')} left="macos.webp" right="linux.webp" y={260} boxH={520} />
      <Versus on={at('angular-react')} left="angular.webp" right="react.webp" y={260} boxH={520} />
      <VersusRow on={at('three')} logos={['angular', 'react', 'vue']} />
      <VersusRow on={at('five')} logos={['angular', 'react', 'vue', 'svelte', 'solid']} boxH={300} y={360} />

      {/* the clones */}
      <Photo on={at('clones')} src="clones.webp" shade="bottom" />
      <Caption on={at('clones')} title={s.opinions.clones} y={800} size={120} />

      {/* wall */}
      {WALL.map((n, k) => (
        <Img key={n} on={at('wall')} src={`${n}.webp`} x={150 + (k % 6) * 270} y={250 + Math.floor(k / 6) * 240} w={250} h={200} delay={k * 70} />
      ))}

      <Photo on={at('ecosystem')} src="ecosystem.webp" />

      <Title on={at('list')} y={110} size={150}>{s.opinions.listTitle}</Title>
      <Lines on={at('list')} y={380} size={76} gap={1.7} step={240} lines={[
        { t: s.opinions.list[0], accent: true },
        s.opinions.list[1],
        s.opinions.list[2],
        s.opinions.list[3],
      ]} />

      {/* yeah, but */}
      <Title on={at('yeah-but')} y={110} size={120}>{s.opinions.yeahBut}</Title>
      <Lines on={at('yeah-but')} y={380} size={74} gap={1.7} step={240} lines={[
        s.opinions.yeahButLines[0],
        s.opinions.yeahButLines[1],
        { t: s.opinions.yeahButLines[2], dim: true },
      ]} />
      <Img on={at('yeah-but')} src="charlie.webp" x={1090} y={330} w={680} h={478} delay={300} />

      <Title on={between('madrid-barca', 'cervantes-nadal')} y={90} size={72} color="var(--ink-2)">{s.opinions.makesSense}</Title>
      <Versus on={at('madrid-barca')} left="madrid.webp" right="barca.webp" y={230} boxH={620} boxW={520} />
      <Versus on={at('cervantes-nadal')} left="cervantes.webp" right="nadal.webp" y={230} boxH={620} boxW={520} />

      <Photo on={at('the-best')} src="mejor.webp" />
      <Title on={at('the-best')} y={90} size={72} color="var(--ink)">{s.opinions.makesSense}</Title>
    </>
  );
}

export const Opiniones = () => <Sc index={2}><Body /></Sc>;
