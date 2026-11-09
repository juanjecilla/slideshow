# Turn your app into a skill with App Functions

DevFest Ourense 2026 · GDG Ourense · 7 Nov 2026 · Juanje Cilla. 50 min, technical audience.
Built with [beatdeck](https://github.com/borjaperfra/beatdeck) (fork: [juanjecilla/beatdeck](https://github.com/juanjecilla/beatdeck)).

> **Live** since 2026-11-07 (DevFest Ourense): <https://juanjecilla.github.io/slideshow/app_functions/> (EN) and
> `/ourense26/` (ES). See `docs/RELEASE-CHECKLIST.md`.

## Run

```bash
npm install
npm run dev          # http://127.0.0.1:5173/#1.1   (P = presenter window, O = overview)
npm run present      # production build, opened locally (works offline)
npm run build        # typecheck + bundle + offline check
npm run verify       # every beat forwards / back / from URL → artifacts/verify/ (~5 min)
npm run shot -- 9.2  # quick frames while editing → artifacts/shot/
```

## What is here

| Path | What |
| --- | --- |
| `deck/` | The talk: `scenes.ts` (beat map + speaker notes), `scenes/NN-*.tsx`, `deck.config.ts`, `code.ts` |
| `deck/code.ts` | **Generated** from the demo project by `scripts/gen-code.py` (real code on the slides) |
| `docs/DECISIONS.md` | Why the talk is shaped this way (grilling session, 2026-10-11) |
| `docs/CONTENT-AUDIT.md` | Draft script (48 slides) → beats map; what was kept, fixed, cut |
| `docs/RUNBOOK.md` | The day of the talk: keys, presenter window, recovery |
| `docs/HANDOFF-ES.md` | **How to produce the Spanish copy** (`ourense26/`) |
| `docs/RELEASE-CHECKLIST.md` | What to do before and on 7 Nov: re-checks, PR, deploy, landing |
| `research.md` | Fact-check against primary sources, API findings, demo-project findings |
| `reference/` | CFP text and the original source list (low-trust sources flagged) |
| `scripts/gen-code.py` | Re-sync snippets **and demo captures** with the demo repo (`deck/code.ts`, `deck/captures.ts`, `reference/demo-captures/`) |

## Demo project

Public repo `juanjecilla/DevfestOurense26` (local: `~/Projects/Demos/DevfestOurense26`). Branches are checkpoints
(`01-base-agenda` → `02-appfunctions-skill` → `03-final` = `main`). Its README and `docs/DEMO.md` explain how to run
the live part. The agenda in it is the real DevFest Ourense one (read 2026-11-02).

## Status (2026-11-07)

- English deck complete: 13 scenes + backup scene 14 (real adb outputs, appears when captures exist), 90 beats; `build` and `verify` pass.
- Library `androidx.appfunctions 1.0.0-beta01` (checked 2026-11-02: the official skill and samples use it; the developer docs still showed alpha10). `1.0.0-rc01` was published on 2026-11-04 (checked 2026-11-07, dl.google.com Maven); the talk stays on beta01.
- Agenda: the real one, read 2026-11-02 from https://gdgourense.es/events/df26. Slot: Sat 7 Nov 13:00, Red Velvet.
- Demo built, unit-tested and **verified on a Pixel 9 Pro** (Android 17) with beta01 + the real agenda on 2026-11-02; real outputs feed backup scene 14. Testing Agent verified in manual mode; LLM mode (needs your own Gemini key) not run.
- Spanish copy (`ourense26/`): done 2026-11-02, `build` and `verify` pass; mirror every English change there (`docs/HANDOFF-ES.md`).
- Web integration (landing card, deploy job, README row, thumbnail) live (merged 2026-11-07, PR #5).
