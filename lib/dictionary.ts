import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  languageName: string;
  skipToContent: string;
  nav: {
    home: string;
    products: string;
    services: string;
    about: string;
    contact: string;
    visitStore: string;
    call: string;
    menu: string;
    close: string;
    primaryNav: string;
    mobileNav: string;
    whatsapp: string;
    brandLineTemplate: string; // {city}
    switchToTemplate: string; // {target}
  };
  footer: {
    taglineTemplate: string; // {city}
    contact: string;
    sections: string;
    visitUs: string;
    openInstagram: string;
    openFacebook: string;
    madeWithLoveTemplate: string; // {year} {brand}
    howToGetThere: string;
    bookConsultation: string;
  };
  whatsappFloat: {
    ariaTemplate: string; // {brand}
  };
  reviewCarousel: {
    title: string;
    prev: string;
    next: string;
    goToReviewTemplate: string; // {n}
    aria: string;
    starsTemplate: string; // {value}
  };
  metadata: {
    siteDescription: string;
    homeTitle: string;
    productsTitle: string;
    productsDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
  home: {
    badgeTemplate: string; // {rating} {count}
    h1Template: string; // {city}
    lead: string;
    ctaVisit: string;
    ctaProducts: string;
    ctaBook: string;
    highlights: Array<{ t: string; d: string }>;
    whyTitle: string;
    whyLead: string;
    whyAside: string;
    whyBlocks: Array<{ title: string; desc: string }>;
    productsSectionTitle: string;
    productsSectionLead: string;
    productsSectionCta: string;
    productsCardKicker: string;
    productsCards: Array<{ title: string; desc: string }>;
    productsCardCta: string;
    servicesTitle: string;
    servicesLead: string;
    servicesCtaBook: string;
    servicesCtaDetails: string;
    servicesCards: Array<{ title: string; desc: string }>;
    reviewsTitle: string;
    reviewsLead: string;
    reviewsBadgeTemplate: string; // {rating} {count}
    visitTitle: string;
    visitLead: string;
    visitAddressLabel: string;
    visitHoursLabel: string;
    visitHowToGetThere: string;
    visitWhatsapp: string;
    mapTitleTemplate: string; // {brand}
  };
  products: {
    pageTitle: string;
    pageLead: string;
    qualityKicker: string;
    qualityText: string;
    categories: Array<{ title: string; items: string[] }>;
    specificTitle: string;
    specificLead: string;
    ctaWhatsApp: string;
    ctaServices: string;
    ctaContact: string;
  };
  services: {
    pageTitle: string;
    pageLead: string;
    cards: Array<{ title: string; desc: string; bullets: string[] }>;
    forWhoTitle: string;
    forWhoLead: string;
    ctaWhatsApp: string;
    ctaProducts: string;
    noteTemplate: string; // {phone}
  };
  about: {
    pageTitle: string;
    pageLead: string;
    howTitle: string;
    howP1Template: string; // {brand}
    howP2: string;
    valuesTitle: string;
    values: string[];
    shopTitle: string;
    shopLead: string;
    ctaProducts: string;
    ctaServices: string;
    ctaWhatsApp: string;
  };
  contact: {
    pageTitle: string;
    pageLead: string;
    dataTitle: string;
    tel: string;
    email: string;
    address: string;
    hours: string;
    ctaWhatsApp: string;
    ctaCall: string;
    openInstagram: string;
    openFacebook: string;
    mapTitleTemplate: string; // {brand}
  };
  notFound: {
    title: string;
    lead: string;
    ctaHome: string;
    ctaContact: string;
  };
};

