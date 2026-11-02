# Fact-check — AppFunctions talk (DevFest Ourense 2026)

Checked 2026-10-11 against primary sources only. Legend: ✅ confirmed · ❌ wrong in draft script · 🔧 corrected · ⏳ still open.
Low-trust sources (freedium mirror, prachub, the two "architectural analysis" docs, YouTube short) were **not** used as evidence.

Sources (S#):
- S1 https://developer.android.com/ai/appfunctions
- S2 https://developer.android.com/ai/appfunctions/add-appfunctions
- S3 https://developer.android.com/reference/android/app/appfunctions/AppFunctionManager
- S4 https://developer.android.com/jetpack/androidx/releases/appfunctions
- S5 https://github.com/android/skills/tree/main/device-ai/appfunctions (SKILL.md + references/, last-updated 2026-08-14)
- S6 https://github.com/android/appfunctions (README)
- S7 https://developer.android.com/develop/background-work/services/fgs/service-types

## Framing

| # | Claim in draft | Verdict | Evidence / correction |
|---|---|---|---|
| F1 | AppFunctions "implements MCP" / app is "an MCP server" (slides 12-13) | 🔧 | S1: apps "behave like on device MCP servers"; AppFunctions are "the mobile equivalent of tools within MCP". Analogy, not the protocol. Use "on-device equivalent of MCP tools". |
| F2 | Any compatible agent (Gemini, Claude…) can call them (slide 10) | ❌ | S1: callers need `EXECUTE_APP_FUNCTIONS`; "only a limited number of apps and system agents can access the entire pipeline". Gemini integration: "As of May 2026 … private preview with trusted testers". |
| F3 | Stable API | ❌ | S1: "Experimental … subject to change". Jetpack still `1.0.0-alpha13` (S4). Say so on a slide. |
| F4 | Android 16 / API 36+ | ✅ | S1: "available on devices running Android 16 or higher". |
| F5 | EAP form exists | ✅ | S1 (registering interest does not grant access). |

## Build / setup

| # | Claim | Verdict | Evidence / correction |
|---|---|---|---|
| B1 | `compileSdk = 36` (or 37) | 🔧 | S2: `compileSdk` 36 or higher. S5 (skill): `targetSdk 36`+ and `compileSdk 37`+. **Sources disagree** — slide: "compileSdk 36+ (37 for dynamic APIs)" and say which one the demo uses. |
| B2 | KSP `androidx.appfunctions:appfunctions-compiler` | ✅ | S2 (`ksp(...)`). |
| B3 | `aggregateAppFunctions = true` | ✅ (⏳ exact syntax) | S5: "ensure the `ksp` argument `appfunctions:aggregateAppFunctions` is set to "true"" (troubleshooting). Needed in multi-module setups; verify in demo project and show the real `ksp { arg(...) }` line. |
| B4 | `@AppFunctionServiceEntryPoint` since alpha10 | ✅ | S4 (alpha10, 2026-07-01), S2, S5. Replaces `AppFunctionConfiguration.Provider`; all `@AppFunction`s must live inside that service. |
| B5 | Hilt `@AndroidEntryPoint` on the abstract service | ✅ | S2/S5. Not Hilt-only: service-locator/Koin variant shown in S5. |
| B6 | Version for slides | ⚠️ **SUPERSEDED 2026-11-02 → `1.0.0-beta01` (see "Re-check before the event" below).** Was: ✅ DECIDED 2026-10-11: pin `1.0.0-alpha10` (matches official docs + skill + ChatApp sample)** | S4 timeline: alpha09 2026-05-06 · **alpha10 2026-07-01** · alpha11 2026-08-26 · alpha12 2026-09-23 · **alpha13 2026-10-07** (renames `@AppFunction` → `AppFunctionDeclaration`, adds `@AppFunctionAccessLevel`; alpha12 removes `AppFunctionContext`/`AppFunctionConfiguration`). Docs S2 "Last updated 2026-09-22", still alpha10. Skill S5 last commit 2026-08-24 (frontmatter `last-updated: 2026-08-14`), no mention of alpha11+. `android/appfunctions` main (last commit 2026-10-06) pins `appfunctions = "1.0.0-alpha10"`. **Slides show "alpha10" + a "newer versions exist" note. Re-check S4/S2/S5/S6 one week before (≈2026-10-31); if docs/skill moved, update snippets.** Demo: pin the version in `libs.versions.toml` and in the prompt given to the skill (skill says "alpha10 *or later*", an agent may resolve alpha13 and emit code that no longer compiles). |
| B7 | Manifest: `BIND_APP_FUNCTION_SERVICE` + `app_metadata` property | ✅ (🔧 detail) | S2: service needs `android:permission="android.permission.BIND_APP_FUNCTION_SERVICE"`, `<property android.app.appfunctions.schema / .v2>`, intent-filter action `android.app.appfunctions.AppFunctionService`; app-level `<property android.app.appfunctions.app_metadata android:resource="@xml/app_metadata">`. |
| B8 | `@AppFunction(isDescribedByKDoc = true)`; KDoc becomes agent-facing description | ✅ | S2. |
| B9 | `@AppFunctionSerializable` + KDoc inline per property (no `@param`) | ✅ | S5 "KSP compliance for serializables". |
| B10 | Supported types | ➕ | S5: Int/Long/Float/Double/Boolean, primitive arrays, String, PendingIntent, Uri, LocalTime/Date/DateTime, Instant, `@AppFunctionSerializable`, `List`. Use for the determinism slide. |

## Discovery / indexing / security

| # | Claim | Verdict | Evidence / correction |
|---|---|---|---|
| D1 | KSP generates XML schema listing functions; OS indexes it | ✅ | S1. |
| D2 | Stored in AppSearch as `AppFunctionStaticMetadata` | ⏳ | S1 never mentions AppSearch; S5 troubleshooting says "AppSearch indexing failed". Platform API exposes `searchAppFunctions(AppFunctionSearchSpec…)` returning `AppFunctionMetadata` (S3). **Slide: "indexed by the system (AppSearch-backed)"; do not name `AppFunctionStaticMetadata`** unless confirmed in AOSP source. |
| D3 | Indexed "at install" | ⏳ | S2: "AppFunctions indexation may not be fully completed upon initial app startup" (comment in `setAppFunctionEnabled` sample). Don't promise "at install"; say "indexed by the system after install/update, not at app start". |
| D4 | Caller needs `EXECUTE_APP_FUNCTIONS` | ✅ | S1. |
| D5 | `isAppFunctionEnabled()` | ✅ | S3: `isAppFunctionEnabled(functionIdentifier, executor, callback)` (own package) and overload with `targetPackage`. |
| D6 | Enable/disable per function | ✅ | S3/S2: `@AppFunction(isEnabled = false)`, `setAppFunctionEnabled(id, APP_FUNCTION_STATE_ENABLED/DISABLED/DEFAULT, …)` (API 36). Generated `…Ids.CREATE_TASK_ID`. |
| D7 | Runtime user control | ➕ | S3: `PROPERTY_SUPPORT_APP_FUNCTION_USER_CONTROL` (added in 37.2). If true the system stops auto-granting "always allow" at install; default (unset) = "always allow". Great for security/UX slide. |
| D8 | `@AppFunctionAccessLevel` | ➕ ⏳ | S4 alpha13 "access restriction setting". Semantics unread — check reference page before using. |

## Execution

| # | Claim | Verdict | Evidence / correction |
|---|---|---|---|
| E1 | Default runs on UI thread; use `suspend` + `Dispatchers.IO` | ✅ | S2 verbatim: "By default, an AppFunction implementation runs in the Android UI thread." |
| E2 | `ExecuteAppFunctionRequest` + `AppFunctionManager.executeAppFunction` | ✅ | S3. Overloads with `AppInteractionSession`; request has `activityId` (alpha12). |
| E3 | "OS validates caller signature" (slide 25) | ⏳ | Not stated in sources — **drop** or say "permission-checked". |
| E4 | OS wakes closed process by binding the service | ✅ (inferred) | Service-bound model (`AppFunctionService`, `BIND_APP_FUNCTION_SERVICE`). Confirm empirically in the demo with force-stopped app. |
| E5 | `AppFunctionInvalidArgumentException`, `AppFunctionElementNotFoundException` | ✅ | S2/S5; base `androidx.appfunctions.AppFunctionException`. |
| E6 | Runs 100% local, no network | ✅ | S1: "execute locally" vs MCP "cloud execution and network round-trips". |

## Dynamic functions (Block 6)

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| X1 | `AppFunctionManager.registerAppFunction(...)` API 37 | ✅ | S3: `registerAppFunction(String functionIdentifier, Executor, AppFunction)` "Added in API level 37"; `registerAppFunctions(List<RegisterAppFunctionRequest>)`. |
| X2 | Tied to activities | ✅ | S3: `getAppFunctionActivityStates(Set<AppFunctionActivityId>…)` (37); `ExecuteAppFunctionRequest.activityId` (S4 alpha12). |
| X3 | Jetpack support | ✅ experimental | S4: alpha11 `@AppFunctionSignature` ("supports dynamic AppFunction registration via Jetpack"); alpha12 `registerAppFunction(s)`, `RegisterAppFunctionRequest`, `CallbackAppFunction` as `@ExperimentalAppFunctionsApi`. |
| X4 | `app_metadata.xml` "operational patterns/constraints" as declarative XML | 🔧 | S5/S2: just **free text** inside `appfn:description` ("Operational Patterns: … Constraints: …"), plus `appfn:displayDescription`. Not structured elements. |

## Tooling / demo

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| T1 | `adb shell cmd app_function list-app-functions` | ✅ | S1/S5 (+ `help`). |
| T2 | `execute-app-function --package --function 'Class#fn' --parameters '{…}'` | ✅ | S2/S5. Function id = `<service FQCN>#<fn>`. Extra flag `--brief-yaml`. |
| T3 | `set-enabled --state enable|disable|default` | ✅ | S5. |
| T4 | ChatApp sample + Testing Agent in `android/appfunctions` | ✅ | S6: dirs `ChatApp/` (app, wear, shared) and `agent/` — "Privileged AppFunction execution, manual debugging, test automation, LLM agent evaluations"; run via `./run_privileged.sh`. Apache-2.0. |
| T5 | `android skills add appfunctions` | ✅ | S2 migration note. Skill content S5. |
| T6 | "JetPacker" sample | ⏳ | Not in S6 — **drop**. |
| T7 | Testing agent works w/o Gemini access | 🔧 | Manual debugging works without a key (`standard` flavor); the LLM agent is the `retail` flavor and needs a Gemini API key. Privilege = `ShellIdentityInstrumentation` (no root). **Not run yet.** See demo repo `docs/TESTING-AGENT.md`. |

## History / comparison

| # | Claim | Verdict | Evidence / correction |
|---|---|---|---|
| H0 | MCP announced **Nov 25, 2024** | ✅ | anthropic.com/news/model-context-protocol |
| H1 | Slices "deprecated de facto in 2021" | ⏳ | Not found in primary docs (guide page shows no deprecation banner, updated 2026-02-26). **Drop the date/deprecation claim**; say "Slices (2018): remote UI templates in Search/Assistant". |
| H2 | App Actions BIIs limited; no managed-profile support | ⏳ | Unverified. Say only "BIIs: predefined intents, open the app UI". |
| H3 | FGS "6h limit in Android 15" for dataSync | ❌/🔧 | S7: the 6h-per-24h figure is for **mediaProcessing**; dataSync page shows no limit text; `shortService` ≈ 3 min. Types + permissions required since Android 14 (✅). **Do not quote numbers**; the table row says only "needs type + permission + notification". |
| H4 | "No cumulative battery impact" for AppFunctions | ⏳ | Unsupported claim. Drop. |

## Resources slide (real URLs)
1. https://developer.android.com/ai/appfunctions
2. https://developer.android.com/jetpack/androidx/releases/appfunctions
3. https://github.com/android/appfunctions
4. https://github.com/android/skills/tree/main/device-ai/appfunctions
5. EAP form linked from (1) — do not copy a form URL by hand.

## Demo project findings (2026-10-11, `~/Projects/Demos/DevfestOurense26`, alpha10, AGP 9.1.1, Kotlin 2.4.20, Hilt 2.60.1, KSP 2.3.12)

| # | Finding | Status |
|---|---|---|
| P1 | Builds first try with `compileSdk 37`, `targetSdk 36`, `minSdk 26`. The library AAR declares minSdk 23. | ✅ built |
| P2 | All annotations and exceptions live in `androidx.appfunctions` (`AppFunction`, `AppFunctionService`, `AppFunctionServiceEntryPoint`, `AppFunctionSerializable`, `AppFunction*Exception`). | ✅ read from the AAR |
| P3 | **`functionId` uses the abstract Base class**: `com.example.devfest.appfunctions.BaseAgendaAppFunctionService#searchTalks` (seen in the generated XML), not the generated `AgendaAppFunctionService`. Slides fixed. | ✅ generated XML |
| P4 | KSP output: concrete `AgendaAppFunctionService.kt`, `$TalkFactory.kt`, an inventory class, and `assets/agenda_app_function_service.xml`. KDoc is copied into `<description>` of the function, each parameter and the response. | ✅ |
| P5 | Hilt `@AndroidEntryPoint` on the abstract entry-point class + `@Inject` compiles, generates **and injects at runtime** (verified on a Pixel 9 Pro, Android 17). | ✅ device |
| P6 | Exceptions available: `…InvalidArgument`, `…ElementNotFound`, `…ElementAlreadyExists`, `…LimitExceeded`, `…Denied`, `…Disabled`, `…FunctionNotFound`, `…PermissionRequired`, `…Cancelled`, `…NotSupported`, plus app/system unknown. Demo uses InvalidArgument, ElementNotFound, LimitExceeded. | ✅ |
| P7 | No-arg `getFavourites()` and a result-returning `clearFavorites(confirmed)` work at runtime. | ✅ device |
| P8 | **Emulator image matters** (see P13 for the API 37 result). Android 16 GA (build BE2A.250530, May 2025): `adb shell cmd app_function help` → `No shell command implementation.` (service exists, shell command does not). Demo image: `system-images;android-37.0;google_apis;arm64-v8a`. | ✅ observed / ⏳ new image not booted yet |
| P9 | Skill vocabulary worth reusing on slides: "Required workflow: Call "X" first to …", descriptions are descriptive, `Operational Patterns:` / `Constraints:` in `app_metadata` description, "tool-first thinking" (do not expose purely informational functions). | ✅ skill references |
| P10 | `PROPERTY_SUPPORT_APP_FUNCTION_USER_CONTROL` is documented "Added in version 37.2" (not just "Android 17"). Slides say API 37.2. | ✅ S3 |
| P11 | Draft's 4th function `getTalk` replaced by `getFavourites` (skill: avoid purely informational tools). | decision |
| P12 | `clearFavorites(confirmed: Boolean)`: the destructive function refuses unless `confirmed = true`, so safety is enforced in code and not only in prose. | decision |
| P13 | **API 37.0 image** (`google_apis`, userdebug, build CE2A.260420): `cmd app_function help` works (list `--package`, execute with `--timeout-duration`/`--brief-yaml`/`--pending-intent-path`, `set-enabled`, `is-enabled`, `purge-allowlist-cache`); flags `enable_app_function_manager`, `enable_dynamic_app_functions`, `enable_app_interaction_api` are `true`. The service registers a bit after boot (`Can't find service: app_function` if asked too early). | ✅ observed |
| P14 | **Emulator 37.2.12 on macOS arm64 + this image: not usable yet.** Needs `-qemu -enable-hvf` for HVF; with `-gpu host` the guest `surfaceflinger` crash-loops on `hasReadColorBufferDma`; software GPU gives the same. Host disk was also at 99-100 % (emulator wants ~1.2x data partition free). Device-side checks (list/execute, closed-app wake, Hilt injection, LocalTime format, Testing Agent) are therefore **still unverified**. | ⏳ blocked |
| P15 | **Pixel 9 Pro, Android 17 (API 37.1), user build: everything in the adb flow works** (list, execute, enable/disable, `is-enabled`, closed-app wake). Indexed document type is `AppFunctionStaticMetadata-<package>` (confirms D2). `serviceName` in the index is the generated class, `functionId` uses the Base class. Error codes: 1001 invalid argument, 1002 disabled, 1500 not found, 1501 limit exceeded. | ✅ device |
| P16 | **alpha10 cannot deserialize `LocalTime` as an input** (`Unable to deserialize class java.time.LocalTime. Is the class annotated with @AppFunctionSerializable?`); as output it becomes an object. The skill lists `LocalTime` as supported. alpha13 changelog: "Support all built-in proxy types (LocalDate, LocalTime, Instant, ZoneId) in AppFunctionData". Demo and slides use `String` "HH:mm". | ✅ device + S4 |
| P17 | Device `/data` was 100 % full (651 MB free) while testing; check before the event. Testing Agent not runnable on a `user` build. | ⚠️ |

## Re-check before the event (checked 2026-11-02)

| # | Item | Result | Source (checked 2026-11-02) |
| --- | --- | --- | --- |
| R1 | Latest Jetpack release | **`1.0.0-beta01`, 2026-10-21** (alpha13 2026-10-07). beta01: `AppFunctionName` moved to `androidx.appfunctions`; `isDescribedByKDoc` no default on `AppFunctionDeclaration`/`AppFunctionSerializable`/`AppFunctionSignature`; `appfn:description` → `appfn:instructions`; `@AppFunctionStringValueConstraint` regex → `patternMatchers`; fixed java.time parameters failing to deserialize with desugaring; `AppFunctionTestRule` supports `AppFunctionServiceEntryPoint` | https://developer.android.com/jetpack/androidx/releases/appfunctions |
| R2 | Official skill | folder updated 2026-10-26 and 2026-10-29, frontmatter `last-updated: 2026-10-28`, targets beta01 ("`1.0.0-beta01` or later"), prerequisites `targetSdk 36`+, `compileSdk 37`+, has an "Upgrade to 1.0.0-beta01" section; uses `@AppFunctionDeclaration` and `appfn:instructions` | https://github.com/android/skills/tree/main/device-ai/appfunctions |
| R3 | Samples | `android/appfunctions` pins `appfunctions = "1.0.0-beta01"` (ChatApp), last commit 2026-10-30 | https://github.com/android/appfunctions |
| R4 | Developer docs | "Last updated 2026-10-22", but the snippets still show `@AppFunction`/alpha10 (lag). Still: "Experimental … subject to change"; "As of May 2026, AppFunctions integration with Gemini is in a private preview with trusted testers"; EAP form still open for interest; callers need `EXECUTE_APP_FUNCTIONS` | https://developer.android.com/ai/appfunctions · https://developer.android.com/ai/appfunctions/add-appfunctions |
| R5 | beta01 AAR | minSdk 24, no `.so` files, ships `proguard.txt` consumer rules; deps: guava 32.0.1-android, `androidx.appsearch` 1.1.0, kotlinx-coroutines-guava 1.9.0 | Google Maven (AAR/POM read) |
| R6 | MCP announcement | 25 Nov 2024 (timeline 4.3 is correct) | https://www.anthropic.com/news/model-context-protocol |
| R7 | Event agenda | 23 sessions, slot **13:00 Red Velvet**, lunch 15:00, rooms Red Velvet / Honeycomb / Cinnamon Bun; the page lists the speaker as "Juanje Cilla (Hiberus)" (slides say Revolut, by decision) | https://gdgourense.es/events/df26 (client-rendered; read in a browser) |
| R8 | `LocalTime` gotcha | alpha10 failed on device (2026-10-11). Changelog: alpha13 "Support all built-in proxy types (LocalDate, LocalTime, Instant, ZoneId) in AppFunctionData"; beta01 fixes desugaring. **Tested on the Pixel 9 Pro with beta01 (2026-11-02, scratch function)**: works **only as an object `{hour, minute, second, nanoOfSecond}`** (all four); `"14:30"` and a partial object are rejected (code 1001). The demo keeps `"HH:mm"` strings by design | release notes (R1) + device test |
| R9 | Migration alpha10 → beta01 in the demo | 3 mechanical edits, built and unit tests passed first try (annotation rename, `appfn:instructions`, version). Own commit `cp-05a-beta01` | demo repo (private) |
| R10 | Demo on a device with beta01 + real agenda | ✅ **verified 2026-11-02, Pixel 9 Pro (Android 17, API 37.1, patch 2026-10-05, user build)**: list, search/add/idempotency, errors 1500/1501/1001/1002, `confirmed` refusal, closed-app wake, enable/disable, nullable `speaker`, slot question. Captures in the demo repo `docs/captures/` | demo repo `docs/DEMO.md` |
