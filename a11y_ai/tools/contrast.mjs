#!/usr/bin/env node
// WCAG 2.x contrast audit of themes/a11y.css: every text token against bg and surface, in both themes.
// Text needs 4.5:1 (AA). Exits 1 on any failure. Run: node tools/contrast.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const css = readFileSync(fileURLToPath(new URL('../themes/a11y.css', import.meta.url)), 'utf8');

const block = (sel) => {
  const m = css.match(new RegExp(`${sel.replace(/[[\]'.]/g, '\\$&')}\\s*{([^}]*)}`));
  if (!m) throw new Error(`block not found: ${sel}`);
  return Object.fromEntries([...m[1].matchAll(/--([\w-]+):\s*([^;]+);/g)].map((x) => [x[1], x[2].trim()]));
};
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

const TEXT = ['ink', 'ink-2', 'ink-3', 'accent', 'blind', 'lowvision', 'cognitive', 'motor', 'ok', 'warning', 'fault'];
let bad = 0;
for (const [name, sel] of [['dark', ":root[data-theme='dark']"], ['light', ":root[data-theme='light']"]]) {
  const t = block(sel);
  for (const surface of ['bg', 'surface']) {
    const bgc = parse(t[surface]);
    for (const k of TEXT) {
      const r = ratio(over(parse(t[k]), bgc), bgc);
      const ok = r >= 4.5;
      if (!ok) bad++;
      console.log(`${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(5)} ${k.padEnd(9)} on ${surface.padEnd(7)} ${r.toFixed(2)}`);
    }
  }
}
console.log(bad ? `\n${bad} failing pair(s)` : '\nall text pairs ≥ 4.5:1');
process.exit(bad ? 1 : 0);
