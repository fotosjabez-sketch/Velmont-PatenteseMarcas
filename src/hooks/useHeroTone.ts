"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Tom do bloco de abertura da rota atual.
 *
 * O header é transparente antes do scroll, então precisa saber se está sobre
 * um campo vinho (texto claro) ou sobre papel (texto escuro). Em vez de manter
 * uma lista de rotas — que sai de sincronia assim que uma página muda de tom —
 * o header lê a luminância real do primeiro bloco de `<main>`.
 */
export function useHeroTone() {
  const pathname = usePathname();
  const [tone, setTone] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const read = () => {
      /* Alguns blocos de abertura são invólucros transparentes (o <article> de
         um texto, por exemplo). Desce até encontrar o primeiro elemento que
         realmente pinta um fundo. */
      // `:not(script)` porque as páginas emitem JSON-LD antes do conteúdo.
      let node = document.querySelector<HTMLElement>("main > *:not(script):not(style)");

      for (let depth = 0; node && depth < 4; depth++) {
        const match = getComputedStyle(node).backgroundColor.match(/\d+(\.\d+)?/g);
        const alpha = match && match[3] !== undefined ? Number(match[3]) : 1;

        if (match && match.length >= 3 && alpha > 0) {
          const [r, g, b] = match.map(Number);
          // Luminância percebida (ITU-R BT.601) — suficiente para escolher
          // entre dois tons de texto e mais barata que a fórmula WCAG completa.
          const luminance = (r * 299 + g * 587 + b * 114) / 1000;
          setTone(luminance < 140 ? "dark" : "light");
          return;
        }

        node = node.firstElementChild as HTMLElement | null;
      }
    };

    const frame = requestAnimationFrame(read);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return tone;
}
