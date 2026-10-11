# Turn your app into a skill with App Functions

DevFest Ourense 2026 · GDG Ourense · 7 Nov 2026 · Juanje Cilla. 50 min, technical audience.
Built with [beatdeck](https://github.com/borjaperfra/beatdeck) (fork: [juanjecilla/beatdeck](https://github.com/juanjecilla/beatdeck)).

> **Embargo:** nothing from this folder is deployed or pushed until 2026-11-07. It lives on a local branch
> (`talk/app-functions-devfest26`). See `docs/RELEASE-CHECKLIST.md`.

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

Private repo `juanjecilla/DevfestOurense26` (local: `~/Projects/Demos/DevfestOurense26`). Branches are checkpoints
(`01-base-agenda` → `02-appfunctions-skill` → `03-final` = `main`). Its README and `docs/DEMO.md` explain how to run
the live part. The agenda in it is **sample data** until the real talk list is published.

## Status (2026-10-11)

- English deck complete: 13 scenes + a backup scene (14, real adb outputs), 83 beats; `build` and `verify` pass.
- Library pinned to `androidx.appfunctions 1.0.0-alpha10` (matches official docs and skill); newer alphas exist.
- Demo verified on a Pixel 9 Pro (Android 17); real outputs captured for the backup scene. Testing Agent (needs your own Gemini key for LLM mode) and Gemini not run yet.
- Spanish copy: not started (`docs/HANDOFF-ES.md`).
- Web integration (landing card, deploy job, README row, thumbnail) prepared on the branch, not live.
