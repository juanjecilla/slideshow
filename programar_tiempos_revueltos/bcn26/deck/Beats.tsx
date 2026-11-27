import { QR, Reveal, Scene, reducedMotion, useScene } from 'beatdeck';
import { config } from './deck.config';
import { CAST, CAST_TITLE, CONTENT, type View } from './content';
import { Portrait } from './Portraits';
import { Stamp } from './poster';
import { Standby } from './standby/Standby';
import { Charts } from './Charts';
import { Logo, type LogoName } from './logos';
import amarPoster from './assets/amar-poster.jpg';

/** Generic renderer: every beat of content.ts is drawn from its `View`. Stage 1920×1080, safe margin 120/100. */
const X = 150;
const W = 1620;
/** Poster statements never wrap (white-space: nowrap): pick the size so the longest line fits `maxW`. */
const fit = (lines: string[], maxW: number, max: number, min = 56, k = 0.58) =>
  Math.max(min, Math.min(max, Math.floor(maxW / (Math.max(...lines.map((l) => l.length)) * k))));

/** Top of a text block of height `h`, optically centred (slightly above the middle), never above `min`. */
const centred = (h: number, min = 230) => Math.max(min, Math.round((1080 - h) * 0.46));

/**
 * Eyebrows at the standard height and all credits are drawn once per text by SceneView (`shared`), not once per
 * beat: when two beats say the same, the words stay still.
 */
const Eyebrow = ({ on, out, text, y = 110, shared }: { on: boolean; out: boolean; text: string; y?: number; shared?: boolean }) =>
  y === 110 && !shared ? null : <Reveal on={on} out={out} x={X} y={y}><div className="t-eyebrow">{text}</div></Reveal>;
const Credit = ({ on, out, text, shared }: { on: boolean; out: boolean; text?: string; shared?: boolean }) =>
  text && shared ? <Reveal on={on} out={out} x={X} y={945} delay={300}><div className="t-meta" style={{ fontSize: 22, letterSpacing: '0.06em' }}>{text}</div></Reveal> : null;
const Tag = ({ on, out, text }: { on: boolean; out: boolean; text?: string }) =>
  text ? <Stamp on={on} out={out} text={text} x={1440} y={92} /> : null;

const STOP_LOGOS: LogoName[] = ['claude', 'gemini', 'openai', 'grok'];

/** The "best model" crown going round: one lap and it stops at whoever announced last. */
function Wheel({ v, on, out }: { v: Extract<View, { kind: 'wheel' }>; on: boolean; out: boolean }) {
  const R = 270, cx = 1400, cy = 530;
  const turn = 360 / v.stops.length;
  const angle = on || out ? 720 + v.at * turn : 0;
  const spin = 'transform 2600ms cubic-bezier(0.25, 0.6, 0.15, 1)';
  return (
    <>
      <Reveal on={on} out={out} x={X} y={290}>{v.say.map((l, i) => <div key={l} className="t-statement" style={{ fontSize: 96, color: i > 1 ? 'var(--accent)' : undefined }}>{l}</div>)}</Reveal>
      <Reveal on={on} out={out} x={0} y={0}>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--ink)" strokeWidth={8} strokeDasharray="6 20" />
          {v.stops.map((name, i) => {
            const a = (i * turn - 90) * (Math.PI / 180);
            const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
            return (
              <g key={name}>
                <rect x={x - 135} y={y - 42} width={270} height={84} rx={42} fill={i === v.at ? 'var(--accent)' : 'var(--bg)'} stroke="var(--ink)" strokeWidth={5} style={{ transition: 'fill 300ms 2300ms' }} />
                {/* the lit stop is filled with the accent: every mark takes the text colour there so it stays visible */}
                <Logo name={STOP_LOGOS[i]} x={x - 112} y={y - 24} size={48} color={i === v.at ? 'var(--bg)' : undefined} />
                <text x={x + 28} y={y + 13} textAnchor="middle" fontSize={36} fontWeight={800} fontFamily="var(--font-sans)" fill={i === v.at ? 'var(--bg)' : 'var(--ink)'}>{name}</text>
              </g>
            );
          })}
          <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: `${cx}px ${cy}px`, transition: spin }}>
            <path d={`M${cx} ${cy - 128} L${cx - 30} ${cy - 66} H${cx - 11} V${cy - 20} H${cx + 11} V${cy - 66} H${cx + 30} Z`} fill="var(--accent)" />
          </g>
          <circle cx={cx} cy={cy} r={26} fill="var(--ink)" />
          <text x={cx} y={cy + 90} textAnchor="middle" fontSize={34} fontWeight={800} letterSpacing="0.1em" fontFamily="var(--font-sans)" fill="var(--ink)">{v.here.toUpperCase()}</text>
          <text x={cx} y={cy + 130} textAnchor="middle" fontSize={26} fontFamily="var(--font-sans)" fill="var(--ink)">{v.latest}</text>
        </svg>
      </Reveal>
    </>
  );
}

