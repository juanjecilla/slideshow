import { CAPTURES } from './captures';

const H = '$ scripts/appfunctions-adb.sh';

/** Every backup step the talk can show. A step is active only if its real capture exists (docs/captures in the demo repo). */
const ALL: { name: string; cmd: string[]; cap: string; note?: string; wrapped?: boolean }[] = [
  { name: 'list', cmd: [`${H} list`], cap: '01-list', note: 'functionId lines only' },
  { name: 'search', cmd: [`${H} search ai 15:00`], cap: '02-search', note: 'the AI talks after lunch' },
  { name: 'add', cmd: [`${H} add t15 t21`], cap: '03-add' },
  { name: 'add again', cmd: [`${H} add t15`], cap: '04-add-again', note: 'same call again: nothing added' },
  { name: 'favourites', cmd: [`${H} favourites`], cap: '05-favourites' },
  { name: 'unknown id', cmd: [`${H} add nope`], cap: '06-add-unknown', note: 'unknown id: typed error', wrapped: true },
  {
    name: 'clear without confirmed',
    cmd: ["$ adb shell \"cmd app_function execute-app-function … '{\\\"confirmed\\\": false}'\""],
    cap: '07-clear-unconfirmed', note: 'clearFavorites without confirmed', wrapped: true,
  },
  { name: 'closed app', cmd: [`${H} stop`, '', `${H} search "" "" gema`], cap: '08-closed-app', note: 'app force-stopped, same call works' },
  { name: 'disabled', cmd: [`${H} disable searchTalks`, '', `${H} search ai`], cap: '09-disabled', note: 'function disabled by the system', wrapped: true },
  { name: 'unconfirmed slot', cmd: [`${H} search demo 18:00`], cap: '10-tbc', note: 'what is at 18:15? a slot still to be confirmed' },
];

export const BACKUP_STEPS = ALL.filter((s) => CAPTURES[s.cap]?.length);
