let villages_lg = L.layerGroup();

let villages_markers = [
  {
    label: "Archbridge",
    loc: [1702.5, 3304],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < villages_markers.length; i++) {
  marker = L.marker(villages_markers[i].loc, { icon: marker_icon_village }).addTo(
    villages_lg
  );
  marker
    .bindPopup
    // villages_markers[i].pop +
    //   '<hr><a href="' +
    //   villages_markers[i].link +
    //   '" target="_blank" rel="noopener">Leggi di più su ' +
    //   villages_markers[i].label +
    //   "</a>"
    ();
  marker.bindTooltip(villages_markers[i].label);
}
