/**
 * All the copy of the talk, in one place. English is the Base deck (D2); the Spanish edition (bcn26) is made from
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
  | { kind: 'about'; eyebrow: string; name: string; role: string; items: string[] }
  | { kind: 'reference'; eyebrow: string; say: string[]; image: boolean; alt: string; credit: string }
  | { kind: 'statement'; eyebrow?: string; say: string[]; sub?: string; credit?: string; stamp?: string; accent?: number }
  | { kind: 'numbers'; eyebrow: string; say: string; rows: Row[]; caveat?: string; credit?: string }
  | { kind: 'quote'; eyebrow?: string; quote: string; by: string; sub?: string; credit?: string }
  | { kind: 'chapter'; n: string; title: string; line?: string }
  | { kind: 'previously'; eyebrow: string; lines: string[] }
  | { kind: 'cast'; lit: number; desc?: string }
  | { kind: 'list'; eyebrow: string; say?: string; items: string[]; foot?: string; credit?: string; stamp?: string; small?: boolean }
  | { kind: 'todo'; eyebrow: string; what: string }
  | { kind: 'finale'; step: 1 | 2; presents: string; card: [string, string]; say: string[]; punch: string }
  | { kind: 'questions'; title: string; big: string }
  | { kind: 'sources'; eyebrow: string; items: Source[] }
  | { kind: 'hype'; mode: 'cycle' | 'chain'; step: number; eyebrow: string; say: string; caveat: string; credit: string }
  | { kind: 'stock'; data: 'ant' | 'spcx'; eyebrow: string; say: string; caveat: string; credit: string }
  | { kind: 'wheel'; eyebrow: string; say: string[]; stops: string[]; at: number; here: string; latest: string; credit: string }
  | { kind: 'qr'; eyebrow: string; say: string[]; sub: string };

/** `url` without the scheme (the offline check rejects it); the slide links to https. */
export interface Source { what: string; url: string; checked: string }

export interface BeatContent { name: string; ref?: string; note?: string; auto?: boolean; v: View }
export interface SceneContent { id: string; title: string; tone: string; beats: BeatContent[] }

export const CAST = ['The Dev', 'Management', 'The AI Agent', 'The Bill', 'The Team'] as const;

export const CAST_TITLE = 'The cast';
export const MANFRED = 'Manfred × TheirStack, Tech Career Report 2026 · CC BY-NC 4.0';
export const MANFRED_SAMPLE = 'Manfred community: 56% have 10+ years of experience. Not the whole market.';
const METR = 'METR, 2025 study · 16 experienced developers · their own repos';
const SO = 'Stack Overflow Developer Survey 2025';

/** Words drawn on the hype curves (R7). */
export const HYPE = {
  x: 'TIME →',
  y: 'EXPECTATIONS →',
  phases: [['Technology', 'trigger'], ['Peak of inflated', 'expectations'], ['Trough of', 'disillusionment'], ['Slope of', 'enlightenment'], ['Plateau of', 'productivity']],
  marks: ['New model', 'Another one', 'And another'],
  ghost: 'The fall that should come',
} as const;

/** Prices against the IPO price (R8). RE-CHECK before the talk: they move every day. */
export const STOCKS = {
  ant: {
    ipo: 83, ipoLabel: 'IPO PRICE $83',
    points: [
      { when: 'Open 19 Nov', usd: 111.5 }, { when: '19 Nov', usd: 97.17 }, { when: '20 Nov', usd: 88.91 },
      { when: '23 Nov', usd: 87.64 }, { when: '24 Nov', usd: 81.91 },
    ],
  },
  spcx: {
    ipo: 135, ipoLabel: 'IPO PRICE $135',
    points: [
      { when: '12 Jun', usd: 160.95 }, { when: '16 Jun', usd: 211.39 }, { when: '5 Aug', usd: 108.27 },
      { when: '30 Sep', usd: 150.86 }, { when: '13 Nov', usd: 139.11 }, { when: '25 Nov, intraday', usd: 127.06 },
    ],
  },
} as const;

