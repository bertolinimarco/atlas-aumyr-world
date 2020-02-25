let swamps_lg = L.layerGroup();

let swamps_markers = [
  {
    label: "Moorson Swamps",
    loc: [2816, 2769],
    pop: "",
    link: "#"
  },
  {
    label: "Flamewoods",
    loc: [1794, 3899],
    pop: "",
    link: "#"
  },
  {
    label: "The Black Swamp",
    loc: [822, 4380],
    pop: "",
    link: "#"
  },
  {
    label: "Moor Marshes",
    loc: [387, 4289],
    pop: "",
    link: "#"
  },
  {
    label: "Weeping Marhses",
    loc: [1898, 2728],
    pop: "",
    link: "#"
  },
  {
    label: "Marshir Swamps",
    loc: [565, 2855],
    pop: "",
    link: "#"
  },
  {
    label: "Veiled Swamps",
    loc: [454, 2315],
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
