# AUDIT — Muviss, audited with AI and the `hephaestus` skills

Date: 2026-10-19 · App: `juanjecilla/muviss-kmp` · Device: Android emulator (API 36, 1080×2424, 420 dpi)
Builds: **before** = `demo/a11y-broken` (commit `4cc7994d`, the parent of #233) · **after** = `talk/a11y-ai-jerez26` (`origin/main` + `.a11ytalk` suffix). Both install next to the real app as `com.codingpit.muviss.a11ytalk`.
Evidence (screenshots, UiAutomator dumps, tool output): `reference/audit/{broken,main}/`.

Status: ✅ confirmed (reproduced on device) · 🔍 confirmed in code, not yet seen on device · ❓ suspected.

## Method (all driven by an agent)

1. `scan_compose.py` over the sources (static).
2. `dump_tree.sh` + `tree_audit.py` + `speak.py` on each screen (dynamic): search, library, progress, profile, settings, posters, detail, triage.
3. Repeat at `font-scale 2.0` (`device-toggles`), screenshot, and look at it.
4. The agent reads the code behind every hit and discards false positives.

## What each tool found (honest numbers)

| | before (pre-#233) | after (main) |
|---|---|---|
| Tree audit, errors | **4**: search field, 2 settings switches, watched checkbox — all *unlabeled* | **1**: the watched checkbox |
| Static scan, errors | 4 | 4 — **all 4 are false positives**: 3 decorative icons beside text inside a labelled row, and a 24 dp button whose *touch* area Compose already makes 48 dp (proved with a test that passes on the original code) |
| Font scale 2.0 | nav labels break mid-word | same |
| Real findings the tools missed | — | poster announced twice, hidden cards exposed, no ATF, backdrop undescribed |

The tools find the *cheap* problems. The expensive ones (does it read well? does it survive 200 % text?) needed `speak.py` output read by the model, and a screenshot looked at by a person or a vision model.

## Findings by person

### Blind — TalkBack
| # | Finding | Where | Status | Evidence |
|---|---|---|---|---|
| B1 | Search field, 2 settings switches and the "mark as watched" checkbox announced as «unlabeled» | `SearchScreen`, `SettingsScreen`, `DetailScreen` | ✅ **fixed in main** except the checkbox (B3) | `broken/*.speak.txt` vs `main/settings.speak.txt` |
| B2 | Poster announced twice: "Spider-Man…, button" then "Spider-Man…" (image `contentDescription = title` + the title text under it) | `PosterImage.kt:49`, `PosterCard.kt` | ✅ | `main/…speak.txt` |
| B3 | "Mark as watched": the row says "button" and a separate **unlabeled checkbox** that also toggles. Two controls for one thing, no state announced | `DetailScreen.kt:711` `MovieWatchedToggle` | ✅ on main | `main/detail2.audit.txt` |
| B4 | Triage deck: the cards **behind** the top card are focusable ("Matchbox the Movie, image", "Hope, image", then the real card) | `SwipeDeck.kt` (no semantics handling) | ✅ | `main/triage.speak.txt` |
| B5 | Detail backdrop has no description; the poster's description is just the title | `DetailScreen.kt:461`, `PosterImage.kt:49` | 🔍 | code |
| B6 | Detail screen: "Back" is announced last, after the whole page | detail | ❓ UiAutomator order ≠ TalkBack order: check with real TalkBack | `broken/…speak.txt` |

### Low vision
| # | Finding | Where | Status | Evidence |
|---|---|---|---|---|
| L1 | **At 200 % text the bottom-bar labels break mid-word**: "Searc/h", "Librar/y", "Progr/ess", "Profil/e", "Settin/gs". The tree audit sees nothing | `MuvissApp.kt` (`NavigationSuiteScaffold`) | ✅ before and after | `main/search-font2.png` |
| L2 | Rating badge: hard-coded amber text on a translucent black over the poster; contrast depends on the image; 11 sp | `RatingBadge.kt:34-50` | 🔍 | `contrast.py literals` |
| L3 | `labelSmall` = 11 sp | `Type.kt:58` | 🔍 | `scan_compose.py` |

### Cognitive · dyslexia
| # | Finding | Where | Status |
|---|---|---|---|
| C1 | The synopsis is one 60–70-word block in `bodyMedium` | `DetailScreen.kt:425` | ✅ visible in `broken/detail.png` |
| C2 | Triage "How it works" dialog: 5 rules plus a footnote at once | `TriageScreen` | ✅ |

### Motor
| # | Finding | Where | Status |
|---|---|---|---|
| M1 | ~~Clear-search button is a 24 dp target~~ **Retracted.** `IconButton(Modifier.size(24.dp))` is laid out at 24 dp but Compose enlarges its touch bounds to 48 dp. A test asserting `touchBounds == 48 dp` passes on the *original* code. I had this in the report as an error and in the skill docs as "the size on the button shrinks the target": both wrong | `SearchScreen.kt:172` | ✗ not a finding |
| M2 | ~~"Watching" is swipe-down only~~ **Retracted.** The screen renders a labelled button per verdict (`TriageScreen` KDoc: "the card is never the only way to decide"); "Watching" only exists for TV. I read the buttons on a movie card and missed that | `TriageScreen.kt` | ✗ not a finding |
| M3 | ~~Swipe has no `customActions`~~ **Downgraded.** There is no `customActions`, but the buttons make it unnecessary; TalkBack users are not blocked | `SwipeDeck.kt` | ℹ️ info |

### Shift left
| # | Finding | Status |
|---|---|---|
| S1 | Android Lint treats a11y issues as errors in CI (good) — but **no ATF / `enableAccessibilityChecks()`** anywhere | ✅ grep |
| S2 | Nothing fails the build when B2/B3/B4/L1 come back | ✅ |

## What we could NOT check
Real TalkBack speech and focus order (B6), Switch Access, Voice Access, colour contrast over live posters, a person actually using the app. **A clean tool report is not a pass.**

## Fixes applied on `talk/a11y-ai-jerez26` (commit `fix(a11y): announce each poster once…`)
B2 poster announced once (+ no-artwork fallback hidden) · B3 one watched checkbox · B4 deck back-cards hidden · L1 nav labels capped at 1.3× · tests in `core/designsystem` and `feature/search/ui`. JVM tests green. **On device:** pending re-run of the audit on the new build (see end of this file).

## Talk scenarios (candidates for scenes 06–10)

Cut rule: keep what has a *visible before/after* and a *distinct AI step*. ★ = proposed for the 45-minute cut.

| Scene | Scenario | AI step | Show |
|---|---|---|---|
| 06 Blind | ★ B1 — "before": the tree audit finds 4 unlabeled controls on pre-#233; agent fixes; tests | `a11y-audit` → `a11y-fix` (+ semantics tests) | `speak.py` before/after |
| 06 Blind | ★ B2 + B3 — what the tools *don't* flag: reading `speak.py` as a user | agent reads the output, proposes merge | live `speak.py` |
| 06 Blind | ★ B5 — backdrop and poster without a description | ML Kit **Image Description** on-device (English only, beta) | on-device demo, Pixel |
| 06 Blind | B4 — hidden cards in the deck | agent finds, `invisibleToUser()` fix | short |
| 07 Low vision | ★ L1 — nav labels at 200 % | `device-toggles font-scale 2.0` + a screenshot read by the model; adaptive nav | before/after screenshot |
| 07 Low vision | L2 — badge contrast | `contrast-check` + scrim | short |
| 08 Cognitive | ★ C1 — "Short & simple" synopsis | ML Kit **Rewriting** (ES/EN) or Summarization (EN only) | on-device demo |
| 09 Motor | ★ **M1 as a lesson, not a fix**: the scan says "24 dp target"; the agent writes a test; the test says 48 dp. Same for the 2 findings the agent itself got wrong | write the test *before* the fix | the green test on the "broken" code |
| 09 Motor | M2/M3 retracted: the agent misread the screen. Good material for the limits scene | — | one slide |
| 10 Shift left | ★ S1 — add `enableAccessibilityChecks()` and the rules to `AGENTS.md`; `a11y-pr-review` (if built) | CI | the regression test failing, then passing |

## Honest findings for the "limits" scene (11)
- The static scan: **all 4 errors were false positives** (see M1).
- The tree audit missed L1, B2, B4 — the three most visible problems.
- UiAutomator is not TalkBack: order and roles differ (B6).
- **The agent was wrong too:** it reported "Watching has no button" and "no `customActions`" as motor findings (M2, M3) after reading one movie card. The code says every verdict has a button. Caught by reading the KDoc; kept here on purpose.
- On-device descriptions: English only (R1.3), beta (R1.2).

## Re-audit on the fixed build (device, 2026-10-19)

`talk/a11y-ai-jerez26` at the "poster keeps its description" commit plus the on-device and grid commits, same driver, all screens (search, library, progress, profile, settings, posters, detail, triage, 200 % text): **tree audit: 0 errors on every screen.** Evidence: `reference/audit/fixed/`.

| # | Result on device |
|---|---|
| B1 | ✅ settings switch: one merged label |
| B2 | ✅ `Spider-Man: Brand New Day, button` once (was twice) |
| B3 | ✅ `Mark as watched, checkbox` once (was a button + an unlabeled checkbox) |
| B4 | ✅ the stack's back cards are gone from `speak.py` |
| L1 | ✅ `Search / Library / Progress / Profile / Settings` whole at 200 % (screenshot) |
| L-grid | ✅ one wide card at 200 % (screenshot `results-2x.png`) |
| B5, C1 (on-device) | ⚠️ **not verified on a real device**: the emulator has no Gemini Nano, the buttons are correctly hidden. Needs the Pixel (RUNBOOK) |
| B6 | ❓ still needs a real TalkBack pass |
| L2 | 🔍 not changed: needs the poster under the badge |

**Two of my own fixes were wrong the first time** and only the device showed it (docs/DECISIONS.md R-4, R-5): the label moved to a caption that scrolls out of view, and a `selected` state that read as a checkbox. The first "after" run was also junk: an ANR dialog (`Muviss isn't responding`) had replaced the app in every dump, and the tool reported 0 errors. Check what you audited before you trust the count.
