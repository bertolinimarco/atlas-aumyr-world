let cities_lg = L.layerGroup();

let cities_markers = [
  // Nordavind
  {
    label: "Hilden",
    loc: [2473.5, 457.5],
    pop: "",
    link: "#"
  },
  {
    label: "Endur",
    loc: [2328.5, 400.5],
    pop: "",
    link: "#"
  },
  {
    label: "Icegate",
    loc: [2510.5, 863.5],
    pop: "",
    link: "#"
  },
  {
    label: "Meremar",
    loc: [2881, 1171.5],
    pop: "",
    link: "#"
  },
  // Valdarn
  {
    label: "Daxxos",
    loc: [2678, 1331],
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
