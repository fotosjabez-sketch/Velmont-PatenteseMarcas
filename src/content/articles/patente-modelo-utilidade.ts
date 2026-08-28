import type { Article } from "./types";

const article: Article = {
  slug: "patente-modelo-utilidade",
  title: "Patente de invenção e modelo de utilidade: duas respostas para perguntas diferentes",
  standfirst:
    "Nem toda boa solução técnica se protege da mesma forma. Entender a distinção é o que evita escolher o caminho errado por desconhecimento.",
  category: "patentes",
  date: "2026-01-14",
  author: "Velmont",
  readingMinutes: 6,
  status: "rascunho",
  excerpt:
    "Invenção e modelo de utilidade são figuras distintas dentro da propriedade industrial. A escolha entre elas não é preferência — é análise técnica.",
  body: [
    {
      type: "p",
      text: "Quando uma empresa desenvolve algo que funciona melhor, mais barato ou de um jeito que ninguém tinha feito, a pergunta que aparece é: “isso dá patente?”. A resposta honesta é que depende do que exatamente é novo — e é essa análise que define a via.",
    },
    { type: "h2", text: "O que está sendo protegido" },
    {
      type: "p",
      text: "A propriedade industrial trata soluções técnicas. Isso significa que o objeto de proteção não é a ideia, o conceito comercial ou o nome do produto: é a solução concreta para um problema técnico. O que muda entre as figuras é a natureza e o alcance dessa solução.",
    },
    {
      type: "ul",
      items: [
        "Patente de invenção — para soluções técnicas novas, na acepção da propriedade industrial.",
        "Modelo de utilidade — para melhorias funcionais em objetos de uso prático.",
        "Desenho industrial — para a forma e a aparência, e não para a função. É outra via, tratada separadamente.",
      ],
    },
    {
      type: "todo",
      text: "Detalhar os requisitos técnicos de cada figura (novidade, atividade inventiva, aplicação industrial e o que se aplica a cada via), com a precisão que a Velmont validar. Não publicar critérios técnicos sem revisão.",
    },
    { type: "h2", text: "A decisão que vem antes da escolha" },
    {
      type: "p",
      text: "Antes de escolher entre uma figura e outra, há duas verificações que mudam completamente o cenário: o que já existe depositado por terceiros, e se o que você desenvolveu já foi divulgado publicamente.",
    },
    {
      type: "callout",
      title: "Divulgação é uma decisão técnica, não só de marketing",
      text: "Mostrar o produto em feira, publicar em rede social, apresentar a um investidor sem qualquer instrumento de confidencialidade — cada um desses atos é uma exposição. Em propriedade industrial, o momento da divulgação importa.",
    },
    {
      type: "questions",
      title: "O que mapear antes da conversa técnica",
      items: [
        "O que exatamente é novo: o objeto, o processo, a disposição construtiva, o uso?",
        "Existe registro interno de quando e por quem cada etapa foi desenvolvida?",
        "Houve alguma divulgação, apresentação, venda ou publicação até agora?",
        "Em quais países o negócio pretende operar ou licenciar essa solução?",
      ],
    },
    {
      type: "p",
      text: "A escolha da via é consequência dessas respostas. Ela raramente é a primeira coisa a decidir — mesmo sendo, quase sempre, a primeira coisa perguntada.",
    },
  ],
  related: ["o-que-e-fto", "busca-anterioridade"],
};

export default article;