const GARTNER = 'Hype Cycle: Gartner (Jackie Fenn, 1995) · own schematic drawing';
const CASTANO = 'Idea: Jorge Castaño, Codemotion Madrid 2026 · youtu.be/TbEemCIGPnI';

export const CONTENT: SceneContent[] = [
  {
    id: '01', title: 'OPEN', tone: 'paper',
    beats: [
      { name: 'standby', auto: true, note: 'Loop while people sit down (deck/standby). The first click starts the talk.', v: { kind: 'standby', eyebrow: 'DevFest Barcelona · 28 Nov 2026', line: 'Juanje Cilla' } },
      { name: 'title', ref: 'D5', v: { kind: 'title', eyebrow: 'DevFest Barcelona · 28 Nov 2026', title: ['(progr)Amar', 'en tiempos revueltos'], sub: 'Writing code, and looking after people, in turbulent times', author: 'Juanje Cilla' } },
      { name: 'who', ref: 'D22', note: 'Who I am, only what is needed.', v: { kind: 'about', eyebrow: 'Before we start', name: 'Juanje Cilla', role: 'Senior Software Engineer · 10+ years on Android', items: ['GDG Aranjuez · Organiser', 'Coding Pit', 'Welcome to La Secta'] } },
      { name: 'reference-ask', ref: 'D23', note: 'Ice-breaker: ask first, no picture yet.', v: { kind: 'reference', eyebrow: 'First things first', say: ['Who got', 'the reference?'], image: false, alt: 'Promotional poster of the Spanish TV series “Amar en tiempos revueltos”: the cast, in mid-twentieth-century clothes, around a table with a red checked tablecloth.', credit: '“Amar en tiempos revueltos” (TVE) · promotional image' } },
      { name: 'reference', ref: 'D23', note: 'The poster comes in. Wait for the room, then go to the show of hands.', v: { kind: 'reference', eyebrow: 'First things first', say: ['Who got', 'the reference?'], image: true, alt: 'Promotional poster of the Spanish TV series “Amar en tiempos revueltos”: the cast, in mid-twentieth-century clothes, around a table with a red checked tablecloth.', credit: '“Amar en tiempos revueltos” (TVE) · promotional image' } },
      { name: 'hands', ref: 'D11', note: 'Raise your hand. Look at the room, count, move on. No external tool.', v: { kind: 'statement', eyebrow: 'Raise your hand', say: ['Who feels they are', 'falling behind with AI?'] } },
      { name: 'previously', ref: 'D5', note: '20 s montage of the situation in one breath: AI stays, teams are tense, the bill arrives.', v: { kind: 'previously', eyebrow: 'Previously, in the tech world…', lines: ['AI is here to stay.', 'Teams are tense.', 'The bill is coming.'] } },
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
      { name: 'hype-peak', ref: 'R7.1', note: "The hype cycle: any technology, not only AI. Something appears and expectations shoot up.", v: { kind: 'hype', mode: 'cycle', step: 1, eyebrow: "Chapter 1 \u00b7 Every technology", say: "First, everything is possible", caveat: "A way of reading hype, not a measurement. Its predictive value is disputed.", credit: GARTNER } },
      { name: 'hype-trough', ref: 'R7.1', note: "Then reality. The disappointment.", v: { kind: 'hype', mode: 'cycle', step: 2, eyebrow: "Chapter 1 \u00b7 Every technology", say: "Then comes the disappointment", caveat: "A way of reading hype, not a measurement. Its predictive value is disputed.", credit: GARTNER } },
      { name: 'hype-plateau', ref: 'R7.1', note: "And what survives becomes normal and useful.", v: { kind: 'hype', mode: 'cycle', step: 3, eyebrow: "Chapter 1 \u00b7 Every technology", say: "And then it becomes useful", caveat: "A way of reading hype, not a measurement. Its predictive value is disputed.", credit: GARTNER } },
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
      { name: 'noise-models', ref: 'D10', note: 'NOISE block (provisional position, to confirm). Qualitative, no figures. A new model every few weeks. OWN LINE (block 3.4, post 39): «La primera siempre es gratis, pero una vez estás enganchado, tienes que hipotecar hasta la casa.»', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['A new model', 'every few weeks'], sub: 'Keep up. Or don\'t: next week there is another one.' } },
      { name: 'chain-peak', ref: 'R7.3', note: "Remember the curve from Chapter 1? Here the fall should start. Video: youtu.be/TbEemCIGPnI", v: { kind: 'hype', mode: 'chain', step: 1, eyebrow: "Meanwhile…", say: "At the peak, it should fall", caveat: "Schematic. Casta\u00f1o's argument, not part of Gartner's model.", credit: CASTANO } },
      { name: 'chain-again', ref: 'R7.3', note: "Instead of falling, a new model comes out and the hype climbs again.", v: { kind: 'hype', mode: 'chain', step: 2, eyebrow: "Meanwhile…", say: "But a new model comes out", caveat: "Schematic. Casta\u00f1o's argument, not part of Gartner's model.", credit: CASTANO } },
      { name: 'chain-more', ref: 'R7.3', note: "One curve on top of another. OWN LINE (post 39): «Esto no es real ni sostenible.»", v: { kind: 'hype', mode: 'chain', step: 3, eyebrow: "Meanwhile…", say: "One curve on top of another", caveat: "Schematic. Casta\u00f1o's argument, not part of Gartner's model.", credit: CASTANO } },
      { name: 'ipo', ref: 'R8.1', note: "Anthropic's IPO: priced at 83, opened at 111.50, below the IPO price on day four. Do not predict anything. RE-CHECK the quote on Friday and on the day.", v: { kind: 'stock', data: 'ant', eyebrow: 'And on the stock market…', say: 'Anthropic’s first days on Nasdaq', caveat: 'Four trading days. Too soon to call it anything.', credit: 'CNBC, 19 Nov 2026 · BigGo Finance, 24 Nov 2026 · checked 2026-11-25' } },
      { name: 'ipo-spacex', ref: 'R8.3', note: 'Not just one company. SpaceX listed on 12 June: up, down below the IPO price, up again, below again. Selected prices. RE-CHECK on Friday.', v: { kind: 'stock', data: 'spcx', eyebrow: 'And on the stock market…', say: 'It is not just one company: SpaceX', caveat: 'Selected prices, not the full series. Not advice, not a forecast.', credit: 'Quantral · Motley Fool, 25 Nov 2026 · checked 2026-11-25' } },
      { name: 'noise-benchmarks', ref: 'D10', note: 'Benchmarks vs reality. The crown goes round: whoever announced last is the best. Today: Gemini 4 Neon. RE-CHECK on the day, it may have moved. Link back to Chapter 1.', v: { kind: 'wheel', eyebrow: 'Meanwhile…', say: ['The benchmarks', 'say one thing.', 'Real life', 'says another.'], stops: ['Claude', 'Gemini', 'ChatGPT', 'Grok'], at: 1, here: 'You are here', latest: 'Gemini 4 Neon · 18 Nov', credit: 'Order is a joke, not a ranking · Gemini 4 Neon date: Wikipedia, checked 2026-11-25' } },
      { name: 'noise-tools', ref: 'R6.10', note: 'Many tools, same promise. Manfred: each person who uses AI juggles 3.1 tools on average (community sample). OWN LINE (block 3.4): cada semana un modelo, un IDE, un CLI nuevo.', v: { kind: 'numbers', eyebrow: 'Meanwhile…', say: 'Many tools. Same promise.', rows: [{ big: '3.1', label: 'AI tools used by each person who uses AI, on average' }], caveat: MANFRED_SAMPLE, credit: MANFRED } },
      { name: 'noise-sharing', ref: 'D10', note: 'Speaker observation, no figure: everyone sharing what they build; "I just launched my…" with 0 users. OWN LINE (block 4.2, post 16): «Tengo más de 10 años de experiencia en empezar proyectos pero tengo muy pocos en terminarlos.»', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['Everyone is sharing', 'what they just built'], sub: '“I just launched my…” And the counter says 0 users.' } },
      { name: 'noise-slop', ref: 'D10', note: 'Speaker observation, no figure.', v: { kind: 'statement', eyebrow: 'Meanwhile…', say: ['AI slop'], sub: 'Fast to make. Nobody asked for it. Nobody reads it.' } },
      { name: 'noise-layers', ref: 'D10', note: 'Layers to learn inside AI. Stays here (D17). OWN LINE (block 3.3, post 25): «Levantas una piedra y una IA te pregunta que si genera nuevas piedritas por ti.»', v: { kind: 'list', eyebrow: 'And under all that, layers to learn', say: 'Learn this too', items: ['Context — what the model sees', 'Harness — the tools and the loop around it', 'Memory — what it keeps between sessions', '…and whatever comes next month'] } },
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
      { name: 'arriba', ref: 'D8', note: 'Level 4, upwards. Ask management what AI usage is measured for; real ROI, the bill and burnout.', v: { kind: 'statement', eyebrow: 'Level 4 · Upwards', say: ['Ask what the AI usage', 'is being measured for'], sub: 'Before the next “use it more”.' } },
      { name: 'fofo', ref: 'D18', note: 'How I handled it, 1 (block 3.4B, post 42). My 20 USD subscription: tokens left over and the anxiety of not using them. «Es un miedo del primer mundo, capitalista, superficial y que nos tendría que dar que pensar.» «Si el tren pasa, el avance tecnológico se empeña en demostrarnos que siempre hay otro tren.»', v: { kind: 'statement', eyebrow: 'How I handled it', say: ['From FOMO', 'to FOFO'], sub: 'Fear Of Fizzling Out: tokens left over, and the anxiety of not using them. There is always another train.' } },
      { name: 'postmortem', ref: 'D18', note: 'How I handled it, 2 (block 4.3, post 38). «Cuantas más cosas tengo que hacer y más cosas tengo en la cabeza, más tiempo invierto en cosas que me son fáciles.» «Tenemos que plantarnos y elegir las batallas en las que queremos luchar.»', v: { kind: 'statement', eyebrow: 'How I handled it', say: ['A postmortem', 'of myself'], sub: 'The more on my mind, the more time I spend on what is easy. So: small actions, and choose your battles.' } },
    ],
  },
  {
    id: '06', title: 'SEASON FINALE', tone: 'paper',
    beats: [
      { name: 'finale-card', ref: 'D12', note: 'The announcement. Voice of a TV trailer, then pause.', v: { kind: 'finale', step: 1, presents: '(progr)Amar en tiempos revueltos presents', card: ['Season', 'finale'], say: ['The Dev and the AI Agent', 'reconcile.'], punch: 'Tools change. People stay.' } },
      { name: 'reconciliation', ref: 'D12', note: 'The Dev and the AI Agent reconcile. With conditions: people first. OWN LINE (post 42): «Las herramientas cambian, pero las personas siguen.»', v: { kind: 'finale', step: 2, presents: '(progr)Amar en tiempos revueltos presents', card: ['Season', 'finale'], say: ['The Dev and the AI Agent', 'reconcile.'], punch: 'Tools change. People stay.' } },
      { name: 'line', ref: 'D12', note: 'Spanish original: "(progr)Amar es cuidar a quien programa". Test it out loud.', v: { kind: 'statement', say: ['To (progr)Amar', 'is to care for', 'the people who program.'], accent: 2 } },
    ],
  },
  {
    id: '07', title: 'POST-CREDITS', tone: 'night',
    beats: [
      { name: 'season-2', ref: 'D12', v: { kind: 'statement', eyebrow: 'After the credits', say: ['Season 2', 'is written by you.'] } },
      { name: 'monday', ref: 'D12', note: 'One action per level, 15 minutes each, no tool to buy. For Me, ask: where do you hide when there is too much?', v: { kind: 'list', eyebrow: 'Three actions for Monday', say: 'Monday', items: ['Me — a 15-minute postmortem of your week: pick one battle', 'Team — agree one rule for reviewing AI-written code', 'Up — ask “what do we measure AI usage for?”'] } },
      { name: 'slides', ref: 'D11', note: 'QR to the deck\'s own Pages URL.', v: { kind: 'qr', eyebrow: 'Take the slides', say: ['The slides,', 'in your pocket'], sub: 'juanjecilla.github.io/slideshow/programar_tiempos_revueltos' } },
    ],
  },
  {
    id: '08', title: 'TO BE CONTINUED…', tone: 'coral',
    beats: [
      { name: 'continuara', ref: 'D6', note: 'Q&A, 10 min.', v: { kind: 'questions', title: 'To be continued…', big: 'Questions' } },
    ],
  },
  {
    id: '09', title: 'BACKUP', tone: 'stone',
    beats: [
      { name: 'sources', ref: 'R1-R8', note: 'Backup: where each figure comes from. Not part of the 30 minutes. Links open on click.', v: { kind: 'sources', eyebrow: 'Backup · sources', items: [{ what: 'METR · early-2025 developer study', url: 'metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/', checked: 'checked 2026-11-24' }, { what: 'METR · Feb 2026 follow-up', url: 'metr.org/blog/2026-02-24-uplift-update/', checked: 'checked 2026-11-24' }, { what: 'Stack Overflow Developer Survey 2025', url: 'survey.stackoverflow.co/2025/ai', checked: 'checked 2026-11-24' }, { what: 'Challenger, Gray & Christmas · September 2026', url: 'www.challengergray.com/blog/job-cuts-fall-in-september-hiring-plans-up-3-over-2025-on-weak-early-seasonal-hiring/', checked: 'checked 2026-11-24' }, { what: 'TechCrunch · Mosseri on token budgets (paraphrased)', url: 'techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/', checked: 'not re-verifiable 2026-11-24' }, { what: 'Manfred × TheirStack · Career Report 2026 · CC BY-NC 4.0', url: 'www.getmanfred.com/tech-career-report', checked: 'checked 2026-11-24' }, { what: 'Gartner · Hype Cycle', url: 'www.gartner.com/en/research/methodologies/gartner-hype-cycle', checked: 'checked 2026-11-24' }, { what: 'Jorge Castaño · Que no quiero más IA, señora, suélteme el brazo', url: 'youtu.be/TbEemCIGPnI', checked: 'checked 2026-11-25' }, { what: 'CNBC · Anthropic’s Nasdaq debut', url: 'www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html', checked: 'checked 2026-11-25' }, { what: 'BigGo Finance · Anthropic below its IPO price', url: 'finance.biggo.com/news/fae0e954-2c46-4b55-a40d-2c4e31345abd', checked: 'checked 2026-11-25' }, { what: 'Quantral · SpaceX IPO and prices', url: 'quantral.com/blog/spacex-ipo', checked: 'checked 2026-11-25' }, { what: 'Motley Fool · SpaceX, 25 Nov 2026', url: 'www.fool.com/investing/2026/11/25/why-spacex-stock-keeps-going-down/', checked: 'checked 2026-11-25' }, { what: 'Wikipedia · Gemini model versions', url: 'en.wikipedia.org/wiki/Gemini_(language_model)', checked: 'checked 2026-11-25' }] } },
    ],
  },
];
