let forests_lg = L.layerGroup();

let forests_markers = [
  {
    label: "Beloras Forest",
    loc: [2582, 3834],
    pop: "",
    link: "#"
  },
  {
    label: "Hunter Jungles",
    loc: [1304, 4660],
    pop: "",
    link: "#"
  },
  {
    label: "Wood of Trials",
    loc: [1035, 4270],
    pop: "",
    link: "#"
  },
  {
    label: "Mardok Jungles",
    loc: [320, 4550],
    pop: "",
    link: "#"
  },
  {
    label: "Forest of the Voice",
    loc: [2146, 1759],
    pop: "",
    link: "#"
  },
  {
    label: "Three River's Valley",
    loc: [1584, 2476],
    pop: "",
    link: "#"
  },
  {
    label: "Darkwood",
    loc: [1856, 3233],
    pop: "",
    link: "#"
  },
  {
    label: "Moneywoods",
    loc: [898, 2979],
    pop: "",
    link: "#"
  },
  {
    label: "Shadow Forest",
    loc: [643, 3291],
    pop: "",
    link: "#"
  },
  {
    label: "Ebor Forest",
    loc: [152, 3145],
    pop: "",
    link: "#"
  },
  {
    label: "Sharp Woods",
    loc: [821, 1090],
    pop: "",
    link: "#"
  },
  {
    label: "Nayalis Forest",
    loc: [942, 2087],
    pop: "",
    link: "#"
  },
  {
    label: "Stone Forest",
    loc: [2325, 1275.5],
    pop: "",
    link: "#"
  },
  {
    label: "Golden Forest",
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
