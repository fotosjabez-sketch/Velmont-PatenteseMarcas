import type { Article } from "./types";

const article: Article = {
  slug: "proteger-design",
  title: "Quando o design é a diferença, o design é o ativo",
  standfirst:
    "Há produtos cujo diferencial não é a função — é a forma. Proteger isso exige olhar para uma via específica, que quase ninguém considera a tempo.",
  category: "identidade",
  date: "2025-11-19",
  author: "Velmont",
  readingMinutes: 5,
  status: "rascunho",
  excerpt:
    "Desenho industrial trata da aparência do produto. É uma via distinta da patente e da marca — e frequentemente a mais relevante para quem vive de produto.",
  body: [
    {
      type: "p",
      text: "Em muitos mercados, a razão pela qual alguém escolhe um produto e não outro não está no que ele faz, mas em como ele parece. Móveis, embalagens, calçados, utensílios, equipamentos. Quando a forma é o diferencial competitivo, ela é o ativo — e ativos se protegem.",
    },
    { type: "h2", text: "Três vias, três objetos" },
    {
      type: "ul",
      items: [
        "Desenho industrial — a forma e a aparência do produto.",
        "Patente — a solução técnica, ou seja, o que ele faz e como funciona.",
        "Marca — o sinal que identifica quem o produz.",
      ],
    },
    {
      type: "p",
      text: "Um mesmo produto pode envolver as três. Tratar apenas uma delas costuma deixar exatamente aquilo que o mercado copia primeiro sem cobertura.",
    },
    {
      type: "callout",
      title: "Variações também são o produto",
      text: "Linhas de produto raramente têm uma versão só. Modelos, tamanhos, acabamentos e variações fazem parte do que precisa entrar na estratégia — protegê-los pela metade convida a cópia a operar na diferença.",
    },
    { type: "h2", text: "O problema do tempo" },
    {
      type: "p",
      text: "Design é feito para ser mostrado. Lançamentos, feiras, catálogos, redes sociais — a lógica comercial empurra para a exposição, e a lógica da proteção pede cuidado com o momento dessa exposição. Conciliar as duas é uma decisão de calendário, não apenas de intenção.",
    },
    {
      type: "questions",
      title: "Antes do lançamento",
      items: [
        "O que exatamente diferencia visualmente este produto dos concorrentes?",
        "Quantas variações fazem parte da mesma família?",
        "Já houve exposição pública — feira, catálogo, publicação, pré-venda?",
        "Quem desenvolveu o design e a titularidade está definida em contrato?",
      ],
    },
    {
      type: "todo",
      text: "Detalhar requisitos, prazos e abrangência do registro de desenho industrial conforme validação da Velmont.",
    },
  ],
  related: ["proteger-criacao", "patente-modelo-utilidade"],
};

export default article;
