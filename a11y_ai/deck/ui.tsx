import { Reveal, Terminal, type TermLine } from 'beatdeck';

/** The Android screenshot frame used throughout: a real capture, never a redraw. */
export function Shot({ on, out, src, alt, x, y, h = 760, caption }: {
  on: boolean; out?: boolean; src: string; alt: string; x: number; y: number; h?: number; caption?: string;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <figure style={{ margin: 0 }}>
        <img src={src} alt={alt} style={{ height: h, display: 'block', border: '2px solid var(--hair-strong)', borderRadius: 18 }} />
        {caption && <figcaption className="t-meta" style={{ fontSize: 22, marginTop: 16, textTransform: 'none', letterSpacing: '0.02em' }}>{caption}</figcaption>}
      </figure>
    </Reveal>
  );
}

/** Real tool output or code, character-exact, from deck/captures.ts and deck/code.ts. */
export function Mono({ on, out, x, y, lines, size = 30, width }: {
  on: boolean; out?: boolean; x: number; y: number; lines: (string | TermLine)[]; size?: number; width?: number;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y}>
      <Terminal lines={lines} size={size} width={width} />
    </Reveal>
  );
}

/** Opening of a person's block: their colour, name, and what they use. */
export function PersonIntro({ on, out, name, color, line }: { on: boolean; out?: boolean; name: string; color: string; line: string }) {
  return (
    <>
      <Reveal on={on} out={out} x={150} y={330}>
        <div data-audit="off" style={{ borderLeft: `20px solid ${color}`, paddingLeft: 56 }}>
          <div className="t-statement" style={{ fontSize: 230, color }}>{name}</div>
          <div className="t-editorial" style={{ fontSize: 64, marginTop: 36, color: 'var(--ink-2)' }}>{line}</div>
        </div>
      </Reveal>
    </>
  );
}

/** Small label above the content of a beat. */
export function Eyebrow({ on, out, text, color = 'var(--accent)' }: { on: boolean; out?: boolean; text: string; color?: string }) {
  return (
    <Reveal on={on} out={out} x={158} y={110}>
      <div className="t-eyebrow" style={{ color }}>{'// '}{text}</div>
    </Reveal>
  );
}

/** One sentence that carries the beat. */
export function Say({ on, out, text, y = 190, size = 84, color }: { on: boolean; out?: boolean; text: string; y?: number; size?: number; color?: string }) {
  return (
    <Reveal on={on} out={out} x={150} y={y}>
      <div className="t-statement" style={{ fontSize: size, lineHeight: 1.05, color }}>{text}</div>
    </Reveal>
  );
}
