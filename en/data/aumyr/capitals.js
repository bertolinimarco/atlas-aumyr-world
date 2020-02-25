let capitals_lg = L.layerGroup();

let capitals_markers = [
  {
    label: "Dunmere",
    loc: [2687, 475],
    pop:
      "The city is a large settlement of steep and pointed rooftop houses, an oasis of civilization in the wild mountains.",
    img: "/images/capitals/dunmere.jpg",
    copy:
      "https://www.deviantart.com/memod/art/Frogster-game-concept-05-318588125",
    copyBy: "memod",
    link: "https://www.aumyr.world/en/geography/nordavind.html#dunmere"
  },
  {
    label: "Brean",
    loc: [2856.5, 2122],
    pop:
      "The city of Brean is also clearly visible from great distances, given its high Celestial Tower.",
    img: "/images/capitals/brean.jpg",
    copy: "https://www.andreasrocha.com",
    copyBy: "andreasrocha",
    link: "https://www.aumyr.world/en/geography/valdarn.html#brean"
  },
  {
    label: "Nordur",
    loc: [2906, 2812],
    pop:
      'Also known as the "City on the Stakes" or "The Suspended City", Nordur is a large settlement populated mainly by half-elves, halflings and mixed races.',
    img: "/images/capitals/nordur.jpg",
    copy: "https://www.deviantart.com/eliott-chacoco/art/Swamp-City-741285341",
    copyBy: "eliott-chacoco",
    link: "https://www.aumyr.world/en/geography/zeitan.html#nordur",
    linkMap: "nordur.html"
  },
  {
    label: "Highpine",
    loc: [2719, 3937],
    pop:
      "Highpine, with its rich neighbourhoods and numerous cultivated fields of the surrounding farms, is a perfect fortified city, home of the nobles and the Assembly.",
    img: "/images/capitals/highpine.jpg",
    copy:
      "https://www.deviantart.com/winterkeep/art/City-of-Baldur-s-Gate-760888253",
    copyBy: "winterkeep",
    link: "https://www.aumyr.world/en/geography/laangor.html#highpine",
    linkMap: "highpine.html"
  },
  {
    label: "Silverstone",
    loc: [1863, 4333],
    pop:
      "The city is surrounded by a network of monoliths called the Veiled Runes that protect the city from the attacks of the undead.",
    img: "/images/capitals/silverstone.jpg",
    copy: "https://www.deviantart.com/antonkurbatov/art/Dark-Coast-733234767",
    copyBy: "antonkurbatov",
    link: "https://www.aumyr.world/en/geography/jhert.html#silverstone",
    linkMap: "silverstone.html"
  },
  {
    label: "Khoralis",
    loc: [1254, 4465],
    pop:
      "It is the city dedicated to the Great Father, situated on a spur of meteoric rock in the northern part of the island. ",
    img: "/images/capitals/khoralis.jpg",
    copy:
      "https://www.deviantart.com/nele-diel/art/City-in-the-Lowlands-693529688",
    copyBy: "nele-diel",
    link: "https://www.aumyr.world/en/geography/inkari.html#khoralis",
    linkMap: "khoralis.html"
  },
  {
    label: "Meentum",
    loc: [629, 4566],
    pop:
      "It is located in an immense natural cave and the whole area, from the shape of the houses, to the splendid fountains, to the multicolored ferns gardens, reminds us of the creed and doctrine of the Great Mother.",
    img: "/images/capitals/meentum.jpg",
    copy:
      "https://www.deviantart.com/micahvanzandt/art/Follow-the-lights-371889364",
    copyBy: "micahvanzandt",
    link: "https://www.aumyr.world/en/geography/inkari.html#meentum",
    linkMap: "meentum.html"
  },
  {
    label: "Atanis",
    loc: [2462, 2254],
    pop:
      "Atanis is situated on a small hilly area in the middle of a river crossroads, where the Ator River and the Mor River form the Great River.",
    img: "/images/capitals/atanis.jpg",
    copy:
      "https://www.deviantart.com/chrisostrowski/art/Town-of-Beginnings-601163686",
    copyBy: "chrisostrowski",
    link: "https://www.aumyr.world/en/geography/aumar.html#atanis",
    linkMap: "atanis.html"
  },
  {
    label: "Feldris",
    loc: [1375, 2497],
    pop:
      "Located in the middle of a large plain but not too far from the coast of the Night Sea, Kessen's capital city is blessed by a mild climate almost always due to some warm winds from the gorges of the Cloud Mountains.",
    img: "/images/capitals/feldris.jpg",
    copy: "https://www.deviantart.com/iidanmrak/art/Main-town-339292813",
    copyBy: "iidanmrak",
    link: "https://www.aumyr.world/en/geography/kessen.html#feldris",
    linkMap: "feldris.html"
  },
  {
    label: "Fivestar",
    loc: [1498, 3070],
    pop:
      "Fivestar is the world's largest known city, with its large temples, ancient towers and ancient palaces, nestled in a lava rock promontory in the middle of the Night Sea.",
    img: "/images/capitals/fivestar.jpg",
    copy: "https://www.deviantart.com/jbrown67/art/Fantasy-City-722552486",
    copyBy: "jbrown67",
    link: "https://www.aumyr.world/en/geography/dreamor.html#fivestar",
    linkMap: "fivestar.html"
  },
  {
    label: "Veloras",
    loc: [2362, 3425],
    pop:
      "Entering Veloras via the wide foothill road, you get the impression that you are in one of the most beautiful places in the region.",
    img: "/images/capitals/veloras.jpg",
    copy: "https://www.deviantart.com/alcoholichamster/art/Dorwinion-791603645",
    copyBy: "alcoholichamster",
    link: "https://www.aumyr.world/en/geography/merosh.html#veloras",
    linkMap: "veloras.html"
  },
  {
    label: "Kaphnur",
    loc: [464, 3883],
    pop:
      "The entire area has been built on a river of solidified lava over the centuries, which has formed a surreal valley with blackish soil. ",
    img: "/images/capitals/kaphnur.jpg",
    copy: "https://www.deviantart.com/chriscold/art/Veins-435003842",
    copyBy: "chriscold",
    link: "https://www.aumyr.world/en/geography/gwaldur.html#kaphnur",
    linkMap: "kaphnur.html"
  },
  {
    label: "Pendor",
    loc: [687, 2308],
    pop:
      "Pendor, the old capital of Thanaros, represents a triumph of architecture from the past: palaces with soft curved lines, decorated spires, fountains with a refined style and decorations made by expert hands are very common visions throughout this old capital.",
    img: "/images/capitals/pendor.jpg",
    copy:
      "https://www.deviantart.com/marktarrisse/art/City-in-the-desert-490024968",
    copyBy: "marktarrisse",
    link: "https://www.aumyr.world/en/geography/thanaros.html#pendor",
    linkMap: "pendor.html"
  },
  {
    label: "Viriana",
    loc: [467, 1246],
    pop:
      "Viriana is the result of a joint architectural project between various races and along one of its streets you can come across buildings similar to those of the cities of the north, or low, flat-roofed houses typical of the south. ",
    img: "/images/capitals/viriana.jpg",
    copy: "https://www.deviantart.com/ravirr17/art/Desert-port-city-349001309",
    copyBy: "ravirr17",
    link: "https://www.aumyr.world/en/geography/thanaros.html#viriana",
    linkMap: "viriana.html"
  },
  {
    label: "Nayalis",
    loc: [921, 2219],
    pop:
      'Although many elves claim that Laendil\'s capital was supposed to rise in Mistdeep, the city of Nayalis has always been considered the "Forest Center"',
    img: "/images/capitals/nayalis.jpg",
    copy:
      "https://www.deviantart.com/adampaquette/art/Setessa-THEROS-393109436",
    copyBy: "adampaquette",
    link: "https://www.aumyr.world/en/geography/laendil.html#nayalis",
    linkMap: "nayalis.html"
  },
  {
    label: "Elerin",
    loc: [1555, 1087],
    pop:
      'Elerin is known as the "Mirror City". The octagon structure contains the large "Nucleus", a fortified circular structure in the middle.',
    img: "/images/capitals/elerin.jpg",
    copy:
      "https://www.deviantart.com/jbrown67/art/Turkish-Fantasy-City-539386187",
    copyBy: "jbrown67",
    link: "https://www.aumyr.world/en/geography/faeland.html#elerin",
    linkMap: "elerin.html"
  },
  {
    label: "Kartar",
    loc: [2259, 1126],
    pop:
      "Kartar, the capital of Kartaren, is situated at a crossroads and plays an important role in trade with the surrounding regions.",
    img: "/images/capitals/kartar.jpg",
    copy:
      "https://www.deviantart.com/robertcrescenzio/art/Fantasy-City-602736457",
    copyBy: "robertcrescenzio",
    link: "https://www.aumyr.world/en/geography/kartaren.html#kartar",
    linkMap: "kartar.html"
  },
  {
    label: "Damodar",
    loc: [1775, 784],
    pop:
      "Damodar, the Port on the Splendent Coast, is a kaleidoscope of colors and structures typical of a large merchant outpost. ",
    img: "/images/capitals/damodar.jpg",
    copy: "https://www.deviantart.com/gerezon/art/City-by-the-sea-526852101",
    copyBy: "gerezon",
    link: "https://www.aumyr.world/en/geography/laentas.html#damodar",
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
      "' class='link-text' target='_blank'>Read more on aumyr.world</a></div>"
  );
  marker.bindTooltip(capitals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
