let locations_lg = L.layerGroup();

let locations_markers = [
  // Nordavind
  {
    label: "Picco di Kharnat",
    loc: [2464, 630],
    pop:
      "Come monte più alto dei Picchi del Gelo, Kharnat è conosciuto per essere il nido di svariate creature, grifoni, draghi e forse anche qualcosa di più antico, nascosto all’interno della montagna inaccessibile.",
    img: "/images/locations/picco-di-karnat.jpg",
    copy: "https://www.deviantart.com/butteredbap/art/Peak-393505404",
    copyBy: "butteredbap",
    link: "https://www.aumyr.world/geography/nordavind.html#picco-di-kharnat"
  },
  //Valdarn
  {
    label: "Pietre Parlanti",
    loc: [2723, 1533],
    pop:
      "Questo complesso di pietre megalitiche potrebbe essere un tempio antico o una qualche costruzione risalente alle epoche pre-colonizzazione.",
    img: "/images/locations/pietre-parlanti.jpg",
    copy: "https://www.deviantart.com/kaeriya/art/Standing-stones-528629299",
    copyBy: "kaeriya",
    link: "https://www.aumyr.world/geography/valdarn.html#pietre-parlanti"
  },
  // Zeitan
  {
    label: "Morius",
    loc: [2940, 2534],
    pop:
      "Molti avventurieri affermano che chiunque si immerga nelle acque di una sorgente sul fondo di una grotta segreta, a sua volta in fondo ad un pericoloso dungeon sotto i Picchi della Mente chiamato Morius, diventi immune a qualsiasi danno per diversi giorni. ",
    img: "/images/locations/morius.jpg",
    copy: "https://www.deviantart.com/demonplay/art/Ancient-Stone-565477405",
    copyBy: "demonplay",
    link: "https://www.aumyr.world/geography/zeitan.html#morius"
  },
  {
    label: "Valle dell'Eco",
    loc: [3007, 3299],
    pop:
      "Da qualche parte nella valle esiste un posto dove i suoni rimbalzano sulle pareti creando degli effetti singolari.",
    img: "/images/locations/valle-dell-eco.jpg",
    copy: "https://www.deviantart.com/sketchling/art/River-Valley-6045383",
    copyBy: "sketchling",
    link: "#"
  },
  // Laangor
  {
    label: "Campoverde",
    loc: [2581, 3989],
    pop:
      "Punto di ritrovo carovaniero, Campoverde è esattamente quello che ci si aspetta: verdi prati sedi di numerosi accampamenti mercantili.",
    img: "/images/locations/campoverde.jpg",
    copy: "https://www.deviantart.com/chillay/art/Clearing-447285898",
    copyBy: "chillay",
    link: "https://www.aumyr.world/geography/laangor.html#campoverde"
  },
  {
    label: "Cava delle Pietre Rosse",
    loc: [2316, 4378],
    pop:
      "E’ la principale miniera della regione, da cui si estraggono le famose pietre con venature color rosso fuoco.",
    img: "/images/locations/cava-pietre-rosse.jpg",
    copy: "https://www.deviantart.com/ultragriffy/art/Cavernous-425102241",
    copyBy: "ultragriffy",
    link:
      "https://www.aumyr.world/geography/laangor.html#cava-delle-pietre-rosse"
  },
  // Inkari
  {
    label: "Ghar-Melon",
    loc: [159, 4075],
    pop:
      "Anche se il nome significa “La Prima Casa”, nella lingua del continente, è oggetto di controversie il fatto che una fortezza così antica e non di origine Nativa possa trovarsi in queste zone.",
    img: "/images/locations/ghar-melon.jpg",
    copy:
      "https://www.deviantart.com/jeffchendesigns/art/Ancient-Temple-704500269",
    copyBy: "jeffchendesigns",
    link: "https://www.aumyr.world/geography/inkari.html#ghar-melon"
  },
  {
    label: "Bocca di Pietra",
    loc: [1097, 4602],
    pop:
      "Uno dei luoghi più sacri di Inkari, la Bocca di Pietra è un’ampia radura nota per la presenza di un grande monolite di pietra levigata, provvisto di un foro centrale ad altezza d’uomo.",
    img: "/images/locations/bocca-di-pietra.jpg",
    copy:
      "https://www.deviantart.com/allrichart/art/Ancient-Monolith-676322075",
    copyBy: "allrichart",
    link: "https://www.aumyr.world/geography/inkari.html#bocca-di-pietra"
  },
  // Aumar
  {
    label: "Radura di Bel-Vor",
    loc: [2380, 1713],
    pop:
      "Questo spazio brullo a nord della foresta è uno dei pochi punti nella regione completamente privo di vegetazione.",
    img: "/images/locations/radura-di-bel-vor.jpg",
    copy: "https://www.deviantart.com/wildweasel339/art/Clearing-196297583",
    copyBy: "wildweasel339",
    link: "https://www.aumyr.world/geography/aumar.html#radura-di-bel-vor"
  },
  {
    label: "Oldcross",
    loc: [2377, 2799],
    pop:
      "Distrutta e ricostruita più volte, Oldcross è spesso oggetto di raid da parte delle creature selvagge provenienti dalle vicine Colline di Thomulard.",
    img: "/images/locations/oldcross.jpg",
    copy:
      "https://www.deviantart.com/artofjonathanpowell/art/Riverside-Revisited-445512985",
    copyBy: "artofjonathanpowell",
    link: "https://www.aumyr.world/geography/aumar.html#oldcross"
  },
  // Kessen
  {
    label: "Fonte Lucente",
    loc: [2076, 2454],
    pop:
      "Il luogo consiste in una piccola vallata attraversata da uno degli affluenti del Grande Fiume. ",
    img: "/images/locations/fonte-lucente.jpg",
    copy: "https://www.deviantart.com/umbatman/art/hidden-view-783380300",
    copyBy: "umbatman",
    link: "https://www.aumyr.world/geography/kessen.html#fonte-lucente"
  },
  {
    label: "Torre di Pietra",
    loc: [1792, 1782],
    pop:
      "Molti credono che questo ammasso di pietre gigantesche sia una grande tomba all’aperto per alcuni antichi sovrani nanici. ",
    img: "/images/locations/torre-di-pietra.jpg",
    copy: "https://www.deviantart.com/jjpeabody/art/Stone-Valley-468947700",
    copyBy: "jjpeabody",
    link: "https://www.aumyr.world/geography/kessen.html#torre-di-pietra"
  },
  {
    label: "Uduel",
    loc: [1534, 2192],
    pop:
      "Un tempo scavo archeologico protetto dalla Confraternita, oggi è costituito da un dungeon con diverse camere sotterranee.",
    img: "/images/locations/uduel.jpg",
    copy: "https://www.deviantart.com/lyno3ghe/art/Environment-Mines-182189728",
    copyBy: "lyno3ghe",
    link: "https://www.aumyr.world/geography/kessen.html#uduel"
  },
  {
    label: "Uvarth",
    loc: [1918, 2840],
    pop:
      "Questo insediamento elfico sorgeva un tempo nelle zone acquitrinose oggi conosciute come Palude del Pianto ed era uno dei più fulgidi esempi di architettura organica elfica: case che “crescevano” e che si espandevano con il susseguirsi delle stagioni.",
    img: "/images/locations/uvarth.jpg",
    copy: "https://www.deviantart.com/sebastianwagner/art/Dungeon-359390614",
    copyBy: "sebastianwagner",
    link: "https://www.aumyr.world/geography/kessen.html#uvarth"
  },
  // Dreamor
  {
    label: "Grotte di Balur",
    loc: [1029, 3260],
    pop:
      "Spesso i pescatori che transitano davanti all’entrata della grotta sostengono di intravedere qualcosa di gigantesco muoversi sopra le acque al suo interno.",
    img: "/images/locations/grotte-di-balur.jpg",
    copy: "https://www.deviantart.com/ewkn/art/Cave-114377268",
    copyBy: "ewkn",
    link: "https://www.aumyr.world/geography/dreamor.html#grotte-di-balur"
  },
  // Merosh
  {
    label: "Cascate degli Amanti",
    loc: [2370, 3467],
    pop:
      "Tappa quasi obbligata durante la visita della regione, le Cascate sono uno spettacolo naturale che ha contribuito alla fama della regione, oltre che al suo stendardo.",
    img: "/images/locations/cascate-degli-amanti.jpg",
    copy: "https://www.deviantart.com/mittmac/art/Victoria-falls-192183580",
    copyBy: "mittmac",
    link: "https://www.aumyr.world/geography/merosh.html#cascate-degli-amanti"
  },
  {
    label: "Grotte delle Ossa",
    loc: [2005, 3645],
    pop:
      "Si crede che in passato queste grotte naturali siano state utilizzate dalle popolazioni Native come luogo di preghiera e di tumulazione.",
    img: "/images/locations/grotte-delle-ossa.jpg",
    copy: "https://www.deviantart.com/shahabalizadeh/art/Oni-Temple-529957309",
    copyBy: "shahabalizadeh",
    link: "https://www.aumyr.world/geography/merosh.html#grotte-delle-ossa"
  },
  // Gwaldur
  {
    label: "Pozzo delle Anime",
    loc: [480, 3028],
    pop:
      "Alcune oscure leggende narrano che nel dungeon conosciuto come Pozzo delle Anime, vi sia sepolta una camera contenente un’Altare degli Askari, dai poteri straordinari.",
    img: "/images/locations/pozzo-delle-anime.jpg",
    copy: "https://www.deviantart.com/mingrutu/art/Abyss-457328812",
    copyBy: "mingrutu",
    link: "https://www.aumyr.world/geography/gwaldur.html#pozzo-delle-anime"
  },
  {
    label: "Miniere Profonde",
    loc: [508, 2592],
    pop:
      "Un tempo ricche di minerali preziosi, le Miniere Profonde sono ora un grande complesso sotterraneo di caverne e cunicoli, molti dei quali erosi dal tempo.",
    img: "/images/locations/miniere-profonde.jpg",
    copy:
      "https://www.deviantart.com/alynspiller/art/Dungeon-Passage-280728956",
    copyBy: "alynspiller",
    link: "https://www.aumyr.world/geography/gwaldur.html#miniere-profonde"
  },
  // Faeland
  {
    label: "Miniere Fontescura",
    loc: [1508, 1603],
    pop:
      "Antica miniera elfica d’oro e di argento, Fontescura è ora una rete di gallerie allagate e abbandonate.",
    img: "/images/locations/miniere-fontescura.jpg",
    copy: "https://www.deviantart.com/namkoart/art/Mine-426436319",
    copyBy: "namkoart",
    link: "https://www.aumyr.world/geography/faeland.html#miniere-fontescura"
  },
  // Kartaren
  {
    label: "Grotte di Azumai",
    loc: [1723, 1445],
    pop:
      "Nella parte più a sud della regione, un insieme di canyon e pozzi a cielo aperto formano la catena di Grotte di Azumai. ",
    img: "/images/locations/grotte-di-azumai.jpg",
    copy: "https://www.deviantart.com/snowskadi/art/Crystal-mines-194115622",
    copyBy: "snowskadi",
    link: "https://www.aumyr.world/geography/kartaren.html#grotte-di-azumai"
  },
  {
    label: "Avaranth",
    loc: [2119, 969],
    pop:
      "Lo scavo di Avaranth e più in generale l’intera area collinare denominata Colline Windarn è uno dei siti più singolari dell’intera regione. ",
    img: "/images/locations/avaranth.jpg",
    copy: "https://www.deviantart.com/allrichart/art/Trail-of-Ruins-688484316",
    copyBy: "allrichart",
    link: "https://www.aumyr.world/geography/kartaren.html#avaranth"
  },
  {
    label: "Golgos",
    loc: [2463, 1130],
    pop:
      "Si dice che chiunque visiti Golgos e vi rimanga per più di qualche giorno, inizi ad avvertire un senso pesante di stanchezza e depressione. ",
    img: "/images/locations/golgos.jpg",
    copy: "https://www.deviantart.com/christiangerth/art/Swamp-450639052",
    copyBy: "christiangerth",
    link: "https://www.aumyr.world/geography/kartaren.html#golgos"
  }
];

for (let i = 0; i < locations_markers.length; i++) {
  marker = L.marker(locations_markers[i].loc, {
    icon: marker_icon_location
  }).addTo(locations_lg);
  marker.bindPopup(
    "<div class='card is-keep'><div class='card-bg' style='background-image:url(" +
      locations_markers[i].img +
      ")'><div class='card-overlay'></div><a class='badge badge-right badge-secondary badge-sm' href='" +
      locations_markers[i].copy +
      "' target='_blank' rel='noopener'>&copy; " +
      locations_markers[i].copyBy +
      "</a>" +
      "</div><div class='card-body'>" +
      "<p>" +
      locations_markers[i].pop +
      "</p><a href='" +
      locations_markers[i].link +
      "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>"
  );
  marker.bindTooltip(locations_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
