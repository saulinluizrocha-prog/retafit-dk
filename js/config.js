/* ============================================
   CONFIG DA OFERTA — RetaFit Dinamarca (quiz mode)
   Único arquivo que muda por oferta.
   ============================================ */

const OFFER_CONFIG = {

  produto: {
    nome: "RetaFit",
    imagemFront: "img/bottle_1.webp",
  },

  geo: {
    paisCodigo: "DK",
    idioma: "da",
  },

  // Destino do CTA (quiz). Os parâmetros de tracking
  // presentes na URL da presell são repassados automaticamente.
  quiz: {
    url: "https://www.knownwalk.com/2GT22MM1/24163D52/",
  },

  trackingParams: [
    "gclid",
    "click_id",
  ],
};
