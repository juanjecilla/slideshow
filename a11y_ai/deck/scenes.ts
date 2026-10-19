import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat. 45 minutes at DevFest Jerez 2026.
 * `ref` = fact id in docs/research.md (R…) or decision in docs/DECISIONS.md (D…), `note` = speaker cue
 * (the presenter view shows them; the audience never does, and the screen-reader live region never reads them:
 * it reads deck/sr.ts).
 * Scenes 06–10 and 14 are placeholders until docs/AUDIT.md decides what goes in (checkpoint ~3 Nov).
 */
export const SCENES: SceneDef[] = [
  {
    id: '01', title: 'OPEN',
    beats: [
      { name: 'standby', note: 'Calm screen while people sit down. The first click starts the talk.' },
      { name: 'title' },
      { name: 'vote', ref: 'D29', note: 'Ask the room: dark or light? Press T and switch live. Then say: "now it works for most of you" and move on.' },
    ],
  },
  {
    id: '02', title: 'ME',
    beats: [
      { name: 'who' },
      { name: 'links', note: 'Keep it under 30 seconds. The toolkit link comes at the end.' },
    ],
  },
  {
    id: '03', title: 'HOOK',
    beats: [
      { name: 'eyes', note: 'Pause. Let people actually close their eyes for the clip.' },
      { name: 'app', ref: 'D5' },
      { name: 'clip', ref: 'D13', note: 'TODO: record TalkBack on the unfixed app (pre-#233). Play with sound. No explanation until it ends.' },
      { name: 'users', note: 'This is what some people hear. Today we fix it, and we let AI do the boring parts.' },
    ],
  },
  {
    id: '04', title: 'WHY NOW',
    beats: [
      { name: 'spectrum', ref: 'D14', note: 'Permanent, temporary, situational (Microsoft Inclusive Design). Everyone is in this table at some point.' },
      { name: 'people', ref: 'R4.1', note: 'WHO fact sheet, last updated 7 Mar 2023.' },
      { name: 'law', ref: 'R4.2', note: 'Say what it covers (R4.3) and that Muviss is probably NOT covered (R4.6). Do not quote fines (R4.4).' },
      { name: 'cost', note: 'The pitch of the talk: the cost of doing it just dropped.' },
    ],
  },
  {
    id: '05', title: 'MAP',
    beats: [
      { name: 'editor', ref: 'D9', note: 'Claude Code orchestrates; Gemini in Android Studio is the official route. Not tied to a vendor.' },
      { name: 'device', ref: 'D10', note: 'Gemini Nano via ML Kit GenAI. Beta (R1.2).' },
      { name: 'ui', ref: 'D11' },
      { name: 'people', ref: 'D6', note: 'Four people guide the talk. One colour each, from here on.' },
      { name: 'toolkit', ref: 'D20', note: 'Preview only. QR at the end.' },
    ],
  },
  { id: '06', title: 'BLIND', beats: [{ name: 'todo', ref: 'D6' }] },
  { id: '07', title: 'LOW VISION', beats: [{ name: 'todo', ref: 'D6' }] },
  { id: '08', title: 'COGNITIVE', beats: [{ name: 'todo', ref: 'D6' }] },
  { id: '09', title: 'MOTOR', beats: [{ name: 'todo', ref: 'D6' }] },
  { id: '10', title: 'SHIFT LEFT', beats: [{ name: 'todo', ref: 'D6' }] },
  {
    id: '11', title: 'LIMITS',
    beats: [
      { name: 'hallucinate', note: 'Show a real wrong description from the audit if we have one (AUDIT.md).' },
      { name: 'lint', ref: 'R3.1', note: 'ATF checks cover labels, contrast, target size, traversal order. They complement TalkBack, they do not replace it.' },
      { name: 'beta', ref: 'R1.2', note: 'Image Description is English only (R1.3). Summarization: EN/JA/KO (R1.4).' },
      { name: 'humans' },
      { name: 'verdict' },
    ],
  },
  {
    id: '12', title: 'CLOSE',
    beats: [
      { name: 'god', ref: 'R5.1', note: 'Homer calls him lame. Built things for everyone else.' },
      { name: 'maidens', ref: 'R5.2', note: 'Iliad 18.417–421. Do not mention self-propelled legs (R5.4) or tripods until R5.3 is checked.' },
      { name: 'toolkit', ref: 'D20', note: 'QR. The repo goes public today (docs/RELEASE-CHECKLIST.md).' },
      { name: 'meta', ref: 'D16', note: 'Only claim what we verified (docs/AUDIT.md, deck audit). TODO: audit this deck with the same skills.' },
    ],
  },
  { id: '13', title: 'Q&A', beats: [{ name: 'questions' }] },
  { id: '14', title: 'BACKUP', beats: [{ name: 'todo', ref: 'D13', note: 'Hidden: reach it from the overview (O). Real captures and clips only.' }] },
];
