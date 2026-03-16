import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function getBaseUrl() {
  return trimTrailingSlash(siteConfig.siteUrl);
}

export function getLocalizedPath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function getLocalizedUrl(locale: Locale, path = "") {
  return `${getBaseUrl()}${getLocalizedPath(locale, path)}`;
}

export function getLanguageAlternates(path = ""): NonNullable<Metadata["alternates"]>["languages"] {
  return Object.fromEntries(locales.map((locale) => [locale, getLocalizedUrl(locale, path)]));
}

export function getLocalizedAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  return {
    canonical: getLocalizedUrl(locale, path),
    languages: {
      ...getLanguageAlternates(path),
      "x-default": getLocalizedUrl(defaultLocale, path)
    }
  };
}
