let districts_lg = L.layerGroup();

let districts_markers = [
  {
    label: "Terre del Popolo",
    loc: [2132, 1524],
    pop: "",
    link: "#"
  },
  {
    label: "Le Due Primavere",
    loc: [916, 2264],
    pop: "",
    link: "#"
  },
  {
    label: "Distretto del Raccolto",
    loc: [744, 772],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < districts_markers.length; i++) {
  marker = L.marker(districts_markers[i].loc, {
    className: "district district-" + districts_markers[i].label,
    icon: marker_icon_district
  }).addTo(districts_lg);
  // marker.bindPopup(
  //   districts_markers[i].pop +
  //     '<hr><a href="' +
  //     districts_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     districts_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(districts_markers[i].label, {
    className: "district-tooltip",
    permanent: true,
    direction: "center"
  });
}
