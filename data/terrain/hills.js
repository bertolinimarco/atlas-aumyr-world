let hills_lg = L.layerGroup();

let hills_markers = [
  {
    label: "Colline Sandmarsh",
    loc: [2561, 1830],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < hills_markers.length; i++) {
  marker = L.marker(hills_markers[i].loc, {
    icon: marker_icon_water
  }).addTo(hills_lg);
  // marker.bindPopup(
  //   hills_markers[i].pop +
  //     '<hr><a href="' +
  //     hills_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     hills_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(hills_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-hills"
  });
}
