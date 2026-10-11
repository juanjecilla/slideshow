import { Reveal } from 'beatdeck';

/** Small mono eyebrow at the top-left of a scene: `// text`. */
export function Eyebrow({ on, out, children, y = 96 }: { on: boolean; out?: boolean; children: React.ReactNode; y?: number }) {
  return (
    <Reveal on={on} out={out} x={158} y={y}>
      <div className="t-eyebrow">// {children}</div>
    </Reveal>
  );
}

/** Big statement. `lines` are rendered with explicit breaks (nowrap). */
export function Statement({ on, out, x = 150, y, size = 120, delay = 0, children }: {
  on: boolean; out?: boolean; x?: number; y: number; size?: number; delay?: number; children: React.ReactNode;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y} delay={delay} ms={1000}>
      <div className="t-statement" style={{ fontSize: size, lineHeight: 1 }}>{children}</div>
    </Reveal>
  );
}

/** Supporting line in the mono meta voice. */
export function Meta({ on, out, x = 158, y, size = 30, delay = 0, children, width }: {
  on: boolean; out?: boolean; x?: number; y: number; size?: number; delay?: number; children: React.ReactNode; width?: number;
}) {
  return (
    <Reveal on={on} out={out} x={x} y={y} delay={delay}>
      <div className="t-meta" style={{ fontSize: size, width, lineHeight: 1.35 }}>{children}</div>
    </Reveal>
  );
}

export const G = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--accent)' }}>{children}</span>;
export const A = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--agent)' }}>{children}</span>;
