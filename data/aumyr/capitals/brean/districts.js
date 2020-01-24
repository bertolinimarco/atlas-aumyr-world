let districts_lg = L.layerGroup();

let districts_markers = [
  {
    label: "Distretto degli Intagliatori",
    loc: [1880, 1144],
    pop: "",
    link: "#"
  },
  {
    label: "Lungo Cammino",
    loc: [1136, 1356],
    pop: "",
    link: "#"
  },
  {
    label: "Quartiere dei Cercatori",
    loc: [996, 1956],
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
