import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * FICHA — o objeto central da linguagem visual.
 *
 * Substitui o card genérico em todo o site. Um card com ícone e título poderia
 * pertencer a qualquer empresa; uma ficha de registro só faz sentido para quem
 * cataloga bens intangíveis. O objeto carrega o posicionamento sem precisar
 * escrevê-lo.
 *
 * Anatomia: barra de cabeçalho com código de registro e status, corpo com
 * campos rotulados, e — quando o contexto pede — um lacre.
 */

export function Ficha({
  code,
  status,
  children,
  className,
  rotate = 0,
}: {
  /** Código de registro exibido na barra. Ex.: "VLM · REG · 0001" */
  code: string;
  /** Conteúdo à direita da barra: status, categoria ou data. */
  status?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Rotação sutil, em graus — dá ao documento peso de objeto pousado. */
  rotate?: number;
}) {
  return (
    <div
      className={cn("ficha relative", className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <div className="ficha__bar">
        <span className="t-code text-paper-label">{code}</span>
        {status}
      </div>
      <div className="px-[1.05rem] py-1">{children}</div>
    </div>
  );
}

export function FichaField({
  label,
  value,
  /** Índice de preenchimento na emissão. Ausente = campo estático. */
  fill,
}: {
  label: string;
  value: ReactNode;
  fill?: number;
}) {
  return (
    <div
      className="ficha__field"
      {...(fill !== undefined ? { "data-fill": "" } : {})}
      style={
        fill !== undefined
          ? ({ "--fill-delay": `${150 + fill * 250}ms` } as React.CSSProperties)
          : undefined
      }
    >
      <span className="t-code pt-0.5 text-paper-label">{label}</span>
      <span className="font-mono text-[0.8125rem] leading-snug text-paper-ink">{value}</span>
    </div>
  );
}

/** Status que vira de "não registrado" para "registrado" durante a emissão. */
export function FichaStatus({ off, on }: { off: string; on: string }) {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="block h-2 w-2 rounded-full bg-[#b4482f] transition-colors duration-500 [transition-delay:1.15s] group-data-[issued]/ficha:bg-[#4e7d4a]"
      />
      <span className="t-code status-flip">
        <span className="is-off">{off}</span>
        <span className="is-on">{on}</span>
      </span>
    </span>
  );
}

/** Lacre da Velmont. A crista do logotipo dentro do selo circular. */
export function Seal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("seal", className)}
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <path
        d="M28 58 L50 34 L60 44 L72 57"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-mono)"
        fontSize="7"
        letterSpacing="1.4"
      >
        VELMONT
      </text>
    </svg>
  );
}
