/** The four people the talk follows. One colour each (themes/a11y.css), used the same way everywhere. */
export const PEOPLE = [
  { key: 'blind', color: 'var(--blind)', name: 'Ceguera', tool: 'TalkBack' },
  { key: 'lowvision', color: 'var(--lowvision)', name: 'Baja visión', tool: 'Escala de fuente · contraste' },
  { key: 'cognitive', color: 'var(--cognitive)', name: 'Cognitiva · dislexia', tool: 'Texto denso' },
  { key: 'motor', color: 'var(--motor)', name: 'Motora', tool: 'Áreas táctiles · Switch Access' },
] as const;
