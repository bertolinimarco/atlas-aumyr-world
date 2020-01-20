let waters_lg = L.layerGroup();

let waters_markers = [
  {
    label: "Acque Profonde",
    loc: [2557, 114],
    pop: "",
    link: "#"
  },
  {
    label: "Scogli di Yldur",
    loc: [2329, 571],
    pop: "",
    link: "#"
  },
  {
    label: "Golfo dei Giganti",
    loc: [2687, 608],
    pop: "",
    link: "#"
  },
  {
    label: "Denti del Drago",
    loc: [2805, 754],
    pop: "",
    link: "#"
  },
  {
    label: "Baia dei Lupi Solitari",
    loc: [2504, 1156],
    pop: "",
    link: "#"
  },
  {
    label: "Costa dei Diamanti",
    loc: [2996, 1720],
    pop: "",
    link: "#"
  },
  {
    label: "Baia del Wyrm",
    loc: [2999, 2338],
    pop: "",
    link: "#"
  },
  {
    label: "Golfo di Nordur",
    loc: [3100, 2829],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume Brosk",
    loc: [2735, 2809],
    pop: "",
    link: "#"
  },
  {
    label: "Lago Belit",
    loc: [2776, 2909],
    pop: "",
    link: "#"
  },
  {
    label: "Mare dei Ghiacci Perenni",
    loc: [2990, 4009],
    pop: "",
    link: "#"
  },
  {
    label: "Baia di Acquerosse",
    loc: [2310, 4578],
    pop: "",
    link: "#"
  },
  {
    label: "Mare del Tramonto",
    loc: [1782, 4604],
    pop: "",
    link: "#"
  },
  {
    label: "Isole dei Morti",
    loc: [1424, 3926],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < waters_markers.length; i++) {
  marker = L.marker(waters_markers[i].loc, {
    icon: marker_icon_water
  }).addTo(waters_lg);
  // marker.bindPopup(
  //   waters_markers[i].pop +
  //     '<hr><a href="' +
  //     waters_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     waters_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(waters_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-waters"
  });
}
