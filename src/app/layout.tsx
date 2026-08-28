import type { Metadata, Viewport } from "next";
import { archivo, cormorant } from "@/lib/fonts";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealProvider } from "@/components/ui/RevealProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Velmont — Proteção como estratégia | Marcas e Patentes",
    template: "%s — Velmont",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "registro de marca",
    "propriedade industrial",
    "propriedade intelectual",
    "patente de invenção",
    "modelo de utilidade",
    "desenho industrial",
    "busca de anterioridade",
    "freedom to operate",
    "naming estratégico",
    "estruturação de empresas",
    "Curitiba",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.legalName,
    title: "Velmont — Proteção como estratégia",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Velmont — Proteção como estratégia",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2c0413",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  slogan: site.tagline,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.contact.address.street}, ${site.contact.address.building}`,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    postalCode: site.contact.address.zip,
    addressCountry: "BR",
  },
  sameAs: [site.contact.instagramUrl],
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: [
    "Propriedade industrial",
    "Propriedade intelectual",
    "Registro de marcas",
    "Patentes",
    "Desenho industrial",
    "Naming e identidade visual",
    "Estruturação de empresas",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${archivo.variable}`}>
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          // Dados estruturados institucionais — apenas informação oficial.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <RevealProvider />
        <ScrollProgress />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