const es: Dictionary = {
  languageName: "Español",
  skipToContent: "Saltar al contenido",
  nav: {
    home: "Inicio",
    products: "Productos",
    services: "Servicios",
    about: "Sobre",
    contact: "Contacto",
    visitStore: "Visitar la tienda",
    call: "Llamar",
    menu: "Menú",
    close: "Cerrar",
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    whatsapp: "WhatsApp",
    brandLineTemplate: "Supermercado ecológico • {city}",
    switchToTemplate: "Ver en {target}"
  },
  footer: {
    taglineTemplate: "Productos ecológicos certificados, cosmética natural y asesoramiento cercano en {city}.",
    contact: "Contacto",
    sections: "Secciones",
    visitUs: "Visítanos",
    openInstagram: "Abrir Instagram",
    openFacebook: "Abrir Facebook",
    madeWithLoveTemplate: "© {year} {brand}. Todos los derechos reservados.",
    howToGetThere: "Cómo llegar",
    bookConsultation: "Reservar consulta"
  },
  whatsappFloat: {
    ariaTemplate: "Escribir por WhatsApp a {brand}"
  },
  reviewCarousel: {
    title: "Opiniones",
    prev: "Anterior",
    next: "Siguiente",
    goToReviewTemplate: "Ir a la reseña {n}",
    aria: "Carrusel de reseñas",
    starsTemplate: "{value} de 5 estrellas"
  },
  metadata: {
    siteDescription:
      "Tu supermercado ecológico de confianza en Alhaurín de la Torre: productos bio certificados, cosmética natural y asesoramiento nutricional cercano.",
    homeTitle: "I Love Bio – Supermercado Ecológico",
    productsTitle: "Productos",
    productsDescription: "Explora categorías de productos ecológicos y naturales: alimentación bio, cosmética, suplementos, capilar y más.",
    servicesTitle: "Servicios",
    servicesDescription: "Consultas de nutrición, naturopatía y talleres/demostraciones. Acompañamiento experto y cercano en Alhaurín de la Torre.",
    aboutTitle: "Sobre nosotros",
    aboutDescription: "Conoce la historia de I Love Bio: una tienda ecológica local con asesoramiento cercano en Alhaurín de la Torre.",
    contactTitle: "Contacto",
    contactDescription: "Cómo llegar a I Love Bio en Alhaurín de la Torre (Málaga). Teléfono/WhatsApp, email, horarios y mapa.",
    notFoundTitle: "Página no encontrada",
    notFoundDescription: "La página que buscas no existe o ha cambiado de lugar."
  },
  home: {
    badgeTemplate: "⭐ {rating} / 5 · {count} reseñas en Google",
    h1Template: "Tu supermercado ecológico de confianza en {city}",
    lead: "Productos bio certificados, asesoramiento nutricional y atención cercana. Un espacio cálido donde te escuchamos y te ayudamos a elegir lo que mejor te sienta.",
    ctaVisit: "Visitar la tienda",
    ctaProducts: "Descubrir productos",
    ctaBook: "Reservar consulta →",
    highlights: [
      { t: "Ecológico", d: "Certificado" },
      { t: "Cercano", d: "Trato humano" },
      { t: "Variedad", d: "Bio y natural" },
      { t: "Guía", d: "Nutrición" }
    ],
    whyTitle: "¿Por qué elegirnos?",
    whyLead: "Somos una tienda local, con vocación de servicio. Aquí vienes a comprar… y también a sentirte bien acompañado.",
    whyAside: "Atención destacada en reseñas por Virginia y Gema.",
    whyBlocks: [
      { title: "Productos ecológicos certificados", desc: "Calidad y confianza en cada compra." },
      { title: "Asesoramiento nutricional personalizado", desc: "Te ayudamos a elegir según tu objetivo." },
      { title: "Gran variedad de productos bio", desc: "Alimentación, suplementos, dietas especiales." },
      { title: "Atención cercana y humana", desc: "Una tienda luminosa donde se nota la vocación." }
    ],
    productsSectionTitle: "Productos",
    productsSectionLead:
      "Selección cuidada para comer mejor y vivir de forma más natural. Todos nuestros productos cuentan con certificación ecológica.",
    productsSectionCta: "Ver categorías",
    productsCardKicker: "Categoría",
    productsCards: [
      { title: "Alimentación ecológica", desc: "Frescos, básicos y despensa bio." },
      { title: "Cereales y semillas", desc: "Granos, harinas, frutos secos." },
      { title: "Cosmética natural", desc: "Piel, higiene y cuidado consciente." },
      { title: "Productos capilares naturales", desc: "Tratamientos y rutinas suaves." },
      { title: "Suplementos naturales", desc: "Apoyo diario con criterio." },
      { title: "Dietas especiales", desc: "Sin gluten, vegano, sin azúcar (según stock)." }
    ],
    productsCardCta: "Explorar →",
    servicesTitle: "Servicios",
    servicesLead: "Si buscas guía, aquí tienes un acompañamiento experto y cercano: nutrición, naturopatía y talleres.",
    servicesCtaBook: "Reservar consulta",
    servicesCtaDetails: "Ver detalles",
    servicesCards: [
      { title: "Consultas de nutrición", desc: "Objetivos realistas, hábitos sostenibles y recomendaciones adaptadas a ti." },
      { title: "Naturopatía", desc: "Enfoque integral para apoyar tu bienestar con productos naturales y criterio." },
      { title: "Talleres y demostraciones", desc: "Aprende, prueba productos y resuelve dudas en un ambiente cercano." }
    ],
    reviewsTitle: "Opiniones reales",
    reviewsLead: "Quienes nos visitan hablan de la calidad, la variedad y, sobre todo, del trato humano.",
    reviewsBadgeTemplate: "⭐ {rating} / 5 · {count} reseñas",
    visitTitle: "Visítanos",
    visitLead: "Te esperamos en la tienda. Si tienes dudas sobre productos, dietas especiales o rutinas naturales, ven a vernos o escríbenos.",
    visitAddressLabel: "Dirección",
    visitHoursLabel: "Horario",
    visitHowToGetThere: "Cómo llegar",
    visitWhatsapp: "Escribir por WhatsApp",
    mapTitleTemplate: "Mapa de {brand} – Supermercado Ecológico"
  },
  products: {
    pageTitle: "Productos ecológicos y naturales",
    pageLead: "Una selección cuidada para tu día a día. Si buscas algo concreto o necesitas orientación, te ayudamos encantados.",
    qualityKicker: "Calidad",
    qualityText: "Todos nuestros productos cuentan con certificación ecológica. Si tienes dudas, te explicamos cómo identificar sellos y etiquetas.",
    categories: [
      { title: "Alimentación ecológica", items: ["Básicos de despensa", "Snacks saludables", "Bebidas e infusiones", "Opciones veganas"] },
      { title: "Cereales y semillas", items: ["Granos y harinas", "Semillas", "Frutos secos", "Mezclas para desayunos"] },
      { title: "Cosmética natural", items: ["Hidratación y cuidado facial", "Higiene", "Cuidado corporal", "Ingredientes respetuosos"] },
      { title: "Productos capilares naturales", items: ["Champús suaves", "Mascarillas", "Aceites y sérums", "Rutinas según tu cabello"] },
      { title: "Suplementos naturales", items: ["Bienestar diario", "Apoyo estacional", "Digestivo", "Energía y descanso"] },
      { title: "Dietas especiales", items: ["Sin gluten (según stock)", "Sin azúcar (según stock)", "Alternativas vegetales", "Lectura de etiquetas"] }
    ],
    specificTitle: "¿Buscas algo específico?",
    specificLead: "Escríbenos y te confirmamos disponibilidad o te proponemos alternativas.",
    ctaWhatsApp: "Consultar por WhatsApp",
    ctaServices: "Ver consultas",
    ctaContact: "Contacto"
  },
  services: {
    pageTitle: "Servicios: guía experta y cercana",
    pageLead: "Además de la tienda, ofrecemos acompañamiento para que tomes decisiones con confianza: nutrición, naturopatía y talleres.",
    cards: [
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
    ],
    forWhoTitle: "Para quién es",
    forWhoLead: "Para personas que quieren mejorar hábitos, elegir productos con criterio o explorar opciones naturales con acompañamiento.",
    ctaWhatsApp: "Escribir por WhatsApp",
    ctaProducts: "Ver productos",
    noteTemplate: "Nota: Los servicios, precios y horarios se confirman por mensaje o en tienda. Contacto: {phone}."
  },
  about: {
    pageTitle: "Sobre I Love Bio",
    pageLead: "Somos una tienda local que cuida los detalles: productos ecológicos de calidad, cosmética natural y un trato humano que se nota desde que entras.",
    howTitle: "Nuestra forma de trabajar",
    howP1Template:
      "En {brand} creemos en lo cercano: escuchar, recomendar con honestidad y ayudarte a encontrar opciones que encajen con tu día a día.",
    howP2: "En reseñas se repiten dos nombres: Virginia y Gema.",
    valuesTitle: "Lo que defendemos",
    values: [
      "🌱 Productos ecológicos certificados y selección cuidada.",
      "💚 Atención humana, sin prisas, con recomendaciones claras.",
      "🧠 Asesoramiento con criterio: nutrición y naturopatía.",
      "♻️ Compromiso con hábitos más sostenibles, de forma realista."
    ],
    shopTitle: "Tienda bonita, luz natural, y una experiencia agradable",
    shopLead: "Nos importa que comprar sea fácil: categorías claras, recomendaciones útiles y un ambiente cálido.",
    ctaProducts: "Ver productos",
    ctaServices: "Ver servicios",
    ctaWhatsApp: "Consultar por WhatsApp"
  },
  contact: {
    pageTitle: "Contacto",
    pageLead: "¿Tienes una duda sobre un producto, una dieta especial o una consulta? Escríbenos y te ayudamos.",
    dataTitle: "Datos",
    tel: "Tel / WhatsApp",
    email: "Email",
    address: "Dirección",
    hours: "Horario",
    ctaWhatsApp: "Escribir por WhatsApp",
    ctaCall: "Llamar",
    openInstagram: "Abrir Instagram",
    openFacebook: "Abrir Facebook",
    mapTitleTemplate: "Mapa de {brand} – Supermercado Ecológico"
  },
  notFound: {
    title: "Página no encontrada",
    lead: "La página que buscas no existe o ha cambiado de lugar.",
    ctaHome: "Ir a inicio",
    ctaContact: "Contacto"
  }
};

