import { Reveal, Scene } from 'beatdeck';
import { SCENES } from '../scenes';

/** Scenes whose content depends on docs/AUDIT.md (checkpoint ~3 Nov). They keep the numbering stable until then. */
function Todo({ index, color }: { index: number; color: string }) {
  const s = SCENES[index];
  return (
    <>
      <Reveal on x={150} y={400}>
        <div data-audit="off" style={{ borderLeft: `18px solid ${color}`, paddingLeft: 48 }}>
          <div className="t-statement" style={{ fontSize: 170, color }}>{s.title}</div>
          <div className="t-meta" style={{ fontSize: 30, marginTop: 28 }}>TODO · built after the audit (docs/AUDIT.md)</div>
        </div>
      </Reveal>
    </>
  );
}

const layer = (index: number, color: string) => () => (
  <Scene index={index}><Todo index={index} color={color} /></Scene>
);

export const Blind = layer(5, 'var(--blind)');
export const LowVision = layer(6, 'var(--lowvision)');
export const Cognitive = layer(7, 'var(--cognitive)');
export const Motor = layer(8, 'var(--motor)');
export const ShiftLeft = layer(9, 'var(--accent)');
export const Backup = layer(13, 'var(--ink-2)');
