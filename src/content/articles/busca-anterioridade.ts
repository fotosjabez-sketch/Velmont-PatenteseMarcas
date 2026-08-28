import type { Article } from "./types";

const article: Article = {
  slug: "busca-anterioridade",
  title: "Busca de anterioridade: a informação que muda o custo de tudo",
  standfirst:
    "É a etapa mais barata do processo e a que mais evita prejuízo. Ainda assim, é a mais pulada.",
  category: "marcas",
  date: "2026-01-22",
  author: "Velmont",
  readingMinutes: 6,
  status: "rascunho",
  excerpt:
    "Pesquisar o que já existe antes de investir não é burocracia prévia: é o que transforma uma aposta em decisão informada.",
  body: [
    {
      type: "p",
      text: "Anterioridade é uma palavra técnica para uma ideia simples: alguém pode ter chegado antes. A pesquisa de anterioridade é o levantamento do que já foi registrado ou depositado e que pode afetar aquilo que você pretende proteger.",
    },
    {
      type: "p",
      text: "Ela existe tanto no universo de marcas quanto no de patentes, com escopos diferentes. No material oficial da Velmont, a busca de anterioridade patentária é descrita como pesquisa em bases nacionais e internacionais, verificação de documentos de patente semelhantes e relatório técnico com análise das patentes mais relevantes.",
    },
    { type: "h2", text: "O que a busca entrega — e o que ela não entrega" },
    {
      type: "ul",
      items: [
        "Entrega: um retrato do que existe hoje nas bases pesquisadas, e a leitura do que aquilo significa para a sua pretensão.",
        "Entrega: critério para decidir entre seguir, ajustar ou mudar de caminho.",
        "Não entrega: garantia de resultado. A decisão final é do órgão competente e considera elementos que uma busca não controla.",
        "Não entrega: certeza absoluta. Pedidos em sigilo e movimentações posteriores existem.",
      ],
    },
    {
      type: "callout",
      title: "Por que isso é honesto dizer",
      text: "Uma busca apresentada como garantia é uma promessa vazia. Uma busca apresentada como redução de risco é uma ferramenta de decisão. A diferença entre as duas leituras aparece meses depois, quando o processo encontra a realidade.",
    },
    { type: "h2", text: "Quando fazer" },
    {
      type: "p",
      text: "Antes de investir. Antes de imprimir, de contratar identidade visual, de comprar domínio premium, de estampar em produto, de comunicar ao mercado. O valor da pesquisa é inversamente proporcional ao que já foi gasto quando ela acontece.",
    },
    {
      type: "questions",
      title: "O que levar para essa conversa",
      items: [
        "Qual é exatamente o sinal ou a solução que se quer proteger?",
        "Para quais produtos e serviços ele precisa valer?",
        "Em quais territórios o negócio pretende operar nos próximos anos?",
        "Já houve alguma divulgação pública do que está sendo pesquisado?",
      ],
    },
    {
      type: "todo",
      text: "Descrever aqui as bases consultadas, o formato do relatório entregue e o prazo de execução da busca conforme a prática da Velmont.",
    },
  ],
  related: ["como-registrar-marca", "o-que-e-fto"],
};

export default article;
