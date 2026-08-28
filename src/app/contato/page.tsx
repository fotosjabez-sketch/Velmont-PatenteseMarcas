import type { Metadata } from "next";
import Image from "next/image";
import { site, whatsappUrl } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { Strata } from "@/components/ui/Marks";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a Velmont. ${site.contact.address.city}/${site.contact.address.state} — atendimento presencial ou digital. ${site.contact.phone} · ${site.contact.email}`,
  alternates: { canonical: "/contato" },
};

const channels = [
  {
    label: "WhatsApp",
    value: site.contact.phone,
    href: whatsappUrl("Olá! Vim pelo site da Velmont e gostaria de conversar."),
    note: "O caminho mais direto.",
  },
  {
    label: "E-mail",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Para documentos e materiais.",
  },
  {
    label: "Instagram",
    value: site.contact.instagram,
    href: site.contact.instagramUrl,
    note: "Conteúdo e bastidores.",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        crumbs={[{ label: "Contato" }]}
        titleLines={[<>Falar com a Velmont</>, <>não custa nada.</>]}
        lede={
          <p>
            A primeira conversa serve para entender o que você tem e o que precisa ser analisado. Se
            não houver o que fazer agora, você vai sair sabendo disso também.
          </p>
        }
      />

      <Section tone="paper" bleed className="py-[clamp(3.5rem,7vw,6rem)]">
        <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-16 lg:grid-cols-12">
          {/* Canais diretos */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="t-eyebrow mb-7 text-gold-ink">Canais diretos</h2>
            </Reveal>
            <ul>
              {channels.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.label}
                  delay={i * 80}
                  className="border-t border-ink-900/12 last:border-b"
                >
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block py-6"
                  >
                    <span className="t-eyebrow block text-ink-500">{c.label}</span>
                    <span className="mt-2 block font-display text-[clamp(1.25rem,2vw,1.625rem)] text-ink-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-wine-800">
                      {c.value}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-ink-500">{c.note}</span>
                  </a>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200} className="relative mt-12 overflow-hidden bg-wine-800 p-[clamp(1.5rem,3vw,2rem)] text-cream-200">
              <Strata
                corner="br"
                lines={8}
                className="pointer-events-none absolute -bottom-4 -right-4 w-24 text-gold-400/20"
              />
              <h3 className="t-eyebrow relative text-gold-400">Onde estamos</h3>
              <address className="relative mt-5 not-italic text-[0.9375rem] leading-relaxed text-cream-200/78">
                {site.contact.address.street}
                <br />
                {site.contact.address.building}
                <br />
                {site.contact.address.district} — {site.contact.address.city}/
                {site.contact.address.state}
                <br />
                CEP {site.contact.address.zip}
              </address>
              <p className="relative mt-6 border-t border-cream-200/15 pt-5 text-[0.8125rem] leading-relaxed text-cream-200/60">
                Os atendimentos podem acontecer de forma presencial ou digital, sempre com
                organização, segurança e acompanhamento individualizado.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={260} className="mt-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/office/fachada.jpg"
                  alt="Fachada do Edifício Corporativo Iguaçu 2820, em Curitiba, onde a Velmont realiza atendimentos presenciais"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h2 className="t-display text-[clamp(1.875rem,3.6vw,3rem)] text-ink-900">
                Conte o que está acontecendo
              </h2>
              <p className="mt-5 max-w-[54ch] text-[0.9375rem] leading-relaxed text-ink-500">
                Preencha o que fizer sentido. Os dois primeiros campos bastam para começar.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-[clamp(2.5rem,4vw,3.5rem)]">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
