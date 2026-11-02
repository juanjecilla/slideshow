# Handoff · Spanish copy of the talk (`ourense26/`)

**Goal:** a Spanish version of the deck at `app_functions/ourense26/`, published at
`https://juanjecilla.github.io/slideshow/app_functions/ourense26/`. The English deck stays the base (reusable elsewhere).
**Deadline:** before 2026-11-07 (event day). Start after the content freeze (≈ 2026-10-31, see `RELEASE-CHECKLIST.md`).
**Why a copy and not i18n:** decision of the grilling session. Single-project i18n is documented for later in
`juanjecilla/slideshow#3` ↔ `juanjecilla/beatdeck#1`.

## Status 2026-11-02: DONE
The Spanish copy exists at `ourense26/` (translated scenes, notes, config; own README and runbook; `build` + `verify` pass; QR → `/ourense26/`);
the landing card and `deploy.yml` already point to it. This file stays as the procedure and glossary for future updates.
Note: while translating, two stale bits of the English deck were found and fixed (`@AppFunction` on the BUILD phase of scene 8; the `isDescribedByKDoc` highlight on 9.2 looked for the old annotation name).

## State at hand-off (2026-10-11)
- English deck: 13 scenes + backup scene 14 (real adb output, nothing to translate except the eyebrow/notes), 83 beats, `npm run build` and `npm run verify` pass. Branch `talk/app-functions-devfest26` (local).
- Everything the audience reads is English. Code, API names, adb commands and URLs stay English in both decks.
- Open items that can still change English text before the freeze: real talk list in the demo (only affects a few
  ids/examples), library version re-check, `LocalTime` gotcha wording.

## 1 · Create the copy
```bash
cd ~/Projects/Charlas
rsync -a --exclude node_modules --exclude dist --exclude artifacts --exclude ourense26 --exclude .github \
  app_functions/ app_functions/ourense26/
cd app_functions/ourense26
```
Then edit:

| File | Change |
| --- | --- |
| `package.json` | `"name": "app-functions-skill-es"` |
| `index.html` | `<html lang="es">` and `<title>` (Spanish title) |
| `deck/index.tsx` | `id: 'app-functions-skill-es'` (separate localStorage / presenter channel), `lang: 'es'` |
| `deck/deck.config.ts` | `title`, `subtitle`, `role`, `event`; `qrUrl: 'https://juanjecilla.github.io/slideshow/app_functions/ourense26/'`, `qrLabel: 'juanjecilla.github.io/slideshow/app_functions/ourense26'` |
| `.beatdeck.json`, `README.md` | note that this is the ES copy; link to the base deck |

```bash
npm install
npm run dev     # http://127.0.0.1:5173/#1.1
```
The root `tsconfig` only includes `src`, `deck` and `vite.config.ts`, so the nested copy does not leak into the
English project's typecheck.

## 2 · What to translate

| Where | What | Notes |
| --- | --- | --- |
| `deck/scenes/*.tsx` | Every visible string (JSX text, `ITEMS`, `ROWS`, `PHASES`, `PILLARS`, `CHECKLIST`, `LINKS` labels, Typewriter lines) | Keep the structure and positions; re-check widths (Spanish runs ~15–25 % longer) |
| `deck/scenes.ts` | `title` of each scene, beat `name` and `note` (speaker notes, shown only in the presenter view) | Notes are the spoken script: write them as you would say them |
| `deck/deck.config.ts` | title, subtitle, role, event | CFP title: *Convierte tu app en una skill con App Functions* |
| `docs/RUNBOOK.md` | optional | |

**Do not translate:** `deck/code.ts` (generated, real code), anything inside `<Terminal>`, API/class/function names
(`AppFunctionService`, `searchTalks`, …), adb commands, URLs, `EXECUTE_APP_FUNCTIONS`, version `1.0.0-alpha10`,
the tool-call JSON on 5.2. KDoc and string literals inside code stay English (they are what the model reads).

## 3 · Glossary

