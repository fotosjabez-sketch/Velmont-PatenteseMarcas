import type { Article } from "./types";

const article: Article = {
  slug: "estruturar-para-crescer",
  title: "Crescer sem estrutura é aumentar o problema de escala",
  standfirst:
    "Faturar mais não organiza uma empresa. Costuma fazer o contrário: torna visível tudo o que estava sendo sustentado por esforço pessoal.",
  category: "gestao",
  date: "2025-11-05",
  author: "Velmont",
  readingMinutes: 6,
  status: "rascunho",
  excerpt:
    "Estrutura organizacional, processos, controles e governança são o que permite que o crescimento não dependa de quem está presente naquele dia.",
  body: [
    {
      type: "quote",
      text: "Estruturar uma empresa é transformar organização em capacidade de crescimento.",
      cite: "Velmont — Consultoria integrada em estruturação de empresas",
    },
    {
      type: "p",
      text: "Existe um ponto na vida de quase toda empresa em que o modelo que funcionou até ali para de funcionar. Não porque alguém errou, mas porque aquele modelo dependia de proximidade: o sócio via tudo, decidia tudo, corrigia tudo. Quando o volume cresce, essa proximidade acaba.",
    },
    { type: "h2", text: "Os sintomas antes do diagnóstico" },
    {
      type: "ul",
      items: [
        "Decisões que só acontecem quando uma pessoa específica está disponível.",
        "Processos que existem, mas só na cabeça de quem os executa.",
        "Indicadores que ninguém consegue explicar de onde vêm.",
        "Retrabalho aceito como normal.",
        "Contratações que resolvem por três meses e depois recriam o mesmo gargalo.",
      ],
    },
    { type: "h2", text: "Estrutura não é burocracia" },
    {
      type: "p",
      text: "A confusão entre as duas coisas é o que faz muitas empresas adiarem a organização até que ela vire crise. Burocracia é processo que existe para se justificar. Estrutura é processo que existe para que uma decisão possa ser tomada sem depender de improviso.",
    },
    {
      type: "callout",
      title: "A conexão que quase ninguém faz",
      text: "Estrutura e patrimônio intelectual são a mesma conversa. Definir quem faz o quê é o mesmo trabalho de definir de quem é o que foi criado. Uma empresa organizada sabe listar seus ativos intangíveis; uma empresa desorganizada descobre que não sabe exatamente quando precisa vendê-los.",
    },
    {
      type: "questions",
      title: "Teste rápido de estrutura",
      items: [
        "Se você tirasse trinta dias, o que pararia?",
        "Quais são os cinco números que dizem se o mês foi bom?",
        "Uma pessoa nova consegue executar um processo lendo algo, ou só perguntando?",
        "Você consegue listar hoje os ativos intangíveis da empresa?",
      ],
    },
    {
      type: "todo",
      text: "Descrever aqui as etapas do trabalho de estruturação conforme praticado pela Velmont — diagnóstico, entregáveis e acompanhamento.",
    },
  ],
  related: ["proteger-criacao", "como-registrar-marca"],
};

export default article;
