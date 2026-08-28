/**
 * EXPERIÊNCIAS REAIS COM A VELMONT
 * Fonte: Apresentação Velmont 2026, página 10.
 * Depoimentos reproduzidos literalmente do material oficial. A autoria não é
 * identificada no material — por isso não há nomes atribuídos aqui.
 * Não inventar autoria, cargo, empresa ou data.
 */

export type Testimonial = {
  quote: string;
  /** Origem do depoimento conforme o material oficial. */
  source: "Avaliação pública" | "Mensagem de cliente";
  /** true quando o material oficial exibe 5 estrelas na avaliação. */
  rated: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Empresa séria e transparente nos seus processos, explicação sobre todos os passos, super recomendo!",
    source: "Avaliação pública",
    rated: true,
  },
  {
    quote:
      "Recomendo a Velmont de olhos fechados. Super dedicados e competentes. Realmente se preocupam em atender as necessidades dos seus clientes. Trabalho impecável e de muita excelência.",
    source: "Avaliação pública",
    rated: true,
  },
  {
    quote:
      "Excelente atendimento e profissionalismo. A Velmont entrega um serviço de alta qualidade, com agilidade e segurança em todos os processos. Recomendo!",
    source: "Avaliação pública",
    rated: true,
  },
  {
    quote:
      "Excelentes profissionais fazem parte da empresa, assessoria e consultoria completa na abertura de empresas…",
    source: "Avaliação pública",
    rated: true,
  },
  {
    quote: "Po Dani, em poucas palavras trocadas, conseguiu me dá uma clareza absurda.",
    source: "Mensagem de cliente",
    rated: false,
  },
  {
    quote: "Obrigada Dra. Lisandra, ficou tudo muito claro. Atendimento impecável.",
    source: "Mensagem de cliente",
    rated: false,
  },
  {
    quote: "Te agradeço muito pela atenção e disposição em ajudar! Você é uma excelente profissional!",
    source: "Mensagem de cliente",
    rated: false,
  },
  {
    quote: "Pode dar andamento, quero fazer com vocês!",
    source: "Mensagem de cliente",
    rated: false,
  },
];
