import { CAST, CONTENT, type View } from './content';
import { config } from './deck.config';

/** Text equivalent of a beat, built from what is on screen. Never the speaker notes. */
function text(v: View): string {
  const join = (...p: (string | undefined)[]) => p.filter(Boolean).join(' ');
  switch (v.kind) {
    case 'standby': return join(v.eyebrow, v.line);
    case 'title': return join(v.title.join(' '), v.sub, v.author, v.eyebrow);
    case 'previously': return join(v.eyebrow, v.lines.join(' '));
    case 'statement': return join(v.eyebrow, v.say.join(' '), v.sub, v.stamp, v.credit && `Source: ${v.credit}.`);
    case 'numbers': return join(v.eyebrow, v.say, v.rows.map((r) => `${r.big} ${r.label}.`).join(' '), v.caveat, v.credit && `Source: ${v.credit}.`);
    case 'quote': return join(v.eyebrow, v.quote, v.by, v.sub, v.credit && `Source: ${v.credit}.`);
    case 'chapter': return join(v.n, v.title, v.line);
    case 'cast': return join('The cast:', CAST.join(', ') + '.', v.desc && `${CAST[v.lit]}: ${v.desc}`);
    case 'list': return join(v.eyebrow, v.say, v.items.join('. '), v.foot, v.stamp, v.credit && `Source: ${v.credit}.`);
    case 'todo': return join('To do.', v.eyebrow, v.what);
    case 'qr': return join(v.eyebrow, v.say.join(' '), `QR code to ${config.qrUrl}.`);
  }
}

/** `<scene id>.<beat name>` → announcement (LiveRegion). */
export const SR: Record<string, string> = Object.fromEntries(
  CONTENT.flatMap((s) => s.beats.map((b) => [`${s.id}.${b.name}`, text(b.v)] as const)),
);
