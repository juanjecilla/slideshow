# Runbook — a11y on Android? AI makes it easy

DevFest Jerez de la Frontera · 21 Nov 2026 · Coworking CYCE · 45 min. English deck; the Spanish copy comes later.

## Before the talk (the day before)

1. `npm install` once, with internet · `npm run present` → `http://127.0.0.1:4173/` from `dist/`.
   `dist/` is self-contained: any static server works (`npx serve dist`), or copy the folder to another laptop. Wi-Fi can be off.
2. Projector at 1920×1080 if possible; any other ratio gets bars, never distortion.
3. **P** opens the presenter window; drag it to your screen. It must say "stage connected". Click the stage, **F** for fullscreen. You are on 1.1.
4. Theme: the room picks dark or light in 1.3 (joke), **T** switches live. The choice is remembered per browser: before the talk, press **T** until it shows the theme you want to start from.
5. Run `node tools/check-a11y.mjs` (after `npm run build`): every claim in scene 12.4 must say PASS.

## The live demo (scenes 06–10): device

The demo runs on a **real Pixel with Gemini Nano** (AICore). The emulator cannot do the on-device parts (no Nano).

| Step | Command / check |
| --- | --- |
| Pixel in dev mode, USB debugging, an Android Studio-signed debug build | `./gradlew :app:androidApp:assembleDebug` in the Muviss worktree `muviss-wt-a11y-main` (branch `talk/a11y-ai-jerez26`): installs as `com.codingpit.muviss.a11ytalk`, next to the real app |
| TMDB token in `local.properties` (`TMDB_API_KEY` or `TMDB_READ_TOKEN`) | without it the app has no data |
| Gemini Nano present | open the movie detail: the **Short & simple** and **Describe image** buttons only appear when ML Kit reports the feature as not UNAVAILABLE. No buttons = no AICore on this device. First use downloads the model (needs network, takes minutes): **do it the day before**, with the same Google account |
| Screen mirroring | `scrcpy` is **not installed** on the author's Mac: `brew install scrcpy`, or use Android Studio's Running Devices |
| Reset between runs | `skills/device-toggles/scripts/a11y-device.sh reset` (hephestus) |

Check AICore/ML Kit on the Pixel **before anything else**: `adb shell pm list packages | grep aicore`, then open the detail screen of any movie.

## What to capture on the Pixel (the two dashed boxes in the deck)

1. **06.7 "A picture nobody described"** → `Describe image` on a detail backdrop. Screenshot + the text it returns (English).
2. **08.3 "A button. Nothing leaves the phone."** → `Short & simple` on a synopsis (Spanish and English). Screenshot of the result with its label.
3. **03.3 the hook** → TalkBack on the unfixed app **with sound**: `adb shell screenrecord` records no audio, so use the phone's own screen recorder (internal audio on) or record the room. Branch `demo/a11y-broken` (pre-#233) is built the same way (`.a11ytalk`).

Drop the files in `deck/assets/`, replace the dashed boxes, rebuild.

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

01 Open 1.5 · 02 Me 1 · 03 Hook 2 · 04 Why now 3 · 05 Map 2 · 06 Blind 9 · 07 Low vision 6 · 08 Cognitive 5 · 09 Motor 4 · 10 Shift left 3 · 11 Limits 2 · 12 Close 2 · 13 Q&A 4.
If short of time, cut in this order: 10 Shift left → 07.5 contrast → 06.6 stack → 09.5.

## Config to check on the day

`deck/deck.config.ts`: title, speaker, event, `qrUrl` (currently `https://github.com/juanjecilla/hephestus`, **private until 21 Nov**: see RELEASE-CHECKLIST). Rebuild after editing.
