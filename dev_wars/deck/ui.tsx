import { createContext, useContext, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { flags, usePos, type BeatDef } from 'beatdeck';
import { asset } from './assets';

/* ------------------------------------------------------------------ beats + scenes */

/** Named beats of a scene: `defs` feed scenes.ts, `i.name` is the beat index used by the layers. */
export function defineBeats<const T extends readonly (BeatDef & { name: string })[]>(defs: T) {
  const i = {} as { [K in T[number]['name']]: number };
  defs.forEach((d, k) => { (i as Record<string, number>)[d.name] = k; });
  return { defs: defs as unknown as BeatDef[], i };
}

interface ScState { here: boolean; b: number; entry: number }
const Ctx = createContext<ScState>({ here: false, b: -1, entry: 0 });
export const useSc = () => useContext(Ctx);

/**
 * Scene layer. Unlike the engine's <Scene> (fade out, wait, fade in: a black gap between scenes) it cuts:
 * the scene is visible the instant the deck is in it, and gone the instant it leaves.
 */
export function Sc({ index, children }: { index: number; children: ReactNode }) {
  const p = usePos();
  const here = p.s === index;
  return (
    <Ctx.Provider value={{ here, b: here ? p.b : -1, entry: p.entry }}>
      <div className="layer" style={{ opacity: here ? 1 : 0 }}>{children}</div>
    </Ctx.Provider>
  );
}

/** Helpers over a scene's beat table: `at('x')` is true on beat x only, `from('x')` from x on. */
export function useBeats<N extends string>(i: Record<N, number>) {
  const { here, b, entry } = useSc();
  return {
    here, b, entry,
    at: (n: N) => here && b === i[n],
    from: (n: N) => here && b >= i[n],
    between: (a: N, z: N) => here && b >= i[a] && b <= i[z],
  };
}

/* ------------------------------------------------------------------ layers that cut */

/** Full-bleed image. Appears and disappears at once (nothing crossfades, no black between two photos). */
export function Photo({ on, src, fit = 'cover', pos = '50% 50%', shade }: {
  on: boolean; src: string; fit?: 'cover' | 'contain'; pos?: string; shade?: 'bottom' | 'top';
}) {
  return (
    <div className="dw-photo" style={{ opacity: on ? 1 : 0 }}>
      <img src={asset(src)} alt="" draggable={false} style={{ objectFit: fit, objectPosition: pos }} />
      {shade && <div className={`dw-shade dw-shade-${shade}`} />}
    </div>
  );
}

/** The light stage of the debate beats. */
export const Paper = ({ on }: { on: boolean }) => <div className="dw-paper" style={{ opacity: on ? 1 : 0 }} />;

/* ------------------------------------------------------------------ things that rise in */

/** Rises in (fast, no waiting for what is leaving); leaves at once. */
export function Rise({ on, x, y, delay = 0, ms = 520, rise = 24, style, className, children }: {
  on: boolean; x: number; y: number; delay?: number; ms?: number; rise?: number;
  style?: CSSProperties; className?: string; children: ReactNode;
}) {
  return (
    <div
      className={`dw-rise ${className ?? ''}`}
      style={{
        position: 'absolute', left: x, top: y, opacity: on ? 1 : 0, transform: `translateY(${on ? 0 : rise}px)`,
        transition: on ? `opacity ${ms}ms ease ${delay}ms, transform ${ms}ms var(--ease) ${delay}ms` : 'none', ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Font size that makes `text` fit in `width` px on one line (Inter at these weights is about 0.54 em per character). */
export const fitSize = (text: string, max: number, width: number) => Math.min(max, Math.floor(width / (text.length * 0.54)));

/** Titles that hug the top edge are pushed down to keep the safe margin (100 px). */
const safeTop = (y: number) => (y < 130 ? y + 30 : y);

export type Tone = 'dark' | 'paper';
const ink = (tone: Tone) => (tone === 'paper' ? 'var(--paper-ink)' : 'var(--ink)');
const ink2 = (tone: Tone) => (tone === 'paper' ? 'var(--paper-ink-2)' : 'var(--ink-2)');

export function Title({ on, children, text, x = 150, y = 110, size = 112, color, tone = 'dark', delay, center }: {
  on: boolean; children: ReactNode; text?: string; x?: number; y?: number; size?: number; color?: string; tone?: Tone; delay?: number; center?: boolean;
}) {
  return (
    <Rise on={on} x={center ? 0 : x} y={safeTop(y)} delay={delay} style={center ? { width: 1920, textAlign: 'center' } : undefined}>
      <div className="t-statement" style={{ fontSize: text ? fitSize(text, size, 1620) : size, color: color ?? ink(tone) }}>{children}</div>
    </Rise>
  );
}

export function Eyebrow({ on, children, x = 150, y = 96, color, delay }: { on: boolean; children: ReactNode; x?: number; y?: number; color?: string; delay?: number }) {
  return (
    <Rise on={on} x={x} y={safeTop(y)} delay={delay} ms={420}>
      <div className="t-eyebrow" style={color ? { color } : undefined}>{children}</div>
    </Rise>
  );
}

export type LineSpec = string | { t: string; dim?: boolean; accent?: boolean; indent?: number; size?: number };

/** A list that builds itself on one beat: one line after the other. Lines never wrap (they shrink to `width`). */
export function Lines({ on, lines, x = 150, y, size = 64, width = 1620, gap = 1.5, step = 170, tone = 'dark' }: {
  on: boolean; lines: LineSpec[]; x?: number; y: number; size?: number; width?: number; gap?: number; step?: number; tone?: Tone;
}) {
  let top = y;
  return (
    <>
      {lines.map((l, k) => {
        const spec = typeof l === 'string' ? { t: l } : l;
        const s = spec.size ?? (spec.dim ? Math.round(size * 0.72) : size);
        const px = x + (spec.indent ?? 0);
        const fs = fitSize(spec.t, s, width - (spec.indent ?? 0));
        const yy = top;
        top += s * gap;
        return (
          <Rise key={k} on={on} x={px} y={yy} delay={k * step}>
            <div className="dw-line" style={{ fontSize: fs, color: spec.accent ? 'var(--accent)' : spec.dim ? ink2(tone) : ink(tone) }}>{spec.t}</div>
          </Rise>
        );
      })}
    </>
  );
}

/** Quote-like text that wraps. */
export function Quote({ on, children, x = 150, y, size = 80, width = 1500, tone = 'dark', delay }: {
  on: boolean; children: ReactNode; x?: number; y: number; size?: number; width?: number; tone?: Tone; delay?: number;
}) {
  return (
    <Rise on={on} x={x} y={y} delay={delay}>
      <div className="dw-quote" style={{ fontSize: size, width, color: ink(tone) }}>{children}</div>
    </Rise>
  );
}

/** An image placed on the stage. */
export function Img({ on, src, x, y, w, h, fit = 'contain', delay, style, alt = '' }: {
  on: boolean; src: string; x: number; y: number; w: number; h: number; fit?: 'contain' | 'cover'; delay?: number; style?: CSSProperties; alt?: string;
}) {
  return (
    <Rise on={on} x={x} y={y} delay={delay}>
      <img className="dw-img" src={asset(src)} alt={alt} draggable={false} style={{ width: w, height: h, objectFit: fit, ...style }} />
    </Rise>
  );
}

/** Lower-left caption over a photo: small mono line above a big title. */
export function Caption({ on, eyebrow, title, y = 760, size = 150 }: { on: boolean; eyebrow?: ReactNode; title: ReactNode; y?: number; size?: number }) {
  return (
    <>
      {eyebrow && <Eyebrow on={on} x={150} y={y - 20} color="var(--accent)">{eyebrow}</Eyebrow>}
      <Title on={on} x={150} y={y + 30} size={size} delay={120}>{title}</Title>
    </>
  );
}

/**
 * A silent clip. Plays while its beat is on screen, rewinds when it leaves. `?capture=1` (verify, shot) and the
 * presenter window show the poster instead: frames stay comparable and the presenter never plays a second copy.
 */
export function Clip({ on, name, x, y, w, h }: { on: boolean; name: string; x: number; y: number; w: number; h: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const still = flags.capture || flags.presenter;
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (on) void v.play().catch(() => undefined);
    else { v.pause(); try { v.currentTime = 0; } catch { /* not ready */ } }
  }, [on]);
  const poster = asset(`video/${name}.jpg`);
  return (
    <Rise on={on} x={x} y={y}>
      {still
        ? <img className="dw-clip" src={poster} alt="" draggable={false} style={{ width: w, height: h }} />
        : <video ref={ref} className="dw-clip" src={asset(`video/${name}.mp4`)} poster={poster} muted loop playsInline preload="auto" style={{ width: w, height: h }} />}
    </Rise>
  );
}

/** Two things facing each other with a VS between them. */
export function Versus({ on, left, right, y = 220, boxW = 620, boxH = 560, tone = 'dark' }: {
  on: boolean; left: string; right: string; y?: number; boxW?: number; boxH?: number; tone?: Tone;
}) {
  void tone;
  const lx = 480 - boxW / 2, rx = 1440 - boxW / 2;
  return (
    <>
      <Img on={on} src={left} x={lx} y={y} w={boxW} h={boxH} />
      <Img on={on} src="vs.webp" x={960 - 120} y={y + boxH / 2 - 103} w={240} h={206} delay={140} />
      <Img on={on} src={right} x={rx} y={y} w={boxW} h={boxH} delay={80} />
    </>
  );
}
