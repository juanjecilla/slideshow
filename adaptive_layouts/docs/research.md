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

## Devices catalogue (R12)

Research pass on 2026-11-11, primary sources only (developer.android.com, Android Developers Blog, blog.google). Every entry carries its check date and URL. Items marked **UNCERTAIN** are not stated as fact on stage without a re-check.

Ecosystem anchors: Google's official device list ("Device form factors") names seven categories: phones/tablets/foldables, cars, TV, Android XR, Wear OS, ChromeOS and Googlebook ([developer.android.com/multidevice](https://developer.android.com/multidevice), checked 2026-11-11). The May 2026 post says "over 580 million large screen devices" ([Adaptive development for the expanding Android ecosystem](https://developer.android.com/blog/posts/adaptive-development-for-the-expanding-android-ecosystem), 19 May 2026, checked 2026-11-11).

### 1. Teléfono / Phone
- **What:** Handheld Android phone, the default target and the baseline for adaptive layouts.
- **Surface:** Android (phones).
- **Phone app reaches it:** Yes, natively.
- **Window class:** Compact width (< 600 dp) in portrait.
- **Source:** [Phones, tablets, and foldables](https://developer.android.com/phones-tablets-foldables) and [Use window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes), checked 2026-11-11.

### 2. Tableta / Tablet
- **What:** Large-screen Android device, usually landscape, with the same app as phones.
- **Surface:** Android (tablets).
- **Phone app reaches it:** Yes, if layouts adapt. Android 16+ ignores orientation locks on sw >= 600 dp.
- **Window class:** Medium or Expanded (600–1199 dp).
- **Source:** [Behavior changes: Android 16](https://developer.android.com/about/versions/16/behavior-changes-16), checked 2026-11-11; [Phones, tablets, and foldables](https://developer.android.com/phones-tablets-foldables), checked 2026-11-11.

### 3. Plegable / Foldable (book, flip, tabletop postures)
- **What:** A phone that unfolds into a tablet-size screen. Postures: flat, tabletop (half-open horizontal), book (half-open vertical).
- **Surface:** Android (foldables). Dual-screen mode and rear display mode are listed as supported foldable display modes.
- **Phone app reaches it:** Yes. Foldables are mobile form factors in the same APK.
- **Window class:** Compact on the cover screen, Medium/Expanded when open. Changes instantly on fold/unfold.
- **Source:** [Foldables quality guidelines](https://developer.android.com/docs/quality-guidelines/adaptive-app-quality/experiences/foldables), checked 2026-11-11; [Support trifolds and landscape foldables](https://developer.android.com/develop/ui/compose/layouts/adaptive/foldables/trifolds-and-landscape-foldables), checked 2026-11-11.
- **Note:** Flip (clamshell) as a named category is not defined on the pages checked. Describe by posture, not by name. **UNCERTAIN** for a strict "flip" category.

### 4. Tri-plegable / Tri-fold
- **What:** Foldable with two folds, unfolding to a large display. Developer docs cite the Samsung Trifold as an example.
- **Surface:** Android (foldables).
- **Phone app reaches it:** Yes, as a foldable.
- **Window class:** Medium or Expanded when fully unfolded. No tabletop or HALF_OPENED posture.
- **Source:** [Support trifolds and landscape foldables](https://developer.android.com/develop/ui/compose/layouts/adaptive/foldables/trifolds-and-landscape-foldables), checked 2026-11-11.
- **Note:** No launch date or model name is verified on a primary source in this pass. **UNCERTAIN** on the model list.

### 5. Pantalla conectada / Connected display (escritorio desde el móvil)
- **What:** Phone or tablet plugged into an external monitor. It opens a desktop session with a taskbar and freely resizable windows.
- **Surface:** Android (Connected Displays), available on supported Pixel and Samsung devices.
- **Phone app reaches it:** Yes, with no code change, if layouts adapt. Windows are freely resizable, so any window class applies at runtime. Phones start a new desktop session on the external display. Tablets extend one session across both screens.
- **Window class:** Large (1200–1599 dp) or Extra-large (>= 1600 dp) on a monitor (the connected-display post cites an Extra-large desktop monitor as its example). Large and Extra-large are opt-in via `currentWindowAdaptiveInfo(supportLargeAndXLargeWidth = true)`.
- **Status:** General availability with Android 16 QPR3. Blog dated 3 Mar 2026. Supported devices: Pixel 8/9/10 series and Samsung devices such as S26, Fold7, Flip7, Tab S11.
- **Source:** [Android devices extend seamlessly to connected displays](https://developer.android.com/blog/posts/android-devices-extend-seamlessly-to-connected-displays), 3 Mar 2026, checked 2026-11-11.

### 6. Chromebook (ChromeOS)
- **What:** Laptop or convertible running ChromeOS, with Android apps from Google Play.
- **Surface:** ChromeOS.
- **Phone app reaches it:** Yes, via Google Play. The page asks for keyboard, trackpad and mouse support.
- **Window class:** Large or Extra-large in landscape (inferred; the page names no size class).
- **Source:** [ChromeOS](https://developer.android.com/chrome-os), checked 2026-11-11; [Adaptive development for the expanding Android ecosystem](https://developer.android.com/blog/posts/adaptive-development-for-the-expanding-android-ecosystem), 19 May 2026, checked 2026-11-11 (cites "Large-screen users (tablets, foldables, and Chromebooks)").

### 7. Googlebook (laptop, Android-based)
- **What:** A new laptop category built on a shared Android foundation. It is the next generation of ChromeOS. The OS is "Googlebook OS". Phone apps run on it.
- **Surface:** Googlebook OS (built on a shared Android foundation; the next generation of ChromeOS). Apps run in free-form windows with multi-instance support.
- **Phone app reaches it:** Yes. Optimized apps get a "Optimized for desktop" badge on Google Play.
- **Window class:** Large or Extra-large (inferred). Layout follows window size, not physical display.
- **Status:** Announced 12 May 2026 (The Android Show: I/O Edition). Pre-orders 21 Sep 2026. US shelves 4 Oct 2026. From $899. OEMs: Acer, ASUS, Dell, HP, Lenovo.
- **Sources:** [Land your apps on Googlebook with adaptive development](https://developer.android.com/blog/posts/land-your-apps-on-googlebook-with-adaptive-development), 22 Sep 2026, checked 2026-11-11; [Googlebook pre-order announcement](https://blog.google/products-and-platforms/devices/googlebook/pre-order-googlebook/), checked 2026-11-11; [Googlebook developer page](https://developer.android.com/googlebook), checked 2026-11-11.
- **Note:** The 12 May date comes from secondary coverage (search results), not the Google page. **UNCERTAIN.** Check before stage use.

### 8. Televisor / TV (Google TV, Android TV)
- **What:** Living-room TV with a remote control, a directional pad, or a pointer remote. Apps are designed for a 10-foot view.
- **Surface:** Android TV / Google TV.
- **Phone app reaches it:** Partially. The 19 May 2026 post cites "enhanced pointer support for Android TV" as a way for adaptive apps to reach the living room. Classic TV apps are D-pad, 10-foot designs.
- **Window class:** Not stated on the TV page. Do not assume a class.
- **Status:** Google TV and Android TV together reach over 300 million monthly active devices, per the May 2026 developer post.
- **Sources:** [Android TV](https://developer.android.com/tv), checked 2026-11-11; [Increase Google TV app discovery](http://android-developers.googleblog.com/2026/05/increase-google-tv-app-discovery.html), 19 May 2026, checked 2026-11-11.
- **Note:** The developer.android.com TV page still says "Android TV" throughout; "Google TV" appears only in the blog post. Device types are not described on the page. **UNCERTAIN** on the exact device list.

### 9. Reloj / Watch (Wear OS)
- **What:** Smartwatch running Wear OS, with glanceable UI and a round or square screen.
- **Surface:** Wear OS. The latest version named on the developer page is Wear OS 7.
- **Phone app reaches it:** No. Separate app built with Compose for Wear OS.
- **Window class:** Not covered by window size classes. Small screen; Compose for Wear OS.
- **Source:** [Wear OS](https://developer.android.com/wear), checked 2026-11-11; [Enhance your app for the new Pixel lineup](https://developer.android.com/blog/posts/enhance-your-app-for-the-new-pixel-lineup-unveiled-at-made-by-google), 11 Aug 2026, checked 2026-11-11 (Pixel Watch 5, Wear OS 7).

### 10. Coche / Car (Android Auto y Android Automotive OS)
- **What:** Two surfaces. (a) Android Auto: the phone projects a driver-optimized version of the app to the car's screen. (b) Android Automotive OS: the car runs Android itself, with apps installed on the infotainment system.
- **Surface:** Android Auto (projection from phone, Android 9+). Android Automotive OS (cars with Google built-in).
- **Phone app reaches it:** Android Auto shows a driver-optimized version of the app, not the phone layout. Android Automotive OS: the Car Ready Mobile Apps program distributes selected video, game and browser apps, by invitation only, and only when parked. Apps are not usable while driving.
- **Window class:** Car display, not covered by phone window classes. Driver-optimized templates.
- **Status:** Car Ready Mobile Apps distribution from February 2025, cars with Google built-in only. Android Auto support for those apps is "stay tuned". Google reported 250 million+ Android Auto-compatible cars (May 2026, secondary coverage of blog.google).
- **Sources:** [Android Auto and Android Automotive OS](https://developer.android.com/cars), checked 2026-11-11; [Car ready mobile apps](https://developer.android.com/training/cars/car-ready-mobile-apps), checked 2026-11-11.
- **Note:** The 250 million figure is secondary. **UNCERTAIN.**

### 11. Gafas XR con cable / Wired XR glasses (XREAL AURA)
- **What:** Wired XR glasses with a portable compute puck. Under 95 grams.
- **Surface:** Android XR.
- **Phone app reaches it:** Yes, as 2D panels. The XR post says existing apps "work out of the box on day one"; full immersion needs the Jetpack XR SDK.
- **Window class:** Not a phone size class. Spatial/glanceable UI, Compose Glimmer for optical see-through.
- **Status:** Launched at Android Developer Summit (Nov 2026). Post dated 6 Nov 2026.
- **Source:** [Build for an expanding lineup of Android XR devices](https://developer.android.com/blog/posts/build-android-xr-devices-tools), 6 Nov 2026, checked 2026-11-11.

### 12. Auriculares XR / Headset XR (Galaxy XR)
- **What:** Mixed-reality headset with an immersive or passthrough view.
- **Surface:** Android XR.
- **Phone app reaches it:** Yes, as 2D panels. The 19 May 2026 post lists XR among "large screens devices including foldables, tablets, Chromebooks and XR". Full immersion needs the Jetpack XR SDK or Android XR SDK.
- **Window class:** Spatial volumes, not a phone window class.
- **Status:** Galaxy XR is "already available today" per the June 2026 developer post. Launch 21 Oct 2025 at $1,799 is from secondary coverage only.
- **Sources:** [What's New in Android XR](https://developer.android.com/blog/posts/what-s-new-in-android-xr-tooling-engine-support-and-ecosystem-updates), 15 Jun 2026, checked 2026-11-11; [Android XR](https://developer.android.com/xr), checked 2026-11-11.
- **Note:** The developer page names no specific device. **UNCERTAIN** on the launch date and price.

### 13. Gafas inteligentes / AI glasses (audio y pantalla)
- **What:** Lightweight glasses with a camera, microphone and speaker (audio glasses), or with an in-lens display (display glasses). They work with the phone.
- **Surface:** Android XR (intelligent eyewear).
- **Phone app reaches it:** No. Audio-first or glanceable app design.
- **Window class:** None. Design guidance is "AI Glasses" and sound/earcon guidance.
- **Status:** At I/O 2026 (19 May 2026), Google said audio glasses are "launching first, coming later this fall". Display glasses are announced without a date. Partners named in the 19 May 2026 post: Samsung, Gentle Monster, Warby Parker. **UNCERTAIN** on whether audio glasses have shipped as of 2026-11-11.
- **Sources:** [Intelligent eyewear is coming this fall](https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/), 19 May 2026, checked 2026-11-11; [AI Glasses design](https://developer.android.com/design/ui/ai-glasses), checked 2026-11-11 (linked from the developer page).

### Not covered in this pass (no primary source found)
- Rollable phones: not mentioned in any Android developer page checked. Excluded.
- Play Games on PC (Windows): checked 2026-11-11. The page says games can be distributed "across mobile, tablets, Chromebooks, and Windows PCs", but it does not say that all Android games run there. It covers games only. Source: [Google Play Games on PC](https://developer.android.com/games/playgames/overview), last updated 2026-10-13. Not added as a kind; an exotic option only for a games talk.
- E-ink readers, projectors, kiosks/POS, smart displays: not checked on primary sources in this pass. Excluded; add only after a primary-source check.
- Desktop windowing as a generic term: covered by connected displays and Googlebook. Source: [Desktop experiences](https://developer.android.com/design/ui/desktop), checked 2026-11-11 (defines the free-form, taskbar, multi-desktop model; does not name devices).
- Android 17 release status: the Android 17 page states the adaptive-first standard but gives no release date; API 37 is shown in links only. Source: [Android 17](https://developer.android.com/about/versions/17), checked 2026-11-11. The 19 May 2026 blog says "With the release of Android 17", so treat it as released. **UNCERTAIN** on the exact release date.

### Recommended slide order (familiar to exotic), 12 kinds
Icon suggestions use simple inline SVG shapes on a 24x24 grid.

1. **Teléfono** — Phone. Icon: tall rounded rectangle with a small circle at the bottom.
2. **Tableta** — Tablet. Icon: wide rounded rectangle, landscape, with a small circle at the bottom edge.
3. **Plegable** — Foldable. Icon: two rounded rectangles side by side with a dashed vertical fold line in the middle.
4. **Tri-plegable** — Tri-fold. Icon: three rounded rectangles in a row, with two dashed fold lines.
5. **Pantalla conectada** — Connected display. Icon: phone shape on the left, arrow pointing right, monitor shape on the right.
6. **Chromebook** — Icon: laptop shape with a rectangular screen and a flat base line.
7. **Googlebook** — Icon: the same laptop shape, with a small circle in the top-left corner of the screen.
8. **Televisor** — Icon: wide rectangle with a short stand line below, and a small rounded D-pad circle in the lower right corner of the screen.
9. **Reloj** — Icon: circle with a short strap line above and below.
10. **Coche** — Icon: flat car silhouette, a trapezoid body with two circles for wheels.
11. **Gafas XR con cable / headset XR** — Icon: two circles side by side joined by a bridge, with a short line from each circle to the edge.
12. **Gafas inteligentes** — Icon: same two-circle glasses icon, with a small dot in one lens (camera).

**Use the full set (12) only if the slide budget allows.** Cut 4 (tri-fold) and 12 (gafas inteligentes) first if needed; both have **UNCERTAIN** status.
