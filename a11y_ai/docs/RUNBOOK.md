# Runbook — a11y on Android? AI makes it easy

DevFest Jerez de la Frontera · 21 Nov 2026 · Coworking CYCE · 45 min. English is the base deck; the Spanish edition `jerez26/` is what the landing card opens (see *Two decks*). Both are live.

## Before the talk (the day before)

1. `npm install` once, with internet · `npm run present` → `http://127.0.0.1:4173/` from `dist/`.
   `dist/` is self-contained: any static server works (`npx serve dist`), or copy the folder to another laptop. Wi-Fi can be off.
2. Projector at 1920×1080 if possible; any other ratio gets bars, never distortion.
3. **P** opens the presenter window; drag it to your screen. It must say "stage connected". Click the stage, **F** for fullscreen. You are on 1.1.
4. Theme: the room picks dark or light in 1.3 (joke), **T** switches live. The choice is remembered per browser: before the talk, press **T** until it shows the theme you want to start from.
5. Run `node tools/check-a11y.mjs` (after `npm run build`): every claim in scene 12.5 must say PASS.

## The live demo (scenes 06–10): device

The demo runs on a **real Pixel 9 Pro with Gemini Nano** (AICore; the author's own phone). The emulator cannot do the on-device parts (no Nano).

| Step | Command / check |
| --- | --- |
| Pixel in dev mode, USB debugging, an Android Studio-signed debug build | `./gradlew :app:androidApp:assembleDebug` in the Muviss worktree `muviss-wt-a11y-main` (branch `talk/a11y-ai-jerez26`): installs as `com.codingpit.muviss.a11ytalk`, next to the real app |
| TMDB token in `local.properties` (`TMDB_API_KEY` or `TMDB_READ_TOKEN`) | without it the app has no data |
| Gemini Nano present | open the movie detail: the **Short & simple** and **Describe image** buttons only appear when ML Kit reports the feature as not UNAVAILABLE. No buttons = no AICore on this device. First use downloads the model (needs network, takes minutes): **do it the day before**, with the same Google account |
| Screen mirroring | `scrcpy` is **not installed** on the author's Mac: `brew install scrcpy`, or use Android Studio's Running Devices |
| Reset between runs | `skills/device-toggles/scripts/a11y-device.sh reset` (hephaestus) |

Check AICore/ML Kit on the Pixel **before anything else**: `adb shell pm list packages | grep aicore`, then open the detail screen of any movie.

## Live demo script (what to do, what to expect, what to fall back to)

**Scene 03 (hook) plays a recording** (R-21): beat 3.3 plays `talkback-clip.mp4` with sound when it opens. The key or click that opens the beat lets the browser play the sound; if it does not, press play on the clip. **Check the laptop volume in the pre-flight.** Fallback: live TalkBack on the Pixel (`.a11ybroken`, TalkBack on, sound up), or the `speak.py` output on 6.2.

Two builds sit side by side on the Pixel: `com.codingpit.muviss.a11ybroken` (branch `demo/a11y-broken`, before the fixes) and `com.codingpit.muviss.a11ytalk` (branch `talk/a11y-ai-jerez26`). Build both the day before (`./gradlew :app:androidApp:assembleDebug` in each worktree, then `adb install -r`). In a terminal, from the hephaestus clone: `export H=~/Projects/hephaestus/skills`.

| Beat | You do | You should see | If it fails |
|---|---|---|---|
| **06.2 audit** | open `.a11ybroken` on the Pixel; **dismiss any system dialog**; in the terminal: `$H/a11y-audit/scripts/dump_tree.sh out settings` then `python3 $H/a11y-audit/scripts/tree_audit.py out/settings.xml --density $(cat out/settings.density)`. With Claude Code: *"Use the a11y-audit skill on the running app. Dump the search, settings and a movie-detail screen and report findings by person."* | settings: 2 × `unlabeled 52x48dp`; search: `EditText unlabeled`; detail: `CheckBox unlabeled` | the slide already shows the outputs (06.2); overview → 14 |
| **06.3 listen** | `python3 $H/talkback-speak/scripts/speak.py out/settings.xml` | `«unlabeled», checkbox, checked, double tap to activate` | slide 06.3 |
| **07.2 200 %** | `.a11ytalk` open on Search; `$H/device-toggles/scripts/a11y-device.sh font-scale 2.0`, wait 8 s, `… shot out/200.png` | bottom bar whole words on `.a11ytalk`; open `.a11ybroken` (or the main build) to show `Searc/h`. **Then `reset`** | slides 07.2–07.3 (real captures) |
| **06.8 / 08.3 on-device** | `.a11ytalk` → a movie → **Describe image** / **Short & simple** | the answer under the buttons, labelled "on your device" | the slides show the real Pixel captures (taken 2026-11-20). Buttons missing = no AICore: say so, move on |
| **09.2–09.4 motor** | no device: the scan, then the green test on the slides | — | — |

Pre-flight (10 min before): both apps installed, `device-toggles reset`, TalkBack off, animations on, Do Not Disturb on (a notification dialog during a `uiautomator dump` breaks the audit: it showed up as `Muviss isn't responding` once), the terminal font at 24 pt+.

## What was captured on the Pixel (done 2026-11-20)

- **06.8** `deck/assets/pixel-describe.png` and **08.3** `pixel-shorten.png`: Gemini Nano on the Pixel 9 Pro, the app's own output (Image Description in English, Rewriting 78 → 36 words).
- **03.3** `deck/assets/talkback-clip.mp4`: TalkBack on the unfixed build, with sound (Spanish voice, no captions). Made from `adb screenrecord` video plus the Mac mic; originals in `artifacts/talkback-original/` (git-ignored). To redo it: see `docs/DECISIONS.md` R-21.

## During the talk

| Key | Action |
| --- | --- |
| → ↓ PageDown, click, Space (fullscreen) | next beat |
| ← ↑ PageUp | previous beat |
| 1–9 | jump to scene (10+ via the overview) |
| Home / End | first / last beat |
| T | switch dark / light |
| B or . | blackout on/off |
| O | overview (click a beat to jump) |
| P | presenter window |
| F | fullscreen |

No automatic beats: every click is a beat.

## If something goes wrong

- **The live demo fails** → overview (**O**) → scene 14 (BACKUP): device captures and the tool outputs as they ran on the audit day.
- Lost position or refreshed: the URL keeps `#scene.beat`.
- Presenter says "no connection": press **resync**, or close it and press **P** again. Both windows must be the same browser on the same machine.
- Total failure: `dist/` on a USB stick + any laptop with a browser.

## Timing (45 min)

01 Open 1.5 (dark/light vote, then three shows of hands and the click-revealed twist: keep the hands under a minute) · 02 Me 1 · 03 Hook 2 · 04 Why now 3 · 05 Map 2 · 06 Blind 9 · 07 Low vision 6 · 08 Cognitive 5 · 09 Motor 4 · 10 Shift left 3 · 11 Limits 2 · 12 Close 2 · 13 Q&A 4.
If short of time, cut in this order: 01 hands (1.4–1.6, keep the twist 1.7) → 10 Shift left → 07.5 contrast → 06.6 stack → 09.5.

## Two decks

English is the base deck (`/slideshow/a11y_ai/`). The Spanish **edition** is `jerez26/` (`/slideshow/a11y_ai/jerez26/`) and is what the landing card opens: slides, announcements, alt text and quotes are in Spanish; speaker notes, code and tool output stay English. Same beat map and captures. Image Description output stays in English (R1.3). Present one deck at a time: both serve on port 4173 (`npm run present` in `a11y_ai/` or in `a11y_ai/jerez26/`).

## Config to check on the day

`deck/deck.config.ts`: title, speaker, event, `qrUrl` (currently `https://github.com/juanjecilla/hephaestus`, public since 2026-11-21, checked 2026-11-21). Rebuild after editing.
