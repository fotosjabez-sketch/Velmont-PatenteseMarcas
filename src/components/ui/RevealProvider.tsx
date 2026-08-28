"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Sistema de reveal do site.
 *
 * Um único IntersectionObserver cuida de todos os elementos [data-reveal] do
 * documento; um MutationObserver captura conteúdo montado depois (resultados
 * do diagnóstico, painéis de serviço, filtros do blog). Sem biblioteca de
 * animação — a transição em si vive no CSS.
 */
export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = (node: HTMLElement) => node.classList.add("is-in");

    if (reduced) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    const observeAll = () =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
        .forEach((n) => io.observe(n));

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
