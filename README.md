# Charlas · Juanje Cilla

Slides for conference talks, built with [Slidev](https://sli.dev/) and deployed to GitHub Pages.

**Landing:** https://juanjecilla.github.io/slideshow/

## Talks

| Talk | Conference | Date | Slides | Video |
|------|-----------|------|--------|-------|
| [App Functions — Convierte tu app en una skill](app_functions/) | DevFest Ourense 2026 · GDG Ourense | November 2026 | [▶ Ver slides](https://juanjecilla.github.io/slideshow/app_functions/) | |
| [a11y — Accesibilidad para Mortales](a11y/) | Commit Conf 2026 | June 2026 | [▶ Ver slides](https://juanjecilla.github.io/slideshow/a11y/) | [▶ Ver charla](https://www.youtube.com/watch?v=D8JnZuwzV6E&t=135s) (checked 2026-11-11) |
| [Dev Wars — El despertar del ego](dev_wars/) | Codemotion Madrid 2026 | April 2026 | [▶ Codemotion 2026](https://juanjecilla.github.io/slideshow/dev_wars/codemotion26/) · [▶ Versión sin marca de evento](https://juanjecilla.github.io/slideshow/dev_wars/) | [▶ Ver charla](https://www.youtube.com/watch?v=vFjLtKR1xYQ&t=8s) (checked 2026-11-11) |
| [Cero Presupuesto, Producto Top](bc2026/) | BC Day ES 2026 · Microsoft Madrid | April 2026 | [▶ Ver slides](https://juanjecilla.github.io/slideshow/bc2026/) | |

## Setup

Each talk is a standalone project (Slidev, or [beatdeck](https://github.com/juanjecilla/beatdeck) (checked 2026-11-11) for `app_functions/` and `dev_wars/`). To run locally:

```bash
cd <talk-folder>
npm install
npm run dev
```

## Deploy

Pushes to `main` trigger a GitHub Actions workflow that builds all talks and deploys to GitHub Pages automatically.
