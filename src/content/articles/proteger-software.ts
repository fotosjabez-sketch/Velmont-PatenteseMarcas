import type { Article } from "./types";

const article: Article = {
  slug: "proteger-software",
  title: "Proteger um software é responder três perguntas, não uma",
  standfirst:
    "O código, o nome e a titularidade são camadas distintas. Empresas de tecnologia costumam tratar só a primeira — e é a terceira que gera os problemas mais graves.",
  category: "propriedade-intelectual",
  date: "2025-12-16",
  author: "Velmont",
  readingMinutes: 6,
  status: "rascunho",
  excerpt:
    "Quem escreveu, o que é público, de quem é: as três perguntas que definem se o seu produto digital é realmente um ativo da empresa.",
  body: [
    {
      type: "p",
      text: "Uma empresa de software costuma ter clareza absoluta sobre a arquitetura do seu produto e clareza quase nenhuma sobre a arquitetura jurídica dele. Isso raramente é negligência: é que as duas coisas são construídas por pessoas diferentes, em momentos diferentes, e quase nunca se encontram.",
    },
    { type: "h2", text: "Primeira camada: o programa" },
    {
      type: "p",
      text: "O material oficial da Velmont trata a proteção de programas de computador dentro de propriedade intelectual. É a camada que responde pelo software enquanto criação — o que foi escrito, por quem, quando.",
    },
    { type: "h2", text: "Segunda camada: o nome" },
    {
      type: "p",
      text: "O nome da plataforma é uma marca, e segue a lógica de marcas: pesquisa de anterioridade, definição de classes, registro. É frequente ver produtos digitais com domínio comprado, perfil social garantido, marca nunca verificada.",
    },
    { type: "h2", text: "Terceira camada: de quem é" },
    {
      type: "p",
      text: "Esta é a camada que costuma estar em aberto. Software é construído por muitas mãos: sócios técnicos, contratados PJ, agências, freelancers, colaboradores que entraram e saíram. Se a titularidade não foi definida em documento, ela não se define sozinha.",
    },
    {
      type: "callout",
      title: "O momento em que isso aparece",
      text: "Quase sempre em due diligence: rodada de investimento, venda da empresa, entrada de sócio. É quando alguém pergunta pela cadeia de titularidade do produto — e a empresa descobre que ela nunca foi montada.",
    },
    {
      type: "questions",
      title: "Auditoria mínima do seu produto digital",
      items: [
        "Você consegue listar todas as pessoas que escreveram código no produto?",
        "Cada uma delas assinou instrumento de cessão de direitos para a empresa?",
        "O nome do produto foi verificado em base de marcas?",
        "A interface, os conteúdos e os materiais do produto estão incluídos no que se considera protegido?",
        "Existe registro de versões e datas que sustente a autoria da empresa?",
      ],
    },
    {
      type: "todo",
      text: "Detalhar a via de proteção aplicável a programas de computador, o órgão competente e o que compõe o depósito, conforme validação da Velmont.",
    },
  ],
  related: ["proteger-criacao", "marca-nome-empresarial"],
};

export default article;
