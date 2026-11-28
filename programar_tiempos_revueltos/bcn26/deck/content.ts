/**
 * Todo el texto de la charla. Edición en español (bcn26), hecha desde el Base deck inglés (../deck/content.ts).
 * Los `name` son identificadores: no se traducen.
 *
 * Reglas (../docs/DECISIONS.md, ../docs/research.md):
 *  - Solo datos reales: cada cifra tiene un id ✅ en `ref`; su matiz obligatorio va en el mismo beat o en el siguiente.
 *  - Un beat con una cifra de Manfred lleva la línea de crédito (CC BY-NC 4.0).
 *  - `note` = apunte del ponente, nunca se muestra ni se anuncia.
 */

export type Row = { big: string; label: string; accent?: boolean };

export type View =
  | { kind: 'standby'; eyebrow: string; line?: string }
  | { kind: 'title'; eyebrow: string; title: [string, string]; sub: string; author: string }
  | { kind: 'about'; eyebrow: string; name: string; role: string; tail: string; retitle?: string; items: string[] }
  | { kind: 'reference'; eyebrow: string; say: string[]; image: boolean; alt: string; credit: string }
  | { kind: 'statement'; eyebrow?: string; say: string[]; sub?: string; credit?: string; stamp?: string; accent?: number }
  | { kind: 'numbers'; eyebrow: string; say: string; rows: Row[]; caveat?: string; credit?: string }
  | { kind: 'quote'; eyebrow?: string; quote: string; by: string; sub?: string; credit?: string }
  | { kind: 'chapter'; n: string; title: string; line?: string }
  | { kind: 'previously'; eyebrow: string; lines: string[] }
  | { kind: 'cast'; lit: number; desc?: string }
  | { kind: 'list'; eyebrow: string; say?: string; items: string[]; foot?: string; credit?: string; stamp?: string; small?: boolean }
  | { kind: 'todo'; eyebrow: string; what: string }
  | { kind: 'finale'; step: 1 | 2; presents: string; card: [string, string]; say: string[]; punch: string }
  | { kind: 'questions'; title: string; big: string }
  | { kind: 'sources'; eyebrow: string; items: Source[] }
  | { kind: 'hype'; mode: 'cycle' | 'chain'; step: number; eyebrow: string; say: string; caveat: string; credit: string }
  | { kind: 'stock'; data: 'ant' | 'spcx'; eyebrow: string; say: string; caveat: string; credit: string }
  | { kind: 'wheel'; eyebrow: string; say: string[]; stops: string[]; at: number; here: string; latest: string; credit: string }
  | { kind: 'qr'; eyebrow: string; say: string[]; sub: string };

/** `url` without the scheme (the offline check rejects it); the slide links to https. */
export interface Source { what: string; url: string; checked: string }

export interface BeatContent { name: string; ref?: string; note?: string; auto?: boolean; v: View }
export interface SceneContent { id: string; title: string; tone: string; beats: BeatContent[] }

export const CAST = ['La Dev', 'Dirección', 'El Agente de IA', 'La Factura', 'El Equipo'] as const;

export const CAST_TITLE = 'El reparto';
export const MANFRED = 'Manfred × TheirStack, Tech Career Report 2026 · CC BY-NC 4.0';
export const MANFRED_SAMPLE = 'Comunidad Manfred: el 56 % tiene más de 10 años de experiencia. No es todo el mercado.';
const METR = 'METR, estudio de 2025 · 16 desarrolladores con experiencia · sus propios repos';
const SO = 'Stack Overflow Developer Survey 2025';

/** Words drawn on the hype curves (R7). */
export const HYPE = {
  x: 'TIEMPO →',
  y: 'EXPECTATIVAS →',
  phases: [['Lanzamiento', 'tecnológico'], ['Pico de expectativas', 'sobredimensionadas'], ['Valle de la', 'desilusión'], ['Pendiente de la', 'consolidación'], ['Meseta de', 'productividad']],
  marks: ['Modelo nuevo', 'Otro más', 'Y otro'],
  ghost: 'La caída que debería llegar',
} as const;

