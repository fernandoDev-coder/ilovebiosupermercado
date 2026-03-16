import { headers } from "next/headers";
import "flag-icons/css/flag-icons.min.css";
import "@/app/globals.css";

import { defaultLocale, isLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localeHeader = headers().get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html lang={locale}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
