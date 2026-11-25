import { ICONS, type IconName } from './icons';
import { useStandby } from './useStandby';
import './standby.css';

/**
 * 1.1: what loops while people sit down. Pictures only, no words. Two prototypes (D21), picked with
 * ?standby=a|b; delete the loser.
 *   a · "The soap opera": the cast acts the story in six tableaux (arrival, romance, bill, layoffs, fears, together).
 *   b · "Turbulent times": a beating heart in the middle of a whirl of everything that is going round.
 * Frozen runs (capture, reduced motion, print) show the last tableau with every animation off.
 * Hidden from assistive tech with the rest of the stage; the live region says "Talk starting.".
 */

const VARIANT: 'a' | 'b' = new URLSearchParams(location.search).get('standby') === 'b' ? 'b' : 'a';

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

const TABLEAUX: React.ReactNode[] = [
  // arrival: the Dev, happily coding
  <>
    <Cast role="dev" x={960} y={580} s={1.7} anim="pop" />
    {[[520, 700], [1390, 640], [620, 330], [1300, 320]].map(([x, y], i) => (
      <Icon key={i} name={i % 2 ? 'spark' : 'code'} x={x} y={y} s={i % 2 ? 0.6 : 0.8} anim="rise" delay={i * 600} color={i % 2 ? GOLD : 'var(--ink)'} />
    ))}
  </>,
  // romance: the Agent walks in
  <>
    <Cast role="dev" x={560} y={580} s={1.4} anim="from-left" />
    <Cast role="agent" x={1360} y={580} s={1.4} anim="from-right" />
    <Icon name="heart" x={960} y={540} s={1.4} anim="beat" color={RED} />
    {[[820, 300], [1110, 260], [960, 820]].map(([x, y], i) => <Icon key={i} name="spark" x={x} y={y} s={0.5} anim="twinkle" delay={i * 400} color={GOLD} />)}
  </>,
  // the bill drops in, tokens burn
  <>
    <Cast role="boss" x={430} y={690} s={1.1} anim="shake" />
    <Cast role="bill" x={960} y={500} s={1.9} anim="drop" />
    <Cast role="agent" x={1490} y={690} s={1.1} anim="pop" />
    {[200, 650, 1250, 1720, 760, 1160].map((x, i) => <Icon key={x} name={i % 2 ? 'flame' : 'coin'} x={x} y={200} s={0.7} anim="fall" delay={i * 450} color={i % 2 ? RED : GOLD} />)}
  </>,
  // layoffs: the boxes leave
  <>
    <Cast role="team" x={500} y={560} s={1.6} anim="shrink" />
    {[0, 1, 2].map((i) => <Icon key={i} name="box" x={900} y={640} s={1.3} anim="leave" delay={i * 1100} />)}
    <Icon name="chart" x={1480} y={330} s={1.5} anim="pop" color={RED} />
  </>,
  // fears: the storm
  <>
    <Icon name="cloud" x={960} y={280} s={3} anim="float" />
    <Icon name="bolt" x={760} y={470} s={1.2} anim="flash" color={GOLD} />
    <Icon name="bolt" x={1180} y={470} s={1} anim="flash" delay={700} color={GOLD} />
    <Cast role="dev" x={960} y={730} s={1.3} anim="shake" />
    {[[450, 620], [1500, 560], [620, 860], [1330, 840]].map(([x, y], i) => <Icon key={i} name="question" x={x} y={y} s={0.9} anim="wobble" delay={i * 350} color={RED} />)}
  </>,
  // together: everyone around the heart
  <>
    <Icon name="heart" x={960} y={560} s={2.6} anim="beat" color={RED} />
    <Icon name="code" x={960} y={535} s={1.3} anim="beat" color="#fff" />
    {ROLES.map((role, i) => {
      const a = (-90 + i * 72) * (Math.PI / 180);
      return <Cast key={role} role={role} x={960 + Math.cos(a) * 600} y={560 + Math.sin(a) * 370} s={0.95} anim="pop" delay={i * 180} />;
    })}
  </>,
];

const RINGS: { r: number; s: number; spin: string; items: { name: IconName | Role; color?: string }[] }[] = [
  { r: 330, s: 0.8, spin: 'spin', items: [{ name: 'dev' }, { name: 'agent' }, { name: 'bill' }, { name: 'boss' }, { name: 'team' }] },
  {
    r: 480, s: 0.6, spin: 'counter',
    items: [
      { name: 'box' }, { name: 'question', color: RED }, { name: 'coin', color: GOLD }, { name: 'chart', color: RED }, { name: 'flame', color: RED },
      { name: 'bolt', color: GOLD }, { name: 'cloud' }, { name: 'spark', color: GOLD }, { name: 'code' }, { name: 'question', color: RED },
    ],
  },
];

/** Two rings turning against each other; every item turns back so it stays upright. */
function Whirl() {
  return (
    <g transform="translate(960 540)">
      {RINGS.map((ring) => (
        <g key={ring.r} className={`sb-anim sb-orbit sb-${ring.spin}`}>
          {ring.items.map((it, i) => {
            const a = (i / ring.items.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(a) * ring.r, y = Math.sin(a) * ring.r; // circles: the ring turns, an ellipse would leave the stage
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                <g className={`sb-anim sb-upright sb-${ring.spin}-back`}>
                  {it.name in CAST_COLOURS
                    ? <Cast role={it.name as Role} x={0} y={0} s={ring.s} />
                    : <Icon name={it.name as IconName} x={0} y={0} s={ring.s} color={it.color} />}
                </g>
              </g>
            );
          })}
        </g>
      ))}
      <Icon name="heart" x={0} y={0} s={2.1} anim="beat" color={RED} />
      <Icon name="code" x={0} y={-20} s={1.05} anim="beat" color="#fff" />
    </g>
  );
}

export function Standby({ on }: { on: boolean }) {
  const st = useStandby(on);
  if (!on) return null;
  const i = Math.min(TABLEAUX.length - 1, Math.floor(st.progress * TABLEAUX.length));
  return (
    <svg className={`sb${st.frozen ? ' frozen' : ''}`} viewBox="0 0 1920 1080" width={1920} height={1080} aria-hidden="true">
      {VARIANT === 'a' ? <g key={i}>{TABLEAUX[i]}</g> : <Whirl />}
    </svg>
  );
}
