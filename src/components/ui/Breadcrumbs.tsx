import Link from "next/link";
import { site } from "@/content/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "paper" }: { items: Crumb[]; tone?: "paper" | "wine" }) {
  const dark = tone === "wine";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Início", href: "/" }, ...items].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Trilha de navegação">
        <ol
          className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] uppercase tracking-[0.16em] ${
            dark ? "text-cream-200/45" : "text-ink-500"
          }`}
        >
          <li>
            <Link href="/" className="transition-opacity duration-300 hover:opacity-60">
              Início
            </Link>
          </li>
          {items.map((c, i) => (
            <li key={i} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-3 bg-current opacity-40" />
              {c.href ? (
                <Link href={c.href} className="transition-opacity duration-300 hover:opacity-60">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className={dark ? "text-cream-200/80" : "text-ink-700"}>
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
