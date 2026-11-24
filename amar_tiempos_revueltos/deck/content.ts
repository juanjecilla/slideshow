/**
 * All the copy of the talk, in one place. English is the Base deck (D2); the Spanish edition (barcelona26) is made from
 * this file once it is frozen: translate the strings, keep every `name` (they are identifiers, never translated).
 *
 * Rules (docs/DECISIONS.md, docs/research.md):
 *  - Only real data: every figure has a ✅ id in `ref`; its mandatory caveat sits in the same beat or the next one.
 *  - A beat with a figure from Manfred carries the credit line (CC BY-NC 4.0).
 *  - `stamp: 'PROPOSAL'` / kind 'todo' = decided by nobody yet; visible on purpose.
 *  - `note` = speaker cue, never shown and never announced.
 */

export type Row = { big: string; label: string; accent?: boolean };

export type View =
  | { kind: 'standby'; eyebrow: string; line?: string }
  | { kind: 'title'; eyebrow: string; title: [string, string]; sub: string; author: string }
  | { kind: 'statement'; eyebrow?: string; say: string[]; sub?: string; credit?: string; stamp?: string; accent?: number }
  | { kind: 'numbers'; eyebrow: string; say: string; rows: Row[]; caveat?: string; credit?: string }
  | { kind: 'quote'; eyebrow?: string; quote: string; by: string; sub?: string; credit?: string }
  | { kind: 'chapter'; n: string; title: string; line?: string }
  | { kind: 'previously'; eyebrow: string; lines: string[] }
  | { kind: 'cast'; lit: number; desc?: string }
  | { kind: 'list'; eyebrow: string; say?: string; items: string[]; foot?: string; credit?: string; stamp?: string; small?: boolean }
  | { kind: 'todo'; eyebrow: string; what: string }
  | { kind: 'qr'; eyebrow: string; say: string[]; sub: string };

export interface BeatContent { name: string; ref?: string; note?: string; v: View }
export interface SceneContent { id: string; title: string; tone: string; numeral?: boolean; beats: BeatContent[] }

export const CAST = ['The Dev', 'Management', 'The AI Agent', 'The Bill', 'The Team'] as const;

export const MANFRED = 'Manfred × TheirStack, Tech Career Report 2026 · CC BY-NC 4.0';
export const MANFRED_SAMPLE = 'Manfred community: 56% have 10+ years of experience. Not the whole market.';
const METR = 'METR, 2025 study · 16 experienced developers · their own repos';
const SO = 'Stack Overflow Developer Survey 2025';

