import { CAST, CONTENT, HYPE, STOCKS, type View } from './content';
import { config } from './deck.config';

/** Text equivalent of a beat, built from what is on screen. Never the speaker notes. */
function text(v: View): string {
  const join = (...p: (string | undefined)[]) => p.filter(Boolean).join(' ');
  switch (v.kind) {
    case 'standby': return 'Talk starting.';
    case 'title': return join(v.title.join(' '), v.sub, v.author, v.eyebrow);
    case 'about': return join(v.eyebrow, `${v.name}.`, `${v.role}.`, v.items.join('. ') + '.');
    case 'reference': return join(v.eyebrow, v.say.join(' '), v.image ? v.alt : undefined);
    case 'hype': return join(v.eyebrow, v.say + '.', v.mode === 'cycle'
      ? `Curve of expectations over time: ${HYPE.phases.slice(0, [2, 3, 5][v.step - 1]).map((p) => p.join(' ')).join(', ')}.`
      : `Curve of expectations over time: instead of falling, it climbs again ${v.step - 1} time(s).`, v.caveat, `Source: ${v.credit}.`);
    case 'stock': return join(v.eyebrow, v.say + '.', `${STOCKS[v.data].ipoLabel}.`, STOCKS[v.data].points.map((p) => `${p.when}: $${p.usd}.`).join(' '), v.caveat, `Source: ${v.credit}.`);
    case 'questions': return join(v.title, v.big + '.');
    case 'sources': return join(v.eyebrow, v.items.map((i) => `${i.what}: ${i.url}, ${i.checked}.`).join(' '));
    case 'finale': return v.step === 1 ? join(v.presents + ':', v.card.join(' ') + '.') : join(v.say.join(' '), v.punch);
    case 'wheel': return join(v.eyebrow, v.say.join(' '), `A wheel with ${v.stops.join(', ')}. ${v.here}: ${v.stops[v.at]}, ${v.latest}.`);
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
