let locations_lg = L.layerGroup();

let locations_markers = [
  {
    label: "Grotte di Balur",
    loc: [1100, 3328],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < locations_markers.length; i++) {
  marker = L.marker(locations_markers[i].loc, {
    icon: marker_icon_location
  }).addTo(locations_lg);
  marker.bindPopup;
  locations_markers[i].pop +
    '<hr><a href="' +
    locations_markers[i].link +
    '" target="_blank" rel="noopener">Leggi di più su ' +
    locations_markers[i].label +
    "</a>";
  marker.bindTooltip(locations_markers[i].label);
}
