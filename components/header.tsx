"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { formatTemplate } from "@/lib/format";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

function isHomeHref(href: string) {
  return /^\/(es|en)$/.test(href);
}

function active(pathname: string, href: string) {
  if (isHomeHref(href)) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function toggleLocalePath(pathname: string, locale: Locale, nextLocale: Locale) {
  const prefix = `/${locale}`;
  if (pathname === prefix) return `/${nextLocale}`;
  if (pathname.startsWith(`${prefix}/`)) return `/${nextLocale}${pathname.slice(prefix.length)}`;
  return `/${nextLocale}`;
}

function setLocalePath(pathname: string, locale: Locale, targetLocale: Locale) {
  if (pathname === `/${targetLocale}` || pathname.startsWith(`/${targetLocale}/`)) return pathname;
  return toggleLocalePath(pathname, locale, targetLocale);
}

function FlagLabel(props: { locale: Locale }) {
  const flagCode = props.locale === "es" ? "es" : "gb";
  return (
    <span className="inline-flex items-center gap-1">
      <span aria-hidden="true" className={["fi", `fi-${flagCode}`, "h-4 w-5 rounded-sm"].join(" ")} />
      <span className="text-xs font-semibold tracking-wide">{props.locale.toUpperCase()}</span>
    </span>
  );
}

export function Header(props: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () =>
      [
        { href: `/${props.locale}`, label: props.dict.nav.home },
        { href: `/${props.locale}/productos`, label: props.dict.nav.products },
        { href: `/${props.locale}/servicios`, label: props.dict.nav.services },
        { href: `/${props.locale}/sobre`, label: props.dict.nav.about },
        { href: `/${props.locale}/contacto`, label: props.dict.nav.contact }
      ] as const,
    [props.dict, props.locale]
  );

  const hrefEs = setLocalePath(pathname, props.locale, "es");
  const hrefEn = setLocalePath(pathname, props.locale, "en");
  const ariaEs = formatTemplate(props.dict.nav.switchToTemplate, { target: "Español" });
  const ariaEn = formatTemplate(props.dict.nav.switchToTemplate, { target: "English" });
  const brandLine = formatTemplate(props.dict.nav.brandLineTemplate, { city: siteConfig.location.city });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href={`/${props.locale}`} className="inline-flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/40">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white shadow-soft">
            <Image src="/logo.svg" alt="I Love Bio" width={32} height={32} priority />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base text-ink">{siteConfig.shortName}</span>
            <span className="block text-xs text-ink/60">{brandLine}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={props.dict.nav.primaryNav}>
          {links.map((l) => {
            const is = active(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={is ? "page" : undefined}
                className={[
                  "rounded-full px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand/40",
                  is ? "bg-brand/10 text-brand" : "text-ink/70 hover:bg-black/5 hover:text-ink"
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          <Link
            href={`/${props.locale}#visita`}
            className="hidden rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-black/5 lg:inline-flex"
          >
            {props.dict.nav.visitStore}
          </Link>
          <a href={whatsappUrl()} className="rounded-full bg-brand px-3 py-2 text-sm font-medium text-white shadow-soft hover:bg-brand-dark lg:px-4">
            {props.dict.nav.whatsapp}
          </a>
          <div className="inline-flex shrink-0 overflow-hidden rounded-full border border-black/10 bg-white">
            <Link
              href={hrefEs}
              aria-label={ariaEs}
              className={[
                "px-2 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand/40 lg:px-3",
                props.locale === "es" ? "bg-brand/10 text-brand" : "text-ink/80 hover:bg-black/5"
              ].join(" ")}
            >
              <FlagLabel locale="es" />
            </Link>
            <Link
              href={hrefEn}
              aria-label={ariaEn}
              className={[
                "px-2 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand/40 lg:px-3",
                props.locale === "en" ? "bg-brand/10 text-brand" : "text-ink/80 hover:bg-black/5"
              ].join(" ")}
            >
              <FlagLabel locale="en" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink md:hidden"
          aria-label={open ? props.dict.nav.close : props.dict.nav.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? props.dict.nav.close : props.dict.nav.menu}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <nav className="grid gap-1" aria-label={props.dict.nav.mobileNav}>
              {links.map((l) => {
                const is = active(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={is ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={[
                      "rounded-xl px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand/40",
                      is ? "bg-brand/10 text-brand" : "text-ink/80 hover:bg-black/5 hover:text-ink"
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="mt-2 grid gap-2">
                <Link
                  href={`/${props.locale}#visita`}
                  className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink"
                  onClick={() => setOpen(false)}
                >
                  {props.dict.nav.visitStore}
                </Link>
                <a href={whatsappUrl()} className="rounded-xl bg-brand px-3 py-2 text-sm font-medium text-white" onClick={() => setOpen(false)}>
                  {props.dict.nav.whatsapp}
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={hrefEs}
                    className={[
                      "rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink transition",
                      props.locale === "es" ? "bg-brand/10 text-brand" : "hover:bg-black/5"
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                    aria-label={ariaEs}
                  >
                    <FlagLabel locale="es" />
                  </Link>
                  <Link
                    href={hrefEn}
                    className={[
                      "rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink transition",
                      props.locale === "en" ? "bg-brand/10 text-brand" : "hover:bg-black/5"
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                    aria-label={ariaEn}
                  >
                    <FlagLabel locale="en" />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
