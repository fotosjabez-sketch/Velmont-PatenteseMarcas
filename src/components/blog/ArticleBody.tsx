import type { Block } from "@/content/articles/types";
import { ValidationNote } from "@/components/ui/ValidationNote";
import { Reveal } from "@/components/ui/Reveal";
import { slugifyHeading } from "@/lib/utils";

/**
 * Renderizador editorial dos blocos de artigo.
 * A largura de leitura é controlada aqui (uma medida só, ~68 caracteres),
 * e os blocos de destaque sangram para fora dela — ritmo de publicação.
 */
export function ArticleBody({ body }: { body: Block[] }) {
  return (
    <div className="space-y-7">
      {body.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <Reveal key={i} className="pt-[clamp(1.5rem,3vw,2.5rem)]">
                <h2
                  id={slugifyHeading(block.text)}
                  className="t-display scroll-mt-32 text-[clamp(1.625rem,3vw,2.375rem)] leading-[1.12] text-wine-800"
                >
                  {block.text}
                </h2>
              </Reveal>
            );

          case "h3":
            return (
              <Reveal key={i} className="pt-4">
                <h3
                  id={slugifyHeading(block.text)}
                  className="scroll-mt-32 font-display text-[clamp(1.25rem,2vw,1.625rem)] text-ink-900"
                >
                  {block.text}
                </h3>
              </Reveal>
            );

          case "p":
            return (
              <p key={i} className="t-body text-[1.0625rem] text-ink-700">
                {block.text}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-3 py-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-4 text-[1.0625rem] leading-[1.7] text-ink-700">
                    <span aria-hidden="true" className="mt-3.5 h-px w-4 shrink-0 bg-gold-600/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="space-y-3 py-2">
                {block.items.map((item, k) => (
                  <li key={item} className="flex gap-4 text-[1.0625rem] leading-[1.7] text-ink-700">
                    <span className="t-index mt-1.5 shrink-0 text-gold-ink">
                      {String(k + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <Reveal key={i} className="py-[clamp(1.5rem,3vw,2.5rem)] lg:-mx-[clamp(0rem,4vw,4rem)]">
                <figure className="border-l-2 border-gold-500 pl-[clamp(1.25rem,3vw,2.5rem)]">
                  <blockquote>
                    <p className="t-display hang-quote text-[clamp(1.5rem,2.8vw,2.125rem)] leading-[1.22] text-wine-800">
                      “{block.text}”
                    </p>
                  </blockquote>
                  {block.cite && (
                    <figcaption className="t-eyebrow mt-5 text-ink-500">{block.cite}</figcaption>
                  )}
                </figure>
              </Reveal>
            );

          case "callout":
            return (
              <Reveal key={i} className="py-[clamp(1rem,2vw,1.75rem)]">
                <aside className="border-t-2 border-wine-800 bg-cream-100 p-[clamp(1.25rem,2.5vw,2rem)]">
                  <h3 className="t-eyebrow mb-3 text-wine-700">{block.title}</h3>
                  <p className="t-body text-[0.9375rem] text-ink-700">{block.text}</p>
                </aside>
              </Reveal>
            );

          case "questions":
            return (
              <Reveal key={i} className="py-[clamp(1rem,2vw,1.75rem)]">
                <aside className="bg-wine-800 p-[clamp(1.5rem,3vw,2.25rem)] text-cream-200">
                  <h3 className="t-eyebrow mb-6 text-gold-400">{block.title}</h3>
                  <ul className="space-y-4">
                    {block.items.map((q, k) => (
                      <li key={q} className="flex gap-4">
                        <span className="t-index mt-1 shrink-0 text-gold-400/60">
                          {String(k + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.9375rem] leading-relaxed text-cream-200/80">{q}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>
            );

          case "todo":
            return (
              <div key={i} className="py-[clamp(0.75rem,1.5vw,1.25rem)]">
                <ValidationNote>{block.text}</ValidationNote>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
