import { flags, reducedMotion, Reveal } from 'beatdeck';
import './standby.css';

const FORMS = ['Móvil', 'Plegable', 'Tablet', 'Escritorio'] as const;

/**
 * 01.standby while people join: one window that never stops resizing — phone, foldable, tablet, desktop — and
 * relayouts its own content (rail ↔ bottom bar, one column ↔ two). An endless loop, no clock: the talk is online and
 * its start is the speaker's click. Verify/screenshots (`?capture=1`), reduced motion and print get one still frame
 * (the tablet size), so captures are deterministic and nothing moves for people who asked for that.
 * Aria-hidden like the rest of the stage; the live region says "La charla va a empezar."
 */
export function Standby({ on, out }: { on: boolean; out?: boolean }) {
  const still = flags.capture || reducedMotion.get();
  return (
    <Reveal on={on} out={out} x={0} y={0} rise={0}>
      <div className={`sb${still ? ' sb-still' : ''}`} aria-hidden="true">
        <div className="sb-win">
          <div className="sb-rail" />
          <div className="sb-main">
            <div className="sb-body">
              <div className="sb-poster" />
              <div className="sb-text"><i /><i /><i /></div>
            </div>
            <div className="sb-bar" />
          </div>
        </div>
        <div className="sb-labels">
          {FORMS.map((f, i) => <span key={f} className={`sb-label sb-l${i}`}>{f}</span>)}
        </div>
      </div>
    </Reveal>
  );
}
