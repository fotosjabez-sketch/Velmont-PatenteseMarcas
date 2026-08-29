# Velmont — Design System

Direção de arte, tokens e regras de uso. A identidade da Velmont define a experiência;
este documento registra como ela foi traduzida para o digital.

---

## 1. O conceito

**PROTEÇÃO COMO ESTRATÉGIA.**

O site parte de uma leitura do posicionamento oficial da empresa — *"marca é patrimônio.
E patrimônio exige estratégia, segurança jurídica e gestão responsável"* (Lisandra
Ferreira dos Santos) — e da lacuna que motivou a fundação: a ausência de transparência
real na relação com o cliente.

Disso nascem as duas decisões estruturais do projeto:

1. **O site é uma publicação, não um funil.** Ele explica antes de propor. A Home tem
   um índice de capítulos na primeira tela; as seções são numeradas em um trilho
   editorial lateral; o blog é tratado como biblioteca, não como seção secundária.
2. **A transparência é mostrada, não afirmada.** A seção *"Sem promessas vazias"*
   apresenta o que pode dar errado e o que não está sob controle da empresa. O
   diagnóstico entrega **perguntas**, não respostas jurídicas. Conteúdo não validado
   aparece marcado como tal, na cara do usuário.

---

## 2. Os três motivos

Extraídos da apresentação institucional e transformados em sistema. Cada motivo tem
regra de uso — nenhum é decoração distribuída aleatoriamente.

### CRISTA (`<Ridge />`, `<RidgeMark />`)

A montanha do logotipo, redesenhada como linha aberta em SVG.

- **Significa** altitude construída ao longo do tempo: o patrimônio.
- **Onde** fecha blocos-manifesto — base do hero, base do CTA final, base do rodapé, 404.
- **Como** desenha-se no scroll (`stroke-dashoffset`), nunca aparece pronta.
- **Nunca** é usada como ícone decorativo dentro de conteúdo.

### ESTRATOS (`<Strata />`)

As listras angulares concêntricas do material oficial: cantos aninhados recortados por
um arco de círculo com centro no mesmo vértice. É o recorte circular — as pontas dos
ângulos cortadas pelo arco — que torna o motivo reconhecível.

- **Significa** camadas de proteção sobrepostas.
- **Onde** sangra de cantos, sempre parcialmente fora do quadro; marca painéis de
  resultado, capas tipográficas de artigo e aberturas de página.
- **Como** sempre em dourado de baixa opacidade (10–25%), atrás do conteúdo.
- **Nunca** com opacidade alta, nem repetido como padrão de fundo.

### FICHA (`<Ficha />`)

O objeto central da linguagem, e o que substitui o card em todo o site.

- **Significa** o intangível transformado em prova: número, data, classe, titular.
- **Anatomia** barra de cabeçalho com código de registro e status, corpo com campos
  rotulados, e — quando o contexto pede — um lacre.
- **Por quê** um card com ícone e título poderia pertencer a qualquer empresa. Uma ficha
  de registro só faz sentido para quem cataloga bens intangíveis: o objeto carrega o
  posicionamento sem precisar escrevê-lo.
- **Nunca** com raio de borda, sombra difusa ou ícone. É papel, não cartão de interface.

### CAMPO (`.lightfield`)

Os grandes círculos creme que sangram das bordas na apresentação, aqui difusos em
gradiente radial.

- **Significa** área de leitura, foco, luz.
- **Onde** apenas sobre campos vinho, para dar profundidade sem gradiente gratuito.
- **Como** via variáveis `--lf-x`, `--lf-y`, `--lf-strength` (10–16%).

A forma **circular** também governa todo conteúdo humano e fotográfico: retratos das
fundadoras e fotos de ambiente aparecem em círculo com anel dourado, como no material
oficial.

---

## 3. Cor

Todos os tokens em `src/app/globals.css`, bloco `@theme`.

