import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles/types";
import { categoryLabel } from "@/content/articles/types";
import { formatDateShort } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ArticleCover } from "./ArticleCover";

/**
 * Entrada de artigo. Sem "card": não há caixa, sombra ou raio.
 * A hierarquia vem de tipografia, régua e espaço — como um índice de revista.
 */
export function ArticleCard({
  article,
  size = "md",
  showExcerpt = true,
  className,
}: {
  article: Article;
  size?: "sm" | "md" | "lg";
  showExcerpt?: boolean;
  className?: string;
}) {
  const titleSize = {
    sm: "text-[clamp(1.125rem,1.6vw,1.3125rem)]",
    md: "text-[clamp(1.375rem,2.1vw,1.75rem)]",
    lg: "text-[clamp(1.75rem,3vw,2.5rem)]",
  }[size];

  return (
    <article className={cn("group", className)}>
      <Link href={`/blog/${article.slug}`} className="block">
        {size !== "sm" &&
          (article.cover ? (
            <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-ink-100">
              <Image
                src={article.cover}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
          ) : (
            <ArticleCover
              slug={article.slug}
              category={article.category}
              className="mb-6"
            />
          ))}

        <div className="flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-500">
          <span className="text-gold-ink">{categoryLabel(article.category)}</span>
          <span aria-hidden="true" className="h-px w-4 bg-current opacity-40" />
          <time dateTime={article.date}>{formatDateShort(article.date)}</time>
        </div>

        <h3
          className={cn(
            "t-display mt-3 text-ink-900 transition-colors duration-500 group-hover:text-wine-700",
            titleSize,
          )}
        >
          {article.title}
        </h3>

        {showExcerpt && (
          <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-500">
            {article.excerpt}
          </p>
        )}

        <span className="mt-4 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-500">
          <span>{article.readingMinutes} min de leitura</span>
          <span
            aria-hidden="true"
            className="h-px w-6 bg-current opacity-40 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-10 group-hover:opacity-80"
          />
        </span>
      </Link>
    </article>
  );
}
