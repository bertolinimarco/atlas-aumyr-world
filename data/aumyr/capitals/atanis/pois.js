let pois_lg = L.layerGroup();

let pois_markers = [
  {
    label: "Isola del Crocevia",
    loc: [1148, 1568],
    pop: "",
    link: "#"
  },
  {
    label: "Grande Granaio",
    loc: [716, 1348],
    pop: "",
    link: "#"
  },
  {
    label: "Piazza del Sole",
    loc: [1612, 1092],
    pop: "",
    link: "#"
  },
  {
    label: "Colle del Tramonto",
    loc: [2260, 2204],
    pop: "",
    link: "#"
  },
  {
    label: "Casagrigia",
    loc: [1836, 1968],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < pois_markers.length; i++) {
  marker = L.marker(pois_markers[i].loc, {
    icon: marker_icon_poi
  }).addTo(pois_lg);
  // marker.bindPopup(
  //   pois_markers[i].pop +
  //     '<hr><a href="' +
  //     pois_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     pois_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(pois_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
