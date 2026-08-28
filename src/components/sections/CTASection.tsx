import { site, whatsappUrl } from "@/content/site";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Ridge } from "@/components/ui/Marks";

/**
 * CTA FINAL — o convite fecha a narrativa com a mesma promessa que a abre:
 * clareza antes de contrato.
 */
export function CTASection({
  eyebrow = "Próximo passo",
  title = ["Comece pela conversa", "em que nada é vendido."],
  text = "A primeira conversa serve para entender o que você tem, o que está exposto e o que precisa ser analisado. Se não houver o que fazer agora, você vai sair sabendo disso também.",
}: {
  eyebrow?: string;
  title?: string[];
  text?: string;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-wine-800 text-cream-200">
      <div
        className="lightfield pointer-events-none absolute inset-0 -z-10"
        style={{ "--lf-x": "82%", "--lf-y": "24%", "--lf-strength": "15%" } as React.CSSProperties}
      />
      <Reveal className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 opacity-60">
        <Ridge animated strokeWidth={1} className="h-[12vw] w-full text-cream-300/12" />
      </Reveal>

      <div className="shell py-[clamp(4.5rem,9vw,9rem)]">
        <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-gold-400/50" aria-hidden="true" />
              <span className="t-eyebrow text-gold-400">{eyebrow}</span>
            </Reveal>
            <TextReveal
              as="h2"
              className="t-display text-[clamp(2.25rem,5.6vw,4.75rem)]"
              lines={title.map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            />
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-4">
            <Reveal delay={120}>
              <p className="t-body text-[0.9375rem] text-cream-200/70">{text}</p>
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-col gap-3">
              <ButtonLink href="/contato" variant="cream" magnetic>
                Falar com a Velmont
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl("Olá! Vim pelo site da Velmont e gostaria de conversar.")}
                variant="outline"
                className="text-cream-200"
              >
                WhatsApp {site.contact.phone}
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
