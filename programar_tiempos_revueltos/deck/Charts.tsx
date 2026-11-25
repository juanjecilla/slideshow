import { useScene } from 'beatdeck';
import { HYPE, STOCKS, type BeatContent, type View } from './content';

/*
 * The three drawn charts. Each stays mounted across its beats so a click extends the picture instead of redrawing it.
 * The hype curves are schematic (research R7): shapes, not measurements.
 */

const label = { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 24, letterSpacing: '0.06em', fill: 'var(--ink)' } as const;
const stroke = { fill: 'none', strokeWidth: 12, strokeLinecap: 'round' } as const;
const fade = (show: boolean, delay = 0): React.CSSProperties => ({ opacity: show ? 1 : 0, transition: `opacity 350ms ${show ? delay : 0}ms` });

/** A line that draws itself when `show` turns true. */
const Draw = ({ d, show, color = 'var(--accent)' }: { d: string; show: boolean; color?: string }) => (
  <path d={d} pathLength={1} {...stroke} stroke={color}
    style={{ strokeDasharray: 1, strokeDashoffset: show ? 0 : 1, opacity: show ? 1 : 0, transition: 'stroke-dashoffset 800ms ease-in-out, opacity 150ms' }} />
);
/** The fall that should have come. */
const Ghost = ({ d, show }: { d: string; show: boolean }) => (
  <path d={d} {...stroke} strokeWidth={7} stroke="var(--ink)" strokeDasharray="4 22" style={{ opacity: show ? 0.45 : 0, transition: 'opacity 350ms 500ms' }} />
);
const Txt = ({ x, y, lines, show, anchor = 'middle', delay = 500 }: { x: number; y: number; lines: readonly string[]; show: boolean; anchor?: 'start' | 'middle' | 'end'; delay?: number }) => (
  <text x={x} y={y} textAnchor={anchor} style={{ ...label, ...fade(show, delay) }}>
    {lines.map((l, i) => <tspan key={l} x={x} dy={i ? 30 : 0}>{l}</tspan>)}
  </text>
);
const Axes = () => (
  <>
    <path d="M150 360 V920 H1770" fill="none" stroke="var(--ink)" strokeWidth={4} />
    <text style={label} transform="translate(120 920) rotate(-90)">{HYPE.y}</text>
    <text x={1770} y={955} textAnchor="end" style={label}>{HYPE.x}</text>
  </>
);

function Cycle({ step }: { step: number }) {
  const [trigger, peak, trough, slope, plateau] = HYPE.phases;
  return (
    <>
      <Draw show={step >= 1} d="M170 900 C340 880 350 420 520 410" />
      <Draw show={step >= 2} d="M520 410 C690 400 710 820 900 810" />
      <Draw show={step >= 3} d="M900 810 C1090 800 1180 620 1380 595 S1640 570 1760 570" />
      <Txt show={step >= 1} x={370} y={860} anchor="start" lines={trigger} />
      <Txt show={step >= 1} x={520} y={345} lines={peak} />
      <Txt show={step >= 2} x={900} y={858} lines={trough} />
      <Txt show={step >= 3} x={1180} y={560} lines={slope} />
      <Txt show={step >= 3} x={1600} y={500} lines={plateau} />
    </>
  );
}

function Chain({ step }: { step: number }) {
  const dots: [number, number][] = [[560, 650], [980, 520], [1400, 400]];
  return (
    <>
      <Ghost show={step >= 1} d="M560 650 C720 650 720 890 900 890" />
      <Ghost show={step >= 2} d="M980 520 C1140 520 1140 890 1320 890" />
      <Ghost show={step >= 3} d="M1400 400 C1560 400 1560 890 1740 890" />
      <Draw show={step >= 1} d="M170 900 C370 890 380 660 560 650" />
      <Draw show={step >= 2} d="M560 650 C760 640 790 530 980 520" />
      <Draw show={step >= 3} d="M980 520 C1180 510 1210 410 1400 400" />
      {dots.map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r={18} fill="var(--ink)" style={fade(step > i, 600)} />
          <Txt show={step > i} x={x - 10} y={y - 45} anchor="end" lines={[HYPE.marks[i]]} />
        </g>
      ))}
      <Txt show={step >= 1} x={750} y={875} anchor="end" lines={[HYPE.ghost]} />
    </>
  );
}

