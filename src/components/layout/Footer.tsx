import Link from "next/link";
import { footerNav, site, whatsappUrl } from "@/content/site";
import { Logo } from "./Logo";
import { Ridge } from "@/components/ui/Marks";
import { Reveal } from "@/components/ui/Reveal";

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="t-eyebrow mb-6 text-gold-400/70">{title}</h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="text-[0.9375rem] text-cream-200/70 transition-colors duration-300 hover:text-cream-100"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const { address, phone, email, instagram, instagramUrl } = site.contact;

  return (
    <footer className="grain relative isolate overflow-hidden bg-wine-950 text-cream-200">
      <div
        className="lightfield pointer-events-none absolute inset-0 -z-10"
        style={{ "--lf-x": "12%", "--lf-y": "0%", "--lf-strength": "10%" } as React.CSSProperties}
      />

      {/* Crista: fecha o site com o mesmo gesto que o abre */}
      <Reveal variant="up" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
        <Ridge animated className="h-[18vw] w-full text-cream-300/10" strokeWidth={1} />
      </Reveal>

      <div className="shell relative py-[clamp(4rem,7vw,7rem)]">
        <div className="grid gap-x-[clamp(1.5rem,3vw,4rem)] gap-y-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="t-display mt-9 max-w-[11em] text-[clamp(1.75rem,2.6vw,2.5rem)] text-cream-100">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cream-200/40">
              {site.taglineEn}
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-3 md:col-span-7">
            <Column title="Serviços" links={footerNav.servicos} />
            <Column title="Conteúdos" links={footerNav.conteudos} />
            <Column title="Velmont" links={footerNav.empresa} />
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-cream-200/12" />

        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-12">
          <address className="not-italic md:col-span-4">
            <h3 className="t-eyebrow mb-5 text-gold-400/70">Endereço</h3>
            <p className="text-[0.9375rem] leading-relaxed text-cream-200/70">
              {address.street}
              <br />
              {address.building}
              <br />
              {address.district} — {address.city}/{address.state}
              <br />
              CEP {address.zip}
            </p>
          </address>

          <div className="md:col-span-4">
            <h3 className="t-eyebrow mb-5 text-gold-400/70">Contato</h3>
            <ul className="space-y-2 text-[0.9375rem] text-cream-200/70">
              <li>
                <a
                  href={whatsappUrl("Olá! Vim pelo site da Velmont.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-cream-100"
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors duration-300 hover:text-cream-100"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-cream-100"
                >
                  {instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="t-eyebrow mb-5 text-gold-400/70">Atendimento</h3>
            <ul className="space-y-2 text-[0.9375rem] text-cream-200/70">
              {site.serviceModes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-xs uppercase tracking-[0.16em] text-cream-200/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p className="max-w-[46ch] normal-case tracking-normal">
            O conteúdo deste site tem finalidade informativa e não constitui parecer ou
            orientação jurídica sobre caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
