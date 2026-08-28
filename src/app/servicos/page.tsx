import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Strata } from "@/components/ui/Marks";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Quatro frentes: consultoria em estruturação de empresas, propriedade industrial, propriedade intelectual e naming & identidade visual.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        crumbs={[{ label: "Serviços" }]}
        titleLines={[<>Quatro frentes.</>, <>Uma mesma pergunta:</>, <>o que é seu?</>]}
        lede={
          <p>
            Cada frente responde a uma parte diferente do patrimônio de uma empresa — e as quatro
            conversam entre si. Um nome sem estrutura é frágil; uma estrutura sem titularidade
            definida também.
          </p>
        }
      />

      <Section tone="paper" bleed className="py-[clamp(3.5rem,7vw,6rem)]">
        <ul>
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={i * 80}
              className="group relative border-t border-ink-900/12 last:border-b"
            >
              <Link href={`/servicos/${s.slug}`} className="block py-[clamp(2rem,4vw,3.5rem)]">
                <div className="grid items-start gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-5 md:grid-cols-12">
                  <span className="t-index text-gold-ink md:col-span-1">{s.index}</span>

                  <div className="md:col-span-5 md:col-start-2">
                    <h2 className="t-display text-[clamp(1.625rem,3.4vw,2.75rem)] leading-[1.06] text-ink-900 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:text-wine-800">
                      {s.title}
                    </h2>
                    <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-500">
                      {s.summary}
                    </p>
                  </div>

                  <div className="md:col-span-5 md:col-start-8">
                    <p className="t-display border-l-2 border-gold-500/50 pl-5 text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-[1.35] text-wine-700">
                      {s.quote}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                      {s.groups.map((g) => (
                        <li
                          key={g.title}
                          className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-500"
                        >
                          {g.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
              <Strata
                corner="br"
                lines={7}
                className="pointer-events-none absolute -bottom-2 right-0 w-24 text-gold-ink/0 transition-colors duration-700 group-hover:text-gold-ink/20"
              />
            </Reveal>
          ))}
        </ul>
      </Section>

      <CTASection
        eyebrow="Não sabe por onde começar"
        title={["Faça o diagnóstico", "antes da reunião."]}
        text="Três perguntas para mapear o que você tem, o que está exposto e quais camadas de proteção entram na conversa. Leva menos de um minuto."
      />
    </>
  );
}
