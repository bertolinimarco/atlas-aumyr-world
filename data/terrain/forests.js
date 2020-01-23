let forests_lg = L.layerGroup();

let forests_markers = [
  {
    label: "Foresta di Beloras",
    loc: [2582, 3834],
    pop: "",
    link: "#"
  },
  {
    label: "Giungle del Cacciatore",
    loc: [1304, 4660],
    pop: "",
    link: "#"
  },
  {
    label: "Bosco della Prova",
    loc: [1035, 4270],
    pop: "",
    link: "#"
  },
  {
    label: "Giungle di Mardok",
    loc: [320, 4550],
    pop: "",
    link: "#"
  },
  {
    label: "Foresta della Voce",
    loc: [2146, 1759],
    pop: "",
    link: "#"
  },
  {
    label: "Valle dei Tre Fiumi",
    loc: [1584, 2476],
    pop: "",
    link: "#"
  },
  {
    label: "Boscoscuro",
    loc: [1856, 3233],
    pop: "",
    link: "#"
  },
  {
    label: "Bosco della Moneta",
    loc: [898, 2979],
    pop: "",
    link: "#"
  },
  {
    label: "Foresta Ombrosa",
    loc: [643, 3291],
    pop: "",
    link: "#"
  },
  {
    label: "Foresta di Ebor",
    loc: [152, 3145],
    pop: "",
    link: "#"
  },
  {
    label: "Selva Tagliente",
    loc: [821, 1090],
    pop: "",
    link: "#"
  },
  {
    label: "Foresta di Nayalis",
    loc: [942, 2087],
    pop: "",
    link: "#"
  },
  {
    label: "Bosco delle Pietre",
    loc: [2325, 1275.5],
    pop: "",
    link: "#"
  },
  {
    label: "Foresta Dorata",
    loc: [1975, 770],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < forests_markers.length; i++) {
  marker = L.marker(forests_markers[i].loc, {
    icon: marker_icon_forest
  }).addTo(forests_lg);
  // marker.bindPopup(
  //   forests_markers[i].pop +
  //     '<hr><a href="' +
  //     forests_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     forests_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(forests_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-forests"
  });
}