function BeatView({ v, on, out }: { v: View; on: boolean; out: boolean }) {
  switch (v.kind) {
    case 'standby':
      return <Standby on={on} />;
    case 'title': {
      const size = fit(v.title, W, 170, 90);
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} y={200} />
          <Reveal on={on} out={out} x={X} y={270}>
            <div className="t-statement" style={{ fontSize: size }}>{v.title[0]}</div>
            <div className="t-statement" style={{ fontSize: size, color: 'var(--accent)' }}>{v.title[1]}</div>
          </Reveal>
          <Reveal on={on} out={out} x={X} y={270 + size * 1.9 + 50} delay={200}><div className="t-editorial" style={{ fontSize: 50, maxWidth: 1500 }}>{v.sub}</div></Reveal>
          <Reveal on={on} out={out} x={X} y={900} delay={300}><div className="t-meta" style={{ fontSize: 34 }}>{v.author}</div></Reveal>
        </>
      );
    }
    case 'about':
      return null; // drawn by <About>, which stays mounted across its two beats
    case 'reference':
      return null; // drawn by <Reference>, which stays mounted across its two beats
    case 'hype':
    case 'stock':
      return null; // drawn by <Charts>, which stays mounted across its beats
    case 'questions':
      return (
        <>
          <Reveal on={on} out={out} x={X} y={190}><div className="t-statement" style={{ fontSize: 110 }}>{v.title}</div></Reveal>
          <Reveal on={on} out={out} x={X} y={450} delay={200}><div className="t-statement" style={{ fontSize: fit([v.big], W, 340, 120), color: 'var(--ink)' }}>{v.big}</div></Reveal>
        </>
      );
    case 'sources':
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} />
          {v.items.map((it, i) => {
            const rows = Math.ceil(v.items.length / 2);
            const col = i < rows ? 0 : 1;
            return (
              <Reveal key={it.url} on={on} out={out} x={X + col * 830} y={175 + (i % rows) * Math.floor(820 / rows)} delay={i * 50}>
                <div style={{ width: 780 }}>
                  <div className="t-editorial" style={{ fontSize: 23, whiteSpace: 'nowrap' }}>{it.what}</div>
                  {/* the layers ignore the pointer: only the links on screen take it, and they must not advance the deck */}
                  <a href={`https://${it.url}`} target="_blank" rel="noreferrer" tabIndex={-1} onClick={(e) => e.stopPropagation()}
                    style={{ display: 'block', marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 15, lineHeight: 1.3, wordBreak: 'break-all', color: 'var(--accent)', pointerEvents: on ? 'auto' : 'none' }}>{it.url}</a>
                  <div className="t-meta" style={{ fontSize: 15, marginTop: 6 }}>{it.checked}</div>
                </div>
              </Reveal>
            );
          })}
        </>
      );
    case 'wheel':
      return <Wheel v={v} on={on} out={out} />;
    case 'previously': {
      const size = fit(v.lines, W, 120, 70);
      const top = centred(v.lines.length * size * 1.5 - size * 0.5, 250);
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} />
          {v.lines.map((l, i) => (
            <Reveal key={l} on={on} out={out} x={X} y={top + i * (size * 1.5)} delay={i * 250}><div className="t-statement" style={{ fontSize: size }}>{l}</div></Reveal>
          ))}
        </>
      );
    }
    case 'statement': {
      const size = fit(v.say, W, 128, 64);
      const h = v.say.length * size * 0.96;
      const subLines = v.sub ? Math.ceil((v.sub.length * 54 * 0.46) / 1500) : 0;
      const top = centred(h + (subLines ? 70 + subLines * 60 : 0));
      return (
        <>
          {v.eyebrow && <Eyebrow on={on} out={out} text={v.eyebrow} />}
          <Tag on={on} out={out} text={v.stamp} />
          <Reveal on={on} out={out} x={X} y={top}>
            {v.say.map((l, i) => <div key={l} className="t-statement" style={{ fontSize: size, color: v.accent === i ? 'var(--accent)' : undefined }}>{l}</div>)}
          </Reveal>
          {v.sub && <Reveal on={on} out={out} x={X} y={top + h + 70} delay={200}><div className="t-editorial" style={{ fontSize: 54, maxWidth: 1500 }}>{v.sub}</div></Reveal>}
          <Credit on={on} out={out} text={v.credit} />
        </>
      );
    }
    case 'numbers': {
      const n = v.rows.length;
      const gap = 50;
      const colW = (W - (n - 1) * gap) / n;
      const size = Math.floor(Math.min(n === 1 ? 250 : n === 2 ? 270 : 230, colW / (Math.max(...v.rows.map((r) => r.big.length)) * 0.62)));
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} />
          <Reveal on={on} out={out} x={X} y={170}><div className="t-statement" style={{ fontSize: fit([v.say], W, 80, 48) }}>{v.say}</div></Reveal>
          {v.rows.map((r, i) => (
            <Reveal key={r.big + i} on={on} out={out} x={X + i * (colW + gap)} y={n === 1 ? 420 : 440} delay={150 + i * 150}>
              <div className="t-numeral" style={{ fontSize: size, color: r.accent ? 'var(--accent)' : undefined }}>{r.big}</div>
              <div style={{ width: Math.min(colW - 40, 420), height: 8, background: 'var(--ink)', margin: '30px 0 24px' }} />
              <div className="t-editorial" style={{ fontSize: n === 1 ? 52 : 44, maxWidth: n === 1 ? 1200 : colW - 20 }}>{r.label}</div>
            </Reveal>
          ))}
          {v.caveat && <Reveal on={on} out={out} x={X} y={850} delay={450}><div className="t-editorial" style={{ fontSize: 38, maxWidth: W, color: 'var(--ink-2)' }}>{v.caveat}</div></Reveal>}
          <Credit on={on} out={out} text={v.credit} />
        </>
      );
    }
    case 'quote': {
      const size = 84;
      const lines = Math.ceil((v.quote.length * size * 0.5) / 1550);
      return (
        <>
          {v.eyebrow && <Eyebrow on={on} out={out} text={v.eyebrow} />}
          <Reveal on={on} out={out} x={X} y={250}><div className="t-editorial" style={{ fontSize: size, maxWidth: 1550 }}>{v.quote}</div></Reveal>
          <Reveal on={on} out={out} x={X} y={250 + lines * size * 1.15 + 40} delay={250}><div className="t-meta" style={{ fontSize: 28 }}>{v.by}</div></Reveal>
          {v.sub && <Reveal on={on} out={out} x={X} y={700} delay={450}><div className="t-statement" style={{ fontSize: fit([v.sub], W, 78, 44), color: 'var(--accent)' }}>{v.sub}</div></Reveal>}
          <Credit on={on} out={out} text={v.credit} />
        </>
      );
    }
    case 'chapter': {
      const size = fit([v.title], W, 300, 120);
      return (
        <>
          <Reveal on={on} out={out} x={X} y={220}><div className="t-meta" style={{ fontSize: 44 }}>{v.n}</div></Reveal>
          <Reveal on={on} out={out} x={X} y={300}><div className="t-statement" style={{ fontSize: size }}>{v.title}</div></Reveal>
          {v.line && (
            <Reveal on={on} out={out} x={X + 8} y={300 + size + 60} delay={200}>
              <div style={{ width: 220, height: 14, background: 'var(--ink)', marginBottom: 36 }} />
              <div className="t-editorial" style={{ fontSize: 62, maxWidth: 1400 }}>{v.line}</div>
            </Reveal>
          )}
        </>
      );
    }
    case 'cast':
    case 'finale':
      return null; // drawn by <Cast> / <Finale>, which stay mounted across their beats
    case 'list': {
      const size = v.small ? 38 : 52;
      const sayH = v.say ? fit([v.say], W, 100, 56) : 0;
      const first = 110 + (v.say ? 80 + sayH + 50 : 110);
      const room = (v.foot ? 820 : 900) - first;
      const gap = Math.min(v.small ? 100 : 180, Math.floor(room / v.items.length));
      const top = v.small ? first : first + Math.max(0, Math.round((room - gap * v.items.length) / 2)) + 20;
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} />
          <Tag on={on} out={out} text={v.stamp} />
          {v.say && <Reveal on={on} out={out} x={X} y={190}><div className="t-statement" style={{ fontSize: sayH }}>{v.say}</div></Reveal>}
          {v.items.map((it, i) => {
            const [head, rest] = it.includes(' — ') ? it.split(' — ') : [null, it];
            const dim = it.startsWith('…');
            return (
              <Reveal key={it} on={on} out={out} x={X} y={top + i * gap} delay={150 + i * 150}>
                <div className="t-editorial" style={{ fontSize: size, maxWidth: 1500, opacity: dim ? 0.6 : 1, display: 'flex', gap: 28 }}>
                  <span style={{ color: 'var(--accent)' }}>■</span>
                  <span>{head && <b style={{ fontWeight: 800 }}>{head} · </b>}{rest}</span>
                </div>
              </Reveal>
            );
          })}
          {v.foot && <Reveal on={on} out={out} x={X} y={850} delay={600}><div className="t-editorial" style={{ fontSize: 36, maxWidth: W, color: 'var(--ink-2)' }}>{v.foot}</div></Reveal>}
          <Credit on={on} out={out} text={v.credit} />
        </>
      );
    }
    case 'todo':
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} />
          <Reveal on={on} out={out} x={X} y={250}>
            <div style={{ border: '8px dashed var(--ink)', padding: '60px 80px', width: 1500 }}>
              <div className="t-statement" style={{ fontSize: 200 }}>TODO</div>
              <div className="t-editorial" style={{ fontSize: 56, marginTop: 30 }}>{v.what}</div>
            </div>
          </Reveal>
        </>
      );
    case 'qr': {
      const size = fit(v.say, 1000, 128, 64);
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} />
          <Reveal on={on} out={out} x={X} y={260}>{v.say.map((l) => <div key={l} className="t-statement" style={{ fontSize: size }}>{l}</div>)}</Reveal>
          <Reveal on={on} out={out} x={X} y={260 + v.say.length * size * 0.96 + 60} delay={200}><div className="t-meta" style={{ fontSize: 22, letterSpacing: '0.04em' }}>{v.sub}</div></Reveal>
          <Reveal on={on} out={out} x={1220} y={230} delay={250}><QR url={config.qrUrl} size={520} /></Reveal>
        </>
      );
    }
  }
}

