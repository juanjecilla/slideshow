import { QR, Reveal, Scene, useScene } from 'beatdeck';
import { config } from './deck.config';
import { CAST, CONTENT, type View } from './content';
import { Stamp } from './poster';
import { Standby } from './standby/Standby';
import amarPoster from './assets/amar-poster.jpg';

/** Generic renderer: every beat of content.ts is drawn from its `View`. Stage 1920×1080, safe margin 120/100. */
const X = 150;
const W = 1620;
/** Poster statements never wrap (white-space: nowrap): pick the size so the longest line fits `maxW`. */
const fit = (lines: string[], maxW: number, max: number, min = 56, k = 0.58) =>
  Math.max(min, Math.min(max, Math.floor(maxW / (Math.max(...lines.map((l) => l.length)) * k))));

/** Top of a text block of height `h`, optically centred (slightly above the middle), never above `min`. */
const centred = (h: number, min = 230) => Math.max(min, Math.round((1080 - h) * 0.46));

const Eyebrow = ({ on, out, text, y = 110 }: { on: boolean; out: boolean; text: string; y?: number }) => (
  <Reveal on={on} out={out} x={X} y={y}><div className="t-eyebrow">{text}</div></Reveal>
);
const Credit = ({ on, out, text }: { on: boolean; out: boolean; text?: string }) =>
  text ? <Reveal on={on} out={out} x={X} y={945} delay={300}><div className="t-meta" style={{ fontSize: 22, letterSpacing: '0.06em' }}>{text}</div></Reveal> : null;
const Tag = ({ on, out, text }: { on: boolean; out: boolean; text?: string }) =>
  text ? <Stamp on={on} out={out} text={text} x={1440} y={92} /> : null;

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
      return (
        <>
          <Eyebrow on={on} out={out} text={v.eyebrow} y={170} />
          <Reveal on={on} out={out} x={X} y={250}><div className="t-statement" style={{ fontSize: 170 }}>{v.name}</div></Reveal>
          <Reveal on={on} out={out} x={X} y={470} delay={150}><div className="t-editorial" style={{ fontSize: 58, color: 'var(--accent)' }}>{v.role}</div></Reveal>
          {v.items.map((it, i) => (
            <Reveal key={it} on={on} out={out} x={X} y={620 + i * 100} delay={300 + i * 150}>
              <div className="t-editorial" style={{ fontSize: 50, display: 'flex', gap: 28 }}><span style={{ color: 'var(--accent)' }}>■</span><span>{it}</span></div>
            </Reveal>
          ))}
        </>
      );
    case 'reference':
      return null; // drawn by <Reference>, which stays mounted across its two beats
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
      return (
        <>
          <Eyebrow on={on} out={out} text="The cast" />
          {CAST.map((name, i) => (
            <Reveal key={name} on={on} out={out} x={X} y={190 + i * 118} delay={i * 90}>
              <div className="t-statement" style={{ fontSize: 104, opacity: v.lit < 0 || v.lit === i ? 1 : 0.3, color: v.lit === i ? 'var(--accent)' : undefined, transition: 'opacity 300ms, color 300ms' }}>{name}</div>
            </Reveal>
          ))}
          {v.desc && <Reveal on={on} out={out} x={X} y={850} delay={150}><div className="t-editorial" style={{ fontSize: 58, maxWidth: W }}>{v.desc}</div></Reveal>}
        </>
      );
    case 'list': {
      const size = v.small ? 38 : 52;
      const sayH = v.say ? fit([v.say], W, 100, 56) : 0;
      const first = 110 + (v.say ? 80 + sayH + 50 : 110);
      const room = (v.foot ? 820 : 900) - first;
      const gap = v.small ? 110 : Math.min(180, Math.floor(room / v.items.length));
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
      <Credit on={on && img} out={false} text={v.credit} />
    </div>
  );
}

function SceneView({ index }: { index: number }) {
  const { here, b } = useScene();
  const beats = CONTENT[index].beats;
  const refs = beats.flatMap((x) => (x.v.kind === 'reference' ? [x.v] : []));
  const now = beats[b]?.v;
  return (
    <>
      {beats.map((beat, k) => <BeatView key={beat.name + k} v={beat.v} on={here && b === k} out={here && b > k} />)}
      {refs.length > 0 && <Reference v={now?.kind === 'reference' ? now : refs[0]} on={here && now?.kind === 'reference'} />}
    </>
  );
}

export const Scenes = () => (
  <>
    {CONTENT.map((_, i) => <Scene key={i} index={i}><SceneView index={i} /></Scene>)}
  </>
);
