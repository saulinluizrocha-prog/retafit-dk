/* Passthrough de tracking para o quiz.
   Lê gclid/click_id da URL da presell e anexa na URL do quiz.
   Genérico — não editar por oferta. */
(function () {
  var current = new URLSearchParams(window.location.search);
  var dest = new URL(OFFER_CONFIG.quiz.url);

  OFFER_CONFIG.trackingParams.forEach(function (p) {
    var v = current.get(p);
    if (v) dest.searchParams.set(p, v);
  });

  var links = document.querySelectorAll("a.cta-quiz");
  links.forEach(function (a) { a.href = dest.toString(); });
})();
