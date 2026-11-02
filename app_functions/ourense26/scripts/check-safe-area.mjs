// Fails when anything visible on a beat reaches the footer zone (the beat ticks live at y ≈ 1026) and warns about
// content too close to the side or top edges. Measures every beat of a build, in stage pixels (1920×1080).
//
//   npm run build && node scripts/check-safe-area.mjs [--dist=dist] [--bottom=992] [--side=100]
//
// Checks text nodes, images, diagram nodes and code blocks (`.cb`, `.bd-node`, `img`). The chrome (title + ticks) is ignored.
import { launchBrowser, name, settle, startServer } from './lib.mjs';

const args = process.argv.slice(2);
const flag = (k, d) => args.find((a) => a.startsWith(`--${k}=`))?.split('=')[1] ?? d;
const BOTTOM = +flag('bottom', 992);   // content must end above this (ticks at 1026)
const SIDE = +flag('side', 100);       // warn when closer than this to the left/right edge
const dist = flag('dist', 'dist');

const { base, stop } = await startServer({ dist, port: 4177 });
const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto(`${base}?capture=1#1.1`);
await page.waitForFunction(() => window.__beatdeck, null, { timeout: 30000 });
const beats = await page.evaluate(() => window.__beatdeck.beats);
const all = beats.flatMap((bs, s) => bs.map((_, b) => [s + 1, b + 1]));

const fails = []; const warns = [];
for (const [s, b] of all) {
  await page.goto(`${base}?capture=1#${s}.${b}`);
  await page.reload();
  await page.waitForFunction(() => window.__beatdeck, null, { timeout: 30000 });
  await settle(page);
  const r = await page.evaluate(({ BOTTOM, SIDE }) => {
    const stage = document.querySelector('.stage');
    const sr = stage.getBoundingClientRect(); const k = sr.width / 1920;
    const visible = (el) => {
      let o = 1;
      for (let e = el; e && e !== stage.parentElement; e = e.parentElement) {
        if (e.classList?.contains('chrome') || e.dataset?.audit === 'off') return false;
        const cs = getComputedStyle(e);
        if (cs.visibility === 'hidden' || cs.display === 'none') return false;
        o *= +cs.opacity;
      }
      return o > 0.5;
    };
    const box = (rect) => ({ l: (rect.left - sr.left) / k, r: (rect.right - sr.left) / k, t: (rect.top - sr.top) / k, b: (rect.bottom - sr.top) / k });
    const out = [];
    const add = (el, rect, what, kind = 'x') => { if (rect.width < 2 || rect.height < 2) return; out.push({ what, kind, ...box(rect) }); };
    const walker = document.createTreeWalker(stage, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (!n.textContent.trim()) continue;
      const el = n.parentElement; if (!el || !visible(el) || el.closest('.cb')) continue;
      const range = document.createRange(); range.selectNodeContents(n);
      add(el, range.getBoundingClientRect(), JSON.stringify(n.textContent.trim().slice(0, 36)), 'text');
    }
    for (const el of stage.querySelectorAll('.cb, .bd-node, img')) if (visible(el)) add(el, el.getBoundingClientRect(), el.className?.toString().split(' ')[0] || el.tagName, el.classList.contains('cb') ? 'frame' : 'x');
    return out;
  }, { BOTTOM, SIDE });
  // text that sits over a code frame (the frame's own text is excluded above)
  for (const f of r.filter((e) => e.kind === 'frame'))
    for (const t of r.filter((e) => e.kind === 'text'))
      if (t.l < f.r && t.r > f.l && t.t < f.b && t.b > f.t) fails.push(`${name(s, b)}  text over a code frame  ${t.what}`);
  for (const e of r) {
    if (e.b > BOTTOM) fails.push(`${name(s, b)}  bottom ${Math.round(e.b)} > ${BOTTOM}  ${e.what}`);
    else if (e.r > 1920 - SIDE || (e.l < SIDE && e.l >= 0 && e.t > 130)) warns.push(`${name(s, b)}  ${e.l < SIDE ? 'left ' + Math.round(e.l) : 'right edge ' + Math.round(1920 - e.r)}px from the edge  ${e.what}`);
  }
}
await browser.close(); stop();
const uniq = (a) => [...new Set(a)];
if (warns.length) console.log(`warnings (${uniq(warns).length}, closer than ${SIDE}px to a side):\n  ` + uniq(warns).slice(0, 40).join('\n  '));
if (fails.length) { console.error(`✕ safe area: ${uniq(fails).length} problem(s)\n  ` + uniq(fails).join('\n  ')); process.exit(1); }
console.log(`✓ safe area: ${all.length} beats, nothing below y=${BOTTOM}`);
