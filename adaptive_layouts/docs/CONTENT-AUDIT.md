# Content audit — Adaptive Layouts

Source: `reference/Adaptative Layouts.pptx` (29 slides, git-ignored) → `reference/source/slides.md`. Google Slides
original: `1Ggu3z9MsqxbkrUD0M-s0IQh2jEpPzJrSeLRsgdjBRWo` (owner codingpit@gmail.com). Speaker notes in the source: none.
Design reference: none (own western theme, D10). Rule: the source decides **what** is said; the theme decides **how** it looks.

## Facts (never guess)

| Fact | Value | Source |
| --- | --- | --- |
| Title | Adaptive Layouts · Adaptarse o Morir | S01 + D3 |
| Speaker / role | Juanje Cilla · Senior Software Engineer, 10+ years in Android | S03 |
| Event · date | GDG Jaén DevFest · 21 Nov 2026 · online | speaker |
| QR target | `https://juanjecilla.github.io/slideshow/adaptive_layouts/` (D9). Confirm after the first deploy. | speaker / landing |
| Links | linktr.ee/juanje.cilla | S29 |

## Slide → beat mapping

Beat ids are `scene.beat`, 1-based, as the chrome shows them.

| Slide | What the source says | Beat(s) | Status | Notes |
| --- | --- | --- | --- | --- |
| 01 | Adaptative Layouts · Adaptarse o Morir | 1.2 | kept | title fixed to "Adaptive" (D3) |
| 02 | same as 01, + image | 1.2 | merged | duplicate of 01 |
| 03 | Quién soy: Juanje Cilla, Senior SE, 10+ años Android, KeepCoding, GDG Aranjuez, Coding Pit, La Secta | 1.4–1.6 | kept | split in three beats |
| 04 | Agenda 1–4 (+ poster fan art) | 1.8 | kept | art not reused (D14) |
| 05 | 1. Problemática a.k.a. El Malo | 2.1 | kept | |
| 06 | Dispositivos · Contexto · Estado | 2.2 | kept | |
| 07 | 3.000M Dispositivos Android en el mundo | 2.3, 2.4 | restored + updated | the figure is from 2021 (R8); 580M large screens added (R7) |
| 08 | 1.1 Dispositivos (8 device images) | 2.5 | kept | own silhouettes instead of promo photos (D14) |
| 09 | 1.2 Contexto: Orientación, Zoom, Font size | 2.6–2.8 | kept | one beat each |
| 10 | 1.3 Estado: Misma app, Varias apps | 2.9, 2.10 | kept | |
| 11 | recap | 2.11 | kept | |
| 12 | image only (confused-maths GIF) | 2.12 | restored as text | D14, D16 |
| 13 | image only (mind-blown GIF) | 2.13 | restored as text | D14, D16 |
| 14 | 2. Soluciones antiguas a.k.a. El Feo | 3.1 | kept | |
| 15 | 2.1 XML: múltiples layouts, independientes, poca reusabilidad, configuraciones complejas | 3.2, 3.3 | kept | |
| 16 | 2.2 Ñapas (`isTablet` bool; `screenOrientation="portrait"`) | 3.4, 3.5 | kept | code as text, character for character |
| 17 | 2.3 a11y (title + image) | 3.6 | **open** | D15, TODO(speaker) |
| 18 | 2.4 Problemas: pantallas grandes, orientaciones forzadas, min/max aspect ratio, ResizeableActivity | 3.7–3.10 | kept | |
| — | Android 16 / opt-out / Android 17 | 3.11–3.15 | **new** | R4–R6; reinforces El Feo and the Not Do's |
| 19 | 3. Adaptive Layouts a.k.a. El Bueno | 4.1 | kept | |
| 20 | Compose, WSC, Window Insets, M3 Adaptive, Adaptive input methods | 4.2 | kept | |
| 21 | 3.1 WSC: 3 sizes, independent of device, HingeInfo / Posture | 4.3, 4.4, 4.7 | kept | |
| — | Large and Extra-large, opt-in | 4.5, 4.6 | **new** | R1, R2 |
| — | Muviss case: bar → rail | 4.8–4.12 | **new** | R20 |
| 22 | 3.2 Window Insets: scaffold components, windowInsetsPadding | 5.1–5.3 | kept | |
| — | Muviss case: edge-to-edge, ScreenInsets | 5.4–5.8 | **new** | R21 |
| 23 | 3.3 M3 Adaptive: NavigationSuiteScaffold, PaneScaffolds, Supporting, ListDetail, Predictive Back, Navigable | 6.1–6.4 | kept | |
| 24 | image only (Now in Android on Chromebook) | 6.5–6.7 | replaced | docs sample (R10, R11) + versions (R9); the screenshot is third party (D14) |
| — | Muviss cases: Detail, grids, caps, legend bug | 6.8–6.14 | **new** | R22–R25 |
| 25 | 3.4 Adaptive input methods: stylus, keyboards, mice, accessibility tools | 7.1, 7.2 | kept | |
| — | Muviss case: desktop and keyboard | 7.3–7.8 | **new** | R26–R28 |
| 26 | 3.5 Otras opciones: grids, BoxWithConstraints, SubcomposeLayout, Custom Layout, Measurables | 7.9–7.12 | kept | |
| — | Demo with Muviss + its debt | 8.1–8.10 | **new** | D7, D8 |
| 27 | 4. Conclusiones a.k.a. El FIN | 9.1 | kept | |
| 28 | Not Do's / Do's | 9.2–9.6 | kept + updated | the `resizeableActivity` advice is superseded by API 36 (R4) |
| 29 | Gracias · linktr.ee/juanje.cilla · juanje-cilla | 9.7–9.9 | kept | + QR and URL as text (D9) |

Nothing from the 29 slides is cut. Slide 2 is merged into 1.2 (duplicate). The old Do's wording is changed on purpose (R4).

## Real artefacts

| Artefact | File | Used in | Rights / credit |
| --- | --- | --- | --- |
| Muviss code snippets | `deck/code.ts` (copied from Muviss, file:line in each) | scenes 4–7 | own code |
| Muviss captures (compact / expanded) | `deck/assets/…` | 4.11, 6.10, … | own app — **TODO(capture)** |
| Demo MP4s | `deck/assets/…` | scene 8 | own app — **TODO(capture)** |
| Source images (poster art, memes, Pixel promo, NiA screenshot) | `reference/source/media/` (git-ignored) | **none** | third party; not published (D14) |

## Open questions

- [ ] S17 "a11y": what does the speaker say here? (D15)
- [ ] 3.000M (2021) or 580M large screens (2026), or both? (R7, R8)
- [ ] Confirm the public URL for the QR after the first deploy.
- [ ] Do any of the original images come back with a credit? (D14)

## Decisions taken on the speaker's behalf

D14, D15, D16 (see DECISIONS.md).
