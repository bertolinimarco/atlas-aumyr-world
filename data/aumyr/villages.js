let villages_lg = L.layerGroup();

let villages_markers = [
  // Nordavind
  {
    label: "Treskor",
    loc: [2474, 372],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Odinport",
    loc: [2342, 724],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Laskhan",
    loc: [2648, 892],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Waybridge",
    loc: [2358, 928],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Respirion",
    loc: [2578, 1053],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Lodoss",
    loc: [2831, 1020],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Urgul",
    loc: [2855, 1321],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Vast",
    loc: [2204, 746],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  // Valdarn
  {
    label: "Yrodsun",
    loc: [2473, 1406.5],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Kemerin",
    loc: [2647, 1449],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Stonebeard",
    loc: [2675, 1684.5],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Cynosur",
    loc: [2820.5, 1560],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Farpoint",
    loc: [2949, 1807],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Algese",
    loc: [2887, 2043],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Namzar",
    loc: [2710, 2074],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Mur-Dalmaz",
    loc: [2786, 2346],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  // Zeitan
  {
    label: "Aaris",
    loc: [2780, 2614],
    category: "Villaggio",
    pop: "",
    link: "#"
  },
  {
    label: "Deepdelve",
    loc: [2892, 2926],
    pop: "",
    link: "#"
  },
  {
    label: "Opur",
    loc: [3006, 2768],
    pop: "",
    link: "#"
  },
  {
    label: "Rentel",
    loc: [2652, 2971],
    pop: "",
    link: "#"
  },
  {
    label: "Novilun",
    loc: [3079, 3059],
    pop: "",
    link: "#"
  },
  {
    label: "Aesir",
    loc: [2899, 3199],
    pop: "",
    link: "#"
  },
  {
    label: "Valna",
    loc: [3076, 3444],
    pop: "",
    link: "#"
  },
  {
    label: "Pornis",
    loc: [2910, 3494],
    pop: "",
    link: "#"
  },
  // Laangor
  {
    label: "Kaimon",
    loc: [2805, 3987],
    pop: "",
    link: "#"
  },
  {
    label: "Jewelon",
    loc: [2694, 4041],
    pop: "",
    link: "#"
  },
  {
    label: "Ur-Dazur",
    loc: [2638, 4124],
    pop: "",
    link: "#"
  },
  {
    label: "Glaciern",
    loc: [2719, 4263],
    pop: "",
    link: "#"
  },
  {
    label: "Skedarn",
    loc: [2677, 3615],
    pop: "",
    link: "#"
  },
  {
    label: "Roteran",
    loc: [2358, 4109],
    pop: "",
    link: "#"
  },
  {
    label: "Medolis",
    loc: [2555, 4379],
    pop: "",
    link: "#"
  },
  {
    label: "Norn",
    loc: [2993, 4482],
    pop: "",
    link: "#"
  },
  {
    label: "Dawnsea",
    loc: [2143, 4478],
    pop: "",
    link: "#"
  },
  // Jhert
  {
    label: "Bemea",
    loc: [2070, 4124],
    pop: "",
    link: "#"
  },
  {
    label: "Ansar",
    loc: [1999, 3956],
    pop: "",
    link: "#"
  },
  {
    label: "Miradon",
    loc: [1920, 4335],
    pop: "",
    link: "#"
  },
  {
    label: "Valenq",
    loc: [1666, 3830],
    pop: "",
    link: "#"
  },
  {
    label: "Nimeria",
    loc: [1670, 4141],
    pop: "",
    link: "#"
  },
  {
    label: "Shieldbane",
    loc: [1546, 4095],
    pop: "",
    link: "#"
  },
  // Inkari
  {
    label: "Fieldgrave",
    loc: [1348, 4454],
    pop: "",
    link: "#"
  },
  {
    label: "Thymar",
    loc: [1172, 4378],
    pop: "",
    link: "#"
  },
  {
    label: "Hunteron",
    loc: [1219, 4593],
    pop: "",
    link: "#"
  },
  {
    label: "Bhalair",
    loc: [1002, 4487],
    pop: "",
    link: "#"
  },
  {
    label: "Veo-Thrash",
    loc: [1021, 4661],
    pop: "",
    link: "#"
  },
  {
    label: "Hypnos",
    loc: [709, 4511],
    pop: "",
    link: "#"
  },
  {
    label: "Gaormer",
    loc: [638, 4203],
    pop: "",
    link: "#"
  },
  {
    label: "Yard",
    loc: [257, 4135],
    pop: "",
    link: "#"
  },
  {
    label: "Vohn",
    loc: [83, 4033],
    pop: "",
    link: "#"
  },
  {
    label: "Orkus",
    loc: [174, 4330],
    pop: "",
    link: "#"
  },
  // Aumar
  {
    label: "Freshale",
    loc: [2428, 2071],
    pop: "",
    link: "#"
  },
  {
    label: "Kar-Magol",
    loc: [2218, 1484],
    pop: "",
    link: "#"
  },
  {
    label: "Gorasun",
    loc: [2340, 2208],
    pop: "",
    link: "#"
  },
  {
    label: "Nertel",
    loc: [2266, 2384],
    pop: "",
    link: "#"
  },
  {
    label: "Lemaru",
    loc: [2369, 1913],
    pop: "",
    link: "#"
  },
  {
    label: "Tuskdorn",
    loc: [2108, 2117],
    pop: "",
    link: "#"
  },
  {
    label: "Greatdale",
    loc: [1977, 1944],
    pop: "",
    link: "#"
  },
  {
    label: "Uramel",
    loc: [2207, 1690],
    pop: "",
    link: "#"
  },
  // Kessen
  {
    label: "Bangor",
    loc: [1955, 2214],
    pop: "",
    link: "#"
  },
  {
    label: "Felgen",
    loc: [1549, 2063],
    pop: "",
    link: "#"
  },
  {
    label: "Baurus",
    loc: [1296, 2470],
    pop: "",
    link: "#"
  },
  {
    label: "Elchidon",
    loc: [1295, 2548],
    pop: "",
    link: "#"
  },
  {
    label: "Nomodril",
    loc: [1387, 2674],
    pop: "",
    link: "#"
  },
  {
    label: "Halgon",
    loc: [1732, 2560],
    pop: "",
    link: "#"
  },
  {
    label: "Imaltar",
    loc: [1796, 2709],
    pop: "",
    link: "#"
  },
  {
    label: "Yartar",
    loc: [1976, 2756],
    pop: "",
    link: "#"
  },
  {
    label: "Emmeros",
    loc: [1538, 2442],
    pop: "",
    link: "#"
  },
  // Dreamor
  {
    label: "Deepwood",
    loc: [1933, 3225],
    pop: "",
    link: "#"
  },
  {
    label: "Doaeris",
    loc: [1822, 3462],
    pop: "",
    link: "#"
  },
  {
    label: "Demeriah",
    loc: [1734, 3220],
    pop: "",
    link: "#"
  },
  {
    label: "Archbridge",
    loc: [1623, 3223],
    pop: "",
    link: "#"
  },
  {
    label: "Nesos",
    loc: [1388, 2817],
    pop: "",
    link: "#"
  },
  {
    label: "Aleburg",
    loc: [1569, 3391],
    pop: "",
    link: "#"
  },
  {
    label: "Gavrin",
    loc: [1601, 3604],
    pop: "",
    link: "#"
  },
  {
    label: "Imyren",
    loc: [1475, 3741],
    pop: "",
    link: "#"
  },
  {
    label: "Valygar",
    loc: [1320, 3549],
    pop: "",
    link: "#"
  },
  {
    label: "Sarisa",
    loc: [1251, 3710],
    pop: "",
    link: "#"
  },
  {
    label: "Therem",
    loc: [1153, 3514],
    pop: "",
    link: "#"
  },

  {
    label: "Demunor",
    loc: [1154, 3938],
    pop: "",
    link: "#"
  },
  {
    label: "Treemask",
    loc: [1094, 3854],
    pop: "",
    link: "#"
  },
  {
    label: "Rivershed",
    loc: [1031, 4028],
    pop: "",
    link: "#"
  },
  {
    label: "Refuge",
    loc: [825, 3801],
    pop: "",
    link: "#"
  },
  {
    label: "Myron",
    loc: [947, 3514],
    pop: "",
    link: "#"
  },
  {
    label: "Melikos",
    loc: [914, 3219],
    pop: "",
    link: "#"
  },
  {
    label: "Baathor",
    loc: [958, 3119],
    pop: "",
    link: "#"
  },
  {
    label: "Mahog",
    loc: [1016, 2947],
    pop: "",
    link: "#"
  },
  {
    label: "Blumer",
    loc: [885, 4062],
    pop: "",
    link: "#"
  },
  {
    label: "Gerinth",
    loc: [622, 3806],
    pop: "",
    link: "#"
  },
  // Merosh
  {
    label: "Nomaders",
    loc: [2415, 3064],
    pop: "",
    link: "#"
  },
  {
    label: "Searun",
    loc: [2088, 3021],
    pop: "",
    link: "#"
  },
  {
    label: "Arten",
    loc: [2476, 3671],
    pop: "",
    link: "#"
  },
  // Gwaldur
  {
    label: "Khem",
    loc: [575, 3667],
    pop: "",
    link: "#"
  },
  {
    label: "Karduk",
    loc: [354, 3687],
    pop: "",
    link: "#"
  },
  {
    label: "Pilard",
    loc: [252, 3759],
    pop: "",
    link: "#"
  },
  {
    label: "Femen",
    loc: [185, 3548],
    pop: "",
    link: "#"
  },
  {
    label: "Tresdor",
    loc: [687, 3388],
    pop: "",
    link: "#"
  },
  {
    label: "Jordul",
    loc: [277, 3371],
    pop: "",
    link: "#"
  },
  {
    label: "Otton",
    loc: [155, 3251],
    pop: "",
    link: "#"
  },
  {
    label: "Rubel",
    loc: [351, 3072],
    pop: "",
    link: "#"
  },
  {
    label: "Eukand",
    loc: [266, 3131],
    pop: "",
    link: "#"
  },
  {
    label: "Vestal",
    loc: [624, 2744],
    pop: "",
    link: "#"
  },
  {
    label: "Murden",
    loc: [380, 2671],
    pop: "",
    link: "#"
  },
  {
    label: "Omniros",
    loc: [490, 2456],
    pop: "",
    link: "#"
  },
  // Thanaros
  {
    label: "Tamaz",
    loc: [549, 2379],
    pop: "",
    link: "#"
  },
  {
    label: "Nur-Shai",
    loc: [486, 2149],
    pop: "",
    link: "#"
  },
  {
    label: "Oasi di Thanduun",
    loc: [627, 1799],
    pop: "",
    link: "#"
  },
  {
    label: "Amodrar",
    loc: [947, 1612],
    pop: "",
    link: "#"
  },
  {
    label: "Zoldanur",
    loc: [638, 1463],
    pop: "",
    link: "#"
  },
  {
    label: "Helion",
    loc: [487, 1209],
    pop: "",
    link: "#"
  },
  {
    label: "Shadeven",
    loc: [647, 1193],
    pop: "",
    link: "#"
  },
  {
    label: "Feldun",
    loc: [777, 1189],
    pop: "",
    link: "#"
  },
  {
    label: "Lightcross",
    loc: [941, 1314],
    pop: "",
    link: "#"
  },
  // Laendil
  {
    label: "Merron",
    loc: [1046, 2668],
    pop: "",
    link: "#"
  },
  {
    label: "Anhang",
    loc: [989, 2456],
    pop: "",
    link: "#"
  },
  {
    label: "Windale",
    loc: [857, 2310],
    pop: "",
    link: "#"
  },
  {
    label: "Sheagrave",
    loc: [1028, 1771],
    pop: "",
    link: "#"
  },
  // Faeland
  {
    label: "Tornur",
    loc: [1676, 1213],
    pop: "",
    link: "#"
  },
  {
    label: "Brannek",
    loc: [1623, 1128],
    pop: "",
    link: "#"
  },
  {
    label: "Cliffside",
    loc: [1596, 1354],
    pop: "",
    link: "#"
  },
  {
    label: "Littlewing",
    loc: [1631, 1657],
    pop: "",
    link: "#"
  },
  {
    label: "Myrdon",
    loc: [1486, 1116],
    pop: "",
    link: "#"
  },
  {
    label: "Bozern",
    loc: [1393, 1042],
    pop: "",
    link: "#"
  },
  {
    label: "Demorn",
    loc: [1220, 1146],
    pop: "",
    link: "#"
  },
  {
    label: "Mirabar",
    loc: [1054, 1180],
    pop: "",
    link: "#"
  },
  {
    label: "Westorn",
    loc: [994, 1332],
    pop: "",
    link: "#"
  },
  {
    label: "Oberin",
    loc: [1289, 1268],
    pop: "",
    link: "#"
  },
  {
    label: "Lumens",
    loc: [1260, 1329],
    pop: "",
    link: "#"
  },
  {
    label: "Avan",
    loc: [1357, 1723],
    pop: "",
    link: "#"
  },
  {
    label: "Goldrun",
    loc: [1320, 2003],
    pop: "",
    link: "#"
  },
  // Kartaren
  {
    label: "Qomorn",
    loc: [2220, 1026],
    pop: "",
    link: "#"
  },
  {
    label: "Noomber",
    loc: [1956, 1218],
    pop: "",
    link: "#"
  },
  {
    label: "Jherdos",
    loc: [1926, 1491],
    pop: "",
    link: "#"
  },
  // Laentas
  {
    label: "Peaknur",
    loc: [2113, 549],
    pop: "",
    link: "#"
  },
  {
    label: "Moonborne",
    loc: [2096, 345],
    pop: "",
    link: "#"
  },
  {
    label: "Sunaras",
    loc: [1899, 397],
    pop: "",
    link: "#"
  },
  {
    label: "Brownstone",
    loc: [1891, 620],
    pop: "",
    link: "#"
  },
  {
    label: "Madrask",
    loc: [1826, 618],
    pop: "",
    link: "#"
  },
  {
    label: "Tahnur",
    loc: [2056, 755],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < villages_markers.length; i++) {
  marker = L.marker(villages_markers[i].loc, {
    icon: marker_icon_village
  }).addTo(villages_lg);
  // marker
  //   .bindPopup(
  //   villages_markers[i].pop +
  //     '<hr><a href="' +
  //     villages_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     villages_markers[i].label +
  //     "</a>"
  //   );
  marker.bindTooltip(villages_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
