"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildOptions,
  concernOptions,
  layers,
  momentOptions,
  type LayerId,
} from "@/content/diagnostic";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { ChoiceGroup } from "./ChoiceGroup";
import { Strata } from "@/components/ui/Marks";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * DESCUBRA O QUE VOCÊ PRECISA PROTEGER
 *
 * Interação: o usuário compõe uma frase. Nada de formulário — as escolhas
 * montam uma declaração em primeira pessoa, e a declaração abre a orientação.
 *
 * O resultado NÃO é parecer. Ele apresenta: as camadas que costumam entrar na
 * conversa, as perguntas que o próprio negócio precisa saber responder, as
 * frentes da Velmont relacionadas e conteúdos de leitura.
 */
export function ProtectionExplorer({
  tone = "paper",
  /** `full` habilita a terceira pergunta (usada em /diagnostico). */
  depth = "short",
  headingLevel = "h2",
}: {
  tone?: "paper" | "wine";
  depth?: "short" | "full";
  headingLevel?: "h2" | "h3";
}) {
  const [build, setBuild] = useState<string | null>(null);
  const [moment, setMoment] = useState<string | null>(null);
  const [concern, setConcern] = useState<string | null>(null);

  const dark = tone === "wine";
  const Heading = headingLevel;

  const selectedBuild = buildOptions.find((b) => b.id === build) ?? null;
  const selectedMoment = momentOptions.find((m) => m.id === moment) ?? null;
  const selectedConcern = concernOptions.find((c) => c.id === concern) ?? null;

  const complete = depth === "full" ? Boolean(selectedBuild && selectedMoment && selectedConcern) : Boolean(selectedBuild && selectedMoment);

  const result = useMemo(() => {
    if (!selectedBuild || !selectedMoment) return null;
    const layerList = selectedBuild.layers.map((id: LayerId) => layers[id]);
    const serviceSlugs = Array.from(new Set(layerList.map((l) => l.service)));
    const relatedServices = serviceSlugs
      .map((slug) => services.find((s) => s.slug === slug))
      .filter((s): s is (typeof services)[number] => Boolean(s));
    const relatedArticles = selectedBuild.articles
      .map((slug) => articles.find((a) => a.slug === slug))
      .filter((a): a is (typeof articles)[number] => Boolean(a));
    return { layerList, relatedServices, relatedArticles };
  }, [selectedBuild, selectedMoment]);

  const reset = () => {
    setBuild(null);
    setMoment(null);
    setConcern(null);
  };

  const token = (text: string) => (
    <em
      className={cn(
        "font-display not-italic",
        dark ? "text-gold-400" : "text-wine-800",
      )}
    >
      {text}
    </em>
  );

  return (
    <div className="relative">
      {/* Frase que o usuário compõe */}
      <Heading
        className={cn(
          "t-display max-w-[17em] text-[clamp(1.75rem,4.4vw,3.5rem)]",
          dark ? "text-cream-100" : "text-ink-900",
        )}
      >
        Estou construindo{" "}
        {selectedBuild ? token(selectedBuild.label.toLowerCase()) : (
          <span className={cn("opacity-30", dark ? "text-cream-200" : "text-ink-900")}>
            ————
          </span>
        )}{" "}
        e estou{" "}
        {selectedMoment ? token(selectedMoment.label.toLowerCase()) : (
          <span className={cn("opacity-30", dark ? "text-cream-200" : "text-ink-900")}>
            ————
          </span>
        )}
        {depth === "full" && (
          <>
            . O que me preocupa é{" "}
            {selectedConcern ? token(selectedConcern.label.toLowerCase()) : (
              <span className={cn("opacity-30", dark ? "text-cream-200" : "text-ink-900")}>
                ————
              </span>
            )}
          </>
        )}
        .
      </Heading>

      {/* Pergunta 1 */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)]">
        <div className="mb-5 flex items-baseline gap-4">
          <span className={cn("t-index", dark ? "text-gold-400/85" : "text-gold-ink")}>01</span>
          <p className={cn("t-eyebrow", dark ? "text-cream-200/60" : "text-ink-500")}>
            O que você está construindo?
          </p>
        </div>
        <ChoiceGroup
          name="explorer-build"
          legend="O que você está construindo?"
          options={buildOptions.map((b) => ({ id: b.id, label: b.label, hint: b.hint }))}
          value={build}
          onChange={(id) => {
            setBuild(id);
            setMoment(null);
            setConcern(null);
          }}
          tone={tone}
          columns="grid"
        />
      </div>

      {/* Pergunta 2 */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]",
          build ? "mt-[clamp(2rem,4vw,3rem)] max-h-[60rem] opacity-100" : "max-h-0 opacity-0",
        )}
        inert={!build}
      >
        <div className="mb-5 flex items-baseline gap-4">
          <span className={cn("t-index", dark ? "text-gold-400/85" : "text-gold-ink")}>02</span>
          <p className={cn("t-eyebrow", dark ? "text-cream-200/60" : "text-ink-500")}>
            Em que momento você está?
          </p>
        </div>
        <ChoiceGroup
          name="explorer-moment"
          legend="Em que momento você está?"
          options={momentOptions.map((m) => ({ id: m.id, label: m.label, hint: m.hint }))}
          value={moment}
          onChange={(id) => {
            setMoment(id);
            setConcern(null);
          }}
          tone={tone}
          columns="grid"
        />
      </div>

      {/* Pergunta 3 — apenas na página de diagnóstico */}
      {depth === "full" && (
        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]",
            moment ? "mt-[clamp(2rem,4vw,3rem)] max-h-[60rem] opacity-100" : "max-h-0 opacity-0",
          )}
          inert={!moment}
        >
          <div className="mb-5 flex items-baseline gap-4">
            <span className={cn("t-index", dark ? "text-gold-400/85" : "text-gold-ink")}>03</span>
            <p className={cn("t-eyebrow", dark ? "text-cream-200/60" : "text-ink-500")}>
              O que mais te preocupa hoje?
            </p>
          </div>
          <ChoiceGroup
            name="explorer-concern"
            legend="O que mais te preocupa hoje?"
            options={concernOptions}
            value={concern}
            onChange={setConcern}
            tone={tone}
            columns="grid"
          />
        </div>
      )}

      {/* Resultado */}
      <div aria-live="polite">
        {complete && result && selectedBuild && selectedMoment && (
          <div
            data-reveal
            className={cn(
              "relative mt-[clamp(2.5rem,5vw,4rem)] overflow-hidden",
              dark ? "bg-cream-100 text-ink-900" : "bg-wine-800 text-cream-200",
            )}
          >
            <Strata
              corner="br"
              lines={10}
              className={cn(
                "pointer-events-none absolute -bottom-6 -right-6 w-[30%] max-w-[220px]",
                dark ? "text-gold-ink/15" : "text-gold-400/18",
              )}
            />

            <div className="relative p-[clamp(1.5rem,4vw,3.5rem)]">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <p className={cn("t-eyebrow", dark ? "text-gold-ink" : "text-gold-400")}>
                  Orientação — não é parecer jurídico
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className={cn(
                    "text-[0.75rem] uppercase tracking-[0.16em] underline-offset-4 transition-opacity duration-300 hover:opacity-60",
                    dark ? "text-ink-500" : "text-cream-200/60",
                  )}
                >
                  Recomeçar
                </button>
              </div>

              <p
                className={cn(
                  "t-display mt-6 max-w-[18em] text-[clamp(1.5rem,3vw,2.375rem)]",
                  dark ? "text-wine-800" : "text-cream-100",
                )}
              >
                {selectedMoment.nextStep}
              </p>

              <p
                className={cn(
                  "t-body mt-5 max-w-[62ch] text-[0.9375rem]",
                  dark ? "text-ink-700" : "text-cream-200/70",
                )}
              >
                {selectedMoment.focus}
              </p>

              <div className="mt-[clamp(2rem,4vw,3rem)] grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-10 md:grid-cols-12">
                {/* Camadas */}
                <div className="md:col-span-6">
                  <h4
                    className={cn(
                      "t-eyebrow mb-5 border-b pb-3",
                      dark ? "border-ink-900/12 text-ink-500" : "border-cream-200/15 text-cream-200/50",
                    )}
                  >
                    Camadas que entram na conversa
                  </h4>
                  <ul className="space-y-4">
                    {result.layerList.map((l) => (
                      <li key={l.id}>
                        <Link
                          href={`/servicos/${l.service}`}
                          className="group block"
                        >
                          <span
                            className={cn(
                              "font-display text-[1.1875rem] transition-colors duration-300",
                              dark
                                ? "text-wine-800 group-hover:text-wine-600"
                                : "text-cream-100 group-hover:text-gold-400",
                            )}
                          >
                            {l.name}
                          </span>
                          <span
                            className={cn(
                              "mt-1 block text-[0.8125rem] leading-snug",
                              dark ? "text-ink-500" : "text-cream-200/55",
                            )}
                          >
                            {l.scope}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Perguntas */}
                <div className="md:col-span-6">
                  <h4
                    className={cn(
                      "t-eyebrow mb-5 border-b pb-3",
                      dark ? "border-ink-900/12 text-ink-500" : "border-cream-200/15 text-cream-200/50",
                    )}
                  >
                    O que você precisa conseguir responder
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedBuild.questions.map((q, i) => (
                      <li key={i} className="flex gap-3.5">
                        <span
                          className={cn(
                            "t-index mt-1 shrink-0",
                            dark ? "text-gold-ink/70" : "text-gold-400/60",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "text-[0.9375rem] leading-relaxed",
                            dark ? "text-ink-700" : "text-cream-200/75",
                          )}
                        >
                          {q}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Leituras e próximo passo */}
              <div
                className={cn(
                  "mt-[clamp(2rem,4vw,3rem)] flex flex-col gap-8 border-t pt-8 md:flex-row md:items-end md:justify-between",
                  dark ? "border-ink-900/12" : "border-cream-200/15",
                )}
              >
                {result.relatedArticles.length > 0 && (
                  <div>
                    <h4
                      className={cn(
                        "t-eyebrow mb-4",
                        dark ? "text-ink-500" : "text-cream-200/50",
                      )}
                    >
                      Leituras relacionadas
                    </h4>
                    <ul className="space-y-2">
                      {result.relatedArticles.map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/blog/${a.slug}`}
                            className={cn(
                              "group inline-flex items-baseline gap-2 text-[0.9375rem] transition-opacity duration-300 hover:opacity-70",
                              dark ? "text-wine-800" : "text-cream-100",
                            )}
                          >
                            <span className="underline decoration-current/25 underline-offset-4">
                              {a.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <ButtonLink
                  href="/contato"
                  variant={dark ? "solid" : "cream"}
                  className="shrink-0"
                  magnetic
                >
                  Levar isso para uma conversa
                </ButtonLink>
              </div>

              <p
                className={cn(
                  "mt-8 max-w-[70ch] text-[0.75rem] leading-relaxed",
                  dark ? "text-ink-500" : "text-cream-200/40",
                )}
              >
                Esta orientação é educativa e genérica. Ela não analisa o seu caso, não afirma que
                um direito é aplicável e não substitui a análise técnica — que é exatamente o que a
                Velmont faz depois desta conversa começar.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
