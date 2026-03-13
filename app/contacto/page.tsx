import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cómo llegar a I Love Bio en Alhaurín de la Torre (Málaga). Teléfono/WhatsApp, email, horarios y mapa."
};

export default function ContactoPage() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.location.city}`
  )}&output=embed`;

  return (
    <PageShell
      title="Contacto"
      lead="¿Tienes una duda sobre un producto, una dieta especial o una consulta? Escríbenos y te ayudamos."
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-2xl text-ink">Datos</h2>
          <dl className="mt-4 grid gap-4 text-sm text-ink/70">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">Tel / WhatsApp</dt>
              <dd className="mt-1">
                <a className="prose-link" href={whatsappUrl()}>{siteConfig.contact.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">Email</dt>
              <dd className="mt-1">
                <a className="prose-link" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">Dirección</dt>
              <dd className="mt-1">
                {siteConfig.address.streetAddress}, {siteConfig.location.city} ({siteConfig.address.postalCode})
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">Horario</dt>
              <dd className="mt-1 leading-6">
                {siteConfig.hours.lines.map((l) => <div key={l}>{l}</div>)}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">Escribir por WhatsApp</a>
            <a href={siteConfig.social.instagramUrl} target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">Instagram</a>
            <a href={siteConfig.social.facebookUrl} target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">Facebook</a>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft">
          <iframe
            title="Mapa de I Love Bio – Supermercado Ecológico"
            src={mapsSrc}
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </PageShell>
  );
}
