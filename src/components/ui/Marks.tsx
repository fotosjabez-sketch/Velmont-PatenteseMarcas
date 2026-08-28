import { cn } from "@/lib/utils";

/**
 * SISTEMA DE MOTIVOS — derivado da identidade oficial Velmont.
 *
 * Regra do sistema (decisão de direção de arte, documentada em
 * docs/DESIGN-SYSTEM.md):
 *   • CRISTA (ridge) — a montanha do logotipo, aberta em linha. Representa
 *     altitude construída: o patrimônio. Aparece desenhando-se no scroll.
 *   • ESTRATOS (strata) — as listras concêntricas do material oficial.
 *     Representam camadas de proteção. Usadas como marcação, nunca como enfeite.
 *   • CAMPO (field) — os círculos creme que sangram das bordas. Delimitam
 *     áreas de leitura e ancoram conteúdo humano.
 */

/** Crista: a silhueta do logotipo redesenhada como linha contínua. */
export function Ridge({
  className,
  strokeWidth = 1.25,
  animated = false,
}: {
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 490 101"
      fill="none"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
      preserveAspectRatio="xMidYMax meet"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* cume principal e encosta esquerda */}
        <path
          d="M110 96 L255 4 L318 34 L383 94"
          className={animated ? "draw-path" : undefined}
          style={animated ? ({ "--len": 420 } as React.CSSProperties) : undefined}
        />
        {/* cume secundário à esquerda */}
        <path
          d="M150 92 L191 36 L214 47"
          className={animated ? "draw-path" : undefined}
          style={
            animated ? ({ "--len": 130, "--draw-delay": "260ms" } as React.CSSProperties) : undefined
          }
        />
        {/* vale entre os cumes */}
        <path
          d="M248 90 L305 51"
          className={animated ? "draw-path" : undefined}
          style={
            animated ? ({ "--len": 80, "--draw-delay": "480ms" } as React.CSSProperties) : undefined
          }
        />
      </g>
    </svg>
  );
}

/** Crista reduzida — usada no header e em marcadores de seção. */
export function RidgeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 16" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 14.5 L20 1.5 L26 5.5 L38 14.5" />
        <path d="M8 14 L14.5 5.5 L18 7.5" />
      </g>
    </svg>
  );
}

/**
 * Estratos — arco de listras concêntricas do material oficial.
 * `corner` define de qual canto o arco nasce.
 */
export function Strata({
  className,
  lines = 9,
  corner = "br",
}: {
  className?: string;
  lines?: number;
  corner?: "tl" | "tr" | "bl" | "br";
}) {
  /* Geometria base: cantos angulares aninhados em torno do vértice inferior
     esquerdo, recortados por um círculo com centro nesse mesmo vértice.
     É esse recorte — as pontas dos ângulos cortadas pelo arco — que produz o
     motivo do material oficial. As demais posições são rotações da base. */
  const rotation = { bl: 0, br: 90, tr: 180, tl: 270 }[corner];
  const clipId = `strata-${corner}-${lines}`;
  const step = 100 / (lines + 1);

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="0" cy="100" r="99" />
        </clipPath>
      </defs>
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="butt"
        clipPath={`url(#${clipId})`}
      >
        {Array.from({ length: lines }).map((_, i) => {
          const k = (i + 1) * step;
          return <path key={i} d={`M0 ${100 - k} H${k} V100`} />;
        })}
        <circle cx="0" cy="100" r="99" strokeWidth="1.2" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Numeral do trilho editorial. */
export function IndexMark({ n, className }: { n: string; className?: string }) {
  return (
    <span className={cn("t-index inline-flex items-center gap-2", className)}>
      <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
      {n}
    </span>
  );
}
