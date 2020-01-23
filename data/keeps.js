let keeps_lg = L.layerGroup();

let keeps_markers = [
  // Nordavind
  {
    label: "Torregrigia",
    loc: [2712, 738],
    pop: "",
    link: "#"
  },
  // Valdarn
  {
    label: "Faux Edge",
    loc: [3142, 2412],
    pop: "",
    link: "#"
  },
  // Zeitan
  {
    label: "Cittadella del Vuoto",
    loc: [2679, 3335],
    pop: "",
    link: "#"
  },
  // Laangor
  {
    label: "Castello Darkwind",
    loc: [2765, 3799],
    pop: "",
    link: "#"
  },
  {
    label: "Angor",
    loc: [3156, 4422],
    pop: "",
    link: "#"
  },
  // Jhert
  {
    label: "Sale del Tramonto",
    loc: [2154, 3924],
    pop: "",
    link: "#"
  },
  {
    label: "Sale dei Ricordi",
    loc: [527, 4430],
    pop: "",
    link: "#"
  },
  // Kessen
  {
    label: "Felmalein",
    loc: [1351, 2306],
    pop: "",
    link: "#"
  },
  // Dreamor
  {
    label: "Amakur",
    loc: [1432, 2822],
    pop: "",
    link: "#"
  },
  {
    label: "Torre Solitaria",
    loc: [776, 3593],
    pop: "",
    link: "#"
  },
  // Gwaldur
  {
    label: "Torre di Morganis",
    loc: [569, 4075],
    pop: "",
    link: "#"
  },
  {
    label: "Fortezza di Oduur",
    loc: [455, 2767],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < keeps_markers.length; i++) {
  marker = L.marker(keeps_markers[i].loc, { icon: marker_icon_keep }).addTo(
    keeps_lg
  );
  // marker.bindPopup(
  //   keeps_markers[i].pop +
  //     '<hr><a href="' +
  //     keeps_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     keeps_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(keeps_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