| Token | Hex | Uso |
| --- | --- | --- |
| **`stage`** | **`#0B0206`** | **Palco: o vinho levado ao quase-preto. Fundo dominante.** |
| `stage-2` | `#16050C` | Painel elevado sobre o palco |
| `paper` | `#F2EADC` | Superfície de DOCUMENTO — sempre com borda, peso e sombra |
| `foil` | `#C9A227` | Lacre metálico. Poucas aparições por página |
| `annot` | `#8496A3` | Neutro **frio**: cotas e linhas técnicas |
| `wine-950` | `#150107` | Rodapé, campos mais profundos |
| `wine-900` | `#24030f` | Menu mobile, variação de capa |
| **`wine-800`** | **`#2c0413`** | **Cor primária — amostrada do material oficial** |
| `wine-700` | `#3d0a1d` | Variação, títulos sobre papel |
| `wine-600` | `#52142b` | Preenchimento de hover em botões |
| `cream-50` | `#fbf8f3` | Papel padrão |
| `cream-100` | `#f6f0e6` | Papel alternado (ritmo entre seções) |
| `cream-200` | `#efe4d3` | Texto sobre vinho, botões claros |
| **`cream-300`** | **`#e9d3b3`** | **Creme da marca — amostrado do material oficial** |
| `gold-600` | `#a8813f` | **Traços, bordas, filetes** |
| **`gold-ink`** | **`#7e602f`** | **Texto pequeno sobre fundos claros (AA ≥ 4.5:1)** |
| `gold-400` | `#cfae74` | Texto e traços sobre vinho |
| `ink-900` | `#171013` | Texto principal sobre papel |
| `ink-700` | `#3a2c33` | Corpo de texto longo |
| `ink-500` | `#6a585f` | Metadados, rótulos, texto de apoio |

### Regra de contraste

`gold-600` e `gold-ink` existem separados de propósito: **o dourado da marca não atinge
4.5:1 sobre os cremes do sistema em corpo pequeno.** Por isso:

- **Texto** pequeno em dourado → `text-gold-ink`
- **Traço, borda, preenchimento** → `gold-600`

Sobre vinho, `gold-400` (8.8:1) e `cream-200` (14.7:1) passam com folga.

Auditado com `npm run qa:a11y` — **0 violações WCAG 2.1 AA** em nove rotas.

---

## 4. Tipografia

Três vozes, três funções — a separação é a decisão estruturante do sistema.

| Papel | Família | Uso |
| --- | --- | --- |
| **Pensamento** | **Instrument Serif** (400, itálico) | Manchetes, manifesto, citações, nomes |
| **Informação** | **Instrument Sans** (400–600) | Navegação, corpo, rótulos, UI |
| **Registro** | **IBM Plex Mono** (400–500) | Códigos, classes, datas, protocolos, status |

A serifa tem alto contraste e espacejamento apertado: lê galeria e editorial, não
cartório. A mono é a voz nova do sistema — é ela que faz o site parecer um sistema
proprietário em vez de um folheto, e resolve de graça a ausência de microtipografia.

**Por que a Cormorant saiu:** era bonita demais. Dizia hotel boutique e convite de
casamento, não patrimônio e prova. E nos corpos grandes as hastes finas sumiam — a
manchete ficava frágil justamente onde precisava ser firme.

### Classes utilitárias

| Classe | Papel |
| --- | --- |
| `.t-display` | Serifa, peso 400, `line-height: 0.94`, `letter-spacing: -0.02em`, `text-wrap: balance` |
| `.t-eyebrow` | Sans 11px, `tracking: 0.22em`, caixa alta — sobrancelhas |
| `.t-index` | Mono 11px, `tabular-nums` — numerais do trilho editorial |
| `.t-code` | Mono 11px, caixa alta, `tracking: 0.14em` — a voz de registro |
| `.t-lede` | Parágrafo de abertura, 17–20px |
| `.t-body` | Corpo, `line-height: 1.72` |
| `.hang-quote` | Aspa pendurada opticamente em pull quotes |

### Armadilha registrada: a unidade `ch`

O glifo `0` das serifas de alto contraste é estreito: `max-w-[34ch]` em display de
2.5rem rende ~240px, não 34 caracteres. **Larguras de texto display usam `em`; corpo em
sans pode usar `ch`.**

### Armadilha registrada: colisão de variáveis de fonte

As variáveis do `next/font` são prefixadas com `--vel-` (`--vel-serif`, `--vel-sans`,
`--vel-mono`). Nomeá-las `--font-sans` colide com o token do Tailwind e produz
`--font-sans: var(--font-sans)` — uma referência circular que falha em silêncio.

---

## 5. Grid e composição

- `.shell` — container, máx. `88rem`, gutter `clamp(1.25rem, 4vw, 4rem)`
- `.grid-editorial` — 12 colunas (6 no mobile)
- `--rail` — trilho editorial de `4.5rem` à esquerda das seções (0 abaixo de 1024px),
  onde vivem o numeral e o rótulo vertical da seção

**Regras de composição:**

1. Nada é centralizado. Títulos ancoram à esquerda; ledes deslocam para a direita
   (`md:col-start-9`), criando a assimetria de dupla página.
2. Listas de conteúdo são **faixas com filete**, não cards. O site evita
   deliberadamente caixa, sombra e raio — não há `border-radius` em nenhum bloco de
   conteúdo (só nos retratos circulares).
