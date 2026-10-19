# AUDIT — Muviss, audited with AI and the `hephestus` skills

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
| Static scan, errors | 4 | 4 — but **3 of the 4 are false positives** (decorative icon next to text inside a labelled row); only the 24 dp clear button is real |
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
| M1 | Clear-search button is **24 dp** (`IconButton(Modifier.size(24.dp))`) — the size on the button shrinks the target | `SearchScreen.kt:172` | 🔍 (only shows with text typed) |
| M2 | Triage: "Watching" is *swipe down* only; the buttons are Skip / Later / Watched / Snooze | `TriageScreen.kt` | ❓ confirm the missing button |
| M3 | Swipe gestures expose no `customActions` for TalkBack / Switch Access | `SwipeDeck.kt` | ✅ (no `customActions` in `feature/triage`) |

### Shift left
| # | Finding | Status |
|---|---|---|
| S1 | Android Lint treats a11y issues as errors in CI (good) — but **no ATF / `enableAccessibilityChecks()`** anywhere | ✅ grep |
| S2 | Nothing fails the build when B2/B3/B4/L1 come back | ✅ |

## What we could NOT check
Real TalkBack speech and focus order (B6), Switch Access, Voice Access, colour contrast over live posters, a person actually using the app. **A clean tool report is not a pass.**

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
| 09 Motor | ★ M1 + M3 — 24 dp clear button, `customActions` for the deck | `scan_compose.py` → fix | before/after |
| 09 Motor | M2 — "Watching" without a button | — | cut if no time |
| 10 Shift left | ★ S1 — add `enableAccessibilityChecks()` and the rules to `AGENTS.md`; `a11y-pr-review` (if built) | CI | the regression test failing, then passing |

## Honest findings for the "limits" scene (11)
- The static scan: **3 of 4 errors were false positives.**
- The tree audit missed L1, B2, B4 — the three most visible problems.
- UiAutomator is not TalkBack: order and roles differ (B6).
- On-device descriptions: English only (R1.3), beta (R1.2).