/** Precios frente al de salida a bolsa (R8): cierres oficiales de Nasdaq (más la apertura de ANT). REVISAR antes de la charla. */
export const STOCKS = {
  ant: {
    ipo: 83, ipoLabel: 'PRECIO DE SALIDA 83 $',
    points: [
      { when: 'Apertura 19 nov', usd: 111.5 }, { when: '19 nov', usd: 97.17 }, { when: '20 nov', usd: 88.91 },
      { when: '23 nov', usd: 87.64 }, { when: '24 nov', usd: 81.91 },
      { when: '25 nov', usd: 82.79 }, { when: '27 nov, media sesión', usd: 91.88 },
    ],
  },
  spcx: {
    ipo: 135, ipoLabel: 'PRECIO DE SALIDA 135 $',
    points: [
      { when: '12 jun', usd: 160.95 }, { when: '16 jun', usd: 201.8 }, { when: '5 ago', usd: 108.27 },
      { when: '30 sep', usd: 150.86 }, { when: '13 nov', usd: 139.11 }, { when: '25 nov', usd: 127.44 }, { when: '27 nov, media sesión', usd: 133.59 },
    ],
  },
} as const;

/** Importes en formato español: 91,88 $ */
export const money = (usd: number) => `${usd.toFixed(2).replace('.', ',')} $`;

const GARTNER = 'Hype Cycle: Gartner (Jackie Fenn, 1995) · esquema de dibujo propio';
const CASTANO = 'Idea: Jorge Castaño, Codemotion Madrid 2026 · youtu.be/TbEemCIGPnI';
const POSTER_ALT = 'Cartel promocional de la serie «Amar en tiempos revueltos»: el reparto, con ropa de mediados del siglo XX, alrededor de una mesa con mantel de cuadros rojos.';
const POSTER_CREDIT = '«Amar en tiempos revueltos» · Diagonal TV / TVE';
const HYPE_CAVEAT = 'Una forma de leer el hype, no una medición. Su valor predictivo se discute.';
const CHAIN_CAVEAT = 'Esquemático. Es el argumento de Castaño, no parte del modelo de Gartner.';
const DATE = 'DevFest Barcelona · 28 nov 2026';

