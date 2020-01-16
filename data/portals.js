let portals_lg = L.layerGroup();

let portals_markers = [
  {
    label: "Portale di Fivestar",
    loc: [1618, 3120],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < portals_markers.length; i++) {
  marker = L.marker(portals_markers[i].loc, {
    icon: marker_icon_location
  }).addTo(portals_lg);
  marker.bindPopup;
  portals_markers[i].pop +
    '<hr><a href="' +
    portals_markers[i].link +
    '" target="_blank" rel="noopener">Leggi di più su ' +
    portals_markers[i].label +
    "</a>";
  marker.bindTooltip(portals_markers[i].label);
}
