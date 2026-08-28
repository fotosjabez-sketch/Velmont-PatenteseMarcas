import type { ReactNode } from "react";

/**
 * NOTA DE VALIDAÇÃO
 *
 * Marca, de forma visível, conteúdo que ainda precisa ser validado pela
 * Velmont. Existe justamente para que placeholder nunca seja lido como
 * informação oficial — princípio editorial deste site.
 */
export function ValidationNote({ children }: { children: ReactNode }) {
  return (
    <div className="strata-note relative border-l-2 border-gold-500 bg-gold-500/[0.07] px-5 py-4">
      <p className="t-eyebrow mb-2 text-gold-ink">Conteúdo a validar</p>
      <p className="text-[0.875rem] leading-relaxed text-ink-700">{children}</p>
    </div>
  );
}
