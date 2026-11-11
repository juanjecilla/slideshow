# Release checklist — Adaptive Layouts

Merge to `main` on **20 Nov 2026**; talk on 21 Nov. Tick as you go.

## Content (open items)

- [x] Muviss captures and clips (done 2026-10-20, from `main` `2d2c7e40`; recipe in `docs/RUNBOOK.md`). Look at them once on the stream-sized screen.
- [x] 3.6 "a11y" is the Troy McClure beat (D25). **Open:** fix the tense of the note (Jerez is the same day, 21 Nov).
- [x] 2.3 / 2.4: "3.000M" kept and marked as outdated (D27).
- [ ] Re-check the facts in `docs/research.md` (R1–R11) the week of the talk: the docs pages are updated often. Muviss main is at `2d2c7e40`; if it moved, run `python3 tools/gen-code.py` and re-check `file:line` refs.
- [ ] Notes (`note` in `deck/scenes.ts`) rewritten in your own words where you want them.

## Build

- [x] `npm run build` passes (typecheck, bundle, offline check), 2026-11-11.
- [ ] `npm run verify` exits 0; open `artifacts/verify/contact.png` and the full-size frames of scenes 4–7 (the code ones).
- [x] `node tools/contrast.mjs` → all pairs ≥ 4.5:1 (now includes code tokens), 2026-11-11.
- [x] `node tools/check-a11y.mjs` → 11/11, 2026-11-11 (`npm run check:a11y`).
- [ ] `npm run present` works with Wi-Fi off; presenter connects; timed run ≈ 45 min.

## Web (D11, D12)

- [x] Rebased on `origin/main` on 2026-11-11 (conflicts in `deploy.yml`, `README.md`, `landing/index.html` resolved keeping both talks). **Re-do** if `a11y_ai` merges first: it adds its own card and build step. Expect conflicts in `landing/index.html` (the `TALKS` array and `TAGS`: both add `android`), `.github/workflows/deploy.yml` and `README.md`: keep both talks.
- [ ] Open the PR; CI builds every talk. Merge on 20 Nov.
- [ ] The slides URL on 9.7 / 9.9 returns 404 until the deploy: check it after the merge.
- [ ] After the deploy: <https://juanjecilla.github.io/slideshow/adaptive_layouts/> loads, the landing card links to it and its thumbnail shows, and the QR on 9.8 scans to it.

## Day of the talk

- [ ] Follow `docs/RUNBOOK.md`.
