# DECISIONS — a11y on Android? AI makes it easy (DevFest Jerez 2026)

## Context
Nueva charla para **DevFest Jerez de la Frontera 2026** (21 nov 2026, Coworking CYCE, 45 min). Usa el mismo flujo que `app_functions/`: beatdeck, docs de decisiones, código generado desde un repo real, captures y backup. El formato cambia: es práctica y va por personas, con una app real (Muviss) que se audita y se arregla con IA. Se publica en `juanjecilla.github.io/slideshow/a11y_ai/`. Además se entrega un toolkit público de skills de a11y en `hephaestus`.

## Decisiones (grilling cerrado)
| # | Decisión |
|---|---|
| D1 | DevFest Jerez 2026 · 21 nov · CYCE · 45 min |
| D2 | Para todos los públicos. Más conceptos que código; snippets cortos y explicados; demos visuales |
| D3 | Primero en inglés (`lang: 'en'`). La copia ES irá después en `a11y_ai/jerez26/` + `HANDOFF-ES.md`. Textos fáciles de traducir |
| D4 | Enfoque práctico. Hilo emocional: las personas. Hilo técnico: Muviss arreglada en vivo. Teoría mínima |
| D5 | App demo `juanjecilla/muviss-kmp` (CMP 1.12, AGP 9.2, compileSdk 37, TMDB). Si no funciona, app nueva |
| D6 | 4 personas: ceguera (TalkBack), baja visión, cognitiva/dislexia, motora. Generar todos los escenarios y recortar después |
| D7 | Historia real con los PRs #233/#238/#245 como antes/después. Rama `demo/a11y-broken` (anterior a #233) para la demo en vivo. Las features IA nuevas van sobre main. **Antes hay que auditar** |
| D8 | Auditoría con varias herramientas, toda guiada por IA (código, `uiautomator dump`, lint/Scanner/UI Check, pase TalkBack), sobre main y sobre pre-#233 |
| D9 | Claude Code como orquestador (skills + adb + MCP). Gemini en Android Studio (agent mode, UI Check, Journeys/Testing Agent) como vía oficial. Mensaje: no depende de un vendor |
| D10 | ML Kit GenAI (Gemini Nano): Image Description, Summarization y Rewriting, en `androidMain` con expect/actual y fallback no-op. Gemma/MediaPipe solo documentado. Solo para la charla |
| D11 | UI adaptativa: (a) señales del sistema (TalkBack/Switch, fontScale → pasar de grid a lista, Triage swipe → botones/customActions, reduce motion, alto contraste); (b) toggle "Easy read" en la sinopsis. **Ajuste tras research (R1.4, R1.5):** Summarization no soporta ES y Rewriting no tiene estilo de lectura fácil → se llama "Short & simple" y usa Rewriting SHORTEN/REPHRASE (ES/EN) o Summarization (solo EN) |
| D10b | Image Description solo en inglés (R1.3): la demo en vivo es en EN; idea a validar, encadenar con ML Kit Translation. Todo es Beta (R1.2) |
| D12 | Incluir "por qué ahora" (EAA, vigente desde 28 jun 2025, + cifras) y "límites de la IA" (alucina, pasar lint ≠ accesible, validar con TalkBack/usuarios reales) |
| D13 | Demos en vivo (Pixel + scrcpy) + escena Backup con capturas/vídeos reales |
| D14 | Charla nueva. Se reutilizan 2–4 beats de contexto de `a11y/slides.md`. `a11y/` no se toca |
| D15/17 | `a11y_ai/` creada con `npx degit juanjecilla/beatdeck` + `npm run init` (el fork es idéntico al upstream a 2026-10-19) |
| D16 | Deck accesible: AA en ambos temas, `lang`, reduced-motion, teclado/foco, alt, subtítulos, `aria-live` por beat, meta-beat final. Limitaciones de a11y del motor → sección en DECISIONS.md + issues en el fork |
| D18 | Capturas webp/PNG reales + 2–4 MP4 de menos de 20 s con audio de TalkBack y WebVTT. Todo offline |
| D19 | Mismo pipeline: `scripts/gen-code.py` adaptado → `deck/code.ts` (marcadores + diffs) y `deck/captures.ts`. Ramas muviss: `talk/a11y-ai-jerez26`, `demo/a11y-broken` |
| D20–24 | Toolkit en `juanjecilla/hephaestus` (hoy vacío y privado; público el 21 nov). Plugin multi-agente: `skills/<name>/SKILL.md` + `.claude-plugin/` + compat `.agents/skills` + `tools/`. Apache-2.0. Primer módulo de un repo más grande de herramientas IA. Skills: `a11y-audit`, `a11y-fix` (+ tests semantics/ATF), `device-toggles`, `content-description-gen`, `talkback-speak`, `contrast-check`, `a11y-pr-review`, snippet de reglas a11y para AGENTS.md + prompt pack para Gemini. Cierre: Hefesto, el dios con discapacidad que construyó su propia tecnología de asistencia |
| D25 | Rama `talk/a11y-ai-jerez26` desde main. Merge/deploy el 21 nov. Rebase después del merge de app_functions (7 nov): habrá conflictos en landing/deploy/README |
| D26 | `a11y_ai/docs/`: DECISIONS, research (fact-check con ids `ref`), AUDIT (con escenarios por persona), RUNBOOK, RELEASE-CHECKLIST |
| D27 | Landing: entrada en `TALKS` (`landing/index.html` ~l.1221) con tags a11y/android/ia + thumbnail `thumb-a11y-ai.png` + fila en README + paso en `deploy.yml` |
| D28 | Título EN: "a11y on Android? AI makes it easy". Subtítulo: "From AI-driven audits to on-device inference" |
| D29 | Temas oscuro y claro (AA), acento azul a11y y un color por persona. Voto del público al abrir y toggle en vivo (`T`). En web, `prefers-color-scheme` + localStorage con try/catch |

