#!/usr/bin/env node
// WCAG 2.x contrast audit of themes/western.css: every text token against bg and surface, and the intertitle
// tokens against --night. Text needs 4.5:1 (AA). Exits 1 on any failure. Run: node tools/contrast.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const css = readFileSync(fileURLToPath(new URL('../themes/western.css', import.meta.url)), 'utf8');
const root = css.match(/:root\s*{([^}]*)}/)?.[1];
if (!root) throw new Error('block not found: :root');
const t = Object.fromEntries([...root.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((x) => [x[1], x[2].replace(/\/\*.*?\*\//g, '').trim()]));

const parse = (v) => {
  if (v.startsWith('#')) {
    const h = v.length === 4 ? [...v.slice(1)].map((c) => c + c).join('') : v.slice(1);
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: 1 };
  }
  const m = v.match(/rgba?\(([^)]+)\)/);
  const [r, g, b, a = 1] = m[1].split(',').map(Number);
  return { r, g, b, a };
};
const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
const lum = ({ r, g, b }) => [r, g, b].map((c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }).reduce((s, c, i) => s + c * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

const PAIRS = [
  ...['bg', 'surface'].flatMap((s) => ['ink', 'ink-2', 'ink-3', 'accent', 'accent-strong', 'ok', 'warning', 'fault'].map((k) => [k, s])),
  ...['night-ink', 'night-accent'].map((k) => [k, 'night']),
];
let bad = 0;
for (const [k, s] of PAIRS) {
  const bgc = parse(t[s]);
  const r = ratio(over(parse(t[k]), bgc), bgc);
  const ok = r >= 4.5;
  if (!ok) bad++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${k.padEnd(13)} on ${s.padEnd(8)} ${r.toFixed(2)}`);
}
console.log(bad ? `\n${bad} failing pair(s)` : '\nall text pairs ≥ 4.5:1');
process.exit(bad ? 1 : 0);
