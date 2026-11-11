# Runbook

Dev Wars - El despertar del ego, default (event-agnostic) version. 75 slides, 8 scenes. The deck as presented at Codemotion Madrid 2026 is in `codemotion26/` (its own project, built to `/dev_wars/codemotion26/`).

To give it at another event: put the event on the opening/closing slides in the Google Slides deck (or edit `deck/deck.config.ts` for the presenter view), re-generate, rebuild.

## Run it

```bash
npm install
npm run present      # production build served on http://127.0.0.1:4173, works offline
npm run dev          # http://127.0.0.1:5173/#1.1 while editing
```

Keys: → / space next, ← previous, 1-8 jump to a scene, O overview, P presenter window, F fullscreen. Every beat has an address (`#scene.beat`).

The clips on slides 14 and 15 start on the beat after the poster (`14: clips`, `15: clips`) and play with sound; leave the presenter window muted (it never plays them).

## Rebuild the slides from Google Slides

Source: Google Slides deck `1-WwK79Y7tLdx8WOd4gXUEodFJ1kXXCvpoy6PI6mSJAQ` ("Dev Wars - El despertar del ego - Codemotion 2026"). Checked 2026-11-11.

```bash
D=$(mktemp -d)
curl -L -o "$D/deck.pptx" "https://docs.google.com/presentation/d/1-WwK79Y7tLdx8WOd4gXUEodFJ1kXXCvpoy6PI6mSJAQ/export/pptx"   # the deck is "anyone with the link"
unzip -q "$D/deck.pptx" -d "$D/x"
python3 -I tools/pptx_to_deck.py "$D/x" deck "" default   # deck/slides.gen.ts + deck/assets (needs cwebp); "default" = no Codemotion logo, no slide 76
python3 -I tools/make_audit.py deck docs/CONTENT-AUDIT.md
```

Clips (full length, 720p H.264, poster frame each):

```bash
tools/encode_clips.sh <trail.mp4> <marathon.mp4> <speed-project.mp4> <trail-youtube.mp4>
```

Where the clips come from (Drive file ids and the YouTube id are in `tools/pptx_to_deck.py`, `CLIPS`; URLs in `deck/deck.config.ts`). Download the YouTube one with `yt-dlp -f 'bv*[height<=720]+ba/b[height<=720]' --merge-output-format mp4 <url>`.

## Verify

```bash
npm run build     # typecheck + bundle + offline check
npm run verify    # every beat forwards, backwards and from the URL (artifacts/verify/contact.png)
npm run shot -- 3 4.2   # quick frames
```

## If something breaks on the day

- Clip does not play: press → to move on; the slide is complete without it.
- No Wi-Fi: nothing needs it (the build is offline).
- Wrong beat: edit the URL hash (`#4.6`) or open the overview with O.
