import { CodeBlock, Reveal, type Lang, type TermLine } from 'beatdeck';
import type { Ov } from './overlays';

/** A tool panel: a title bar and a body. Where code, tool output and notes live. */
export function Panel({ title, children, style }: { title?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="panel" style={style}>
      {title && <div className="panel-head"><i /><i /><i /><span style={{ marginLeft: 8 }}>{title}</span></div>}
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
export function Phone({ on, out, src, alt, x, y, h = 860, overlays = [], boxes = false, bezel = 15 }: {
  on: boolean; out?: boolean; src: string; alt: string; x: number; y: number; h?: number; overlays?: Ov[]; boxes?: boolean; bezel?: number;
}) {
  const w = Math.round((h * 1080) / 2424);
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
