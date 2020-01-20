let ruins_lg = L.layerGroup();

let ruins_markers = [
  {
    label: "Valimar",
    loc: [2343, 246.5],
    pop: "<strong>Valimar</strong> - Rovina Antica",
    link: "#"
  },
  {
    label: "Zimara",
    loc: [2993, 1990],
    pop: "<strong>Zimara</strong> - Rovina Antica",
    link: "#"
  }
];

for (let i = 0; i < ruins_markers.length; i++) {
  marker = L.marker(ruins_markers[i].loc, {
    icon: marker_icon_ruin
  }).addTo(ruins_lg);
  marker.bindPopup;
  ruins_markers[i].pop +
    '<hr><a href="' +
    ruins_markers[i].link +
    '" target="_blank" rel="noopener">Leggi di più su ' +
    ruins_markers[i].label +
    "</a>";
  marker.bindTooltip(ruins_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
