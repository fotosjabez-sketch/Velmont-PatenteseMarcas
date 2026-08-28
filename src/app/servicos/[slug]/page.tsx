import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { articles } from "@/content/articles";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ButtonLink } from "@/components/ui/Button";
import { Strata } from "@/components/ui/Marks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.title} — Velmont`,
      description: service.metaDescription,
      url: `${site.url}/servicos/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  /* Conteúdos ligados a esta frente, pelas camadas que ela cobre. */
  const readings = articles
    .filter((a) =>
      slug === "propriedade-industrial"
        ? ["marcas", "patentes"].includes(a.category)
        : slug === "propriedade-intelectual"
          ? ["propriedade-intelectual"].includes(a.category)
          : slug === "naming-identidade"
            ? ["naming", "identidade", "marcas"].includes(a.category)
            : ["negocios", "gestao", "estrategia"].includes(a.category),
    )
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "ProfessionalService", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "Brasil" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.groups.map((g) => ({
        "@type": "OfferCatalog",
        name: g.title,
        itemListElement: g.items.map((i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: i.split(" — ")[0] },
        })),
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow={`Serviço ${service.index}`}
        crumbs={[{ label: "Serviços", href: "/servicos" }, { label: service.shortTitle }]}
        titleLines={service.title.split(" ").reduce<string[][]>((acc, word, i, arr) => {
          /* Quebra a manchete em duas linhas equilibradas. */
          const half = Math.ceil(arr.length / 2);
          const line = i < half ? 0 : 1;
          acc[line] = [...(acc[line] ?? []), word];
          return acc;
        }, []).map((words, i) => <span key={i}>{words.join(" ")}</span>)}
        lede={<p>{service.summary}</p>}
      />

      {/* Citação oficial + contexto */}
      <Section tone="paper" index={service.index} label={service.shortTitle}>
        <Reveal>
          <p className="t-display max-w-[20em] border-l-2 border-gold-500/60 pl-[clamp(1.25rem,2.5vw,2.5rem)] text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.2] text-wine-800">
            {service.quote}
          </p>
        </Reveal>

        <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-6">
            {service.context.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className={i === 0 ? "t-lede text-ink-900" : "t-body text-[0.9375rem] text-ink-700"}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="relative md:col-span-5 md:col-start-8">
            <div className="relative overflow-hidden bg-wine-800 p-[clamp(1.5rem,3vw,2.25rem)] text-cream-200">
              <Strata
                corner="br"
                lines={8}
                className="pointer-events-none absolute -bottom-4 -right-4 w-28 text-gold-400/20"
              />
              <h2 className="t-eyebrow relative text-gold-400">O que costuma estar em aberto</h2>
              <ul className="relative mt-6 space-y-3.5">
                {service.stakes.map((s) => (
                  <li key={s} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-cream-200/78">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gold-400/60" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* O que a frente cobre */}
      <Section tone="cream">
        <Reveal>
          <h2 className="t-display max-w-[13em] text-[clamp(1.875rem,4vw,3.25rem)] text-ink-900">
            O que esta frente cobre
          </h2>
        </Reveal>

        <div className="mt-[clamp(2.5rem,5vw,4rem)] space-y-[clamp(2rem,4vw,3rem)]">
          {service.groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80}>
              <div className="grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-4 border-t border-ink-900/12 pt-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="t-index mb-3 block text-gold-ink">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-display text-[clamp(1.375rem,2.4vw,1.875rem)] text-wine-800">
                    {g.title}
                  </h3>
                </div>
                <ul className="space-y-3 md:col-span-7 md:col-start-6">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-4 text-[0.9375rem] leading-relaxed text-ink-700">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-gold-600/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <div className="max-w-[62rem]">
          <FAQ items={service.faq} />
        </div>
      </Section>

      {/* Relacionados */}
      <Section tone="cream">
        <div className="grid gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="t-eyebrow mb-7 text-gold-ink">Frentes relacionadas</h2>
            </Reveal>
            <ul>
              {related.map((r, i) => (
                <Reveal as="li" key={r.slug} delay={i * 80} className="border-t border-ink-900/12 last:border-b">
                  <Link href={`/servicos/${r.slug}`} className="group flex items-baseline gap-4 py-6">
                    <span className="t-index text-ink-500">{r.index}</span>
                    <span>
                      <span className="block font-display text-[clamp(1.25rem,2vw,1.625rem)] leading-tight text-ink-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-wine-800">
                        {r.title}
                      </span>
                      <span className="mt-1.5 block text-[0.875rem] text-ink-500">{r.summary}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>

          {readings.length > 0 && (
            <div className="md:col-span-6 md:col-start-7">
              <Reveal>
                <h2 className="t-eyebrow mb-7 text-gold-ink">Para entender antes de decidir</h2>
              </Reveal>
              <ul className="space-y-8">
                {readings.map((a, i) => (
                  <Reveal
                    as="li"
                    key={a.slug}
                    delay={i * 80}
                    className="border-t border-ink-900/12 pt-8 first:border-t-0 first:pt-0"
                  >
                    <ArticleCard article={a} size="sm" showExcerpt={false} />
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-10">
                <ButtonLink href="/blog" variant="outline" className="text-wine-800">
                  Ver todos os conteúdos
                </ButtonLink>
              </Reveal>
            </div>
          )}
        </div>
      </Section>

      <CTASection
        eyebrow={service.shortTitle}
        title={["Traga o seu caso.", "A análise vem antes."]}
        text="Nenhuma recomendação é feita antes de entender o que existe. A primeira conversa serve para mapear isso — e para dizer, com clareza, o que precisa ser analisado."
      />
    </>
  );
}
