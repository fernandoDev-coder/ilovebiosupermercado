"use client";

import { useEffect, useMemo, useState } from "react";

import type { Dictionary } from "@/lib/dictionary";
import type { Review } from "@/lib/reviews";
import { formatTemplate } from "@/lib/format";

function Stars(props: { value?: number; ariaLabel?: string }) {
  const value = Math.max(0, Math.min(5, Math.round(props.value ?? 0)));
  if (!value) return null;
  return (
    <div className="text-sm leading-none text-brand" aria-label={props.ariaLabel ?? `${value} / 5`}>
      {"★".repeat(value)}
      <span className="text-black/15">{"★".repeat(5 - value)}</span>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    // Safari fallback
    (media as unknown as { addListener: (cb: () => void) => void }).addListener(update);
    return () => (media as unknown as { removeListener: (cb: () => void) => void }).removeListener(update);
  }, []);

  return reduced;
}

export function ReviewCarousel(props: { reviews: Review[]; labels?: Dictionary["reviewCarousel"] }) {
  const reviews = useMemo(() => props.reviews, [props.reviews]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const labels = props.labels;

  useEffect(() => {
    if (reviews.length <= 1) return;
    if (paused) return;
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6500);
    return () => window.clearInterval(id);
  }, [paused, prefersReducedMotion, reviews.length]);

  if (!reviews[0]) return null;

  return (
    <div
      className="rounded-3xl border border-black/5 bg-white p-3 shadow-soft sm:p-4 md:p-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels?.aria ?? "Carousel"}
    >
      <p className="text-xs font-medium text-brand sm:text-sm">{labels?.title ?? "Reviews"}</p>

      <div className="mt-3 overflow-hidden" aria-live="polite">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((review, i) => (
            <div key={`${review.author ?? "review"}-${i}`} className="w-full shrink-0 pr-1">
              <figure>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <div className="min-w-0">
                    {review.author ? <p className="truncate text-sm font-medium text-ink">{review.author}</p> : null}
                    {review.meta || review.when ? (
                      <p className="truncate text-xs text-ink/55">{[review.meta, review.when].filter(Boolean).join(" · ")}</p>
                    ) : null}
                  </div>
                  <Stars
                    value={review.rating}
                    ariaLabel={
                      review.rating && labels?.starsTemplate ? formatTemplate(labels.starsTemplate, { value: review.rating }) : undefined
                    }
                  />
                </div>

                <blockquote
                  className={[
                    "mt-3 whitespace-pre-line text-[13px] leading-5 text-ink sm:text-sm sm:leading-6",
                    "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] sm:[-webkit-line-clamp:4] md:[-webkit-line-clamp:6]"
                  ].join(" ")}
                >
                  {review.quote}
                </blockquote>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {reviews.length > 1 ? (
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex gap-1">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={["h-2 w-2 rounded-full transition", i === index ? "bg-brand" : "bg-black/10 hover:bg-black/20"].join(" ")}
                aria-label={
                  labels?.goToReviewTemplate ? formatTemplate(labels.goToReviewTemplate, { n: i + 1 }) : `Go to review ${i + 1}`
                }
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="hidden gap-2 lg:flex">
            <button
              type="button"
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink hover:bg-black/5"
              onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            >
              {labels?.prev ?? "Previous"}
            </button>
            <button
              type="button"
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-ink hover:bg-black/5"
              onClick={() => setIndex((i) => (i + 1) % reviews.length)}
            >
              {labels?.next ?? "Next"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
