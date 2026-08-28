import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(1500);
const invisible = await p.evaluate(() => {
  const nodes = [...document.querySelectorAll('[data-reveal]')];
  const hidden = nodes.filter(n => parseFloat(getComputedStyle(n).opacity) < 0.1);
  return { total: nodes.length, hidden: hidden.length, sample: hidden[0]?.innerText?.slice(0,60) };
});
console.log('sem JS →', JSON.stringify(invisible));
await p.screenshot({ path: process.argv[2] + '/qa/nojs.png' });
await b.close();
