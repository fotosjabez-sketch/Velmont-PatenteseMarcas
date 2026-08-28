import { testimonials } from "@/content/testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * EXPERIÊNCIAS REAIS COM A VELMONT
 *
 * Depoimentos reproduzidos do material oficial (p.10). A autoria não é
 * identificada no material — por isso não há nomes, cargos ou empresas aqui.
 * Nenhum depoimento foi criado, editado ou atribuído.
 *
 * Composição: mural tipográfico assimétrico. As falas mais longas ocupam mais
 * colunas; as curtas funcionam como marcações. Sem carrossel, sem card com
 * avatar genérico.
 */

/** Distribuição em colunas — decidida por peso do texto, como em diagramação. */
const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5 md:col-start-2",
  "md:col-span-5",
  "md:col-span-4 md:col-start-3",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-5 md:col-start-6",
];

function Stars() {
  return (
    <span role="img" className="flex gap-0.5" aria-label="Avaliação de cinco estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-gold-500" aria-hidden="true">
          <path d="M6 0l1.6 3.9L12 4.3l-3.2 2.9.9 4.3L6 9.3 2.3 11.5l.9-4.3L0 4.3l4.4-.4z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-x-[clamp(1rem,2.5vw,2.5rem)] gap-y-[clamp(2rem,4vw,3.5rem)] md:grid-cols-12">
      {testimonials.map((t, i) => (
        <Reveal
          as="figure"
          key={i}
          delay={(i % 3) * 90}
          className={cn("m-0", spans[i] ?? "md:col-span-5")}
        >
          <div className="flex items-center gap-3">
            {t.rated && <Stars />}
            <figcaption className="t-index text-ink-500">{t.source}</figcaption>
          </div>
          <blockquote className="mt-4">
            <p
              className={cn(
                "t-display hang-quote text-ink-900",
                t.quote.length > 120
                  ? "text-[clamp(1.125rem,1.7vw,1.375rem)] leading-[1.4]"
                  : "text-[clamp(1.375rem,2.4vw,2rem)] leading-[1.22]",
              )}
            >
              “{t.quote}”
            </p>
          </blockquote>
        </Reveal>
      ))}
    </div>
  );
}