3. Alternância de fundo (`paper` → `cream` → `wine`) marca o ritmo entre capítulos.

---

## 6. Motion

Sem biblioteca de animação. Dois mecanismos:

1. **`RevealProvider`** — um `IntersectionObserver` para todo o documento, mais um
   `MutationObserver` para conteúdo montado depois (resultado do diagnóstico, painéis).
   Ele apenas adiciona `.is-in`; a transição vive no CSS.
2. **Callback refs** — o efeito magnético dos botões assina os próprios listeners de
   mouse, fora do ciclo de render do React.

| Variante | Efeito |
| --- | --- |
| `<Reveal>` | Sobe e revela |
| `<Reveal variant="scale">` | Sobe com leve escala |
| `<Reveal variant="clip">` | Máscara lateral |
| `<TextReveal>` | Linha a linha, com máscara e defasagem |
| `.draw-path` | Traço que se desenha (crista) |

Curvas: `--ease-editorial` `cubic-bezier(0.16, 1, 0.3, 1)` e `--ease-precise`.

**`prefers-reduced-motion: reduce` desliga tudo** — reveals entram já visíveis, o traço
já aparece desenhado, o magnetismo não é sequer assinado.

Proibidos por decisão de direção: bounce, spring exagerado, confete, elementos voando,
glassmorphism, gradiente gratuito.

---

## 7. Componentes

| Componente | Papel |
| --- | --- |
| `Section` / `SectionHeading` | Seção com trilho numerado; cabeçalho assimétrico |
| `Reveal` / `TextReveal` | Motion declarativo |
| `Ridge` / `RidgeMark` / `Strata` / `IndexMark` | Motivos da identidade |
| `ButtonLink` / `Button` / `TextLink` | Botões com preenchimento que sobe; magnetismo opcional |
| `ServiceIndex` | Índice de serviços com `tablist` vertical e navegação por setas |
| `ProtectionExplorer` / `ChoiceGroup` | A experiência de descoberta |
| `Transparency` / `Journey` | Acordeão horizontal e as cinco etapas |
| `Founders` / `Testimonials` | Narrativa humana e mural de depoimentos |
| `ArticleCard` / `ArticleCover` / `ArticleBody` / `BlogIndex` | Sistema editorial |
| `FAQ` / `ValidationNote` / `Breadcrumbs` / `PageHero` | Primitivas de página |
| `ScrollProgress` / `Header` / `Footer` / `Logo` | Shell |

---

## 8. Acessibilidade

- HTML semântico, hierarquia de headings correta, `skip link` para o conteúdo
- Escolhas do diagnóstico são **radios reais** (`sr-only`), com semântica e navegação de
  teclado nativas
- Índice de serviços implementa o padrão `tablist` com setas, `Home` e `End`
- Etapas colapsadas usam `inert`, não `aria-hidden` — não capturam foco
- Foco visível em dourado, `outline-offset: 3px`
- `aria-live="polite"` no resultado do diagnóstico
- Header decide seu tom lendo a **luminância real** do primeiro bloco da rota
  (`useHeroTone`), então nunca fica escuro sobre vinho

---

## 9. Performance

- Zero dependências de runtime além de Next e React
- Todas as rotas em SSG
- Fontes por `next/font` com `display: swap`
- Imagens por `next/image`, com `sizes` declarado; imagens do material oficial
  reprocessadas e otimizadas
- Um único `IntersectionObserver` para o documento inteiro
- Grão de textura em SVG inline como `data:` URI — sem requisição
- `overflow-x: clip` no `body`, verificado em 390/768/1024/1440px

---

## 10. Os três momentos

O motion não é distribuído por igual: três picos, e o resto em silêncio.

| Momento | Onde | O que acontece |
| --- | --- | --- |
| **A emissão** | Hero | A manchete É o documento. Campos se preenchem, status vira de "não registrado" para "registrado", lacre desce. |
| **A mesa de exame** | `#em-jogo` | Um ativo se decompõe em vista explodida nas camadas que precisam ser protegidas, cada uma com sua classificação. Dirigido pela rolagem, com miolo preso. |
| **A letra miúda** | Antes do CTA | *(a implementar)* O risco em corpo de display, no campo mais escuro do site. |

### Os quatro verbos do motion

Se um movimento não é um destes, não entra:

1. **Catalogar** — campos se preenchem em sequência
2. **Lacrar** — o selo desce e assenta
3. **Decompor** — camadas se separam em vista explodida
4. **Comparar** — dois documentos se alinham

O `fade-up` universal aplicado a tudo foi justamente o problema anterior: movimento como
decoração, não como narrativa.
