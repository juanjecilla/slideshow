import { ICONS, type IconName } from './icons';
import { useStandby } from './useStandby';
import './standby.css';

/**
 * 1.1: what loops while people sit down: one short picture per theme of the talk, in the talk's order. The title
 * stays and a loading bar fills. Frozen runs (capture, reduced motion, print) show the last picture, no animation.
 * Hidden from assistive tech with the rest of the stage; the live region says "Talk starting.".
 */

/** Cast colours: the tone backgrounds of themes/poster.css, with the ink checked there. */
const CAST_COLOURS = {
  dev: ['#5b2bd1', '#fff'], boss: ['#ffd23f', '#14120f'], agent: ['#1d4ed8', '#fff'], bill: ['#ef5b3c', '#14120f'], team: ['#095d51', '#fff'],
} as const;
type Role = keyof typeof CAST_COLOURS;
const ROLES = Object.keys(CAST_COLOURS) as Role[];

interface At { x: number; y: number; s?: number; anim?: string; delay?: number }

/** An element at x,y. The outer <g> places it; the inner one is free for CSS to animate. */
function Put({ x, y, s = 1, anim, delay = 0, color, children }: At & { color?: string; children: React.ReactNode }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={anim ? `sb-anim sb-${anim}` : undefined} style={{ animationDelay: `${delay}ms`, color }}>{children}</g>
    </g>
  );
}

const Icon = ({ name, color = 'var(--ink)', ...at }: At & { name: IconName; color?: string }) => (
  <Put {...at} color={color}>{ICONS[name]}</Put>
);

/** A character: its icon on a disc of its colour. */
function Cast({ role, ...at }: At & { role: Role }) {
  const [bg, ink] = CAST_COLOURS[role];
  return (
    <Put {...at} color={ink}>
      <circle r={130} fill={bg} stroke="var(--ink)" strokeWidth={8} />
      {ICONS[role]}
    </Put>
  );
}

const RED = '#d93a14';
const GOLD = '#e8a300';

