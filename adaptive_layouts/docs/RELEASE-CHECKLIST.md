# Release checklist — Adaptive Layouts

Merge to `main` on **20 Nov 2026**; talk on 21 Nov. Tick as you go.

## Content (open items)

- [ ] **TODO(capture)**: the 9 Muviss captures/clips in `deck/assets.ts` (list in `docs/RUNBOOK.md`). Until then the stage shows dashed boxes.
- [ ] **TODO(speaker)** 3.6 "a11y": what is said here (D15).
- [ ] **TODO(speaker)** 2.3 / 2.4: the 3.000M figure is from 2021; keep it with its date, drop it, or keep only 580M (R7, R8).
- [ ] Re-check the facts in `docs/research.md` (R1–R11) the week of the talk: the docs pages are updated often. Muviss is at `d7aa1e56`; if it moved, run `python3 tools/gen-code.py` and re-check `file:line` refs.
- [ ] Notes (`note` in `deck/scenes.ts`) rewritten in your own words where you want them.

## Build

- [ ] `npm run build` passes (typecheck, bundle, offline check).
- [ ] `npm run verify` exits 0; open `artifacts/verify/contact.png` and the full-size frames of scenes 4–7 (the code ones).
- [ ] `node tools/contrast.mjs` → all pairs ≥ 4.5:1.
- [ ] `npm run present` works with Wi-Fi off; presenter connects; timed run ≈ 45 min.

## Web (D11, D12)

- [ ] Rebase `talk/adaptive-layouts-jaen26` on `main` after app_functions (~7 Nov). Expect conflicts in `landing/index.html` (the `TALKS` array and `TAGS`: both add `android`), `.github/workflows/deploy.yml` and `README.md`: keep both talks.
- [ ] Open the PR; CI builds every talk. Merge on 20 Nov.
- [ ] After the deploy: <https://juanjecilla.github.io/slideshow/adaptive_layouts/> loads, the landing card links to it and its thumbnail shows, and the QR on 9.8 scans to it.

## Day of the talk

- [ ] Follow `docs/RUNBOOK.md`.
