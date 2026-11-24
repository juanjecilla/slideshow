import { useEffect } from 'react';
import { CodeBlock, flags, reducedMotion, Reveal, useScene, type Lang, type TermLine } from 'beatdeck';

/** The scene's beat predicates, so each scene reads as a list of beats. */
export function useBeat() {
  const { here, b, entry } = useScene();
  return {
    here, b, entry,
    /** exactly beat k */ at: (k: number) => here && b === k,
    /** the story moved past beat k */ gone: (k: number) => here && b > k,
    /** from beat a to beat z, both included */ span: (a: number, z: number) => here && b >= a && b <= z,
  };
}

/** Small label above the content of a beat. */
export function Eyebrow({ on, out, text, y = 110 }: { on: boolean; out?: boolean; text: string; y?: number }) {
  return (
    <Reveal on={on} out={out} x={150} y={y}>
      <div className="t-eyebrow">{'// '}{text}</div>
    </Reveal>
  );
}

/** One sentence that carries the beat. */
export function Say({ on, out, text, x = 150, y = 190, size = 96, color }: {
  on: boolean; out?: boolean; text: string; x?: number; y?: number; size?: number; color?: string;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className="t-statement" style={{ fontSize: size, lineHeight: 1.05, color }}>{text}</div>
    </Reveal>
  );
}

/** Poster type: the display face (Rye). Titles and the lema only. */
export function Western({ on, out, text, x = 150, y = 300, size = 200, color, align = 'left' }: {
  on: boolean; out?: boolean; text: string; x?: number; y?: number; size?: number; color?: string; align?: 'left' | 'center';
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y} style={align === 'center' ? { width: 1920 - 2 * x, textAlign: 'center' } : undefined}>
      <div className="t-western" style={{ fontSize: size, color }}>{text}</div>
    </Reveal>
  );
}

/** A line of body copy, mid-size. */
export function Line({ on, out, text, x = 150, y, size = 56, dim }: {
  on: boolean; out?: boolean; text: string; x?: number; y: number; size?: number; dim?: boolean;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className="t-editorial" style={{ fontSize: size, color: dim ? 'var(--ink-2)' : undefined, maxWidth: 1920 - x - 150 }}>{text}</div>
    </Reveal>
  );
}

/**
 * Title card of a part of the talk, inverted like a film intertitle: night ground, sand type.
 * `part` is the original deck's section ("1 · The problem"), `name` the western title ("The Bad").
 */
export function Intertitle({ on, out, part, name }: { on: boolean; out?: boolean; part: string; name: string }) {
  // The deck chrome (title // scene, beat ticks) is dark ink: while a night card is up it switches to sand (themes/western.css).
  useEffect(() => {
    if (!on || out) return;
    document.documentElement.dataset.night = '1';
    return () => { delete document.documentElement.dataset.night; };
  }, [on, out]);
  return (
    <Reveal on={on} out={out} x={0} y={0} rise={0} className="night" style={{ width: 1920, height: 1080 }}>
      <div className="t-eyebrow" style={{ position: 'absolute', left: 150, top: 130 }}>{part}</div>
      <div className="poster-rule" style={{ position: 'absolute', left: 150, right: 150, top: 200, borderColor: 'var(--night-accent)' }} />
      <div className="t-western" style={{ position: 'absolute', left: 150, top: 380, fontSize: 280 }}>{name}</div>
      <div className="poster-rule" style={{ position: 'absolute', left: 150, right: 150, bottom: 150, borderColor: 'var(--night-accent)' }} />
    </Reveal>
  );
}

/**
 * Code (or real output), character-exact, from deck/code.ts and deck/docs-code.ts, in a syntax-highlighted window frame.
 * `fit` shrinks the text so the frame never leaves the stage (x → `right`, default the right margin).
 */
export function Mono({ on, out, x = 150, y, lines, size = 30, width, title, lang = 'kotlin', right, fit = true }: {
  on: boolean; out?: boolean; x?: number; y: number; lines: readonly (string | TermLine)[]; size?: number; width?: number;
  title?: string; lang?: Lang; right?: number; fit?: boolean;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <CodeBlock lines={[...lines]} lang={lang} file={title} size={size}
        fit={fit ? { x, y, right } : undefined}
        style={{ ...(width ? { width } : {}), ...(!fit && right ? { maxWidth: right - x } : {}) }} />
    </Reveal>
  );
}

