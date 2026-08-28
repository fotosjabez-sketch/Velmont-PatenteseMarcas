import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, categoryLabel, getArticle, relatedArticles } from "@/content/articles";
import { site } from "@/content/site";
import { formatDate, slugifyHeading } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCover } from "@/components/blog/ArticleCover";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Section } from "@/components/ui/Section";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Strata } from "@/components/ui/Marks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/blog/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
      ...(article.cover ? { images: [{ url: article.cover }] } : {}),
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = relatedArticles(slug, 3);
  const headings = article.body
    .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
    .map((b) => ({ text: b.text, id: slugifyHeading(b.text) }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
    articleSection: categoryLabel(article.category),
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Abertura do artigo */}
      <article>
        <header className="grain relative isolate overflow-hidden bg-cream-100 pt-[calc(var(--header-h)+clamp(2rem,4vw,3.5rem))]">
          <Strata
            corner="tr"
            lines={9}
            className="pointer-events-none absolute -right-10 top-[8vh] hidden w-[18vw] max-w-[260px] text-gold-ink/10 lg:block"
          />

          <div className="shell pb-[clamp(2.5rem,5vw,4rem)]">
            <Reveal>
              <Breadcrumbs
                items={[
                  { label: "Conteúdos", href: "/blog" },
                  { label: categoryLabel(article.category), href: `/blog?categoria=${article.category}` },
                  { label: article.title },
                ]}
              />
            </Reveal>

            <div className="mt-[clamp(2rem,4vw,3rem)] max-w-[54rem]">
              <Reveal className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold-600/50" aria-hidden="true" />
                <span className="t-eyebrow text-gold-ink">{categoryLabel(article.category)}</span>
              </Reveal>

              <TextReveal
                as="h1"
                className="t-display text-[clamp(2rem,4.8vw,4rem)]"
                lines={[article.title]}
                delay={100}
              />

              <Reveal delay={220}>
                <p className="mt-7 max-w-[56ch] text-[clamp(1.0625rem,1.4vw,1.3125rem)] leading-[1.55] text-ink-700">
                  {article.standfirst}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-900/12 pt-5 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-500">
                  <span>{article.author}</span>
                  <span aria-hidden="true" className="h-px w-4 bg-current opacity-40" />
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span aria-hidden="true" className="h-px w-4 bg-current opacity-40" />
                  <span>{article.readingMinutes} min de leitura</span>
                  {article.status === "rascunho" && (
                    <>
                      <span aria-hidden="true" className="h-px w-4 bg-current opacity-40" />
                      <span className="text-gold-ink">Em validação</span>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal variant="scale" className="relative block">
            {article.cover ? (
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-ink-100">
                <Image src={article.cover} alt="" fill priority sizes="100vw" className="object-cover" />
              </div>
            ) : (
              <ArticleCover slug={article.slug} category={article.category} ratio="21/9" />
            )}
          </Reveal>
        </header>

        {/* Corpo + sumário */}
        <Section tone="paper" bleed className="py-[clamp(3rem,6vw,5rem)]">
          <div className="grid gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-12 lg:grid-cols-12">
            {/* Sumário */}
            {headings.length > 1 && (
              <nav
                aria-label="Sumário do artigo"
                className="lg:col-span-3 lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start"
              >
                <Reveal>
                  <h2 className="t-eyebrow mb-5 text-ink-500">Sumário</h2>
                  <ul className="space-y-3 border-l border-ink-900/12 pl-5">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="group flex gap-3 text-[0.875rem] leading-snug text-ink-500 transition-colors duration-300 hover:text-wine-800"
                        >
                          <span className="t-index shrink-0 text-ink-500">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{h.text}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </nav>
            )}

            <div className={headings.length > 1 ? "lg:col-span-8 lg:col-start-5" : "lg:col-span-8 lg:col-start-3"}>
              {article.status === "rascunho" && (
                <Reveal className="mb-10 border border-gold-500/40 bg-gold-500/[0.06] px-5 py-4">
                  <p className="t-eyebrow mb-2 text-gold-ink">Nota editorial</p>
                  <p className="text-[0.875rem] leading-relaxed text-ink-700">
                    Este texto trata de enquadramento e critério de decisão. Pontos que dependem de
                    informação técnica específica estão marcados como conteúdo a validar e não
                    foram preenchidos. Nada aqui constitui parecer ou orientação jurídica sobre caso
                    concreto.
                  </p>
                </Reveal>
              )}

              <ArticleBody body={article.body} />

              <Reveal className="mt-[clamp(3rem,5vw,4rem)] border-t border-ink-900/12 pt-8">
                <p className="text-[0.8125rem] leading-relaxed text-ink-500">
                  Publicado por {article.author} em {formatDate(article.date)}. Conteúdo informativo,
                  sem análise de caso concreto.
                </p>
              </Reveal>
            </div>
          </div>
        </Section>
      </article>

      {/* Relacionados */}
      <Section tone="cream">
        <Reveal>
          <h2 className="t-display mb-[clamp(2.5rem,5vw,4rem)] text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink-900">
            Continue por aqui
          </h2>
        </Reveal>
        <div className="grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-12 md:grid-cols-3">
          {related.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <ArticleCard article={a} size="md" />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Do conteúdo à decisão"
        title={["Isso se aplica", "ao seu caso?"]}
        text="Texto explica o geral. O seu caso tem detalhes que só aparecem quando alguém olha para ele. A primeira conversa serve exatamente para isso."
      />
    </>
  );
}
