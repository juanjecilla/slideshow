# Content audit — draft script (48 slides) → beat map

Source: speaker's draft script (pasted in session, not stored; ~100 `[n]` citations removed on purpose) + CFP text.
Facts: see `research.md`. Decisions: `~/.claude/plans/i-am-going-to-polymorphic-pillow.md` (grilling session 2026-10-11).

| Draft slide(s) | Beat(s) | Status |
| --- | --- | --- |
| 1 Cover | 01.1-2 | Kept. CFP title on stage; speaker role/links added (new "INTRO" scene 02). |
| — | 02.3-6 | **New**: live audience check (AI usage, Android developer, Android Studio) with a click-triggered plot twist. |
| 2-3 Paradigm / headless | 03 SCENARIO (hook) + 04.5 | Reworked: opening is an animated 3-app scenario, concept lands as callback in CONTEXT. |
| 4 Slices | 04.1 | Kept, shortened. "Deprecated 2021" dropped (no primary source, H1). |
| 5 App Actions / BII | 04.2 | Kept, shortened. "No managed profiles" dropped (H2). |
| 6 Fragmentation | 05.5 | Merged with MCP N×M. |
| 7-10 MCP (4 slides) | 05.1-5 | Compressed to tool anatomy + MCP + N×M. "Any agent: Gemini, Claude…" **removed** (F2). |
| 11 MCP in mobile | 05.6 | Kept. |
| 12-15 AppFunctions as on-device MCP, roles | 06.1-2 | Reframed as analogy (F1). AppSearch named only as "system index" (D2). |
| — | 06.3-6 | **New**: analogy-not-protocol table. |
| — | 06.7 | **New**: status/experimental/private preview (F3). |
| 16-18 Pillars | 06.8 | Merged to one beat. "Indexed at install" softened (D3). |
| 19-21 FGS block | 07 WHY NOT | 3 slides → 1 comparison scene. FGS numbers removed (H3). "No battery impact" dropped (H4). |
| 22-28 Under the hood | 08 DEEP DIVE | One animated diagram. "Validates caller signature" dropped (E3). API 36 vs 37 moved to BEYOND. |
| 29 Orchestration | 11.1 | Kept as callback. |
| 30-31 Patterns / constraints | 11.2 | Corrected: free text in `app_metadata` description (X4). |
| 32 Dynamic API 37 | 11.3 | Kept; Jetpack experimental (X3). |
| 33 Android Skills | 11.4 | Kept as bonus, renamed to avoid "skill" clash. |
| 34-40 Code | 09 CODE | Kept, ordered gradle → function → serializable → entry point → manifest → errors → architecture. Pinned alpha10 (B6). |
| — | 10 SAFE | **New** (CFP promises): who can call, untrusted input, determinism, idempotency, confirmation, state, KDoc good/bad. |
| 41-45 Demo | 12 DEMO | Kept; domain = DevFest Ourense agenda app (own project, other session). JetPacker dropped (T6). |
| 46 Checklist | 13.1 | Kept, merged with SAFE rules. |
| 47 Resources | 13.2 | Real URLs only (research.md). |
| 48 Thanks/Q&A | 13.3 | Kept + links + QR (TODO). |

## Decisions taken on the speaker's behalf
- Stage language English; Spanish copy later in `ourense26/`.
- Dark theme, Android green `#3DDC84`, secondary "agent" blue `#8AB4FF`.
- Timeline years: Slices 2018 (from draft), MCP Nov 2024 (public knowledge — **verify before freeze**), AppFunctions alpha01 May 2025 (S4). App Actions shown without a year.
- Scenario apps are generic ("DevFest", "Calendar", "Messages"): no real logos.

## Open
- QR target: `TODO` (talk URL after 7 Nov).
- Demo snippets/ids to be reconciled with the demo project.
- `@AppFunctionAccessLevel` semantics (D8) before mentioning.
- Re-check docs/skill/samples ≈ 2026-10-31 (B6).
