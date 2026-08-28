import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Velmont — Proteção como estratégia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagem de compartilhamento. Reproduz a gramática do hero: vinho profundo,
 * crista do logotipo em linha e a declaração da marca.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2c0413",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#cfae74",
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            <div style={{ width: 44, height: 1, background: "#cfae74" }} />
            Proteção como estratégia
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 48,
              color: "#f6f0e6",
              fontSize: 68,
              lineHeight: 1.08,
              letterSpacing: -1,
            }}
          >
            <div>Tudo o que a sua empresa</div>
            <div>criou já vale.</div>
            <div style={{ color: "#e9d3b3", fontStyle: "italic" }}>
              Falta estar no nome dela.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(233,211,179,0.2)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#f6f0e6", fontSize: 40, letterSpacing: 7 }}>VELMONT</div>
            <div
              style={{
                color: "rgba(233,211,179,0.6)",
                fontSize: 15,
                letterSpacing: 5,
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                marginTop: 6,
              }}
            >
              Marcas e Patentes
            </div>
          </div>
          <div
            style={{
              color: "rgba(233,211,179,0.55)",
              fontSize: 18,
              fontFamily: "sans-serif",
              display: "flex",
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
