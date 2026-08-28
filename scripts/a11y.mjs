import { chromium } from 'playwright';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const fs = await import('fs');
const axeSource = fs.readFileSync(axePath, 'utf8');

const pages = ['/', '/servicos', '/servicos/propriedade-industrial', '/blog', '/blog/como-registrar-marca', '/diagnostico', '/sobre', '/contato', '/como-funciona'];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let total = 0;
for (const path of pages) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:3000' + path, { waitUntil: 'networkidle' });
  await p.addScriptTag({ content: axeSource });
  const r = await p.evaluate(async () => await window.axe.run(document, { runOnly: ['wcag2a','wcag2aa','wcag21a','wcag21aa'] }));
  const v = r.violations;
  total += v.length;
  console.log(`\n${path}  →  ${v.length} violação(ões)`);
  for (const x of v) {
    console.log(`  [${x.impact}] ${x.id}: ${x.help} (${x.nodes.length}x)`);
    console.log(`      ex: ${x.nodes[0].html.slice(0,140)}`);
    if (x.nodes[0].any?.[0]?.message) console.log(`      → ${x.nodes[0].any[0].message.slice(0,180)}`);
  }
  await p.close();
}
console.log(`\nTOTAL: ${total}`);
await b.close();
