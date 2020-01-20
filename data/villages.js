let villages_lg = L.layerGroup();

let villages_markers = [
  // Nordavind
  {
    label: "Treskor",
    loc: [2474, 372],
    pop: "",
    link: "#"
  },
  {
    label: "Odinport",
    loc: [2342, 724],
    pop: "",
    link: "#"
  },
  {
    label: "Laskhan",
    loc: [2648, 892],
    pop: "",
    link: "#"
  },
  {
    label: "Waybridge",
    loc: [2358, 928],
    pop: "",
    link: "#"
  },
  {
    label: "Respirion",
    loc: [2578, 1053],
    pop: "",
    link: "#"
  },
  {
    label: "Lodoss",
    loc: [2831, 1020],
    pop: "",
    link: "#"
  },
  {
    label: "Urgul",
    loc: [2855, 1321],
    pop: "",
    link: "#"
  },
  {
    label: "Vast",
    loc: [2204, 746],
    pop: "",
    link: "#"
  },
  // Valdarn
  {
    label: "Yrodsun",
    loc: [2473, 1406.5],
    pop: "",
    link: "#"
  },
  {
    label: "Kemerin",
    loc: [2647, 1449],
    pop: "",
    link: "#"
  },
  {
    label: "Stonebeard",
    loc: [2675, 1684.5],
    pop: "",
    link: "#"
  },
  {
    label: "Cynosur",
    loc: [2820.5, 1560],
    pop: "",
    link: "#"
  },
  {
    label: "Farpoint",
    loc: [2949, 1807],
    pop: "",
    link: "#"
  },
  {
    label: "Algese",
    loc: [2887, 2043],
    pop: "",
    link: "#"
  },
  {
    label: "Namzar",
    loc: [2710, 2074],
    pop: "",
    link: "#"
  },
  {
    label: "Mur-Dalmaz",
    loc: [2786, 2346],
    pop: "",
    link: "#"
  },
  // Zeitan
  {
    label: "Aaris",
    loc: [2780, 2614],
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
  }
];

for (let i = 0; i < villages_markers.length; i++) {
  marker = L.marker(villages_markers[i].loc, {
    icon: marker_icon_village
  }).addTo(villages_lg);
  // marker
  //   .bindPopup
  //   villages_markers[i].pop +
  //     '<hr><a href="' +
  //     villages_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     villages_markers[i].label +
  //     "</a>"
  //   ();
  marker.bindTooltip(villages_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
