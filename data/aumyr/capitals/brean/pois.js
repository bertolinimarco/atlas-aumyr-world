let pois_lg = L.layerGroup();

let pois_markers = [
  {
    label: "Torre Celeste",
    loc: [2040, 2092],
    pop: "",
    link: "#"
  },
  {
    label: "Forgia delle Meraviglie",
    loc: [2240, 1184],
    pop: "",
    link: "#"
  },
  {
    label: "Parco delle Pietre",
    loc: [1364, 2252],
    pop: "",
    link: "#"
  },
  {
    label: "La Chiave di Volta",
    loc: [1728, 1740],
    pop: "",
    link: "#"
  },
  {
    label: "Casa degli Eterni Sospiri",
    loc: [406, 1446],
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
