import { Reveal, Scene, Terminal, useScene } from 'beatdeck';
import { BACKUP_STEPS } from '../backup-steps';
import { CAPTURES } from '../captures';
import { config } from '../deck.config';
import { Eyebrow, Meta } from '../ui';

function Backup_() {
  const { here, b } = useScene();
  return (
    <>
      <Eyebrow on={here}>respaldo · salida real · {config.libVersion}</Eyebrow>
      {BACKUP_STEPS.map((st, i) => (
        <div key={st.cap}>
          <Reveal on={here && b === i} out={here && b > i} x={150} y={200} delay={150}>
            <Terminal size={26} lines={[...st.cmd, '', ...CAPTURES[st.cap]]} />
          </Reveal>
          {(st.note || st.wrapped) && (
            <Meta on={here && b === i} out={here && b > i} y={960} size={22} delay={400}>
              {st.note}{st.wrapped ? (st.note ? ' · ' : '') + 'líneas largas partidas' : ''}
            </Meta>
          )}
        </div>
      ))}
    </>
  );
}

/** 14 BACKUP — real adb outputs, in case the live demo fails. Only present when captures exist; reach it with the overview (O). */
export const Backup = () => <Scene index={13}><Backup_ /></Scene>;