/** Who I am. One beat later the job title is struck out and the new one is stamped under it. */
function About({ v, on, out }: { v: Extract<View, { kind: 'about' }>; on: boolean; out: boolean }) {
  const joke = !!v.retitle;
  const still = reducedMotion.get();
  return (
    <>
      <Eyebrow on={on} out={out} text={v.eyebrow} y={170} />
      <Reveal on={on} out={out} x={X} y={250}><div className="t-statement" style={{ fontSize: 170 }}>{v.name}</div></Reveal>
      <Reveal on={on} out={out} x={X} y={470} delay={150}>
        <div className="t-editorial" style={{ fontSize: 58, color: 'var(--accent)', whiteSpace: 'nowrap' }}>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            {v.role}
            <span aria-hidden style={{ position: 'absolute', left: -8, top: '52%', height: 9, width: joke ? 'calc(100% + 16px)' : 0, background: 'var(--ink)', transition: still ? 'none' : 'width 450ms ease-in-out' }} />
          </span>
          {' · '}{v.tail}
        </div>
      </Reveal>
      <Reveal on={on && joke} out={out} x={X + 40} y={548} delay={still ? 0 : 450}>
        <div className="t-statement" style={{ fontSize: 84, transform: 'rotate(-3deg)' }}>{v.retitle}</div>
      </Reveal>
      {v.items.map((it, i) => (
        <Reveal key={it} on={on} out={out} x={X} y={670 + i * 90} delay={300 + i * 150}>
          <div className="t-editorial" style={{ fontSize: 50, display: 'flex', gap: 28 }}><span style={{ color: 'var(--accent)' }}>■</span><span>{it}</span></div>
        </Reveal>
      ))}
    </>
  );
}