## Cambios en el motor (para no perderlos con `npm run upgrade`)
Los ficheros de `src/beatdeck/` se identifican por hash en `.beatdeck.json`, y `npm run upgrade` los sobrescribe. **Nunca se parchean en local.** Los cambios del motor se hacen en el fork `juanjecilla/beatdeck` y entran con `upgrade`. Los cambios propios de la charla van en `deck/`.
- **Campo nuevo por beat** `sr` (en el fork, tipos de `scenes.ts`): un resumen corto de lo que se ve en pantalla. **El `aria-live` lee `sr` y nunca `note`**, porque `note` son las notas privadas del ponente.
- **Región `aria-live`** + `lang` + gestión del foco → fork.
- **Tecla de tema `T`** → fork. Está libre: hoy el motor usa flechas, PageUp/Down, espacio, Home/End, F, O, P, B/., Esc (`navigation.ts:66-92`). Los temas dark/light se definen en `deck/themes/`.

**Revisión (implementación del esqueleto, 19 oct):** la tecla `T` (`ThemeToggle`) y la región `aria-live` (`LiveRegion`) viven en `deck/a11y.tsx`, no en el motor: son componentes del `Stage` y no tocan `src/beatdeck/`. Los resúmenes para lectores de pantalla están en `deck/sr.ts` (clave `<id escena>.<nombre beat>`), separados de `note`, así que las notas privadas nunca se anuncian. El fork `juanjecilla/beatdeck` queda solo para las mejoras de a11y del propio motor (documentadas aquí cuando las auditemos). Temas en `themes/a11y.css`; `node tools/contrast.mjs` comprueba AA (4.5:1) de todos los tokens de texto en ambos temas.

## Alcance para el 21 nov
- **Imprescindible**: deck completo EN; skills `a11y-audit`, `device-toggles`, `talkback-speak`, `contrast-check` y `a11y-fix`; ML Kit Image Description y Easy read (Summarization o Rewriting); UI adaptativa a fontScale; Backup; landing.
- **Si da tiempo**: `content-description-gen`, `a11y-pr-review`, prompt pack para Gemini, Switch Access en vivo, mejoras de a11y del fork enviadas upstream como PR, copia ES.

## Escenas (base, se recorta tras AUDIT)
01 Open + voto dark/light 1.5' · 02 Me 1' · 03 Hook TalkBack en Muviss rota 2' · 04 Why now (permanente/temporal/situacional, EAA, cifras) 3' · 05 Mapa IA + preview de hephaestus 2' · 06 Ceguera: audit → fix+tests → Gemini Studio → Image Description del backdrop 9' · 07 Baja visión: fontScale 2.0, contraste de RatingBadge, grid→lista 6' · 08 Cognitiva: Easy read 5' · 09 Motora: 24dp, Triage customActions, Switch Access 4' · 10 Shift-left: CI, a11y-pr-review, AGENTS.md 3' · 11 Límites 2' · 12 Cierre: Hefesto + QR + "este deck es accesible" 2' · 13 Q&A 4' · 14 Backup (oculto).

Objetivos conocidos en Muviss: `SearchScreen.kt:173` (24dp), `PosterCard.kt:83` (clickable sin role ni selected), `RatingBadge.kt:34-50` (contraste, 11sp), `DetailScreen.kt:461` (backdrop con `null`), `DetailScreen.kt:425` (sinopsis), `PosterImage.kt:49`, clickables sin role (Settings:574, Progress:323, Lists:182, Upcoming:171, Snoozed:80), `TriageScreen.kt` swipe.