function Stock({ on, data }: { on: boolean; data: keyof typeof STOCKS }) {
  const { ipo, ipoLabel, points } = STOCKS[data];
  const all = [ipo, ...points.map((p) => p.usd)];
  const lo = Math.min(...all), hi = Math.max(...all);
  const X = (i: number) => 260 + i * (1450 / (points.length - 1)) * 0.96;
  const Y = (usd: number) => 880 - ((usd - lo + (hi - lo) * 0.18) / ((hi - lo) * 1.3)) * 520;
  const pts = points.map((p, i) => [X(i), Y(p.usd)] as const);
  return (
    <>
      <path d={`M170 ${Y(ipo)} H1760`} stroke="var(--ink)" strokeWidth={4} strokeDasharray="14 14" />
      <text x={175} y={Y(ipo) + 36} textAnchor="start" style={label}>{ipoLabel}</text>
      <Draw show={on} d={`M${pts.map((p) => p.join(' ')).join(' L')}`} />
      {points.map((p, i) => (
        <g key={p.when} style={fade(on, 150 + i * 110)}>
          <circle cx={X(i)} cy={Y(p.usd)} r={14} fill="var(--ink)" />
          {/* keep the figure off the line: left of a start that climbs, under a dip or a last fall */}
          {(() => {
            const prev = points[i - 1]?.usd, next = points[i + 1]?.usd;
            const under = prev !== undefined && prev > p.usd && (next === undefined || next > p.usd);
            const left = prev === undefined && next !== undefined && next > p.usd;
            return <text x={X(i) + (left ? -8 : 0)} y={Y(p.usd) + (under ? 56 : -34)} textAnchor={left ? 'end' : 'middle'} style={{ ...label, fontSize: 34 }}>${p.usd.toFixed(2)}</text>;
          })()}
          <text x={X(i)} y={925} textAnchor="middle" style={label}>{p.when}</text>
        </g>
      ))}
    </>
  );
}

type ChartView = Extract<View, { kind: 'hype' | 'stock' }>;
const isChart = (v: View): v is ChartView => v.kind === 'hype' || v.kind === 'stock';
const key = (v: ChartView) => (v.kind === 'hype' ? v.mode : v.data);

/** One layer per chart of the scene, visible while the current beat belongs to it. */
export function Charts({ beats }: { beats: BeatContent[] }) {
  const { here, b } = useScene();
  const all = beats.map((x) => x.v).filter(isChart);
  const now = beats[b]?.v;
  return (
    <>
      {[...new Set(all.map(key))].map((k) => {
        const mine = all.filter((v) => key(v) === k);
        const on = here && !!now && isChart(now) && key(now) === k;
        const v = on ? (now as ChartView) : mine[0];
        const step = on && v.kind === 'hype' ? v.step : here && beats.findIndex((x) => x.v === mine.at(-1)) < b ? mine.length : 0;
        return (
          <div key={k} style={{ position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: on ? 1 : 0, transition: 'opacity 300ms' }}>
            <div style={{ position: 'absolute', left: 150, top: 110 }}>
              <div className="t-statement" style={{ fontSize: 76, marginTop: 56 }}>{v.say}</div>
            </div>
            <svg viewBox="0 0 1920 1080" width={1920} height={1080} style={{ position: 'absolute', left: 0, top: 0 }}>
              {/* lifted so the caveat and credit clear the progress bar */}
              <g transform="translate(0 -40)">{k === 'ant' || k === 'spcx' ? <Stock on={on} data={k} /> : <><Axes />{k === 'cycle' ? <Cycle step={step} /> : <Chain step={step} />}</>}</g>
            </svg>
            <div style={{ position: 'absolute', left: 150, top: 938, width: 1620 }}>
              <div className="t-editorial" style={{ fontSize: 30, color: 'var(--ink-2)' }}>{v.caveat}</div>
              <div className="t-meta" style={{ fontSize: 20, letterSpacing: '0.06em', marginTop: 8 }}>{v.credit}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
