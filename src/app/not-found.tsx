import Link from "next/link";
import { nav } from "@/content/site";
import { Ridge } from "@/components/ui/Marks";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[80svh] flex-col justify-center overflow-hidden bg-wine-800 pt-[var(--header-h)] text-cream-200">
      <div
        className="lightfield pointer-events-none absolute inset-0 -z-10"
        style={{ "--lf-x": "76%", "--lf-y": "22%", "--lf-strength": "14%" } as React.CSSProperties}
      />

      <div className="shell py-[clamp(3rem,8vw,6rem)]">
        <span className="t-eyebrow text-gold-400">Erro 404</span>
        <h1 className="t-display mt-6 max-w-[15em] text-[clamp(2.25rem,6vw,5rem)]">
          Esta página não está registrada.
        </h1>
        <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-relaxed text-cream-200/70">
          O endereço que você procurou não existe ou mudou de lugar. Abaixo, os caminhos que
          continuam valendo.
        </p>

        <ul className="mt-12 grid max-w-3xl gap-px sm:grid-cols-2">
          {[...nav, { label: "Diagnóstico", href: "/diagnostico" }, { label: "Contato", href: "/contato" }].map(
            (item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-4 bg-cream-200/[0.06] px-6 py-5 transition-colors duration-500 hover:bg-cream-200/[0.12]"
                >
                  <span className="t-index text-gold-400/60">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[1.375rem] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    {item.label}
                  </span>
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="mt-12">
          <ButtonLink href="/" variant="cream" magnetic>
            Voltar ao início
          </ButtonLink>
        </div>
      </div>

      <Ridge className="pointer-events-none mt-auto h-[10vw] w-full text-cream-300/14" strokeWidth={1} />
    </section>
  );
}