## Fases de ejecución
Hoy es 19 oct y quedan 33 días. app_functions se publica el 7 nov, así que el trabajo en paralelo es limitado.
1. **Research** (20–24 oct) → `a11y_ai/docs/research.md`: EAA, cifras, ML Kit GenAI (APIs, estado alpha/beta), Gemini en Studio (agent mode, Journeys), ATF en Compose, mito de Hefesto. Cada dato con su fuente. **Dos comprobaciones explícitas:** (a) si Image Description y Rewriting generan texto en idiomas distintos del inglés, porque de eso depende que la copia ES pueda mostrar salida real; (b) si el Pixel concreto de la demo está en la lista de dispositivos compatibles con Nano/AICore.
2. **Esqueleto del deck en paralelo** (desde el 22 oct): rama en Charlas → degit → `deck.config.ts`, temas dark/light, escenas 01–05 y 11–13 (no dependen de la auditoría).
3. **hephaestus v0** (22–29 oct): skills `a11y-audit`, `device-toggles`, `talkback-speak` y `contrast-check`, que son las que necesita la auditoría.
4. **Auditoría** (29 oct–2 nov). **Primer paso: comprobar que el commit anterior a #233 compila** con el toolchain actual y tiene las pantallas que necesitan las escenas, Triage incluida. Si no, se aplica el fallback de D5 o se inyectan fallos. Después, auditar main y pre-#233 con hephaestus + Gemini Studio → `AUDIT.md` (persona × herramienta, escenarios de las 4 personas), capturas y clips. **Checkpoint con el usuario (~3 nov): recorte de escenarios y tiempos.**
5. **Muviss** (3–10 nov): rama `demo/a11y-broken`; en `talk/a11y-ai-jerez26` implementar ML Kit (expect/actual), UI adaptativa, Easy read y los fixes restantes con tests. Capturas reales.
6. **Fork beatdeck** (en paralelo con 5): campo `sr`, `aria-live`, tecla `T` → `npm run upgrade` en `a11y_ai/`.
7. **Deck completo** (5–14 nov): escenas 06–10 y 14, `scenes.ts` con notas, `sr` y `ref`, `gen-code.py` → `code.ts`/`captures.ts`, media optimizada. Usar la skill `building-a-beatdeck` que viene en el scaffold.
8. **hephaestus completo** (hasta el 17 nov): `a11y-fix`, README, plugin manifest y lo que entre de la lista "si da tiempo".
9. **Web y docs** (14–18 nov): entrada en la landing, thumbnail, `deploy.yml` y README, con rebase después del 7 nov. DECISIONS (incluye las limitaciones de a11y de beatdeck), RUNBOOK (Pixel/scrcpy/TMDB/AICore), RELEASE-CHECKLIST.
10. **Ensayos** (18–20 nov): ≤45', backup probado. Merge el 21 nov.

## Verificación
- `npm run build -- --base /slideshow/a11y_ai/` OK; `scripts/check-offline.mjs` OK; `scripts/verify.mjs` y `shot.mjs` → `artifacts/` (contact sheet, presenter).
- Contraste AA validado en ambos temas (script). Navegar el deck con VoiceOver/NVDA: `aria-live` anuncia cada beat. Probar reduced-motion.
- Muviss: `./gradlew :app:androidApp:assembleDebug lintDebug` + tests en verde en ambas ramas. Demo completa en Pixel con TalkBack. ML Kit verificado en el dispositivo.
- hephaestus: instalar como plugin en Claude Code y ejecutar `a11y-audit` sobre Muviss en limpio.
- CI de Charlas en verde en el PR; ensayo con cronómetro ≤45'.

## Revisions made while building (2026-10-19)

| # | What changed | Why |
|---|---|---|
| R-1 | The Muviss talk branches install as `com.codingpit.muviss.a11ytalk` (`applicationIdSuffix`) | `adb install -r` of the pre-#233 build **failed silently** (`INSTALL_FAILED_VERSION_DOWNGRADE`) against the author's own build: the first audit run was on the wrong app. A second emulator would not boot (segfault, exit 139). Side-by-side install fixed both |
| R-2 | Motor scene (09) became "verify before you fix" | The scan's only motor finding (24 dp button) is a false positive: Compose already makes the touch area 48 dp, proved with a test that passes on the original code. The agent's "Watching has no button" and "no custom actions" were also wrong |
| R-3 | "Easy read" → **Short & simple** (Rewriting SHORTEN) | ML Kit has no easy-read style (R1.5) and Summarization has no Spanish (R1.4) |
| R-4 | A first poster fix moved the label to the caption and **left cut-off cards unlabeled** on device | Found by re-running the audit on the fixed build. Final fix: the poster stays the label, the caption is visual only |
| R-5 | A `selected` semantic on the poster made TalkBack read it as a checkbox | Found on device; removed |
| R-6 | `T` (theme) and `aria-live` live in `deck/a11y.tsx`, not in the beatdeck fork | They are `Stage` components; the engine is untouched, so `npm run upgrade` cannot undo them |
| R-7 | hephaestus `small-target` is a warning; test API in the skill docs corrected | `assertTouchHeightIsAtLeast` does not exist (only `…IsEqualTo`); found by compiling the snippet |
| R-8 | On-device features are **unverified on a real device** | The emulator has no Gemini Nano: the buttons correctly stay hidden there. Only the UI (with a fake model), the compile and the no-crash path are verified |

