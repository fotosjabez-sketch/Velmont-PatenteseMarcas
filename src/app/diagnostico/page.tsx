import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ProtectionExplorer } from "@/components/diagnostic/ProtectionExplorer";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { layers } from "@/content/diagnostic";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnóstico",
  description:
    "Antes de proteger, entenda o que você tem. Três perguntas para mapear as camadas de proteção relacionadas ao seu negócio e as perguntas que você precisa saber responder.",
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnóstico"
        crumbs={[{ label: "Diagnóstico" }]}
        titleLines={[<>Antes de proteger,</>, <>entenda o que você tem.</>]}
        lede={
          <p>
            Três perguntas. Nenhum formulário, nenhum e-mail obrigatório. No fim, um mapa das
            camadas que costumam entrar na conversa — e das perguntas que só você pode responder.
          </p>
        }
      />

      <Section tone="paper" bleed className="py-[clamp(3.5rem,7vw,6rem)]">
        <ProtectionExplorer tone="paper" depth="full" headingLevel="h2" />
      </Section>

      {/* Glossário das camadas */}
      <Section tone="cream" index="01" label="Camadas">
        <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="t-display text-[clamp(1.875rem,3.8vw,3rem)] text-ink-900">
              As camadas, uma por uma
            </h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-8 md:pt-3">
            <p className="t-body text-[0.9375rem] text-ink-500">
              Cada camada responde a uma pergunta diferente sobre o mesmo negócio. Raramente uma
              empresa precisa de uma só.
            </p>
          </Reveal>
        </div>

        <ul className="mt-[clamp(2.5rem,5vw,4rem)]">
          {Object.values(layers).map((l, i) => (
            <Reveal
              as="li"
              key={l.id}
              delay={i * 60}
              className="group border-t border-ink-900/12 last:border-b"
            >
              <Link
                href={`/servicos/${l.service}`}
                className="grid items-baseline gap-x-[clamp(1rem,3vw,3rem)] gap-y-2 py-6 md:grid-cols-12"
              >
                <span className="t-index text-gold-ink md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.25rem,2.2vw,1.75rem)] leading-tight text-ink-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-wine-800 md:col-span-4 md:col-start-2">
                  {l.name}
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-ink-500 md:col-span-6 md:col-start-7">
                  {l.scope}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CTASection
        eyebrow="Depois do diagnóstico"
        title={["O mapa é seu.", "A análise é conosco."]}
        text="O diagnóstico mostra o território. Saber o que se aplica ao seu caso exige olhar para o seu caso — e é isso que acontece na primeira conversa."
      />
    </>
  );
}
