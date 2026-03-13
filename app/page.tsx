import Image from "next/image";
import Link from "next/link";

import { ReviewCarousel } from "@/components/review-carousel";
import { fullAddress, siteConfig, whatsappUrl } from "@/lib/site-config";

export default function HomePage() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress())}&output=embed`;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              ⭐ {siteConfig.rating.value} / 5 · {siteConfig.rating.count} reseñas en Google
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Tu supermercado ecológico de confianza en {siteConfig.location.city}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-ink/70">
              Productos bio certificados, asesoramiento nutricional y atención cercana. Un espacio cálido donde te escuchamos y te ayudamos a elegir lo que mejor te sienta.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#visita" className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-brand-dark">
                Visitar la tienda
              </Link>
              <Link href="#productos" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-black/5">
                Descubrir productos
              </Link>
              <a href={whatsappUrl()} className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm text-ink/70 hover:text-ink">
                Reservar consulta →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-ink/70 sm:grid-cols-4">
              {[{ t: "Ecológico", d: "Certificado" }, { t: "Cercano", d: "Trato humano" }, { t: "Variedad", d: "Bio y natural" }, { t: "Guía", d: "Nutrición" }].map((x) => (
                <div key={x.t} className="rounded-2xl border border-black/5 bg-white px-4 py-3">
                  <p className="font-medium text-ink">{x.t}</p>
                  <p className="mt-1">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_20%_20%,rgba(47,143,78,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(136,166,123,0.22),transparent_55%)]" />
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de I Love Bio – Supermercado Ecológico"
              width={900}
              height={700}
              priority
              className="h-auto w-full rounded-[48px] border border-black/5 bg-white shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="font-serif text-3xl text-ink">¿Por qué elegirnos?</h2>
              <p className="mt-3 max-w-2xl text-ink/70">Somos una tienda local, con vocación de servicio. Aquí vienes a comprar… y también a sentirte bien acompañado.</p>
            </div>
            <div className="text-sm text-ink/60 md:text-right">Atención destacada en reseñas por Virginia y Gema.</div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[{ title: "Productos ecológicos certificados", desc: "Calidad y confianza en cada compra." }, { title: "Asesoramiento nutricional personalizado", desc: "Te ayudamos a elegir según tu objetivo." }, { title: "Gran variedad de productos bio", desc: "Alimentación, suplementos, dietas especiales." }, { title: "Atención cercana y humana", desc: "Una tienda luminosa donde se nota la vocación." }].map((b) => (
              <div key={b.title} className="rounded-3xl border border-black/5 bg-sand p-5">
                <p className="font-medium text-ink">{b.title}</p>
                <p className="mt-2 text-sm text-ink/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="scroll-mt-24 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif text-3xl text-ink">Productos</h2>
              <p className="mt-3 max-w-2xl text-ink/70">
                Selección cuidada para comer mejor y vivir de forma más natural. <span className="font-medium text-ink">Todos nuestros productos cuentan con certificación ecológica.</span>
              </p>
            </div>
            <Link href="/productos" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-black/5">
              Ver categorías
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[{ title: "Alimentación ecológica", desc: "Frescos, básicos y despensa bio." }, { title: "Cereales y semillas", desc: "Granos, harinas, frutos secos." }, { title: "Cosmética natural", desc: "Piel, higiene y cuidado consciente." }, { title: "Productos capilares naturales", desc: "Tratamientos y rutinas suaves." }, { title: "Suplementos naturales", desc: "Apoyo diario con criterio." }, { title: "Dietas especiales", desc: "Sin gluten, vegano, sin azúcar (según stock)." }].map((c) => (
              <div key={c.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft transition hover:-translate-y-0.5">
                <p className="text-sm font-medium text-brand">Categoría</p>
                <p className="mt-2 font-serif text-xl text-ink">{c.title}</p>
                <p className="mt-2 text-sm leading-7 text-ink/70">{c.desc}</p>
                <Link className="mt-4 inline-flex text-sm font-medium text-ink/70 hover:text-ink" href="/productos">
                  Explorar →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="scroll-mt-24 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-ink">Servicios</h2>
              <p className="mt-3 max-w-xl text-ink/70">Si buscas guía, aquí tienes un acompañamiento experto y cercano: nutrición, naturopatía y talleres.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={whatsappUrl()} className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-dark">
                  Reservar consulta
                </a>
                <Link href="/servicios" className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-black/5">
                  Ver detalles
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {[{ title: "Consultas de nutrición", desc: "Objetivos realistas, hábitos sostenibles y recomendaciones adaptadas a ti." }, { title: "Naturopatía", desc: "Enfoque integral para apoyar tu bienestar con productos naturales y criterio." }, { title: "Talleres y demostraciones", desc: "Aprende, prueba productos y resuelve dudas en un ambiente cercano." }].map((s) => (
                <div key={s.title} className="rounded-3xl border border-black/5 bg-sand p-6">
                  <p className="font-serif text-xl text-ink">{s.title}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opiniones" className="scroll-mt-24 border-t border-black/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-ink">Opiniones reales</h2>
            <p className="mt-3 max-w-xl text-ink/70">Quienes nos visitan hablan de la calidad, la variedad y, sobre todo, del trato humano.</p>
            <p className="mt-6 text-sm text-ink/60">⭐ {siteConfig.rating.value} / 5 · {siteConfig.rating.count} reseñas</p>
          </div>
          <ReviewCarousel reviews={[{ quote: "Excelente tienda ecológica en Alhaurín de la Torre. Tienen de todo y el personal es encantador." }, { quote: "Productos de gran calidad y una atención al cliente excepcional." }, { quote: "Una de mis paradas favoritas cuando hago recados. Se nota que trabajan con vocación." }]} />
        </div>
      </section>

      <section id="visita" className="scroll-mt-24 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-serif text-3xl text-ink">Visítanos</h2>
              <p className="mt-3 max-w-xl text-ink/70">Te esperamos en la tienda. Si tienes dudas sobre productos, dietas especiales o rutinas naturales, ven a vernos o escríbenos.</p>

              <div className="mt-6 rounded-3xl border border-black/5 bg-sand p-6">
                <p className="text-sm font-medium text-ink">Dirección</p>
                <p className="mt-2 text-sm text-ink/70">
                  {siteConfig.address.streetAddress}, {siteConfig.location.city} ({siteConfig.address.postalCode})
                </p>
                <p className="mt-4 text-sm font-medium text-ink">Horario</p>
                <div className="mt-2 text-sm leading-7 text-ink/70">
                  {siteConfig.hours.lines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href="/contacto" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ink hover:bg-black/5">
                    Cómo llegar
                  </Link>
                  <a href={whatsappUrl()} className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark">
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft">
              <iframe
                title="Mapa de I Love Bio – Supermercado Ecológico"
                src={mapsSrc}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


