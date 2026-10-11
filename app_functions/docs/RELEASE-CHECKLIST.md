# Release checklist

Nothing is pushed or deployed before **2026-11-07**. The branch `talk/app-functions-devfest26` carries everything,
including the web integration, so merging the PR is the only step that publishes.

## T-14 → T-7 (≈ 2026-10-24 → 31): content freeze
- [ ] **Real talk list** published → update the demo (`DevfestOurense26/docs/REAL-TALKS.md` lists every place).
- [ ] **Re-check versions** (research.md B6): AndroidX release notes, official docs "Last updated", skill folder
      commits, `android/appfunctions` samples. If `@AppFunction` moved or the docs changed → update the demo, run
      `python3 -I scripts/gen-code.py`, re-shoot code beats.
      ```bash
      curl -s https://dl.google.com/dl/android/maven2/androidx/appfunctions/appfunctions/maven-metadata.xml | grep -o "<version>[^<]*" | tail -3
      gh api "repos/android/skills/commits?path=device-ai/appfunctions&per_page=3" --jq '.[]|.commit.committer.date[:10]+" "+.commit.message'
      ```
- [ ] Verify "MCP: Nov 2024" on the timeline (4.3) against the primary source.
- [ ] Re-run the demo on the device: `DevfestOurense26/docs/DEMO.md`. Free space on the phone (it was 100 % full).
- [ ] Time a full rehearsal with the presenter view; trim from scene 11 / scene 7 if over 47 min.
- [ ] EAP: if access arrives, add the Gemini beat to scene 12.
- [ ] Freeze English → start the Spanish copy (`docs/HANDOFF-ES.md`).

## T-7 → T-1
- [ ] Spanish copy done: `npm run build && npm run verify` in `ourense26/`.
- [ ] Landing card → ES URL (`TODO(es-copy)` in `landing/index.html`); add `app_functions/ourense26/package-lock.json`
      to `cache-dependency-path` in `deploy.yml`.
- [ ] Landing: check the card in both languages (ES/EN toggle) and the thumbnail.
- [ ] Capture backup screenshots/recording of each demo step → `DevfestOurense26/docs/captures/`.
- [ ] Demo repo: decide whether to make it public after the event (it is private now).
- [ ] Open the PR (`talk/app-functions-devfest26` → `main`). The build job runs on the PR; the deploy job only on push to `main`.

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
