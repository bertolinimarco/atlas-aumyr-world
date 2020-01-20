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