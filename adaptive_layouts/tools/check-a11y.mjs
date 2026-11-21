#!/usr/bin/env node
// Is the deck itself accessible? Real browser, production build.
//   npm run build && node tools/check-a11y.mjs        → PASS/FAIL per claim, screenshots in artifacts/a11y/
import { mkdirSync } from 'node:fs';
import { launchBrowser, startServer } from '../scripts/lib.mjs';

mkdirSync('artifacts/a11y', { recursive: true });
const { base, stop } = await startServer({ dist: 'dist', port: 4177 });
const browser = await launchBrowser();
const results = [];
const check = (name, ok, detail = '') => { results.push(ok); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); };

const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(`${base}?capture=1#1.2`);
await page.waitForFunction(() => window.__beatdeck, null, { timeout: 30000 });
await page.waitForTimeout(1500);

// 1 · language
check('lang is declared (en)', (await page.evaluate(() => document.documentElement.lang)) === 'en');

// 2 · a screen-reader announcement at every step, never a speaker note
const live = () => page.evaluate(() => document.querySelector('[role="status"]')?.textContent ?? '');
const beats = await page.evaluate(() => window.__beatdeck.beats);
const notes = await page.evaluate(() => window.__beatdeck.notes ?? null);
const missing = [], leaks = [];
for (let s = 0; s < beats.length; s++) {
  for (let b = 0; b < beats[s].length; b++) {
    await page.goto(`${base}?capture=1#${s + 1}.${b + 1}`);
    await page.waitForTimeout(120);
    const t = await live();
    if (!t || (await page.evaluate(() => document.querySelector('[role="status"]')?.getAttribute('data-source'))) !== 'sr') missing.push(`${s + 1}.${b + 1}`);
    if (/TODO\(speaker\)|Presentarse en una frase|Agradecer a la organización/.test(t)) leaks.push(`${s + 1}.${b + 1}`);
  }
}
check('every beat has its own announcement (not the fallback)', missing.length === 0, missing.slice(0, 8).join(' '));
check('speaker notes never reach the live region', leaks.length === 0, leaks.join(' '));

// 2b · what a screen reader reaches: the current beat's announcement and the two buttons
await page.goto(`${base}?capture=1#1.2`); await page.waitForTimeout(600);
const tree = await page.locator('body').ariaSnapshot();
const foreign = ['Questions', 'Full demo backup', 'The Ugly', 'Window Insets'].filter((t) => tree.includes(t));
check('the accessibility tree holds no other scene', foreign.length === 0, foreign.join(', '));
check('the tree has Previous step and Next step', tree.includes('button "Previous step"') && tree.includes('button "Next step"'));
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

// 3 · keyboard only
await page.goto(`${base}?capture=1#1.2`); await page.waitForTimeout(500);
await page.keyboard.press('ArrowRight'); await page.waitForTimeout(300);
check('ArrowRight advances', (await page.evaluate(() => location.hash)) === '#1.3');

// 4 · prefers-reduced-motion
const rm = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: 'reduce' });
await rm.goto(`${base}#1.2`); await rm.waitForTimeout(800);
check('prefers-reduced-motion is honoured by the engine', await rm.evaluate(() => document.documentElement.classList.contains('reduced-motion') || document.body.classList.contains('reduced-motion') || !!document.querySelector('.reduced-motion')));

await browser.close(); await stop();
process.exit(results.every(Boolean) ? 0 : 1);
