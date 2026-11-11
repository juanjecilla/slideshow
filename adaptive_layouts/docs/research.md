# Research — facts used in the talk

Every number or API claim on stage points here by id (`R…`). Checked against primary sources on **2026-10-19**.
Anything not verified is a `TODO` and must not go on stage as a fact.

## Window size classes

**R1 — Width size classes (5).** Source: [Use window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes) (last updated 2026-09-22).

| Class | Width |
| --- | --- |
| Compact | < 600 dp |
| Medium | 600 dp ≤ w < 840 dp |
| Expanded | 840 dp ≤ w < 1200 dp |
| Large | 1200 dp ≤ w < 1600 dp |
| Extra-large | ≥ 1600 dp |

Height has 3 classes: Compact < 480 dp, Medium 480–900 dp, Expanded ≥ 900 dp.

**R2 — Large and Extra-large are opt-in.** `currentWindowAdaptiveInfo(supportLargeAndXLargeWidth = true)`. The page does
not state the parameter's default value. Same page as R1.

**R3 — Muviss uses `isWidthAtLeastBreakpoint(WindowSizeClass.WIDTH_DP_MEDIUM_LOWER_BOUND)`.** The R1 page only shows the
height variant; the width one is Muviss's real code (`MuvissApp.kt:339-348`).

## Android 16 and the end of the opt-out

