# Release checklist — 21 Nov 2026

Nothing below has been done on the author's behalf: everything outward-facing (push, make public, merge) is a decision for the author.

## Local state (as of 2026-10-19)

| What | Where | State |
| --- | --- | --- |
| Deck, docs, web integration | `Charlas` branch `talk/a11y-ai-jerez26` | committed locally, **not pushed** |
| Toolkit | `~/Projects/hephestus` (clone of `juanjecilla/hephestus`, empty and **private** on GitHub) | committed locally, **not pushed** |
| App changes | `~/Projects/CodingPit/muviss-wt-a11y-main` (branch `talk/a11y-ai-jerez26`) and `muviss-wt-a11y-broken` (branch `demo/a11y-broken`) | committed locally, **not pushed** |

## Before the day

- [ ] Push the Charlas branch and open a PR against `main` (CI builds `a11y_ai/`). **Do not merge yet.**
- [ ] Rebase on `main` after `app_functions` merges on 7 Nov: expect conflicts in `landing/index.html` (`TALKS`, `TAGS`), `.github/workflows/deploy.yml`, `README.md`. Keep both talks.
- [ ] Push the two Muviss branches (the repo is public, so they become visible) or keep them local and say so in the talk. Fixes could be upstreamed as PRs into `develop` following Muviss' rules (landing guard, issues for undone work): not done.
- [ ] Check `hephestus` is the name you want on the QR (the myth is *Hephaestus*).
- [ ] Capture the three Pixel assets (RUNBOOK) and replace the dashed boxes.
- [ ] `node tools/check-a11y.mjs` → all PASS. `npm run verify` → ✓.
- [ ] Re-check docs/research.md **Pending** items (Pixel AICore list, Ley 11/2023 text, Journeys and a11y).

## The morning of the 21st

- [ ] Make `juanjecilla/hephestus` **public** and push (Apache-2.0, README has the install lines).
- [ ] Merge the Charlas PR: GitHub Pages deploys `/slideshow/a11y_ai/`. Open it and press → through the deck.
- [ ] Open the QR on a phone: it must land on the public repo.
- [ ] Muviss: the two talk branches are public (repo already is).

## After

- [ ] Spanish copy: `a11y_ai/jerez26/` following `app_functions/docs/HANDOFF-ES.md` (glossary). Note: Image Description is English-only (R1.3): live output stays English.
- [ ] Switch the landing entry's `url` to the Spanish copy if you want it first.
