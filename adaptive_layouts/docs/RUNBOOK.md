# Runbook — Adaptive Layouts

DevFest Jaén 2026 · GDG Jaén · **online** · 21 Nov 2026 · 1 h (45 min content, 5 min Q&A, margin).
You share your screen: the stream compresses video, so the deck uses large type and checked contrast (D10).

## The day before

1. `npm install` (once, with internet) · `npm run present` → `http://127.0.0.1:4173/`. Wi-Fi can be off for the deck.
2. Rehearse with the clock: the presenter view (**P**) has a timer. Target ≈ 45 min; scenes 4–7 are the long ones.
3. Pre-warm the demo (below) so Gradle is not cold on stage.
4. Check the public page works: <https://juanjecilla.github.io/slideshow/adaptive_layouts/> and that the QR on 9.8 points to it.

## Before the talk (30 min)

1. Close notifications; one browser window for the stage, one for the presenter; the same browser and machine.
2. Press **P** to open the presenter; it must say "stage connected". Click the stage, press **F**. You are on 1.1.
3. Share **only the stage window** (not the whole screen) at 1920×1080 if the platform lets you; otherwise any ratio
   gets black bars, never distortion.
4. Demo window ready but hidden: see "The demo".

## Keys

| Key | Action |
| --- | --- |
| → ↓ PageDown, click, Space (fullscreen) | next beat |
| ← ↑ PageUp | previous beat |
| 1–9 | jump to scene (10 = backup, only by stepping or **O**) |
| Home / End | first / last beat |
| B or . | blackout on/off |
| O | overview (click a beat to jump) |
| F | fullscreen |

Map: 1 Open · 2 El Malo · 3 El Feo · 4 El Bueno/WSC · 5 Insets · 6 M3 Adaptive · 7 Input · 8 Demo + deuda · 9 El FIN · 10 Backup.
No automatic beats: everything waits for the click.

## The demo (scene 8)

The deck holds clips of Muviss desktop, so the demo works with no live app (D8). If you do it live:

1. In `~/Projects/CodingPit/Muviss`: `./gradlew :app:desktopApp:run` once beforehand, so the build is cached.
2. The desktop window opens at 1100×720 dp and remembers its size. Resize by dragging the edge: below 600 dp the
   rail becomes a bottom bar; Detail goes to two columns from 840 dp (R22).
3. Share the app window, switch back to the stage and press → to continue. If the live run hesitates, press
   **→** and play the clip: they show the same four things (bar ↔ rail, Detail, grid, shortcuts).
4. Backup full clip: 10.1.

## Capturing the missing material (TODO before the talk)

The captures and clips are not in the deck yet: the stage shows a dashed TODO box where they go (`deck/assets.ts`).

| Slot (`CAP.…`) | Beat | What to capture |
| --- | --- | --- |
| `railCompact` | 4.11 | Muviss, width < 600 dp, bottom bar |
| `railExpanded` | 4.11 | Muviss, width ≥ 600 dp, rail |
| `detailCompact` / `detailExpanded` | 6.10 | Detail of a title, < 840 dp and ≥ 840 dp |
| `videoRail` | 8.2 | window from wide to narrow |
| `videoDetail` | 8.3 | Detail crossing 840 dp |
| `videoGrid` | 8.4 | a `GridCells.Adaptive` screen while resizing |
| `videoKeys` | 8.5 | View menu and shortcuts |
| `videoFull` | 10.1 | the whole demo, in one take |

Run Muviss desktop (`:app:desktopApp:run`), record the window (macOS: ⇧⌘5), export MP4 H.264, no audio, ≤ 10 s
each. Put the files in `deck/assets/`, import them in `deck/assets.ts` and replace the `undefined`. Captures are
PNG at 2×. Then `npm run build && npm run verify`.

## If something goes wrong

- Lost position or refreshed by accident: the URL keeps `#scene.beat`; reload and you are back on the beat.
- Presenter says "no connection": press **resync**, or close it and press **P** again.
- Frozen animation: press ← then → (re-entering a beat rebuilds it).
- Live demo fails: say so, press →, play the clip.
- Total failure: open the public URL on any device, or `dist/` from a USB stick.
- Connection drops: the deck needs no network; the platform does. Keep the public URL ready to paste in the chat.

## Config to check on the day

`deck/deck.config.ts`: title, speaker, `qrUrl` (currently `https://juanjecilla.github.io/slideshow/adaptive_layouts/`). Rebuild after editing.
