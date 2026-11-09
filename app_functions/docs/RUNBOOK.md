# Runbook — Turn your app into a skill with App Functions

## Before the talk

1. `npm install` (once, with internet) · `npm run present` → opens `http://127.0.0.1:4173/` from `dist/`.
   `dist/` is self-contained: any static server works (`npx serve dist`), or copy the folder to another laptop.
2. Wi-Fi can be off. No request leaves the machine.
3. Projector at 1920×1080 if possible; any other ratio gets black bars, never distortion.
4. Press **P** to open the presenter window; drag it to your screen. It must say "stage connected".
5. Click the stage window, press **F** for fullscreen. You are on 1.1 (standby).

## During the talk

| Key | Action |
| --- | --- |
| → ↓ PageDown, click, Space (fullscreen) | next beat |
| ← ↑ PageUp | previous beat |
| 1–9 | jump to scene |
| Home / End | first / last beat |
| B or . | blackout on/off |
| O | overview (click a beat to jump) |
| F | fullscreen |

Automatic beats: scene 3 beat 1 (the typed sentence, ~4 s). Everything else waits for the click.

## If something goes wrong

- Lost position or refreshed by accident: the URL keeps `#scene.beat`; reload and you are back on the beat.
- Presenter says "no connection": press **resync** in the presenter, or close it and press **P** again.
  Both windows must be the same browser on the same machine.
- Frozen animation: press ← then → (re-entering a beat rebuilds it from scratch).
- Total failure: `dist/` on a USB stick + any laptop with a browser.

## Config to check on the day

`deck/deck.config.ts`: title, speaker, `qrUrl` (set to the live Pages URL; ES deck points to `/ourense26/`). Rebuild after editing.

## Talk-specific
- Library version on every code slide: `1.0.0-beta01` (`deck.config.ts → libVersion`). `1.0.0-rc01` exists since 2026-11-04 (checked 2026-11-07); not adopted for the talk (see `research.md` B6).
- Demo placeholders in `deck/code.ts`: `PKG`, `SVC`, function names. Reconcile with the demo project; adb output is shown live, backups are captures per step.
- Embargo ended 2026-11-07; the deck is live.
