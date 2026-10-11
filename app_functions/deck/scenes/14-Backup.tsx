import { Reveal, Scene, Terminal, useScene } from 'beatdeck';
import { CAPTURES } from '../captures';
import { Eyebrow, Meta } from '../ui';

const H = '$ scripts/appfunctions-adb.sh';
/** One entry per beat: the commands shown and the capture that is their real output. */
const STEPS: { cmd: string[]; cap: string; note?: string }[] = [
  { cmd: [`${H} list`], cap: '01-list', note: 'functionId lines only' },
  { cmd: [`${H} search android 14:00`], cap: '02-search' },
  { cmd: [`${H} add t08 t09`], cap: '03-add' },
  { cmd: [`${H} add t08`], cap: '04-add-again', note: 'same call again: nothing added' },
  { cmd: [`${H} favourites`], cap: '05-favourites' },
  { cmd: [`${H} add nope`], cap: '06-add-unknown', note: 'unknown id: typed error' },
  { cmd: ["$ adb shell \"cmd app_function execute-app-function … '{\\\"confirmed\\\": false}'\""], cap: '07-clear-unconfirmed', note: 'clearFavorites without confirmed' },
  { cmd: [`${H} stop`, '', `${H} search android 15:30`], cap: '08-closed-app', note: 'app force-stopped, same call works' },
  { cmd: [`${H} disable searchTalks`, '', `${H} search android`], cap: '09-disabled', note: 'function disabled by the system' },
];

function Backup_() {
  const { here, b } = useScene();
  return (
    <>
      <Eyebrow on={here}>backup · real output, Pixel 9 Pro · Android 17 · alpha10</Eyebrow>
      {STEPS.map((st, i) => (
        <div key={st.cap}>
          <Reveal on={here && b === i} out={here && b > i} x={150} y={200} delay={150}>
            <Terminal size={26} lines={[...st.cmd, '', ...CAPTURES[st.cap]]} />
          </Reveal>
          {st.note && <Meta on={here && b === i} out={here && b > i} y={960} size={22} delay={400}>{st.note}{CAPTURES[st.cap].some((l) => l.startsWith('  ') && l.includes('See logcat') === false && st.cap >= '06' && st.cap !== '08-closed-app') ? ' · long lines wrapped' : ''}</Meta>}
        </div>
      ))}
    </>
  );
}

/** 14 BACKUP — real adb outputs, in case the live demo fails. Reach it with the overview (O). */
export const Backup = () => <Scene index={13}><Backup_ /></Scene>;
