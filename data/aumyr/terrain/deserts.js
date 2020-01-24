let deserts_lg = L.layerGroup();

let deserts_markers = [
  {
    label: "Distese del Vuoto",
    loc: [524, 1839],
    pop: "",
    link: "#"
  },
  {
    label: "Ultima Speranza",
    loc: [401, 1664],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < deserts_markers.length; i++) {
  marker = L.marker(deserts_markers[i].loc, {
    icon: marker_icon_desert
  }).addTo(deserts_lg);
  // marker.bindPopup(
  //   deserts_markers[i].pop +
  //     '<hr><a href="' +
  //     deserts_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     deserts_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(deserts_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-deserts"
  });
}
