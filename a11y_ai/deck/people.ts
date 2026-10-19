/** The four people the talk follows. One colour each (themes/a11y.css), used the same way everywhere. */
export const PEOPLE = [
  { key: 'blind', color: 'var(--blind)', name: 'Blind', tool: 'TalkBack' },
  { key: 'lowvision', color: 'var(--lowvision)', name: 'Low vision', tool: 'Font scale · contrast' },
  { key: 'cognitive', color: 'var(--cognitive)', name: 'Cognitive · dyslexia', tool: 'Dense text' },
  { key: 'motor', color: 'var(--motor)', name: 'Motor', tool: 'Touch targets · Switch Access' },
] as const;
