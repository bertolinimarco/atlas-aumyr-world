let swamps_lg = L.layerGroup();

let swamps_markers = [
  {
    label: "Paludi Moorson",
    loc: [2816, 2769],
    pop: "",
    link: "#"
  },
  {
    label: "Selvafiamma",
    loc: [1794, 3899],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < swamps_markers.length; i++) {
  marker = L.marker(swamps_markers[i].loc, {
    icon: marker_icon_swamp
  }).addTo(swamps_lg);
  // marker.bindPopup(
  //   swamps_markers[i].pop +
  //     '<hr><a href="' +
  //     swamps_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     swamps_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(swamps_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-swamps"
  });
}
