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
  },
  {
    label: "Picchi della Mente",
    loc: [2980, 2488],
    pop: "",
    link: "#"
  },
  {
    label: "Corni delle Tempeste",
    loc: [3000, 3404],
    pop: "",
    link: "#"
  },
  {
    label: "Montagne della Luna",
    loc: [2178, 4374],
    pop: "",
    link: "#"
  },
  {
    label: "Montagne Nebbiose",
    loc: [1690, 2232],
    pop: "",
    link: "#"
  },
  {
    label: "Passo dei Venti",
    loc: [2066, 3685],
    pop: "",
    link: "#"
  },
  {
    label: "Picchi di Kaphnur",
    loc: [588, 3960],
    pop: "",
    link: "#"
  },
  {
    label: "Sorgenti del Magma",
    loc: [405, 3817],
    pop: "",
    link: "#"
  },
  {
    label: "Monte Atros",
    loc: [697, 2722],
    pop: "",
    link: "#"
  },
  {
    label: "Montagne Dorso di Fiamma",
    loc: [772, 1990],
    pop: "",
    link: "#"
  },
  {
    label: "Cresta del Mattino",
    loc: [878, 1393],
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
