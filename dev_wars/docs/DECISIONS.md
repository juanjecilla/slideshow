# Decisions

Dev Wars - El despertar del ego. The default, event-agnostic deck, rebuilt as a beatdeck from the Google Slides deck given at Codemotion Madrid 2026. The deck exactly as presented there lives in `codemotion26/`. Checked 2026-11-11.

| # | Decision | Why |
|---|---|---|
| D1 | Same slides, same order, same look as the presented deck. No new theme, no new features. Only the event branding is removed (D13). | The talk can be given at other events; the Codemotion version stays as the record in `codemotion26/`. |
| D2 | Slides are generated, not hand-written: `tools/pptx_to_deck.py ... default` reads the PPTX export and writes `deck/slides.gen.ts` (geometry, resolved text styles, steps). One generic renderer (`deck/Slide.tsx`) draws every slide. | 75 slides by hand would drift from the source. Re-running the generator after an edit in Slides keeps them equal. |
| D3 | 8 scenes (the deck's own sections, `deck/model.ts`), one slide = one beat. | beatdeck jumps to scenes with keys 1-9 and keeps every scene layer mounted; 75 scenes would break both. The audience sees the same slides. |
| D4 | Click animations of the original become extra beats of that slide (slides 2, 5, 25 [12 clicks], 40). Fade only. | One click = one beat. The original had no transitions. |
| D5 | Slides 14 and 15 get one extra beat that starts their clips. | In the original the pictures link to the clips; in a beatdeck the click is the beat. |
| D6 | The four clips are bundled as local files (720p max, H.264, full length): three from Drive, one (`2Y3gmYO8TCE`) from YouTube. Sources are listed in `deck/deck.config.ts` (presenter notes only). | `npm run build` fails on remote URLs (offline rule). The clips are other people's social videos; they are in the repo only to play offline (user's call, 2026-11-11). |
| D7 | Typos fixed: "¿Tiene senido?", "No exite", "Infraestructora", "Organizado GDG Aranjuez", "se vió". | User's call (2026-11-11). |
| D8 | Images: PNG/JPG converted to WebP (q84, alpha kept); the GIF stays a GIF. | 30 MB of media in the PPTX became about 4 MB. |
| D9 | Font: IBM Plex Sans (400/600/700 from `@fontsource`). The source uses "IBM Plex Sans SemiBold". | Local font files, no CDN. |
| D10 | `Chrome: null`; no standby screen, no QR of our own. | The original has neither. `qrUrl` stays `TODO`. |
| D11 | Slide numbers are not drawn. | The original slides do not show them. |
| D12 | Videos: `?capture=1` and the presenter window never play them (poster only). | `verify`/`shot` compare frames; the presenter view mirrors the stage and would double the audio. |
| D13 | Un-branding: the "CONFERENCE MADRID 2026" logo (layout image `image17`) is removed from the content layouts, and slide 76 (Codemotion feedback QR and wordmark) is left out. Slide 75 (speaker, LinkedIn QR) stays. | Event-agnostic default (user's call, 2026-11-11). Another event's closing slide can be added to the Slides deck and re-generated. |

## Known differences from the PDF

- Slides 14 and 15: the PDF export shows a red cross where the clip posters are; here the first frame of each clip is the poster.
- Line spacing and bullet glyphs are re-drawn in CSS (bullets are circles); sub-pixel text differences are expected.
