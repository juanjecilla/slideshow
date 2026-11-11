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
  { id: '01', title: 'Prologue', beats: prologue.defs },
  { id: '02', title: 'The Ego', beats: ego.defs },
  { id: '03', title: 'Opinionated opinions', beats: opiniones.defs },
  { id: '04', title: 'The temple of wisdom', beats: templo.defs },
  { id: '05', title: 'The ivory tower architect', beats: marfil.defs },
  { id: '06', title: 'The dark side of leadership', beats: oscuro.defs },
  { id: '07', title: 'A new hope', beats: esperanza.defs },
  { id: '08', title: 'Close', beats: cierre.defs },
];
