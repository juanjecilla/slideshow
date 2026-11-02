import { tokenize, type Lang } from './syntax';

export interface CodeMark { text: string; nth?: number; on?: boolean; label?: string; row?: 0 | 1 }
export interface CodeLine { t: string; marks?: CodeMark[]; labels?: 0 | 1 | 2; on?: boolean; dim?: boolean }

/**
 * A syntax-highlighted code or terminal block inside a "terminal window" frame (title bar + hairline box).
 * Same line model as the engine's `Terminal` (marks underline a substring and hang a label under it) so the text stays
 * character-exact: highlighting only adds colour. Lines that are not code (e.g. blank) keep their height.
 */
export function CodeBlock({ lines, lang = 'kotlin', size = 28, x, y, file, className, fit }: {
  lines: (string | CodeLine)[]; lang?: Lang; size?: number; x?: number; y?: number; file?: string; className?: string;
  /**
   * Where the block sits on the stage (its wrapper's x / y). The font shrinks, if needed, so the frame ends above the footer
   * (`bottom`, default 975) and inside the right margin (`right`, default 1790). `size` is the maximum.
   */
  fit?: { x: number; y: number; right?: number; bottom?: number };
}) {
  const ls: CodeLine[] = lines.map((l) => (typeof l === 'string' ? { t: l } : l));
  if (fit) {
    const rows = ls.reduce((n, l) => n + 1.5 + (l.labels ?? 0) * 1.25, 0);
    const cols = Math.max(...ls.map((l) => l.t.length), 1);
    const byHeight = ((fit.bottom ?? 975) - fit.y - 112) / rows;      // bar 54 + body padding 56 + borders 2
    const byWidth = ((fit.right ?? 1790) - fit.x - 82) / (cols * 0.6); // body padding 80 + borders; JetBrains Mono advance ≈ 0.6 em
    size = Math.max(20, Math.floor(Math.min(size, byHeight, byWidth)));
  }
  const toks = tokenize(ls.map((l) => l.t), lang);
  return (
    <div className={`cb${className ? ` ${className}` : ''}`} style={{ position: x != null || y != null ? 'absolute' : undefined, left: x, top: y }}>
      <div className="cb-bar">
        <span className="cb-dots"><i /><i /><i /></span>
        <span className="cb-file">{file ?? lang}</span>
      </div>
      <div className="cb-body bd-term" style={{ fontSize: size }}>
        {ls.map((l, li) => {
          // character-level kind map, then cut at mark boundaries
          const text = l.t;
          const marks = (l.marks ?? []).map((m) => {
            let i = -1;
            for (let k = 0; k <= (m.nth ?? 0); k++) i = text.indexOf(m.text, i + 1);
            if (i < 0) throw new Error(`CodeBlock: mark "${m.text}" not found in "${text}"`);
            return { m, i, j: i + m.text.length };
          });
          const pieces: { s: string; k: string; mark: number }[] = [];
          let pos = 0;
          for (const t of toks[li]) {
            let a = pos; const end = pos + t.s.length;
            const cuts = marks.flatMap((mk) => [mk.i, mk.j]).filter((c) => c > a && c < end).sort((p, q) => p - q);
            for (const c of [...cuts, end]) {
              const mi = marks.findIndex((mk) => a >= mk.i && a < mk.j);
              pieces.push({ s: text.slice(a, c), k: t.k, mark: mi });
              a = c;
            }
            pos = end;
          }
          const groups: { mark: number; items: typeof pieces }[] = [];
          for (const p of pieces) {
            const g = groups[groups.length - 1];
            if (g && g.mark === p.mark && p.mark >= 0) g.items.push(p); else groups.push({ mark: p.mark, items: [p] });
          }
          return (
            <div key={li} className={`bd-term-line${l.dim ? ' dim' : ''}`} style={{ paddingBottom: `${(l.labels ?? 0) * 1.25}em`, opacity: l.on === false ? 0 : undefined }}>
              {groups.map((g, gi) => {
                const inner = g.items.map((p, pi) => <span key={pi} className={`tk-${p.k}`}>{p.s}</span>);
                if (g.mark < 0) return <span key={gi}>{inner}</span>;
                const mk = marks[g.mark].m;
                return <span key={gi} className={`bd-mk${mk.on ?? true ? ' on' : ''}${mk.row ? ' r1' : ''}`} data-label={mk.label ?? ''}>{inner}</span>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
