import type { Metadata } from "next";

import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { PageShell } from "@/components/page-shell";
import { getDictionary } from "@/lib/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { formatTemplate } from "@/lib/format";
import { getLocalizedAlternates } from "@/lib/seo";
import { fullAddress, siteConfig, telUrl, whatsappUrl } from "@/lib/site-config";

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.contactTitle,
    description: dict.metadata.contactDescription,
    alternates: getLocalizedAlternates(locale, "/contacto"),
    keywords: [
      `cómo llegar ${siteConfig.shortName}`,
      `horario ${siteConfig.shortName}`,
      `contacto supermercado ecológico ${siteConfig.location.city}`
    ]
  };
}

export default function ContactoPage({ params }: { params: { locale: string } }) {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&output=embed`;

  return (
    <PageShell title={dict.contact.pageTitle} lead={dict.contact.pageLead}>
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-2xl text-ink">{dict.contact.dataTitle}</h2>
          <dl className="mt-4 grid gap-4 text-sm text-ink/70">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">{dict.contact.tel}</dt>
              <dd className="mt-1">
                <a className="prose-link" href={telUrl()}>
                  {siteConfig.contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">{dict.contact.email}</dt>
              <dd className="mt-1">
                <a className="prose-link" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">{dict.contact.address}</dt>
              <dd className="mt-1">
                {siteConfig.address.streetAddress}, {siteConfig.location.city} ({siteConfig.address.postalCode})
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink/50">{dict.contact.hours}</dt>
              <dd className="mt-1 leading-6">
                {siteConfig.hours.lines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={whatsappUrl()}
              className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              {dict.contact.ctaWhatsApp}
            </a>

            <a
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
              aria-label={dict.contact.openInstagram}
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-[#0f63d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
              aria-label={dict.contact.openFacebook}
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft">
          <iframe
            title={formatTemplate(dict.contact.mapTitleTemplate, { brand: siteConfig.shortName })}
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
