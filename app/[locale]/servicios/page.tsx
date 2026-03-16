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
  return { title: dict.metadata.servicesTitle, description: dict.metadata.servicesDescription };
}

export default function ServiciosPage({ params }: { params: { locale: string } }) {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);

  return (
    <PageShell title={dict.services.pageTitle} lead={dict.services.pageLead}>
      <section className="grid gap-4 md:grid-cols-3">
        {dict.services.cards.map((s) => (
          <div key={s.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/70">{s.desc}</p>
            <ul className="mt-4 grid gap-2 text-sm text-ink/70">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">
                {dict.home.servicesCtaBook}
              </a>
              <Link href={`/${locale}/contacto`} className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-black/5 bg-sand p-8">
        <h2 className="font-serif text-2xl text-ink">{dict.services.forWhoTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{dict.services.forWhoLead}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={whatsappUrl()} className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark">
            {dict.services.ctaWhatsApp}
          </a>
          <Link href={`/${locale}/productos`} className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5">
            {dict.services.ctaProducts}
          </Link>
        </div>
        <p className="mt-4 text-xs text-ink/60">{formatTemplate(dict.services.noteTemplate, { phone: siteConfig.contact.phoneDisplay })}</p>
      </section>
    </PageShell>
  );
}
