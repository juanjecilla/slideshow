import { CAST, CONTENT, HYPE, STOCKS, money, type View } from './content';
import { config } from './deck.config';

/** Text equivalent of a beat, built from what is on screen. Never the speaker notes. */
function text(v: View): string {
  const join = (...p: (string | undefined)[]) => p.filter(Boolean).join(' ');
  switch (v.kind) {
    case 'standby': return 'La charla va a empezar.';
    case 'title': return join(v.title.join(' '), v.sub, v.author, v.eyebrow);
    case 'about': return join(v.eyebrow, `${v.name}.`, v.retitle ? `${v.role}, tachado: ${v.retitle}. ${v.tail}.` : `${v.role}. ${v.tail}.`, v.items.join('. ') + '.');
    case 'reference': return join(v.eyebrow, v.say.join(' '), v.image ? v.alt : undefined);
    case 'hype': return join(v.eyebrow, v.say + '.', v.mode === 'cycle'
      ? `Curva de expectativas en el tiempo: ${HYPE.phases.slice(0, [2, 3, 5][v.step - 1]).map((p) => p.join(' ')).join(', ')}.`
      : `Curva de expectativas en el tiempo: en vez de caer, vuelve a subir ${v.step - 1} veces.`, v.caveat, `Fuente: ${v.credit}.`);
    case 'stock': return join(v.eyebrow, v.say + '.', `${STOCKS[v.data].ipoLabel}.`, STOCKS[v.data].points.map((p) => `${p.when}: ${money(p.usd)}.`).join(' '), v.caveat, `Fuente: ${v.credit}.`);
    case 'questions': return join(v.title, v.big + '.');
    case 'sources': return join(v.eyebrow, v.items.map((i) => `${i.what}: ${i.url}, ${i.checked}.`).join(' '));
    case 'finale': return v.step === 1 ? join(v.presents + ':', v.card.join(' ') + '.') : join(v.say.join(' '), v.punch);
    case 'wheel': return join(v.eyebrow, v.say.join(' '), `Una rueda con ${v.stops.join(', ')}. ${v.here}: ${v.stops[v.at]}, ${v.latest}.`);
    case 'previously': return join(v.eyebrow, v.lines.join(' '));
    case 'statement': return join(v.eyebrow, v.say.join(' '), v.sub, v.stamp, v.credit && `Fuente: ${v.credit}.`);
    case 'numbers': return join(v.eyebrow, v.say, v.rows.map((r) => `${r.big} ${r.label}.`).join(' '), v.caveat, v.credit && `Fuente: ${v.credit}.`);
    case 'quote': return join(v.eyebrow, v.quote, v.by, v.sub, v.credit && `Fuente: ${v.credit}.`);
    case 'chapter': return join(v.n, v.title, v.line);
    case 'cast': return join('El reparto:', CAST.join(', ') + '.', v.desc && `${CAST[v.lit]}: ${v.desc}`);
    case 'list': return join(v.eyebrow, v.say, v.items.join('. '), v.foot, v.stamp, v.credit && `Fuente: ${v.credit}.`);
    case 'todo': return join('Pendiente.', v.eyebrow, v.what);
    case 'qr': return join(v.eyebrow, v.say.join(' '), `Código QR a ${config.qrUrl}.`);
  }
}

/** `<scene id>.<beat name>` → announcement (LiveRegion). */
export const SR: Record<string, string> = Object.fromEntries(
  CONTENT.flatMap((s) => s.beats.map((b) => [`${s.id}.${b.name}`, text(b.v)] as const)),
);
