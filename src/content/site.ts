/**
 * DADOS INSTITUCIONAIS OFICIAIS
 * Fonte: Apresentação Velmont 2026 (material oficial fornecido pela empresa).
 * Nada neste arquivo deve ser alterado sem validação da Velmont.
 */

export const site = {
  name: "Velmont",
  legalName: "Velmont Marcas e Patentes",
  tagline: "Protegendo ideias, estruturando negócios.",
  taglineEn: "Trusted strategies, proven results.",
  /** URL de produção — ajuste em NEXT_PUBLIC_SITE_URL quando o domínio for definido. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.grupovelmont.com",
  description:
    "A Velmont atua em propriedade industrial e intelectual, estruturação de empresas e naming. Proteção de marcas, patentes e criações com transparência real sobre etapas, riscos e possibilidades.",
  /** Oficial: "mais de 10 anos de experiência" (Apresentação Velmont 2026, p.2) */
  experienceYears: 10,
  contact: {
    address: {
      street: "Avenida Iguaçu, 2820",
      building: "Edif. Corporativo",
      district: "Água Verde",
      city: "Curitiba",
      state: "PR",
      zip: "80.240-030",
      full: "Avenida Iguaçu, 2820, Edif. Corporativo, Água Verde, Curitiba/PR, CEP 80.240-030",
    },
    phone: "(41) 98508-4026",
    phoneRaw: "+5541985084026",
    email: "contato@grupovelmont.com",
    instagram: "@velmontmarcas",
    instagramUrl: "https://instagram.com/velmontmarcas",
  },
  /** Oficial (p.11): atendimento presencial ou digital. */
  serviceModes: ["Presencial em Curitiba/PR", "Digital em todo o Brasil"],
} as const;

export const whatsappUrl = (message?: string) => {
  const base = `https://wa.me/${site.contact.phoneRaw.replace("+", "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const nav = [
  { label: "Serviços", href: "/servicos" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Sobre", href: "/sobre" },
  { label: "Conteúdos", href: "/blog" },
] as const;

export const footerNav = {
  servicos: [
    { label: "Consultoria em estruturação", href: "/servicos/consultoria-estruturacao" },
    { label: "Propriedade industrial", href: "/servicos/propriedade-industrial" },
    { label: "Propriedade intelectual", href: "/servicos/propriedade-intelectual" },
    { label: "Naming & identidade visual", href: "/servicos/naming-identidade" },
  ],
  conteudos: [
    { label: "Todos os conteúdos", href: "/blog" },
    { label: "Marcas", href: "/blog?categoria=marcas" },
    { label: "Patentes", href: "/blog?categoria=patentes" },
    { label: "Propriedade intelectual", href: "/blog?categoria=propriedade-intelectual" },
    { label: "Negócios", href: "/blog?categoria=negocios" },
  ],
  empresa: [
    { label: "Sobre a Velmont", href: "/sobre" },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Diagnóstico", href: "/diagnostico" },
    { label: "Contato", href: "/contato" },
  ],
} as const;