const en: Dictionary = {
  languageName: "English",
  skipToContent: "Skip to content",
  nav: {
    home: "Home",
    products: "Products",
    services: "Services",
    about: "About",
    contact: "Contact",
    visitStore: "Visit the store",
    call: "Call",
    menu: "Menu",
    close: "Close",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    whatsapp: "WhatsApp",
    brandLineTemplate: "Organic grocery store • {city}",
    switchToTemplate: "View in {target}"
  },
  footer: {
    taglineTemplate: "Certified organic products, natural cosmetics, and friendly guidance in {city}.",
    contact: "Contact",
    sections: "Sections",
    visitUs: "Visit us",
    openInstagram: "Open Instagram",
    openFacebook: "Open Facebook",
    madeWithLoveTemplate: "© {year} {brand}. All rights reserved.",
    howToGetThere: "How to get there",
    bookConsultation: "Book a consultation"
  },
  whatsappFloat: {
    ariaTemplate: "Message {brand} on WhatsApp"
  },
  reviewCarousel: {
    title: "Reviews",
    prev: "Previous",
    next: "Next",
    goToReviewTemplate: "Go to review {n}",
    aria: "Reviews carousel",
    starsTemplate: "{value} out of 5 stars"
  },
  metadata: {
    siteDescription:
      "Your trusted organic grocery store in Alhaurín de la Torre: certified organic products, natural cosmetics, and friendly nutrition guidance.",
    homeTitle: "I Love Bio – Organic Grocery Store",
    productsTitle: "Products",
    productsDescription: "Explore organic and natural product categories: food, cosmetics, supplements, hair care, and more.",
    servicesTitle: "Services",
    servicesDescription: "Nutrition consultations, naturopathy, and workshops/demos. Expert, friendly support in Alhaurín de la Torre.",
    aboutTitle: "About us",
    aboutDescription: "Get to know I Love Bio: a local organic shop with friendly guidance in Alhaurín de la Torre.",
    contactTitle: "Contact",
    contactDescription: "How to find I Love Bio in Alhaurín de la Torre (Málaga). Phone/WhatsApp, email, hours, and map.",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you’re looking for doesn’t exist or has moved."
  },
  home: {
    badgeTemplate: "⭐ {rating} / 5 · {count} Google reviews",
    h1Template: "Your trusted organic grocery store in {city}",
    lead: "Certified organic products, nutrition guidance, and a warm, human touch. A cozy place where we listen and help you choose what suits you best.",
    ctaVisit: "Visit the store",
    ctaProducts: "Explore products",
    ctaBook: "Book a consultation →",
    highlights: [
      { t: "Organic", d: "Certified" },
      { t: "Friendly", d: "Human touch" },
      { t: "Variety", d: "Bio & natural" },
      { t: "Guidance", d: "Nutrition" }
    ],
    whyTitle: "Why choose us?",
    whyLead: "We’re a local shop with a service mindset. You come to shop… and also to feel well supported.",
    whyAside: "Reviews often highlight Virginia and Gema.",
    whyBlocks: [
      { title: "Certified organic products", desc: "Quality and trust in every purchase." },
      { title: "Personalized nutrition guidance", desc: "We help you choose based on your goals." },
      { title: "Wide range of bio products", desc: "Food, supplements, special diets." },
      { title: "Warm, human service", desc: "A bright shop where vocation shows." }
    ],
    productsSectionTitle: "Products",
    productsSectionLead: "A curated selection to eat better and live more naturally. All our products have organic certification.",
    productsSectionCta: "See categories",
    productsCardKicker: "Category",
    productsCards: [
      { title: "Organic food", desc: "Fresh items, basics and a bio pantry." },
      { title: "Grains & seeds", desc: "Grains, flours, nuts." },
      { title: "Natural cosmetics", desc: "Skin, hygiene and mindful care." },
      { title: "Natural hair care", desc: "Gentle routines and treatments." },
      { title: "Natural supplements", desc: "Daily support with good judgement." },
      { title: "Special diets", desc: "Gluten-free, vegan, sugar-free (stock-dependent)." }
    ],
    productsCardCta: "Explore →",
    servicesTitle: "Services",
    servicesLead: "If you want guidance, we offer expert, friendly support: nutrition, naturopathy, and workshops.",
    servicesCtaBook: "Book a consultation",
    servicesCtaDetails: "See details",
    servicesCards: [
      { title: "Nutrition consultations", desc: "Realistic goals, sustainable habits, and recommendations tailored to you." },
      { title: "Naturopathy", desc: "A holistic approach to support your wellbeing with natural products and good judgement." },
      { title: "Workshops & demos", desc: "Learn, try products, and get your questions answered in a friendly setting." }
    ],
    reviewsTitle: "Real reviews",
    reviewsLead: "Visitors talk about quality, variety, and above all, a warm human touch.",
    reviewsBadgeTemplate: "⭐ {rating} / 5 · {count} reviews",
    visitTitle: "Visit us",
    visitLead: "We’ll be happy to see you in store. If you have questions about products, special diets, or natural routines, drop by or message us.",
    visitAddressLabel: "Address",
    visitHoursLabel: "Hours",
    visitHowToGetThere: "Directions",
    visitWhatsapp: "Message on WhatsApp",
    mapTitleTemplate: "Map of {brand} – Organic Grocery Store"
  },
  products: {
    pageTitle: "Organic & natural products",
    pageLead: "A carefully curated selection for everyday life. If you’re looking for something specific or need guidance, we’ll gladly help.",
    qualityKicker: "Quality",
    qualityText: "All our products have organic certification. If you have questions, we’ll explain how to identify seals and labels.",
    categories: [
      { title: "Organic food", items: ["Pantry staples", "Healthy snacks", "Drinks & infusions", "Vegan options"] },
      { title: "Grains & seeds", items: ["Grains & flours", "Seeds", "Nuts", "Breakfast mixes"] },
      { title: "Natural cosmetics", items: ["Moisturizing & facial care", "Hygiene", "Body care", "Respectful ingredients"] },
      { title: "Natural hair care", items: ["Gentle shampoos", "Masks", "Oils & serums", "Routines for your hair type"] },
      { title: "Natural supplements", items: ["Daily wellbeing", "Seasonal support", "Digestive", "Energy & sleep"] },
      { title: "Special diets", items: ["Gluten-free (stock-dependent)", "Sugar-free (stock-dependent)", "Plant-based alternatives", "Label reading help"] }
    ],
    specificTitle: "Looking for something specific?",
    specificLead: "Message us and we’ll confirm availability or suggest alternatives.",
    ctaWhatsApp: "Ask on WhatsApp",
    ctaServices: "See consultations",
    ctaContact: "Contact"
  },
  services: {
    pageTitle: "Services: expert, friendly guidance",
    pageLead: "Beyond the store, we offer support to help you make confident choices: nutrition, naturopathy, and workshops.",
    cards: [
      {
        title: "Nutrition consultation",
        desc: "Personalized recommendations for sustainable habits, realistic goals, and a calm relationship with food.",
        bullets: ["Goals: energy, digestion, weight, performance, etc.", "Plan adapted to your routine", "Product recommendations"]
      },
      {
        title: "Naturopathy consultation",
        desc: "A holistic approach to support your wellbeing with natural options and good judgement—no exaggerated promises.",
        bullets: ["Listening and habit review", "Supplement support (if applicable)", "Step-by-step follow-up"]
      },
      {
        title: "Workshops & demos",
        desc: "Hands-on sessions to learn about products, solve doubts, and discover routines (cosmetics, food, etc.).",
        bullets: ["Simple, practical learning", "Space for questions", "New arrivals and recommendations"]
      }
    ],
    forWhoTitle: "Who it’s for",
    forWhoLead: "For people who want to improve habits, choose products with good judgement, or explore natural options with guidance.",
    ctaWhatsApp: "Message on WhatsApp",
    ctaProducts: "See products",
    noteTemplate: "Note: Services, prices and schedules are confirmed by message or in store. Contact: {phone}."
  },
  about: {
    pageTitle: "About I Love Bio",
    pageLead: "We’re a local shop that cares about details: quality organic products, natural cosmetics, and a human touch you feel from the moment you walk in.",
    howTitle: "How we work",
    howP1Template:
      "At {brand}, we believe in being close: listening, recommending honestly, and helping you find options that fit your day-to-day.",
    howP2: "Two names often come up in reviews: Virginia and Gema.",
    valuesTitle: "What we stand for",
    values: [
      "🌱 Certified organic products and a careful selection.",
      "💚 Human attention—no rush—with clear recommendations.",
      "🧠 Guidance with good judgement: nutrition and naturopathy.",
      "♻️ Commitment to more sustainable habits, in a realistic way."
    ],
    shopTitle: "A bright, pleasant shopping experience",
    shopLead: "We want shopping to be easy: clear categories, useful recommendations, and a warm atmosphere.",
    ctaProducts: "See products",
    ctaServices: "See services",
    ctaWhatsApp: "Ask on WhatsApp"
  },
  contact: {
    pageTitle: "Contact",
    pageLead: "Have a question about a product, a special diet, or a consultation? Message us and we’ll help.",
    dataTitle: "Details",
    tel: "Phone / WhatsApp",
    email: "Email",
    address: "Address",
    hours: "Hours",
    ctaWhatsApp: "Message on WhatsApp",
    ctaCall: "Call",
    openInstagram: "Open Instagram",
    openFacebook: "Open Facebook",
    mapTitleTemplate: "Map of {brand} – Organic Grocery Store"
  },
  notFound: {
    title: "Page not found",
    lead: "The page you’re looking for doesn’t exist or has moved.",
    ctaHome: "Go home",
    ctaContact: "Contact"
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : es;
}
