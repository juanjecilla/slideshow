import type { SceneDef } from 'beatdeck';

/**
 * The talk's beat map: scenes → beats. One click = one beat. 45 minutes at DevFest Jerez 2026.
 * `ref` = fact id in docs/research.md (R…) or decision in docs/DECISIONS.md (D…), `note` = speaker cue
 * (the presenter view shows them; the audience never does, and the screen-reader live region never reads them:
 * it reads deck/sr.ts).
 * Scenes 06–10 and 14 come from docs/AUDIT.md. Open gaps (Pixel captures): docs/RELEASE-CHECKLIST.md.
 */
export const SCENES: SceneDef[] = [
  {
    id: '01', title: 'OPEN',
    beats: [
      { name: 'standby', auto: true, note: 'Loading animation while people sit down (deck/standby). Counts down to config.startsAt; loops if unset; ?start=HH:MM to rehearse. The first click starts the talk.' },
      { name: 'title' },
      { name: 'vote', ref: 'D29', note: 'Ask the room: dark or light? Press T and switch live. Then say: "now it works for most of you" and move on.' },
      { name: 'hands: TalkBack', ref: 'D5', note: 'Show of hands: who has ever turned on TalkBack on their own app? Quick, acknowledge the split.' },
      { name: 'hands: fix', ref: 'D5', note: 'Second: who has ever shipped an accessibility fix? Do not comment yet.' },
      { name: 'hands: settings', ref: 'D5', note: 'Third: who changed the font size or dark mode on their phone? Pause for hands. Do not reveal the twist yet.' },
      { name: 'twist', ref: 'D5', note: 'Click to reveal. Link it to the dark/light vote: you just chose an accessibility setting. Accessibility is not a niche, you are all users of it.' },
      { name: 'quote', ref: 'R7.1', note: 'The twist said it is easier for you. For some people it is what makes it possible (Radabaugh, IBM, 1988). "People" in brackets: the NCD 1993 text says "Americans". Bridge into 02 ME.' },
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
      { name: 'clip', ref: 'D13', note: 'LIVE, no recording (R-21): on the Pixel, open the .a11ybroken build, TalkBack on, sound up, eyes closed. Swipe through Settings: the two switches are read as "unlabeled". No explanation until it ends. Fallback if TalkBack misbehaves: the speak.py output on 6.2.' },
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
  {
    id: '06', title: 'BLIND',
    beats: [
      { name: 'intro', ref: 'D6', note: 'TalkBack reads the semantics tree, only that. Everything in this block comes from the audit on Muviss (docs/AUDIT.md).' },
      { name: 'audit', ref: 'B1', note: 'tree_audit.py on the pre-#233 build: 4 unlabeled controls (search field, 2 settings switches, the watched checkbox). The cheap ones.' },
      { name: 'listen', ref: 'B1', note: 'speak.py: what TalkBack says. «unlabeled» before, one merged label after (#238/#245). It is an approximation of TalkBack, say so.' },
      { name: 'twice', ref: 'B2', note: 'No tool flagged this. Reading speak.py output as a user did. Fix: caption is visual only, the poster is the label (first attempt moved the label to the caption and left cut-off cards unlabeled: found on device).' },
      { name: 'checkbox', ref: 'B3', note: 'A checkbox beside a clickable row: two controls for one thing, one with no label. Still on main when we audited.' },
      { name: 'checkbox: heard', ref: 'B3', note: 'What it sounds like: before, "button" and a separate unnamed checkbox; after, one "checkbox" with its name.' },
      { name: 'stack', ref: 'B4', note: 'The deck keeps the cards behind the top one in the tree. clearAndSetSemantics {} on the backing cards.' },
      { name: 'describe', ref: 'R1.3', note: 'ML Kit GenAI Image Description, on the phone, beta. Real output from the Pixel 9 Pro (2026-11-20, Supernatural backdrop): "A dark car drives down a dusty road towards a sunset with strange, fiery plumes rising in the distance." The car and the road are there; the "fiery plumes" are the model reading the sky. First live example of 6.9: it describes what is not quite there.' },
      { name: 'limits', ref: 'R1.2', note: 'English only (R1.3), beta (R1.2). A model can describe what is not there: a person reads it before it ships.' },
    ],
  },
  {
    id: '07', title: 'LOW VISION',
    beats: [
      { name: 'intro', ref: 'D6' },
      { name: 'screenshot', ref: 'L1', note: 'device-toggles font-scale 2.0, a screenshot. tree_audit.py reports 0 findings: the labels break mid-word and no script sees it. A person or a vision model does.' },
      { name: 'fix', ref: 'L1', note: 'Cap the nav labels at 1.3×. Trade-off: those five labels stop following the user fully; the rest of the app does. Say it.' },
      { name: 'grid', ref: 'L1', note: 'Same signal, grids: minimum column width scales with font scale (posterGridCells). 100% vs 200%.' },
      { name: 'contrast', ref: 'L2', note: 'contrast-check literals: amber text on a translucent black over a poster. The background is the image: a script cannot judge it. Do not invent a ratio.' },
    ],
  },
  {
    id: '08', title: 'COGNITIVE',
    beats: [
      { name: 'intro', ref: 'D6' },
      { name: 'wall', ref: 'C1', note: 'One 68-word paragraph (counted from the capture).' },
      { name: 'shorten', ref: 'D11', note: 'Rewriting SHORTEN, on the phone, real capture from the Pixel 9 Pro (2026-11-20): 78 words → 36, labeled "shortened on your device" in the app. The capture is Spanish (a different title than the 68-word synopsis on the previous beat). The button is "Short & simple": ML Kit has no easy-read style (R1.5), say so if asked.' },
      { name: 'languages', ref: 'R1.4', note: 'Image description: English. Summarization: en/ja/ko. Rewriting: 7 languages incl. Spanish. All beta.' },
    ],
  },
  {
    id: '09', title: 'MOTOR',
    beats: [
      { name: 'intro', ref: 'D6' },
      { name: 'scan', ref: 'M1', note: 'scan_compose.py flags IconButton(Modifier.size(24.dp)).' },
      { name: 'test', ref: 'M1', note: 'assertTouchHeightIsEqualTo(48.dp): the agent writes the test before touching the code.' },
      { name: 'passes', ref: 'M1', note: 'It passes on the ORIGINAL code: Compose enlarges touch bounds to 48 dp. The scan was wrong. We nearly shipped a non-fix.' },
      { name: 'wrong', ref: 'M2', note: 'The agent also reported "Watching has no button" and "no custom actions": the code says every verdict has a button. Caught by reading the KDoc. Lesson: verify, then fix.' },
    ],
  },
  {
    id: '10', title: 'SHIFT LEFT',
    beats: [
      { name: 'intro', ref: 'D6' },
      { name: 'lint', ref: 'S1', note: 'Muviss runs Lint with a11y as errors in CI: good. No ATF anywhere.' },
      { name: 'atf', ref: 'R3.1', note: 'ui-test-junit4-accessibility, Compose 1.8+, Android only. Complements TalkBack, never replaces it.' },
      { name: 'rules', ref: 'D20', note: 'snippets/AGENTS-a11y.md in hephaestus: the rules the next agent reads.' },
      { name: 'review', ref: 'D20', note: 'a11y-pr-review: added lines only. Stretch skill: say "scan_diff.sh works, the review checklist is the model\'s job".' },
    ],
  },
  {
    id: '11', title: 'LIMITS',
    beats: [
      { name: 'hallucinate', note: 'Real examples from our own audit (docs/AUDIT.md): the static scan raised 4 errors and none was a bug; the agent reported "Watching has no button" and was wrong; my first poster fix left cut-off cards unlabeled. If the Pixel gives a wrong image description, show it here.' },
      { name: 'lint', ref: 'R3.1', note: 'Also: the first "after" audit run reported 0 errors on a screen that was an ANR dialog. Check what you audited. ATF checks cover labels, contrast, target size, traversal order: they complement TalkBack, they do not replace it.' },
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
      { name: 'quote', ref: 'R7.2', note: 'Hephaestus built for himself; designing for access widens who you reach. Label on screen: attributed, source not found. Say it: "I checked this quote like we checked the audit: no source. Still true."' },
      { name: 'toolkit', ref: 'D20', note: 'QR. The repo goes public today (docs/RELEASE-CHECKLIST.md).' },
      { name: 'resources', ref: 'D5', note: 'Three links, one slide: the toolkit, the app with the fixes (branches talk/a11y-ai-jerez26 and demo/a11y-broken), and these slides. Links checked 2026-11-10; the slides URL is live only after the merge.' },
      { name: 'meta', ref: 'D16', note: 'Verified by tools/check-a11y.mjs: live region, hidden stage, buttons, keyboard, theme, reduced motion. NOT verified: a real screen reader (VoiceOver/NVDA). That is why the slide says tries.' },
    ],
  },
  { id: '13', title: 'Q&A', beats: [{ name: 'questions' }] },
  {
    id: '14', title: 'BACKUP',
    beats: [
      { name: 'captures', ref: 'D13', note: 'Hidden: reach it from the overview (O). Real device captures: 200% nav before/after, grid.' },
      { name: 'tools', ref: 'D13', note: 'The tool outputs as they ran on the audit day.' },
    ],
  },
];
