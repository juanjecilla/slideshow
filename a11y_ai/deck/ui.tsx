import { useEffect, useRef } from 'react';
import { CodeBlock, flags, reducedMotion, Reveal, type Lang, type TermLine } from 'beatdeck';
import type { Ov } from './overlays';

/** A tool panel: a title bar and a body. Where code, tool output and notes live. */
/** The GitHub mark (simple-icons), in the current text colour. Decorative: the text next to it says what it is. */
export function GithubMark({ size = 30 }: { size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ flex: 'none' }}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/** `center` puts the title in the middle of the header and leaves out the window dots (they would collide with a long title). */
export function Panel({ title, children, style, center = false }: { title?: React.ReactNode; children: React.ReactNode; style?: React.CSSProperties; center?: boolean }) {
  return (
    <div className="panel" style={style}>
      {title && (center
        ? (
          <div className="panel-head" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>{title}</span>
          </div>
        )
        : <div className="panel-head"><i /><i /><i /><span style={{ marginLeft: 8 }}>{title}</span></div>)}
      <div className="panel-body">{children}</div>
    </div>
  );
}

/** Real tool output or code, character-exact (deck/captures.ts, deck/code.ts), in a panel. */
export function Mono({ on, out, x, y, lines, size = 28, width, title, lang = 'term', fit = true, right }: {
  on: boolean; out?: boolean; x: number; y: number; lines: (string | TermLine)[]; size?: number; width?: number; title?: string; lang?: Lang; fit?: boolean; right?: number;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <CodeBlock lines={lines} lang={lang} file={title} size={size} fit={fit ? { x, y, right } : undefined} style={{ ...(width ? { width } : {}), ...(!fit && right ? { maxWidth: right - x } : {}) }} />
    </Reveal>
  );
}

const TONE: Record<Ov['tone'], string> = { bad: 'bad', ok: 'ok', info: 'info' };

/** A real Android screenshot in a device, with boxes and labels drawn over it from the UiAutomator bounds. */
export function Phone({ on, out, src, alt, x, y, h = 860, overlays = [], boxes = false, bezel = 15, aspect = 1080 / 2424 }: {
  on: boolean; out?: boolean; src: string; alt: string; x: number; y: number; h?: number; overlays?: Ov[]; boxes?: boolean; bezel?: number;
  /** width / height of the image; the emulator captures are 1080x2424, the cropped Pixel captures 960x1990 */
  aspect?: number;
}) {
  const w = Math.round(h * aspect);
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className="phone" style={{ padding: bezel }}>
        <div className="phone-screen" style={{ width: w, height: h }}>
          <img src={src} alt={alt} />
        </div>
        {overlays.map((o, i) => (
          <div
            key={i}
            className={`ov ${TONE[o.tone]}`}
            style={{
              left: bezel + o.x * w, top: bezel + o.y * h, width: o.w * w, height: o.h * h,
              opacity: boxes ? 1 : 0, transform: boxes ? 'none' : 'scale(1.06)',
            }}
          >
            <span className={`ov-label${o.below ? ' below' : ''}`}>{o.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/**
 * The recorded TalkBack clip (with sound) in a device frame. It plays when its beat is on screen and rewinds when the
 * beat leaves. Verify/screenshots (`?capture=1`) and reduced motion get the first frame, not a playing clip. The sound
 * needs a user gesture before the page can play it: advancing the beat with a key or a click counts; if the browser
 * still refuses, the native controls are there.
 */
export function TalkBackClip({ on, out, x, y, src, label, h = 860, bezel = 15, aspect = 540 / 1120 }: {
  on: boolean; out?: boolean; x: number; y: number; src: string; label: string; h?: number; bezel?: number; aspect?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const still = flags.capture || reducedMotion.get();
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (on && !still) { v.currentTime = 0; v.play().catch(() => { /* autoplay with sound refused: controls stay available */ }); }
    else { v.pause(); v.currentTime = 0; }
  }, [on, still]);
  const w = Math.round(h * aspect);
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className="phone" style={{ padding: bezel }}>
        <div className="phone-screen" style={{ width: w, height: h }}>
          <video ref={ref} src={src} playsInline preload="auto" controls aria-label={label} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'fill' }} />
        </div>
      </div>
    </Reveal>
  );
}

/** A row of coloured chips. */
export function Chip({ on, out, x, y, text, tone }: { on: boolean; out?: boolean; x: number; y: number; text: string; tone?: 'bad' | 'ok' | 'info' }) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <span className={`chip${tone ? ` ${tone}` : ''}`}>{text}</span>
    </Reveal>
  );
}

/** What the beat is about, in one line, above the content. */
export function Eyebrow({ on, out, text }: { on: boolean; out?: boolean; text: string; color?: string }) {
  return (
    <Reveal on={on} out={out} x={120} y={112}>
      <div className="t-eyebrow">{text}</div>
    </Reveal>
  );
}

/** The sentence that carries the beat. */
export function Say({ on, out, text, y = 160, size = 64, color, x = 120 }: { on: boolean; out?: boolean; text: string; y?: number; size?: number; color?: string; x?: number }) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <div className="t-statement" style={{ fontSize: size, color }}>{text}</div>
    </Reveal>
  );
}

/** Opening of a person's block: their colour as a bar and a big name, a one-line promise. */
export function PersonIntro({ on, out, name, color, line }: { on: boolean; out?: boolean; name: string; color: string; line: string }) {
  return (
    <Reveal on={on} out={out} x={120} y={330}>
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ width: 26, background: color, borderRadius: 13 }} />
        <div>
          <div className="t-statement" style={{ fontSize: 190, color }}>{name}</div>
          <div className="t-editorial" style={{ fontSize: 60, marginTop: 28, color: 'var(--ink-2)', maxWidth: 1100 }}>{line}</div>
        </div>
      </div>
    </Reveal>
  );
}