/** The question alone, centred; on the next beat it makes room and the poster slides in. */
function Reference({ v, on }: { v: Extract<View, { kind: 'reference' }>; on: boolean }) {
  const img = v.image;
  const move = 'all 700ms cubic-bezier(0.2, 0.8, 0.2, 1)';
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: on ? 1 : 0, transition: 'opacity 300ms' }}>
      <div style={{ position: 'absolute', left: 0, top: 340, width: img ? 1130 : 1920, textAlign: 'center', transform: `scale(${img ? 1 : 1.3})`, transition: move }}>
        <div className="t-eyebrow" style={{ marginBottom: 50 }}>{v.eyebrow}</div>
        {v.say.map((l) => <div key={l} className="t-statement" style={{ fontSize: 128 }}>{l}</div>)}
      </div>
      <div style={{ position: 'absolute', left: 1130, top: 60, opacity: img ? 1 : 0, transform: img ? 'none' : 'translateX(260px) rotate(6deg)', transition: move }}>
        <img src={amarPoster} alt={v.alt} width={640} height={960} style={{ display: 'block', border: '6px solid var(--ink)', boxShadow: '12px 12px 0 var(--ink)' }} />
      </div>
      <Credit shared on={on && img} out={false} text={v.credit} />
    </div>
  );
}

