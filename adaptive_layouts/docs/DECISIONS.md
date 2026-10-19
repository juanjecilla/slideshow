# Decisions

Agreed with the speaker in the planning session (2026-10-19) unless marked **(on the speaker's behalf)**.

| Id | Decision |
| --- | --- |
| D1 | **Slot:** 1 h in total at GDG Jaén DevFest, **21 Nov 2026, online**. Target 45 min of content + 5 min Q&A + margin. About 105 beats at ~25 s. |
| D2 | **Event line:** "DevFest Jaén 2026 · GDG Jaén · Online · 21 nov". No GDG logos until they are in the repo. |
| D3 | **Title:** "Adaptive Layouts", subtitle "Adaptarse o Morir". The Nov 2025 deck said "Adaptative", a calque of the Spanish. |
| D4 | **Structure:** the original's four parts stay (Problemática = El Malo, Soluciones antiguas = El Feo, Adaptive Layouts = El Bueno, Conclusiones = El FIN). Content is extended, not rewritten. |
| D5 | **Facts are updated from primary sources** (docs/research.md). Anything unverifiable is a `TODO`. |
| D6 | **Muviss cases live inside El Bueno**, each next to the API it illustrates, with the real code (file:line in research.md) and real captures. |
| D7 | **Muviss's debt is told, not hidden:** no list-detail/supporting pane, no predictive back, no foldables, breakpoints split 600/840 dp. Examples of those APIs come from the official docs and are labelled as such. Muviss itself is not changed for the talk. |
| D8 | **Demo:** MP4s of the desktop app resizing, embedded (the deck works offline). Optional live run with `:app:desktopApp:run`, pre-warmed. The video is the fallback. |
| D9 | **Bio:** as the original, plus Muviss. **Close:** QR to the public URL + the URL as text + linktr.ee/juanje.cilla. |
| D10 | **Theme:** own `themes/western.css`, a spaghetti-western look (sand, ink, burnt ochre; inverted intertitles). Not android.css. Fonts bundled (Rye for display, Inter, JetBrains Mono). Contrast checked: `node tools/contrast.mjs`. |
| D11 | **Branch / worktree:** `talk/adaptive-layouts-jaen26`, worktree `../Charlas-adaptive`, folder `adaptive_layouts/`, deployed at `/slideshow/adaptive_layouts/`. |
| D12 | **Merge to main on 20 Nov**, after rebasing onto what main has by then (app_functions ~7 Nov; a11y_ai after this one, 21 Nov). Expect conflicts in `landing/`, `deploy.yml`, `README.md`. |
| D13 | **Source material is local only:** `reference/*.pptx` and `reference/source/media/` are git-ignored. `reference/source/slides.md` (text) is kept. |
| D14 | **(on the speaker's behalf)** The original's third-party images are **not reused** in the published talk: the poster art (S04, "Il Buono / Il Cattivo / Il Brutto" fan art), the two meme GIFs (S12, S13), the Homer GIF (S17), the Pixel Fold promo (S08) and the Now in Android screenshot (S24). They are redone in the western style, as text, or replaced by Muviss captures. Reason: the talk is published on the web. If the speaker wants any back, add it with a credit and say so here. |
| D15 | **(on the speaker's behalf)** S17 "a11y" has only a title and a GIF. It is built as one beat reading it as the font-size / zoom side of the problem. Marked `TODO(speaker)` in `scenes.ts`. |
| D16 | **(on the speaker's behalf)** S12 and S13 (memes) become two short text beats ("todo a la vez", "Dispositivos × Contexto × Estado"). No numbers are shown because the source has none. |
| D17 | **Muviss code on stage comes from `main`** (commit `2d2c7e40`), never from a feature branch: the audience can only find what is on main. `tools/gen-code.py` is anchor-based and announces every change it makes to fit the stage ("abreviado con …", "línea partida", "sin líneas en blanco"). Type on stage is ≥ 28 px for code, margins ≥ 150 px (a stream downscales). |
| D18 | **Quotes are checked against the raw page**, not a summary: the five English quotes (3.14, 10.3) and the Android 16 attribute list were matched with `grep -F` on the fetched page text on 2026-10-20. The list-detail sample was checked against the original `ListDetailSample.kt` it is taken from. |
