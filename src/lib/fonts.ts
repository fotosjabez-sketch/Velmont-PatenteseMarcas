import { Cormorant_Garamond, Archivo } from "next/font/google";

/**
 * Display serif — ecoa o lettering do logotipo Velmont (serifa clássica,
 * alto contraste). Usada em manchetes, manifesto e citações.
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

/**
 * Sans contemporânea — navegação, corpo, rótulos e metadados.
 */
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-archivo",
});
