"use client";

import { useEffect, useRef, useState } from "react";
import { stakes } from "@/content/transparency";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * MESA DE EXAME — "O QUE ESTÁ EM JOGO"
 *
 * Um ativo entra inteiro na mesa e se decompõe nas camadas que precisam ser
 * protegidas, cada uma recebendo sua classificação. É a tradução literal de
 * "camadas de proteção", que antes existia apenas como lista de texto.
 *
 * A separação é dirigida pela rolagem dentro de um bloco alto com miolo preso
 * (sticky): a página avança, o ativo se abre. Só uma anotação fica visível por
 * vez — é o que mantém a primeira camada de leitura curta.
 */

/** Cada camada se separa em uma faixa própria do progresso. */
const START = 0.18;
const SPAN = 0.62;

export function ExamTable() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  /* Em telas estreitas as camadas se separam só na vertical: o deslocamento
     lateral levaria os cartões para fora da viewport. */
  const [narrow, setNarrow] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      setNarrow(window.innerWidth < 640);
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      if (travel <= 0) {
        setProgress(1);
        return;
      }
      const raw = -rect.top / travel;
      setProgress(Math.min(Math.max(raw, 0), 1));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /** Quanto a camada `i` já se separou, de 0 a 1. */
  const openness = (i: number) => {
    if (reduced) return 1;
    const step = SPAN / stakes.length;
    const from = START + i * step;
    return Math.min(Math.max((progress - from) / step, 0), 1);
  };

  /** Camada em foco: a última que já começou a se separar. */
  const active = stakes.reduce((acc, _, i) => (openness(i) > 0.35 ? i : acc), -1);

  return (
    <div ref={wrapRef} className="relative h-[300vh] bg-stage" id="em-jogo">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* luz de mesa */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 62% 46%, var(--color-wine-800) 0%, transparent 70%)",
          }}
        />

        <div className="shell relative grid w-full gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-10 lg:grid-cols-12 lg:items-center">
          {/* ── Anotação: uma por vez ─────────────────────────────── */}
          <div className="lg:col-span-4">
            <div className="mb-8 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-foil/60" />
              <span className="t-code text-foil">02 — O que está em jogo</span>
            </div>

            <h2 className="t-display text-[clamp(1.9rem,3.6vw,3rem)] text-paper">
              Um negócio não é uma coisa só.
            </h2>

            {/* A anotação troca conforme a camada em foco. */}
            <div className="relative mt-8 min-h-[9rem]" aria-live="polite">
              {stakes.map((s, i) => (
                <div
                  key={s.n}
                  aria-hidden={active !== i}
                  className={cn(
                    "absolute inset-x-0 top-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    active === i
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0",
                  )}
                >
                  <span className="t-code text-annot">{s.code}</span>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/70">{s.text}</p>
                </div>
              ))}

              <p
                className={cn(
                  "text-[0.9375rem] leading-relaxed text-paper/55 transition-opacity duration-500",
                  active >= 0 ? "opacity-0" : "opacity-100",
                )}
              >
                Role para separar o que a sua empresa realmente possui — e ver o que cada
                camada exige para continuar sendo dela.
              </p>
            </div>
          </div>

          {/* ── A mesa ────────────────────────────────────────────── */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative mx-auto h-[24rem] w-full max-w-[30rem] rotate-[-1.5deg] sm:h-[27rem]">
              {/* eixo de chamada: a linha técnica que liga as camadas */}
              <div
                aria-hidden="true"
                className="absolute left-6 top-6 w-px bg-annot/25 transition-[height] duration-300"
                style={{ height: `${18 + progress * 290}px` }}
              />
              {/* O ativo inteiro, no topo da pilha */}
              <Layer
                index={-1}
                openness={0}
                title="O seu negócio"
                code="ATIVO"
                whole
              />

              {stakes.map((s, i) => (
                <Layer
                  key={s.n}
                  index={i}
                  openness={openness(i)}
                  title={s.title}
                  code={s.code}
                  focused={active === i}
                  drift={narrow ? 0 : -14}
                />
              ))}
            </div>
          </div>
        </div>

        {/* progresso do exame */}
        <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
          <div className="shell py-5">
            <div className="h-px w-full bg-paper/12">
              <div
                className="h-full origin-left bg-foil/70 transition-transform duration-150"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layer({
  index,
  openness,
  title,
  code,
  whole = false,
  focused = false,
  drift = -14,
}: {
  index: number;
  openness: number;
  title: string;
  code: string;
  whole?: boolean;
  focused?: boolean;
  /** Deslocamento lateral por camada, em px. Zero em telas estreitas. */
  drift?: number;
}) {
  /* Empilhadas, as camadas formam um bloco único de papel. Abertas, descem
     em vista explodida — deslocamento constante, sem rotação acumulada. */
  const i = index + 1;
  const restY = i * 5;
  const openY = 30 + i * 60;
  const openX = i * drift;

  const y = restY + (openY - restY) * openness;
  const x = openX * openness;
  const scale = 1 - (whole ? 0 : 0.015 * (1 - openness));

  return (
    <div
      className={cn(
        "ficha absolute inset-x-0 top-0 flex items-center justify-between gap-4 py-3 pl-4 pr-4",
        "border-l-[3px] transition-colors duration-300",
        whole && "ring-1 ring-foil/40",
        focused ? "border-l-foil" : "border-l-transparent",
      )}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        zIndex: 20 - i,
      }}
    >
      <span
        className={cn(
          "font-display text-[clamp(1.125rem,2vw,1.5rem)] leading-none transition-colors duration-300",
          focused ? "text-wine-700" : "text-paper-ink",
        )}
      >
        {title}
      </span>
      <span
        className={cn(
          "t-code shrink-0 transition-colors duration-300",
          focused ? "text-wine-700" : "text-paper-label",
        )}
      >
        {code}
      </span>
    </div>
  );
}
