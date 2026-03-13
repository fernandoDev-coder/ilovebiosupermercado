import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-soft">
        <h1 className="font-serif text-3xl text-ink">Página no encontrada</h1>
        <p className="mt-3 text-ink/70">La página que buscas no existe o ha cambiado de lugar.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/" className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark">
            Ir a inicio
          </Link>
          <Link href="/contacto" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-black/5">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
