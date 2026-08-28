import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/content/founders";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Founders } from "@/components/sections/Founders";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Strata } from "@/components/ui/Marks";

export const metadata: Metadata = {
  title: "Sobre a Velmont",
  description:
    "A Velmont nasceu do inconformismo com um mercado onde grandes ideias nem sempre recebem a proteção que merecem. Conheça a história, a missão e as fundadoras.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        crumbs={[{ label: "Sobre" }]}
        titleLines={[<>Nasceu de uma</>, <>inconformidade.</>]}
        lede={<p>{about.origin}</p>}
      />

      {/* Princípios institucionais */}
      <Section tone="paper" index="01" label="Propósito">
        <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="t-display max-w-[14em] text-[clamp(1.625rem,3.2vw,2.5rem)] leading-[1.18] text-wine-800">
              {about.belief}
            </p>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="t-lede text-ink-900">{about.experience}</p>
            </Reveal>

            <dl className="mt-12 space-y-10">
              <Reveal delay={80} className="border-t border-ink-900/12 pt-8">
                <dt className="t-eyebrow mb-4 text-gold-ink">Missão</dt>
                <dd className="t-body text-[1.0625rem] text-ink-700">{about.mission}</dd>
              </Reveal>
              <Reveal delay={140} className="border-t border-ink-900/12 pt-8">
                <dt className="t-eyebrow mb-4 text-gold-ink">Visão</dt>
                <dd className="t-body text-[1.0625rem] text-ink-700">{about.vision}</dd>
              </Reveal>
              <Reveal delay={200} className="border-t border-ink-900/12 pt-8">
                <dt className="t-eyebrow mb-4 text-gold-ink">Valores declarados</dt>
                <dd className="t-body text-[1.0625rem] text-ink-700">
                  Honestidade, respeito e compromisso com o crescimento — os três termos que o
                  material institucional da Velmont usa para descrever as relações que a empresa
                  constrói.
                </dd>
              </Reveal>
            </dl>
          </div>
        </div>
      </Section>

      {/* Fundadoras — cartas completas */}
      <Section tone="cream" index="02" label="Fundadoras">
        <Reveal>
          <h2 className="t-display max-w-[13em] text-[clamp(1.875rem,4vw,3.25rem)] text-ink-900">
            Duas profissionais decidiram fazer diferente.
          </h2>
          <p className="mt-6 max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink-500">
            Os textos abaixo são assinados por elas no material institucional da Velmont e estão
            reproduzidos na íntegra.
          </p>
        </Reveal>
        <div className="mt-[clamp(3.5rem,7vw,6rem)]">
          <Founders full />
        </div>
      </Section>

      {/* Atendimento e ambiente */}
      <Section tone="paper" index="03" label="Atendimento">
        <div className="grid gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="t-display text-[clamp(1.875rem,3.6vw,3rem)] text-ink-900">
                Um atendimento que se adapta ao seu negócio
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-8 space-y-5">
              <p className="t-body text-[0.9375rem] text-ink-700">
                Os atendimentos podem acontecer de forma presencial ou digital, sempre com
                organização, segurança e acompanhamento individualizado.
              </p>
              <p className="t-body text-[0.9375rem] text-ink-700">
                Para reuniões estratégicas, encontros corporativos e atendimentos presenciais, a
                Velmont conta com ambientes cuidadosamente selecionados, confortáveis e adequados
                para proporcionar uma experiência profissional e acolhedora.
              </p>
            </Reveal>
            <Reveal delay={160} className="relative mt-10 border-l-2 border-gold-500/60 pl-6">
              <p className="t-display text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.25] text-wine-800">
                Mais flexibilidade para atender. Mais proximidade para construir. Mais estratégia
                para transformar.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10">
              <p className="t-eyebrow mb-3 text-gold-ink">Endereço</p>
              <address className="not-italic text-[0.9375rem] leading-relaxed text-ink-700">
                {site.contact.address.street}, {site.contact.address.building}
                <br />
                {site.contact.address.district} — {site.contact.address.city}/
                {site.contact.address.state}
                <br />
                CEP {site.contact.address.zip}
              </address>
            </Reveal>
          </div>

          {/* Mosaico circular — a forma que a identidade usa para fotografia */}
          <div className="relative md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { src: "/office/fachada.jpg", alt: "Fachada do Edifício Corporativo Iguaçu 2820, onde a Velmont atende em Curitiba" },
                { src: "/office/edificio.jpg", alt: "Vista do edifício na Avenida Iguaçu, em Curitiba" },
                { src: "/office/lounge.jpg", alt: "Lounge de convivência do edifício corporativo" },
                { src: "/office/sala-reuniao.jpg", alt: "Sala de reunião utilizada para atendimentos presenciais" },
              ].map((img, i) => (
                <Reveal
                  key={img.src}
                  variant="scale"
                  delay={i * 90}
                  className={i % 2 === 1 ? "mt-8 sm:mt-12" : ""}
                >
                  <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-gold-500/30 ring-offset-4 ring-offset-cream-50">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <Strata
              corner="bl"
              lines={8}
              className="pointer-events-none absolute -bottom-6 -left-6 hidden w-24 text-gold-ink/25 lg:block"
            />
          </div>
        </div>
      </Section>

      {/* Parceiros — estrutura pronta, sem inventar nomes */}
      <Section tone="cream" index="04" label="Parceiros">
        <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="t-display text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink-900">
              Empresas que a Velmont acompanha
            </h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5 md:col-start-8 md:pt-3">
            <p className="t-body text-[0.9375rem] text-ink-500">
              A apresentação institucional da Velmont lista uma carteira de parceiros. Esta área
              está preparada para recebê-los assim que a lista e as autorizações de uso de marca
              forem confirmadas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10 border border-dashed border-gold-500/50 bg-gold-500/[0.05] p-[clamp(1.5rem,3vw,2.5rem)]">
          <p className="t-eyebrow mb-3 text-gold-ink">Conteúdo a validar</p>
          <p className="max-w-[64ch] text-[0.9375rem] leading-relaxed text-ink-700">
            Nomes e logotipos de parceiros não foram incluídos porque envolvem marcas de terceiros:
            publicá-los exige a lista oficial e a autorização de cada empresa. A grade abaixo mostra
            o espaço reservado.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <li
                key={i}
                className="flex aspect-[3/2] items-center justify-center bg-ink-900/[0.04] text-[0.625rem] uppercase tracking-[0.16em] text-ink-500"
              >
                {String(i + 1).padStart(2, "0")}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Experiências */}
      <Section tone="paper" index="05" label="Experiências">
        <Reveal>
          <h2 className="t-display max-w-[13em] text-[clamp(1.875rem,4vw,3.25rem)] text-ink-900">
            Experiências reais com a Velmont
          </h2>
          <p className="mt-6 max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink-500">
            Reproduzidas do material institucional, sem edição. A autoria não é identificada no
            material de origem.
          </p>
        </Reveal>
        <div className="mt-[clamp(3rem,6vw,5rem)]">
          <Testimonials />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
