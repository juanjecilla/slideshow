import type { SceneDef } from 'beatdeck';
import { BACKUP_STEPS } from './backup-steps';

/**
 * El mapa de beats de la charla: escenas → beats. Un clic = un beat.
 * `ref` = de dónde sale (id de research.md / diapositiva del guion), `note` = apunte del ponente (solo se ve en la vista de presentador).
 * Presupuesto de tiempo (50 min): intro+yo 3 · escenario 4 · contexto 3 · tools+MCP 4 · concepto 5 · alternativas 2 ·
 * deep dive 6 · código 7 · seguridad 5 · más allá 3 · demo 10 · cierre 2 ≈ 54 → recortar en directo de "más allá"/"alternativas".
 */
const BASE_SCENES: SceneDef[] = [
  {
    id: '01', title: 'APERTURA',
    beats: [
      { name: 'espera', note: 'Pantalla tranquila mientras la gente se sienta. El primer clic arranca la charla.' },
      { name: 'título', ref: 'diapositiva 1', note: 'Título, subtítulo, ponente. Saluda y entra en materia.' },
    ],
  },
  {
    id: '02', title: 'YO',
    beats: [
      { name: 'quién', note: 'Nombre, rol y una frase de por qué te importa: haces apps, y ahora quien las llama puede ser un agente.' },
      { name: 'enlaces', note: 'Los enlaces se quedan cinco segundos. Vuelven a aparecer en la última escena.' },
    ],
  },
  {
    id: '03', title: 'ESCENARIO',
    beats: [
      { name: 'petición', auto: true, ref: 'diapositiva 2', note: 'Escenario animado. Una persona habla con un agente. Lee la frase en voz alta mientras se escribe.' },
      { name: 'plan', note: 'El agente no abre nada. Planifica: tres capacidades, tres apps.' },
      { name: 'búsqueda', note: 'Llamada 1: la app del DevFest responde a searchTalks. Datos estructurados, no píxeles.' },
      { name: 'favoritos', note: 'Llamada 2: addToFavorites. Una escritura.' },
      { name: 'calendario', note: 'Llamada 3: el calendario detecta un conflicto con la cena de la persona (la charla de las 18:30). El agente no adivinó.' },
      { name: 'confirmar', note: 'Humano en el bucle: el agente le pregunta al usuario. Aquí plantas la semilla del bloque de funciones seguras.' },
      { name: 'avisar', note: 'El mensaje al equipo se envía después de que decida la persona.' },
      { name: 'nada abierto', note: 'No se abrió ninguna pantalla. La pregunta para la sala: ¿cómo expone TU app eso?' },
    ],
  },
  {
    id: '04', title: 'CONTEXTO',
    beats: [
      { name: 'slices', ref: 'draft 4', note: 'Slices: plantillas de UI remota dentro de Search y Assistant. Quien llamaba era una superficie.' },
      { name: 'app actions', ref: 'draft 5', note: 'App Actions y BIIs: intents predefinidos que abren tu app. En primer plano, atado a la UI.' },
      { name: 'tool calling', note: 'Tool calling y MCP (nov 2024): ahora quien llama es un modelo que lee un esquema.' },
      { name: 'appfunctions', ref: 'S4 alpha01 2025-05-07', note: 'AppFunctions: primera alpha en mayo de 2025, primera beta en octubre de 2026 (1.0.0-beta01). La app expone funciones, sin UI.' },
      { name: 'headless', ref: 'draft 2-3', note: 'El cambio: de pantallas y toques a capacidades headless. La app pasa a ser proveedora.' },
    ],
  },
  {
    id: '05', title: 'TOOLS',
    beats: [
      { name: 'qué es una tool', ref: 'draft 9', note: 'Una tool = nombre + descripción + parámetros tipados. El modelo la lee y decide cuándo llamarla.' },
      { name: 'json de la tool', note: 'Una definición real. La descripción es la interfaz para el modelo.' },
      { name: 'definición de skill', note: 'Define "skill" una vez: una capacidad tipada que un agente puede invocar. No son las Agent Skills de Anthropic ni las Android Skills.' },
      { name: 'mcp', ref: 'draft 7-8', note: 'MCP: protocolo abierto; el cliente (el agente) descubre las tools de un servidor y las llama.' },
      { name: 'nxm', ref: 'draft 6, 10', note: 'Sin estándar: N asistentes × M apps. Con uno: N + M.' },
      { name: 'en el dispositivo', ref: 'draft 11', note: 'Los servidores MCP remotos: red, autenticación y ningún acceso al estado local. En el móvil necesitamos lo contrario.' },
    ],
  },
  {
    id: '06', title: 'APPFUNCTIONS',
    beats: [
      { name: 'definición', ref: 'S1', note: '"Se comportan como servidores MCP en el dispositivo". Equivalente a las tools, ejecutado en local.' },
      { name: 'roles', ref: 'draft 13-15', note: 'La app = proveedora de tools, el índice del SO = registro, el agente = cliente.' },
      { name: 'analogía: transporte', ref: 'F1', note: 'Analogía, no protocolo. Transporte: JSON-RPC sobre stdio/HTTP frente a Binder IPC.' },
      { name: 'analogía: registro', note: 'Registro: tools/list frente a un índice del sistema que se consulta con búsquedas.' },
      { name: 'analogía: esquema', note: 'Esquema: JSON Schema frente a metadatos XML generados desde tu código.' },
      { name: 'analogía: quién llama', note: 'Quién llama: cualquier cliente frente a agentes con EXECUTE_APP_FUNCTIONS.' },
      { name: 'estado', ref: 'F2, F3', note: 'Sé honesto: experimental, Jetpack 1.0.0-beta01 (primera beta, 2026-10-21), la documentación para desarrolladores aún enseña snippets de alpha10 mientras la skill y los ejemplos usan beta01, Gemini en private preview (docs, mayo de 2026). Por qué nos importa igualmente.' },
      { name: 'pilares', ref: 'draft 16-18', note: 'Tres ideas: ejecución local, indexada de antemano, el KDoc es el contrato.' },
    ],
  },
  {
    id: '07', title: 'POR QUÉ NO',
    beats: [
      { name: 'pregunta', note: '"¿Por qué no simplemente…?": las cuatro cosas que probarías primero.' },
      { name: 'intent', ref: 'draft 19-21', note: 'Deep link / Intent: abre la UI, sin tipos, no descubrible.' },
      { name: 'servicio vinculado', note: 'Bound Service + AIDL: headless, pero contrato privado y sin descubrimiento.' },
      { name: 'mcp remoto', note: 'Servidor MCP remoto: descubrible y tipado, pero con red y sin estado local.' },
      { name: 'fgs', ref: 'H3', note: 'Foreground Service: herramienta equivocada, necesita tipo + permiso + notificación. Sin cifras.' },
      { name: 'fila appfunctions', note: 'AppFunctions marca las cinco: sin UI, descubrible, tipada, con permiso del SO, sin red. (Las marcas de la tabla son criterio del ponente.)' },
    ],
  },
  {
    id: '08', title: 'DEEP DIVE',
    beats: [
      { name: 'mapa', note: 'Un diagrama, cinco fases. Lo recorremos de izquierda a derecha.' },
      { name: 'compilar', ref: 'B2, B4', note: 'Compilar: KSP lee tus anotaciones y genera el servicio y los metadatos XML en assets/.' },
      { name: 'instalar', ref: 'D1-D3', note: 'Instalar: el sistema indexa los metadatos. No al abrir la app; puede tardar justo después del primer arranque.' },
      { name: 'descubrir', ref: 'D4, D5', note: 'Descubrir: un agente con EXECUTE_APP_FUNCTIONS busca los metadatos y comprueba si la función está habilitada.' },
      { name: 'invocar', ref: 'E2, E4', note: 'Invocar: executeAppFunction con una petición; el sistema vincula tu servicio aunque la app esté cerrada.' },
      { name: 'ejecutar', ref: 'E1', note: 'Ejecutar: corre en el hilo principal por defecto. suspend + Dispatchers.IO.' },
      { name: 'resultado', note: 'Un resultado estructurado o un error tipado vuelve al agente.' },
    ],
  },
  {
    id: '09', title: 'CÓDIGO',
    beats: [
      { name: 'gradle', ref: 'B1-B3', note: 'compileSdk: la documentación dice 36+, la skill dice 37. KSP, dos dependencias, fijado a 1.0.0-beta01 (la skill y los ejemplos lo usan; la página de docs aún enseña alpha10).' },
      { name: 'función', ref: 'B8', note: 'La función: @AppFunctionDeclaration(isDescribedByKDoc = true) (antes @AppFunction, renombrada en alpha13) y un KDoc escrito para un modelo.' },
      { name: 'serializable', ref: 'B9', note: 'Tipos de retorno: @AppFunctionSerializable, con el KDoc en línea en cada propiedad.' },
      { name: 'punto de entrada', ref: 'B4-B5', note: 'El punto de entrada del servicio: clase abstracta + anotación, KSP genera el servicio concreto. Hilt es opcional.' },
      { name: 'manifest', ref: 'B7', note: 'Manifest: BIND_APP_FUNCTION_SERVICE lo protege; propiedad app_metadata.' },
      { name: 'errores', ref: 'E5', note: 'Errores tipados: InvalidArgument, ElementNotFound. El agente puede recuperarse.' },
      { name: 'arquitectura', ref: 'draft 40', note: 'Es un adaptador de entrada, como tu ViewModel. Delega en el caso de uso, no dupliques lógica.' },
    ],
  },
  {
    id: '10', title: 'SEGURIDAD',
    beats: [
      { name: 'intro', note: 'La promesa del CFP: segura, determinista, sin romper la experiencia de usuario. Cuatro reglas.' },
      { name: 'seguridad: quién', ref: 'D4, D6, D7', note: 'Quién puede llamar: permiso, habilitar/deshabilitar por función, propiedad de control del usuario.' },
      { name: 'seguridad: entrada', note: 'Los argumentos vienen de un modelo: trátalos como entrada no confiable.' },
      { name: 'determinismo: tipos', ref: 'B10', note: 'El modelo es probabilístico, tu función no. Tipos estrechos, IDs y no nombres. Trampa encontrada en un dispositivo real: con alpha10 un LocalTime de entrada no se podía recibir; beta01 solo lo acepta como objeto {hour, minute, second, nanoOfSecond} (comprobado el 2026-11-02; "14:30" se rechaza). La demo mantiene cadenas HH:mm: un único campo que el agente sabe rellenar.' },
      { name: 'determinismo: idempotencia', note: 'Los agentes reintentan. Haz las escrituras idempotentes y los errores tipados.' },
      { name: 'ux: confirmar', note: 'Destructivo significa confirmar. Vuelta al escenario. La propia función se niega si no recibe confirmed = true: la seguridad está en el código, no solo en el KDoc.' },
      { name: 'ux: estado', note: 'Devuelve el estado suficiente para que el agente cuente al usuario lo que pasó.' },
      { name: 'kdoc: vago', ref: 'draft 18, 35', note: 'Un KDoc vago.' },
      { name: 'kdoc: bueno', note: 'La misma función, escrita para un modelo.' },
    ],
  },
  {
    id: '11', title: 'MÁS ALLÁ',
    beats: [
      { name: 'orquestación', ref: 'draft 29', note: 'El valor real está en encadenar funciones de varias apps. Vuelta a la apertura.' },
      { name: 'app metadata', ref: 'X4', note: 'app_metadata.xml: `instructions` en texto libre (antes se llamaba description; renombrado en beta01) con patrones operativos y restricciones.' },
      { name: 'dinámicas', ref: 'X1-X3', note: 'API 37: registrar funciones en ejecución, ligadas a una Activity. Experimental en Jetpack.' },
      { name: 'android skills', ref: 'T5', note: 'Extra: la skill oficial de Android escribe AppFunctions contigo. No es la misma "skill".' },
    ],
  },
  {
    id: '12', title: 'DEMO',
    beats: [
      { name: 'escenario', note: 'App de la agenda del DevFest con la agenda real (23 sesiones, leída el 2026-11-02). Cuatro funciones. Guion: docs/DEMO.md del proyecto demo; script scripts/appfunctions-adb.sh. Las ramas 01-04 son puntos de control.' },
      { name: 'lista', ref: 'T1', note: 'adb shell cmd app_function list-app-functions' },
      { name: 'ejecutar lectura', ref: 'T2', note: 'Ejecuta searchTalks desde el terminal. Lee la respuesta estructurada.' },
      { name: 'ejecutar escritura', note: 'Ejecuta addToFavorites. Luego enseña la UI de la app actualizada.' },
      { name: 'app cerrada', note: 'Detén la app a la fuerza y repite. Funciona igual. Luego: añade un ID desconocido para enseñar el error tipado y llama a clear sin confirmed.' },
      { name: 'pregunta un hueco', note: 'Que el público elija una hora, p. ej. las 18:15: la respuesta es el hueco por confirmar (un hueco real de la agenda, leída el 2026-11-02). Prueba también un ponente: busca con query "gema".' },
      { name: 'testing agent', ref: 'T4', note: 'Testing Agent (oficial, modo manual verificado en el Pixel el 2026-11-02): pestaña Debug, busca DevFest, abre searchTalks, rellena track=ai y after=15:00, Run: tarjetas con el resultado tipado. Se arranca con scripts/start-testing-agent.sh (hace falta duplicar la pantalla del móvil en el escenario). El modo LLM necesita una clave de Gemini: solo si la tienes.' },
      { name: 'resumen', note: 'Lo que hemos visto: sin UI, sin red, tipado, con la app cerrada.' },
    ],
  },
  {
    id: '13', title: 'CIERRE',
    beats: [
      { name: 'checklist', ref: 'draft 46', note: 'Checklist de preparación agéntica: cinco puntos.' },
      { name: 'recursos', note: 'Enlaces reales: docs, notas de versión, ejemplos, skill. Comprobados el 2026-11-02.' },
      { name: 'preguntas', note: 'Preguntas. Enlaces y QR.' },
    ],
  },
];

/** La escena 14 (respaldo) solo existe cuando hay capturas reales de la demo: ver backup-steps.ts. */
export const SCENES: SceneDef[] = BACKUP_STEPS.length
  ? [...BASE_SCENES, {
    id: '14', title: 'RESPALDO',
    beats: BACKUP_STEPS.map((st, i) => (i === 0
      ? { name: st.name, note: 'RESPALDO, no forma parte de la charla. Se llega desde el overview (O). Salidas reales de adb capturadas en un dispositivo. Si la demo en directo falla, recórrelas en orden. Para tras Preguntas: un clic de más entra en esta escena.' }
      : { name: st.name })),
  }]
  : BASE_SCENES;
