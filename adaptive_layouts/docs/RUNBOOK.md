# Runbook — Adaptive Layouts

DevFest Jaén 2026 · GDG Jaén · **online** · 21 Nov 2026 · 1 h (45 min content, 5 min Q&A, margin).
You share your screen: the stream compresses video, so the deck uses large type and checked contrast (D10).

**Two decks (D32):** this directory is the English base deck (`/slideshow/adaptive_layouts/`). The talk is given from the Spanish edition in `jaen2026/` (`/slideshow/adaptive_layouts/jaen2026/`, its own `npm run present`). Both serve on port 4173: run one at a time. The steps below apply to either.

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

1. Run the app from a checkout of Muviss `main`: `./gradlew :app:desktopApp:run` once beforehand, so the build is cached.
   **On stream it would show your real library** (it lives in `~/Library/Application Support/Muviss`). For a live demo use the
   isolated data directory of the recipe below (`-Duser.home=…`), or accept showing it.
2. The desktop window opens at 1100×720 dp and remembers its size. Resize by dragging the edge: below 600 dp the
   rail becomes a bottom bar; Detail goes to two columns from 840 dp (R22).
3. Share the app window, switch back to the stage and press → to continue. If the live run hesitates, press
   **→** and play the clip: they show the same four things (bar ↔ rail, Detail, grid, shortcuts).
4. Backup full clip: 10.1.

## How the Muviss captures and clips were made

Done on 2026-10-20 from Muviss `main` (`2d2c7e40`), in `deck/assets/muviss-*.png|mp4`, wired in `deck/assets.ts`.
Redo them if Muviss's UI changes:

1. A throwaway worktree of Muviss `main` (`git worktree add --detach ../muviss-wt-talk origin/main`) with a `local.properties`
   holding only `sdk.dir`, `TMDB_API_KEY` and `SYNC_ENABLED=false`: no sync keys, so no personal data.
2. In that worktree, `jvmArgs += listOf("-Duser.home=/tmp/muviss-demo-home")` inside `compose.desktop.application` of
   `app/desktopApp/build.gradle.kts`, so the app writes to an empty data directory, never the real library.
3. `./gradlew :app:desktopApp:run`, then drive it with `tools/muviss_cap.py` (macOS; needs Accessibility and Screen
   Recording for the terminal). It sets the window size, captures one PNG per width and composes the clip on a neutral
   canvas with ffmpeg, so the desktop behind the window never appears. Clicks use real mouse events
   (`tools/muviss_clk.js`): System Events' own `click` stopped working after several resizes.
4. Window sizes: 1100×720 pt expanded, 480×800 pt compact (480 is the app's minimum width). Widths 1100 → 480 for the rail
   and grid clips, 1100 → 700 for the detail clip (it crosses 840 dp of content width).
5. `npm run build && npm run verify`.

Posters and data are TMDB's (credit on beat 1.7).

## If something goes wrong

- Lost position or refreshed by accident: the URL keeps `#scene.beat`; reload and you are back on the beat.
- Presenter says "no connection": press **resync**, or close it and press **P** again.
- Frozen animation: press ← then → (re-entering a beat rebuilds it).
- Live demo fails: say so, press →, play the clip.
- Total failure: open the public URL on any device, or `dist/` from a USB stick.
- Connection drops: the deck needs no network; the platform does. Keep the public URL ready to paste in the chat.

## Config to check on the day

`deck/deck.config.ts`: title, speaker, `qrUrl` (currently `https://juanjecilla.github.io/slideshow/adaptive_layouts/`). Rebuild after editing.
