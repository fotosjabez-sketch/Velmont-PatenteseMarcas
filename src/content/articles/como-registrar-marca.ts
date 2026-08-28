import type { Article } from "./types";

const article: Article = {
  slug: "como-registrar-marca",
  title: "Registrar uma marca começa muito antes do pedido",
  standfirst:
    "A pergunta que quase todo mundo faz é “como registro?”. A pergunta que muda o resultado é “o que eu vou registrar, e para quê?”.",
  category: "marcas",
  date: "2026-02-18",
  author: "Velmont",
  readingMinutes: 7,
  status: "rascunho",
  featured: true,
  excerpt:
    "O registro é um procedimento. A decisão sobre o que registrar, em quais classes e em que ordem é estratégia — e é ela que define se a proteção vai servir para alguma coisa.",
  body: [
    {
      type: "p",
      text: "Existe uma diferença entre protocolar um pedido e proteger uma marca. A primeira é uma tarefa administrativa. A segunda é uma decisão de negócio que envolve o que exatamente será protegido, em que abrangência, contra o quê e em que sequência.",
    },
    {
      type: "p",
      text: "Quando as duas coisas são tratadas como a mesma coisa, o resultado costuma aparecer meses depois: um pedido feito na classe errada, um sinal que não era o que a empresa realmente usa, ou uma anterioridade que existia desde o começo e ninguém foi verificar.",
    },
    { type: "h2", text: "Primeiro: o que é a sua marca, de fato" },
    {
      type: "p",
      text: "A marca não é necessariamente o que está na sua fachada. É o sinal que faz o mercado reconhecer você — e ele pode ser um nome, uma expressão, um símbolo, ou a combinação disso. Antes de qualquer pedido, é preciso definir qual desses elementos carrega o reconhecimento do seu negócio, porque é ele que precisa de exclusividade.",
    },
    {
      type: "questions",
      title: "Perguntas que precedem o pedido",
      items: [
        "Se você tivesse que abrir mão de tudo menos um elemento visual, qual manteria?",
        "O nome que você usa no mercado é o mesmo que está nos documentos da empresa?",
        "Você usa uma marca só, ou já criou submarcas para produtos e linhas?",
        "O logotipo mudou desde que a empresa nasceu — e qual versão é a que vale hoje?",
      ],
    },
    { type: "h2", text: "Segundo: o que já existe" },
    {
      type: "p",
      text: "Toda a lógica do sistema de marcas é comparativa. O que você pode ter depende do que outros já têm. Por isso a pesquisa de anterioridade não é uma formalidade prévia: é a etapa que produz a informação sobre a qual todas as outras decisões serão tomadas.",
    },
    {
      type: "callout",
      title: "Domínio livre não é marca livre",
      text: "Verificar domínio, perfil social e nome empresarial são checagens diferentes da pesquisa de marca. Um nome pode passar em todas essas e ainda assim encontrar obstáculo — porque cada uma dessas bases responde a uma pergunta diferente.",
    },
    { type: "h2", text: "Terceiro: o perímetro" },
    {
      type: "p",
      text: "Uma marca não se protege “no geral”. Ela se protege para determinados produtos e serviços, em determinado território. Definir esse perímetro é decidir onde você quer poder dizer não — hoje e no plano dos próximos anos.",
    },
    {
      type: "p",
      text: "É aqui que a estratégia de crescimento entra na conversa técnica. Uma empresa que pretende licenciar, franquear ou exportar precisa de um perímetro diferente de uma que vai operar em uma praça só.",
    },
    { type: "h2", text: "Quarto: a ordem das coisas" },
    {
      type: "p",
      text: "Proteção tem sequência. Há o que precisa estar resolvido antes da exposição pública, o que pode ser feito em paralelo e o que só faz sentido depois. Tratar tudo como igualmente urgente costuma custar mais e proteger menos.",
    },
    {
      type: "todo",
      text: "Descrever aqui as etapas formais do procedimento de registro, prazos oficiais e custos envolvidos, conforme a informação que a Velmont se compromete a sustentar publicamente.",
    },
    { type: "h2", text: "O que acontece depois do registro" },
    {
      type: "p",
      text: "Um direito constituído que ninguém acompanha protege menos do que parece. Monitoramento existe porque o mercado continua se movendo: novos pedidos são depositados, concorrentes se aproximam, e a decisão de agir depende de alguém estar olhando.",
    },
    {
      type: "quote",
      text: "Criar gera valor. Proteger garante que esse valor continue sendo seu.",
      cite: "Velmont — Propriedade Industrial",
    },
  ],
  related: ["busca-anterioridade", "marca-nome-empresarial"],
};

export default article;
