import { CAPTURES } from './captures';

const H = '$ scripts/appfunctions-adb.sh';

/** Todos los pasos de respaldo posibles. Un paso solo está activo si existe su captura real (docs/captures en el repo de la demo). */
const ALL: { name: string; cmd: string[]; cap: string; note?: string; wrapped?: boolean }[] = [
  { name: 'lista', cmd: [`${H} list`], cap: '01-list', note: 'solo las líneas functionId' },
  { name: 'búsqueda', cmd: [`${H} search ai 15:00`], cap: '02-search', note: 'las charlas de IA después de comer', wrapped: true },
  { name: 'añadir', cmd: [`${H} add t15 t21`], cap: '03-add' },
  { name: 'añadir otra vez', cmd: [`${H} add t15`], cap: '04-add-again', note: 'la misma llamada: no se añade nada' },
  { name: 'favoritos', cmd: [`${H} favourites`], cap: '05-favourites', wrapped: true },
  { name: 'ID desconocido', cmd: [`${H} add nope`], cap: '06-add-unknown', note: 'ID desconocido: error tipado', wrapped: true },
  {
    name: 'clear sin confirmed',
    cmd: ["$ adb shell \"cmd app_function execute-app-function … '{\\\"confirmed\\\": false}'\""],
    cap: '07-clear-unconfirmed', note: 'clearFavorites sin confirmed', wrapped: true,
  },
  { name: 'app cerrada', cmd: [`${H} stop`, '', `${H} search "" "" gema`], cap: '08-closed-app', note: 'app detenida a la fuerza, la misma llamada funciona' },
  { name: 'deshabilitada', cmd: [`${H} disable searchTalks`, '', `${H} search ai`], cap: '09-disabled', note: 'función deshabilitada por el sistema', wrapped: true },
  { name: 'hueco por confirmar', cmd: [`${H} search demo 18:00`], cap: '10-tbc', note: '¿qué hay a las 18:15? un hueco aún por confirmar' },
];

export const BACKUP_STEPS = ALL.filter((s) => CAPTURES[s.cap]?.length);
