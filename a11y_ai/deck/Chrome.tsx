import { deck, useDeck } from 'beatdeck';

const PERSON: Record<string, string> = { '06': 'var(--blind)', '07': 'var(--lowvision)', '08': 'var(--cognitive)', '09': 'var(--motor)' };

/** The tool bar: the talk's name, where you are, and one tick per beat. */
export function InspectorChrome({ black }: { black: boolean }) {
  const d = useDeck((st) => ({ s: st.scene, b: st.beat }));
  const sc = deck.scenes[d.s];
  const hidden = black || d.s === 0;
  return (
    <div className="layer chrome" style={{ opacity: hidden ? 0 : 1 }}>
      <div style={{ position: 'absolute', left: 120, top: 36, display: 'flex', alignItems: 'center', gap: 16, font: '600 22px var(--font-sans)', color: 'var(--ink-2)' }}>
        <span style={{ width: 14, height: 14, borderRadius: 4, background: PERSON[sc.id] ?? 'var(--accent)' }} />
        <span>{deck.def.title}</span>
        <span style={{ color: 'var(--ink-3)' }}>›</span>
        <span style={{ color: 'var(--ink)' }}>{sc.id} {sc.title.toLowerCase()}</span>
      </div>
      <div className="chrome-ticks">
        {sc.beats.map((_, i) => (
          <span key={i} className={i === d.b ? 'here' : i < d.b ? 'done' : ''} />
        ))}
      </div>
    </div>
  );
}
