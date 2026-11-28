/**
 * English: the source table (the default locale). Every other locale is checked against this type (`satisfies Strings`).
 * Images that carry text of their own (the dictionary entries, the tweets, the chat thread, "El mejor") are real
 * artefacts and stay in their original language.
 */
export const strings = {
  title: 'Dev Wars: The Ego Awakens',
  subtitle: 'The Ego Awakens',

  prologue: {
    notes: {
      title: 'Calm start: the title with a loading bar while people sit down. The talk begins on the first click.',
      company: 'The stamp: "a company far, far away".',
      crawl: 'The crawl scrolls by itself (about 25 s). Click when you are ready to go on.',
    },
    crawl: [
      'It is a period of civil war in the repository. The ships of the rebel developers have won a victory against the Empire of obsolete frameworks. But EGO, a shadow, threatens to divide the teams.',
      'While the code spreads across the galaxy, engineers fight not for efficiency, but to be right. Amid this chaos, the need arises to find balance in the Force...',
    ],
    manifesto: [
      'Star Wars as the common thread',
      'I will not be telling absolute truths',
      'Real experiences',
      'It does not happen everywhere',
      'I am not perfect',
      'Humor above all',
    ],
    junior: { eyebrow: 'Programmer a.k.a', title: '“The Junior”' },
    senior: { eyebrow: 'Software Engineer a.k.a', title: '“The Senior”' },
  },

  ego: {
    conflict: ['The galactic ', 'conflict'] as [string, string],
    the: 'The Ego',
    notBad: ['Not bad per se', 'It helps us adapt, define ourselves and relate', 'It is bad when it is rigid and defensive'],
    sports: 'Ego in sports',
    good: 'Good',
    bad: 'Bad',
    clips: 'Clips play by themselves, silent.',
    techTitle: ['Ego in ', 'Tech'] as [string, string],
    tech: ['Putting our ideas above everything', 'Insecurities', 'Putting the I ahead of the WE', 'Conformism'],
  },

  opinions: {
    head: 'Opinionated opinions',
    title: ['Opinionated', 'opinions'] as [string, string],
    wallNote: 'The frameworks pile up by themselves (the original reveals them one click at a time).',
    clones: 'Attack of the Clones',
    listTitle: 'Opinions',
    list: ['Extreme fragmentation', 'Fighting over who is better', 'Business needs', 'Everything has its place'],
    yeahBut: 'Yeah, but…',
    yeahButLines: ['Does it make sense?', 'Does it add anything?', 'It is just that in tech you love debating this'],
    makesSense: 'Does it make sense?',
  },

  temple: {
    title: ['The temple of ', 'wisdom'] as [string, string],
    titleText: 'The temple of wisdom',
    pairs: [
      ['There is no absolute truth', 'It all depends on the context'],
      ['Team expertise', 'Do we know how to use it yet?'],
      ['Technological maturity', 'Did I see it in a Medium post yesterday?'],
      ['Delivery times', 'Perfection or a shorter time-to-market?'],
      ['Real needs', 'A plasma engine to go get bread?'],
    ] as [string, string][],
    attack: ['Attack of the', 'Over-engineering'] as [string, string],
    overTitle: 'Over-engineering',
    over: ['When we plan “too much”', '“Just in case in the future…”', 'Immature new technologies', 'Following standards without context'],
    useCase: 'Use case',
    quote: ['“The client needs a contact form for a 2-week marketing campaign. We expect ', '100 leads a day', '.”'] as [string, string, string],
    solution: 'Solution',
    solutionRows: [
      'Architecture: Monolith vs Microservices',
      'Communication: Direct to DB vs Event Driven',
      'Infrastructure: Managed hosting vs Kubernetes',
      'Persistence: SQL vs Redis + Postgres + Elastic',
      'Frontend: React components vs Micro frontends',
    ],
    whatIf: 'What if…?',
    mvp: ['An MVP does not have to be perfect', 'Proving the concept matters more', 'No tests needed', 'Do not reinvent the wheel', 'It does not have to scale'],
    interviews: 'Ego in interviews',
    interviewQuote: '“… you have to make a request to an API and show the result in a list…”',
    blank: 'Blank project - 20 minutes',
    stack: ['Clean Architecture', 'Repository with Data sources', 'Dependency injection with Dagger Hilt', 'Retrofit', 'Jetpack Compose'],
  },

  ivory: {
    lines: ['The ivory tower', 'architect'] as [string, string],
    head: ['The ivory tower ', 'architect'] as [string, string],
    headText: 'The ivory tower architect',
    list: ['Designs without considering the team', 'Technical excellence only', 'Demonstrable portfolio', 'Top-to-bottom decisions'],
    blackMirror: ['Validation', 'Black Mirror style'] as [string, string],
    drugs: 'New designer drugs',
    compare: 'And of course, comparing ourselves',
    exponential: 'Are you going exponential?',
    cool: 'Look how cool I am',
    trick: 'The trick',
    reality: 'The reality',
    gitWars: 'Git wars',
  },

  dark: {
    title: ['The Dark Side', 'of Leadership'] as [string, string],
    ladder: 'Career plan',
    ladderAlt: '(Career ladder)',
    tl: { eyebrow: 'Lead Software Engineer a.k.a', title: '“The TL”' },
    proveTitle: 'The need to prove yourself',
    prove: ['The career plan demands results', 'Not everyone can be promoted', 'Toxic culture', 'Metrics everywhere'],
    guru: { eyebrow: 'CTO a.k.a', title: '“The guru”' },
    wheelTitle: 'A plan with nobody at the wheel',
    wheel: ['The guru has an idea', 'Unilateral decisions', 'Unknown technology', 'High-risk changes'],
    toxic: { eyebrow: 'The company a.k.a', title: '“the toxic one”' },
    competitionTitle: 'Culture of competition',
    competition: ['Boosting productivity', 'Constant pressure', 'Work overload', 'Constant changes'],
    weekend: ['The ghost', 'weekend'] as [string, string],
    weekendText: 'The ghost weekend',
    resultTitle: 'The result',
    result: ['The developer was made invisible', 'Credit for the person who had no part in it', 'The company came out ahead', 'The culture was weakened'],
  },

  hope: {
    title: ['A new', 'hope'] as [string, string],
    team: { eyebrow: 'The team a.k.a', title: '“your buddies”' },
    realismTitle: 'Technical realism',
    realism: ['Pick your battles', 'Do not fight for the language you like most', 'Pick the one that best solves the problem', 'Understand the different points of view', 'Analyse the context and the needs', 'Always think of your team'],
    padawanTitle: 'The padawan path',
    padawan: ['Help those who need it', 'Stand up for your team', 'Boost their talent', 'Make them visible', 'Take them into account'],
    conclusionsTitle: 'Conclusions',
    conclusions: ['Generally, you will not inherit the company', 'The team is what matters most', 'Internal fights usually benefit the company', 'Keep an open mind and choose your battles well', 'Simply, be a good person'],
  },

  close: {
    way: '“This is the way.”',
    qrNote: 'The QR is the Linktree QR of the original closing slide.',
    speaker: 'The speaker a.k.a Me',
    name: 'Juanje Cilla',
    lines: ['Software Developer', 'GDG Aranjuez organizer', 'I write on Substack', 'I have a podcast'],
  },
};

export type Strings = typeof strings;
