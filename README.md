# Velmont — site institucional, instrucional e editorial

Site da **Velmont Marcas e Patentes**: propriedade industrial e intelectual, estruturação
de empresas e naming.

O projeto não é uma landing page institucional. É um **sistema digital de orientação**
sobre marcas, propriedade intelectual e estratégia empresarial: o site educa antes de
vender, e traduz o principal diferencial declarado pela empresa — transparência real
sobre etapas, riscos e possibilidades — em experiência navegável.

> Protegendo ideias, estruturando negócios.

---

## Sumário

- [Stack](#stack)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Build e produção](#build-e-produção)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Como adicionar conteúdo ao blog](#como-adicionar-conteúdo-ao-blog)
- [Como editar serviços e dados institucionais](#como-editar-serviços-e-dados-institucionais)
- [Formulário de contato](#formulário-de-contato)
- [QA — acessibilidade e visual](#qa--acessibilidade-e-visual)
- [Observações importantes](#observações-importantes)

---

## Stack

| Camada | Escolha | Motivo |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router) | Rotas estáticas, metadata API, `next/image`, `next/font` |
| Linguagem | **TypeScript** | Conteúdo tipado — serviços, artigos e diagnóstico são dados, não markup |
| Estilo | **Tailwind CSS v4** | Tokens centralizados em `@theme`, sem arquivo de configuração JS |
| Tipografia | Cormorant Garamond + Archivo | Servidas por `next/font/google`, com `display: swap` |
| Motion | **CSS + IntersectionObserver** | Nenhuma biblioteca de animação |
| Ícones/ilustração | SVG próprio | Nenhum pacote de ícones |

**Dependências de runtime: `next`, `react`, `react-dom`. Só.**
Não há biblioteca de UI, de animação, de carrossel ou de ícones. Cada motivo visual do
site é SVG desenhado a partir da identidade da Velmont (ver
[`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md)).

`playwright` e `axe-core` existem apenas como `devDependencies`, para o QA visual e de
acessibilidade descrito abaixo.

---

## Estrutura do projeto

```
src/
├── app/                        # rotas (App Router)
│   ├── layout.tsx              # shell, fontes, metadata base, schema.org da empresa
│   ├── page.tsx                # Home — narrativa em 8 capítulos
│   ├── globals.css             # DESIGN SYSTEM: tokens, grid, motivos, motion
│   ├── opengraph-image.tsx     # imagem de compartilhamento gerada
│   ├── sitemap.ts / robots.ts  # SEO técnico
│   ├── not-found.tsx
│   ├── servicos/               # índice + [slug] (4 páginas de serviço)
│   ├── blog/                   # índice editorial + [slug] (artigo)
│   ├── sobre/ como-funciona/ diagnostico/ contato/
│
├── components/
│   ├── layout/                 # Header, Footer, Logo
│   ├── ui/                     # primitivas: Section, Reveal, Button, Marks, FAQ…
│   ├── sections/               # blocos narrativos da Home e páginas
│   ├── diagnostic/             # a experiência interativa
│   └── blog/                   # índice, capa tipográfica, renderizador de artigo
│
├── content/                    # TODO o conteúdo do site vive aqui
│   ├── site.ts                 # dados institucionais oficiais (contato, navegação)
│   ├── services.ts             # os 4 serviços oficiais
│   ├── founders.ts             # textos das fundadoras + missão/visão
│   ├── testimonials.ts         # depoimentos do material oficial
│   ├── transparency.ts         # quadros de transparência + etapas
│   ├── diagnostic.ts           # camadas, opções e perguntas do diagnóstico
│   └── articles/               # um arquivo por artigo + tipos + índice
│
├── hooks/                      # useReducedMotion, useScrolled, useHeroTone
└── lib/                        # fontes, utilidades

docs/
├── DESIGN-SYSTEM.md            # direção de arte, tokens, motivos, regras
└── CONTEUDO.md                 # procedência de cada texto do site

scripts/                        # QA visual e de acessibilidade
```

Regra da arquitetura: **nenhuma página tem conteúdo escrito dentro do JSX.**
Texto institucional, serviços, artigos e o modelo do diagnóstico vivem em `src/content/`.
Componentes só decidem como aquilo é apresentado.

---

## Instalação

Requer **Node.js 20+**.

```bash
npm install
```

---

## Desenvolvimento

```bash
npm run dev          # http://localhost:3000
npm run type-check   # TypeScript sem emitir
npm run lint         # ESLint
```

---

## Build e produção

```bash
npm run build        # gera as 26 rotas estáticas
npm start            # serve o build
```

Todas as rotas são pré-renderizadas estaticamente (SSG). Não há banco de dados nem
chamada de API em runtime.

---

## Variáveis de ambiente

Uma única variável, opcional:

```bash
cp .env.example .env.local
```

| Variável | Obrigatória | Uso |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Não | URL canônica usada em `canonical`, `sitemap.xml`, `robots.txt` e Open Graph. Sem ela, o site assume `https://www.grupovelmont.com`. |

**Defina esta variável antes do primeiro deploy em produção**, com o domínio real.
Não há chaves, tokens ou credenciais no projeto.

---

## Como adicionar conteúdo ao blog

Cada artigo é um arquivo TypeScript em `src/content/articles/`.

**1.** Crie `src/content/articles/meu-artigo.ts`:

```ts
import type { Article } from "./types";

const article: Article = {
  slug: "meu-artigo",              // vira /blog/meu-artigo
  title: "Título do artigo",
  standfirst: "Subtítulo editorial exibido abaixo do título.",
  category: "marcas",              // ver categorias em ./types.ts
  date: "2026-03-10",              // AAAA-MM-DD, ordena o índice
  author: "Velmont",
  readingMinutes: 6,
  status: "rascunho",              // "rascunho" exibe a nota editorial de validação
  featured: false,                 // true destaca o artigo na capa do blog
  cover: "/blog/minha-imagem.jpg", // opcional — sem isso, usa capa tipográfica
  excerpt: "Resumo de uma ou duas linhas para os índices.",
  body: [
    { type: "p", text: "Parágrafo." },
    { type: "h2", text: "Um subtítulo (entra no sumário automaticamente)" },
    { type: "ul", items: ["Item", "Outro item"] },
    { type: "ol", items: ["Primeiro", "Segundo"] },
    { type: "quote", text: "Citação em destaque.", cite: "Fonte" },
    { type: "callout", title: "Destaque", text: "Bloco de atenção." },
    { type: "questions", title: "Perguntas", items: ["Pergunta 1", "Pergunta 2"] },
    { type: "todo", text: "Conteúdo que ainda precisa ser validado pela Velmont." },
  ],
  related: ["outro-artigo"],       // slugs relacionados
};

export default article;
```

**2.** Registre no índice `src/content/articles/index.ts`:

```ts
import meuArtigo from "./meu-artigo";

export const articles: Article[] = [
  meuArtigo,
  // …
].sort((a, b) => (a.date < b.date ? 1 : -1));
```

Pronto. O artigo entra automaticamente no índice, nos filtros por categoria, na busca,
na paginação, no `sitemap.xml`, nos relacionados e nos dados estruturados `Article`.

### Blocos disponíveis

| `type` | Renderização |
| --- | --- |
| `p` | Parágrafo na medida de leitura |
| `h2` / `h3` | Título; `h2` entra no sumário lateral |
| `ul` / `ol` | Lista com traço dourado / lista numerada |
| `quote` | Citação em display serif com filete |
| `callout` | Bloco de atenção sobre papel creme |
| `questions` | Painel vinho com as perguntas a responder |
| `todo` | **Nota de validação visível** — ver abaixo |

### O bloco `todo` e o marcador `[VALIDAR: …]`

O site nunca apresenta placeholder como se fosse informação oficial.

- Nos artigos, use o bloco `{ type: "todo", text: "…" }`.
- Nos FAQs de serviço (`src/content/services.ts`), escreva a resposta como
  `"[VALIDAR: o que precisa ser preenchido]"`.

Os dois renderizam o mesmo componente `ValidationNote`, com o rótulo
**"Conteúdo a validar"** visível na página. Artigos com `status: "rascunho"` também
exibem uma nota editorial no topo. Ao publicar conteúdo validado, troque para
`status: "publicado"` e remova os blocos `todo`.

---

## Como editar serviços e dados institucionais

| Arquivo | O que contém |
| --- | --- |
| `src/content/site.ts` | Endereço, telefone, e-mail, Instagram, navegação, anos de experiência |
| `src/content/services.ts` | Os quatro serviços: itens, citações oficiais, FAQ, contexto |
| `src/content/founders.ts` | Textos das fundadoras, missão, visão, princípios |
| `src/content/testimonials.ts` | Depoimentos do material institucional |
| `src/content/transparency.ts` | Os quatro quadros de transparência e as etapas do trabalho |
| `src/content/diagnostic.ts` | Camadas de proteção, opções e perguntas do diagnóstico |

Adicionar um serviço em `services.ts` gera automaticamente a página
`/servicos/[slug]`, a entrada no índice, o item no rodapé e a URL no sitemap.

---

## Formulário de contato

Não há backend neste repositório. O formulário de `/contato` **monta uma mensagem
estruturada e abre o WhatsApp oficial da Velmont**, com alternativa por e-mail.
Nenhum dado é armazenado ou enviado a terceiros.

Para ligar a um endpoint próprio, edite `src/components/ui/ContactForm.tsx`: a função
`onSubmit` é o único ponto a alterar.

---

## QA — acessibilidade e visual

```bash
npm run dev          # em um terminal

npm run qa:a11y      # axe-core (WCAG 2.1 A/AA) em 9 rotas
npm run qa:contrast  # lista pares de cor que reprovam em contraste
npm run qa:visual <url> <saida.png> <largura> <altura>
```

`qa:visual` também reporta overflow horizontal e erros de console.

Estado atual: **0 violações WCAG 2.1 AA** nas nove rotas auditadas e **0 overflow
horizontal** em 390 / 768 / 1024 / 1440 px.

---

## Observações importantes

**Conteúdo oficial vs. conteúdo editorial.** Todo texto do site é rastreável:
`docs/CONTEUDO.md` registra a procedência de cada bloco — o que veio literalmente do
material institucional, o que é redação editorial e o que ainda depende de validação.
Nenhum número, cliente, prêmio, certificação, prazo ou garantia foi inventado.

**O diagnóstico não é parecer.** A experiência de `/diagnostico` e a seção equivalente
na Home apresentam camadas de proteção, perguntas a responder e conteúdos de leitura.
Nunca afirmam que um direito é aplicável a um caso concreto — e exibem essa ressalva na
própria interface.

**Parceiros.** A apresentação institucional lista parceiros, mas os logotipos são marcas
de terceiros. A área existe em `/sobre` com a grade reservada e a marcação de validação,
aguardando a lista oficial e as autorizações de uso.

**Metodologia.** O material da Velmont não declara uma metodologia nomeada. As cinco
etapas apresentadas em "Como funciona" são estrutura de comunicação do site, sinalizada
como tal na própria página e em `src/content/transparency.ts`.

**Movimento.** Todo o motion respeita `prefers-reduced-motion: reduce`.

**Imagens.** Fotografias das fundadoras e dos ambientes vêm do material institucional da
Velmont. O site não usa banco de imagens: artigos sem fotografia própria recebem uma
**capa tipográfica** construída com os motivos da identidade.
