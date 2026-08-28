import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal, TextReveal } from "./Reveal";
import { Ridge, Strata } from "./Marks";
import { cn } from "@/lib/utils";

/**
 * Abertura editorial das páginas internas.
 * Mantém a gramática do hero da home — sobrancelha, declaração em display,
 * lede deslocada — em escala menor, para não competir com a home.
 */
export function PageHero({
  eyebrow,
  titleLines,
  lede,
  crumbs,
  meta,
  tone = "wine",
  children,
}: {
  eyebrow: string;
  titleLines: ReactNode[];
  lede?: ReactNode;
  crumbs: Crumb[];
  meta?: ReactNode;
  tone?: "wine" | "paper";
  children?: ReactNode;
}) {
  const dark = tone === "wine";

  return (
    <section
      className={cn(
        "grain relative isolate overflow-hidden pt-[calc(var(--header-h)+clamp(2.5rem,6vw,5rem))]",
        dark ? "bg-wine-800 text-cream-200" : "bg-cream-100 text-ink-900",
      )}
    >
      {dark && (
        <>
          <div
            className="lightfield pointer-events-none absolute inset-0 -z-10"
            style={
              { "--lf-x": "84%", "--lf-y": "10%", "--lf-strength": "15%" } as React.CSSProperties
            }
          />
          <Reveal
            variant="scale"
            delay={500}
            className="pointer-events-none absolute -right-14 top-[6vh] -z-10 hidden w-[24vw] max-w-[360px] text-gold-400/14 lg:block"
          >
            <Strata corner="tr" lines={10} />
          </Reveal>
        </>
      )}

      <div className="shell pb-[clamp(3rem,6vw,5rem)]">
        <Reveal>
          <Breadcrumbs items={crumbs} tone={tone} />
        </Reveal>

        <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-x-[clamp(1.5rem,4vw,5rem)] gap-y-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal className="mb-6 flex items-center gap-4">
              <span
                className={cn("h-px w-10", dark ? "bg-gold-400/50" : "bg-gold-600/50")}
                aria-hidden="true"
              />
              <span className={cn("t-eyebrow", dark ? "text-gold-400" : "text-gold-ink")}>
                {eyebrow}
              </span>
            </Reveal>
            <TextReveal
              as="h1"
              className="t-display text-[clamp(2.25rem,5.6vw,4.75rem)]"
              lines={titleLines}
              delay={120}
            />
          </div>

          {lede && (
            <Reveal delay={260} className="md:col-span-4 md:col-start-9 md:pt-4">
              <div className={cn("t-body text-[0.9375rem]", dark ? "text-cream-200/70" : "text-ink-700")}>
                {lede}
              </div>
              {meta && <div className="mt-6">{meta}</div>}
            </Reveal>
          )}
        </div>

        {children}
      </div>

      {dark && (
        <Reveal className="pointer-events-none relative opacity-70">
          <Ridge animated strokeWidth={1} className="h-[clamp(60px,8vw,120px)] w-full text-cream-300/16" />
        </Reveal>
      )}
    </section>
  );
}
