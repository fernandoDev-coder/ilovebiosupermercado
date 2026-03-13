"use client";

import { useEffect, useMemo, useState } from "react";

type Review = {
  quote: string;
  author?: string;
};

export function ReviewCarousel(props: { reviews: Review[] }) {
  const reviews = useMemo(() => props.reviews, [props.reviews]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reviews.length <= 1) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6500);
    return () => window.clearInterval(id);
  }, [reviews.length]);

  const review = reviews[index] ?? reviews[0];
  if (!review) return null;

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
      <p className="text-sm font-medium text-brand">Opiniones</p>
      <figure className="mt-3">
        <blockquote className="text-lg leading-8 text-ink">{review.quote}</blockquote>
        {review.author ? <figcaption className="mt-3 text-sm text-ink/60">— {review.author}</figcaption> : null}
      </figure>

      {reviews.length > 1 ? (
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex gap-1">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={["h-2 w-2 rounded-full transition", i === index ? "bg-brand" : "bg-black/10 hover:bg-black/20"].join(" ")}
                aria-label={`Ir a la reseña ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink hover:bg-black/5"
              onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            >
              Anterior
            </button>
            <button
              type="button"
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink hover:bg-black/5"
              onClick={() => setIndex((i) => (i + 1) % reviews.length)}
            >
              Siguiente
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
