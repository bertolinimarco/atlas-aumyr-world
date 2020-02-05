let roads_lg = L.layerGroup();

let roads_markers = [
  {
    label: "Via delle Pietre",
    loc: [2570, 1634],
    pop: "",
    link: "#"
  },
  {
    label: "Via delle Carovane",
    loc: [2336, 3848],
    pop: "",
    link: "#"
  },
  {
    label: "Via dell'Ovest",
    loc: [2124, 2314],
    pop: "",
    link: "#"
  },
  {
    label: "Strada Lunga",
    loc: [1886, 1696],
    pop: "",
    link: "#"
  },
  {
    label: "Cammino dei Cinque",
    loc: [1712, 3492.5],
    pop: "",
    link: "#"
  },
  {
    label: "Ponte Orros",
    loc: [2021, 2639.5],
    pop: "",
    link: "#"
  },
  {
    label: "Strada del Sud",
    loc: [608, 2572],
    pop: "",
    link: "#"
  },
  {
    label: "Via della Sete",
    loc: [659, 1877],
    pop: "",
    link: "#"
  },
  {
    label: "Via Dorata",
    loc: [1276, 1920],
    pop: "",
    link: "#"
  },
  {
    label: "Ponte Spezzato",
    loc: [1814, 524],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < roads_markers.length; i++) {
  marker = L.marker(roads_markers[i].loc, { icon: marker_icon_roads }).addTo(
    roads_lg
  );
  // marker.bindPopup(
  //   roads_markers[i].pop +
  //     '<hr><a href="' +
  //     roads_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     roads_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(roads_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-roads"
  });
}
