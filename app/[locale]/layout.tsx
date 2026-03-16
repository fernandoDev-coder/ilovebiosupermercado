import type { Metadata } from "next";
import Script from "next/script";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/page-transition";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { getDictionary } from "@/lib/dictionary";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n";
import { getLocalizedAlternates, getLocalizedUrl } from "@/lib/seo";
import { getLocalBusinessJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale: raw } = params;
  const locale = normalizeLocale(raw);
  const dict = getDictionary(locale);

  const ogLocale = locale === "en" ? "en_US" : "es_ES";

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.shortName}`
    },
    description: dict.metadata.siteDescription,
    keywords: [...siteConfig.keywords],
    alternates: getLocalizedAlternates(locale),
    openGraph: {
      title: siteConfig.name,
      description: dict.metadata.siteDescription,
      url: getLocalizedUrl(locale),
      siteName: siteConfig.name,
      locale: ogLocale,
      type: "website",
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteConfig.name }]
    }
  };
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale: raw } = params;
  const locale = normalizeLocale(raw);
  const dict = getDictionary(locale);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold"
      >
        {dict.skipToContent}
      </a>

      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd({ description: dict.metadata.siteDescription })) }}
      />

      <Header locale={locale} dict={dict} />
      <main id="contenido" className="pt-16">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppFloat dict={dict} />
    </>
  );
}
