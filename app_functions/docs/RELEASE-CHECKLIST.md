# Release checklist

Nothing is pushed or deployed before **2026-11-07**. The branch `talk/app-functions-devfest26` carries everything,
including the web integration, so merging the PR is the only step that publishes.

## T-14 → T-7 (≈ 2026-10-24 → 31): content freeze
- [x] **Real agenda** read 2026-11-02 from https://gdgourense.es/events/df26 → demo and deck updated (`DevfestOurense26/docs/AGENDA-SYNC.md`). **Re-read the page on 2026-11-06**: the organisers can still change it (the 18:15 slot is "Pendiente de confirmar").
- [x] **Re-check versions** done 2026-11-02 (research.md R1-R10): the library moved to **1.0.0-beta01**, the demo and deck moved with it. **Repeat on 2026-11-06**: AndroidX release notes, official docs "Last updated", skill folder
      commits, `android/appfunctions` samples. If something moved → update the demo, run
      `python3 -I scripts/gen-code.py`, re-shoot code beats.
      ```bash
      curl -s https://dl.google.com/dl/android/maven2/androidx/appfunctions/appfunctions/maven-metadata.xml | grep -o "<version>[^<]*" | tail -3
      gh api "repos/android/skills/commits?path=device-ai/appfunctions&per_page=3" --jq '.[]|.commit.committer.date[:10]+" "+.commit.message'
      ```
- [x] "MCP: Nov 2024" verified (anthropic.com/news/model-context-protocol, dated Nov 25, 2024).
- [ ] **Re-capture demo outputs on a device (needed now: none exist for beta01 + the real agenda, so scene 14 is absent until then)**: `SERIAL=<serial> scripts/capture-demo.sh` in the demo repo, then `python3 -I scripts/gen-code.py` here.
- [ ] Run the Testing Agent once (`DevfestOurense26/docs/TESTING-AGENT.md`); decide if the LLM part is in the live demo (needs your Gemini key).
- [ ] **Re-run the demo on the Pixel with beta01 and the real agenda** (not connected on 2026-11-02): `DevfestOurense26/docs/DEMO.md`, including a `LocalTime` input test (research.md R8). Free space on the phone (it was 100 % full).
- [ ] Time a full rehearsal with the presenter view; trim from scene 11 / scene 7 if over 47 min.
- [ ] EAP: if access arrives, add the Gemini beat to scene 12.
- [x] English frozen on 2026-11-02 after the agenda/beta01 update → Spanish copy started (`docs/HANDOFF-ES.md`).

## T-7 → T-1
- [x] Spanish copy done 2026-11-02: `npm run build && npm run verify` in `ourense26/` (75 beats, QR decodes to the `/ourense26/` URL). **Any later change to the English text must be mirrored there.**
- [x] Landing card → ES URL and `app_functions/ourense26/package-lock.json` in `cache-dependency-path` (done 2026-11-02).
- [ ] Landing: check the card in both languages (ES/EN toggle) and the thumbnail.
- [ ] Record a short screen capture of the app UI changing after `add` (the adb outputs are already captured in `docs/captures/` and in scene 14).
- [ ] Demo repo: decide whether to make it public after the event (it is private now).
- [ ] Open the PR (`talk/app-functions-devfest26` → `main`). The build job runs on the PR; the deploy job only on push to `main`.
- [ ] **Shared files conflict.** The other talk branches (`talk/a11y-ai-jerez26`, `talk/adaptive-layouts-jaen26`, `talk/amar-tiempos-revueltos-barcelona26`, checked 2026-11-02) also add a build step, a landing card and a README row at the same places in `.github/workflows/deploy.yml`, `landing/index.html` and `README.md`. Whichever merges second must rebase and keep both. The order is the speaker's call. `git -C ~/Projects/Charlas worktree list` shows who works where; this talk lives in the worktree `~/Projects/Charlas-appfunctions`.

## Event day (2026-11-07)
- [ ] Merge the PR **after** the talk starts or the morning of (the QR on the last slide points to the live URL).
- [ ] Check https://juanjecilla.github.io/slideshow/app_functions/ and `/ourense26/` load, QR decodes, thumbnail OK.
- [ ] Offline fallback: `npm run present` works without Wi-Fi.

## What the branch already contains for the web
| Piece | File |
| --- | --- |
| Deploy: install + build EN at `/slideshow/app_functions/`; ES at `/ourense26/` only if the folder exists | `.github/workflows/deploy.yml` |
| Landing card (ES/EN title, description, tags, thumbnail) and `android` tag | `landing/index.html` |
| Thumbnail 1280×720 from the title beat | `landing/assets/thumb-app-functions.png` |
| README row | `README.md` |
| Last slide shows URL + QR | `app_functions/deck/deck.config.ts` (`qrUrl`, `qrLabel`), `13-Close.tsx` |

## Known caveats
- `app_functions/.github/workflows/verify.yml` came from beatdeck's `init`; GitHub ignores nested workflows, so it is inert here.
- The landing card links to the English deck until the Spanish copy exists.
- `scripts/check-offline.mjs` has one local tweak (allows `schemas.android.com/apk/` XML namespaces shown in snippets).
  `npm run upgrade` would back it up and not merge it.
