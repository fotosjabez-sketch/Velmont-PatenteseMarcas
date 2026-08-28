import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { articles, categoryLabel, featuredArticle } from "@/content/articles";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { ArticleCover } from "@/components/blog/ArticleCover";
import { Section } from "@/components/ui/Section";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Strata } from "@/components/ui/Marks";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "A biblioteca da Velmont sobre marcas, patentes, propriedade intelectual, naming e gestão. Conteúdo que explica antes de vender.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Conteúdos — Velmont", url: `${site.url}/blog`, type: "website" },
};

export default function BlogPage() {
  const featured = featuredArticle();

  return (
    <>
      {/* Capa da publicação */}
      <section className="grain relative isolate overflow-hidden bg-cream-100 pt-[calc(var(--header-h)+clamp(2.5rem,5vw,4rem))]">
        <Strata
          corner="tr"
          lines={10}
          className="pointer-events-none absolute -right-10 top-[10vh] hidden w-[22vw] max-w-[320px] text-gold-ink/12 lg:block"
        />

        <div className="shell pb-[clamp(3rem,6vw,5rem)]">
          <Reveal>
            <Breadcrumbs items={[{ label: "Conteúdos" }]} />
          </Reveal>

          <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold-600/50" aria-hidden="true" />
                <span className="t-eyebrow text-gold-ink">Biblioteca Velmont</span>
              </Reveal>
              <TextReveal
                as="h1"
                className="t-display text-[clamp(2.25rem,5.6vw,4.75rem)]"
                lines={[<>Entender primeiro.</>, <>Decidir depois.</>]}
                delay={120}
              />
            </div>
            <Reveal delay={260} className="md:col-span-4 md:col-start-9 md:pt-4">
              <p className="t-body text-[0.9375rem] text-ink-700">
                Textos sobre marca, patente, propriedade intelectual, naming e gestão — escritos
                para quem precisa decidir, não para quem precisa ser convencido.
              </p>
            </Reveal>
          </div>

          {/* Artigo em destaque */}
          <Reveal delay={200} className="mt-[clamp(3rem,6vw,5rem)] block">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-x-[clamp(1.5rem,3vw,3.5rem)] gap-y-8 border-t border-ink-900/15 pt-10 md:grid-cols-12"
            >
              <div className="md:col-span-6">
                <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-500">
                  <span className="text-gold-ink">Em destaque</span>
                  <span aria-hidden="true" className="h-px w-4 bg-current opacity-40" />
                  <span>{categoryLabel(featured.category)}</span>
                </div>
                <h2 className="t-display mt-5 text-[clamp(1.875rem,4.2vw,3.25rem)] text-ink-900 transition-colors duration-500 group-hover:text-wine-800">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-700">
                  {featured.standfirst}
                </p>
                <div className="mt-6 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-500">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true" className="h-px w-4 bg-current opacity-40" />
                  <span>{featured.readingMinutes} min</span>
                </div>
              </div>

              <div className="md:col-span-6">
                {featured.cover ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                    <Image
                      src={featured.cover}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <ArticleCover slug={featured.slug} category={featured.category} ratio="4/3" />
                )}
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <Section tone="paper" bleed className="py-[clamp(3.5rem,7vw,6rem)]">
        <Suspense
          fallback={
            <p className="text-[0.8125rem] text-ink-500">Carregando índice…</p>
          }
        >
          <BlogIndex />
        </Suspense>
      </Section>

      <CTASection
        eyebrow="Conteúdos"
        title={["Leu e ficou uma", "pergunta em aberto?"]}
        text={`São ${articles.length} textos publicados e uma equipe do outro lado. Se a sua dúvida não estiver aqui, ela pode virar o próximo conteúdo — ou uma conversa.`}
      />
    </>
  );
}
