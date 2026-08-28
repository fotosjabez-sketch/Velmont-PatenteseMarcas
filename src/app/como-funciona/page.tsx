import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Transparency } from "@/components/sections/Transparency";
import { Journey } from "@/components/sections/Journey";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { transparencyPanels } from "@/content/transparency";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "O que a Velmont faz, o que precisa ser analisado, o que pode envolver risco e o que depende de terceiros. Transparência sobre etapas, riscos e possibilidades.",
  alternates: { canonical: "/como-funciona" },
};

/** FAQ da página, em dados estruturados — perguntas de processo, não jurídicas. */
const processFaq = [
  {
    q: "Como começa um trabalho com a Velmont?",
    a: "Pela conversa que mapeia o que existe: o que a empresa criou, o que já foi protegido, o que está exposto e o que ela pretende fazer nos próximos anos. Nenhuma recomendação é feita antes disso.",
  },
  {
    q: "Vocês garantem o registro?",
    a: "Não. A análise e a decisão são dos órgãos competentes. O que a Velmont faz é reduzir risco com pesquisa prévia, conduzir o processo corretamente e dizer, antes de começar, o que pode acontecer.",
  },
  {
    q: "Como eu acompanho o andamento?",
    a: "O acompanhamento é individualizado, e o compromisso declarado pela empresa é que o cliente entenda exatamente o que está sendo feito, quais são as etapas, os riscos e as reais possibilidades.",
  },
  {
    q: "O atendimento é presencial ou digital?",
    a: `Os dois. ${site.serviceModes.join(" e ")} — com organização, segurança e acompanhamento individualizado.`,
  },
];

export default function ComoFuncionaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: processFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Como funciona"
        crumbs={[{ label: "Como funciona" }]}
        titleLines={[<>Você vai saber</>, <>o que está sendo feito.</>]}
        lede={
          <p>
            Promessas genéricas e falta de clareza nos processos são exatamente o que a Velmont
            nasceu para não repetir. Esta página existe para tornar isso verificável.
          </p>
        }
      />

      <Section tone="wine" index="01" label="Transparência" bleed className="py-[clamp(4rem,8vw,7rem)]">
        <Transparency />
      </Section>

      <Section tone="deep" index="02" label="Etapas" bleed className="py-[clamp(4rem,8vw,7rem)]">
        <Journey />
      </Section>

      <Section tone="paper" index="03" label="Perguntas">
        <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="t-display text-[clamp(1.875rem,3.6vw,3rem)] text-ink-900">
              Perguntas sobre o processo
            </h2>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-ink-500">
              Sobre como o trabalho acontece. Perguntas técnicas de cada frente estão nas páginas de
              serviço.
            </p>
            <div className="mt-8">
              <ButtonLink href="/servicos" variant="outline" className="text-wine-800">
                Ver serviços
              </ButtonLink>
            </div>
          </Reveal>

          <dl className="md:col-span-7 md:col-start-6">
            {processFaq.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 70}
                className="border-t border-ink-900/12 py-8 last:border-b"
              >
                <dt className="font-display text-[clamp(1.1875rem,2vw,1.5rem)] leading-snug text-wine-800">
                  {f.q}
                </dt>
                <dd className="t-body mt-4 max-w-[62ch] text-[0.9375rem] text-ink-700">{f.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      {/* Resumo dos quatro quadros, em versão impressa/estática */}
      <Section tone="cream" index="04" label="Em resumo">
        <Reveal>
          <h2 className="t-display max-w-[13em] text-[clamp(1.875rem,4vw,3.25rem)] text-ink-900">
            Tudo em uma página só
          </h2>
        </Reveal>
        <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-px sm:grid-cols-2">
          {transparencyPanels.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 70}
              className="bg-ink-900/[0.035] p-[clamp(1.25rem,2.5vw,2rem)]"
            >
              <span className="t-index text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-[clamp(1.25rem,2vw,1.625rem)] text-wine-800">
                {p.label}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.875rem] leading-relaxed text-ink-700">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gold-600/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
