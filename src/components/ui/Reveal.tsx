import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** "up" (padrão) | "clip" (máscara lateral) | "scale" */
  variant?: "up" | "clip" | "scale";
  delay?: number;
  /** Distância vertical do deslocamento inicial, em rem. */
  distance?: number;
};

/**
 * Envelope de reveal. Não usa JavaScript próprio — apenas marca o elemento,
 * que é ativado pelo RevealProvider e animado por CSS.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  variant = "up",
  delay = 0,
  distance,
}: RevealProps) {
  return (
    <Tag
      data-reveal={variant === "up" ? "" : variant}
      className={className}
      style={
        {
          ...(delay ? { "--reveal-delay": `${delay}ms` } : {}),
          ...(distance !== undefined ? { "--reveal-y": `${distance}rem` } : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

/**
 * Revela texto linha a linha com máscara. Cada string do array é uma linha
 * tipográfica — a quebra é decidida no conteúdo, como em composição editorial.
 */
export function TextReveal({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  stagger = 90,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: ElementType;
  stagger?: number;
  delay?: number;
}) {
  return (
    <Tag data-reveal="trigger" className={cn(className)}>
      {lines.map((line, i) => (
        <span key={i} className={cn("line-mask", lineClassName)}>
          <span style={{ "--line-delay": `${delay + i * stagger}ms` } as React.CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
