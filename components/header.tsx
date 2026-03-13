"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" }
] as const;

function active(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="inline-flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/40">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white shadow-soft">
            <Image src="/logo.svg" alt="I Love Bio" width={32} height={32} priority />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base text-ink">{siteConfig.shortName}</span>
            <span className="block text-xs text-ink/60">Supermercado ecológico • {siteConfig.location.city}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
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

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/#visita" className="rounded-full px-4 py-2 text-sm text-ink/80 hover:bg-black/5">
            Visitar la tienda
          </Link>
          <a href={whatsappUrl()} className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-soft hover:bg-brand-dark">
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <nav className="grid gap-1" aria-label="Navegación móvil">
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
                <Link href="/#visita" className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-ink" onClick={() => setOpen(false)}>
                  Visitar la tienda
                </Link>
                <a href={whatsappUrl()} className="rounded-xl bg-brand px-3 py-2 text-sm font-medium text-white" onClick={() => setOpen(false)}>
                  Escribir por WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
