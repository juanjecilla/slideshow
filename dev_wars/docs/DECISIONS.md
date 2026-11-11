# Decisions

Dev Wars - El despertar del ego. The default, event-agnostic deck, written natively for beatdeck. The deck exactly as presented at Codemotion Madrid 2026 (a slide-for-slide copy) lives in `codemotion26/`. Checked 2026-11-11.

| # | Decision | Why |
|---|---|---|
| D1 | Same talk (same words, order, images, clips), new form: authored beats on a near-black stage instead of the Codemotion template. Nothing in this deck comes from the Codemotion layouts. | The talk can be given anywhere; the record of the Codemotion version is `codemotion26/`. |
| D2 | Look: space-black stage, off-white Inter, one accent (the yellow of the crawl `#ffe81f`), a cold blue for the opening line, huge type, photos full-bleed with a shade, captions in mono + big title. `themes/devwars.css` on top of `neutral.css`. | A Star Wars talk reads naturally as space-black and crawl-yellow; the rest is the neutral beatdeck voice. |
| D3 | "Paper" (`#f2efe6`) is a second stage used only where logos need a white ground (versus beats, framework wall, career ladder). | Many of the logos have dark text on transparent; the original also put them on white. |
| D4 | 8 scenes (the talk's own sections), 82 beats. One idea per beat. Lists build line by line inside one beat (about 0.2 s apart); a list is one idea. | beatdeck jumps to scenes with keys 1-9. |
| D5 | Hard cuts. A scene or a full-bleed image appears and disappears at once; only text rises in (0.5 s). Own `<Sc>` layer instead of the engine `<Scene>` (which fades out, waits and fades in: a black gap). | User's call (2026-11-11): no black transition between scenes. |
| D6 | Native instead of pictures of text: the "A long time ago…" line + COMPANY stamp, the crawl (CSS perspective, one automatic beat, about 45 s; frozen and readable in capture/reduced motion), the framework rows and wall (one automatic cascade instead of 12 clicks), the closing QR (engine `QR`, URL decoded from the original QR). | Real artefacts stay real (logos, stamps, stills, screenshots, the career-ladder diagram); text and shapes are re-typeset. |
| D7 | The crawl text is transcribed from the image of the original (verbatim, including "una sombra amenaza con dividir a los equipos"). | The speaker's own words; nothing added. |
| D8 | Slide 76 (Codemotion feedback QR) is left out; slide 75's QR is the Linktree QR link decoded from the original (`deck.config.ts`). | Event-specific vs speaker-specific. |
| D9 | The four clips are bundled (720p max, H.264, full length, no audio track), play by themselves on their beat, silent, and rewind when you leave. Sources are in `deck/deck.config.ts` (presenter notes only). | Offline rule; the user asked for no sound (2026-11-11). They are other people's social videos, bundled only so the talk plays offline. |
| D10 | `?capture=1` (verify, shot) and the presenter window show a still poster instead of the clip. | Comparable frames; no second copy playing from the presenter view. |
| D11 | Typos fixed (see CONTENT-AUDIT). | User's call (2026-11-11). |
| D12 | Images: WebP (alpha kept), GIF stays a GIF; named by what they are (`luke.webp`, `react.webp`). | Easy to maintain. |
| D13 | No chrome on stage, no standby screen; the first beat is the title on black (calm start). | The original has none. |
| D14 | Safe margin: titles that hug the top edge are pushed down 30 px (`safeTop` in `ui.tsx`). | The engine's audit wants 100 px. |

## Verification

`npm run build` and `npm run verify` pass (82 beats forwards, backwards and from the URL, frames identical, QR decodes, no remote requests). Beat 1.7 has a 3% tolerance: an animated GIF is on screen.
