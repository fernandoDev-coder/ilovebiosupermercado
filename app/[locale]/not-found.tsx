import Link from "next/link";

import { getDictionary } from "@/lib/dictionary";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export default function NotFound(props: { params: { locale: string } }) {
  const { locale: raw } = props.params;
  const locale = normalizeLocale(raw);
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft">
        <h1 className="font-serif text-3xl text-ink">{dict.notFound.title}</h1>
        <p className="mt-3 text-ink/70">{dict.notFound.lead}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href={`/${locale}`} className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark">
            {dict.notFound.ctaHome}
          </Link>
          <Link href={`/${locale}/contacto`} className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5">
            {dict.notFound.ctaContact}
          </Link>
        </div>
      </div>
    </div>
  );
}
