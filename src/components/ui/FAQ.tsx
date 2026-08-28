"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { ValidationNote } from "./ValidationNote";

/**
 * FAQ em acordeão. Cada resposta é um bloco de texto editorial; trechos
 * marcados com [VALIDAR: …] no conteúdo são renderizados como nota de
 * validação visível, nunca como resposta.
 */
function Answer({ text }: { text: string }) {
  const match = text.match(/^\[VALIDAR:\s*([\s\S]*)\]$/);
  if (match) return <ValidationNote>{match[1]}</ValidationNote>;

  const parts = text.split(/(\[VALIDAR:[\s\S]*?\])/g).filter(Boolean);
  return (
    <div className="space-y-4">
      {parts.map((part, i) => {
        const m = part.match(/^\[VALIDAR:\s*([\s\S]*)\]$/);
        return m ? (
          <ValidationNote key={i}>{m[1]}</ValidationNote>
        ) : (
          <p key={i} className="t-body text-[0.9375rem] text-ink-700">
            {part.trim()}
          </p>
        );
      })}
    </div>
  );
}

export function FAQ({ items, title = "Perguntas frequentes" }: { items: { q: string; a: string }[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className="t-display mb-[clamp(2rem,4vw,3rem)] text-[clamp(1.75rem,3.4vw,2.75rem)] text-wine-800">
        {title}
      </h2>
      <dl className="border-t border-ink-900/12">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal as="div" key={i} delay={i * 60} className="border-b border-ink-900/12">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  className="group flex w-full items-start justify-between gap-6 py-[clamp(1.25rem,2vw,1.75rem)] text-left"
                >
                  <span
                    className={cn(
                      "font-display text-[clamp(1.1875rem,2vw,1.5rem)] leading-snug transition-colors duration-400",
                      isOpen ? "text-wine-800" : "text-ink-900 group-hover:text-wine-700",
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 block h-3 w-3 shrink-0"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold-600" />
                    <span
                      className={cn(
                        "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold-600 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen ? "scale-y-0" : "scale-y-100",
                      )}
                    />
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-a-${i}`}
                hidden={!isOpen}
                className="max-w-[62ch] pb-[clamp(1.5rem,2.5vw,2rem)]"
              >
                <Answer text={item.a} />
              </dd>
            </Reveal>
          );
        })}
      </dl>
    </div>
  );
}
