import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ExamTable } from "@/components/sections/ExamTable";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { Transparency } from "@/components/sections/Transparency";
import { Journey } from "@/components/sections/Journey";
import { Founders } from "@/components/sections/Founders";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { ProtectionExplorer } from "@/components/diagnostic/ProtectionExplorer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Velmont — Proteção como estratégia | Marcas e Patentes",
  description:
    "Marca, invenção, design, software, conteúdo. A Velmont trata o que a sua empresa criou pelo que isso é: patrimônio. Propriedade industrial e intelectual, estruturação de empresas e naming.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const latest = articles.slice(0, 4);

  return (
    <>
      <Hero />
      <Manifesto />
      <ExamTable />

      {/* 03 — Experiência interativa */}
      <Section id="descubra" index="03" label="Descubra" tone="paper">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[46ch]">
          <Reveal>
            <span className="t-eyebrow text-gold-ink">Orientação</span>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <p className="t-lede text-ink-700">
              Antes de proteger, é preciso saber o que se tem. Complete a frase abaixo e veja quais
              camadas entram na conversa — e quais perguntas você precisa conseguir responder.
            </p>
          </Reveal>
        </div>

        <ProtectionExplorer tone="paper" />

        <Reveal className="mt-10">
          <Link
            href="/diagnostico"
            className="group inline-flex items-baseline gap-3 text-[0.8125rem] uppercase tracking-[0.16em] text-ink-500 transition-colors duration-300 hover:text-wine-800"
          >
            Fazer o diagnóstico completo
            <span
              aria-hidden="true"
              className="h-px w-8 bg-current transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12"
            />
          </Link>
        </Reveal>
      </Section>

      {/* 04 — Serviços */}
      <Section id="servicos" index="04" label="Serviços" tone="cream">
        <SectionHeading
          eyebrow="Quatro frentes"
          title={
            <>
              O que a Velmont
              <br />
              faz, exatamente.
            </>
          }
          lede="Cada frente responde a uma pergunta diferente do negócio. Selecione uma para ver o que ela cobre."
          align="split"
        />
        <div className="mt-[clamp(3rem,6vw,5rem)]">
          <ServiceIndex />
        </div>
      </Section>

      {/* 05 — Transparência */}
      <Section id="transparencia" index="05" label="Como pensamos" tone="wine">
        <Transparency />
        <div className="mt-[clamp(4rem,8vw,7rem)]">
          <Journey />
        </div>
      </Section>

      {/* 06 — Sobre */}
      <Section id="sobre" index="06" label="Quem conduz" tone="paper">
        <SectionHeading
          eyebrow="Fundadoras"
          title={
            <>
              Existe gente
              <br />
              por trás da estratégia.
            </>
          }
          lede="A Velmont foi fundada por duas profissionais que decidiram fazer diferente aquilo que viram sendo feito por anos. As palavras abaixo são delas."
          align="split"
        />
        <div className="mt-[clamp(3.5rem,7vw,6rem)]">
          <Founders />
        </div>
        <Reveal className="mt-14">
          <ButtonLink href="/sobre" variant="outline" className="text-wine-800">
            Conhecer a Velmont
          </ButtonLink>
        </Reveal>
      </Section>

      {/* 07 — Experiências */}
      <Section index="07" label="Experiências" tone="cream">
        <SectionHeading
          eyebrow="Experiências reais com a Velmont"
          title={
            <>
              O que dizem
              <br />
              quem já passou por aqui.
            </>
          }
          lede="Depoimentos reproduzidos do material institucional da Velmont, sem edição."
          align="split"
        />
        <div className="mt-[clamp(3rem,6vw,5rem)]">
          <Testimonials />
        </div>
      </Section>

      {/* 08 — Conhecimento */}
      <Section id="conhecimento" index="08" label="Conteúdos" tone="paper">
        <SectionHeading
          eyebrow="Biblioteca Velmont"
          title={
            <>
              Entender primeiro.
              <br />
              Decidir depois.
            </>
          }
          lede="A parte do trabalho que costuma ficar de fora da conversa comercial: explicar como as coisas funcionam."
          align="split"
        />

        <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-[clamp(2.5rem,5vw,4rem)] md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ArticleCard article={latest[0]} size="lg" />
          </Reveal>
          <div className="md:col-span-4 md:col-start-9">
            <ul className="space-y-8">
              {latest.slice(1).map((a, i) => (
                <Reveal
                  as="li"
                  key={a.slug}
                  delay={i * 90}
                  className="border-t border-ink-900/12 pt-8 first:border-t-0 first:pt-0"
                >
                  <ArticleCard article={a} size="sm" showExcerpt={false} />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mt-14">
          <ButtonLink href="/blog" variant="outline" className="text-wine-800">
            Ver todos os conteúdos
          </ButtonLink>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
