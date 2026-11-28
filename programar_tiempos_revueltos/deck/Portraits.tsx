/**
 * The cast as 1940s–50s studio portraits, in sepia. Original drawings: they are archetypes of the talk, not the
 * characters or actors of any series.
 */
const C = { bg: '#d9c3a0', skin: '#eccfa6', ink: '#33241a', mid: '#8a6a48', light: '#f4ead6', red: '#8e3b2f', metal: '#a9a08e', paper: '#f7f1e1' };
const o = { stroke: C.ink, strokeWidth: 5, strokeLinejoin: 'round', strokeLinecap: 'round' } as const;
const no = { fill: 'none', ...o } as const;

const Head = ({ x = 200, y = 200, s = 1, lips = C.mid }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-22 70 V104 H22 V70" fill={C.skin} {...o} />
    <ellipse rx={66} ry={82} fill={C.skin} {...o} />
    <path d="M-36 -18 q12 -10 26 0 M10 -18 q14 -10 26 0" {...no} />
    <circle cx={-23} cy={-2} r={6} fill={C.ink} />
    <circle cx={23} cy={-2} r={6} fill={C.ink} />
    <path d="M0 4 q-8 24 4 24" {...no} />
    <path d="M-22 48 q22 -10 44 0 q-22 20 -44 0 Z" fill={lips} {...o} />
  </g>
);

/** The Dev: victory rolls, collar and pearls, a typewriter. */
const Dev = () => (
  <>
    <path d="M118 190 C80 300 110 330 140 316 L262 316 C294 332 322 296 282 190 Z" fill={C.ink} />
    <path d="M70 500 C80 360 130 300 200 300 C270 300 320 360 330 500 Z" fill={C.red} {...o} />
    <path d="M160 302 L200 366 L240 302 L222 290 H178 Z" fill={C.light} {...o} />
    <Head y={200} lips={C.red} />
    <path d="M128 190 C112 96 170 98 200 130 C230 98 288 96 272 190 C262 140 226 132 200 150 C174 132 138 140 128 190 Z" fill={C.ink} />
    <circle cx={152} cy={122} r={34} fill={C.ink} /><circle cx={248} cy={122} r={34} fill={C.ink} />
    <circle cx={152} cy={122} r={13} {...no} stroke={C.mid} /><circle cx={248} cy={122} r={13} {...no} stroke={C.mid} />
    {[-48, -32, -16, 0, 16, 32, 48].map((x) => <circle key={x} cx={200 + x} cy={352 - (x * x) / 130} r={8} fill={C.paper} {...o} strokeWidth={2} />)}
    <path d="M104 500 L124 408 H276 L296 500 Z M150 408 V380 H250 V408" fill={C.ink} {...o} />
    <rect x={164} y={356} width={72} height={40} fill={C.paper} {...o} />
    {[430, 456].flatMap((y) => [140, 170, 200, 230, 260].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r={9} fill={C.metal} />))}
  </>
);

/** Management: slicked hair, moustache, three-piece suit, watch chain. */
const Boss = () => (
  <>
    <path d="M60 500 C66 370 118 306 200 300 C282 306 334 370 340 500 Z" fill={C.ink} {...o} />
    <path d="M158 304 L200 430 L242 304 Z" fill={C.light} {...o} />
    <path d="M158 304 L132 380 L170 396 L200 470 L230 396 L268 380 L242 304" fill={C.mid} {...o} />
    <path d="M190 312 H210 L206 330 L216 392 L200 412 L184 392 L194 330 Z" fill={C.red} {...o} />
    <path d="M168 446 q32 26 66 0" {...no} stroke="#d8b25a" />
    <circle cx={238} cy={446} r={11} fill="#d8b25a" {...o} strokeWidth={3} />
    <path d="M276 382 l28 -6 l-6 22 Z" fill={C.paper} />
    <Head y={196} />
    <path d="M132 180 C128 88 270 86 270 178 C254 130 236 138 196 134 C168 130 150 140 132 180 Z" fill={C.ink} />
    <path d="M190 116 q30 8 62 24" {...no} stroke={C.mid} />
    <path d="M200 232 C180 214 156 232 148 224 C152 250 184 248 200 236 C216 248 248 250 252 224 C244 232 220 214 200 232 Z" fill={C.ink} />
    <circle cx={223} cy={194} r={24} {...no} stroke="#d8b25a" /><path d="M244 206 C262 250 262 300 250 330" {...no} stroke="#d8b25a" strokeWidth={3} />
  </>
);

/** The AI Agent: the mysterious suitor. A robot in a fedora, bow tie, rose in hand. */
const Agent = () => (
  <>
    <path d="M70 500 C76 380 126 316 200 312 C274 316 324 380 330 500 Z" fill={C.mid} {...o} />
    <path d="M162 316 L200 420 L238 316 Z" fill={C.light} {...o} />
    <path d="M200 340 L152 316 V366 Z M200 340 L248 316 V366 Z" fill={C.red} {...o} />
    <circle cx={200} cy={340} r={12} fill={C.red} {...o} />
    <rect x={182} y={276} width={36} height={42} fill={C.metal} {...o} />
    <rect x={122} y={134} width={156} height={148} rx={48} fill={C.metal} {...o} />
    <circle cx={122} cy={210} r={16} fill={C.mid} {...o} /><circle cx={278} cy={210} r={16} fill={C.mid} {...o} />
    <circle cx={168} cy={200} r={17} fill={C.paper} {...o} /><circle cx={170} cy={202} r={7} fill={C.ink} />
    <path d="M214 202 q18 -18 36 0" {...no} />
    <path d="M168 246 q36 22 70 -8" {...no} />
    <ellipse cx={200} cy={140} rx={138} ry={26} fill={C.ink} />
    <path d="M128 140 C126 56 172 56 200 76 C228 56 274 56 272 140 Z" fill={C.ink} {...o} />
    <path d="M130 118 H270" {...no} stroke={C.red} strokeWidth={16} />
    <path d="M318 500 C316 452 304 430 298 392 M308 442 q26 -4 32 -26 q-24 -2 -32 26" fill="#5d6b3c" stroke="#5d6b3c" strokeWidth={6} />
    <path d="M298 396 c-34 0 -38 -44 -8 -48 c8 -16 34 -12 34 6 c20 10 6 44 -26 42 Z M290 366 q14 14 24 -4" fill={C.red} {...o} />
  </>
);

