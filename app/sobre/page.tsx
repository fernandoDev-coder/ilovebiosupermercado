import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia de I Love Bio: una tienda ecológica local con asesoramiento cercano en Alhaurín de la Torre."
};

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre I Love Bio"
      lead="Somos una tienda local que cuida los detalles: productos ecológicos de calidad, cosmética natural y un trato humano que se nota desde que entras."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-2xl text-ink">Nuestra forma de trabajar</h2>
          <p className="mt-3 text-sm leading-7 text-ink/70">
            En {siteConfig.shortName} creemos en lo cercano: escuchar, recomendar con honestidad y ayudarte a encontrar opciones que encajen con tu día a día.
          </p>
          <p className="mt-3 text-sm leading-7 text-ink/70">
            En reseñas se repiten dos nombres: <span className="font-medium text-ink">Virginia</span> y <span className="font-medium text-ink">Gema</span>.
          </p>
        </section>

        <section className="rounded-3xl border border-black/5 bg-sand p-6">
          <h2 className="font-serif text-2xl text-ink">Lo que defendemos</h2>
          <ul className="mt-4 grid gap-3 text-sm text-ink/70">
            <li className="rounded-2xl bg-white/70 px-4 py-3">🌱 Productos ecológicos certificados y selección cuidada.</li>
            <li className="rounded-2xl bg-white/70 px-4 py-3">💚 Atención humana, sin prisas, con recomendaciones claras.</li>
            <li className="rounded-2xl bg-white/70 px-4 py-3">🧠 Asesoramiento con criterio: nutrición y naturopatía.</li>
            <li className="rounded-2xl bg-white/70 px-4 py-3">♻️ Compromiso con hábitos más sostenibles, de forma realista.</li>
          </ul>
        </section>
      </div>

      <section className="mt-8 rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
        <h2 className="font-serif text-2xl text-ink">Tienda bonita, luz natural, y una experiencia agradable</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
          Nos importa que comprar sea fácil: categorías claras, recomendaciones útiles y un ambiente cálido.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/productos" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            Ver productos
          </Link>
          <Link href="/servicios" className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-ink hover:bg-black/5">
            Ver servicios
          </Link>
          <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark">
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
