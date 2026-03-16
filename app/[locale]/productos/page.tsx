import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { getDictionary } from "@/lib/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { getLocalizedAlternates } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.productsTitle,
    description: `${dict.metadata.productsDescription} En ${siteConfig.location.city}, ${siteConfig.location.region}.`,
    alternates: getLocalizedAlternates(locale, "/productos"),
    keywords: [
      "productos ecológicos Alhaurín de la Torre",
      "cosmética natural Málaga",
      "suplementos naturales Alhaurín de la Torre"
    ]
  };
}

export default function ProductosPage({ params }: { params: { locale: string } }) {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);

  return (
    <PageShell title={dict.products.pageTitle} lead={dict.products.pageLead}>
      <section className="rounded-3xl border border-black/5 bg-sand p-6">
        <p className="text-sm font-medium text-brand">{dict.products.qualityKicker}</p>
        <p className="mt-2 text-sm leading-7 text-ink/70">
          <span className="font-medium text-ink">{dict.products.qualityText}</span>
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.products.categories.map((c) => (
          <div key={c.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-2xl text-ink">{c.title}</h2>
            <ul className="mt-4 grid gap-2 text-sm text-ink/70">
              {c.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl text-ink">{dict.products.specificTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{dict.products.specificLead}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">
            {dict.products.ctaWhatsApp}
          </a>
          <Link href={`/${locale}/servicios`} className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            {dict.products.ctaServices}
          </Link>
          <Link href={`/${locale}/contacto`} className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            {dict.products.ctaContact}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

