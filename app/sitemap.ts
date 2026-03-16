import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getLocalizedUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/sobre", "/productos", "/servicios", "/contacto"];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: getLocalizedUrl(locale, path),
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7
      });
    }
  }

  return entries;
}
