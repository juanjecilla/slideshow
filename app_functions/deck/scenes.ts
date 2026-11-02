import type { SceneDef } from 'beatdeck';
import { BACKUP_STEPS } from './backup-steps';

/**
 * The talk's beat map: scenes → beats. One click = one beat.
 * `ref` = where it comes from (research.md id / draft-script slide), `note` = speaker cue.
 * Time budget (50 min): open+me 3 · scenario 4 · context 3 · tools+MCP 4 · concept 5 · alternatives 2 ·
 * deep dive 6 · code 7 · safe 5 · beyond 3 · demo 10 · close 2 ≈ 54 → trim live from "beyond"/"alternatives".
 */
const BASE_SCENES: SceneDef[] = [
  {
    id: '01', title: 'OPEN',
    beats: [
      { name: 'standby', note: 'Calm screen while people sit down. The first click starts the talk.' },
      { name: 'title', ref: 'draft slide 1', note: 'Title, subtitle, speaker. Say hello in Galician/Spanish, switch to the talk.' },
    ],
  },
  {
    id: '02', title: 'ME',
    beats: [
      { name: 'who', note: 'Name, role, one line on why you care: you build apps, now agents are a new kind of caller.' },
      { name: 'links', note: 'Links stay up 5 seconds. Everything lives again on the last scene.' },
    ],
  },
  {
    id: '03', title: 'SCENARIO',
    beats: [
      { name: 'ask', auto: true, ref: 'draft slide 2', note: 'Animated scenario. A user speaks to an agent. Read the sentence out loud while it types.' },
      { name: 'plan', note: 'The agent does not open anything. It plans: three capabilities, three apps.' },
      { name: 'search', note: 'Call 1: the DevFest app answers searchTalks. Structured data, not pixels.' },
      { name: 'favourite', note: 'Call 2: addToFavorites. A write.' },
      { name: 'calendar', note: 'Call 3: Calendar finds a conflict with the user\'s dinner (the 18:30 talk). The agent did not guess.' },
      { name: 'confirm', note: 'Human in the loop: the agent asks the user. Plant the seed for the "safe functions" block.' },
      { name: 'notify', note: 'Message to the team sent after the user decides.' },
      { name: 'nothing opened', note: 'No screen was opened. The question for the room: how does YOUR app expose that?' },
    ],
  },
  {
    id: '04', title: 'CONTEXT',
    beats: [
      { name: 'slices', ref: 'draft 4', note: 'Slices: remote UI templates inside Search/Assistant. The app sent pixels-ish; the caller was a surface.' },
      { name: 'app actions', ref: 'draft 5', note: 'App Actions / BIIs: predefined intents that open your app. Foreground, UI-bound.' },
      { name: 'tool calling', note: 'Tool calling and MCP (Nov 2024): the caller is now a model that reads a schema.' },
      { name: 'appfunctions', ref: 'S4 alpha01 2025-05-07', note: 'AppFunctions: first alpha May 2025, first beta October 2026 (1.0.0-beta01). The app exposes functions, no UI.' },
      { name: 'headless', ref: 'draft 2-3', note: 'The shift: from screens and taps to headless capabilities. The app becomes a provider.' },
    ],
  },
  {
    id: '05', title: 'TOOLS',
    beats: [
      { name: 'what is a tool', ref: 'draft 9', note: 'A tool = name + description + typed parameters. The model reads it and decides when to call.' },
      { name: 'tool json', note: 'A real tool definition. The description is the interface for the model.' },
      { name: 'skill definition', note: 'Define "skill" once: a typed capability an agent can invoke. Not Anthropic Agent Skills, not Android Skills.' },
      { name: 'mcp', ref: 'draft 7-8', note: 'MCP: open protocol; client (agent) discovers tools on a server and calls them.' },
      { name: 'nxm', ref: 'draft 6, 10', note: 'Without a standard: N assistants × M apps. With one: N + M.' },
      { name: 'on device', ref: 'draft 11', note: 'Remote MCP servers: network, auth, and no access to local state. Phones need the other way round.' },
    ],
  },
  {
    id: '06', title: 'APPFUNCTIONS',
    beats: [
      { name: 'definition', ref: 'S1', note: '"Behave like on-device MCP servers". Equivalent of tools, executed locally.' },
      { name: 'roles', ref: 'draft 13-15', note: 'App = tools provider, OS index = registry, agent = client.' },
      { name: 'analogy: transport', ref: 'F1', note: 'Analogy, not protocol. Transport: JSON-RPC over stdio/HTTP vs Binder IPC.' },
      { name: 'analogy: registry', note: 'Registry: tools/list vs system index queried with search.' },
      { name: 'analogy: schema', note: 'Schema: JSON Schema vs generated XML metadata from your code.' },
      { name: 'analogy: callers', note: 'Callers: any client vs agents holding EXECUTE_APP_FUNCTIONS.' },
      { name: 'status', ref: 'F2, F3', note: 'Be honest: experimental, Jetpack 1.0.0-beta01 (first beta, 2026-10-21), the developer docs still show alpha10 snippets while the skill and samples use beta01, Gemini in private preview (docs, May 2026). Why we still care.' },
      { name: 'pillars', ref: 'draft 16-18', note: 'Three ideas: local execution, indexed ahead of time, the KDoc is the contract.' },
    ],
  },
  {
    id: '07', title: 'WHY NOT',
    beats: [
      { name: 'question', note: '"Why not just..." — the four things you would try first.' },
      { name: 'intent', ref: 'draft 19-21', note: 'Deep link / Intent: opens UI, untyped, not discoverable.' },
      { name: 'bound service', note: 'Bound Service + AIDL: headless but private contract, no discovery.' },
      { name: 'remote mcp', note: 'Remote MCP server: discoverable and typed, but network and no local state.' },
      { name: 'fgs', ref: 'H3', note: 'Foreground Service: wrong tool, needs type + permission + notification. No numbers.' },
      { name: 'appfunctions row', note: 'AppFunctions ticks all five: headless, discoverable, typed, system-permissioned, no network.' },
    ],
  },
  {
    id: '08', title: 'DEEP DIVE',
    beats: [
      { name: 'map', note: 'One diagram, five phases. We will walk it left to right.' },
      { name: 'build', ref: 'B2, B4', note: 'Build: KSP reads your annotations, generates the service and XML metadata into assets/.' },
      { name: 'install', ref: 'D1-D3', note: 'Install: the system indexes the metadata. Not at app start; may lag right after first launch.' },
      { name: 'discover', ref: 'D4, D5', note: 'Discover: an agent with EXECUTE_APP_FUNCTIONS searches metadata and checks enabled state.' },
      { name: 'invoke', ref: 'E2, E4', note: 'Invoke: executeAppFunction with a request; the system binds your service even if the app is closed.' },
      { name: 'execute', ref: 'E1', note: 'Execute: runs on the main thread by default. suspend + Dispatchers.IO.' },
      { name: 'result', note: 'Structured result or typed error goes back to the agent.' },
    ],
  },
  {
    id: '09', title: 'CODE',
    beats: [
      { name: 'gradle', ref: 'B1-B3', note: 'compileSdk: docs say 36+, the skill says 37. KSP, two dependencies, pinned to 1.0.0-beta01 (the skill and samples use it; the docs page still shows alpha10).' },
      { name: 'function', ref: 'B8', note: 'The function: @AppFunctionDeclaration(isDescribedByKDoc = true) (renamed from @AppFunction in alpha13) and a KDoc written for a model.' },
      { name: 'serializable', ref: 'B9', note: 'Return types: @AppFunctionSerializable, KDoc inline on each property.' },
      { name: 'entry point', ref: 'B4-B5', note: 'The service entry point: abstract class + annotation, KSP generates the concrete service. Hilt optional.' },
      { name: 'manifest', ref: 'B7', note: 'Manifest: BIND_APP_FUNCTION_SERVICE protects it; app_metadata property.' },
      { name: 'errors', ref: 'E5', note: 'Typed errors: InvalidArgument, ElementNotFound. The agent can recover.' },
      { name: 'architecture', ref: 'draft 40', note: 'It is an inbound adapter, like your ViewModel. Delegate to the use case, do not duplicate logic.' },
    ],
  },
  {
    id: '10', title: 'SAFE',
    beats: [
      { name: 'intro', note: 'CFP promise: safe, deterministic, without breaking the UX. Four rules.' },
      { name: 'security: who', ref: 'D4, D6, D7', note: 'Who can call: permission, enable/disable per function, user control property.' },
      { name: 'security: input', note: 'Arguments come from a model: treat them as untrusted input.' },
      { name: 'determinism: types', ref: 'B10', note: 'The model is probabilistic, your function is not. Narrow types, ids not names. Gotcha found on a real device: alpha10 could not take a LocalTime input at all; beta01 takes it only as an object {hour, minute, second, nanoOfSecond} (checked 2026-11-02; "14:30" is rejected). The demo keeps HH:mm strings: one field an agent can fill.' },
      { name: 'determinism: idempotent', note: 'Agents retry. Make writes idempotent and errors typed.' },
      { name: 'ux: confirm', note: 'Destructive means confirm. Callback to the scenario. The function itself refuses unless confirmed = true: safety in code, not only in the KDoc.' },
      { name: 'ux: state', note: 'Return enough state for the agent to tell the user what happened.' },
      { name: 'kdoc: bad', ref: 'draft 18, 35', note: 'A vague KDoc.' },
      { name: 'kdoc: good', note: 'The same function, written for a model.' },
    ],
  },
  {
    id: '11', title: 'BEYOND',
    beats: [
      { name: 'orchestration', ref: 'draft 29', note: 'Real value is chaining functions across apps. Callback to the opening.' },
      { name: 'app metadata', ref: 'X4', note: 'app_metadata.xml: free-text `instructions` (renamed from description in beta01) with operational patterns and constraints.' },
      { name: 'dynamic', ref: 'X1-X3', note: 'API 37: register functions at runtime, tied to an Activity. Experimental in Jetpack.' },
      { name: 'android skills', ref: 'T5', note: 'Bonus: the official Android skill writes AppFunctions with you. Not the same "skill".' },
    ],
  },
  {
    id: '12', title: 'DEMO',
    beats: [
      { name: 'scenario', note: 'DevFest agenda app with the real agenda (23 sessions, read 2026-11-02). Four functions. Runbook: demo project docs/DEMO.md; helper scripts/appfunctions-adb.sh. Branches 01-04 are checkpoints.' },
      { name: 'list', ref: 'T1', note: 'adb shell cmd app_function list-app-functions' },
      { name: 'execute read', ref: 'T2', note: 'Execute searchTalks from the terminal. Read the structured response.' },
      { name: 'execute write', note: 'Execute addToFavorites. Then show the app UI updated.' },
      { name: 'closed app', note: 'Force-stop the app and run again. Works the same. Then: add an unknown id to show the typed error, and clear without confirmed.' },
      { name: 'ask a slot', note: 'Let the audience pick a time, e.g. 18:15: the answer is the unconfirmed slot (a real gap in the agenda, read 2026-11-02). Also try a speaker: search with query "gema".' },
      { name: 'testing agent', ref: 'T4', note: 'Testing Agent (official, manual mode verified on the Pixel 2026-11-02): Debug tab, search DevFest, open searchTalks, fill track=ai and after=15:00, Run: typed result cards. Start it with scripts/start-testing-agent.sh (needs the phone mirrored on stage). The LLM mode needs a Gemini key: only if you have one.' },
      { name: 'recap', note: 'What we saw: no UI, no network, typed, closed app.' },
    ],
  },
  {
    id: '13', title: 'CLOSE',
    beats: [
      { name: 'checklist', ref: 'draft 46', note: 'Agentic-readiness checklist: five items.' },
      { name: 'resources', note: 'Real links. Docs, release notes, samples, skill.' },
      { name: 'questions', note: 'Questions. Links and QR.' },
    ],
  },
];

/** Scene 14 (backup) exists only when real demo captures exist: see backup-steps.ts. */
export const SCENES: SceneDef[] = BACKUP_STEPS.length
  ? [...BASE_SCENES, {
    id: '14', title: 'BACKUP',
    beats: BACKUP_STEPS.map((st, i) => (i === 0
      ? { name: st.name, note: 'BACKUP, not part of the talk. Reach it from the overview (O). Real adb outputs captured on a device. If the live demo fails, walk these in order. Stop after Questions; an extra click enters this scene.' }
      : { name: st.name })),
  }]
  : BASE_SCENES;
