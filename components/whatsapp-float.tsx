"use client";

import { useEffect, useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      className={[
        "fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-white shadow-soft transition",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      ].join(" ")}
      aria-label={`Escribir por WhatsApp a ${siteConfig.shortName}`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">WA</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
