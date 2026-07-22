/* Notificações de prova social — modo "análise concluída".
   Nomes e cidades 100% dinamarqueses. */
(function () {
  var people = [
    ["Mette", "Aarhus"], ["Lars", "Odense"], ["Anne", "København"],
    ["Søren", "Aalborg"], ["Camilla", "Esbjerg"], ["Henrik", "Randers"],
    ["Louise", "Kolding"], ["Peter", "Horsens"], ["Maria", "Vejle"],
    ["Thomas", "Roskilde"], ["Ida", "Herning"], ["Jesper", "Silkeborg"]
  ];
  var actions = [
    " fra {city} har netop gennemført analysen",
    " fra {city} har lige fået sin vurdering",
    " fra {city} startede analysen for få minutter siden"
  ];
  var toast = document.getElementById("sp-toast");
  var nameEl = document.getElementById("sp-name");
  var actEl = document.getElementById("sp-action");
  if (!toast) return;

  function show() {
    var p = people[Math.floor(Math.random() * people.length)];
    var a = actions[Math.floor(Math.random() * actions.length)];
    nameEl.textContent = p[0];
    actEl.textContent = a.replace("{city}", p[1]);
    toast.classList.add("show");
    toast.setAttribute("aria-hidden", "false");
    setTimeout(function () {
      toast.classList.remove("show");
      toast.setAttribute("aria-hidden", "true");
    }, 4500);
  }
  setTimeout(show, 6000);
  setInterval(show, 18000);
})();
