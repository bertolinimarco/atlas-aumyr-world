let keeps_lg = L.layerGroup();

let keeps_markers = [
  // Nordavind
  {
    label: "Torregrigia",
    loc: [2712, 738],
    pop:
      "Questa fortezza un tempo era il luogo da dove Beonur, uno dei guerrieri più forti di tutto Aumyr, riunì i Clan sotto un unico stendardo. ",
    img: "/images/keeps/torregrigia.jpg",
    copy:
      "https://www.deviantart.com/behindspace99/art/EVER-ROCK-KEEP-694969710",
    copyBy: "behindspace99",
    link: "https://www.aumyr.world/geography/nordavind.html#torregrigia"
  },
  // Valdarn
  {
    label: "Faux Edge",
    loc: [3142, 2412],
    pop:
      "Questa enorme struttura che si erge nel punto più settentrionale tutto il continente, si vocifera essere un antico Monastero.",
    img: "/images/keeps/faux-edge.jpg",
    copy:
      "https://www.deviantart.com/markbulahao/art/Watermill-Monastery-176206926",
    copyBy: "markbulahao",
    link: "https://www.aumyr.world/geography/zeitan.html#faux-edge"
  },
  // Zeitan
  {
    label: "Cittadella del Vuoto",
    loc: [2679, 3335],
    pop:
      "Situata su un promontorio in mezzo ai picchi della Valle di Samard, la Cittadella del Vuoto è un’insediamento fortificato formato da un bastione di basalto nero e ossidiana, con numerose torri a punta che svettano minacciose sopra il panorama circostante. ",
    img: "/images/keeps/cittadella-del-vuoto.jpg",
    copy:
      "https://www.deviantart.com/legendary-memory/art/Dark-Castle-429351752",
    copyBy: "legendary-memory",
    link: "https://www.aumyr.world/geography/zeitan.html#cittadella-del-vuoto"
  },
  // Laangor
  {
    label: "Castello Darkwind",
    loc: [2765, 3799],
    pop:
      "Un tempo una fortezza perfino più grande di Highpine e sede del Casato Darkwind, ora il castello è di proprietà di un nobile locale che usa la fortezza come luogo di intrattenimenti e banchetti esclusivi per i suoi ospiti famosi. ",
    img: "/images/keeps/castello-darkwind.jpg",
    copy:
      "https://www.deviantart.com/jeremypaillotin/art/Fortress-of-the-Arch-584740275",
    copyBy: "jeremypaillotin",
    link: "https://www.aumyr.world/geography/laangor.html#castello-darkwind"
  },
  {
    label: "Angor",
    loc: [3156, 4422],
    pop:
      "La fortezza è il punto conosciuto più a nord di Aumyr. Raggiungerla è difficile: intrappolata nel ghiaccio e sferzata da forti venti, è l'unico punto segnato sulle mappe, oltre al villaggio di Norn.",
    img: "/images/keeps/angor.jpg",
    copy: "https://www.deviantart.com/allrichart/art/Glacier-Castle-722878412",
    copyBy: "allrichart",
    link: "#"
  },
  // Jhert
  {
    label: "Sale del Tramonto",
    loc: [2154, 3924],
    pop:
      "Ai margini di un lago al centro delle Piane di Erthell si apre una cava collegata ad una vecchia fortezza. Nei pressi della cava sorge un avamposto ormai abbandonato circondato da una palizzata eretta da alcuni avventurieri intenzionati ad esplorare la fortezza.",
    img: "/images/keeps/sale-del-tramonto.jpg",
    copy:
      "https://www.deviantart.com/guang-yang/art/Prison-set-sketches-124879910",
    copyBy: "guang-yang",
    link: "https://www.aumyr.world/geography/jhert.html#sale-del-tramonto"
  },
  {
    label: "Sale dei Ricordi",
    loc: [527, 4430],
    pop:
      "Interamente scavata nel fianco della montagna, questa struttura rappresenta uno dei punti massimi della sapienza artistica e culturale degli Askari. Grandiose sale dalle volte ancora parzialmente affrescate e numerosi bassorilievi raccontano quasi tutto quello che sappiamo su questa civiltà perduta.",
    img: "/images/keeps/sale-dei-ricordi.jpg",
    copy: "https://www.deviantart.com/irbeus/art/Mountain-Fortress-446189425",
    copyBy: "irbeus",
    link: "https://www.aumyr.world/geography/inkari.html#sale-dei-ricordi"
  },
  // Kessen
  {
    label: "Felmalein",
    loc: [1351, 2306],
    pop:
      "Si tratta di una roccaforte quasi completamente sommersa: le creature che infestano questa zona non lasciano mai l’area circostante e raramente si intravedono in superficie, tanto da far pensare che un qualche potere possa essere ancora vivo nelle sue profondità invase dall’acqua.",
    img: "/images/keeps/felmalein.jpg",
    copy: "https://www.deviantart.com/blindlynx82/art/Sunken-Village-459477981",
    copyBy: "blindlynx82",
    link: "https://www.aumyr.world/geography/kessen.html#felmalein"
  },
  // Dreamor
  {
    label: "Amakur",
    loc: [1432, 2822],
    pop:
      "L’antica fortezza di Amakur è stato per anni sede di una organizzazione della Confraternita dedita al pattugliamento del Mare della Notte in cerca di attività criminale e di contrabbando.",
    img: "/images/keeps/amakur.jpg",
    copy: "https://www.deviantart.com/ron-faure/art/Island-Castle-635705313",
    copyBy: "ron-faure",
    link: "https://www.aumyr.world/geography/dreamor.html#amakur"
  },
  {
    label: "Torre Solitaria",
    loc: [776, 3593],
    pop:
      "Un tempo dimora di un qualche potente stregone, è una grossa struttura dalle forme inusuali che non sembra restare nel proprio posto per molto tempo.",
    img: "/images/keeps/torre-solitaria.jpg",
    copy: "https://www.deviantart.com/moskuito/art/Lost-In-Magic-565417869",
    copyBy: "moskuito",
    link: "https://www.aumyr.world/geography/dreamor.html#torre-solitaria"
  },
  // Gwaldur
  {
    label: "Torre di Morganis",
    loc: [569, 4075],
    pop:
      "Dimora di un anziano stregone, la sua morte ha portato numerose creature ad invadere le stanze di questa struttura in pietra lavica.",
    img: "/images/keeps/torre-di-morganis.jpg",
    copy: "https://www.deviantart.com/nm-art/art/Volcanic-area-653911888",
    copyBy: "nm-art",
    link: "https://www.aumyr.world/geography/gwaldur.html#foresta-ombrosa"
  },
  {
    label: "Fortezza di Oduur",
    loc: [455, 2767],
    pop:
      "Questa roccaforte di pietra arenaria e basalto posta su un fianco della montagna ricorda al viaggiatore la bellezza e il mistero della regione di Gwaldur.",
    img: "/images/keeps/fortezza-di-oduur.jpg",
    copy:
      "https://www.deviantart.com/tomedwardsconcepts/art/Dark-Moon-Pass-328109633",
    copyBy: "tomedwardsconcepts",
    link: "https://www.aumyr.world/geography/gwaldur.html#fortezza-di-oduur"
  },
  // Gwaldur
  {
    label: "Jalamai",
    loc: [449, 2106],
    pop:
      "Il Palazzo di Jalamai è un grosso complesso fortificato costruito sulle montagne rosse e desertiche della Costa delle Sabbie. Poco si sa di questa zona, considerando anche la sua posizione solitaria.",
    img: "/images/keeps/jalamai.jpg",
    copy:
      "https://www.deviantart.com/ravenseyetravislacey/art/Palace-backed-in-silver-211992256",
    copyBy: "ravenseyetravislacey",
    link: "https://www.aumyr.world/geography/thanaros.html#jalamai"
  },
  {
    label: "Blackraven",
    loc: [710, 1287],
    pop:
      "Il Castello di Blackraven era stato eretto come rifugio estremo per i Dieci Anziani di Viriana in caso di attacco marittimo.",
    img: "/images/keeps/blackraven.jpg",
    copy:
      "https://www.deviantart.com/piotrdura/art/Ankh-amon-Citadel-574225291",
    copyBy: "piotrdura",
    link: "https://www.aumyr.world/geography/thanaros.html#blackraven"
  },
  // Laendil
  {
    label: "Fortezza di Orianur",
    loc: [894, 2738],
    pop:
      "Conosciuta anche come La Fortezza Senza Mura, questa singolare struttura è formata da un grosso torrione quadrato del tutto privo di fortificazioni.",
    img: "/images/keeps/fortezza-di-orianur.jpg",
    copy: "https://www.deviantart.com/papayoufr/art/Castle-509750991",
    copyBy: "papayoufr",
    link: "https://www.aumyr.world/geography/laendil.html#fortezza-di-orianur"
  },
  {
    label: "Guardianera",
    loc: [1157, 1861],
    pop:
      "Struttura storica, eretta tempo addietro dai primi membri fondatori della Guardia del Lupo, questa fortezza si erge sul confine della foresta e per due secoli ha rappresentato un avamposto di guardia inespugnabile.",
    img: "/images/keeps/guardianera.jpg",
    copy:
      "https://www.deviantart.com/jjcanvas/art/Castle-landscape-sketch-533169991",
    copyBy: "jjcanvas",
    link: "https://www.aumyr.world/geography/laendil.html#guardianera"
  },
  // Faeland
  {
    label: "Città dell'Alba",
    loc: [1444, 1876],
    pop:
      "Sebbene il nome possa evocare immagini di un magnifico castello splendente, Città dell’Alba è un luogo molto pericoloso. La dea Vel-Shar scelse questo luogo due secoli fa per erigere una maestosa dimora simbolo del suo potere sulla non-morte.",
    img: "/images/keeps/citta-dell-alba.jpg",
    copy:
      "https://www.deviantart.com/jjcanvas/art/The-old-dark-Haunted-Castle-196139050",
    copyBy: "jjcanvas",
    link: "https://www.aumyr.world/geography/faeland.html#citta-dell-alba"
  },
  {
    label: "Fortezza di Myrdar",
    loc: [1124, 1371],
    pop:
      "Più che una vera e propria fortezza, Myrdar è ora un insieme di grosse pietre e rovine.",
    img: "/images/keeps/fortezza-di-myrdar.jpg",
    copy: "https://www.deviantart.com/cury/art/Castle-Ruins-393139045",
    copyBy: "cury",
    link: "https://www.aumyr.world/geography/faeland.html#fortezza-di-myrdar"
  },
  {
    label: "Castello Firemag",
    loc: [1497, 1313],
    pop:
      "Questo antico castello di pietra lavica si erge ancora intatto sulle pendici delle montagne. E’ possibile vederlo da grandi distanze, e la sua sinistra fama lo rende un luogo temibile anche per gli avventurieri più esperti.",
    img: "/images/keeps/castello-firemag.jpg",
    copy: "https://www.deviantart.com/tituslunter/art/Fortress-397177044",
    copyBy: "tituslunter",
    link: "https://www.aumyr.world/geography/faeland.html#castello-firemag"
  },
  // Other
  {
    label: "Exus",
    loc: [1153, 315],
    pop:
      "In una posizione imprecisata, molto al di là dei confini Ovest di Faeland e oltre il Mare delle Anime, si trova il complesso chiamato Isole di Exus. L’intera area è avvolta da un campo di forza magico costituito da una moltitudine di incantesimi mantenuti da un’amalgama di magia e tecnologia degli Askari.",
    img: "/images/keeps/exus.jpg",
    copy: "https://www.deviantart.com/guang-yang/art/Nightmare-Tower-109930829",
    copyBy: "guang-yang",
    link: "https://www.aumyr.world/geography/#exus"
  }
];

for (let i = 0; i < keeps_markers.length; i++) {
  marker = L.marker(keeps_markers[i].loc, { icon: marker_icon_keep }).addTo(
    keeps_lg
  );
  marker.bindPopup(
    "<div class='card is-keep'><div class='card-bg' style='background-image:url(" +
      keeps_markers[i].img +
      ")'><div class='card-overlay'></div><a class='badge badge-right badge-secondary badge-sm' href='" +
      keeps_markers[i].copy +
      "' target='_blank' rel='noopener'>&copy; " +
      keeps_markers[i].copyBy +
      "</a>" +
      "</div><div class='card-body'>" +
      "<p>" +
      keeps_markers[i].pop +
      "</p><a href='" +
      keeps_markers[i].link +
      "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>"
  );
  marker.bindTooltip(keeps_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
