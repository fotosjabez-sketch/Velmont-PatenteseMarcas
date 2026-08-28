import Link from "next/link";
import { cn } from "@/lib/utils";
import { RidgeMark } from "@/components/ui/Marks";

/**
 * Lockup Velmont. `compact` usa a crista + wordmark tipográfica para o header;
 * `full` usa o lockup oficial em imagem.
 */
export function Logo({
  className,
  compact = false,
  href = "/",
}: {
  className?: string;
  compact?: boolean;
  href?: string | null;
}) {
  const content = compact ? (
    <span className="flex flex-col items-start leading-none">
      <RidgeMark className="mb-1.5 h-3 w-9 opacity-90" />
      <span className="font-display text-[1.35rem] font-medium leading-none tracking-[0.16em]">
        VELMONT
      </span>
      <span className="mt-1 text-[0.5rem] font-medium uppercase leading-none tracking-[0.34em] opacity-60">
        Marcas e Patentes
      </span>
    </span>
  ) : (
    <span className="flex flex-col items-start leading-none">
      <RidgeMark className="mb-2 h-5 w-14 opacity-90" />
      <span className="font-display text-[2rem] font-medium leading-none tracking-[0.18em]">
        VELMONT
      </span>
      <span className="mt-2 text-[0.625rem] font-medium uppercase leading-none tracking-[0.36em] opacity-60">
        Marcas e Patentes
      </span>
    </span>
  );

  if (!href) {
    return <span className={cn("inline-block", className)}>{content}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-block transition-opacity duration-300 hover:opacity-70", className)}
      aria-label="Velmont — Marcas e Patentes, página inicial"
    >
      {content}
    </Link>
  );
}
