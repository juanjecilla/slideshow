# Decisions

Dev Wars: The Ego Awakens (Spanish: El despertar del ego). The default, event-agnostic deck, written natively for beatdeck, in English (default) and Spanish. The deck exactly as presented at Codemotion Madrid 2026 (a slide-for-slide copy) lives in `codemotion26/`. Checked 2026-11-11.

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
| D15 | Two languages, one deck: English is the default (served at `/dev_wars/`), Spanish at `/dev_wars/es/`. Texts live in `deck/i18n/en.ts` and `es.ts` (beatdeck's own multi-locale build, `locales` in `deck.config.ts`, `npm run build` -> `dist/en`, `dist/es`). Scene ids, titles and beat names are English in both (operator vocabulary). | User's call (2026-11-11). The Spanish table is the talk as given. |
| D16 | Neither language is listed on the landing page or the README table. | Not presented at an event yet (user's call, 2026-11-11). The URLs exist but nothing links to them. |
| D17 | Images that carry text of their own (RAE entries, the tweets, the chat thread, "El mejor") stay in Spanish in both languages: they are real artefacts. | Not ours to redraw or translate. |
| D18 | Anonymised screenshots (beats 5.4 and 5.5): the tweet's author name and handle, and in the chat thread the avatar, names and internal identifiers, are covered with black bars; the two "SOLID" passages are outlined in red. Same framing and positions as the Codemotion deck. | Protect the identity of the people in them (user's call, 2026-11-11). |
| D19 | The logo beat (1.4) is full screen with the AI-tool watermark painted out (`logo-clean.webp`); the COMPANY stamp (1.3) sits on a dark plate with alpha so it reads; the first beat has an animated loading bar; the crawl runs in about 26 s; the right clip of 2.6 has the same size as the left (centre crop). | User's calls (2026-11-11). |

## Verification

`npm run build` and `npm run verify` pass for both locales (82 beats forwards, backwards and from the URL, frames identical, QR decodes, no remote requests). Beat 1.7 has a 3% tolerance: an animated GIF is on screen.
