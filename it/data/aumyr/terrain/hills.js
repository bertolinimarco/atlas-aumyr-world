let hills_lg = L.layerGroup();

let hills_markers = [
  {
    label: "Colline Sandmarsh",
    loc: [2561, 1830],
    pop: "",
    link: "#"
  },
  {
    label: "Valle di Samard",
    loc: [2600, 3205],
    pop: "",
    link: "#"
  },
  {
    label: "Piane di Erthell",
    loc: [2187, 4111],
    pop: "",
    link: "#"
  },
  {
    label: "Pianure di Eldeen",
    loc: [2514, 2502],
    pop: "",
    link: "#"
  },
  {
    label: "Colline del Corno",
    loc: [1546, 1876],
    pop: "",
    link: "#"
  },
  {
    label: "Colline del Silenzio",
    loc: [831, 3658],
    pop: "",
    link: "#"
  },
  {
    label: "Pianure del Riposo",
    loc: [2056, 3457],
    pop: "",
    link: "#"
  },
  {
    label: "Colline di Thomulard",
    loc: [2181, 2963],
    pop: "",
    link: "#"
  },
  {
    label: "Colline Mantogrigio",
    loc: [2284, 3264],
    pop: "",
    link: "#"
  },
  {
    label: "Pianure di Hethan",
    loc: [2095, 1277],
    pop: "",
    link: "#"
  },
  {
    label: "Colline Windarn",
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
