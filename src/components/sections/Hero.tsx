"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Ficha, FichaField, FichaStatus, Seal } from "@/components/ui/Ficha";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HERO — "A EMISSÃO"
 *
 * A manchete não fica ao lado de uma ilustração: ela É o documento. A ficha se
 * sobrepõe à linha "Falta estar no nome dela", os campos se preenchem em
 * sequência, o status vira e o lacre desce.
 *
 * Em três segundos o usuário vê a promessa acontecer, sem ler uma linha de
 * explicação — é o que substitui manchete + parágrafo + dois botões.
 */

/** Índice de capítulos como faixa de registro, não como lista de texto. */
const chapters = [
  { n: "01", label: "Manifesto", href: "#manifesto" },
  { n: "02", label: "O que está em jogo", href: "#em-jogo" },
  { n: "03", label: "Descubra", href: "#descubra" },
  { n: "04", label: "Serviços", href: "#servicos" },
  { n: "05", label: "Como pensamos", href: "#transparencia" },
  { n: "06", label: "Quem conduz", href: "#sobre" },
];

export function Hero() {
  const [issued, setIssued] = useState(false);
  const reduced = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* Com movimento reduzido o documento já nasce emitido — estado derivado,
     sem efeito. O ciclo de emissão só existe quando há animação. */
  const isIssued = reduced || issued;

  useEffect(() => {
    if (reduced) return;

    const pending = timers.current;
    // A emissão começa logo após a entrada da tipografia e se repete
    // discretamente, para quem chegar depois do primeiro ciclo.
    pending.push(setTimeout(() => setIssued(true), 900));

    const loop = setInterval(() => {
      setIssued(false);
      pending.push(setTimeout(() => setIssued(true), 900));
    }, 9000);

    return () => {
      clearInterval(loop);
      pending.forEach(clearTimeout);
      pending.length = 0;
    };
  }, [reduced]);

  return (
    <section className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-stage pt-[var(--header-h)] text-paper">
      {/* Luz do palco: o vinho da marca vira iluminação, não parede. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 68% 58% at 72% 26%, var(--color-wine-800) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 12% 92%, var(--color-wine-900) 0%, transparent 70%)",
        }}
      />

      <div className="shell flex flex-1 flex-col justify-center py-[clamp(2rem,5vh,4rem)]">
        <div className="relative">
          {/* ── Declaração ───────────────────────────────────────── */}
          <div className="relative z-10 lg:w-[74%]">
            <div className="mb-[clamp(1.5rem,3vw,2.25rem)] flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-foil/60" />
              <span className="t-code text-foil">Proteção como estratégia</span>
            </div>

            <h1 className="t-display text-[clamp(2.4rem,6.4vw,5.6rem)]">
              <span className="block">Tudo o que a sua</span>
              <span className="block">empresa criou já vale.</span>
              <span className="block">
                Falta <em className="italic text-paper-2">estar no nome dela.</em>
              </span>
            </h1>

            <p className="mt-[clamp(1.75rem,3.5vw,2.5rem)] max-w-[42ch] text-[clamp(1rem,1.05vw,1.125rem)] leading-[1.6] text-paper/65">
              Marca, invenção, design, software, conteúdo. Patrimônio exige estratégia,
              segurança jurídica e gestão responsável.
            </p>

            <div className="mt-[clamp(2rem,3.5vw,2.75rem)] flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="#descubra" variant="cream" magnetic>
                Descubra o que proteger
              </ButtonLink>
              <Link
                href="/servicos"
                className="group t-code inline-flex items-center gap-3 text-paper/55 transition-colors duration-300 hover:text-paper"
              >
                Ver serviços
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12"
                />
              </Link>
            </div>
          </div>

          {/* ── O documento ──────────────────────────────────────── */}
          <div
            data-issued={isIssued ? "" : undefined}
            className={`group/ficha relative z-20 mt-[clamp(3rem,6vw,4rem)] lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[27rem] lg:-translate-y-[42%] ${
              isIssued ? "is-issued" : ""
            }`}
          >
            <Ficha
              code="VLM · REG · 0001"
              rotate={-1.4}
              status={<FichaStatus off="Não registrado" on="Registrado" />}
              className="relative z-10 max-w-[27rem]"
            >
              <FichaField label="Titular" value="— sua empresa —" fill={0} />
              <FichaField label="Ativo" value="Marca, invenção, código, obra" fill={1} />
              <FichaField label="Depósito" value="2026 · 02 · 18" fill={2} />
              <FichaField label="Protocolo" value="BR 92 2026 000418 7" fill={3} />
            </Ficha>

            <Seal className="absolute -bottom-12 right-2 z-20 h-[6.5rem] w-[6.5rem] text-foil lg:-left-12 lg:right-auto" />
          </div>
        </div>
      </div>

      {/* ── Faixa de registro ────────────────────────────────────── */}
      <div className="relative mt-auto border-t border-paper/10">
        <div className="shell flex items-center justify-between gap-6 py-4">
          <nav aria-label="Índice desta página" className="hidden min-w-0 lg:block">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {chapters.map((c) => (
                <li key={c.n}>
                  <Link
                    href={c.href}
                    className="group t-code inline-flex items-baseline gap-2 text-paper/40 transition-colors duration-300 hover:text-paper/85"
                  >
                    <span className="text-annot/70 transition-colors duration-300 group-hover:text-foil">
                      {c.n}
                    </span>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className="t-code shrink-0 text-paper/30">
            <span className="sm:hidden">Curitiba / PR</span>
            <span className="hidden sm:inline">
              Curitiba / PR — {site.experienceYears}+ anos em propriedade industrial
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
