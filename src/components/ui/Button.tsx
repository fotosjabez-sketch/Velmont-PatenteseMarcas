"use client";

import Link from "next/link";
import { useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Variant = "solid" | "outline" | "ghost" | "cream";

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden " +
  "text-[0.8125rem] font-medium uppercase tracking-[0.16em] " +
  "px-7 py-4 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid: "bg-wine-800 text-cream-200 hover:text-cream-50",
  cream: "bg-cream-200 text-wine-800 hover:text-wine-900",
  outline:
    "border border-current/25 text-current hover:border-current/50 hover:text-current",
  ghost: "text-current px-0 py-2 hover:text-current",
};

/** Preenchimento que sobe no hover — substitui a mudança de cor "chapada". */
function Sweep({ variant }: { variant: Variant }) {
  if (variant === "ghost") return null;
  const tone =
    variant === "solid" ? "bg-wine-600" : variant === "cream" ? "bg-cream-300" : "bg-current/8";
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-0 -z-0 origin-bottom scale-y-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100",
        tone,
      )}
    />
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 22 8"
      className="h-2 w-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 4h20M16.5 0.5 20.5 4 16.5 7.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  /** Atração magnética sutil ao cursor. Desligada com prefers-reduced-motion. */
  magnetic?: boolean;
};

/**
 * Atração magnética ao cursor.
 *
 * Implementada como callback ref que assina seus próprios listeners: mantém o
 * efeito fora do ciclo de render do React e evita qualquer estado. Desligada
 * quando o usuário pede movimento reduzido.
 */
function useMagnetic(enabled: boolean) {
  const reduced = useReducedMotion();
  const active = enabled && !reduced;

  return useCallback(
    (node: HTMLElement | null) => {
      if (!node || !active) return;

      node.style.transition = "transform 700ms cubic-bezier(0.16,1,0.3,1)";

      const onMove = (e: MouseEvent) => {
        const r = node.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * 0.16;
        const y = (e.clientY - (r.top + r.height / 2)) * 0.24;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };
      const onLeave = () => {
        node.style.transform = "translate3d(0, 0, 0)";
      };

      node.addEventListener("mousemove", onMove);
      node.addEventListener("mouseleave", onLeave);

      return () => {
        node.removeEventListener("mousemove", onMove);
        node.removeEventListener("mouseleave", onLeave);
        node.style.transform = "";
        node.style.transition = "";
      };
    },
    [active],
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  arrow = true,
  magnetic = false,
  ...rest
}: CommonProps & { href: string; target?: string; rel?: string; "aria-label"?: string }) {
  const magneticRef = useMagnetic(magnetic);
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const inner = (
    <>
      <Sweep variant={variant} />
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span className="relative z-10">
          <Arrow />
        </span>
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a ref={magneticRef} href={href} className={classes} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <Link ref={magneticRef} href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  className,
  arrow = false,
  magnetic = false,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const magneticRef = useMagnetic(magnetic);
  return (
    <button
      ref={magneticRef}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      <Sweep variant={variant} />
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span className="relative z-10">
          <Arrow />
        </span>
      )}
    </button>
  );
}

/** Link de texto com sublinhado que se desenha — usado no corpo editorial. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  const Cmp = external ? "a" : Link;
  return (
    <Cmp
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative inline-block transition-colors duration-300",
        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-100",
        "after:bg-current after:opacity-40 after:transition-transform after:duration-500",
        "after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:origin-left hover:after:scale-x-0",
        className,
      )}
    >
      {children}
    </Cmp>
  );
}
