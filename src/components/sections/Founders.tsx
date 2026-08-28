import Image from "next/image";
import { founders } from "@/content/founders";
import { Reveal } from "@/components/ui/Reveal";
import { Strata } from "@/components/ui/Marks";
import { cn } from "@/lib/utils";

/**
 * QUEM CONDUZ
 *
 * Não são dois cards de equipe. Cada fundadora ocupa uma faixa completa, com
 * o retrato em círculo — a forma que a identidade oficial usa para conteúdo
 * humano — e a carta que ela mesma assinou no material institucional.
 * A composição alterna o lado, criando ritmo de dupla página.
 */
export function Founders({ full = false }: { full?: boolean }) {
  return (
    <div className="space-y-[clamp(4rem,8vw,7rem)]">
      {founders.map((f, i) => {
        const flip = i % 2 === 1;
        return (
          <article
            key={f.name}
            className="grid items-start gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-8 md:grid-cols-12"
          >
            {/* Retrato */}
            <Reveal
              variant="scale"
              className={cn(
                "relative md:col-span-4",
                flip ? "md:order-2 md:col-start-9" : "md:col-start-1",
              )}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-gold-500/40 ring-offset-4 ring-offset-cream-50">
                <Image
                  src={f.photo}
                  alt={`Retrato de ${f.name}, ${f.role} da Velmont`}
                  fill
                  sizes="(max-width: 768px) 80vw, 30vw"
                  className="object-cover"
                />
              </div>
              <Strata
                corner={flip ? "bl" : "br"}
                lines={7}
                className={cn(
                  "absolute -bottom-4 w-[26%] text-gold-500/40",
                  flip ? "-left-4" : "-right-4",
                )}
              />
            </Reveal>

            {/* Carta */}
            <div
              className={cn(
                "md:col-span-7",
                flip ? "md:order-1 md:col-start-1" : "md:col-start-6",
              )}
            >
              <Reveal>
                <p className="t-eyebrow text-gold-ink">{f.role}</p>
                <h3 className="t-display mt-4 text-[clamp(1.875rem,3.6vw,3rem)] text-wine-800">
                  {f.name}
                </h3>
              </Reveal>

              <Reveal delay={100}>
                <blockquote className="mt-8 border-l-2 border-gold-500/50 pl-6">
                  <p className="t-display text-[clamp(1.375rem,2.4vw,1.875rem)] leading-[1.2] text-ink-900">
                    “{f.pull}”
                  </p>
                </blockquote>
              </Reveal>

              <Reveal delay={160} className="mt-8 max-w-[62ch] space-y-4">
                {(full ? f.letter : f.letter.slice(0, 3)).map((par, k) => (
                  <p key={k} className="t-body text-[0.9375rem] text-ink-700">
                    {par}
                  </p>
                ))}
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 max-w-[58ch] border-t border-ink-900/12 pt-6 text-[0.8125rem] leading-relaxed text-ink-500">
                  {f.credentials}
                </p>
              </Reveal>
            </div>
          </article>
        );
      })}
    </div>
  );
}
