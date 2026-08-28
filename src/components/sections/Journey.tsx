import { journey } from "@/content/transparency";
import { Reveal } from "@/components/ui/Reveal";

/**
 * COMO O TRABALHO ACONTECE
 *
 * NOTA EDITORIAL: esta é a estrutura de comunicação do site. O material
 * oficial da Velmont não declara uma metodologia nomeada — ver
 * src/content/transparency.ts. Sujeita a validação.
 *
 * Composição: cinco momentos em faixa horizontal, ligados por uma linha que
 * ascende — a crista traduzida em progressão.
 */
export function Journey() {
  return (
    <div>
      <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[48ch]">
        <h3 className="t-display text-[clamp(1.75rem,3.4vw,2.75rem)] text-cream-100">
          Como o trabalho acontece
        </h3>
        <p className="t-body mt-5 text-[0.9375rem] text-cream-200/60">
          Cada etapa existe para produzir uma decisão — e cada decisão é explicada antes de ser
          tomada.
        </p>
      </Reveal>

      <ol className="relative grid gap-px sm:grid-cols-2 lg:grid-cols-5">
        {journey.map((step, i) => (
          <Reveal
            as="li"
            key={step.step}
            delay={i * 80}
            className="group relative bg-cream-200/[0.05] p-[clamp(1.25rem,2vw,1.75rem)] transition-colors duration-500 hover:bg-cream-200/[0.09]"
          >
            {/* linha ascendente: cada etapa sobe um degrau */}
            <span
              aria-hidden="true"
              className="mb-6 block h-px w-full bg-gold-400/35"
              style={{ transform: `translateY(${(journey.length - 1 - i) * 4}px)` }}
            />
            <span className="t-index block text-gold-400/85">{step.step}</span>
            <h4 className="mt-3 font-display text-[1.5rem] leading-none text-cream-100">
              {step.title}
            </h4>
            <p className="mt-4 text-[0.8125rem] leading-relaxed text-cream-200/60">{step.text}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-8">
        <p className="max-w-[64ch] text-[0.75rem] leading-relaxed text-cream-200/35">
          Estrutura de comunicação do site. As etapas de cada projeto são definidas caso a caso e
          apresentadas ao cliente antes do início do trabalho.
        </p>
      </Reveal>
    </div>
  );
}
