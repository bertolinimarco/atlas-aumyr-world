let keeps_lg = L.layerGroup();

let keeps_markers = [
  // Nordavind
  {
    label: "Torregrigia",
    loc: [2789, 796],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < keeps_markers.length; i++) {
  marker = L.marker(keeps_markers[i].loc, { icon: marker_icon_keep }).addTo(
    keeps_lg
  );
  // marker.bindPopup(
  //   keeps_markers[i].pop +
  //     '<hr><a href="' +
  //     keeps_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     keeps_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(keeps_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
