let mountains_lg = L.layerGroup();

let mountains_markers = [
  {
    label: "Skard Pass",
    loc: [2591, 531.5],
    pop: "",
    link: "#"
  },
  {
    label: "Frost Peaks",
    loc: [2531, 647],
    pop: "",
    link: "#"
  },
  {
    label: "Orne Jaws",
    loc: [2662, 1272],
    pop: "",
    link: "#"
  },
  {
    label: "Serpent Back Mountains",
    loc: [2746, 2143],
    pop: "",
    link: "#"
  },
  {
    label: "Emerald Mountains",
    loc: [2950, 2167],
    pop: "",
    link: "#"
  },
  {
    label: "Mind Peaks",
    loc: [2980, 2488],
    pop: "",
    link: "#"
  },
  {
    label: "Tempest Horns",
    loc: [3000, 3404],
    pop: "",
    link: "#"
  },
  {
    label: "Moon Mountains",
    loc: [2178, 4374],
    pop: "",
    link: "#"
  },
  {
    label: "Cloud Mountains",
    loc: [1690, 2232],
    pop: "",
    link: "#"
  },
  {
    label: "Wind Pass",
    loc: [2066, 3685],
    pop: "",
    link: "#"
  },
  {
    label: "Kaphnur Peaks",
    loc: [588, 3960],
    pop: "",
    link: "#"
  },
  {
    label: "Magma Sources",
    loc: [405, 3817],
    pop: "",
    link: "#"
  },
  {
    label: "Atros Peak",
    loc: [697, 2722],
    pop: "",
    link: "#"
  },
  {
    label: "Flameback Mountains",
    loc: [772, 1990],
    pop: "",
    link: "#"
  },
  {
    label: "The Morning Crest",
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
