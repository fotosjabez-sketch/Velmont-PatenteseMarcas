import Link from "next/link";
import { Ridge, Strata } from "@/components/ui/Marks";
import { Reveal, TextReveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * HERO — "Falta estar no nome dela."
 *
 * Direção: declaração editorial em vinho profundo, composição assimétrica,
 * a crista do logotipo desenhando-se no rodapé do bloco. À direita, o índice
 * da página — o gesto que declara, na primeira tela, que isto é uma publicação
 * e um sistema de orientação, não uma landing page.
 */

const chapters = [
  { n: "01", label: "Manifesto", href: "#manifesto" },
  { n: "02", label: "O que está em jogo", href: "#em-jogo" },
  { n: "03", label: "Descubra o que proteger", href: "#descubra" },
  { n: "04", label: "Serviços", href: "#servicos" },
  { n: "05", label: "Como pensamos", href: "#transparencia" },
  { n: "06", label: "Quem conduz", href: "#sobre" },
  { n: "07", label: "Conteúdos", href: "#conhecimento" },
];

export function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-wine-800 text-cream-200 pt-[var(--header-h)]">
      {/* Campo de luz — o círculo creme da identidade, difuso */}
      <div
        className="lightfield pointer-events-none absolute inset-0 -z-10"
        style={{ "--lf-x": "78%", "--lf-y": "18%", "--lf-strength": "16%" } as React.CSSProperties}
      />
      <div
        className="lightfield pointer-events-none absolute inset-0 -z-10"
        style={{ "--lf-x": "8%", "--lf-y": "92%", "--lf-strength": "10%" } as React.CSSProperties}
      />

      {/* Estratos — camadas, no canto superior direito */}
      <Reveal
        variant="scale"
        delay={700}
        className="pointer-events-none absolute -right-16 top-[8vh] -z-10 hidden w-[30vw] max-w-[460px] text-gold-400/14 lg:block"
      >
        <Strata corner="tr" lines={11} />
      </Reveal>

      <div className="shell flex flex-1 flex-col justify-center py-[clamp(3rem,8vh,7rem)]">
        <div className="grid gap-x-[clamp(1rem,3vw,4rem)] gap-y-12 lg:grid-cols-12">
          {/* Declaração */}
          <div className="lg:col-span-9">
            <Reveal className="mb-[clamp(1.5rem,3vw,2.5rem)] flex items-center gap-4">
              <span className="h-px w-10 bg-gold-400/50" aria-hidden="true" />
              <span className="t-eyebrow text-gold-400">Proteção como estratégia</span>
            </Reveal>

            <TextReveal
              as="h1"
              className="t-display text-[clamp(2.5rem,6.6vw,5.5rem)]"
              lines={[
                <>Tudo o que a sua</>,
                <>empresa criou já vale.</>,
                <>
                  Falta{" "}
                  <em className="font-normal italic text-cream-300">estar no nome dela.</em>
                </>,
              ]}
              stagger={110}
              delay={180}
            />

            <Reveal
              delay={620}
              className="mt-[clamp(2rem,4vw,3rem)] max-w-[54ch] text-[clamp(1rem,1.05vw,1.1875rem)] leading-[1.68] text-cream-200/72"
            >
              <p>
                Marca, invenção, design, software, conteúdo, método. A Velmont trata o que a sua
                empresa criou pelo que isso realmente é — patrimônio. E patrimônio exige estratégia,
                segurança jurídica e gestão responsável.
              </p>
            </Reveal>

            <Reveal delay={760} className="mt-[clamp(2.25rem,4vw,3.25rem)] flex flex-wrap gap-4">
              <ButtonLink href="#descubra" variant="cream" magnetic>
                Descubra o que proteger
              </ButtonLink>
              <ButtonLink href="/servicos" variant="outline" className="text-cream-200">
                Ver serviços
              </ButtonLink>
            </Reveal>
          </div>

          {/* Índice da página */}
          <nav
            aria-label="Índice desta página"
            className="hidden lg:col-span-3 lg:col-start-10 lg:block lg:pt-4"
          >
            <Reveal delay={900}>
              <h2 className="t-eyebrow mb-6 text-cream-200/40">Nesta página</h2>
              <ul className="space-y-0">
                {chapters.map((c) => (
                  <li key={c.n} className="border-t border-cream-200/12 last:border-b">
                    <Link
                      href={c.href}
                      className="group flex items-baseline gap-4 py-3 transition-colors duration-300"
                    >
                      <span className="t-index text-cream-200/35 transition-colors duration-300 group-hover:text-gold-400">
                        {c.n}
                      </span>
                      <span className="text-[0.9375rem] text-cream-200/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-cream-100">
                        {c.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-cream-200/35">
                Mais de {site.experienceYears} anos de experiência em propriedade industrial e
                intelectual, gestão organizacional e jurídica de negócios.
              </p>
            </Reveal>
          </nav>
        </div>
      </div>

      {/* Crista — a montanha do logotipo, aberta em linha, desenhando-se */}
      <Reveal
        variant="up"
        delay={400}
        className="pointer-events-none relative mt-auto w-full"
        distance={0}
      >
        <Ridge
          animated
          strokeWidth={1}
          className="h-[clamp(90px,15vw,220px)] w-full text-cream-300/22"
        />
      </Reveal>

      <div className="shell relative flex items-center justify-between gap-6 pb-8">
        <span className="t-index text-cream-200/30">
          <span className="sm:hidden">Curitiba / PR</span>
          <span className="hidden sm:inline">Curitiba / PR — Atendimento em todo o Brasil</span>
        </span>
        <a
          href="#manifesto"
          className="group flex items-center gap-3 text-cream-200/40 transition-colors duration-300 hover:text-cream-200/80"
        >
          <span className="t-index">Continue</span>
          <span
            aria-hidden="true"
            className="block h-8 w-px origin-top bg-current transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-125"
          />
        </a>
      </div>
    </section>
  );
}
