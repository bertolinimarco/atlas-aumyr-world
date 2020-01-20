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
