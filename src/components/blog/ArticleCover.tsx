import { categoryLabel, type Category } from "@/content/articles/types";
import { Strata } from "@/components/ui/Marks";
import { cn } from "@/lib/utils";

/**
 * CAPA TIPOGRÁFICA
 *
 * O site não usa banco de imagens. Quando um artigo não tem fotografia
 * própria, a capa é construída com os elementos da identidade: campo vinho,
 * estratos e a categoria em tipografia display.
 *
 * A variação de composição é derivada do slug, então cada artigo tem sempre a
 * mesma capa — e capas vizinhas na grade não se repetem.
 */
function hash(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

const corners = ["br", "bl", "tr", "tl"] as const;

export function ArticleCover({
  slug,
  category,
  ratio = "16/10",
  className,
}: {
  slug: string;
  category: Category;
  ratio?: string;
  className?: string;
}) {
  const h = hash(slug);
  const corner = corners[h % corners.length];
  const tone = h % 3;

  return (
    <div
      className={cn(
        "grain relative isolate w-full overflow-hidden",
        tone === 0 ? "bg-wine-800" : tone === 1 ? "bg-wine-900" : "bg-wine-700",
        className,
      )}
      style={{ aspectRatio: ratio }}
      aria-hidden="true"
    >
      <div
        className="lightfield absolute inset-0"
        style={
          {
            "--lf-x": `${25 + (h % 5) * 12}%`,
            "--lf-y": `${20 + (h % 3) * 20}%`,
            "--lf-strength": "16%",
          } as React.CSSProperties
        }
      />
      <Strata
        corner={corner}
        lines={8 + (h % 4)}
        className={cn(
          "absolute w-[46%] text-gold-400/25 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
          corner === "br" && "-bottom-4 -right-4",
          corner === "bl" && "-bottom-4 -left-4",
          corner === "tr" && "-right-4 -top-4",
          corner === "tl" && "-left-4 -top-4",
        )}
      />
      <div className="absolute inset-0 flex items-end p-[clamp(1.25rem,2.5vw,2rem)]">
        <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-none text-cream-200/40">
          {categoryLabel(category)}
        </span>
      </div>
    </div>
  );
}