/** The cast list never moves: only who is lit, their portrait and their line change. */
function Cast({ v, on }: { v: Extract<View, { kind: 'cast' }>; on: boolean }) {
  const t = 'opacity 350ms, color 350ms, transform 350ms';
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: on ? 1 : 0, transition: 'opacity 300ms' }}>
      <div className="t-eyebrow" style={{ position: 'absolute', left: X, top: 110 }}>{CAST_TITLE}</div>
      {CAST.map((name, i) => (
        <div key={name} className="t-statement" style={{ position: 'absolute', left: X, top: 190 + i * 118, fontSize: 104, opacity: v.lit < 0 || v.lit === i ? 1 : 0.3, color: v.lit === i ? 'var(--accent)' : undefined, transition: t }}>{name}</div>
      ))}
      {/* nobody lit: the family photo */}
      {CAST.map((name, i) => (
        <div key={name} style={{ position: 'absolute', left: [1010, 1290, 1570, 1150, 1430][i], top: i < 3 ? 130 : 480, opacity: v.lit < 0 ? 1 : 0, transition: t }}>
          <Portrait who={i} id={`group-${i}`} width={250} />
        </div>
      ))}
      {CAST.map((name, i) => (
        <div key={name} style={{ position: 'absolute', left: 1180, top: 120, opacity: v.lit === i ? 1 : 0, transform: v.lit === i ? 'none' : 'translateY(30px)', transition: t }}>
          <Portrait who={i} id={`lead-${i}`} width={560} />
        </div>
      ))}
      <div className="t-editorial" style={{ position: 'absolute', left: X, top: 870, width: W, fontSize: 58 }}>{v.desc}</div>
    </div>
  );
}