| R-10 | Visual direction: **Inspector** (`themes/inspector.css`) | The talk looks like the tool that audits the app: a real device with boxes and labels drawn from the UiAutomator bounds (`tools/gen-overlays.py`), tool panels for code and output, a dot-grid workspace, dark workspace on `T`. Same beat map, captures, notes and screen-reader summaries as before |
| R-9 | The stage is now `aria-hidden` and there are two real buttons (Previous/Next step) | **Found in review, not by me**: every scene layer stays mounted (opacity only), so a screen reader read the whole deck at once (`ariaSnapshot` at beat 1.2 contained "Questions?", "Hephaestus"…). The live region alone was not enough. The slide now says "tries to be accessible" |

## Revisions for the 20 Nov release (2026-11-10)

| # | What changed | Why |
|---|---|---|
| R-11 | Engine upgraded to beatdeck **0.8.1** (fork `juanjecilla/beatdeck`) with `npm run upgrade --from <clone>`; engine freeze Wed 18 Nov | `upgrade` pulls from upstream `borjaperfra` (still 0.5.1), so the fork needs `--from`. Brings `CodeBlock`, a stricter layout audit and the regression suite; the Ourense talk's code frames are the same component |
| R-12 | Code and tool output render in `CodeBlock` frames (`deck/ui.tsx` `Mono`); text unchanged | Same look as the Ourense talk. Code frames stay dark in both themes: title bar and highlights are tied to the `--code-*` tokens in `themes/inspector.css` |
| R-13 | Scene 06 gained a beat: `checkbox` (code) and `checkbox: heard` (speak output). `Describe image` is now 06.8 | The old 6.5 had three stacked blocks and overflowed the slide once code got a frame; two beats are also easier to read from the back of a room |
| R-14 | Scene 01 gained four beats: three shows of hands and a click-revealed twist ("You just picked an accessibility setting. You are all users of it.") | Same device as the Ourense audience check (no auto delay), tied to the dark/light vote. No statistic involved |
| R-15 | Scene 12 gained `resources` (toolkit, Muviss app, slides) before the accessibility close | People leave with every link. Links checked 2026-11-10; the slides URL is live only after the merge |
| R-16 | `tools/contrast.mjs` defaulted to the old `themes/a11y.css` and could not see the code frame | It reported ✓ while checking the wrong file. Now defaults to `inspector.css` and checks the `--code-*` tokens against the frame ground (46 pairs) |
| R-17 | English stays the default deck; the Spanish copy `jerez26/` ships the same night | Decision of 2026-11-10. Translated from the frozen EN deck so the two never drift |

## beatdeck accessibility: what the engine does and does not give (measured with `tools/check-a11y.mjs`)

Measured on the production build, 2026-10-19. Candidate fork issues for `juanjecilla/beatdeck`:

- **No accessible structure out of the box**: every scene layer stays mounted and hidden only by opacity, so the whole deck is in the accessibility tree at once; 0 landmarks; 0 focusable elements. We hide the stage and add a live region plus Previous/Next buttons in `deck/`. Real fix, upstream: hide non-current layers from assistive tech and ship the navigation buttons.
- **The stage is a fixed 1920×1080 canvas scaled to fit**: browser zoom and text-size settings do not reflow it (WCAG 1.4.4 / 1.4.10). Inherent to the model; document it for people who open the deck on a phone.
- **The overview, presenter and debug UI stay dark** whatever the theme: the theme switch only affects the stage.
- **No skip link, no visible focus targets**: everything is keyboard shortcuts. They work (checked: arrows, T, O, P, F, B), but they are undiscoverable without the RUNBOOK.
- **Reduced motion is honoured** by the engine (`.reduced-motion`): checked.
- **Images need `alt`**: the engine's `QR` has `role="img"` and an `aria-label`; our screenshots carry `alt` (checked: 0 images without it).

What the deck adds (verified): `lang="en"`, an announcement per beat from `deck/sr.ts` (never the speaker notes), `T` to switch theme, AA contrast in both themes for every text token (`tools/contrast.mjs`).
What it does **not** claim: it has not been tried with a real screen reader (VoiceOver/NVDA): the live region's content is checked, not how it is spoken.
