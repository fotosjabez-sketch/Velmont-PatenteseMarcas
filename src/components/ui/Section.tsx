import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { IndexMark } from "./Marks";

type Tone = "paper" | "cream" | "wine" | "deep";

const tones: Record<Tone, string> = {
  paper: "bg-cream-50 text-ink-900",
  cream: "bg-cream-100 text-ink-900",
  wine: "bg-wine-800 text-cream-200",
  deep: "bg-wine-950 text-cream-200",
};

/**
 * Seção com trilho editorial à esquerda.
 * O trilho carrega numeração e rótulo — é a assinatura estrutural do site e
 * substitui o título centralizado convencional.
 */
export function Section({
  children,
  id,
  index,
  label,
  tone = "paper",
  className,
  contentClassName,
  bleed = false,
}: {
  children: ReactNode;
  id?: string;
  index?: string;
  label?: string;
  tone?: Tone;
  className?: string;
  contentClassName?: string;
  /** true remove o padding vertical padrão (para seções que controlam o próprio ritmo). */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate",
        tones[tone],
        !bleed && "py-[clamp(4.5rem,9vw,9rem)]",
        className,
      )}
    >
      <div className="shell">
        <div className="lg:grid lg:grid-cols-[var(--rail)_1fr] lg:gap-x-[clamp(1rem,2vw,2rem)]">
          {(index || label) && (
            <div className="mb-8 lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:mb-0 lg:self-start">
              <Reveal className="flex items-center gap-4 opacity-60 lg:block">
                {index && <IndexMark n={index} className="lg:mb-3 lg:block" />}
                {label && (
                  <span className="t-eyebrow block lg:[writing-mode:vertical-rl] lg:pl-1">
                    {label}
                  </span>
                )}
              </Reveal>
            </div>
          )}
          <div className={cn(!index && !label && "lg:col-span-2", contentClassName)}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Cabeçalho de seção editorial: sobrancelha, título display e lede.
 * Assimétrico por padrão — nunca centralizado.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  align = "left",
  size = "lg",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "left" | "split";
  size?: "sm" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-[clamp(1.75rem,3.2vw,2.75rem)]",
    lg: "text-[clamp(2.25rem,5vw,4.25rem)]",
    xl: "text-[clamp(2.75rem,6.5vw,5.75rem)]",
  };

  return (
    <div
      className={cn(
        align === "split" ? "grid gap-x-[clamp(1rem,3vw,4rem)] gap-y-6 md:grid-cols-12" : "",
        className,
      )}
    >
      <div className={align === "split" ? "md:col-span-7" : "max-w-[15em]"}>
        {eyebrow && (
          <Reveal className="mb-6 block">
            <span className="t-eyebrow text-gold-ink">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal>
          <h2 className={cn("t-display", sizes[size])}>{title}</h2>
        </Reveal>
      </div>
      {lede && (
        <Reveal
          delay={120}
          className={cn(
            "t-lede opacity-75",
            align === "split"
              ? "md:col-span-4 md:col-start-9 md:pt-3"
              : "mt-8 max-w-[52ch]",
          )}
        >
          {lede}
        </Reveal>
      )}
    </div>
  );
}
