# Decisions (grilling session, 2026-10-11)

The draft script (48 slides) was stress-tested before building. These are the outcomes and why.

| # | Decision | Why |
| --- | --- | --- |
| 1 | 50 min, technical audience, jargon OK | Drives density: ~74 beats, ~54 min of material, trimmed live |
| 2 | AppFunctions = on-device **analogue** of MCP tools, not MCP. A slide "analogy, not protocol" (transport, registry, schema, callers). The draft's "any agent: Gemini, Claude…" is gone | Google's docs say "equivalent of tools within MCP"; callers need `EXECUTE_APP_FUNCTIONS`; Gemini is private preview. A wrong claim in Q&A costs credibility |
| 3 | CFP title on the cover. "Skill" defined once (5.3): *a typed capability an agent can invoke*. Android Skills (the dev tool) is a separate bonus beat | "Skill" means three things (tool, Android Skills, Anthropic Agent Skills) |
| 4 | All `[n]` citations removed; fact-check against primary sources → `research.md`; resources slide has 4 real URLs | The citations had no links and several claims did not survive |
| 5 | FGS block (3 slides) → one comparison scene ("why not just…"). New block "safe & predictable" (9 beats) | FGS was a strawman; the CFP promised *secure, deterministic, without breaking UX* and the draft had nothing |
| 6 | Opening = animated 3-app scenario with a human-in-the-loop confirmation; history = one timeline scene | Concrete before abstract; the confirmation seeds the safety block |
| 7 | MCP block: 2 slides of tool anatomy + MCP / N×M | Audience already knows tool calling |
| 8 | Two architecture blocks kept: short conceptual + deep dive driven by one animated diagram (5 phases) | Speaker preference; diagram lets us focus phase by phase |
| 9 | Own demo app (DevFest agenda); fallback official `ChatApp` | Same domain in the opening, the code and the demo |
| 10 | Demo = adb (`list`, `execute`, closed app, enable/disable) + Testing Agent; Gemini EAP only if access arrives | adb is deterministic; EAP is closed |
| 11 | Block 6 "beyond one function" kept (4 beats) even though some content overlaps | Time is not the constraint at 50 min |
| 12 | English base deck; Spanish copy in `ourense26/` after the content freeze; single-project i18n documented as issues (`slideshow#3`, `beatdeck#1`) | Reuse elsewhere; beatdeck copies the engine per talk |
| 13 | Dark theme, Android green `#3DDC84`, "agent" blue `#8AB4FF`, mono for code | Matches the landing's terminal look |
| 14 | Embargo: local only until 2026-11-07 | Slides are public on the web |
| 15 | Pin `androidx.appfunctions 1.0.0-alpha10` (docs, skill and samples agree) and say newer alphas exist; re-check one week before | alpha13 renames `@AppFunction`; demo with the official skill must produce compiling code |
| 16 | Destructive function takes `confirmed: Boolean` and refuses without it | Safety enforced in code, not only in prose (determinism) |
| 17 | 4th function is `getFavourites`, not `getTalk` | Skill: avoid purely informational tools |
| 18 | Times as `"HH:mm"` strings | alpha10 cannot deserialize `LocalTime` inputs (verified on device) |

## Block 6 — 40-minute variant (not applied)
If the talk is ever given in **40 min**, dissolve scene 11 and redistribute:
- Multi-app orchestration → no slide (opening scenario + a verbal callback at the close).
- Operational Patterns / Constraints (`app_metadata.xml`) → one beat inside scene 10 (single owner, no duplication).
- Dynamic functions (API 37) → one "what's next" beat after the deep dive, or a verbal mention.
- Android Skills → bonus beat at the close.

Intermediate (~45 min): keep scene 11 with 3 beats (patterns+constraints / dynamic / Android Skills), orchestration as a
callback only, and treat it as skippable live (scene jump key `1`–`9`, or overview `O`).

Rough budget at 50 min: intro 5 · MCP 3 · concept 4 · why-not 1.5 · deep dive 7 · code 8 · safe 5 · beyond 5 · demo 10 · close 2.

## Not done on purpose
- No `@AppFunctionAccessLevel` (alpha13 only; semantics unread).
- No Gemini end-to-end (private preview). A slot exists if EAP access arrives.
- Slices "deprecated in 2021", managed-profile limits, FGS hour limits, "no battery impact": no primary source → removed.
