/**
 * SEÇÃO DE TRANSPARÊNCIA — "Sem promessas vazias"
 *
 * NATUREZA DO CONTEÚDO:
 * O conceito de transparência é posicionamento oficial da Velmont, declarado
 * no material institucional: "o cliente entende exatamente o que está sendo
 * feito, quais são os riscos, as etapas e as reais possibilidades. Sem ilusões,
 * sem promessas vazias." (Danielle Cubas de Azevedo, Apresentação Velmont 2026)
 *
 * Os quatro quadros abaixo traduzem esse posicionamento em experiência. São
 * afirmações de escopo e de processo — não contêm prazos, valores, garantias
 * ou teses jurídicas.
 */

export type TransparencyPanel = {
  id: string;
  label: string;
  headline: string;
  items: string[];
};

export const transparencyPanels: TransparencyPanel[] = [
  {
    id: "fazemos",
    label: "O que fazemos",
    headline: "O trabalho que assumimos e conduzimos do início ao fim.",
    items: [
      "Pesquisar o que já existe antes de você investir em um caminho.",
      "Indicar qual camada de proteção corresponde a cada ativo do seu negócio.",
      "Conduzir os pedidos e acompanhar o andamento de cada processo.",
      "Monitorar o que foi protegido e avisar quando algo exigir decisão.",
      "Explicar cada etapa em linguagem que você consegue usar para decidir.",
    ],
  },
  {
    id: "analisado",
    label: "O que precisa ser analisado",
    headline: "Nada aqui é respondido antes de ser examinado.",
    items: [
      "Se o sinal, a solução ou a criação é protegível — e por qual via.",
      "O que já existe registrado ou depositado por terceiros.",
      "A quem pertencem as criações desenvolvidas até aqui.",
      "Qual o perímetro necessário: classes, territórios, variações.",
      "A ordem em que cada proteção precisa acontecer.",
    ],
  },
  {
    id: "risco",
    label: "O que pode envolver risco",
    headline: "Risco existe. Ele deve ser dito antes, não descoberto depois.",
    items: [
      "Anterioridades de terceiros podem impedir ou limitar uma pretensão.",
      "Divulgação pública antes da proteção pode afetar o que ainda seria possível.",
      "Pedidos podem sofrer oposição, exigência ou indeferimento.",
      "Ausência de contrato de titularidade enfraquece a posição sobre uma criação.",
      "Um resultado favorável em um caso não é promessa de resultado em outro.",
    ],
  },
  {
    id: "terceiros",
    label: "O que depende de terceiros",
    headline: "Parte do processo não está sob controle de ninguém aqui.",
    items: [
      "A análise e a decisão são dos órgãos competentes, não do escritório.",
      "Prazos oficiais e filas de exame seguem o ritmo de cada órgão.",
      "Terceiros podem apresentar oposição a um pedido em curso.",
      "Informações e documentos do cliente definem o que é possível sustentar.",
    ],
  },
];

/**
 * ESTRUTURA DE COMUNICAÇÃO DO SITE — não é metodologia oficial declarada.
 * O material da Velmont não apresenta uma metodologia nomeada. Estes cinco
 * momentos organizam a explicação do trabalho para o site e devem ser
 * validados (ou substituídos pela metodologia real) pela Velmont.
 */
export const journey = [
  {
    step: "01",
    title: "Entender",
    text: "Antes de qualquer recomendação, entender o negócio: o que ele criou, como opera, para onde quer ir e o que já foi feito até aqui.",
  },
  {
    step: "02",
    title: "Analisar",
    text: "Pesquisar o que já existe, examinar o que é protegível e mapear o que pertence a quem. É a etapa que transforma expectativa em informação.",
  },
  {
    step: "03",
    title: "Estruturar",
    text: "Definir a ordem: qual camada de proteção vem primeiro, qual perímetro é necessário e o que precisa ser resolvido em contrato antes.",
  },
  {
    step: "04",
    title: "Proteger",
    text: "Conduzir os pedidos e os registros, acompanhar exigências e manter o cliente informado sobre cada movimento do processo.",
  },
  {
    step: "05",
    title: "Acompanhar",
    text: "Monitorar o que foi protegido, observar o que terceiros fazem e sinalizar quando um novo passo do negócio exigir uma nova decisão.",
  },
] as const;

/**
 * "O QUE ESTÁ EM JOGO" — leitura editorial do problema de mercado descrito
 * pelas fundadoras no material oficial. Não contém estatísticas.
 */
export const stakes = [
  {
    n: "01",
    title: "O nome",
    text: "O sinal pelo qual o mercado reconhece o negócio. Sem registro, o uso é apenas uso — e uso não é exclusividade.",
  },
  {
    n: "02",
    title: "A criação",
    text: "Aquilo que a empresa desenvolveu: solução técnica, forma, código, obra. Sem documentação, autoria vira discussão.",
  },
  {
    n: "03",
    title: "A titularidade",
    text: "De quem é o que foi criado. Pagar por um trabalho e ser dono dele são fatos que precisam estar escritos.",
  },
  {
    n: "04",
    title: "A estrutura",
    text: "O que sustenta o crescimento. Um negócio que só funciona por esforço pessoal não é um negócio transferível.",
  },
] as const;
