# Runbook

Dev Wars: The Ego Awakens, default (event-agnostic) version, in English (`/dev_wars/`) and Spanish (`/dev_wars/es/`). 8 scenes, 82 beats. Not listed on the landing page yet (not presented at an event). The deck as presented at Codemotion Madrid 2026 is in `codemotion26/` (its own project, built to `/dev_wars/codemotion26/`).

## Run it

```bash
npm install
npm run present      # builds both languages, serves dist/ on http://127.0.0.1:4173 (en/ and es/), works offline
npm run dev          # English, http://127.0.0.1:5173/#1.1 while editing
BEATDECK_LOCALE=es npm run dev   # Spanish
```

Keys: → / space next, ← previous, 1-8 jump to a scene, O overview, P presenter window, F fullscreen. Every beat has an address (`#scene.beat`).

- **1.1** shows the title with a loading bar (it loops) while people sit down.
- **1.8 (the crawl)** scrolls by itself for about 25 seconds; click when you are ready to move on.
- **2.6 and 2.7** play their clips by themselves, silent. They rewind when you leave the beat. The presenter window shows a still.
- **3.9 (frameworks)** builds the wall by itself (about 2 s).

## Giving it at another event

Nothing in the deck names an event. Put one in `deck/deck.config.ts` (`event`) if you want it in the presenter notes; add your own closing slide in `deck/scenes/08-Cierre.tsx`.

## Languages

Texts: `deck/i18n/en.ts` (source) and `es.ts` (checked against it: `tsc` fails on a missing or extra key). `npm run build` writes `dist/en/` and `dist/es/`; `npm run verify` walks both; `npm run shot -- 3 --locale=es` for one language. Images with text of their own (dictionary entries, the tweets, the chat thread, "El mejor") stay in Spanish in both.

## Edit

- One file per scene in `deck/scenes/`; `defineBeats([...])` at the top names the beats, `at('name')` / `from('name')` / `between('a','b')` decide what is on screen.
- Building blocks are in `deck/ui.tsx`: `Title`, `Eyebrow`, `Lines`, `Quote`, `Img`, `Photo` (full-bleed, cuts), `Paper`, `Clip`, `Versus`, `Caption`.
- Images and clips: `deck/assets/` (`video/` for clips). Re-encode clips with `tools/encode_clips.sh <trail.mp4> <marathon.mp4> <speed-project.mp4> <trail-youtube.mp4>` (720p max, H.264, no audio; needs ffmpeg).
- Clip sources: Drive file ids `1qhPB4Dr05iBmHNNhHUHM8jVQHy6k6qpy`, `1FMKyfudDjwXjGRaoS9r0do1QhmFKoAeM`, `1sWFhMhuLHc6xKNxMF8CBPJ0yon_2tncx`, YouTube `2Y3gmYO8TCE` (URLs in `deck/deck.config.ts`). Checked 2026-11-11. Download the YouTube one with `yt-dlp -f 'bv*[height<=720]+ba/b[height<=720]' --merge-output-format mp4 <url>`.

## Verify

```bash
npm run build     # typecheck + bundle + offline check
npm run verify    # every beat forwards, backwards and from the URL (artifacts/verify/contact.png)
npm run shot -- 3 4.2   # quick frames
```

## Licence

`LICENSE` (MIT) covers the beatdeck engine and tooling. The media in `deck/assets` (film stills, memes, logos, the four clips) belongs to its owners and is not covered by it; the clips are other people's social-media videos, bundled only so the talk plays offline.

## If something breaks on the day

- A clip does not play: press → to move on; the beat is complete without it.
- No Wi-Fi: nothing needs it (the build is offline).
- Wrong beat: edit the URL hash (`#4.6`) or open the overview with O.
