"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { RidgeMark } from "@/components/ui/Marks";
import { useScrolled } from "@/hooks/useScrolled";
import { useHeroTone } from "@/hooks/useHeroTone";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled(24);
  const heroTone = useHeroTone();
  const [open, setOpen] = useState(false);

  /* Fecha o menu quando a rota muda — ajuste de estado durante o render,
     que cobre também navegação por voltar/avançar. */
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Sobre um hero em vinho, o header começa claro e "materializa" no scroll. */
  const overDark = heroTone === "dark" && !scrolled;

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-wine-800 focus:px-5 focus:py-3 focus:text-cream-100"
      >
        Pular para o conteúdo
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled && !open
            ? "border-b border-ink-900/8 bg-cream-50/92 backdrop-blur-md"
            : "border-b border-transparent",
          overDark || open ? "text-cream-200" : "text-ink-900",
        )}
        style={{ height: scrolled ? "4.25rem" : "var(--header-h)" }}
      >
        <div className="shell flex h-full items-center justify-between gap-8">
          <Logo compact className="shrink-0" />

          <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative py-2 text-[0.8125rem] font-medium uppercase tracking-[0.14em] transition-opacity duration-300",
                    active ? "opacity-100" : "opacity-65 hover:opacity-100",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active ? "w-full opacity-60" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contato"
              className={cn(
                "group relative hidden overflow-hidden px-6 py-3 text-[0.75rem] font-medium uppercase tracking-[0.16em] transition-colors duration-500 md:inline-flex md:items-center md:gap-2.5",
                overDark
                  ? "bg-cream-200 text-wine-800"
                  : "bg-wine-800 text-cream-200",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100",
                  overDark ? "bg-cream-300" : "bg-wine-600",
                )}
              />
              <span className="relative z-10">Falar com a Velmont</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-principal"
              className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
                <span
                  className={cn(
                    "h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open && "translate-y-[6px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-current transition-opacity duration-300",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open && "-translate-y-[6px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile — painel editorial, não uma lista empilhada */}
      <div
        id="menu-principal"
        hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-wine-900 text-cream-200 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div className="grain relative flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-[calc(var(--header-h)+2rem)]">
          <div
            className="lightfield pointer-events-none absolute inset-0 -z-10"
            style={{ "--lf-x": "80%", "--lf-y": "12%", "--lf-strength": "14%" } as React.CSSProperties}
          />
          <nav aria-label="Navegação principal (mobile)">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden border-b border-cream-200/10">
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-4 py-5 transition-opacity duration-300 hover:opacity-70"
                    style={{
                      transitionDelay: `${i * 40}ms`,
                    }}
                  >
                    <span className="t-index opacity-40">0{i + 1}</span>
                    <span className="t-display text-[2rem]">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="overflow-hidden border-b border-cream-200/10">
                <Link
                  href="/diagnostico"
                  className="flex items-baseline gap-4 py-5 transition-opacity duration-300 hover:opacity-70"
                >
                  <span className="t-index opacity-40">05</span>
                  <span className="t-display text-[2rem]">Diagnóstico</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-10 space-y-6">
            <Link
              href="/contato"
              className="flex w-full items-center justify-center gap-3 bg-cream-200 px-6 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-wine-800"
            >
              Falar com a Velmont
            </Link>
            <div className="flex flex-col gap-1 text-sm opacity-60">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </div>
            <RidgeMark className="h-4 w-12 opacity-30" />
          </div>
        </div>
      </div>
    </>
  );
}
