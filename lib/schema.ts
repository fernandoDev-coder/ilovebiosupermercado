import { mapsUrl, siteConfig } from "@/lib/site-config";

export function getLocalBusinessJsonLd(props?: { description?: string; url?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "HealthFoodStore",
    name: siteConfig.name,
    url: props?.url ?? siteConfig.siteUrl,
    description: props?.description ?? siteConfig.description,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    priceRange: "EUR",
    image: [`${siteConfig.siteUrl}/og.svg`],
    hasMap: mapsUrl(),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "14:00"
      }
    ],
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "City",
      name
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.contact.phoneDisplay,
      email: siteConfig.contact.email,
      areaServed: siteConfig.location.country,
      availableLanguage: ["es", "en"]
    },
    sameAs: [siteConfig.social.instagramUrl, siteConfig.social.facebookUrl]
  };
}
