let portals_lg = L.layerGroup();

let portals_markers = [
  {
    label: "Portale di Fivestar",
    loc: [1543, 3045],
    pop: "",
    link: "#"
  },
  {
    label: "Portale di Highpine",
    loc: [2747, 3892],
    pop: "",
    link: "#"
  },
  {
    label: "Portale di Geldast",
    loc: [731, 4393],
    pop: "",
    link: "#"
  }
  // {
  //   label: "Portale di Damodar",
  //   loc: [731, 4393],
  //   pop: "",
  //   link: "#"
  // },
  // {
  //   label: "Portale di Westorn",
  //   loc: [731, 4393],
  //   pop: "",
  //   link: "#"
  // }
];

for (let i = 0; i < portals_markers.length; i++) {
  marker = L.marker(portals_markers[i].loc, {
    icon: marker_icon_portal
  }).addTo(portals_lg);
  // marker.bindPopup(
  // portals_markers[i].pop +
  //   '<hr><a href="' +
  //   portals_markers[i].link +
  //   '" target="_blank" rel="noopener">Leggi di più su ' +
  //   portals_markers[i].label +
  //   "</a>");
  marker.bindTooltip(portals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