| English | Spanish on stage | Note |
| --- | --- | --- |
| skill | skill | keep; defined on 5.3: "una capacidad tipada que un agente puede invocar" |
| tool calling, headless, on-device | tool calling, headless, en el dispositivo | keep the first two |
| agent / agentic | agente / agéntico | |
| function (AppFunction) | función (AppFunction) | |
| registry / index | registro / índice del sistema | |
| caller / client | quien llama / cliente | |
| favourites | favoritos | |
| talk | charla | |
| confirm / confirmation | confirmar / confirmación | |
| idempotent | idempotente | |
| typed error | error tipado | |
| agentic readiness | preparación agéntica | |
| unobtrusive | sin fricción | CFP says "sin romper la experiencia de usuario" |
| BUILD · INSTALL · DISCOVER · INVOKE · EXECUTE | COMPILAR · INSTALAR · DESCUBRIR · INVOCAR · EJECUTAR | scene 8 diagram nodes |

## 4 · Anchor translations (tone and key lines)

| Beat | EN | ES |
| --- | --- | --- |
| 1.2 | Turn your app / into a skill / with App Functions | Convierte tu app / en una skill / con App Functions |
| 1.2 sub | On-device agentic interactions on Android 16+ | Interacciones agénticas en el dispositivo, Android 16+ |
| 3.1 | Add the afternoon Android talks to my favourites, block them in my calendar and tell my team where I'll be. | Guarda las charlas de Android de la tarde en mis favoritas, bloquéalas en mi calendario y avisa a mi equipo de dónde estaré. |
| 3.6 | Talk 1 overlaps your lunch. Keep it? | La charla 1 se solapa con tu comida. ¿La mantengo? |
| 3.8 | No app was opened. / How does *your* app expose that? | No se abrió ninguna app. / ¿Cómo expone *tu* app eso? |
| 4.5 | The caller is no longer a screen. It is a model. | Quien llama ya no es una pantalla. Es un modelo. |
| 5.1 | A tool is a typed function a model can call. | Una tool es una función tipada que un modelo puede invocar. |
| 5.3 | skill = a typed capability an agent can invoke | skill = una capacidad tipada que un agente puede invocar |
| 6.1 | On-device tools. | Tools en el dispositivo. |
| 6.3 | analogy, not protocol | analogía, no protocolo |
| 6.7 | Experimental. | Experimental. |
| 6.8 | Local · Indexed · Described | Local · Indexada · Descrita |
| 7.1 | Why not just…? | ¿Por qué no simplemente…? |
| 10.1 | Secure. Deterministic. Unobtrusive. | Segura. Determinista. Sin fricción. |
| 10.6 | Destructive? Confirm first. | ¿Destructivo? Confirma primero. |
| 10.8 | The KDoc is the interface. | El KDoc es la interfaz. |
| 13.1 | Agentic readiness. | Preparación agéntica. |
| 13.3 | Questions? | ¿Preguntas? |

## 5 · Layout risks
- Statements are `nowrap` at 100–220 px: break lines explicitly. Longest risks: 6.7 status lines, 7.x table row names,
  10.x statements, 13.1 checklist.
- `.t-meta` and `.t-eyebrow` are uppercase: Spanish accents are fine; `ñ`/`¿`/`¡` render in the bundled mono font.
- Keep ≥ 120 px side margins (`beatdeck#2` will add an automatic warning; until then check by eye).
- If the 3.x scenario call labels get long, shorten the Spanish rather than moving nodes.

## 6 · Verify
```bash
npm run build
npm run shot -- 1.2 3 6.8 7 10 13.3     # look at every frame, not only the audit
npm run verify                           # ~5 min; QR must decode to the /ourense26/ URL
```
Checklist: no text outside the stage, no overlaps, all 83 beats identical forwards/back/URL, presenter notes in Spanish.

## 7 · After the copy
1. Landing card: switch `url` to `./app_functions/ourense26/` (marked `TODO(es-copy)` in `landing/index.html`).
2. `deploy.yml` already builds `app_functions/ourense26` when it exists; add `app_functions/ourense26/package-lock.json`
   to `cache-dependency-path`.
3. Any later change to the English text must be mirrored here; code snippets: run `python3 -I scripts/gen-code.py` in both.
