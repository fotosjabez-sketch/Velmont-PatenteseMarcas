"use client";

import { cn } from "@/lib/utils";

export type Choice = { id: string; label: string; hint?: string };

/**
 * Grupo de escolha em composição editorial.
 * Usa radios reais (visualmente ocultos) — navegação por teclado e semântica
 * de formulário sem nenhum JavaScript de acessibilidade.
 */
export function ChoiceGroup({
  name,
  legend,
  options,
  value,
  onChange,
  tone = "paper",
  columns = "auto",
}: {
  name: string;
  legend: string;
  options: Choice[];
  value: string | null;
  onChange: (id: string) => void;
  tone?: "paper" | "wine";
  columns?: "auto" | "grid";
}) {
  const dark = tone === "wine";

  return (
    <fieldset className="border-0 p-0">
      <legend className="sr-only">{legend}</legend>
      <div
        className={cn(
          columns === "grid"
            ? "grid gap-px sm:grid-cols-2 lg:grid-cols-4"
            : "flex flex-wrap gap-px",
        )}
      >
        {options.map((opt) => {
          const checked = value === opt.id;
          return (
            <label
              key={opt.id}
              className={cn(
                "group relative cursor-pointer select-none overflow-hidden outline-offset-2",
                "px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.9rem,1.6vw,1.25rem)]",
                "transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "focus-within:outline focus-within:outline-2 focus-within:outline-gold-500",
                dark
                  ? checked
                    ? "bg-cream-200 text-wine-900"
                    : "bg-cream-200/6 text-cream-200 hover:bg-cream-200/12"
                  : checked
                    ? "bg-wine-800 text-cream-200"
                    : "bg-ink-900/[0.045] text-ink-900 hover:bg-ink-900/[0.08]",
                columns === "auto" && "flex-1 basis-[min(100%,13rem)]",
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt.id}
                checked={checked}
                onChange={() => onChange(opt.id)}
                className="sr-only"
              />
              <span className="relative z-10 block">
                <span
                  className={cn(
                    "block font-display text-[clamp(1.125rem,1.7vw,1.5rem)] leading-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    !checked && "group-hover:translate-x-0.5",
                  )}
                >
                  {opt.label}
                </span>
                {opt.hint && (
                  <span
                    className={cn(
                      "mt-1.5 block text-[0.8125rem] leading-snug transition-opacity duration-500",
                      checked ? "opacity-80" : "opacity-75 group-hover:opacity-95",
                    )}
                  >
                    {opt.hint}
                  </span>
                )}
              </span>
              {/* marcador de seleção: um traço, não um "check" */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-0 left-0 h-[2px] w-full origin-left transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  dark ? "bg-gold-500" : "bg-gold-500",
                  checked ? "scale-x-100" : "scale-x-0",
                )}
              />
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
