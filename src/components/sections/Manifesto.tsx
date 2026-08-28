import { about } from "@/content/founders";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Strata } from "@/components/ui/Marks";

/**
 * MANIFESTO — origem e propósito, em texto oficial da Velmont.
 * Composição: uma frase de abertura em display, e o texto institucional
 * dividido em duas colunas desalinhadas, como abertura de revista.
 */
export function Manifesto() {
  return (
    <Section id="manifesto" index="01" label="Manifesto" tone="cream">
      <div className="relative">
        <Reveal
          variant="scale"
          className="pointer-events-none absolute -top-10 right-0 hidden w-[14vw] max-w-[200px] text-gold-500/20 lg:block"
        >
          <Strata corner="tr" lines={8} />
        </Reveal>

        <TextReveal
          as="h2"
          className="t-display max-w-[13em] text-[clamp(2.25rem,6vw,5rem)]"
          lines={[
            <>A Velmont nasceu</>,
            <>do inconformismo.</>,
          ]}
        />

        <div className="mt-[clamp(3rem,6vw,5.5rem)] grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-6 md:col-start-1">
            <p className="t-lede text-ink-900">{about.origin}</p>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <p className="t-body text-[0.9375rem] text-ink-700">{about.experience}</p>
          </Reveal>

          <div className="md:col-span-8 md:col-start-4">
            <Reveal delay={80} className="mt-2 border-t border-ink-900/12 pt-10">
              <h3 className="t-eyebrow mb-5 text-gold-ink">Missão</h3>
              <p className="t-body text-[1.0625rem] text-ink-900">{about.mission}</p>
            </Reveal>
            <Reveal delay={160} className="mt-10 border-t border-ink-900/12 pt-10">
              <h3 className="t-eyebrow mb-5 text-gold-ink">Visão</h3>
              <p className="t-body text-[1.0625rem] text-ink-900">{about.vision}</p>
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={100}
          className="mt-[clamp(3.5rem,7vw,6rem)] border-l-2 border-gold-500/50 pl-[clamp(1.25rem,3vw,3rem)] md:ml-[8%] md:max-w-[20em]"
        >
          <p className="t-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] text-wine-800">
            {about.belief}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
