"use client";

import { useState } from "react";
import { transparencyPanels } from "@/content/transparency";
import { cn } from "@/lib/utils";
import { Reveal, TextReveal } from "@/components/ui/Reveal";

/**
 * TRANSPARÊNCIA — "Sem promessas vazias."
 *
 * A seção materializa o posicionamento: em vez de afirmar transparência,
 * mostra os quatro quadros que um cliente normalmente só descobre depois —
 * inclusive o que envolve risco e o que não depende da Velmont.
 *
 * Interação: acordeão horizontal no desktop, vertical no mobile. Um painel
 * aberto por vez — a leitura é conduzida, não oferecida em bloco.
 * O conteúdo interno tem largura fixa para não refluir durante a transição.
 */
export function Transparency() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <div className="grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <TextReveal
            as="h2"
            className="t-display text-[clamp(2.25rem,5.4vw,4.5rem)]"
            lines={[<>Sem promessas vazias.</>, <>Inclusive as boas.</>]}
          />
        </div>
        <Reveal delay={140} className="md:col-span-4 md:col-start-9 md:pt-4">
          <p className="t-body text-[0.9375rem] text-cream-200/65">
            Transparência não é uma frase institucional. É dizer, antes de começar, o que será
            feito, o que ainda precisa ser analisado, o que pode dar errado e o que não está sob
            controle de ninguém aqui.
          </p>
        </Reveal>
      </div>

      <div className="mt-[clamp(3rem,6vw,5rem)] flex flex-col gap-px lg:h-[30rem] lg:flex-row">
        {transparencyPanels.map((panel, i) => {
          const active = open === i;
          return (
            <section
              key={panel.id}
              aria-labelledby={`transp-h-${panel.id}`}
              className={cn(
                "group relative overflow-hidden bg-cream-200/[0.055] transition-[flex-grow,background-color] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                active ? "bg-cream-200/[0.1] lg:flex-[3]" : "lg:flex-[1] hover:bg-cream-200/[0.09]",
              )}
            >
              <h3 id={`transp-h-${panel.id}`} className="m-0">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-expanded={active}
                  aria-controls={`transp-p-${panel.id}`}
                  className={cn(
                    "flex w-full items-center gap-4 p-[clamp(1.25rem,2vw,1.75rem)] text-left",
                    // Fechado no desktop: rótulo na vertical, ocupando a faixa inteira.
                    !active && "lg:absolute lg:inset-0 lg:h-full lg:items-end",
                    active && "lg:absolute lg:left-0 lg:top-0 lg:w-auto lg:items-start",
                  )}
                >
                  <span
                    className={cn(
                      "t-index shrink-0 transition-colors duration-500",
                      active ? "text-gold-400" : "text-gold-400/80",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display leading-tight transition-colors duration-500",
                      active
                        ? "text-cream-100 lg:sr-only"
                        : "text-cream-200/65 group-hover:text-cream-100 lg:[writing-mode:vertical-rl] lg:rotate-180",
                      "text-[clamp(1.125rem,1.9vw,1.5rem)]",
                    )}
                  >
                    {panel.label}
                  </span>
                </button>
              </h3>

              <div
                id={`transp-p-${panel.id}`}
                hidden={!active}
                className={cn(
                  "px-[clamp(1.25rem,2vw,1.75rem)] pb-[clamp(1.5rem,2.5vw,2rem)]",
                  "lg:flex lg:h-full lg:flex-col lg:justify-center lg:py-10 lg:pl-[clamp(4.5rem,5vw,5.5rem)] lg:pr-[clamp(1.5rem,3vw,3rem)]",
                )}
              >
                {/* largura fixa: impede o texto de refluir durante a transição */}
                <div className="lg:w-[min(38rem,42vw)]">
                  <p className="t-eyebrow mb-4 hidden text-gold-400/70 lg:block">{panel.label}</p>
                  <p className="t-display max-w-[16em] text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.18] text-cream-100">
                    {panel.headline}
                  </p>
                  <ul className="mt-6 max-w-[44ch] space-y-2.5">
                    {panel.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[0.875rem] leading-relaxed text-cream-200/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-3 shrink-0 bg-gold-400/60"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