/** A trailer card first; then it makes room for what actually happens in the finale. */
function Finale({ v, on }: { v: Extract<View, { kind: 'finale' }>; on: boolean }) {
  const card = v.step === 1;
  const move = 'all 800ms cubic-bezier(0.2, 0.8, 0.2, 1)';
  const rule = <div style={{ height: 10, background: 'var(--ink)', width: card ? 1300 : 0, margin: '0 auto', transition: move }} />;
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: on ? 1 : 0, transition: 'opacity 300ms' }}>
      <div style={{ position: 'absolute', left: 0, width: 1920, textAlign: 'center', top: card ? 170 : 90, transform: `scale(${card ? (on ? 1 : 0.6) : 0.34})`, transformOrigin: '50% 0', transition: move }}>
        <div className="t-eyebrow" style={{ fontSize: 34, marginBottom: 40, opacity: card ? 1 : 0, transition: move }}>★ {v.presents} ★</div>
        {rule}
        <div className="t-statement" style={{ fontSize: 270, margin: '30px 0 40px' }}>
          <div>{v.card[0]}</div>
          <div style={{ color: 'var(--accent)' }}>{v.card[1]}</div>
        </div>
        {rule}
      </div>
      <div style={{ position: 'absolute', left: X, top: 410, width: W, textAlign: 'center', opacity: card ? 0 : 1, transform: card ? 'translateY(80px)' : 'none', transition: move }}>
        {v.say.map((l) => <div key={l} className="t-statement" style={{ fontSize: 112 }}>{l}</div>)}
        <div className="t-statement" style={{ display: 'inline-block', marginTop: 90, padding: '26px 50px 34px', fontSize: Math.min(92, Math.floor(1580 / (v.punch.length * 0.45))), whiteSpace: 'nowrap', background: 'var(--accent)', color: 'var(--bg)' }}>{v.punch}</div>
      </div>
    </div>
  );
}

const SHARED_EYEBROW: View['kind'][] = ['wheel', 'previously', 'statement', 'numbers', 'quote', 'list', 'todo', 'qr', 'sources', 'hype', 'stock'];
const eyebrowOf = (v: View) => (SHARED_EYEBROW.includes(v.kind) && 'eyebrow' in v ? v.eyebrow : undefined);
const creditOf = (v: View) => (v.kind === 'statement' || v.kind === 'numbers' || v.kind === 'quote' || v.kind === 'list' || v.kind === 'wheel' ? v.credit : undefined);
const distinct = (all: (string | undefined)[]) => [...new Set(all.filter((x): x is string => !!x))];

function SceneView({ index }: { index: number }) {
  const { here, b } = useScene();
  const beats = CONTENT[index].beats;
  const refs = beats.flatMap((x) => (x.v.kind === 'reference' ? [x.v] : []));
  const now = beats[b]?.v;
  const abouts = beats.flatMap((x) => (x.v.kind === 'about' ? [x.v] : []));
  const lastAbout = beats.map((x) => x.v.kind).lastIndexOf('about');
  const finale = beats.flatMap((x) => (x.v.kind === 'finale' ? [x.v] : []))[0];
  return (
    <>
      {beats.map((beat, k) => <BeatView key={beat.name + k} v={beat.v} on={here && b === k} out={here && b > k} />)}
      {distinct(beats.map((x) => eyebrowOf(x.v))).map((t) => <Eyebrow key={t} shared text={t} on={here && !!now && eyebrowOf(now) === t} out={false} />)}
      {distinct(beats.map((x) => creditOf(x.v))).map((t) => <Credit key={t} shared text={t} on={here && !!now && creditOf(now) === t} out={false} />)}
      <Charts beats={beats} />
      {abouts.length > 0 && <About v={now?.kind === 'about' ? now : abouts[0]} on={here && now?.kind === 'about'} out={here && b > lastAbout} />}
      {beats.some((x) => x.v.kind === 'cast') && <Cast v={now?.kind === 'cast' ? now : (beats[0].v as Extract<View, { kind: 'cast' }>)} on={here && now?.kind === 'cast'} />}
      {finale && <Finale v={now?.kind === 'finale' ? now : finale} on={here && now?.kind === 'finale'} />}
      {refs.length > 0 && <Reference v={now?.kind === 'reference' ? now : refs[0]} on={here && now?.kind === 'reference'} />}
    </>
  );
}

export const Scenes = () => (
  <>
    {CONTENT.map((_, i) => <Scene key={i} index={i}><SceneView index={i} /></Scene>)}
  </>
);
