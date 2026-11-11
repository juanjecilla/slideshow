import type { SceneDef } from 'beatdeck';
import { prologue } from './scenes/01-Prologue';
import { ego } from './scenes/02-Ego';
import { opiniones } from './scenes/03-Opiniones';
import { templo } from './scenes/04-Templo';
import { marfil } from './scenes/05-Marfil';
import { oscuro } from './scenes/06-Oscuro';
import { esperanza } from './scenes/07-Esperanza';
import { cierre } from './scenes/08-Cierre';

/**
 * The talk's beat map. One click = one beat. `ref` = where it comes from in the Google Slides deck given at
 * Codemotion Madrid 2026 (slide numbers of this deck's own numbering, see docs/CONTENT-AUDIT.md).
 */
export const SCENES: SceneDef[] = [
  { id: '01', title: 'Prólogo', beats: prologue.defs },
  { id: '02', title: 'El Ego', beats: ego.defs },
  { id: '03', title: 'Opiniones opinionadas', beats: opiniones.defs },
  { id: '04', title: 'El templo de la sabiduría', beats: templo.defs },
  { id: '05', title: 'El arquitecto de marfil', beats: marfil.defs },
  { id: '06', title: 'El lado oscuro del liderazgo', beats: oscuro.defs },
  { id: '07', title: 'Una nueva esperanza', beats: esperanza.defs },
  { id: '08', title: 'Cierre', beats: cierre.defs },
];
