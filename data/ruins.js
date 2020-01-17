let ruins_lg = L.layerGroup();

let ruins_markers = [
  {
    label: "Perdol",
    loc: [841, 4091],
    pop: "<strong>Perdol</strong> - Rovina Antica",
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
  marker.bindTooltip(ruins_markers[i].label);
}
