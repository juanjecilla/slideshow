# Release checklist — 21 Nov 2026

Nothing below has been done on the author's behalf: everything outward-facing (push, make public, merge) is a decision for the author.

## Local state (as of 2026-10-19)

| What | Where | State |
| --- | --- | --- |
| Deck, docs, web integration | `Charlas` branch `talk/a11y-ai-jerez26` | committed locally, **not pushed** |
| Toolkit | `~/Projects/hephaestus` (clone of `juanjecilla/hephaestus`, empty and **private** on GitHub) | committed locally, **not pushed** |
| App changes | `~/Projects/CodingPit/muviss-wt-a11y-main` (branch `talk/a11y-ai-jerez26`) and `muviss-wt-a11y-broken` (branch `demo/a11y-broken`) | committed locally, **not pushed** |

## Checked (2026-10-19)

| Check | Result |
|---|---|
| Deck: `npm run build`, `npm run verify` (57 beats, forward/back/URL, no overflow, no remote requests) | ✓ |
| Deck: `node tools/check-a11y.mjs` (live region, stage hidden from the a11y tree, Previous/Next, keyboard, theme, reduced motion) | ✓ 12/12 |
| Deck: contrast AA for every text token in both themes (`node tools/contrast.mjs`) | ✓ |
| Muviss `talk/a11y-ai-jerez26`: JVM tests of the changed modules, `spotlessCheck detekt` (pre-commit), `lintDebug` (a11y = error) | ✓ |
| Muviss: compile of the changed modules for **JS, Wasm and iOS simulator** (`app:shared` and the three UI features) | ✓ |
| Muviss: device audit on an API 36 emulator, before and after (`docs/AUDIT.md`) | ✓ 0 errors after |
| hephaestus: `claude plugin validate .` | ✓ |
| hephaestus: `/plugin marketplace add juanjecilla/hephaestus` | **not tried**: the repo is private and empty on GitHub |
| ML Kit GenAI on a real Pixel | **not tried** |
| Real TalkBack pass on Muviss; real screen reader (VoiceOver/NVDA) on the deck | **not tried** |
| Muviss: `ciWasm`/full `./gradlew build` and iOS app in Xcode | **not run** |

## Before the day

- [ ] Push the Charlas branch and open a PR against `main` (CI builds `a11y_ai/`). **Do not merge yet.**
- [ ] Rebase on `main` after `app_functions` merges on 7 Nov: expect conflicts in `landing/index.html` (`TALKS`, `TAGS`), `.github/workflows/deploy.yml`, `README.md`. Keep both talks.
- [ ] Push the two Muviss branches (the repo is public, so they become visible) or keep them local and say so in the talk. Fixes could be upstreamed as PRs into `develop` following Muviss' rules (landing guard, issues for undone work): not done.
- [ ] Capture the three Pixel assets (RUNBOOK) and replace the dashed boxes.
- [ ] `node tools/check-a11y.mjs` → all PASS. `npm run verify` → ✓.
- [ ] Re-check docs/research.md **Pending** items (Pixel AICore list, Ley 11/2023 text, Journeys and a11y).

## The morning of the 21st

- [ ] Make `juanjecilla/hephaestus` **public** and push (Apache-2.0, README has the install lines).
- [ ] Merge the Charlas PR: GitHub Pages deploys `/slideshow/a11y_ai/`. Open it and press → through the deck.
- [ ] Open the QR on a phone: it must land on the public repo.
- [ ] Muviss: the two talk branches are public (repo already is).

## After

- [ ] Spanish copy: `a11y_ai/jerez26/` following `app_functions/docs/HANDOFF-ES.md` (glossary). Note: Image Description is English-only (R1.3): live output stays English.
- [ ] Switch the landing entry's `url` to the Spanish copy if you want it first.

## What was changed on the author's machine (so nothing is a surprise)

- `~/Projects/hephaestus`: a clone of the empty private repo, with commits. Nothing pushed.
- `~/Projects/CodingPit/Muviss` (the main clone): **two branches and two worktrees added**, nothing else touched:
  `muviss-wt-a11y-main` (`talk/a11y-ai-jerez26`) and `muviss-wt-a11y-broken` (`demo/a11y-broken`). Both have `local.properties` copied from the main clone (it holds the TMDB and other keys: it is gitignored).
- The emulator `emulator-5554`: `com.codingpit.muviss.a11ytalk` installed next to the real app (and its data cleared with `pm clear` **for that package only**); Chrome was force-stopped to stop an ANR dialog (a Tally "Report a problem" form was open, empty); `device-toggles reset` was run several times (**it cleared `enabled_accessibility_services`, font scale, density and animation scales** to defaults). An `A11y_Talk` AVD was created for a second emulator, which segfaulted; it has been deleted.
- Nothing was pushed, merged, published, or posted anywhere.

## Issues opened in `juanjecilla/muviss-kmp` (2026-10-19)

#458 rating badge contrast over posters · #459 real TalkBack / Switch Access pass · #460 ATF checks in instrumented tests · #461 upstream the audit fixes (branch is local, unpushed) · #462 on-device ML Kit experiment, unverified on a device. All under EPIC 31b (#164) except #462.
