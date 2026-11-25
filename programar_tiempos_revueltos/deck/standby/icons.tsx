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
