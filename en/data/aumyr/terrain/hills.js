let hills_lg = L.layerGroup();

let hills_markers = [
  {
    label: "Sandmarsh Hills",
    loc: [2561, 1830],
    pop: "",
    link: "#"
  },
  {
    label: "Samard Valley",
    loc: [2600, 3205],
    pop: "",
    link: "#"
  },
  {
    label: "Erthell Plains",
    loc: [2187, 4111],
    pop: "",
    link: "#"
  },
  {
    label: "Eldeen Plains",
    loc: [2514, 2502],
    pop: "",
    link: "#"
  },
  {
    label: "Horn Hills",
    loc: [1546, 1876],
    pop: "",
    link: "#"
  },
  {
    label: "Silence Hills",
    loc: [831, 3658],
    pop: "",
    link: "#"
  },
  {
    label: "Rest Plains",
    loc: [2056, 3457],
    pop: "",
    link: "#"
  },
  {
    label: "Thomulard Hills",
    loc: [2181, 2963],
    pop: "",
    link: "#"
  },
  {
    label: "Greymantle Hills",
    loc: [2284, 3264],
    pop: "",
    link: "#"
  },
  {
    label: "Hethan Plains",
    loc: [2095, 1277],
    pop: "",
    link: "#"
  },
  {
    label: "Windarn Hills",
    loc: [2097, 890],
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
