import Image from "next/image";
import Link from "next/link";

import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white shadow-soft">
              <Image src="/logo.svg" alt="I Love Bio" width={32} height={32} />
            </span>
            <p className="font-serif text-lg text-ink">{siteConfig.name}</p>
          </div>
          <p className="text-sm text-ink/70">
            Productos ecológicos certificados, cosmética natural y asesoramiento cercano en {siteConfig.location.city}.
          </p>
          <div className="flex flex-wrap gap-2">
            <a href={whatsappUrl()} className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark">
              WhatsApp
            </a>
            <Link href="/contacto" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ink hover:bg-black/5">
              Contacto
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-ink">Secciones</p>
          <ul className="grid gap-2 text-sm text-ink/70">
            <li>
              <Link className="hover:text-ink" href="/productos">
                Productos
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href="/servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href="/sobre">
                Sobre I Love Bio
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-ink">Visítanos</p>
          <div className="text-sm text-ink/70">
            <p>
              {siteConfig.location.city}, {siteConfig.location.region}
            </p>
            <p className="mt-2">
              <span className="text-ink/60">Tel/WhatsApp:</span> {siteConfig.contact.phoneDisplay}
            </p>
            <p>
              <span className="text-ink/60">Email:</span> {siteConfig.contact.email}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:brightness-105"
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-[#0f63d6]"
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName}. Hecho con cariño en Málaga.
          </p>
          <p>
            <Link href="/contacto" className="hover:text-ink">
              Cómo llegar
            </Link>{" "}
            ·{" "}
            <a className="hover:text-ink" href={whatsappUrl()}>
              Reservar consulta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}