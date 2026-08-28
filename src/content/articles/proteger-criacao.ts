import type { Article } from "./types";

const article: Article = {
  slug: "proteger-criacao",
  title: "O acervo que a sua empresa produziu e nunca inventariou",
  standfirst:
    "Textos, vídeos, materiais, metodologias, identidade. Tudo isso foi criado, custou dinheiro e quase nunca aparece como patrimônio em lugar nenhum.",
  category: "propriedade-intelectual",
  date: "2025-12-03",
  author: "Velmont",
  readingMinutes: 5,
  status: "rascunho",
  excerpt:
    "Acervo criativo vira patrimônio quando três coisas existem: inventário, titularidade definida e evidência de autoria.",
  body: [
    {
      type: "p",
      text: "Se alguém pedisse hoje a lista de tudo o que a sua empresa criou nos últimos cinco anos, você conseguiria produzi-la? Materiais institucionais, conteúdos digitais, identidade visual, metodologias internas, obras encomendadas. Quase nenhuma empresa consegue — e não por desorganização, mas porque nunca houve motivo aparente para fazer isso.",
    },
    {
      type: "p",
      text: "O motivo aparece de repente: uma cópia, uma saída de sócio, uma venda, uma disputa com um ex-fornecedor. Nesse momento, a pergunta deixa de ser abstrata.",
    },
    { type: "h2", text: "Três coisas transformam acervo em patrimônio" },
    {
      type: "ol",
      items: [
        "Inventário — saber o que existe. Sem lista, não há gestão possível.",
        "Titularidade — saber de quem é. Está escrito, ou está presumido?",
        "Evidência — poder demonstrar o quê e o quando. Documentação e preservação.",
      ],
    },
    {
      type: "callout",
      title: "Nota fiscal não é cessão",
      text: "Contratar e pagar por uma criação documenta uma relação comercial. A transferência da titularidade sobre a criação é objeto próprio e precisa estar escrita. É a diferença entre ter pago por algo e ser dono daquilo.",
    },
    { type: "h2", text: "Por onde começar quando tudo está em aberto" },
    {
      type: "p",
      text: "Pelo que é estratégico. Nem todo material produzido precisa do mesmo tratamento. O critério útil é: o que, se fosse copiado ou reivindicado por outra pessoa, causaria dano real ao negócio?",
    },
    {
      type: "questions",
      title: "Inventário mínimo",
      items: [
        "Quais materiais são usados hoje na venda e na entrega do seu serviço?",
        "Quem produziu cada um deles — equipe interna, agência, freelancer?",
        "Existe contrato que trate da titularidade dessas criações?",
        "Qual desses materiais você não gostaria de ver publicado com outro nome?",
      ],
    },
    {
      type: "todo",
      text: "Detalhar as formas de registro e preservação de evidências oferecidas pela Velmont, e o que cada uma comprova.",
    },
  ],
  related: ["proteger-software", "proteger-design"],
};

export default article;