/** The Bill: the villain. An invoice in a top hat and cape, thin moustache. */
const Bill = () => (
  <>
    <path d="M40 500 C70 330 120 260 130 230 L150 330 H250 L270 230 C280 260 330 330 360 500 Z" fill={C.ink} {...o} />
    <path d="M134 236 L158 340 L120 460 Z M266 236 L242 340 L280 460 Z" fill={C.red} />
    <path d="M136 130 H264 V430 L242 410 L221 430 L200 410 L179 430 L158 410 L136 430 Z" fill={C.paper} {...o} />
    <path d="M156 178 L190 196 M244 178 L210 196" {...no} strokeWidth={8} />
    <circle cx={176} cy={208} r={8} fill={C.ink} /><circle cx={224} cy={208} r={8} fill={C.ink} />
    <circle cx={224} cy={208} r={22} {...no} strokeWidth={4} /><path d="M244 218 C258 250 256 290 244 318" {...no} strokeWidth={3} />
    <path d="M200 244 C176 232 158 262 128 240 C134 272 176 270 200 252 C224 270 266 272 272 240 C242 262 224 232 200 244 Z" fill={C.ink} />
    <path d="M178 276 q22 -14 44 0" {...no} />
    <path d="M160 316 H240 M160 340 H240 M160 364 H214" {...no} stroke={C.mid} />
    <text x={236} y={398} textAnchor="end" fontSize={40} fontWeight={800} fill={C.red} fontFamily="var(--font-display)">€€€</text>
    <rect x={146} y={34} width={108} height={96} fill={C.ink} {...o} />
    <ellipse cx={200} cy={132} rx={98} ry={16} fill={C.ink} />
    <path d="M148 108 H252" {...no} stroke={C.red} strokeWidth={14} />
  </>
);

/** The Team: braids, a flat cap, braces. */
const Team = () => (
  <>
    <path d="M20 500 C24 390 60 340 108 336 C156 340 192 390 196 500 Z" fill={C.light} {...o} />
    <path d="M72 350 L66 500 M144 350 L150 500" {...no} strokeWidth={10} />
    <Head x={108} y={252} s={0.82} />
    <path d="M50 214 C54 160 132 148 170 196 L190 214 C140 204 90 204 50 214 Z" fill={C.mid} {...o} />
    <path d="M204 500 C208 390 244 340 292 336 C340 340 376 390 380 500 Z" fill={C.mid} {...o} />
    <path d="M262 340 L292 380 L322 340" fill={C.light} {...o} />
    <Head x={292} y={252} s={0.82} lips={C.red} />
    <path d="M236 250 C226 160 358 160 348 250 C328 196 308 206 292 196 C272 208 252 196 236 250 Z" fill={C.ink} />
    {[0, 1, 2, 3].map((i) => <g key={i}><ellipse cx={236} cy={282 + i * 28} rx={13} ry={18} fill={C.ink} /><ellipse cx={348} cy={282 + i * 28} rx={13} ry={18} fill={C.ink} /></g>)}
    <path d="M104 500 C108 420 150 378 200 376 C250 378 292 420 296 500 Z" fill={C.ink} {...o} />
    <path d="M176 380 L200 440 L224 380 Z" fill={C.light} {...o} />
    <Head x={200} y={310} s={0.8} />
    <path d="M146 300 C132 220 268 220 254 300 C240 258 214 270 188 258 C176 280 156 272 146 300 Z" fill={C.mid} />
    <circle cx={181} cy={308} r={17} {...no} strokeWidth={4} /><circle cx={219} cy={308} r={17} {...no} strokeWidth={4} /><path d="M198 308 h4" {...no} />
  </>
);

export const PORTRAITS = [Dev, Boss, Agent, Bill, Team];

/** An oval studio frame. `id` must be unique per frame on the page (it names the clip path). */
export function Portrait({ who, id, width }: { who: number; id: string; width: number }) {
  const Who = PORTRAITS[who];
  return (
    <svg viewBox="0 0 400 500" width={width} height={width * 1.25} style={{ display: 'block', overflow: 'visible' }}>
      <clipPath id={id}><ellipse cx={200} cy={250} rx={190} ry={240} /></clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width={400} height={500} fill={C.bg} />
        <ellipse cx={200} cy={190} rx={150} ry={170} fill={C.light} opacity={0.55} />
        <Who />
      </g>
      <ellipse cx={200} cy={250} rx={190} ry={240} fill="none" stroke={C.mid} strokeWidth={18} />
      <ellipse cx={200} cy={250} rx={198} ry={248} fill="none" stroke={C.ink} strokeWidth={4} />
      <ellipse cx={200} cy={250} rx={178} ry={228} fill="none" stroke={C.light} strokeWidth={3} />
    </svg>
  );
}
