#!/usr/bin/env node
// Is the deck itself accessible? Checks what scene 12.5 claims, in a real browser, on the production build.
//   npm run build && node tools/check-a11y.mjs        → prints PASS/FAIL per claim, writes artifacts/a11y/*.png
import { mkdirSync } from 'node:fs';
import { launchBrowser, startServer } from '../scripts/lib.mjs';

mkdirSync('artifacts/a11y', { recursive: true });
const { base, stop } = await startServer({ dist: 'dist', port: 4177 });
const browser = await launchBrowser();
const results = [];
const check = (name, ok, detail = '') => { results.push(ok); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); };

const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, colorScheme: 'light' });
await page.goto(`${base}?capture=1#1.2`);
await page.waitForFunction(() => window.__beatdeck, null, { timeout: 30000 });
await page.waitForTimeout(1500);

// 1 · language
check('lang is declared', (await page.evaluate(() => document.documentElement.lang)) === 'en');

// 2 · a screen-reader announcement at every step
const live = () => page.evaluate(() => document.querySelector('[role="status"]')?.textContent ?? '');
const beats = await page.evaluate(() => window.__beatdeck.beats);
let missing = [], leaks = [];
for (let s = 0; s < beats.length; s++) {
  for (let b = 0; b < beats[s].length; b++) {
    await page.goto(`${base}?capture=1#${s + 1}.${b + 1}`);
    await page.waitForTimeout(120);
    const t = await live();
    if (!t || (await page.evaluate(() => document.querySelector('[role="status"]')?.getAttribute('data-source'))) !== 'sr') missing.push(`${s + 1}.${b + 1}`);
    if (/Pause\.|Ask the room|TODO:|Homer calls/.test(t)) leaks.push(`${s + 1}.${b + 1}`);       // speaker notes must never reach the live region
  }
}
check('every beat has its own announcement (not the fallback)', missing.length === 0, missing.slice(0, 8).join(' '));
check('speaker notes never reach the live region', leaks.length === 0, leaks.join(' '));

// 2b · what a screen reader reaches: only the current beat's announcement and the two buttons
await page.goto(`${base}?capture=1#1.2`); await page.waitForTimeout(600);
const tree = await page.locator('body').ariaSnapshot();
const foreign = ['Questions', 'Hephaestus', 'Four controls', 'Close your eyes', 'Dark or light'].filter((t) => tree.includes(t));
check('the accessibility tree holds no other scene', foreign.length === 0, foreign.join(', '));
check('the tree has Previous and Next', tree.includes('button "Previous step"') && tree.includes('button "Next step"'));
await page.getByRole('button', { name: 'Next step' }).focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
check('Enter on Next is exactly one step', (await page.evaluate(() => location.hash)) === '#1.3', await page.evaluate(() => location.hash));
await page.getByRole('button', { name: 'Previous step' }).focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
check('Previous goes back one step', (await page.evaluate(() => location.hash)) === '#1.2');
await page.goto(`${base}?capture=1#1.2`); await page.waitForTimeout(400);
await page.keyboard.press('Tab');
check('Tab reaches a control', await page.evaluate(() => !!document.activeElement && document.activeElement.tagName === 'BUTTON'));
await page.screenshot({ path: 'artifacts/a11y/focus-nav.png' });
await page.mouse.click(960, 540); await page.waitForTimeout(300);
check('a click on the stage still advances exactly one beat', (await page.evaluate(() => location.hash)) === '#1.3', await page.evaluate(() => location.hash));

// 3 · keyboard only: arrows move, T switches theme
await page.goto(`${base}?capture=1#1.2`); await page.waitForTimeout(500);
await page.keyboard.press('ArrowRight'); await page.waitForTimeout(300);
check('ArrowRight advances', (await page.evaluate(() => location.hash)) === '#1.3');
const before = await page.evaluate(() => document.documentElement.dataset.theme);
await page.keyboard.press('t'); await page.waitForTimeout(300);
const after = await page.evaluate(() => document.documentElement.dataset.theme);
check('T switches the theme', before !== after, `${before} → ${after}`);
await page.screenshot({ path: `artifacts/a11y/theme-${after}.png` });
await page.goto(`${base}?capture=1#6.2`); await page.waitForTimeout(800);
await page.screenshot({ path: `artifacts/a11y/blind-audit-${after}.png` });
await page.goto(`${base}?capture=1#7.2`); await page.waitForTimeout(800);
await page.screenshot({ path: `artifacts/a11y/lowvision-${after}.png` });
await page.keyboard.press('t'); await page.waitForTimeout(300);
await page.goto(`${base}?capture=1#7.2`); await page.waitForTimeout(800);
await page.screenshot({ path: `artifacts/a11y/lowvision-${before}.png` });

// 4 · prefers-reduced-motion
const rm = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: 'reduce' });
await rm.goto(`${base}#1.2`); await rm.waitForTimeout(800);
check('prefers-reduced-motion is honoured by the engine', await rm.evaluate(() => document.documentElement.classList.contains('reduced-motion') || document.body.classList.contains('reduced-motion') || !!document.querySelector('.reduced-motion')));

// 5 · what the markup gives a screen reader outside the live region (limits of the engine, for docs/DECISIONS.md)
const markup = await page.evaluate(() => ({
  headings: document.querySelectorAll('h1,h2,h3').length,
  landmarks: document.querySelectorAll('main,nav,header,footer,[role=main],[role=navigation]').length,
  focusable: document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])').length,
  imgsWithoutAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
  ariaHidden: document.querySelectorAll('[aria-hidden="true"]').length,
}));
console.log('INFO  markup outside the live region:', JSON.stringify(markup));

await browser.close(); await stop();
process.exit(results.every(Boolean) ? 0 : 1);
