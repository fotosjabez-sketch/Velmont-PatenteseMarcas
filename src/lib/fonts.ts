import { Instrument_Serif, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * SISTEMA TIPOGRÁFICO — três vozes, três funções.
 * Racional completo em docs/DESIGN-SYSTEM.md.
 */

/** PENSAMENTO — manchetes, manifesto, citações. Alto contraste e gume. */
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--vel-serif",
});

/** INFORMAÇÃO — navegação, corpo, rótulos de interface. */
export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--vel-sans",
});

/** REGISTRO — códigos, classes, datas, protocolos e status. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--vel-mono",
});
