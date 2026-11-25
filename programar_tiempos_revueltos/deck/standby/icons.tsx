/** Hand-drawn standby icons (no external assets). Each is centred on 0,0 in a 200×200 box and draws with currentColor. */
const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 11, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const fill = { fill: 'currentColor' } as const;

const Person = ({ x = 0, y = 0, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle cy={-34} r={28} {...line} />
    <path d="M-48 52 C-48 -8 48 -8 48 52" {...line} />
  </g>
);

export const ICONS = {
  rocket: <path d="M0 -80 C36 -52 36 4 22 36 H-22 C-36 4 -36 -52 0 -80 Z M-24 8 L-54 48 L-22 44 M24 8 L54 48 L22 44 M0 54 V82 M0 -36 a13 13 0 1 0 0.1 0" {...line} />,
  stopwatch: <path d="M0 -50 a64 64 0 1 0 0.1 0 M-18 -76 H18 M0 -76 V-50 M0 14 L30 -16 M54 -44 L68 -58" {...line} />,
  check: <path d="M-56 4 L-16 44 L60 -40" {...line} strokeWidth={24} />,
  cross: <path d="M-44 -44 L44 44 M44 -44 L-44 44" {...line} strokeWidth={24} />,
  bars: <path d="M-70 70 H70 M-46 66 V10 M0 66 V-62 M46 66 V-22" {...line} strokeWidth={22} />,
  gear: <path d="M0 -34 a34 34 0 1 0 0.1 0 M0 -76 V-52 M0 52 V76 M-76 0 H-52 M52 0 H76 M-54 -54 L-37 -37 M37 37 L54 54 M54 -54 L37 -37 M-37 37 L-54 54" {...line} strokeWidth={18} />,
  terminal: (
    <>
      <rect x={-78} y={-60} width={156} height={120} rx={14} {...line} />
      <path d="M-44 -22 L-18 2 L-44 26 M2 28 H44" {...line} />
    </>
  ),
  wrench: <path d="M24 -70 C-8 -72 -28 -42 -16 -14 L-68 38 C-82 54 -56 80 -40 66 L12 14 C42 26 74 4 70 -28 L44 -4 L14 -12 L6 -42 Z" {...line} />,
  megaphone: <path d="M-70 -18 V20 H-34 L40 56 V-54 L-34 -18 Z M-48 20 L-34 66 H-12 L-22 20 M58 -22 C70 -10 70 12 58 24" {...line} />,
  ghost: <path d="M-52 70 V-18 C-52 -92 52 -92 52 -18 V70 L26 50 L0 70 L-26 50 Z M-18 -22 v6 M18 -22 v6" {...line} />,
  doc: <path d="M-48 -72 H18 L48 -42 V72 H-48 Z M18 -72 V-42 H48 M-24 -10 H24 M-24 18 H24 M-24 46 H6" {...line} />,
  layers: <path d="M0 -76 L80 -38 L0 0 L-80 -38 Z M-80 2 L0 40 L80 2 M-80 40 L0 78 L80 40" {...line} />,
  door: (
    <>
      <path d="M-54 78 V-76 H54 V78 M-76 78 H76" {...line} />
      <path d="M-54 -76 L8 -56 V96 L-54 78 Z" {...fill} />
    </>
  ),
  ladder: <path d="M-36 -80 V80 M36 -80 V80 M-36 -52 H36 M-36 -16 H36 M-36 20 H36" {...line} />,
  bell: <path d="M-52 38 C-34 24 -42 -56 0 -56 C42 -56 34 24 52 38 Z M0 -56 V-72 M-14 58 C-8 74 8 74 14 58 M-70 -66 L70 70" {...line} />,
  magnifier: <path d="M-14 -66 a50 50 0 1 0 0.1 0 M24 22 L70 70 M-36 -26 L-18 -8 L12 -42" {...line} />,
  compass: (
    <>
      <circle r={70} {...line} />
      <path d="M30 -30 L8 8 L-30 30 L-8 -8 Z" {...fill} />
    </>
  ),
  train: <path d="M-50 -70 H50 Q64 -70 64 -54 V36 Q64 50 50 50 H-50 Q-64 50 -64 36 V-54 Q-64 -70 -50 -70 Z M-64 -10 H64 M-30 18 v6 M30 18 v6 M-34 50 L-58 80 M34 50 L58 80" {...line} />,
  dev: (
    <>
      <circle cy={-50} r={27} {...line} />
      <rect x={-56} y={-6} width={112} height={70} rx={10} {...line} />
      <path d="M-78 76 H78" {...line} />
      <path d="M0 46 C-30 28 -18 8 0 22 C18 8 30 28 0 46 Z" {...fill} />
    </>
  ),
  boss: (
    <>
      <circle cy={-46} r={29} {...line} />
      <path d="M-64 72 C-64 -20 64 -20 64 72 Z" {...line} />
      <path d="M-9 4 H9 L5 18 L15 52 L0 68 L-15 52 L-5 18 Z" {...fill} />
    </>
  ),
  agent: (
    <>
      <path d="M0 -52 V-74" {...line} />
      <circle cy={-80} r={10} {...fill} />
      <rect x={-66} y={-52} width={132} height={112} rx={30} {...line} />
      <circle cx={-26} cy={-8} r={12} {...fill} />
      <circle className="sb-wink" cx={26} cy={-8} r={12} {...fill} />
      <path d="M-26 26 Q0 46 26 26" {...line} />
    </>
  ),
  bill: (
    <>
      <path d="M-54 -76 H54 V78 L36 62 L18 78 L0 62 L-18 78 L-36 62 L-54 78 Z" {...line} />
      <path d="M-34 -46 L-10 -32 M34 -46 L10 -32" {...line} />
      <circle cx={-20} cy={-18} r={8} {...fill} />
      <circle cx={20} cy={-18} r={8} {...fill} />
      <path d="M-28 14 H28 M-28 38 H14" {...line} />
    </>
  ),
  team: (
    <>
      <Person x={-56} y={14} s={0.7} />
      <Person x={56} y={14} s={0.7} />
      <Person y={-8} s={0.95} />
    </>
  ),
  box: (
    <>
      <path d="M-62 -8 H62 L50 72 H-50 Z" {...line} />
      <path d="M-14 -10 V-48 M-14 -34 C-40 -34 -46 -50 -46 -62 C-24 -62 -14 -50 -14 -34 M-14 -48 C-14 -70 2 -80 18 -80 C18 -60 6 -48 -14 -48" {...line} />
      <path d="M24 -10 V-38 H48 V-10" {...line} />
    </>
  ),
  heart: <path d="M0 72 C-120 -4 -66 -100 0 -42 C66 -100 120 -4 0 72 Z" {...fill} />,
  question: (
    <>
      <path d="M-34 -38 C-34 -86 40 -84 40 -40 C40 -8 0 -12 0 26" {...line} strokeWidth={18} />
      <circle cy={64} r={13} {...fill} />
    </>
  ),
  flame: <path d="M0 -80 C10 -44 56 -24 56 22 C56 58 30 80 0 80 C-30 80 -56 58 -56 24 C-56 -2 -38 -14 -32 -34 C-20 -22 -18 -10 -16 0 C6 -18 6 -52 0 -80 Z" {...fill} />,
  coin: (
    <>
      <circle r={54} {...line} />
      <path d="M18 -22 C0 -34 -22 -24 -20 -10 C-18 8 20 0 20 18 C20 34 -6 38 -20 26 M0 -38 V38" {...line} strokeWidth={9} />
    </>
  ),
  chart: (
    <>
      <path d="M-76 -66 V70 H76" {...line} />
      <path d="M-50 -40 L-14 -4 L10 -22 L58 36 M58 4 V36 H26" {...line} />
    </>
  ),
  code: <path d="M-40 -42 L-80 0 L-40 42 M40 -42 L80 0 L40 42 M16 -56 L-16 56" {...line} />,
  cloud: <path d="M-70 36 C-108 36 -104 -24 -60 -20 C-58 -76 30 -84 42 -30 C96 -42 108 36 58 36 Z" {...fill} />,
  bolt: <path d="M12 -80 L-40 10 H-4 L-16 80 L44 -16 H6 Z" {...fill} />,
  spark: <path d="M0 -70 C6 -18 18 -6 70 0 C18 6 6 18 0 70 C-6 18 -18 6 -70 0 C-18 -6 -6 -18 0 -70 Z" {...fill} />,
};

export type IconName = keyof typeof ICONS;