/** Where a snippet comes from, set small under it: "MuvissApp.kt:339-340". */
export function Src({ on, out, x = 150, y, text }: { on: boolean; out?: boolean; x?: number; y: number; text: string }) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className="t-meta" style={{ fontSize: 24, textTransform: 'none', letterSpacing: '0.02em' }}>{text}</div>
    </Reveal>
  );
}

/**
 * A capture or clip of Muviss. Until the file exists, a dashed placeholder says what is missing:
 * the audit and the final report list every one of these as TODO(capture).
 */
export function Capture({ on, out, x, y, w, h, src, video, label, todo }: {
  on: boolean; out?: boolean; x: number; y: number; w: number; h: number; src?: string; video?: boolean; label: string; todo: string;
}) {
  // Verify/screenshots (`?capture=1`) and reduced motion get the first frame, not a playing clip.
  const still = flags.capture || reducedMotion.get();
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <figure style={{ margin: 0 }}>
        {src ? (
          video ? (
            <video src={src} width={w} height={h} muted loop playsInline autoPlay={!still} preload="auto" aria-label={label}
              style={{ display: 'block', border: '3px solid var(--ink)', background: 'var(--surface)' }} />
          ) : (
            <img src={src} width={w} height={h} alt={label}
              style={{ display: 'block', objectFit: 'contain', border: '3px solid var(--ink)', background: 'var(--surface)' }} />
          )
        ) : (
          <div data-audit="off" style={{ width: w, height: h, boxSizing: 'border-box', border: '3px dashed var(--hair-strong)', padding: 32 }}>
            <span className="t-eyebrow">TODO · capture</span>
            <div className="t-editorial" style={{ fontSize: 34, marginTop: 16, color: 'var(--ink-2)' }}>{todo}</div>
          </div>
        )}
        <figcaption className="t-meta" style={{ fontSize: 22, marginTop: 14, textTransform: 'none', letterSpacing: '0.02em' }}>{label}</figcaption>
      </figure>
    </Reveal>
  );
}

/**
 * A list in normal flow, so an item that wraps never overlaps the next. Item i shows from beat `from + i`
 * (or all from `from` when `together`); the list leaves after beat `to` (default: the last item's beat).
 */
export function Bullets({ here, b, from, items, x = 150, y = 300, size = 64, gap = 36, to, together }: {
  here: boolean; b: number; from: number; items: readonly string[]; x?: number; y?: number; size?: number; gap?: number; to?: number; together?: boolean;
}) {
  const last = to ?? (together ? from : from + items.length - 1);
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: 1920 - x - 150, display: 'flex', flexDirection: 'column', gap }}>
      {items.map((t, i) => (
        <Reveal key={t} on={here && b >= (together ? from : from + i) && b <= last} out={here && b > last}>
          <div className="t-editorial" style={{ fontSize: size }}>
            <span style={{ color: 'var(--ochre)', marginRight: 28 }}>★</span>{t}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Silhouette of a device, drawn, never a photo. Sizes are illustrative, not dp. */
export function Device({ on, out, x, y, w, h, label, fold, desk }: {
  on: boolean; out?: boolean; x: number; y: number; w: number; h: number; label: string; fold?: boolean; desk?: boolean;
}) {
  const r = desk ? 10 : 28;
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div data-audit="off" style={{ position: 'relative', width: w, height: h, border: '8px solid var(--ink)', borderRadius: r, background: 'var(--surface)' }}>
        {fold && <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 8, marginLeft: -4, background: 'var(--ink)' }} />}
        {desk && <div style={{ position: 'absolute', left: '50%', bottom: -64, width: 120, height: 56, marginLeft: -60, background: 'var(--ink)' }} />}
      </div>
      <div className="t-meta" style={{ marginTop: desk ? 90 : 26, fontSize: 28, textAlign: 'center', width: w }}>{label}</div>
    </Reveal>
  );
}
