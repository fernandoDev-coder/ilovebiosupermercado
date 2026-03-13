import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consultas de nutrición, naturopatía y talleres/demostraciones. Acompañamiento experto y cercano en Alhaurín de la Torre."
};

export default function ServiciosPage() {
  return (
    <PageShell
      title="Servicios: guía experta y cercana"
      lead="Además de la tienda, ofrecemos acompañamiento para que tomes decisiones con confianza: nutrición, naturopatía y talleres."
    >
      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Consulta de nutrición",
            desc: "Recomendaciones personalizadas para hábitos sostenibles, objetivos realistas y una relación tranquila con la comida.",
            bullets: ["Objetivos: energía, digestión, peso, rendimiento, etc.", "Plan adaptado a tu rutina", "Recomendaciones de productos"]
          },
          {
            title: "Consulta de naturopatía",
            desc: "Enfoque integral para apoyar tu bienestar con opciones naturales y criterio, sin promesas exageradas.",
            bullets: ["Escucha y análisis de hábitos", "Apoyo con suplementos (si aplica)", "Acompañamiento progresivo"]
          },
          {
            title: "Talleres y demostraciones",
            desc: "Sesiones prácticas para conocer productos, resolver dudas y descubrir rutinas (cosmética, alimentación, etc.).",
            bullets: ["Aprendizaje sencillo y aplicable", "Espacio para preguntas", "Novedades y recomendaciones"]
          }
        ].map((s) => (
          <div key={s.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/70">{s.desc}</p>
            <ul className="mt-4 grid gap-2 text-sm text-ink/70">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">
                Reservar cita
              </a>
              <Link href="/contacto" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
                Consultar disponibilidad
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-black/5 bg-sand p-8">
        <h2 className="font-serif text-2xl text-ink">Para quién es</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
          Para personas que quieren mejorar hábitos, elegir productos con criterio o explorar opciones naturales con acompañamiento.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={whatsappUrl()} className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark">
            Escribir por WhatsApp
          </a>
          <Link href="/productos" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5">
            Ver productos
          </Link>
        </div>
        <p className="mt-4 text-xs text-ink/60">
          Nota: Los servicios, precios y horarios se confirman por mensaje o en tienda. Contacto: <span className="font-medium text-ink">{siteConfig.contact.phoneDisplay}</span>.
        </p>
      </section>
    </PageShell>
  );
}
