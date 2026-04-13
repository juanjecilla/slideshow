const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve('sponsors_section.html'));
  await page.screenshot({ path: 'sponsors_check.png', fullPage: true });
  await browser.close();
})();
