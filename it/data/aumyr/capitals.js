let capitals_lg = L.layerGroup();

let capitals_markers = [
  {
    label: "Dunmere",
    loc: [2687, 475],
    pop:
      "Dunmere è un grosso insediamento di case dal tetto spiovente e appuntito, un’oasi di civiltà nelle montagne selvagge.",
    img: "/images/capitals/dunmere.jpg",
    copy:
      "https://www.deviantart.com/memod/art/Frogster-game-concept-05-318588125",
    copyBy: "memod",
    link: "https://www.aumyr.world/geography/nordavind.html#dunmere",
    linkMap: "dunmere.html"
  },
  {
    label: "Brean",
    loc: [2856.5, 2122],
    pop:
      "La città di Brean risulta ben visibile anche da grosse distanze, data la sua alta Torre Celeste.",
    img: "/images/capitals/brean.jpg",
    copy: "https://www.andreasrocha.com",
    copyBy: "andreasrocha",
    link: "https://www.aumyr.world/geography/valdarn.html#brean",
    linkMap: "dunmere.html"
  },
  {
    label: "Nordur",
    loc: [2906, 2812],
    pop:
      "Conosciuta anche come la “Città sui Pali” o “La Città Sospesa”, Nordur è un grosso insediamento popolato principalmente da mezzelfi, halfling e razze miste.",
    img: "/images/capitals/nordur.jpg",
    copy: "https://www.deviantart.com/eliott-chacoco/art/Swamp-City-741285341",
    copyBy: "eliott-chacoco",
    link: "https://www.aumyr.world/geography/zeitan.html#nordur",
    linkMap: "nordur.html"
  },
  {
    label: "Highpine",
    loc: [2719, 3937],
    pop:
      "Highpine, con i suoi ricchi quartieri e i numerosi campi coltivati delle fattorie circostanti, è una perfetta città fortificata, dimora dei nobili e dell'Assemblea.",
    img: "/images/capitals/highpine.jpg",
    copy:
      "https://www.deviantart.com/winterkeep/art/City-of-Baldur-s-Gate-760888253",
    copyBy: "winterkeep",
    link: "https://www.aumyr.world/geography/laangor.html#highpine",
    linkMap: "highpine.html"
  },
  {
    label: "Silverstone",
    loc: [1863, 4333],
    pop:
      "E’ circondata da una rete di monoliti detti Rune del Velo che proteggono la città dagli attacchi dei non-morti.",
    img: "/images/capitals/silverstone.jpg",
    copy: "https://www.deviantart.com/antonkurbatov/art/Dark-Coast-733234767",
    copyBy: "antonkurbatov",
    link: "https://www.aumyr.world/geography/jhert.html#silverstone",
    linkMap: "silverstone.html"
  },
  {
    label: "Khoralis",
    loc: [1254, 4465],
    pop:
      "E’ la città dedicata al Grande Padre, posta su uno sperone di roccia meteorica nella parte nord dell’isola di Inkari.",
    img: "/images/capitals/khoralis.jpg",
    copy:
      "https://www.deviantart.com/nele-diel/art/City-in-the-Lowlands-693529688",
    copyBy: "nele-diel",
    link: "https://www.aumyr.world/geography/inkari.html#khoralis",
    linkMap: "khoralis.html"
  },
  {
    label: "Meentum",
    loc: [629, 4566],
    pop:
      "E’ posta in un’immensa grotta naturale e tutta l’area, dalla forma delle case, alle splendide fontane, ai giardini di felci multicolori, ricorda il credo e la dottrina della Grande Madre.",
    img: "/images/capitals/meentum.jpg",
    copy:
      "https://www.deviantart.com/micahvanzandt/art/Follow-the-lights-371889364",
    copyBy: "micahvanzandt",
    link: "https://www.aumyr.world/geography/inkari.html#meentum",
    linkMap: "meentum.html"
  },
  {
    label: "Atanis",
    loc: [2462, 2254],
    pop:
      "Atanis, capitale di Aumar è posta su una piccola zona collinare al centro di un crocevia fluviale, nel punto dove il Fiume Ator e il Fiume Mor formano il Grande Fiume. ",
    img: "/images/capitals/atanis.jpg",
    copy:
      "https://www.deviantart.com/chrisostrowski/art/Town-of-Beginnings-601163686",
    copyBy: "chrisostrowski",
    link: "https://www.aumyr.world/geography/aumar.html#atanis",
    linkMap: "atanis.html"
  },
  {
    label: "Feldris",
    loc: [1375, 2497],
    pop:
      "Posta nel mezzo di una grande pianura ma non troppo distante dalle coste del Mare della Notte, la capitale di Kessen è favorita da un clima quasi sempre mite per via alcuni venti caldi provenienti dalle gole delle Montagne Nebbiose.",
    img: "/images/capitals/feldris.jpg",
    copy: "https://www.deviantart.com/iidanmrak/art/Main-town-339292813",
    copyBy: "iidanmrak",
    link: "https://www.aumyr.world/geography/kessen.html#feldris",
    linkMap: "feldris.html"
  },
  {
    label: "Fivestar",
    loc: [1498, 3070],
    pop:
      "Fivestar è la più grande città del mondo conosciuto, con i suoi grandi templi, le sue torri millenarie e i suoi palazzi antichi.",
    img: "/images/capitals/fivestar.jpg",
    copy: "https://www.deviantart.com/jbrown67/art/Fantasy-City-722552486",
    copyBy: "jbrown67",
    link: "https://www.aumyr.world/geography/dreamor.html#fivestar",
    linkMap: "fivestar.html"
  },
  {
    label: "Veloras",
    loc: [2362, 3425],
    pop:
      "Entrando a Veloras passando dall’ampia strada pedemontana, si ha l’impressione di trovarsi in uno dei luoghi più belli dell’intera regione.",
    img: "/images/capitals/veloras.jpg",
    copy: "https://www.deviantart.com/alcoholichamster/art/Dorwinion-791603645",
    copyBy: "alcoholichamster",
    link: "https://www.aumyr.world/geography/merosh.html#veloras",
    linkMap: "veloras.html"
  },
  {
    label: "Kaphnur",
    loc: [464, 3883],
    pop:
      "L’intera zona è stata costruita su un fiume di lava solidificato nel corso dei secoli, che ha formato una vallata surreale dal terreno nerastro.",
    img: "/images/capitals/kaphnur.jpg",
    copy: "https://www.deviantart.com/chriscold/art/Veins-435003842",
    copyBy: "chriscold",
    link: "https://www.aumyr.world/geography/gwaldur.html#kaphnur",
    linkMap: "kaphnur.html"
  },
  {
    label: "Pendor",
    loc: [687, 2308],
    pop:
      "Pendor, la Vecchia capitale di Thanaros, rappresenta un trionfo di architettura del passato: palazzi dalle morbide linee ricurve, guglie decorate, fontane dallo stile ricercato e decorazioni frutto di mani esperte sono visioni molto comuni in tutta questa vecchia città. ",
    img: "/images/capitals/pendor.jpg",
    copy:
      "https://www.deviantart.com/marktarrisse/art/City-in-the-desert-490024968",
    copyBy: "marktarrisse",
    link: "https://www.aumyr.world/geography/thanaros.html#pendor",
    linkMap: "pendor.html"
  },
  {
    label: "Viriana",
    loc: [467, 1246],
    pop:
      "Viriana è frutto di un progetto architettonico congiunto tra varie razze e percorrendo una delle sue strade è possibile imbattersi in palazzi simili a quelli delle città del nord, o in case basse e dal tetto pianeggiante tipiche del sud.",
    img: "/images/capitals/viriana.jpg",
    copy: "https://www.deviantart.com/ravirr17/art/Desert-port-city-349001309",
    copyBy: "ravirr17",
    link: "https://www.aumyr.world/geography/thanaros.html#viriana",
    linkMap: "viriana.html"
  },
  {
    label: "Nayalis",
    loc: [921, 2219],
    pop:
      "Anche se molti elfi sostengono che la capitale di Laendil sarebbe dovuta sorgere a Mistdeep, la città di Nayalis è sempre stata considerata il “Centro della Foresta”.",
    img: "/images/capitals/nayalis.jpg",
    copy:
      "https://www.deviantart.com/adampaquette/art/Setessa-THEROS-393109436",
    copyBy: "adampaquette",
    link: "https://www.aumyr.world/geography/laendil.html#nayalis",
    linkMap: "nayalis.html"
  },
  {
    label: "Elerin",
    loc: [1555, 1087],
    pop:
      "Elerin è conosciuta come La Città a Specchio. La struttura ad ottagono contiene al centro il grande “Nucleo” una struttura fortificata di forma circolare.",
    img: "/images/capitals/elerin.jpg",
    copy:
      "https://www.deviantart.com/jbrown67/art/Turkish-Fantasy-City-539386187",
    copyBy: "jbrown67",
    link: "https://www.aumyr.world/geography/faeland.html#elerin",
    linkMap: "elerin.html"
  },
  {
    label: "Kartar",
    loc: [2259, 1126],
    pop:
      "Kartar, la capitale di Kartaren, è posta su un crocevia e riveste un ruolo importante per il commercio con le regioni circostanti. ",
    img: "/images/capitals/kartar.jpg",
    copy:
      "https://www.deviantart.com/robertcrescenzio/art/Fantasy-City-602736457",
    copyBy: "robertcrescenzio",
    link: "https://www.aumyr.world/geography/kartaren.html#kartar",
    linkMap: "kartar.html"
  },
  {
    label: "Damodar",
    loc: [1775, 784],
    pop:
      "Damodar, il porto principale sulla Costa Splendente, è un caleidoscopio di colori e di strutture propri di un grande avamposto mercantile. ",
    img: "/images/capitals/damodar.jpg",
    copy: "https://www.deviantart.com/gerezon/art/City-by-the-sea-526852101",
    copyBy: "gerezon",
    link: "https://www.aumyr.world/geography/laentas.html#damodar",
    linkMap: "damodar.html"
  }
];

for (let i = 0; i < capitals_markers.length; i++) {
  marker = L.marker(capitals_markers[i].loc, {
    icon: marker_icon_capital
  }).addTo(capitals_lg);
  marker.bindPopup(
    "<div class='card is-capital'><div class='card-bg' style='background-image:url(" +
      capitals_markers[i].img +
      ")'><div class='card-overlay'></div><a class='badge badge-right badge-secondary badge-sm' href='" +
      capitals_markers[i].copy +
      "' target='_blank' rel='noopener'>&copy; " +
      capitals_markers[i].copyBy +
      "</a>" +
      "</div><div class='card-body'>" +
      "<p>" +
      capitals_markers[i].pop +
      "</p><hr><a href='" +
      capitals_markers[i].link +
      "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>"
  );
  marker.bindTooltip(capitals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
