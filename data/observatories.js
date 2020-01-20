let observatories_lg = L.layerGroup();

let observatories_markers = [
  {
    label: "Osservatorio Gaulur",
    loc: [308, 2710],
    pop: "",
    link: "#"
  },
  {
    label: "Osservatorio Nembus",
    loc: [2827, 4615],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < observatories_markers.length; i++) {
  marker = L.marker(observatories_markers[i].loc, {
    icon: marker_icon_observatory
  }).addTo(observatories_lg);
  marker.bindPopup;
  observatories_markers[i].pop +
    '<hr><a href="' +
    observatories_markers[i].link +
    '" target="_blank" rel="noopener">Leggi di più su ' +
    observatories_markers[i].label +
    "</a>";
  marker.bindTooltip(observatories_markers[i].label);
}