**R4 — Android 16 (API 36) ignores the restrictions on sw ≥ 600 dp.** Source: [Behavior changes: Android 16](https://developer.android.com/about/versions/16/behavior-changes-16).
> "For apps targeting Android 16 (API level 36), orientation, resizability, and aspect ratio restrictions no longer apply on displays with smallest width >= 600dp."

Ignored: `screenOrientation`, `resizeableActivity`, `minAspectRatio`, `maxAspectRatio`, `setRequestedOrientation()`,
`getRequestedOrientation()`. Exceptions: games (`android:appCategory`), the user opting in from the device's aspect-ratio
settings, screens smaller than sw600dp.

**R5 — The opt-out is temporary.** Same page: `android.window.PROPERTY_COMPAT_ALLOW_RESTRICTED_RESIZABILITY`.
> "The opt-out is temporary and won't apply when targeting API level 37 in a future Android release."

**R6 — Android 17 removes the opt-out.** Source: [Adaptive development for the expanding Android ecosystem](https://developer.android.com/blog/posts/adaptive-development-for-the-expanding-android-ecosystem),
Android Developers Blog, 19 May 2026, Fahd Imtiaz.
> "Android 17 (API level 37) sets a new quality baseline by removing that developer opt-out for orientation and resizability restrictions on large screen devices (sw > 600 dp)."

Same post: apps that meet the adaptive quality bar earn an "Optimized for large screens" badge on Google Play.

## Devices

**R7 — Large screens: "over 580 million".** (Re-checked on the page 2026-11-11; the same post says multi-device users spend 9x more and large-screen users ~5x more, "Google Internal Data, 2026".) Same post as R6 (19 May 2026): "with over 580 million large screen devices in the hands of users".

**R8 — "3.000M Android devices" is from 2021.** Announced at Google I/O 2021 ([TechCrunch, 18 May 2021](https://techcrunch.com/2021/05/18/android-now-powers-3b-devices)).
I found no 2026 total with the same wording (searched again 2026-11-11: no official figure; the nearest are "over 500 million" large-screen devices, Android Developers Blog 19 Dec 2025, and R7). Decision D27: the slide keeps the number and says it is from 2021 and outdated. The original slide (Nov 2025) says "3.000M dispositivos Android en el
mundo": on stage it is labelled with its date, or replaced by R7. **TODO(speaker):** pick one.

## Material 3 Adaptive

**R9 — Versions.** Source: [Compose Material3 Adaptive releases](https://developer.android.com/jetpack/androidx/releases/compose-material3-adaptive) (page updated 2026-10-09).
Stable **1.3.0** (2026-08-12); latest alpha 1.4.0-alpha03 (2026-10-07).
Artifacts: `adaptive`, `adaptive-layout`, `adaptive-navigation`, `adaptive-navigation3`.
`NavigationSuiteScaffold` is in `material3-adaptive-navigation-suite` (package `androidx.compose.material3.adaptive.navigationsuite`); the release page does not say which artifact holds it.
Muviss (main) pins `material3Adaptive = "1.2.0"` and does **not** include `adaptive-layout` or `adaptive-navigation`.

**R10 — List-detail sample.** Source: [List-detail layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail) (updated 2026-10-16).
`NavigableListDetailPaneScaffold(navigator, listPane = { AnimatedPane { … } }, detailPane = { AnimatedPane { … } })`;
`navigator.navigateTo(ListDetailPaneScaffoldRole.Detail, item)`; `navigator.navigateBack(backNavigationBehavior = BackNavigationBehavior.PopUntilScaffoldValueChange)`.
Default back behaviour is `PopUntilScaffoldValueChange`.

**R11 — Predictive back.** Same page as R10: opt in with `android:enableOnBackInvokedCallback="true"` on Android 15 or lower;
on by default when the app targets API 36 or higher.

## Muviss (real code; paths relative to `~/Projects/CodingPit/Muviss`)

Line numbers are pinned to Muviss `main` at commit `2d2c7e40` (checked 2026-10-20; it holds the `cb9bb006` legend fix). An earlier pass read the branch `feat/bug-report-form`, which has code main lacks (an onboarding branch in the nav `when`), so everything here was re-checked against main. `deck/code.ts` is generated from main by `tools/gen-code.py` (anchor-based, so it survives line shifts); re-run it against a fresh `main` checkout, and re-check these refs, if Muviss moves.

| Id | What | Where |
| --- | --- | --- |
| R20 | Bar → rail at Medium (`if (… isWidthAtLeastBreakpoint(WIDTH_DP_MEDIUM_LOWER_BOUND))`). No onboarding branch on main | `app/shared/src/commonMain/kotlin/com/codingpit/muviss/MuvissApp.kt:263-272` |
| R21 | `ScreenInsets` (safeDrawing minus bottom, `windowInsetsPadding`); `enableEdgeToEdge()` | `core/designsystem/.../layout/ScreenInsets.kt:23-45`, `MainActivity.kt:56-58` |
| R22 | Detail: `BoxWithConstraints`, 840 dp | `feature/search/ui/.../DetailScreen.kt:155-156,191,199-203` |
| R23 | `GridCells.Adaptive(minSize = 110.dp)` | `SearchScreen.kt:189` (also `CollectionScreen`, `ListContentsScreen`) |
| R24 | Width caps: Detail 640 dp, Triage 420 dp | `DetailScreen.kt:301-303,323`, `TriageScreen.kt:871` |
| R25 | Profile legend: wide Row / narrow Column; fix for the tablet legend (`cb9bb006`, #64) | `feature/profile/ui/.../ProfileCharts.kt:196-320` |
| R26 | Desktop `MenuBar`, `accelerator()`, no ⌘Q shortcut on macOS | `app/desktopApp/src/main/kotlin/com/codingpit/muviss/Main.kt:230-289` |
| R27 | Window size/position persisted, 1100×720 default, 480×360 minimum | `DesktopWindowState.kt:33,36`, `Main.kt:190` |
| R28 | Triage keyboard: arrows, Z undo, S snooze | `feature/triage/ui/.../TriageScreen.kt:212,364-382` |
| R29 | Manifest sets neither `resizeableActivity` nor `screenOrientation` | `app/androidApp/src/main/AndroidManifest.xml` |
| R31 | Predictive back is opted in: `android:enableOnBackInvokedCallback="true"` on `<application>` | `AndroidManifest.xml:25` |
| R30 | Targets: Android, iOS (iPhone + iPad), desktop (JVM), web (`js` and `wasmJs`) | `build-logic/.../muviss.kmp.library.gradle.kts:30-40` |

Gaps in Muviss (for the "deuda" scene): no `ListDetailPaneScaffold` / `SupportingPaneScaffold`, predictive back is opted in (R31) but there is no `NavigableListDetailPaneScaffold`/back-by-pane, no
foldable/posture code, no hover/stylus, breakpoints split between 600 dp (size class) and 840 dp (container width),
no tablet/foldable/desktop screenshots in the repo.

## Original deck (Nov 2025, Ponferrada) — claims that changed

- Slide 21 listed 3 size classes (Compact, Medium, Expanded); now 5 (R1).
- Slide 28 "Do: `resizeableActivity="true"`, drop `screenOrientation` and min/maxAspectRatio": since API 36 they are ignored on sw ≥ 600 dp (R4); the advice becomes "don't depend on them".
- Slide 7 "3.000M" → R8.
