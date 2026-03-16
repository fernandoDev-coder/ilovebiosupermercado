import Image from "next/image";
import Link from "next/link";

import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { formatTemplate } from "@/lib/format";
import { siteConfig, telUrl } from "@/lib/site-config";

export function Footer(props: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white shadow-soft">
              <Image src="/logo.svg" alt="I Love Bio" width={32} height={32} />
            </span>
            <p className="font-serif text-lg text-ink">{siteConfig.name}</p>
          </div>
          <p className="text-sm text-ink/70">{formatTemplate(props.dict.footer.taglineTemplate, { city: siteConfig.location.city })}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-ink">{props.dict.footer.sections}</p>
          <ul className="grid gap-2 text-sm text-ink/70">
            <li>
              <Link className="hover:text-ink" href={`/${props.locale}/productos`}>
                {props.dict.nav.products}
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href={`/${props.locale}/servicios`}>
                {props.dict.nav.services}
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href={`/${props.locale}/sobre`}>
                {props.dict.nav.about} {siteConfig.shortName}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-ink">{props.dict.footer.visitUs}</p>
          <div className="text-sm text-ink/70">
            <p>
              {siteConfig.location.city}, {siteConfig.location.region}
            </p>
            <p className="mt-2">
              <span className="text-ink/60">Tel/WhatsApp:</span>{" "}
              <a className="prose-link" href={telUrl()}>
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-ink/60">Email:</span> {siteConfig.contact.email}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:brightness-105"
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={props.dict.footer.openInstagram}
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-[#0f63d6]"
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={props.dict.footer.openFacebook}
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>{formatTemplate(props.dict.footer.madeWithLoveTemplate, { year, brand: siteConfig.shortName })}</p>
        </div>
      </div>
    </footer>
  );
}
