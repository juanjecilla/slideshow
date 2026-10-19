#!/usr/bin/env node
// WCAG 2.x contrast audit of a theme file, over every combination the deck can show.
//   node tools/contrast.mjs [themes/a11y.css]        exits 1 on any failure (text needs 4.5:1)
// Cascades the rules the way the browser would for <html data-theme="…" data-scene="…">:
// every selector's [data-theme='x'] / [data-scene='y'] conditions must hold; later rules win.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const file = process.argv[2] ?? 'themes/a11y.css';
const css = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

const blocks = [...css.matchAll(/([^{}@]+?)\s*{([^{}]*)}/g)]
  .filter((m) => /^:root/.test(m[1].trim()))
  .map((m) => ({
    attrs: Object.fromEntries([...m[1].matchAll(/\[data-(theme|scene)='([^']+)'\]/g)].map((a) => [a[1], a[2]])),
    decls: Object.fromEntries([...m[2].matchAll(/--([\w-]+):\s*([^;]+);/g)].map((d) => [d[1], d[2].trim()])),
  }));
const scenes = [null, ...new Set(blocks.map((b) => b.attrs.scene).filter(Boolean))];
const themes = ['light', 'dark'];

const parse = (v) => {
  if (v.startsWith('#')) {
    const h = v.length === 4 ? [...v.slice(1)].map((c) => c + c).join('') : v.slice(1);
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: 1 };
  }
  const [r, g, b, a = 1] = v.match(/rgba?\(([^)]+)\)/)[1].split(',').map(Number);
  return { r, g, b, a };
};
const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
const lum = ({ r, g, b }) => [r, g, b].map((c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }).reduce((s, c, i) => s + c * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

let bad = 0, n = 0;
for (const theme of themes) for (const scene of scenes) {
  const t = {};
  for (const b of blocks) {
    const okTheme = !b.attrs.theme || b.attrs.theme === theme;
    const okScene = !b.attrs.scene || b.attrs.scene === scene;
    if (okTheme && okScene) Object.assign(t, b.decls);
  }
  const coloured = scene && t.bg !== blocks[0].decls.bg && theme === 'light';   // a scene that owns its colour
  const pairs = [['ink', 'bg'], ['ink-2', 'bg'], ['ink-3', 'bg'], ['accent', 'bg']];
  if (!t.sheet) pairs.push(['ink', 'surface'], ['ink-2', 'surface'], ['ink-3', 'surface'], ['accent', 'surface']);
  if (t.sheet) pairs.push(['sheet-ink', 'sheet'], ['sheet-dim', 'sheet'], ['sheet-accent', 'sheet']);
  if (!coloured) for (const k of ['blind', 'lowvision', 'cognitive', 'motor', 'ok', 'warning', 'fault']) if (t[k]) pairs.push([k, 'bg']);
  for (const [fg, bgk] of pairs) {
    if (!t[fg] || !t[bgk]) continue;
    const bgc = parse(t[bgk]);
    const r = ratio(over(parse(t[fg]), bgc), bgc);
    n++;
    if (r < 4.5) { bad++; console.log(`FAIL ${theme.padEnd(5)} scene ${String(scene ?? '·').padEnd(2)} ${fg} on ${bgk}  ${r.toFixed(2)}`); }
  }
}
console.log(bad ? `\n${bad} of ${n} pairs below 4.5:1` : `all ${n} text pairs ≥ 4.5:1 (${themes.length} themes × ${scenes.length} scenes)`);
process.exit(bad ? 1 : 0);
