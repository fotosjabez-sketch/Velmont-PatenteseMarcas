"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

/**
 * SERVICE INDEX
 *
 * Arquitetura editorial: um índice fixo à esquerda e o conteúdo do serviço
 * selecionado à direita. Sem grade de cards. A troca é uma transição de
 * conteúdo, como virar a página de um sumário.
 *
 * Acessibilidade: padrão tabs/tabpanel com navegação por setas.
 */
export function ServiceIndex() {
  const [active, setActive] = useState(0);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = services.length - 1;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`svc-tab-${next}`)?.focus();
  };

  return (
    <div className="grid gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-10 lg:grid-cols-12">
      {/* Índice */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Serviços da Velmont"
        onKeyDown={onKeyDown}
        className="lg:col-span-5"
      >
        {services.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.slug}
              id={`svc-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`svc-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "group block w-full border-t border-ink-900/12 py-[clamp(1.25rem,2.4vw,2rem)] text-left last:border-b",
                "transition-colors duration-500",
              )}
            >
              <span className="flex items-baseline gap-4">
                <span
                  className={cn(
                    "t-index transition-colors duration-500",
                    selected ? "text-gold-ink" : "text-ink-500",
                  )}
                >
                  {s.index}
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block font-display text-[clamp(1.375rem,2.6vw,2.125rem)] leading-[1.08] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      selected
                        ? "text-wine-800"
                        : "text-ink-900/62 group-hover:translate-x-1 group-hover:text-ink-900/85",
                    )}
                  >
                    {s.title}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block overflow-hidden text-[0.875rem] leading-snug text-ink-500 transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      selected ? "max-h-24 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {s.summary}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Painel */}
      <div className="lg:col-span-6 lg:col-start-7">
        {services.map((s, i) => (
          <div
            key={s.slug}
            id={`svc-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`svc-tab-${i}`}
            hidden={i !== active}
            tabIndex={0}
          >
            <div key={active} className="animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
              <p className="t-display border-l-2 border-gold-500/60 pl-6 text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.25] text-wine-800">
                {s.quote}
              </p>

              <dl className="mt-[clamp(2rem,4vw,3rem)] space-y-8">
                {s.groups.map((g) => (
                  <div key={g.title}>
                    <dt className="t-eyebrow mb-4 border-b border-ink-900/10 pb-2.5 text-ink-500">
                      {g.title}
                    </dt>
                    <dd>
                      <ul className="space-y-2.5">
                        {g.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-ink-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-px w-3 shrink-0 bg-gold-600/60"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-[clamp(2rem,4vw,2.75rem)]">
                <ButtonLink href={`/servicos/${s.slug}`} variant="outline" className="text-wine-800">
                  Entender {s.shortTitle.toLowerCase()}
                </ButtonLink>
              </div>
            </div>
          </div>
        ))}

        <p className="mt-10 text-[0.8125rem] text-ink-500">
          Quer ver tudo lado a lado?{" "}
          <Link
            href="/servicos"
            className="underline decoration-ink-300 underline-offset-4 transition-colors hover:text-wine-800"
          >
            Ver todos os serviços
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
