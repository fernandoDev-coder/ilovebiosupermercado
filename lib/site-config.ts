export const siteConfig = {
  name: "I Love Bio – Supermercado Ecológico",
  shortName: "I Love Bio",
  description:
    "Tu supermercado ecológico de confianza en Alhaurín de la Torre: productos bio certificados, cosmética natural y asesoramiento nutricional cercano.",
  keywords: [
    "supermercado ecológico Alhaurín de la Torre",
    "tienda ecológica Alhaurín",
    "productos bio Málaga",
    "productos naturales Málaga",
    "cosmética natural",
    "nutrición ecológica Málaga"
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: { city: "Alhaurín de la Torre", region: "Málaga", country: "ES" },
  address: {
    streetAddress: "C. San Juan, 41",
    postalCode: "29130"
  },
  contact: {
    phoneDisplay: "+34 689 944 107",
    phoneE164Digits: "34689944107",
    email: "ilovebio2017@gmail.com",
    whatsappPrefill: "Hola, me gustaría consultar disponibilidad para una consulta/taller. ¿Podéis ayudarme?"
  },
  hours: {
    lines: ["Lun–Vie: 9:30–14:00 · 17:00–20:30", "Sáb: 9:30–14:00", "Dom: cerrado"]
  },
  rating: { value: 4.8, count: 34 },
  social: {
    instagramUrl: "https://www.instagram.com/ilovebiosupermercadoecologico/",
    facebookUrl: "https://www.facebook.com/ilovebiosupermercadoecologico/?locale=es_ES"
  }
} as const;

export function whatsappUrl() {
  const text = encodeURIComponent(siteConfig.contact.whatsappPrefill);
  return `https://wa.me/${siteConfig.contact.phoneE164Digits}?text=${text}`;
}

export function fullAddress() {
  return `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.location.city}, ${siteConfig.location.region}`;
}
