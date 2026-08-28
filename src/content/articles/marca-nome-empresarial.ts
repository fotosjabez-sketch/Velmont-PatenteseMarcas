import type { Article } from "./types";

const article: Article = {
  slug: "marca-nome-empresarial",
  title: "Marca e nome empresarial não são a mesma coisa",
  standfirst:
    "Ter o nome na Junta Comercial dá segurança para operar. Não dá exclusividade sobre o nome no mercado. A confusão entre as duas coisas é uma das mais caras de corrigir.",
  category: "marcas",
  date: "2026-02-04",
  author: "Velmont",
  readingMinutes: 5,
  status: "rascunho",
  excerpt:
    "São dois registros, em dois lugares, com finalidades diferentes. Entender a distinção é o que evita descobrir tarde demais que o nome usado há anos pertence a outra pessoa.",
  body: [
    {
      type: "p",
      text: "A frase aparece em quase toda primeira conversa: “mas eu já tenho o nome registrado”. Quase sempre, o que existe é o registro do nome empresarial — o ato que constitui a empresa e a identifica perante os órgãos competentes.",
    },
    {
      type: "p",
      text: "É um registro real, necessário e válido. Ele apenas responde a uma pergunta diferente da que a marca responde.",
    },
    { type: "h2", text: "Duas perguntas diferentes" },
    {
      type: "ul",
      items: [
        "O nome empresarial responde: como esta pessoa jurídica se identifica formalmente.",
        "A marca responde: qual sinal distingue estes produtos e serviços no mercado — e quem tem exclusividade sobre ele.",
      ],
    },
    {
      type: "p",
      text: "Uma empresa pode ter nome empresarial e marca idênticos, ou completamente diferentes. Pode ter uma marca e várias submarcas. Pode operar com um nome fantasia que nunca apareceu em nenhum contrato social. Nenhuma dessas situações é anormal — todas exigem que a proteção seja pensada separadamente.",
    },
    {
      type: "callout",
      title: "O sintoma clássico",
      text: "A empresa opera há anos, cresce, investe em comunicação — e recebe uma notificação de um titular de marca que nunca ouviu falar. O nome empresarial estava em ordem o tempo todo. A marca é que nunca foi tratada.",
    },
    { type: "h2", text: "Por que isso costuma passar despercebido" },
    {
      type: "p",
      text: "Porque os dois registros acontecem em momentos diferentes da vida da empresa, com interlocutores diferentes. A abertura da empresa é conduzida por quem cuida da constituição societária. A marca pertence a outro campo — e, se ninguém levanta a questão, ela simplesmente não é levantada.",
    },
    {
      type: "questions",
      title: "Como saber onde você está",
      items: [
        "O nome pelo qual seus clientes te chamam é o mesmo que está no contrato social?",
        "Você tem algum documento que diga “marca” — ou apenas os documentos de constituição da empresa?",
        "Alguém já pesquisou esse nome em base de marcas, em algum momento?",
        "Se um concorrente registrasse esse nome amanhã, o que você poderia fazer?",
      ],
    },
    {
      type: "todo",
      text: "Detalhar aqui os órgãos envolvidos em cada registro e os efeitos jurídicos de cada um, com a precisão técnica que a Velmont validar.",
    },
    {
      type: "p",
      text: "A conclusão prática é simples: os dois registros não se substituem. Se a sua empresa só tem um deles, ela tem metade da conversa resolvida.",
    },
  ],
  related: ["como-registrar-marca", "busca-anterioridade"],
};

export default article;
