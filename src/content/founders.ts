/**
 * FUNDADORAS — texto oficial
 * Fonte: Apresentação Velmont 2026, páginas 3 e 4.
 * `letter` reproduz o depoimento oficial de cada fundadora, com edição
 * apenas de quebras de parágrafo. Não alterar sem validação.
 */

export type Founder = {
  name: string;
  role: string;
  photo: string;
  /** Frase-chave extraída do próprio depoimento oficial. */
  pull: string;
  credentials: string;
  letter: string[];
};

export const founders: Founder[] = [
  {
    name: "Danielle Cubas de Azevedo",
    role: "Founder & CEO",
    photo: "/founders/danielle.jpg",
    pull: "Confiança não se vende, se constrói.",
    credentials:
      "Formada em Economia, com especializações em MBA Consultoria em Vendas e Marketing – Aceleração de Negócios e Gestão 4.0, Pós-Graduação em Propriedade Intelectual e Direito Digital e eventos patrocinados do Grupo Educação G4.",
    letter: [
      "Ao longo da minha trajetória no setor de Propriedade Industrial e Intelectual há mais de 11 anos, identifiquei uma lacuna importante: a ausência de transparência real no relacionamento com o cliente. Promessas genéricas, falta de clareza nos processos e pouca orientação estratégica são práticas que, infelizmente, ainda são comuns.",
      "Na Velmont, decidi fazer diferente!",
      "Meu compromisso é construir uma empresa baseada em verdade, clareza e responsabilidade. Aqui, o cliente entende exatamente o que está sendo feito, quais são os riscos, as etapas e as reais possibilidades. Sem ilusões, sem promessas vazias.",
      "Mais do que registrar marcas, meu objetivo é orientar, estruturar e proteger negócios de forma estratégica, contribuindo para decisões mais conscientes e seguras. Assim como o propósito da Velmont de transformar a forma como empresas e empreendedores lidam com a proteção de suas marcas.",
      "Acredito que confiança não se vende, se constrói. E é isso que guia cada atendimento e cada projeto que conduzimos. Quero que sua experiência como cliente seja verdadeiramente encantadora, do início ao fim.",
      "Conte conosco!",
    ],
  },
  {
    name: "Lisandra Ferreira dos Santos",
    role: "Founder & CEO",
    photo: "/founders/lisandra.jpg",
    pull: "Marca é patrimônio. E patrimônio exige estratégia.",
    credentials:
      "Advogada, especialista em Propriedade Industrial e Intelectual, com atuação nas áreas cível, trabalhista, empresarial e previdenciária.",
    letter: [
      "A Velmont nasceu da inconformidade de ver um mercado que, muitas vezes, prioriza o financeiro e negligencia o cuidado real com o cliente. Aqui, partimos de um princípio claro, marca é patrimônio. E patrimônio exige estratégia, segurança jurídica e gestão responsável.",
      "Nossa atuação vai além do acompanhamento de processos. Estruturamos, protegemos e orientamos negócios para que cresçam de forma sólida e segura, sempre com uma visão estratégica de longo prazo.",
      "O compromisso é de agir com transparência e comprometimento com cada cliente e que possam se sentir seguros de terem escolhido a empresa certa para acompanhar o crescimento em cada passo da sua empresa.",
      "Conte conosco!",
    ],
  },
];

/** Texto institucional oficial — Apresentação Velmont 2026, p.2 */
export const about = {
  origin:
    "A Velmont nasceu do inconformismo com um mercado onde grandes ideias, marcas e negócios nem sempre recebem a proteção e a estratégia que merecem.",
  experience:
    "Com mais de 10 anos de experiência em propriedade industrial e intelectual, gestão organizacional e jurídica de negócios, atuamos de forma estratégica para proteger, valorizar e fortalecer ativos empresariais.",
  mission:
    "Nossa missão é proporcionar segurança jurídica e visão estratégica, transformando marcas e ativos de propriedade intelectual em instrumentos de crescimento, diferenciação e geração de valor.",
  vision:
    "Buscamos ser referência nacional em proteção estratégica de negócios, construindo relações baseadas em honestidade, respeito e compromisso com o crescimento.",
  belief:
    "Na Velmont, acreditamos que proteger um negócio é preservar sua história, fortalecer sua reputação e construir bases sólidas para o seu futuro.",
} as const;
