/**
 * BIBLIOTECA EDITORIAL DA VELMONT
 *
 * IMPORTANTE — natureza do conteúdo:
 * Os artigos abaixo foram escritos como estrutura editorial do site. Eles
 * trabalham enquadramento, critério de decisão e as perguntas certas — e NÃO
 * afirmam prazos, custos, exigências legais específicas ou teses jurídicas.
 * Todo ponto que exige informação técnica validada aparece como bloco `todo`,
 * visível no site como marcação editorial.
 *
 * Fluxo para publicar: ver README.md → "Como adicionar conteúdo ao blog".
 */
import type { Article } from "./types";

import marcaNomeEmpresarial from "./marca-nome-empresarial";
import buscaAnterioridade from "./busca-anterioridade";
import patenteModeloUtilidade from "./patente-modelo-utilidade";
import oQueEFto from "./o-que-e-fto";
import protegerSoftware from "./proteger-software";
import protegerCriacao from "./proteger-criacao";
import protegerDesign from "./proteger-design";
import estruturarParaCrescer from "./estruturar-para-crescer";
import comoRegistrarMarca from "./como-registrar-marca";

export const articles: Article[] = [
  comoRegistrarMarca,
  marcaNomeEmpresarial,
  buscaAnterioridade,
  patenteModeloUtilidade,
  oQueEFto,
  protegerSoftware,
  protegerCriacao,
  protegerDesign,
  estruturarParaCrescer,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const featuredArticle = () =>
  articles.find((a) => a.featured) ?? articles[0];

export const relatedArticles = (slug: string, limit = 3) => {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);
  const explicit = current.related
    .map((s) => getArticle(s))
    .filter((a): a is Article => Boolean(a));
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category && !explicit.includes(a),
  );
  return [...explicit, ...sameCategory, ...articles.filter((a) => a.slug !== slug)]
    .filter((a, i, arr) => arr.indexOf(a) === i)
    .slice(0, limit);
};

export * from "./types";
