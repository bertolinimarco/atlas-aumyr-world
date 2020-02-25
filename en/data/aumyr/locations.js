let locations_lg = L.layerGroup();

let locations_markers = [
  // Nordavind
  {
    label: "Kharnat Peak",
    loc: [2464, 630],
    pop:
      "As the highest mountain of the Frost Peaks, Kharnat is known to be the nest of various creatures, griffins, dragons and perhaps even something older, hidden inside the inaccessible mountain.",
    img: "/images/locations/picco-di-karnat.jpg",
    copy: "https://www.deviantart.com/butteredbap/art/Peak-393505404",
    copyBy: "butteredbap",
    link: "https://www.aumyr.world/en/geography/nordavind.html#kharnat-peak"
  },
  //Valdarn
  {
    label: "Talking Stones",
    loc: [2723, 1533],
    pop:
      "This complex of megalithic stones could be an ancient temple or some building dating back to pre-colonization years. ",
    img: "/images/locations/pietre-parlanti.jpg",
    copy: "https://www.deviantart.com/kaeriya/art/Standing-stones-528629299",
    copyBy: "kaeriya",
    link: "https://www.aumyr.world/en/geography/valdarn.html#talking-stones"
  },
  // Zeitan
  {
    label: "Morius",
    loc: [2940, 2534],
    pop:
      "Many adventurers claim that anyone who plunges into the waters of a spring at the bottom of a secret cave, at the end of a dangerous dungeon under the Mind Peaks called Morius, becomes immune to any damage for several days. ",
    img: "/images/locations/morius.jpg",
    copy: "https://www.deviantart.com/demonplay/art/Ancient-Stone-565477405",
    copyBy: "demonplay",
    link: "https://www.aumyr.world/en/geography/zeitan.html#morius"
  },
  {
    label: "Valle dell'Eco",
    loc: [3007, 3299],
    pop:
      "Somewhere in the valley there is a place where sounds bounce off the walls creating unique effects.",
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
      "A meeting point for caravans, Greenfield is exactly what is expected: green meadows home to numerous merchant camps.",
    img: "/images/locations/campoverde.jpg",
    copy: "https://www.deviantart.com/chillay/art/Clearing-447285898",
    copyBy: "chillay",
    link: "https://www.aumyr.world/en/geography/laangor.html#greenfield"
  },
  {
    label: "Redstones Cave",
    loc: [2316, 4378],
    pop:
      "It is the main mine in the region, from which the famous stones with fire red veins are extracted.",
    img: "/images/locations/cava-pietre-rosse.jpg",
    copy: "https://www.deviantart.com/ultragriffy/art/Cavernous-425102241",
    copyBy: "ultragriffy",
    link: "https://www.aumyr.world/en/geography/laangor.html#redstones-cave"
  },
  // Inkari
  {
    label: "Ghar-Melon",
    loc: [159, 4075],
    pop:
      'Even if the name means "The First Home", in the language of the continent, it is controversial that a fortress so ancient and not of native origin can be found in these areas.',
    img: "/images/locations/ghar-melon.jpg",
    copy:
      "https://www.deviantart.com/jeffchendesigns/art/Ancient-Temple-704500269",
    copyBy: "jeffchendesigns",
    link: "https://www.aumyr.world/geography/inkari.html#ghar-melon"
  },
  {
    label: "Stonemouth",
    loc: [1097, 4602],
    pop:
      "One of Inkari's most sacred sites, the Stone Mouth is a large clearing known for the presence of a large polished stone monolith, equipped with a central hole at human height.",
    img: "/images/locations/bocca-di-pietra.jpg",
    copy:
      "https://www.deviantart.com/allrichart/art/Ancient-Monolith-676322075",
    copyBy: "allrichart",
    link: "https://www.aumyr.world/en/geography/inkari.html#stonemouth"
  },
  // Aumar
  {
    label: "Bel-Vor Clearing",
    loc: [2380, 1713],
    pop:
      "This barren area north of the forest is one of the few points in the region completely devoid of vegetation.",
    img: "/images/locations/radura-di-bel-vor.jpg",
    copy: "https://www.deviantart.com/wildweasel339/art/Clearing-196297583",
    copyBy: "wildweasel339",
    link: "https://www.aumyr.world/en/geography/aumar.html#bel-vor-clearing"
  },
  {
    label: "Oldcross",
    loc: [2377, 2799],
    pop:
      "Destroyed and reconstructed several times, Oldcross is often raided by wild creatures from nearby Thomulard Hills.",
    img: "/images/locations/oldcross.jpg",
    copy:
      "https://www.deviantart.com/artofjonathanpowell/art/Riverside-Revisited-445512985",
    copyBy: "artofjonathanpowell",
    link: "https://www.aumyr.world/en/geography/aumar.html#oldcross"
  },
  // Kessen
  {
    label: "Shining Source",
    loc: [2076, 2454],
    pop:
      "The place consists of a small valley crossed by one of the tributaries of the Great River. ",
    img: "/images/locations/fonte-lucente.jpg",
    copy: "https://www.deviantart.com/umbatman/art/hidden-view-783380300",
    copyBy: "umbatman",
    link: "https://www.aumyr.world/en/geography/kessen.html#shining-source"
  },
  {
    label: "Stonetower",
    loc: [1792, 1782],
    pop:
      "Many believe that this pile of giant stones is a large open-air tomb for some ancient dwarf rulers.",
    img: "/images/locations/torre-di-pietra.jpg",
    copy: "https://www.deviantart.com/jjpeabody/art/Stone-Valley-468947700",
    copyBy: "jjpeabody",
    link: "https://www.aumyr.world/en/geography/kessen.html#stonetower"
  },
  {
    label: "Uduel",
    loc: [1534, 2192],
    pop:
      "Once an archaeological excavation protected by the Council, today it consists of a dungeon with several underground chambers. ",
    img: "/images/locations/uduel.jpg",
    copy: "https://www.deviantart.com/lyno3ghe/art/Environment-Mines-182189728",
    copyBy: "lyno3ghe",
    link: "https://www.aumyr.world/en/geography/kessen.html#uduel"
  },
  {
    label: "Uvarth",
    loc: [1918, 2840],
    pop:
      'This elliptical settlement once stood in the marshy areas now known as the Wailing Swamp and was one of the most shining examples of elite organic architecture: houses that "grows" and expand with the succession of seasons.',
    img: "/images/locations/uvarth.jpg",
    copy: "https://www.deviantart.com/sebastianwagner/art/Dungeon-359390614",
    copyBy: "sebastianwagner",
    link: "https://www.aumyr.world/en/geography/kessen.html#uvarth"
  },
  // Dreamor
  {
    label: "Balur Caves",
    loc: [1029, 3260],
    pop:
      "Fishermen who pass through the entrance of the cave often claim to see something gigantic moving over the waters inside the cave.",
    img: "/images/locations/grotte-di-balur.jpg",
    copy: "https://www.deviantart.com/ewkn/art/Cave-114377268",
    copyBy: "ewkn",
    link: "https://www.aumyr.world/en/geography/dreamor.html#balur-caves"
  },
  // Merosh
  {
    label: "Lovers Falls",
    loc: [2370, 3467],
    pop:
      "Almost obligatory stop during the visit of the region, the Falls are a natural spectacle that has contributed to the fame of the region, as well as its banner. ",
    img: "/images/locations/cascate-degli-amanti.jpg",
    copy: "https://www.deviantart.com/mittmac/art/Victoria-falls-192183580",
    copyBy: "mittmac",
    link: "https://www.aumyr.world/en/geography/merosh.html#lovers-falls"
  },
  {
    label: "Cave of Bones",
    loc: [2005, 3645],
    pop:
      "It is believed that in the past these natural caves have been used by the Native people as a place of prayer and burial.",
    img: "/images/locations/grotte-delle-ossa.jpg",
    copy: "https://www.deviantart.com/shahabalizadeh/art/Oni-Temple-529957309",
    copyBy: "shahabalizadeh",
    link: "https://www.aumyr.world/en/geography/merosh.html#cave-of-bones"
  },
  // Gwaldur
  {
    label: "Well of Souls",
    loc: [480, 3028],
    pop:
      "Some obscure legends tell that in the dungeon known as Well of Souls, there is buried a chamber containing an Askari Altar, with extraordinary powers.",
    img: "/images/locations/pozzo-delle-anime.jpg",
    copy: "https://www.deviantart.com/mingrutu/art/Abyss-457328812",
    copyBy: "mingrutu",
    link: "https://www.aumyr.world/en/geography/gwaldur.html#well-of-souls"
  },
  {
    label: "Deep Mines",
    loc: [508, 2592],
    pop:
      "Once rich in precious minerals, the mines are now a large underground cave and passageways complex, many of which have been eroded over time.",
    img: "/images/locations/miniere-profonde.jpg",
    copy:
      "https://www.deviantart.com/alynspiller/art/Dungeon-Passage-280728956",
    copyBy: "alynspiller",
    link: "https://www.aumyr.world/en/geography/gwaldur.html#deep-mines"
  },
  // Faeland
  {
    label: "Blackspring Mines",
    loc: [1508, 1603],
    pop:
      "An ancient gold and silver elf mine, Blackspring Mine is now a network of flooded and abandoned galleries.",
    img: "/images/locations/miniere-fontescura.jpg",
    copy: "https://www.deviantart.com/namkoart/art/Mine-426436319",
    copyBy: "namkoart",
    link: "https://www.aumyr.world/en/geography/faeland.html#blackspring-mines"
  },
  // Kartaren
  {
    label: "Azumai Caves",
    loc: [1723, 1445],
    pop:
      "In the southernmost part of the region, a set of canyons and open pit wells form the Azumai Caves.",
    img: "/images/locations/grotte-di-azumai.jpg",
    copy: "https://www.deviantart.com/snowskadi/art/Crystal-mines-194115622",
    copyBy: "snowskadi",
    link: "https://www.aumyr.world/en/geography/kartaren.html#azumai-caves"
  },
  {
    label: "Avaranth",
    loc: [2119, 969],
    pop:
      "The Avaranth excavation site and more generally the entire hilly area called Windarn Hills is one of the most unique sites in the entire region.",
    img: "/images/locations/avaranth.jpg",
    copy: "https://www.deviantart.com/allrichart/art/Trail-of-Ruins-688484316",
    copyBy: "allrichart",
    link: "https://www.aumyr.world/en/geography/kartaren.html#avaranth"
  },
  {
    label: "Golgos",
    loc: [2463, 1130],
    pop:
      "It is said that anyone who visits Golgos and stays there for more than a few days, begins to feel a heavy sense of fatigue and depression.",
    img: "/images/locations/golgos.jpg",
    copy: "https://www.deviantart.com/christiangerth/art/Swamp-450639052",
    copyBy: "christiangerth",
    link: "https://www.aumyr.world/en/geography/kartaren.html#golgos"
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
