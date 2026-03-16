import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ReviewCarousel } from "@/components/review-carousel";
import { getDictionary } from "@/lib/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { formatTemplate } from "@/lib/format";
import { homeReviews } from "@/lib/reviews";
import { fullAddress, siteConfig, telUrl, whatsappUrl } from "@/lib/site-config";

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);
  return { title: dict.metadata.homeTitle, description: dict.metadata.siteDescription };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = normalizeLocale(params.locale);
  const dict = getDictionary(locale);
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&output=embed`;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              {formatTemplate(dict.home.badgeTemplate, { rating: siteConfig.rating.value, count: siteConfig.rating.count })}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {formatTemplate(dict.home.h1Template, { city: siteConfig.location.city })}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-ink/70">{dict.home.lead}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/${locale}#visita`}
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-brand-dark"
              >
                {dict.home.ctaVisit}
              </Link>
              <a
                href={telUrl()}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-black/5"
              >
                <span aria-hidden="true" className="leading-none">
                  📞
                </span>
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,78,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(136,166,123,0.22),transparent_55%)]" />
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de I Love Bio – Supermercado Ecológico"
              width={900}
              height={700}
              priority
              className="h-auto w-full rounded-[48px] border border-black/5 bg-white shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="font-serif text-3xl text-ink">{dict.home.whyTitle}</h2>
              <p className="mt-3 max-w-2xl text-ink/70">{dict.home.whyLead}</p>
            </div>
            <div className="text-sm text-ink/60 md:text-right">{dict.home.whyAside}</div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {dict.home.whyBlocks.map((b) => (
              <div key={b.title} className="rounded-3xl border border-black/5 bg-sand p-5">
                <p className="font-medium text-ink">{b.title}</p>
                <p className="mt-2 text-sm text-ink/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="scroll-mt-24 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif text-3xl text-ink">{dict.home.productsSectionTitle}</h2>
              <p className="mt-3 max-w-2xl text-ink/70">{dict.home.productsSectionLead}</p>
            </div>
            <Link
              href={`/${locale}/productos`}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-black/5"
            >
              {dict.home.productsSectionCta}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.productsCards.map((c) => (
              <div key={c.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft transition hover:-translate-y-0.5">
                <p className="text-sm font-medium text-brand">{dict.home.productsCardKicker}</p>
                <p className="mt-2 font-serif text-xl text-ink">{c.title}</p>
                <p className="mt-2 text-sm leading-7 text-ink/70">{c.desc}</p>
                <Link className="mt-4 inline-flex text-sm font-medium text-ink/70 hover:text-ink" href={`/${locale}/productos`}>
                  {dict.home.productsCardCta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-24 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-ink">{dict.home.servicesTitle}</h2>
              <p className="mt-3 max-w-xl text-ink/70">{dict.home.servicesLead}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-dark">
                  {dict.home.servicesCtaBook}
                </a>
                <Link
                  href={`/${locale}/servicios`}
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-black/5"
                >
                  {dict.home.servicesCtaDetails}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {dict.home.servicesCards.map((s) => (
                <div key={s.title} className="rounded-3xl border border-black/5 bg-sand p-6">
                  <p className="font-serif text-xl text-ink">{s.title}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opiniones" className="scroll-mt-24 border-t border-black/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-ink">{dict.home.reviewsTitle}</h2>
            <p className="mt-3 max-w-xl text-ink/70">{dict.home.reviewsLead}</p>
            <p className="mt-6 text-sm text-ink/60">
              {formatTemplate(dict.home.reviewsBadgeTemplate, { rating: siteConfig.rating.value, count: siteConfig.rating.count })}
            </p>
          </div>
          <ReviewCarousel reviews={homeReviews} labels={dict.reviewCarousel} />
        </div>
      </section>

      <section id="visita" className="scroll-mt-24 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-serif text-3xl text-ink">{dict.home.visitTitle}</h2>
              <p className="mt-3 max-w-xl text-ink/70">{dict.home.visitLead}</p>

              <div className="mt-6 rounded-3xl border border-black/5 bg-sand p-6">
                <p className="text-sm font-medium text-ink">{dict.home.visitAddressLabel}</p>
                <p className="mt-2 text-sm text-ink/70">
                  {siteConfig.address.streetAddress}, {siteConfig.location.city} ({siteConfig.address.postalCode})
                </p>
                <p className="mt-4 text-sm font-medium text-ink">{dict.home.visitHoursLabel}</p>
                <div className="mt-2 text-sm leading-7 text-ink/70">
                  {siteConfig.hours.lines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href={`/${locale}/contacto`} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ink hover:bg-black/5">
                    {dict.home.visitHowToGetThere}
                  </Link>
                  <a href={whatsappUrl()} className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark">
                    {dict.home.visitWhatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft">
              <iframe
                title={formatTemplate(dict.home.mapTitleTemplate, { brand: siteConfig.shortName })}
                src={mapsSrc}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
