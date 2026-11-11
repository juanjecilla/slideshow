# Release checklist — DevFest Jerez, Sat 21 Nov 2026

Release window: **Fri 20 Nov, ~21:00**, all in one go. Saturday morning is smoke checks only.
Nothing outward-facing (push, PR, make public, merge) happens without the author's go-ahead at that step.
Plan and decisions: see `docs/DECISIONS.md` and the schedule at the bottom.

State below was checked **2026-11-10** unless a row says otherwise.

## Local state

| What | Where | State |
| --- | --- | --- |
| Deck + docs + web integration | `Charlas` branch `talk/a11y-ai-jerez26` | 21 commits ahead of `origin/main` (ca4499e), 0 behind. **Not pushed**, no PR. Landing entry, README row and deploy step already in |
| Toolkit | `~/Projects/hephaestus`, repo `juanjecilla/hephaestus` | **Private.** `main` has the a11y skills + PR #1 merged. PR #3 (merge-queue orchestrator) is **open**. Local clone sits on its branch |
| App changes | `~/Projects/CodingPit/muviss-wt-a11y-main` (`talk/a11y-ai-jerez26`, 6 commits ahead of `origin/develop`) and `muviss-wt-a11y-broken` (`demo/a11y-broken`) | **Local only.** The audit fixes themselves were upstreamed (Muviss PR #503, merged 2026-10-22) |
| Engine | beatdeck **0.8.1** (fork `juanjecilla/beatdeck`) | upgraded 2026-11-10; `deck/` untouched by the upgrade |

## Checked

| Check | Result |
| --- | --- |
| `npm run build` (typecheck, bundle, offline check) | ✓ 2026-11-10 |
| `npm run verify`: 63 beats forward / back / from URL, no console errors, 0 remote requests, QR → hephaestus | ✓ 2026-11-10 (6 non-failing margin warnings, listed under *Polish*) |
| `node tools/check-a11y.mjs` (live region, stage hidden from the a11y tree, Previous/Next, keyboard, theme, reduced motion) | ✓ 12/12 |
| `node tools/contrast.mjs`: AA for text tokens in both themes **and the code-frame tokens** | ✓ 46 pairs. *Until 2026-11-10 this tool audited the old `a11y.css`, not the shipped `inspector.css`, and did not model code frames: both fixed* |
| Muviss `talk/a11y-ai-jerez26`: JVM tests, `spotlessCheck detekt`, `lintDebug` (a11y = error); compile for JS, Wasm, iOS simulator | ✓ 2026-10-19 (not re-run since) |
| Muviss device audit, API 36 emulator, before and after (`docs/AUDIT.md`) | ✓ 2026-10-19, 0 errors after |
| hephaestus `claude plugin validate .` | ✓ 2026-10-19 |

## Gaps (not verified; what closes each one)

| # | Gap | What closes it | By | If it stays open |
| --- | --- | --- | --- | --- |
| G1 | ML Kit GenAI (Image Description, Rewriting) never ran on a real device | Pixel 9 Pro: `adb shell pm list packages \| grep aicore`; open a movie detail on `.a11ytalk`: **Describe image** and **Short & simple** must appear; first use downloads the model (network, minutes, same Google account) | Tue 17 | Replace the dashed boxes in 06.8 / 08.3 with the code + a line "not verified on a device"; say so in the talk |
| G2 | 06.8 / 08.3 show a dashed `TODO · capture on the Pixel` box | Screenshot + returned text from G1 → `deck/assets/`, replace the boxes, rebuild | Tue 17 | no dashed box ships (see G1 fallback) |
| G3 | 03.3 hook clip (TalkBack on the unfixed app, **with sound**) is a placeholder | Phone's own screen recorder with internal audio on (`adb screenrecord` has no audio), on `.a11ybroken`; add a WebVTT/transcript | Tue 17 | Black screen + say it live with TalkBack on the Pixel |
| G4 | A real TalkBack pass on Muviss; a real screen reader (VoiceOver/NVDA) on the deck | VoiceOver pass over the EN deck, one run through scenes 1–13 (live region speaks each beat, Previous/Next reachable). TalkBack: Muviss issue #459 stays open | Thu 19 | The slide says "tries to be accessible": keep it soft, and add what was not tested |
| G5 | Muviss full `./gradlew build` / `ciWasm`, iOS app in Xcode | Run both; only if they were affected since 2026-10-19 | Thu 19 | Say "compiled for JS, Wasm and iOS simulator", not "builds on CI" |
| G6 | hephaestus install lines (`/plugin marketplace add juanjecilla/hephaestus`) never tried against GitHub: the repo is private | Make it public, then try the install in a clean Claude Code session | Fri 20 (release) | README keeps its "untested until public" line until then |
| G7 | The slides URLs and the QR cannot be checked before the merge | After merge: open both decks, scan the QR on a phone | Fri 20 | Fall back to `dist/` on a USB stick |
| G8 | Research **Pending** items in `docs/research.md` (Pixel AICore list, Ley 11/2023 text, Journeys and a11y) | Re-check each; the Pixel 9 Pro line is closed by G1 | Mon 16 | Do not state them as facts on a slide |

## Before the day

- [x] Rebase on `main`: nothing to do, the branch already contains ca4499e (checked 2026-11-10)
- [x] Engine on 0.8.1; `build`, `verify`, `check-a11y`, `contrast` all pass
- [ ] Push the branch and open a **draft** PR (CI builds `a11y_ai/`). Do not merge
- [ ] hephaestus: merge or close PR #3 so public `main` is clean; both modules (a11y + agent workflow) stay in the README
- [ ] Spanish copy `jerez26/` from the **frozen** EN deck (glossary: `app_functions/docs/HANDOFF-ES.md`); wire it in `deploy.yml` and the landing like `ourense26`
- [ ] Close G1–G3 (Pixel), G8
- [ ] Polish pass (below), then **EN content freeze Tue 17**, engine freeze Wed 18
- [ ] Build both Muviss demo APKs and pre-download the Nano model (Thu 19)
- [ ] Gate, Thu 19: build / verify / check-a11y / contrast on both decks; timed rehearsal ≤ 45' with the live Pixel demo; backup drill (O → scene 14); one VoiceOver pass (G4). **Merge on Friday only if all green**

## Friday 20 Nov, ~21:00 (in this order)

1. [ ] Make `juanjecilla/hephaestus` **public** (Apache-2.0, README has the install lines); try the install (G6)
2. [ ] Merge the Charlas PR: GitHub Pages deploys `/slideshow/a11y_ai/` and `/slideshow/a11y_ai/jerez26/`; open both and press → through them (G7)
3. [ ] Push Muviss `talk/a11y-ai-jerez26` and `demo/a11y-broken` (the repo is already public)
4. [ ] Scan the QR on a phone: it must land on the public hephaestus repo
5. [ ] Landing: the entry opens, the ES link works

## Saturday 21 Nov

- [ ] `npm run present` from `dist/` works offline; `dist/` copy on a USB stick; Pixel charged, apps installed, Do Not Disturb on (RUNBOOK pre-flight)

## Polish (from `npm run verify`, non-failing, 2026-11-10)

- 6.2, 6.3: the "unlabeled" overlay label is 85 px from the right edge (safe margin 120)
- 6.7: "read, but hidden" overlay label covers the text under it (`data-audit="off"` if intended)
- 7.3, 7.4, 8.3: code frame 78–88 px from the bottom edge (safe margin 100)
- 6.7: the triage one-liner is 18 px, the stage minimum; it cannot be shown larger without cutting the line

## After

- [ ] Port `<Quote>` (`deck/quote/`) to beatdeck: issue on `juanjecilla/beatdeck`, issue #17 on the fork, same route as the standby (#16)
- [ ] Translate the two quotes for `jerez26/` (Spanish lines are in the grilling notes; Bjarnø keeps the unverified label)
- [ ] Image Description is English-only (R1.3): the live output stays English in the ES deck
- [ ] Muviss issues from 2026-10-19 stay open: #458 rating badge contrast over posters · #459 real TalkBack / Switch Access pass · #460 ATF checks in instrumented tests · #461 upstream the audit fixes · #462 on-device ML Kit experiment

## What was changed on the author's machine (so nothing is a surprise)

- `~/Projects/hephaestus`: a clone of the private repo, with commits; nothing pushed from the talk work.
- `~/Projects/CodingPit/Muviss` (the main clone): **two branches and two worktrees added**, nothing else touched: `muviss-wt-a11y-main` (`talk/a11y-ai-jerez26`) and `muviss-wt-a11y-broken` (`demo/a11y-broken`). Both have `local.properties` copied from the main clone (TMDB and other keys: gitignored).
- The emulator `emulator-5554`: `com.codingpit.muviss.a11ytalk` installed next to the real app (data cleared with `pm clear` for that package only); `device-toggles reset` was run several times (it cleared `enabled_accessibility_services`, font scale, density and animation scales to defaults).
- 2026-11-10: `npm run upgrade` to beatdeck 0.8.1 (from a clone of `juanjecilla/beatdeck` v0.8.1, run in `a11y_ai/`); a local preview server on 127.0.0.1:4173. Nothing pushed, merged, published or posted anywhere.

## Schedule

| When | What |
| --- | --- |
| Tue 10 – Thu 12 | health check ✓, engine 0.8.1 ✓, twist ✓, resources slide ✓, CodeBlock ✓; draft PR |
| Thu 12 – Mon 16 | polish, content/timing, hephaestus clean main + README, G8 |
| Tue 17 | Pixel 9 Pro: G1–G3 → **EN content freeze** |
| Wed 18 | `jerez26/` Spanish copy + landing/deploy; **engine freeze** |
| Thu 19 | Gate |
| Fri 20 ~21:00 | Release |
| Sat 21 | Smoke checks, talk |
