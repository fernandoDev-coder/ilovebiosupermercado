import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { getDictionary } from "@/lib/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { formatTemplate } from "@/lib/format";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);
  return { title: dict.metadata.aboutTitle, description: dict.metadata.aboutDescription };
}

export default function SobrePage({ params }: { params: { locale: string } }) {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);

  return (
    <PageShell title={dict.about.pageTitle} lead={dict.about.pageLead}>
      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-2xl text-ink">{dict.about.howTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-ink/70">{formatTemplate(dict.about.howP1Template, { brand: siteConfig.shortName })}</p>
          <p className="mt-3 text-sm leading-7 text-ink/70">{dict.about.howP2}</p>
        </section>

        <section className="rounded-3xl border border-black/5 bg-sand p-6">
          <h2 className="font-serif text-2xl text-ink">{dict.about.valuesTitle}</h2>
          <ul className="mt-4 grid gap-3 text-sm text-ink/70">
            {dict.about.values.map((v) => (
              <li key={v} className="rounded-2xl bg-white/70 px-4 py-3">
                {v}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl text-ink">{dict.about.shopTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{dict.about.shopLead}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href={`/${locale}/productos`} className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            {dict.about.ctaProducts}
          </Link>
          <Link href={`/${locale}/servicios`} className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            {dict.about.ctaServices}
          </Link>
          <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">
            {dict.about.ctaWhatsApp}
          </a>
        </div>
      </section>
    </PageShell>
  );
}
