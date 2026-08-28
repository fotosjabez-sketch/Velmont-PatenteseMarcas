export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "questions"; title: string; items: string[] }
  /** Conteúdo que depende de validação da Velmont. Renderizado com marcação visível. */
  | { type: "todo"; text: string };

export type Category =
  | "marcas"
  | "patentes"
  | "propriedade-intelectual"
  | "negocios"
  | "naming"
  | "identidade"
  | "estrategia"
  | "gestao";

export type Article = {
  slug: string;
  title: string;
  /** Subtítulo editorial exibido abaixo do título. */
  standfirst: string;
  category: Category;
  date: string;
  author: string;
  readingMinutes: number;
  /** Status editorial. "rascunho" exibe aviso de validação no artigo. */
  status: "rascunho" | "publicado";
  featured?: boolean;
  /** Imagem de capa opcional (arquivo em /public). Ausente → capa tipográfica. */
  cover?: string;
  excerpt: string;
  body: Block[];
  related: string[];
};

export const categories: { id: Category; label: string }[] = [
  { id: "marcas", label: "Marcas" },
  { id: "patentes", label: "Patentes" },
  { id: "propriedade-intelectual", label: "Propriedade intelectual" },
  { id: "negocios", label: "Negócios" },
  { id: "naming", label: "Naming" },
  { id: "identidade", label: "Identidade" },
  { id: "estrategia", label: "Estratégia" },
  { id: "gestao", label: "Gestão" },
];

export const categoryLabel = (id: Category) =>
  categories.find((c) => c.id === id)?.label ?? id;