export const CONTENT: SceneContent[] = [
  {
    id: '01', title: 'APERTURA', tone: 'paper',
    beats: [
      { name: 'standby', auto: true, note: 'Bucle mientras la gente se sienta (deck/standby). El primer clic empieza la charla.', v: { kind: 'standby', eyebrow: DATE, line: 'Juanje Cilla' } },
      { name: 'title', ref: 'D5', v: { kind: 'title', eyebrow: DATE, title: ['(progr)Amar', 'en tiempos revueltos'], sub: 'Escribir código, y cuidar a las personas, cuando todo se mueve', author: 'Juanje Cilla' } },
      { name: 'who', ref: 'D22', note: 'Quién soy, lo justo.', v: { kind: 'about', eyebrow: 'Antes de empezar', name: 'Juanje Cilla', role: 'Senior Software Engineer', tail: '10+ años en Android', items: ['GDG Aranjuez · Organizador', 'Coding Pit', 'Welcome to La Secta'] } },
      { name: 'who-whisperer', ref: 'D22', note: 'La broma: se tacha el puesto. Pausa, deja que se rían.', v: { kind: 'about', eyebrow: 'Antes de empezar', name: 'Juanje Cilla', role: 'Senior Software Engineer', tail: '10+ años en Android', retitle: 'Agent Whisperer', items: ['GDG Aranjuez · Organizador', 'Coding Pit', 'Welcome to La Secta'] } },
      { name: 'reference-ask', ref: 'D23', note: 'Rompehielos: primero preguntar, sin imagen.', v: { kind: 'reference', eyebrow: 'Lo primero', say: ['¿Quién ha pillado', 'la referencia?'], image: false, alt: POSTER_ALT, credit: POSTER_CREDIT } },
      { name: 'reference', ref: 'D23', note: 'Entra el cartel. Esperar a la sala y pasar a las manos.', v: { kind: 'reference', eyebrow: 'Lo primero', say: ['¿Quién ha pillado', 'la referencia?'], image: true, alt: POSTER_ALT, credit: POSTER_CREDIT } },
      { name: 'hands', ref: 'D11', note: 'Levantad la mano. Mirar la sala, contar, seguir. Sin herramienta externa.', v: { kind: 'statement', eyebrow: 'Levantad la mano', say: ['¿Quién siente que se', 'está quedando atrás con la IA?'] } },
      { name: 'previously', ref: 'D5', note: 'Resumen de 20 s de un tirón: la IA se queda, equipos tensos, llega la factura.', v: { kind: 'previously', eyebrow: 'Anteriormente, en el mundo tech…', lines: ['La IA ha venido para quedarse.', 'Los equipos están tensos.', 'La factura está al caer.'] } },
    ],
  },
  {
    id: '02', title: 'REPARTO', tone: 'violet',
    beats: [
      { name: 'cast', ref: 'D7', note: 'Aparece el cartel del reparto, nadie destacado todavía.', v: { kind: 'cast', lit: -1 } },
      { name: 'la-dev', ref: 'D7', note: 'Protagonista. El público es ella.', v: { kind: 'cast', lit: 0, desc: 'La protagonista. Eres tú.' } },
      { name: 'direccion', ref: 'D7', note: 'Quema tokens. No es el villano: también tiene presión.', v: { kind: 'cast', lit: 1, desc: 'Quema tokens. También tiene presión.' } },
      { name: 'agente-ia', ref: 'D7', note: 'El pretendiente misterioso.', v: { kind: 'cast', lit: 2, desc: 'El pretendiente misterioso. Encantador, rápido, a veces miente.' } },
      { name: 'la-factura', ref: 'D7', note: 'La villana. Llega a fin de mes.', v: { kind: 'cast', lit: 3, desc: 'La villana. Llega cada fin de mes.' } },
      { name: 'el-equipo', ref: 'D7', note: 'Los que están en medio.', v: { kind: 'cast', lit: 4, desc: 'Los que están en medio.' } },
    ],
  },
  {
    id: '03', title: 'CAP 1 · LA LLEGADA', tone: 'sun',
    beats: [
      { name: 'chapter', ref: 'D6', v: { kind: 'chapter', n: 'Capítulo 1', title: 'La Llegada', line: 'Todo el mundo la usa. ¿Está funcionando?' } },
      { name: 'hype-peak', ref: 'R7.1', note: 'El ciclo de hype: cualquier tecnología, no solo la IA. Aparece algo y las expectativas se disparan.', v: { kind: 'hype', mode: 'cycle', step: 1, eyebrow: 'Capítulo 1 · Toda tecnología', say: 'Primero, todo es posible', caveat: HYPE_CAVEAT, credit: GARTNER } },
      { name: 'hype-trough', ref: 'R7.1', note: 'Luego la realidad. La decepción.', v: { kind: 'hype', mode: 'cycle', step: 2, eyebrow: 'Capítulo 1 · Toda tecnología', say: 'Luego llega la decepción', caveat: HYPE_CAVEAT, credit: GARTNER } },
      { name: 'hype-plateau', ref: 'R7.1', note: 'Y lo que sobrevive se vuelve normal y útil.', v: { kind: 'hype', mode: 'cycle', step: 3, eyebrow: 'Capítulo 1 · Toda tecnología', say: 'Y después se vuelve útil', caveat: HYPE_CAVEAT, credit: GARTNER } },
      { name: 'promise', ref: 'R2.1', note: 'Todo el mundo llega a la vez.', v: { kind: 'numbers', eyebrow: 'Capítulo 1 · La Llegada', say: 'Todo el mundo llega a la vez', rows: [{ big: '84 %', label: 'usa o piensa usar herramientas de IA para desarrollar' }], credit: SO } },
      { name: 'everyone', ref: 'R6.1', note: 'DECIR el matiz: la comunidad Manfred, casi todo veteranos, no todo el mercado.', v: { kind: 'numbers', eyebrow: 'Capítulo 1 · La Llegada', say: 'Casi todos la usan. Casi nadie formado.', rows: [{ big: '98 %', label: 'usa IA en su trabajo diario' }, { big: '86 %', label: 'dice que le hace más productivo' }, { big: '20 %', label: 'ha recibido formación de su empresa', accent: true }], caveat: MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'feeling', ref: 'R1.2', note: 'Antes: esperaban ir un 24 % más rápido. Después: creían haber ido un 20 % más rápido.', v: { kind: 'numbers', eyebrow: 'Capítulo 1 · La Llegada', say: 'Lo que sientes…', rows: [{ big: '+24 %', label: 'esperaban ir más rápido, antes' }, { big: '+20 %', label: 'creían haber ido más rápido, después' }], credit: METR } },
      { name: 'measure', ref: 'R1.1', note: 'DECIR R1.3 enseguida: 16 personas, principios de 2025, sus repos. No es «la IA te hace lento».', v: { kind: 'numbers', eyebrow: 'Capítulo 1 · La Llegada', say: '…no es lo que se mide', rows: [{ big: '+24 %', label: 'esperado' }, { big: '+20 %', label: 'creído' }, { big: '−19 %', label: 'medido: las tareas tardaron un 19 % más', accent: true }], caveat: '16 personas, principios de 2025, sus propios repos. Esto no dice «la IA te hace lento».', credit: METR } },
      { name: 'update', ref: 'R1.4', note: 'Seguimiento de feb 2026: los intervalos incluyen el cero; METR lo llama señal poco fiable porque la gente se negaba a trabajar sin IA. La frase honesta: todavía no sabemos medirlo, y la sensación engaña.', v: { kind: 'statement', eyebrow: 'Seguimiento de METR · feb 2026', say: ['Todavía no sabemos', 'cómo medirlo'], sub: 'Las nuevas estimaciones incluyen el cero. METR lo llama «una señal poco fiable».', credit: 'METR, 24 feb 2026' } },
      { name: 'trust', ref: 'R2.2', note: '46 % desconfía de la precisión frente a un 33 % que confía; 3 % «confía mucho». 66 %: «casi bien, pero no del todo».', v: { kind: 'numbers', eyebrow: 'Capítulo 1 · La Llegada', say: 'Y no se fían del todo', rows: [{ big: '46 %', label: 'desconfía de su precisión' }, { big: '33 %', label: 'confía' }, { big: '3 %', label: 'confía mucho', accent: true }], caveat: 'El 66 % dice que el problema son las soluciones «casi correctas, pero no del todo».', credit: SO } },
      { name: 'cliffhanger', ref: 'D5', v: { kind: 'statement', say: ['Continuará…'], sub: 'Y entonces llega la factura.' } },
    ],
  },
  {
    id: '04', title: 'CAP 2 · LA CRISIS', tone: 'night',
    beats: [
      { name: 'chapter', ref: 'D6', note: 'Tono noche.', v: { kind: 'chapter', n: 'Capítulo 2', title: 'La Crisis', line: 'Llega la factura.' } },
      { name: 'previously', ref: 'D5', v: { kind: 'previously', eyebrow: 'Anteriormente…', lines: ['Todos usamos IA.', 'Nos sentimos más rápidos.', 'Nadie sabe medirlo.'] } },
      { name: 'layoffs', ref: 'R3.2', note: 'Challenger, informe de sept. 2026. El matiz va después, al mismo ritmo.', v: { kind: 'numbers', eyebrow: 'Capítulo 2 · La Crisis', say: 'Los recortes', rows: [{ big: '573.195', label: 'despidos anunciados en EE. UU. hasta septiembre' }, { big: '120.136', label: 'citan la IA como motivo: el primero este año', accent: true }], credit: 'Challenger, Gray & Christmas, informe de septiembre de 2026' } },
      { name: 'layoffs-caveat', ref: 'R3.3', note: 'OBLIGATORIO: planes anunciados y los motivos que declaran las empresas. En septiembre la IA fue quinta. No es un recuento de gente despedida por una IA.', v: { kind: 'statement', eyebrow: 'Léelo con cuidado', say: ['Anunciados. Declarados.', 'No «despedido por una IA».'], sub: 'En septiembre, la IA fue el quinto motivo (3.961 despidos). Challenger cuenta planes anunciados y los motivos que dan las empresas.', credit: 'Challenger, Gray & Christmas, informe de septiembre de 2026' } },
      { name: 'bill', ref: 'R4.1', note: 'PARÁFRASIS, sin comillas: TechCrunch no se pudo re-verificar el 2026-11-24 (403). Mosseri: el gasto en IA de un buen ingeniero podría igualar su sueldo; hoy no hay topes; cree que harán falta. Meta además cerró un ranking interno de tokens (R4.2, solo de palabra).', v: { kind: 'statement', eyebrow: 'Meta · julio 2026', say: ['La factura de IA de un buen', 'ingeniero podría igualar su sueldo'], sub: 'Adam Mosseri dice que hoy Meta no pone tope de tokens y cree que tendrá que ponerlo en uno o dos años.', credit: 'TechCrunch, 14 julio 2026 (parafraseado)' } },
      { name: 'noise-models', ref: 'D10', note: 'Bloque de RUIDO. Cualitativo, sin cifras. Un modelo nuevo cada pocas semanas. FRASE PROPIA (bloque 3.4, post 39): «La primera siempre es gratis, pero una vez estás enganchado, tienes que hipotecar hasta la casa.»', v: { kind: 'statement', eyebrow: 'Mientras tanto…', say: ['Un modelo nuevo', 'cada pocas semanas'], sub: 'Ponte al día. O no: la semana que viene hay otro.' } },
      { name: 'chain-peak', ref: 'R7.3', note: '¿Recordáis la curva del capítulo 1? Aquí debería empezar la caída. Vídeo: youtu.be/TbEemCIGPnI', v: { kind: 'hype', mode: 'chain', step: 1, eyebrow: 'Mientras tanto…', say: 'En el pico, tocaría caer', caveat: CHAIN_CAVEAT, credit: CASTANO } },
      { name: 'chain-again', ref: 'R7.3', note: 'En vez de caer, sale un modelo nuevo y el hype vuelve a subir.', v: { kind: 'hype', mode: 'chain', step: 2, eyebrow: 'Mientras tanto…', say: 'Pero sale un modelo nuevo', caveat: CHAIN_CAVEAT, credit: CASTANO } },
      { name: 'chain-more', ref: 'R7.3', note: 'Una curva encima de otra. FRASE PROPIA (post 39): «Esto no es real ni sostenible.»', v: { kind: 'hype', mode: 'chain', step: 3, eyebrow: 'Mientras tanto…', say: 'Una curva encima de otra', caveat: CHAIN_CAVEAT, credit: CASTANO } },
      { name: 'ipo', ref: 'R8.1', note: 'Salida a bolsa de Anthropic: a 83, abrió a 111,50, bajó del precio de salida el cuarto día y volvió a superarlo el sexto (vie 27: 91,88). Arriba, abajo, arriba. No predecir nada.', v: { kind: 'stock', data: 'ant', eyebrow: 'Y en la bolsa…', say: 'Los primeros días de Anthropic en Nasdaq', caveat: 'Seis sesiones. Demasiado pronto para sacar conclusiones.', credit: 'Cierres oficiales de Nasdaq · apertura: CNBC, 19 nov 2026 · comprobado 2026-11-28' } },
      { name: 'ipo-spacex', ref: 'R8.3', note: 'No es solo una empresa. SpaceX salió el 12 de junio: arriba, por debajo del precio de salida, arriba, otra vez abajo. Cierres seleccionados.', v: { kind: 'stock', data: 'spcx', eyebrow: 'Y en la bolsa…', say: 'No es solo una empresa: SpaceX', caveat: 'Precios seleccionados, no la serie completa. Ni consejo ni pronóstico.', credit: 'Cierres oficiales de Nasdaq · precio de salida: Quantral · comprobado 2026-11-28' } },
      { name: 'noise-benchmarks', ref: 'D10', note: 'Benchmarks frente a la realidad. La corona va rotando: quien anunció el último es el mejor. Hoy: Gemini 4 Neon. REVISAR el día de la charla. Enlazar con el capítulo 1.', v: { kind: 'wheel', eyebrow: 'Mientras tanto…', say: ['Los benchmarks', 'dicen una cosa.', 'La vida real', 'dice otra.'], stops: ['Claude', 'Gemini', 'ChatGPT', 'Grok'], at: 1, here: 'Estás aquí', latest: 'Gemini 4 Neon · 18 nov', credit: 'El orden es una broma, no un ranking · fecha de Gemini 4 Neon: Google, comprobado 2026-11-28' } },
      { name: 'noise-tools', ref: 'R6.10', note: 'Muchas herramientas, la misma promesa. Manfred: quien usa IA maneja 3,1 herramientas de media (muestra de la comunidad). FRASE PROPIA (bloque 3.4): cada semana un modelo, un IDE, un CLI nuevo.', v: { kind: 'numbers', eyebrow: 'Mientras tanto…', say: 'Muchas herramientas. La misma promesa.', rows: [{ big: '3,1', label: 'herramientas de IA de media por cada persona que usa IA' }], caveat: MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'noise-sharing', ref: 'D10', note: 'Observación propia, sin cifra: todo el mundo enseña lo que construye. FRASE PROPIA (bloque 4.2, post 16): «Tengo más de 10 años de experiencia en empezar proyectos pero tengo muy pocos en terminarlos.»', v: { kind: 'statement', eyebrow: 'Mientras tanto…', say: ['Todo el mundo enseña', 'lo que acaba de montar'], sub: '«Acabo de lanzar mi…» Y el contador marca 0 usuarios.' } },
      { name: 'noise-slop', ref: 'D10', note: 'Observación propia, sin cifra.', v: { kind: 'statement', eyebrow: 'Mientras tanto…', say: ['AI slop'], sub: 'Rápido de hacer. Nadie lo pidió. Nadie lo lee.' } },
      { name: 'noise-layers', ref: 'D10', note: 'Capas que aprender dentro de la IA (D17). FRASE PROPIA (bloque 3.3, post 25): «Levantas una piedra y una IA te pregunta que si genera nuevas piedritas por ti.»', v: { kind: 'list', eyebrow: 'Y debajo de todo eso, capas que aprender', say: 'Aprende también esto', items: ['Contexto — lo que ve el modelo', 'Harness — las herramientas y el bucle que lo rodea', 'Memoria — lo que guarda entre sesiones', '…y lo que llegue el mes que viene'] } },
      { name: 'junior-door', ref: 'R6.3', note: 'España, Manfred. «Junior» = junior/trainee/becario/graduate en el título.', v: { kind: 'numbers', eyebrow: 'De vuelta al equipo…', say: 'La puerta de entrada', rows: [{ big: '4,4 %', label: 'de las ofertas tech buscan un perfil junior' }, { big: '1 de 5', label: 'profesionales tiene menos de 2 años de experiencia', accent: true }], caveat: '«Junior»: junior, trainee, becario o graduate en el título.', credit: MANFRED } },
      { name: 'junior-ladder', ref: 'R6.4', note: 'OBLIGATORIO: ofertas de clientes de Manfred, no todo el mercado, y nadie ha demostrado que la causa sea la IA. Decir «menos del 1 %».', v: { kind: 'numbers', eyebrow: 'De vuelta al equipo…', say: 'El primer escalón cuesta más', rows: [{ big: '7,8 %', label: 'de las ofertas de Manfred aceptaban menos de 2 años, en 2022' }, { big: '<1 %', label: 'en 2026', accent: true }], caveat: 'Ofertas propias de Manfred, no todo el mercado. Nadie ha demostrado que la causa sea la IA.', credit: MANFRED } },
      { name: 'open-junior', ref: 'A1', note: 'ABIERTO a propósito. Ninguna cifra que no podamos verificar (DigitalES, Stanford: research.md R5).', v: { kind: 'statement', eyebrow: 'Nadie lo sabe todavía', say: ['¿Está la IA cerrando', 'la puerta de entrada?'], sub: 'No tenemos la respuesta. La preocupación la compartimos casi todos.', stamp: 'PREGUNTA ABIERTA' } },
      { name: 'cliffhanger', ref: 'D5', v: { kind: 'statement', say: ['Continuará…'], sub: 'Y ahora, ¿qué hacemos?' } },
    ],
  },
  {
    id: '05', title: 'CAP 3 · ¿Y AHORA QUÉ?', tone: 'teal',
    beats: [
      { name: 'chapter', ref: 'D6', v: { kind: 'chapter', n: 'Capítulo 3', title: '¿Y Ahora Qué?', line: 'Cuatro niveles. Empieza por el más cercano.' } },
      { name: 'previously', ref: 'D5', v: { kind: 'previously', eyebrow: 'Anteriormente…', lines: ['La factura.', 'Los recortes.', 'El ruido.'] } },
      { name: 'yo', ref: 'D8', note: 'Nivel 1, yo: límites (horas, notificaciones, compararse con demos) y aprender a propósito.', v: { kind: 'list', eyebrow: 'Nivel 1 · Yo', say: 'Pon límites. Aprende a propósito.', items: ['Horas, notificaciones, compararte con las demos', 'Aprende lo que necesitas, no lo que está de moda'], foot: 'Solo al 20 % le ha formado su empresa; el 45 % ha aprendido por su cuenta. ' + MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'equipo', ref: 'R6.9', note: 'Nivel 2, equipo: acuerdos sobre cómo usar la IA y cómo revisar su código; métricas sanas frente a «tokens quemados». Un acuerdo concreto para decir en voz: un fichero CODEOWNERS, para que cada zona tenga una persona que la revise.', v: { kind: 'quote', eyebrow: 'Nivel 2 · Equipo', quote: '«El cuello de botella está ahora en la revisión.»', by: 'Responsable de ingeniería en una scaleup de software, en las entrevistas de Manfred', sub: 'Acordad cómo usáis la IA. Acordad cómo la revisáis.', credit: MANFRED } },
      { name: 'carrera', ref: 'R6.7', note: 'Nivel 3, carrera. Decir «6 de 13», nunca solo 46 %. No afirmar «qué habilidades ganan valor» sin fuente.', v: { kind: 'numbers', eyebrow: 'Nivel 3 · Carrera', say: 'Quieren criterio', rows: [{ big: '6 de 13', label: 'empresas con las que habló Manfred rediseñaron su prueba técnica por la IA' }], caveat: '13 empresas: una muestra pequeña, no representativa. La prueba nueva: dirigir, revisar, defender.', credit: MANFRED } },
      { name: 'arriba', ref: 'D8', note: 'Nivel 4, hacia arriba. Preguntar a dirección para qué se mide el uso de IA; ROI real, factura y burnout.', v: { kind: 'statement', eyebrow: 'Nivel 4 · Hacia arriba', say: ['Pregunta para qué se', 'mide el uso de la IA'], sub: 'Antes del próximo «usadla más».' } },
      { name: 'fofo', ref: 'D18', note: 'Cómo lo llevé yo, 1 (bloque 3.4B, post 42). Mi suscripción de 20 USD: tokens de sobra y la ansiedad de no usarlos. «Es un miedo del primer mundo, capitalista, superficial y que nos tendría que dar que pensar.» «Si el tren pasa, el avance tecnológico se empeña en demostrarnos que siempre hay otro tren.»', v: { kind: 'statement', eyebrow: 'Cómo lo llevé yo', say: ['Del FOMO', 'al FOFO'], sub: 'Fear Of Fizzling Out: tokens sin gastar y la ansiedad de no usarlos. Siempre hay otro tren.' } },
      { name: 'postmortem', ref: 'D18', note: 'Cómo lo llevé yo, 2 (bloque 4.3, post 38). «Cuantas más cosas tengo que hacer y más cosas tengo en la cabeza, más tiempo invierto en cosas que me son fáciles.» «Tenemos que plantarnos y elegir las batallas en las que queremos luchar.»', v: { kind: 'statement', eyebrow: 'Cómo lo llevé yo', say: ['Un postmortem', 'de mí mismo'], sub: 'Cuanto más tengo en la cabeza, más tiempo dedico a lo fácil. Así que: acciones pequeñas y elegir las batallas.' } },
    ],
  },
  {
    id: '06', title: 'FINAL DE TEMPORADA', tone: 'paper',
    beats: [
      { name: 'finale-card', ref: 'D12', note: 'El anuncio. Voz de tráiler de la tele, y pausa.', v: { kind: 'finale', step: 1, presents: '(progr)Amar en tiempos revueltos presenta', card: ['Final de', 'temporada'], say: ['La Dev y el Agente de IA', 'se reconcilian.'], punch: 'Las herramientas cambian. Las personas siguen.' } },
      { name: 'reconciliation', ref: 'D12', note: 'La Dev y el Agente de IA se reconcilian. Con condiciones: primero las personas. FRASE PROPIA (post 42).', v: { kind: 'finale', step: 2, presents: '(progr)Amar en tiempos revueltos presenta', card: ['Final de', 'temporada'], say: ['La Dev y el Agente de IA', 'se reconcilian.'], punch: 'Las herramientas cambian. Las personas siguen.' } },
      { name: 'line', ref: 'D12', note: 'La frase de la charla.', v: { kind: 'statement', say: ['(progr)Amar', 'es cuidar a', 'quien programa.'], accent: 2 } },
    ],
  },
  {
    id: '07', title: 'POSCRÉDITOS', tone: 'night',
    beats: [
      { name: 'season-2', ref: 'D12', v: { kind: 'statement', eyebrow: 'Después de los créditos', say: ['La temporada 2', 'la escribís vosotros.'] } },
      { name: 'monday', ref: 'D12', note: 'Una acción por nivel, 15 minutos cada una, sin comprar nada. En Yo, preguntar: ¿dónde te escondes cuando hay demasiado?', v: { kind: 'list', eyebrow: 'Tres acciones para el lunes', say: 'El lunes', items: ['Yo — un postmortem de 15 minutos de tu semana: elige una batalla', 'Equipo — acordad una regla para revisar el código escrito con IA', 'Arriba — pregunta «¿para qué medimos el uso de IA?»'] } },
      { name: 'slides', ref: 'D11', note: 'QR a la propia URL de Pages de esta edición.', v: { kind: 'qr', eyebrow: 'Llévate las diapositivas', say: ['Las diapos,', 'en tu bolsillo'], sub: 'juanjecilla.github.io/slideshow/programar_tiempos_revueltos/bcn26' } },
    ],
  },
  {
    id: '08', title: 'CONTINUARÁ…', tone: 'coral',
    beats: [
      { name: 'continuara', ref: 'D6', note: 'Preguntas, 10 min.', v: { kind: 'questions', title: 'Continuará…', big: 'Preguntas' } },
    ],
  },
  {
    id: '09', title: 'BACKUP', tone: 'stone',
    beats: [
      { name: 'sources', ref: 'R1-R8', note: 'Backup: de dónde sale cada cifra. No entra en los 30 minutos. Los enlaces se abren al hacer clic.', v: { kind: 'sources', eyebrow: 'Backup · fuentes', items: [
        { what: 'METR · estudio de desarrolladores, principios de 2025', url: 'metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/', checked: 'comprobado 2026-11-24' },
        { what: 'METR · seguimiento de feb 2026', url: 'metr.org/blog/2026-02-24-uplift-update/', checked: 'comprobado 2026-11-24' },
        { what: 'Stack Overflow Developer Survey 2025', url: 'survey.stackoverflow.co/2025/ai', checked: 'comprobado 2026-11-24' },
        { what: 'Challenger, Gray & Christmas · septiembre 2026', url: 'www.challengergray.com/blog/job-cuts-fall-in-september-hiring-plans-up-3-over-2025-on-weak-early-seasonal-hiring/', checked: 'comprobado 2026-11-24' },
        { what: 'TechCrunch · Mosseri sobre topes de tokens (parafraseado)', url: 'techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/', checked: 'no re-verificable 2026-11-24' },
        { what: 'Manfred × TheirStack · Career Report 2026 · CC BY-NC 4.0', url: 'www.getmanfred.com/tech-career-report', checked: 'comprobado 2026-11-24' },
        { what: 'Gartner · Hype Cycle', url: 'www.gartner.com/en/research/methodologies/gartner-hype-cycle', checked: 'comprobado 2026-11-24' },
        { what: 'Jorge Castaño · Que no quiero más IA, señora, suélteme el brazo', url: 'youtu.be/TbEemCIGPnI', checked: 'comprobado 2026-11-25' },
        { what: 'CNBC · debut de Anthropic en Nasdaq', url: 'www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html', checked: 'comprobado 2026-11-25' },
        { what: 'Nasdaq · cierres históricos de ANT', url: 'www.nasdaq.com/market-activity/stocks/ant/historical', checked: 'comprobado 2026-11-28' },
        { what: 'Nasdaq · cierres históricos de SPCX', url: 'www.nasdaq.com/market-activity/stocks/spcx/historical', checked: 'comprobado 2026-11-28' },
        { what: 'Quantral · precio de salida de SpaceX', url: 'quantral.com/blog/spacex-ipo', checked: 'comprobado 2026-11-25' },
        { what: 'Google · Presentación de Gemini 4 Neon', url: 'blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/', checked: 'comprobado 2026-11-28' },
      ] } },
    ],
  },
];
