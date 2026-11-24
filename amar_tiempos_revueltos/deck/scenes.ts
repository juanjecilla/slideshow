import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat. DRAFT: names and order only, no design yet.
 * `ref` = id in docs/research.md (R*) or docs/DECISIONS.md (D*); `note` = speaker cue (never announced to the audience).
 * Figures are only listed in a note when research.md has them ✅; anything else is a TODO.
 */
export const SCENES: SceneDef[] = [
  {
    id: '01', title: 'OPEN',
    beats: [
      { name: 'standby', note: 'Calm screen while people sit down. The first click starts the talk.' },
      { name: 'title', ref: 'D5' },
      { name: 'previously', ref: 'D5', note: '"Anteriormente en el mundo tech…" — a 20 s montage of the situation in one breath: AI stays, teams are tense, the bill arrives.' },
      { name: 'hands', ref: 'D11', note: 'Raise your hand: who feels they are falling behind with AI? Look at the room, count, move on. No external tool.' },
    ],
  },
  {
    id: '02', title: 'REPARTO',
    beats: [
      { name: 'cast', ref: 'D7', note: 'The cast poster appears empty, one card per click.' },
      { name: 'la-dev', ref: 'D7', note: 'Protagonist. The audience is her.' },
      { name: 'direccion', ref: 'D7', note: 'Burns tokens. Not a villain: it is under pressure too.' },
      { name: 'agente-ia', ref: 'D7', note: 'The mysterious suitor. Charming, fast, sometimes lies.' },
      { name: 'la-factura', ref: 'D7', note: 'The villain. Arrives at the end of every month.' },
      { name: 'el-equipo', ref: 'D7', note: 'The ones in the middle.' },
    ],
  },
  {
    id: '03', title: 'CAP 1 · LA LLEGADA',
    beats: [
      { name: 'chapter', ref: 'D6', note: 'Title card: "Capítulo 1 — La llegada".' },
      { name: 'promise', ref: 'R2.1', note: '84% use or plan to use AI (Stack Overflow 2025). Everyone arrives at once.' },
      { name: 'feeling', ref: 'R1.2', note: 'In METR\'s study developers expected a 24% speedup and, afterwards, believed they had gone 20% faster.' },
      { name: 'measure', ref: 'R1.1', note: 'What was measured: the tasks took 19% longer. SAY R1.3 right away: 16 people, early 2025, own repos. Not "AI makes you slow".' },
      { name: 'update', ref: 'R1.4', note: 'The follow-up in Feb 2026: intervals include zero, METR calls it an unreliable signal because people refused to work without AI. The honest line: we don\'t know how to measure it yet, and the feeling lies.' },
      { name: 'trust', ref: 'R2.2', note: '46% distrust accuracy vs 33% trust; 3% "highly trust". 66%: "almost right, but not quite".' },
      { name: 'everyone', ref: 'R6.1', note: 'Manfred × TheirStack 2026: 98% use AI daily, 86% say it makes them more productive, but only 20% were trained by their company. SAY the caveat: the Manfred community, 56% with 10+ years, not the whole market. Credit on screen (CC BY-NC).' },
      { name: 'amplifier', ref: 'R1.5', note: 'DORA 2025: AI amplifies what the team already is. Cite as a summary until the report is read (⚠️).' },
      { name: 'cliffhanger', ref: 'D5', note: '"Continuará…": and then the bill arrives.' },
    ],
  },
  {
    id: '04', title: 'CAP 2 · LA CRISIS',
    beats: [
      { name: 'chapter', ref: 'D6', note: 'Title card: "Capítulo 2 — La crisis". Night tone.' },
      { name: 'previously', ref: 'D5', note: '"Anteriormente…": the promise, the feeling, the gap.' },
      { name: 'layoffs', ref: 'R3.2', note: 'Challenger: 573,195 announced US cuts through Sept; AI cited in 120,136, the first reason of the year.' },
      { name: 'layoffs-caveat', ref: 'R3.3', note: 'MANDATORY, same pace: announced plans and the reasons companies state. In September AI was fifth. Not a count of people let go by an AI.' },
      { name: 'bill', ref: 'R4.1', note: 'Mosseri (Meta): "the burn rate of a strong engineer might be the same as their salary". Today Meta has no caps; he thinks they will come.' },
      { name: 'incinerator', ref: 'R4.1', note: '"It\'s not that hard to build a token incinerator." Meta shut down its internal token leaderboard (R4.2).' },
      { name: 'pressure', ref: 'D10', note: 'TODO: the speaker\'s anecdote about pressure to use AI. Anonymise. Do not write it here until the speaker tells it.' },
      { name: 'junior-door', ref: 'R6.3', note: 'Manfred: 4.4% of tech offers look for a junior while 1 in 5 professionals has under 2 years. Median junior offer 25,500 EUR vs Spain median salary 24,497 EUR (INE 2024). Credit on screen.' },
      { name: 'junior-ladder', ref: 'R6.4', note: 'Manfred offers open to under 2 years: 7.8% (2022) to under 1% (2026); those asking 5+ years: 24% to 60%. MANDATORY: offers of Manfred clients, not the whole market, and nobody has shown the cause is AI. Hand over to the open question A1.' },
      { name: 'open-junior', ref: 'A1', note: 'OPEN, on purpose: is AI closing the way in for juniors? We do not know, and everybody shares the worry. Do not give a figure we cannot verify (DigitalES, Stanford: research.md R5).' },
      { name: 'cliffhanger', ref: 'D5', note: '"Continuará…": and now, what do we do?' },
    ],
  },
  {
    id: '05', title: 'CAP 3 · ¿Y AHORA QUÉ?',
    beats: [
      { name: 'chapter', ref: 'D6', note: 'Title card: "Capítulo 3 — ¿Y ahora qué?".' },
      { name: 'previously', ref: 'D5', note: '"Anteriormente…": the bill, the layoffs, the pressure.' },
      { name: 'yo', ref: 'D8', note: 'Level 1, me: limits (hours, notifications, comparing yourself to demos) and learning on purpose, not by FOMO. Only 20% get training (R6.1): learn on your own, as 45% already do. Content TBD in the content audit.' },
      { name: 'equipo', ref: 'D8', note: 'Level 2, team: agreements on how to use AI and on reviewing AI code (R6.9: the bottleneck moved to review); healthy metrics vs "tokens burned". Content TBD.' },
      { name: 'carrera', ref: 'R6.7', note: 'Level 3, career: what is asked now is judgement, not unaided typing: direct, review, defend (R6.7: 6 of 13 companies redesigned their test; n=13). Do not claim "which skills win value" without a source.' },
      { name: 'arriba', ref: 'R6.8', note: 'Level 4, upwards: talk to management about real ROI, the bill and burnout. Two markets under one name (R6.8). Content TBD.' },
      { name: 'gestione', ref: 'D10', note: 'TODO: the speaker\'s anecdote "how I handled it".' },
    ],
  },
  {
    id: '06', title: 'FINAL DE TEMPORADA',
    beats: [
      { name: 'reconciliation', ref: 'D12', note: 'La Dev and El Agente IA reconcile. With conditions.' },
      { name: 'line', ref: 'D12', note: 'The closing line: "(progr)Amar es cuidar a quien programa". Draft, to be tested out loud.' },
    ],
  },
  {
    id: '07', title: 'POSTCRÉDITOS',
    beats: [
      { name: 'season-2', ref: 'D12', note: 'After the credits: season 2 is written by you.' },
      { name: 'monday', ref: 'D12', note: 'Three actions for Monday. TODO: choose them in the content audit.' },
    ],
  },
  {
    id: '08', title: 'CONTINUARÁ…',
    beats: [
      { name: 'continuara', ref: 'D6', note: '"Continuará…" = Q&A, 10 min. Ask one question back to the room (D11).' },
    ],
  },
  {
    id: '09', title: 'BACKUP',
    beats: [
      { name: 'sources', ref: 'R1-R6', note: 'Hidden backup: the list of sources from docs/research.md, in case someone asks "where does that figure come from?". TODO.' },
    ],
  },
];
