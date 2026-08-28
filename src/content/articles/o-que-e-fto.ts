import type { Article } from "./types";

const article: Article = {
  slug: "o-que-e-fto",
  title: "Freedom-to-Operate: a pergunta que ninguém faz antes de investir em tecnologia",
  standfirst:
    "Ter uma patente é sobre o que você pode impedir. FTO é sobre o que podem impedir você. São análises opostas — e as duas importam.",
  category: "patentes",
  date: "2026-01-08",
  author: "Velmont",
  readingMinutes: 6,
  status: "rascunho",
  excerpt:
    "O parecer de Freedom-to-Operate examina se a sua solução esbarra em direitos de terceiros vigentes nos territórios onde você quer operar.",
  body: [
    {
      type: "p",
      text: "Existe uma assimetria curiosa no modo como empresas tratam patentes. Quase todas perguntam se conseguem proteger o que criaram. Muito poucas perguntam se conseguem usar o que criaram — que é uma pergunta diferente, e frequentemente mais urgente.",
    },
    {
      type: "p",
      text: "O parecer de Freedom-to-Operate responde à segunda. No material oficial da Velmont, o escopo do FTO é descrito como: interpretar as reivindicações das patentes encontradas, verificar se estão vigentes no Brasil ou nos países de interesse, comparar as reivindicações com a intenção da invenção, apontar o risco de uso ou infração e sugerir alternativas, caso existam riscos.",
    },
    { type: "h2", text: "Duas perguntas que parecem uma só" },
    {
      type: "ul",
      items: [
        "“Posso proteger isso?” — análise de patenteabilidade. Olha para os requisitos da sua solução.",
        "“Posso usar isso?” — análise de liberdade de operação. Olha para os direitos vigentes de terceiros.",
      ],
    },
    {
      type: "p",
      text: "Uma resposta positiva na primeira não implica resposta positiva na segunda. É perfeitamente possível desenvolver algo protegível e, ainda assim, esbarrar em uma patente de terceiro vigente no seu mercado.",
    },
    {
      type: "callout",
      title: "Território importa",
      text: "Direitos de patente são territoriais. Uma patente vigente em um país pode não estar vigente em outro. Por isso o FTO se define pelos países de interesse do negócio — e não “no mundo”.",
    },
    { type: "h2", text: "Quando o FTO deixa de ser opcional" },
    {
      type: "p",
      text: "Quando o investimento é grande o suficiente para que uma interrupção seja um problema sério: linhas de produção, contratos de fornecimento, rodadas de investimento, entrada em novo mercado, licenciamento de tecnologia.",
    },
    {
      type: "questions",
      title: "O que define o escopo de um FTO",
      items: [
        "Quais são exatamente as características técnicas do que você vai usar?",
        "Em quais países o produto será fabricado, vendido ou importado?",
        "Existe prazo comercial já assumido que dependa dessa resposta?",
        "Se houver risco identificado, existe margem técnica para alternativa de projeto?",
      ],
    },
    {
      type: "todo",
      text: "Descrever o formato do parecer entregue pela Velmont, escopo de bases consultadas e prazo de execução.",
    },
  ],
  related: ["patente-modelo-utilidade", "busca-anterioridade"],
};

export default article;
