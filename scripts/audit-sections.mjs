import { chromium } from "playwright";

const out = process.argv[2];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.addStyleTag({ content: "html{scroll-behavior:auto !important}" });

// Revela tudo de uma vez para capturar o estado final de cada seção.
await page.evaluate(async () => {
  await new Promise((r) => {
    let y = 0;
    const t = setInterval(() => {
      window.scrollTo(0, y);
      y += 400;
      if (y > document.body.scrollHeight) {
        clearInterval(t);
        r();
      }
    }, 30);
  });
});
await page.waitForTimeout(1200);

const targets = [
  ["hero", null],
  ["manifesto", "#manifesto"],
  ["em-jogo", "#em-jogo"],
  ["descubra", "#descubra"],
  ["servicos", "#servicos"],
  ["transparencia", "#transparencia"],
  ["sobre", "#sobre"],
  ["conhecimento", "#conhecimento"],
];

for (const [name, sel] of targets) {
  if (sel) {
    await page.evaluate((s) => {
      const el = document.querySelector(s);
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY);
    }, sel);
  } else {
    await page.evaluate(() => window.scrollTo(0, 0));
  }
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${out}/sec-${name}.png` });
  console.log("capturado:", name);
}

await browser.close();
