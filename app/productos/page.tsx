import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Explora categorías de productos ecológicos y naturales: alimentación bio, cosmética, suplementos, capilar y más."
};

const categories = [
  {
    title: "Alimentación ecológica",
    items: ["Básicos de despensa", "Snacks saludables", "Bebidas e infusiones", "Opciones veganas"]
  },
  {
    title: "Cereales y semillas",
    items: ["Granos y harinas", "Semillas", "Frutos secos", "Mezclas para desayunos"]
  },
  {
    title: "Cosmética natural",
    items: ["Hidratación y cuidado facial", "Higiene", "Cuidado corporal", "Ingredientes respetuosos"]
  },
  {
    title: "Productos capilares naturales",
    items: ["Champús suaves", "Mascarillas", "Aceites y sérums", "Rutinas según tu cabello"]
  },
  {
    title: "Suplementos naturales",
    items: ["Bienestar diario", "Apoyo estacional", "Digestivo", "Energía y descanso"]
  },
  {
    title: "Dietas especiales",
    items: ["Sin gluten (según stock)", "Sin azúcar (según stock)", "Alternativas vegetales", "Lectura de etiquetas"]
  }
] as const;

export default function ProductosPage() {
  return (
    <PageShell
      title="Productos ecológicos y naturales"
      lead="Una selección cuidada para tu día a día. Si buscas algo concreto o necesitas orientación, te ayudamos encantados."
    >
      <section className="rounded-3xl border border-black/5 bg-sand p-6">
        <p className="text-sm font-medium text-brand">Calidad</p>
        <p className="mt-2 text-sm leading-7 text-ink/70">
          <span className="font-medium text-ink">Todos nuestros productos cuentan con certificación ecológica</span>. Si
          tienes dudas, te explicamos cómo identificar sellos y etiquetas.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div key={c.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-2xl text-ink">{c.title}</h2>
            <ul className="mt-4 grid gap-2 text-sm text-ink/70">
              {c.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl text-ink">¿Buscas algo específico?</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
          Escríbenos y te confirmamos disponibilidad o te proponemos alternativas.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">
            Consultar por WhatsApp
          </a>
          <Link href="/servicios" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            Ver consultas
          </Link>
          <Link href="/contacto" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            Contacto
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
