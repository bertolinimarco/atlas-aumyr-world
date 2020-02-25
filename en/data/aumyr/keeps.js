let keeps_lg = L.layerGroup();

let keeps_markers = [
  // Nordavind
  {
    label: "Greytower",
    loc: [2712, 738],
    pop:
      "This fortress was once the place from where Beonur, one of the strongest warriors of all Aumyr, gathered the Clans under one banner.",
    img: "/images/keeps/torregrigia.jpg",
    copy:
      "https://www.deviantart.com/behindspace99/art/EVER-ROCK-KEEP-694969710",
    copyBy: "behindspace99",
    link: "https://www.aumyr.world/en/geography/nordavind.html#greytower"
  },
  // Valdarn
  {
    label: "Faux Edge",
    loc: [3142, 2412],
    pop:
      "This large structure that stands in the northernmost point of the whole continent, it is rumored to be an ancient monastery.",
    img: "/images/keeps/faux-edge.jpg",
    copy:
      "https://www.deviantart.com/markbulahao/art/Watermill-Monastery-176206926",
    copyBy: "markbulahao",
    link: "https://www.aumyr.world/en/geography/zeitan.html#faux-edge"
  },
  // Zeitan
  {
    label: "Void Citadel",
    loc: [2679, 3335],
    pop:
      "Located on a promontory in the middle of the Samard Valley peaks, the Void Citadel is a fortified settlement formed by a bastion of black and obsidian basalt, with numerous pointed towers that rise threateningly above the surrounding landscape.",
    img: "/images/keeps/cittadella-del-vuoto.jpg",
    copy:
      "https://www.deviantart.com/legendary-memory/art/Dark-Castle-429351752",
    copyBy: "legendary-memory",
    link: "https://www.aumyr.world/en/geography/zeitan.html#void-citadel"
  },
  // Laangor
  {
    label: "Darkwind Castle",
    loc: [2765, 3799],
    pop:
      "Once an even larger fortress than Highpine and home to the Darkwind family, the castle is now owned by a noble local who uses the fortress as a place of entertainment and often exclusive banquets for his famous guests. ",
    img: "/images/keeps/castello-darkwind.jpg",
    copy:
      "https://www.deviantart.com/jeremypaillotin/art/Fortress-of-the-Arch-584740275",
    copyBy: "jeremypaillotin",
    link: "https://www.aumyr.world/en/geography/laangor.html#darkwind-castle"
  },
  {
    label: "Angor",
    loc: [3156, 4422],
    pop:
      "The fortress is the northernmost known point of Aumyr. Reaching it is difficult: trapped in the ice and lashed by strong winds, it is the only point marked on the maps, besides the village of Norn.",
    img: "/images/keeps/angor.jpg",
    copy: "https://www.deviantart.com/allrichart/art/Glacier-Castle-722878412",
    copyBy: "allrichart",
    link: "#"
  },
  // Jhert
  {
    label: "Sunset Halls",
    loc: [2154, 3924],
    pop:
      "At the edge of a lake in the centre of the Planes, a quarry opens, connected to an old fortress. Near the quarry there is an abandoned outpost surrounded by a palisade built by some adventurers willing to explore the fortress.",
    img: "/images/keeps/sale-del-tramonto.jpg",
    copy:
      "https://www.deviantart.com/guang-yang/art/Prison-set-sketches-124879910",
    copyBy: "guang-yang",
    link: "https://www.aumyr.world/en/geography/jhert.html#sunset-halls"
  },
  {
    label: "Halls of Memories",
    loc: [527, 4430],
    pop:
      "Entirely carved into the mountainside, this structure is one of the highest points of the artistic and cultural wisdom of the Askari. Grandius halls with vaults still partially frescoed and numerous engravings tell almost everything we know about this lost civilization. ",
    img: "/images/keeps/sale-dei-ricordi.jpg",
    copy: "https://www.deviantart.com/irbeus/art/Mountain-Fortress-446189425",
    copyBy: "irbeus",
    link: "https://www.aumyr.world/en/geography/inkari.html#halls-of-memories"
  },
  // Kessen
  {
    label: "Felmalein",
    loc: [1351, 2306],
    pop:
      "It is an almost completely submerged stronghold: the creatures that infest this area never leave the surrounding area and rarely glimpse on the surface, so much so as to suggest that some power can still be alive in its depths invaded by water.",
    img: "/images/keeps/felmalein.jpg",
    copy: "https://www.deviantart.com/blindlynx82/art/Sunken-Village-459477981",
    copyBy: "blindlynx82",
    link: "https://www.aumyr.world/en/geography/kessen.html#felmalein"
  },
  // Dreamor
  {
    label: "Amakur",
    loc: [1432, 2822],
    pop:
      "The ancient fortress of Amakur has for years been the seat of an organization of the Council dedicated to patrolling the Night Sea in search of criminal activity and smuggling.",
    img: "/images/keeps/amakur.jpg",
    copy: "https://www.deviantart.com/ron-faure/art/Island-Castle-635705313",
    copyBy: "ron-faure",
    link: "https://www.aumyr.world/en/geography/dreamor.html#amakur"
  },
  {
    label: "The Lone Tower",
    loc: [776, 3593],
    pop:
      "Once the home of some powerful sorcerer, it is a large structure with unusual shapes that doesn't seem to remain in your place for a long time. It is so old that it is considered to be a permanent attraction of the region. ",
    img: "/images/keeps/torre-solitaria.jpg",
    copy: "https://www.deviantart.com/moskuito/art/Lost-In-Magic-565417869",
    copyBy: "moskuito",
    link: "https://www.aumyr.world/en/geography/dreamor.html#the-lone-tower"
  },
  // Gwaldur
  {
    label: "Morganis' Tower",
    loc: [569, 4075],
    pop:
      "A dwelling place of an elderly sorcerer, his death has led numerous creatures to invade the rooms of this structure in lava stone.",
    img: "/images/keeps/torre-di-morganis.jpg",
    copy: "https://www.deviantart.com/nm-art/art/Volcanic-area-653911888",
    copyBy: "nm-art",
    link: "https://www.aumyr.world/en/geography/gwaldur.html#morganis-tower"
  },
  {
    label: "Oduur Keep",
    loc: [455, 2767],
    pop:
      "This sandstone and basalt stronghold on one side of the mountain reminds the traveler of the beauty and mystery of the Gwaldur region.",
    img: "/images/keeps/fortezza-di-oduur.jpg",
    copy:
      "https://www.deviantart.com/tomedwardsconcepts/art/Dark-Moon-Pass-328109633",
    copyBy: "tomedwardsconcepts",
    link: "https://www.aumyr.world/en/geography/gwaldur.html#oduur-keep"
  },
  // Gwaldur
  {
    label: "Jalamai",
    loc: [449, 2106],
    pop:
      "The Palace of Jalamai is a large fortified complex built on the red and desert mountains of the Sand Coast. Little is known about this area, even considering its solitary position.",
    img: "/images/keeps/jalamai.jpg",
    copy:
      "https://www.deviantart.com/ravenseyetravislacey/art/Palace-backed-in-silver-211992256",
    copyBy: "ravenseyetravislacey",
    link: "https://www.aumyr.world/en/geography/thanaros.html#jalamai"
  },
  {
    label: "Blackraven",
    loc: [710, 1287],
    pop:
      "Blackraven Castle was erected as an extreme refuge for the Ten Elders of Viriana in the event of a maritime attack.",
    img: "/images/keeps/blackraven.jpg",
    copy:
      "https://www.deviantart.com/piotrdura/art/Ankh-amon-Citadel-574225291",
    copyBy: "piotrdura",
    link: "https://www.aumyr.world/en/geography/thanaros.html#blackraven"
  },
  // Laendil
  {
    label: "Orianur Keep",
    loc: [894, 2738],
    pop:
      'Also known as "The Keep Without Walls", this unusual structure is formed by a large square tower completely without fortifications.',
    img: "/images/keeps/fortezza-di-orianur.jpg",
    copy: "https://www.deviantart.com/papayoufr/art/Castle-509750991",
    copyBy: "papayoufr",
    link: "https://www.aumyr.world/en/geography/laendil.html#orianur-keep"
  },
  {
    label: "Blackguard",
    loc: [1157, 1861],
    pop:
      "Historical structure, erected by the first founding members of the Wolfguard, this fortress stands on the forest boundary and for two centuries has been an impregnable outpost.",
    img: "/images/keeps/guardianera.jpg",
    copy:
      "https://www.deviantart.com/jjcanvas/art/Castle-landscape-sketch-533169991",
    copyBy: "jjcanvas",
    link: "https://www.aumyr.world/en/geography/laendil.html#blackguard"
  },
  // Faeland
  {
    label: "City of Dawn",
    loc: [1444, 1876],
    pop:
      "Although the name may evoke images of a magnificent shining castle, the City of the Dawn is a very dangerous place. The goddess Vel-Shar chose this place two centuries ago to erect a majestic dwelling, symbol of her power over the undead.",
    img: "/images/keeps/citta-dell-alba.jpg",
    copy:
      "https://www.deviantart.com/jjcanvas/art/The-old-dark-Haunted-Castle-196139050",
    copyBy: "jjcanvas",
    link: "https://www.aumyr.world/en/geography/faeland.html#city-of-dawn"
  },
  {
    label: "Myrdar Fortress",
    loc: [1124, 1371],
    pop:
      "Unlike than a fortress, Myrdar is now a collection of large stones and ruins. ",
    img: "/images/keeps/fortezza-di-myrdar.jpg",
    copy: "https://www.deviantart.com/cury/art/Castle-Ruins-393139045",
    copyBy: "cury",
    link: "https://www.aumyr.world/en/geography/faeland.html#myrdar-fortress"
  },
  {
    label: "Firemag Castle",
    loc: [1497, 1313],
    pop:
      "This ancient lava stone castle still stands intact on the slopes of the mountains. It is possible to see it from great distances, and its fame makes it a fearsome place for even the most experienced adventurers.",
    img: "/images/keeps/castello-firemag.jpg",
    copy: "https://www.deviantart.com/tituslunter/art/Fortress-397177044",
    copyBy: "tituslunter",
    link: "https://www.aumyr.world/en/geography/faeland.html#firemag-castle"
  },
  // Other
  {
    label: "Exus",
    loc: [1153, 315],
    pop:
      "In an undisclosed location, far beyond the west borders of Faeland and beyond the Sea of Souls, lies the complex called Exus Islands. The whole area is surrounded by a magic force field consisting of a multitude of spells maintained by an amalgam of magic and technology of the Askari.",
    img: "/images/keeps/exus.jpg",
    copy: "https://www.deviantart.com/guang-yang/art/Nightmare-Tower-109930829",
    copyBy: "guang-yang",
    link: "https://www.aumyr.world/en/geography/#exus"
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
      "' class='link-text' target='_blank'>Read more on aumyr.world</a></div>"
  );
  marker.bindTooltip(keeps_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