export const CONTENT: SceneContent[] = [
  {
    id: '01', title: 'OPEN', tone: 'paper', numeral: false,
    beats: [
      { name: 'standby', note: 'Calm screen while people sit down. The first click starts the talk.', v: { kind: 'standby', eyebrow: 'DevFest Barcelona · 28 Nov 2026', line: 'Juanje Cilla' } },
      { name: 'title', ref: 'D5', v: { kind: 'title', eyebrow: 'DevFest Barcelona · 28 Nov 2026', title: ['(progr)Amar', 'en tiempos revueltos'], sub: 'Writing code, and looking after people, in turbulent times', author: 'Juanje Cilla' } },
      { name: 'previously', ref: 'D5', note: '20 s montage of the situation in one breath: AI stays, teams are tense, the bill arrives.', v: { kind: 'previously', eyebrow: 'Previously, in the tech world…', lines: ['AI is here to stay.', 'Teams are tense.', 'The bill is coming.'] } },
      { name: 'hands', ref: 'D11', note: 'Raise your hand. Look at the room, count, move on. No external tool.', v: { kind: 'statement', eyebrow: 'Raise your hand', say: ['Who feels they are', 'falling behind with AI?'] } },
    ],
  },
  {
    id: '02', title: 'CAST', tone: 'violet',
    beats: [
      { name: 'cast', ref: 'D7', note: 'The cast poster appears, nobody highlighted yet.', v: { kind: 'cast', lit: -1 } },
      { name: 'la-dev', ref: 'D7', note: 'Protagonist. The audience is her.', v: { kind: 'cast', lit: 0, desc: 'The protagonist. You are her.' } },
      { name: 'direccion', ref: 'D7', note: 'Burns tokens. Not a villain: it is under pressure too.', v: { kind: 'cast', lit: 1, desc: 'Burns tokens. Under pressure too.' } },
      { name: 'agente-ia', ref: 'D7', note: 'The mysterious suitor.', v: { kind: 'cast', lit: 2, desc: 'The mysterious suitor. Charming, fast, sometimes lies.' } },
      { name: 'la-factura', ref: 'D7', note: 'The villain. Arrives at the end of every month.', v: { kind: 'cast', lit: 3, desc: 'The villain. Arrives at the end of every month.' } },
      { name: 'el-equipo', ref: 'D7', note: 'The ones in the middle.', v: { kind: 'cast', lit: 4, desc: 'The ones in the middle.' } },
    ],
  },
  {
    id: '03', title: 'CH 1 · THE ARRIVAL', tone: 'sun',
    beats: [
      { name: 'chapter', ref: 'D6', v: { kind: 'chapter', n: 'Chapter 1', title: 'The Arrival', line: 'Everyone is using it. Is it working?' } },
      { name: 'promise', ref: 'R2.1', note: 'Everyone arrives at once.', v: { kind: 'numbers', eyebrow: 'Chapter 1 · The Arrival', say: 'Everyone arrives at once', rows: [{ big: '84%', label: 'use or plan to use AI tools in their development work' }], credit: SO } },
      { name: 'everyone', ref: 'R6.1', note: 'SAY the caveat: the Manfred community, mostly veterans, not the whole market.', v: { kind: 'numbers', eyebrow: 'Chapter 1 · The Arrival', say: 'Almost everyone. Hardly anyone trained.', rows: [{ big: '98%', label: 'use AI in their daily work' }, { big: '86%', label: 'say it makes them more productive' }, { big: '20%', label: 'were trained by their company', accent: true }], caveat: MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'feeling', ref: 'R1.2', note: 'Before: they expected 24% faster. After: they believed they had been 20% faster.', v: { kind: 'numbers', eyebrow: 'Chapter 1 · The Arrival', say: 'What you feel…', rows: [{ big: '+24%', label: 'expected to be faster, before' }, { big: '+20%', label: 'believed they had been faster, after' }], credit: METR } },
      { name: 'measure', ref: 'R1.1', note: 'SAY R1.3 right away: 16 people, early 2025, own repos. Not "AI makes you slow".', v: { kind: 'numbers', eyebrow: 'Chapter 1 · The Arrival', say: '…is not what is measured', rows: [{ big: '+24%', label: 'expected' }, { big: '+20%', label: 'believed' }, { big: '−19%', label: 'measured: the tasks took 19% longer', accent: true }], caveat: '16 people, early 2025, their own repos. This does not say “AI makes you slow”.', credit: METR } },
      { name: 'update', ref: 'R1.4', note: 'Follow-up Feb 2026: intervals include zero; METR calls it an unreliable signal because people refused to work without AI. The honest line: we don\'t know how to measure it yet, and the feeling lies.', v: { kind: 'statement', eyebrow: 'METR follow-up · Feb 2026', say: ['We still don\'t know', 'how to measure it'], sub: 'The new estimates include zero. METR calls it “an unreliable signal”.', credit: 'METR, 24 Feb 2026' } },
      { name: 'trust', ref: 'R2.2', note: '46% distrust accuracy vs 33% trust; 3% "highly trust". 66%: "almost right, but not quite".', v: { kind: 'numbers', eyebrow: 'Chapter 1 · The Arrival', say: 'And they do not fully trust it', rows: [{ big: '46%', label: 'distrust its accuracy' }, { big: '33%', label: 'trust it' }, { big: '3%', label: 'highly trust it', accent: true }], caveat: '66% say the problem is solutions that are “almost right, but not quite”.', credit: SO } },
      { name: 'cliffhanger', ref: 'D5', v: { kind: 'statement', say: ['To be continued…'], sub: 'And then the bill arrives.' } },
    ],
  },
  {
    id: '04', title: 'CH 2 · THE CRISIS', tone: 'night',
    beats: [
      { name: 'chapter', ref: 'D6', note: 'Night tone.', v: { kind: 'chapter', n: 'Chapter 2', title: 'The Crisis', line: 'The bill arrives.' } },
      { name: 'previously', ref: 'D5', v: { kind: 'previously', eyebrow: 'Previously…', lines: ['Everyone uses AI.', 'We feel faster.', 'Nobody can measure it.'] } },
      { name: 'layoffs', ref: 'R3.2', note: 'Challenger, Sept 2026 report. The caveat comes next, at the same pace.', v: { kind: 'numbers', eyebrow: 'Chapter 2 · The Crisis', say: 'The cuts', rows: [{ big: '573,195', label: 'US job cuts announced through September' }, { big: '120,136', label: 'cite AI as the reason: the top reason this year', accent: true }], credit: 'Challenger, Gray & Christmas, September 2026 report' } },
      { name: 'layoffs-caveat', ref: 'R3.3', note: 'MANDATORY: announced plans and the reasons companies state. In September AI was fifth. Not a count of people let go by an AI.', v: { kind: 'statement', eyebrow: 'Read it carefully', say: ['Announced. Stated.', 'Not “fired by an AI”.'], sub: 'In September, AI was the fifth reason (3,961 cuts). Challenger counts announced plans and the reasons companies give.', credit: 'Challenger, Gray & Christmas, September 2026 report' } },
      { name: 'bill', ref: 'R4.1', note: 'PARAPHRASE, no quote marks: TechCrunch was not re-verifiable on 2026-11-24 (403). Mosseri: a strong engineer\'s AI spend could match their salary; no caps today; expects them. Meta also shut down an internal token leaderboard (R4.2, spoken only).', v: { kind: 'statement', eyebrow: 'Meta · July 2026', say: ['A strong engineer\'s AI bill', 'could match their salary'], sub: 'Adam Mosseri says Meta has no token caps today and expects to need them within a year or two.', credit: 'TechCrunch, 14 July 2026 (paraphrased)' } },
      { name: 'noise-models', ref: 'D10', note: 'NOISE block (provisional position, to confirm). Qualitative, no figures. A new model every few weeks.', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['A new model', 'every few weeks'], sub: 'Keep up. Or don\'t: next week there is another one.' } },
      { name: 'noise-benchmarks', ref: 'D10', note: 'Benchmarks vs reality. Link back to Chapter 1: what is felt and what is measured do not match. No benchmark figures.', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['The benchmarks say one thing.', 'Real life says another.'], sub: 'We saw it in Chapter 1.' } },
      { name: 'noise-tools', ref: 'R6.10', note: 'Many tools, same promise. Manfred: each person who uses AI juggles 3.1 tools on average (community sample).', v: { kind: 'numbers', eyebrow: 'Meanwhile…', say: 'Many tools. Same promise.', rows: [{ big: '3.1', label: 'AI tools used by each person who uses AI, on average' }], caveat: MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'noise-sharing', ref: 'D10', note: 'Speaker observation, no figure: everyone sharing what they build; "I just launched my…" with 0 users.', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['Everyone is sharing', 'what they just built'], sub: '“I just launched my…” And the counter says 0 users.' } },
      { name: 'noise-slop', ref: 'D10', note: 'Speaker observation, no figure.', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['AI slop'], sub: 'Fast to make. Nobody asked for it. Nobody reads it.' } },
      { name: 'noise-layers', ref: 'D10', note: 'Layers to learn inside AI. Position to confirm: here or in Chapter 3.', v: { kind: 'list', eyebrow: 'And under all that, layers to learn', say: 'Learn this too', items: ['Context — what the model sees', 'Harness — the tools and the loop around it', 'Memory — what it keeps between sessions', '…and whatever comes next month'] } },
      { name: 'junior-door', ref: 'R6.3', note: 'Spain, Manfred. "Junior" = junior/trainee/intern/graduate in the title.', v: { kind: 'numbers', eyebrow: 'Back to the team…', say: 'The way in', rows: [{ big: '4.4%', label: 'of tech offers look for a junior' }, { big: '1 in 5', label: 'professionals has under 2 years of experience', accent: true }], caveat: '“Junior”: junior, trainee, intern or graduate in the title.', credit: MANFRED } },
      { name: 'junior-ladder', ref: 'R6.4', note: 'MANDATORY: offers of Manfred clients, not the whole market, and nobody has shown the cause is AI. Say "under 1%".', v: { kind: 'numbers', eyebrow: 'Back to the team…', say: 'The first rung is harder to reach', rows: [{ big: '7.8%', label: 'of Manfred offers accepted under 2 years of experience, in 2022' }, { big: '<1%', label: 'in 2026', accent: true }], caveat: 'Manfred\'s own offers, not the whole market. Nobody has shown that the cause is AI.', credit: MANFRED } },
      { name: 'open-junior', ref: 'A1', note: 'OPEN on purpose. No figure we cannot verify (DigitalES, Stanford: research.md R5).', v: { kind: 'statement', eyebrow: 'Nobody knows yet', say: ['Is AI closing', 'the way in?'], sub: 'We don\'t have the answer. Most of us share the worry.', stamp: 'OPEN QUESTION' } },
      { name: 'cliffhanger', ref: 'D5', v: { kind: 'statement', say: ['To be continued…'], sub: 'And now: what do we do?' } },
    ],
  },
  {
    id: '05', title: 'CH 3 · NOW WHAT?', tone: 'teal',
    beats: [
      { name: 'chapter', ref: 'D6', v: { kind: 'chapter', n: 'Chapter 3', title: 'Now What?', line: 'Four levels. Start with the closest.' } },
      { name: 'previously', ref: 'D5', v: { kind: 'previously', eyebrow: 'Previously…', lines: ['The bill.', 'The cuts.', 'The noise.'] } },
      { name: 'yo', ref: 'D8', note: 'Level 1, me. DRAFT content, to refine: limits (hours, notifications, comparing yourself to demos) and learning on purpose.', v: { kind: 'list', eyebrow: 'Level 1 · Me', say: 'Set limits. Learn on purpose.', items: ['Hours, notifications, comparing yourself to demos', 'Learn what you need, not what is trending'], foot: 'Only 20% were trained by their company; 45% learned on their own. ' + MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'equipo', ref: 'R6.9', note: 'Level 2, team. DRAFT: agreements on how to use AI and on reviewing AI code; healthy metrics vs "tokens burned".', v: { kind: 'quote', eyebrow: 'Level 2 · Team', quote: '“The bottleneck is now in the review.”', by: 'Engineering lead at a software scaleup, in Manfred\'s interviews', sub: 'Agree how you use AI. Agree how you review it.', credit: MANFRED } },
      { name: 'carrera', ref: 'R6.7', note: 'Level 3, career. Say "6 of 13", never just 46%. Do not claim "which skills win value" without a source.', v: { kind: 'numbers', eyebrow: 'Level 3 · Career', say: 'They want judgement', rows: [{ big: '6 of 13', label: 'companies Manfred talked to redesigned their technical test because of AI' }], caveat: '13 companies: a small sample, not representative. The new test: direct, review, defend.', credit: MANFRED } },
      { name: 'arriba', ref: 'D8', note: 'Level 4, upwards. DRAFT: ask management what AI usage is measured for; real ROI, the bill and burnout.', v: { kind: 'statement', eyebrow: 'Level 4 · Upwards', say: ['Ask what the AI usage', 'is being measured for'], sub: 'Before the next “use it more”.', stamp: 'DRAFT' } },
      { name: 'gestione', ref: 'D10', note: 'TODO: the speaker\'s anecdote "how I handled it". Do not invent it.', v: { kind: 'todo', eyebrow: 'Level 1–2 · How I handled it', what: 'Speaker anecdote: what you actually did, what changed, what you would do differently.' } },
    ],
  },
  {
    id: '06', title: 'SEASON FINALE', tone: 'paper', numeral: false,
    beats: [
      { name: 'reconciliation', ref: 'D12', note: 'The Dev and the AI Agent reconcile. With conditions.', v: { kind: 'statement', eyebrow: 'Season finale', say: ['The Dev and the AI Agent', 'reconcile.'], sub: 'With conditions: people first.' } },
      { name: 'line', ref: 'D12', note: 'PROPOSAL. Spanish original: "(progr)Amar es cuidar a quien programa". Test it out loud.', v: { kind: 'statement', say: ['To (progr)Amar', 'is to care for', 'the people who program.'], stamp: 'PROPOSAL', accent: 2 } },
    ],
  },
  {
    id: '07', title: 'POST-CREDITS', tone: 'night', numeral: false,
    beats: [
      { name: 'season-2', ref: 'D12', v: { kind: 'statement', eyebrow: 'After the credits', say: ['Season 2', 'is written by you.'] } },
      { name: 'monday', ref: 'D12', note: 'PROPOSAL: one action per level, 15 minutes each, no tool to buy.', v: { kind: 'list', eyebrow: 'Three actions for Monday', say: 'Monday', items: ['Me — pick one thing to learn on purpose this month', 'Team — agree one rule for reviewing AI-written code', 'Up — ask “what do we measure AI usage for?”'], stamp: 'PROPOSAL' } },
      { name: 'slides', ref: 'D11', note: 'QR to the deck\'s own Pages URL.', v: { kind: 'qr', eyebrow: 'Take the slides', say: ['The slides,', 'in your pocket'], sub: 'juanjecilla.github.io/slideshow/amar_tiempos_revueltos' } },
    ],
  },
  {
    id: '08', title: 'TO BE CONTINUED…', tone: 'coral', numeral: false,
    beats: [
      { name: 'continuara', ref: 'D6', note: 'Q&A, 10 min. PROPOSAL for the question back to the room (D11).', v: { kind: 'statement', say: ['To be continued…'], sub: 'Questions. And one back to you: who changed something this week in how they use AI?', stamp: 'PROPOSAL' } },
    ],
  },
  {
    id: '09', title: 'BACKUP', tone: 'stone', numeral: false,
    beats: [
      { name: 'sources', ref: 'R1-R6', note: 'Backup: where each figure comes from. Not part of the 30 minutes.', v: { kind: 'list', eyebrow: 'Backup · sources (all checked 2026-11-24)', small: true, items: ['METR · early-2025 developer study and Feb 2026 follow-up', 'Stack Overflow Developer Survey 2025', 'Challenger, Gray & Christmas · September 2026 job-cuts report', 'TechCrunch · 14 July 2026 · Mosseri on token budgets (paraphrased)', 'Manfred × TheirStack · Tech Career Report 2026 · CC BY-NC 4.0 · getmanfred.com/tech-career-report'] } },
    ],
  },
];
