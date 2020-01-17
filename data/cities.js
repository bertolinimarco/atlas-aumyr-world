let cities_lg = L.layerGroup();

let cities_markers = [
  // Nordavind
  {
    label: "Hilden",
    loc: [2544, 530],
    pop: "",
    link: "#"
  },
  {
    label: "Endur",
    loc: [2400, 473],
    pop: "",
    link: "#"
  },
  {
    label: "Icegate",
    loc: [2561, 942],
    pop: "",
    link: "#"
  },
  {
    label: "Meremar",
    loc: [2952, 1239],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < cities_markers.length; i++) {
  marker = L.marker(cities_markers[i].loc, { icon: marker_icon_city }).addTo(
    cities_lg
  );
  // marker.bindPopup(
  //   cities_markers[i].pop +
  //     '<hr><a href="' +
  //     cities_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     cities_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(cities_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
