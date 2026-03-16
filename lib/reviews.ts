export type Review = {
  author?: string;
  meta?: string;
  when?: string;
  rating?: number;
  quote: string;
};

export const homeReviews: Review[] = [
  {
    author: "Rocio Escalante Florido",
    meta: "6 reseñas",
    when: "Hace 3 meses",
    rating: 5,
    quote:
      'En primer lugar me gustaría destacar la profesionalidad y la calidez humana de Virginia y Gema, que siempre están encantadas de atenderte. En segundo lugar, los productos que tienen son muy recomendables y de buena calidad, tanto de limpieza de hogar, cosméticos, alimentación, etc. Quizás, como mejora, apostaría por menos productos envueltos en plástico. Hace unos años, tuve un desencuentro muy desagradable con "la competencia" con la mujer que está presente en la herboristería ALPE, prefiero mil veces I LOVE BIO. Más cantidad, más calidad y como personas un 10. También conocí a ALEX. Un saludo y larga vida a I LOVE BIO, Alhaurín de la Torre.'
  },
  {
    author: "loli spinoza",
    meta: "Local Guide · 29 reseñas · 3 fotos",
    when: "Hace 5 meses",
    rating: 5,
    quote:
      "Muy buenos productos, con amplio surtido de marcas, a muy buen precio, un personal amable que sabe perfectamente lo que vende y te aconseja lo mejor para tus necesidades.\n\nSin duda, cinco estrellas bien merecidas."
  },
  {
    author: "MENSSANA S.C.",
    meta: "11 reseñas · 1 foto",
    when: "Hace un año",
    rating: 5,
    quote:
      "Excelente tienda ecológica en Alhaurín de la Torre.\nTienen de todo, a buenos precios, y un personal encantador.\nHay cosas que podrían mejorar, como tener productos cada vez más locales, más a granel... Pero tienen mi más sincero agradecimiento por lo que ya hacen.\nOjalá cada vez hayan más comercios así.\nBuen trabajo y mucha prosperidad."
  },
  {
    quote: "Gran variedad de productos y atendido por profesionales"
  },
  {
    quote: "Yo que vosotros compraria a agricultores locales si quereis productos frescos!"
  },
  {
    quote: "Productos de muy buena calidad y un gran servicio."
  }
];
