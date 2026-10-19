/**
 * What a screen reader announces at each beat: a short summary of what is on screen.
 * Keyed `<scene id>.<beat name>`. NEVER the beat `note` — those are the speaker's private cues.
 * A beat without an entry is announced as "<scene title>, <beat name>".
 */
export const SR: Record<string, string> = {
  '01.standby': 'Talk starting.',
  '01.title': 'a11y on Android? AI makes it easy. From AI-driven audits to on-device inference. Juanje Cilla.',
  '01.vote': 'Before we start: dark or light? Press T to switch the theme.',
  '02.who': 'Juanje Cilla, Software Engineer at Revolut.',
  '02.links': 'GitHub, LinkedIn, Substack and YouTube links.',
  '03.eyes': 'Close your eyes.',
  '03.app': 'This is Muviss, a real Android app.',
  '03.clip': 'A recording of TalkBack on the app before any accessibility work.',
  '03.users': 'This is how some users meet your app.',
  '04.spectrum': 'Disability can be permanent, temporary or situational: one arm, a broken arm, a baby in the other arm.',
  '04.people': '1.3 billion people, 16 percent of the world, live with a significant disability.',
  '04.law': 'The European Accessibility Act applies since 28 June 2025. In Spain: Ley 11/2023.',
  '04.cost': 'It was never hard to want accessibility. It was hard to afford. AI changes the cost.',
  '05.editor': 'AI in your editor: audit, fix and test.',
  '05.device': 'AI on the device: describe images, shorten text.',
  '05.ui': 'AI-informed UI: adapt to the person using it.',
  '05.people': 'Four people guide the talk: blind, low vision, cognitive, motor.',
  '05.toolkit': 'Everything you will see ships as an open toolkit: hephestus.',
  '11.hallucinate': 'AI can describe what is not there.',
  '11.lint': 'Passing lint is not the same as being usable.',
  '11.beta': 'On-device GenAI APIs are beta, and image descriptions are English only.',
  '11.humans': 'Nothing replaces testing with real users.',
  '11.verdict': 'AI speeds you up. It does not sign off.',
  '12.god': 'Hephaestus, the Greek god of the forge, was lame.',
  '12.maidens': 'He built golden maidens who helped him walk. He built his own assistive technology.',
  '12.toolkit': 'Take the toolkit: github.com/juanjecilla/hephestus.',
  '12.meta': 'This deck is accessible. Try it with your screen reader.',
  '13.questions': 'Questions?',
};
