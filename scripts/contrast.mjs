import { chromium } from 'playwright';
import { createRequire } from 'module';
import fs from 'fs';
const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const pages = ['/', '/servicos', '/blog', '/diagnostico', '/sobre', '/contato', '/como-funciona', '/blog/como-registrar-marca'];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const seen = new Map();
for (const path of pages) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:3000' + path, { waitUntil: 'networkidle' });
  await p.addScriptTag({ content: axeSource });
  const r = await p.evaluate(async () => await window.axe.run(document, { runOnly: ['color-contrast'] }));
  for (const v of r.violations) for (const n of v.nodes) {
    const m = n.any[0].message;
    const fg = m.match(/foreground color: (#[0-9a-f]{6})/)?.[1];
    const bg = m.match(/background color: (#[0-9a-f]{6})/)?.[1];
    const ratio = m.match(/contrast of ([\d.]+)/)?.[1];
    const size = m.match(/font size: ([\d.]+pt)/)?.[1];
    const key = `${fg} on ${bg}`;
    if (!seen.has(key)) seen.set(key, { ratio, size, sample: n.html.slice(0,90), pages: new Set() });
    seen.get(key).pages.add(path);
  }
  await p.close();
}
for (const [k,v] of [...seen.entries()].sort((a,b)=>a[1].ratio-b[1].ratio))
  console.log(`${k}  ratio=${v.ratio} size=${v.size}\n   ${v.sample}\n   páginas: ${[...v.pages].join(', ')}`);
await b.close();
