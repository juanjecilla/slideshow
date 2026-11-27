# Runbook — (progr)Amar en tiempos revueltos

## Which deck

The talk is given with the Spanish edition: `cd bcn26 && npm run present` (live at `/slideshow/programar_tiempos_revueltos/bcn26/`). The English base deck lives one level up. Copy `bcn26/dist/` to a USB stick.

**On the morning of the talk:** check the latest model on the wheel (4.12) and say the date of the prices out loud (4.10, 4.11: closes up to Fri 27 Nov).

Beat 1.4 is a joke: one click strikes out the job title. Pause.

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

Automatic beats: 1.1 (standby) loops until the first click. Title and loading bar stay on screen; no countdown.

## If something goes wrong

- Lost position or refreshed by accident: the URL keeps `#scene.beat`; reload and you are back on the beat.
- Presenter says "no connection": press **resync** in the presenter, or close it and press **P** again.
  Both windows must be the same browser on the same machine.
- Frozen animation: press ← then → (re-entering a beat rebuilds it from scratch).
- Total failure: `dist/` on a USB stick + any laptop with a browser.

## Config to check on the day

`deck/deck.config.ts`: title, speaker, `qrUrl` (base: `…/programar_tiempos_revueltos/`, edition: `…/programar_tiempos_revueltos/bcn26/`). Rebuild after editing.
