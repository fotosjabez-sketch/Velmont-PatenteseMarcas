import { chromium } from "playwright";

const [, , url, out, w, h] = process.argv;
const width = Number(w);
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const page = await browser.newPage({
  viewport: { width, height: Number(h) },
  deviceScaleFactor: 2,
  isMobile: width < 500,
  hasTouch: width < 500,
});

const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errs.push("console: " + m.text());
});

await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.addStyleTag({ content: "html{scroll-behavior:auto !important}" });
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const t = setInterval(() => {
      window.scrollTo(0, y);
      y += 500;
      if (y > document.body.scrollHeight) {
        clearInterval(t);
        resolve();
      }
    }, 40);
  });
});
await page.waitForTimeout(900);

const overflow = await page.evaluate(
  () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
);

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);
await page.screenshot({ path: out, fullPage: true });

console.log(`overflow-x: ${overflow}${errs.length ? " | ERRORS: " + errs.slice(0, 5).join(" ;; ") : ""}`);
await browser.close();
