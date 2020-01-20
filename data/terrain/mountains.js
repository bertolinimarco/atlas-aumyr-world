let mountains_lg = L.layerGroup();

let mountains_markers = [
  {
    label: "Passo Skard",
    loc: [2591, 531.5],
    pop: "",
    link: "#"
  },
  {
    label: "Picchi del Gelo",
    loc: [2531, 647],
    pop: "",
    link: "#"
  },
  {
    label: "Fauci di Orne",
    loc: [2662, 1272],
    pop: "",
    link: "#"
  },
  {
    label: "Dorso del Serpente",
    loc: [2746, 2143],
    pop: "",
    link: "#"
  },
  {
    label: "Monti di Smeraldo",
    loc: [2950, 2167],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < mountains_markers.length; i++) {
  marker = L.marker(mountains_markers[i].loc, {
    icon: marker_icon_mountain
  }).addTo(mountains_lg);
  // marker.bindPopup(
  //   mountains_markers[i].pop +
  //     '<hr><a href="' +
  //     mountains_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     mountains_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(mountains_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-mountains"
  });
}
