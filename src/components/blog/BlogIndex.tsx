"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { articles, categories, categoryLabel, type Category } from "@/content/articles";
import { ArticleCard } from "./ArticleCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const PER_PAGE = 6;

/**
 * ÍNDICE EDITORIAL
 *
 * Filtro por categoria + busca + paginação, tudo em estado de URL para que
 * cada recorte seja compartilhável. A composição é de sumário de revista:
 * o primeiro artigo do recorte ocupa largura dupla, os demais formam a grade.
 */
export function BlogIndex({ initialCategory }: { initialCategory?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const active = (params.get("categoria") ?? initialCategory ?? "todos") as Category | "todos";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = active === "todos" || a.category === active;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.standfirst.toLowerCase().includes(q) ||
        categoryLabel(a.category).toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const setCategory = (id: string) => {
    setPage(1);
    const next = new URLSearchParams(Array.from(params.entries()));
    if (id === "todos") next.delete("categoria");
    else next.set("categoria", id);
    const qs = next.toString();
    router.replace(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  };

  return (
    <div>
      {/* Filtros */}
      <div className="grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-6 border-b border-ink-900/12 pb-7 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2 className="t-eyebrow mb-4 text-ink-500">Categorias</h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {[{ id: "todos", label: "Todos" }, ...categories].map((c) => {
              const isActive = active === c.id;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setCategory(c.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "group relative py-1 text-[0.8125rem] uppercase tracking-[0.14em] transition-colors duration-300",
                      isActive ? "text-wine-800" : "text-ink-500 hover:text-ink-700",
                    )}
                  >
                    {c.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-gold-600 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-4">
          <label htmlFor="blog-busca" className="t-eyebrow mb-3 block text-ink-500">
            Buscar
          </label>
          <div className="relative">
            <input
              id="blog-busca"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Marca, patente, software…"
              className="w-full border-0 border-b border-ink-900/25 bg-transparent pb-2.5 pr-8 text-[0.9375rem] text-ink-900 outline-none transition-colors duration-300 placeholder:text-ink-500 focus:border-wine-800"
            />
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="pointer-events-none absolute right-1 top-1 h-4 w-4 text-ink-500"
              fill="none"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" />
              <path d="M11 11l4 4" stroke="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Resultado */}
      <p className="mt-6 text-[0.8125rem] text-ink-500" aria-live="polite">
        {filtered.length === 0
          ? "Nenhum conteúdo encontrado para este recorte."
          : `${filtered.length} ${filtered.length === 1 ? "conteúdo" : "conteúdos"}${
              active !== "todos" ? ` em ${categoryLabel(active as Category)}` : ""
            }`}
      </p>

      {visible.length > 0 && (
        <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-[clamp(3rem,5vw,4.5rem)] md:grid-cols-12">
          {visible.map((a, i) => (
            <Reveal
              key={a.slug}
              delay={(i % 3) * 80}
              className={
                i === 0
                  ? "md:col-span-7"
                  : i === 1
                    ? "md:col-span-4 md:col-start-9"
                    : "md:col-span-4"
              }
            >
              <ArticleCard article={a} size={i === 0 ? "lg" : "md"} showExcerpt={i < 2} />
            </Reveal>
          ))}
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <nav
          aria-label="Paginação dos conteúdos"
          className="mt-[clamp(3rem,6vw,5rem)] flex items-center justify-between border-t border-ink-900/12 pt-7"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={current === 1}
            className="text-[0.8125rem] uppercase tracking-[0.14em] text-ink-500 transition-opacity duration-300 hover:text-wine-800 disabled:pointer-events-none disabled:opacity-30"
          >
            ← Anterior
          </button>
          <ul className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setPage(i + 1)}
                  aria-current={current === i + 1 ? "page" : undefined}
                  className={cn(
                    "t-index flex h-9 w-9 items-center justify-center transition-colors duration-300",
                    current === i + 1
                      ? "bg-wine-800 text-cream-200"
                      : "text-ink-500 hover:text-wine-800",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={current === totalPages}
            className="text-[0.8125rem] uppercase tracking-[0.14em] text-ink-500 transition-opacity duration-300 hover:text-wine-800 disabled:pointer-events-none disabled:opacity-30"
          >
            Próxima →
          </button>
        </nav>
      )}
    </div>
  );
}