/** One picture per theme, in the order the talk meets them: arrival → crisis → now what → together. */
const TABLEAUX: React.ReactNode[] = [
  // AI arrives: the Dev and the Agent
  <>
    <Cast role="dev" x={560} y={560} s={1.4} anim="from-left" />
    <Cast role="agent" x={1360} y={560} s={1.4} anim="from-right" />
    <Icon name="heart" x={960} y={530} s={1.4} anim="beat" color={RED} />
    {[[820, 330], [1110, 300], [960, 800]].map(([x, y], i) => <Icon key={i} name="spark" x={x} y={y} s={0.5} anim="twinkle" delay={i * 200} color={GOLD} />)}
  </>,
  // what you feel vs what is measured
  <>
    <Icon name="rocket" x={600} y={540} s={2.2} anim="from-left" color={GOLD} />
    <Icon name="question" x={960} y={560} s={1.1} anim="wobble" />
    <Icon name="stopwatch" x={1330} y={560} s={2.2} anim="from-right" />
  </>,
  // trust: almost right
  <>
    <Cast role="agent" x={960} y={560} s={1.6} anim="pop" />
    <Icon name="check" x={520} y={540} s={1.7} anim="pop" delay={250} color="#0b8a55" />
    <Icon name="cross" x={1400} y={540} s={1.7} anim="pop" delay={500} color={RED} />
  </>,
  // layoffs
  <>
    <Cast role="team" x={480} y={550} s={1.5} anim="shrink" />
    {[0, 1].map((i) => <Icon key={i} name="box" x={880} y={620} s={1.3} anim="leave" delay={i * 900} />)}
    <Icon name="chart" x={1500} y={420} s={1.5} anim="pop" color={RED} />
  </>,
  // the bill: tokens burn
  <>
    <Cast role="boss" x={430} y={660} s={1.1} anim="shake" />
    <Cast role="bill" x={960} y={540} s={1.7} anim="drop" />
    <Cast role="agent" x={1490} y={660} s={1.1} anim="pop" />
    {[200, 650, 1250, 1720].map((x, i) => <Icon key={x} name={i % 2 ? 'flame' : 'coin'} x={x} y={320} s={0.7} anim="fall" delay={i * 200} color={i % 2 ? RED : GOLD} />)}
  </>,
  // a new model every few weeks, and the benchmarks
  <>
    {[430, 700, 970].map((x, i) => <Cast key={x} role="agent" x={x} y={560} s={0.9} anim="pop" delay={i * 350} />)}
    <Icon name="bars" x={1420} y={550} s={2} anim="from-right" color={GOLD} />
  </>,
  // many tools
  <>
    <Icon name="terminal" x={520} y={560} s={1.8} anim="pop" />
    <Icon name="wrench" x={960} y={560} s={1.8} anim="wobble" color={RED} />
    <g transform="translate(1400 560) scale(1.8)"><g className="sb-anim sb-turn" style={{ color: 'var(--ink)' }}>{ICONS.gear}</g></g>
  </>,
  // everyone sharing, nobody there; AI slop
  <>
    <Icon name="megaphone" x={460} y={560} s={1.9} anim="shake" />
    <Icon name="ghost" x={940} y={560} s={1.7} anim="float" />
    {[1280, 1430, 1580].map((x, i) => <Icon key={x} name="doc" x={x} y={640 - i * 70} s={1.2} anim="drop" delay={i * 250} />)}
  </>,
  // layers to learn: context, harness, memory
  <>
    <Icon name="layers" x={960} y={560} s={3.4} anim="drop" />
    {[[470, 420], [1460, 480], [520, 760]].map(([x, y], i) => <Icon key={i} name="question" x={x} y={y} s={0.9} anim="wobble" delay={i * 200} color={RED} />)}
  </>,
  // the junior door
  <>
    <Cast role="dev" x={520} y={620} s={1.1} anim="from-left" />
    <Icon name="door" x={960} y={560} s={2.5} anim="pop" />
    <Icon name="ladder" x={1430} y={550} s={2.2} anim="pop" delay={250} color={RED} />
  </>,
  // me: limits, and the train of FOMO
  <>
    <Icon name="bell" x={560} y={550} s={2} anim="shake" />
    <Icon name="train" x={1260} y={560} s={2.2} anim="from-right" color={RED} />
  </>,
  // team and career: review, judgement
  <>
    <Cast role="team" x={500} y={560} s={1.4} anim="pop" />
    <Icon name="magnifier" x={960} y={550} s={2} anim="float" />
    <Icon name="compass" x={1420} y={560} s={1.9} anim="pop" delay={250} />
  </>,
  // upwards: ask what it is measured for
  <>
    <Cast role="dev" x={520} y={600} s={1.3} anim="pop" />
    <Icon name="question" x={960} y={520} s={2} anim="wobble" color={RED} />
    <Cast role="boss" x={1400} y={600} s={1.3} anim="pop" delay={250} />
  </>,
  // together: everyone around the heart
  <>
    <Icon name="heart" x={960} y={590} s={2.2} anim="beat" color={RED} />
    <Icon name="code" x={960} y={570} s={1.1} anim="beat" color="#fff" />
    {ROLES.map((role, i) => {
      const a = (-90 + i * 72) * (Math.PI / 180);
      return <Cast key={role} role={role} x={960 + Math.cos(a) * 520} y={610 + Math.sin(a) * 260} s={0.85} anim="pop" delay={i * 100} />;
    })}
  </>,
];

/** The title stays and a bar fills under the pictures: the talk is "loading". */
export function Standby({ on }: { on: boolean }) {
  const st = useStandby(on);
  if (!on) return null;
  const i = Math.min(TABLEAUX.length - 1, Math.floor(st.progress * TABLEAUX.length));
  return (
    <div className={`sb${st.frozen ? ' frozen' : ''}`}>
      <div className="sb-title t-statement">(progr)Amar <span style={{ color: 'var(--accent)' }}>en tiempos revueltos</span></div>
      <svg className="sb-art" viewBox="0 0 1920 1080" width={1920} height={1080} aria-hidden="true">
        <g key={i}>{TABLEAUX[i]}</g>
      </svg>
      <div className="sb-load"><i style={{ width: `${(st.progress * 100).toFixed(2)}%` }} /></div>
    </div>
  );
}
