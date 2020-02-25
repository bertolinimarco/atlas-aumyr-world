let waters_lg = L.layerGroup();

let waters_markers = [
  {
    label: "Deep Waters",
    loc: [2557, 114],
    pop: "",
    link: "#"
  },
  {
    label: "Yldur Cliffs",
    loc: [2329, 571],
    pop: "",
    link: "#"
  },
  {
    label: "Giants Gulf",
    loc: [2687, 608],
    pop: "",
    link: "#"
  },
  {
    label: "Dragons Teeth",
    loc: [2805, 754],
    pop: "",
    link: "#"
  },
  {
    label: "Lone Wolf Bay",
    loc: [2504, 1156],
    pop: "",
    link: "#"
  },
  {
    label: "Diamond Coast",
    loc: [2996, 1720],
    pop: "",
    link: "#"
  },
  {
    label: "Wyrm Bay",
    loc: [2999, 2338],
    pop: "",
    link: "#"
  },
  {
    label: "Nordur Gulf",
    loc: [3100, 2829],
    pop: "",
    link: "#"
  },
  {
    label: "Brosk River",
    loc: [2735, 2809],
    pop: "",
    link: "#"
  },
  {
    label: "Lake Belit",
    loc: [2776, 2909],
    pop: "",
    link: "#"
  },
  {
    label: "Frozen Ice Sea",
    loc: [2990, 4009],
    pop: "",
    link: "#"
  },
  {
    label: "Redwaters Bay",
    loc: [2310, 4578],
    pop: "",
    link: "#"
  },
  {
    label: "Sunset Sea",
    loc: [1782, 4604],
    pop: "",
    link: "#"
  },
  {
    label: "Dead Islands",
    loc: [1424, 3926],
    pop: "",
    link: "#"
  },
  {
    label: "Strait of Korush",
    loc: [570, 4152],
    pop: "",
    link: "#"
  },
  {
    label: "Savage Coast",
    loc: [350, 4132],
    pop: "",
    link: "#"
  },
  {
    label: "Solitary Coast",
    loc: [70, 4254],
    pop: "",
    link: "#"
  },
  {
    label: "Lake Thun",
    loc: [2608, 2691],
    pop: "",
    link: "#"
  },
  {
    label: "Lake Magmoor",
    loc: [2353, 2520],
    pop: "",
    link: "#"
  },
  {
    label: "Ator River",
    loc: [2481, 2161],
    pop: "",
    link: "#"
  },
  {
    label: "Mor River",
    loc: [2551, 2346],
    pop: "",
    link: "#"
  },
  {
    label: "Great River",
    loc: [2102, 2605],
    pop: "",
    link: "#"
  },
  {
    label: "Lake Meras",
    loc: [2200, 2004],
    pop: "",
    link: "#"
  },
  {
    label: "Night Sea",
    loc: [1192, 3046],
    pop: "",
    link: "#"
  },
  {
    label: "Dragon Bay",
    loc: [300, 3470],
    pop: "",
    link: "#"
  },
  {
    label: "Deeplake",
    loc: [333, 3178],
    pop: "",
    link: "#"
  },
  {
    label: "Rest Coast",
    loc: [269, 2877],
    pop: "",
    link: "#"
  },
  {
    label: "Gulf of Visions",
    loc: [427, 2527],
    pop: "",
    link: "#"
  },
  {
    label: "Sands Coast",
    loc: [276, 1985],
    pop: "",
    link: "#"
  },
  {
    label: "Bay of Nothingness",
    loc: [214, 1560],
    pop: "",
    link: "#"
  },
  {
    label: "Gulf of Viriana",
    loc: [500, 1418],
    pop: "",
    link: "#"
  },
  {
    label: "Shadow Coast",
    loc: [666, 1078],
    pop: "",
    link: "#"
  },
  {
    label: "Night River",
    loc: [1011, 1986],
    pop: "",
    link: "#"
  },
  {
    label: "Myrdon Bay",
    loc: [1325, 1144],
    pop: "",
    link: "#"
  },
  {
    label: "Portal Bay",
    loc: [929, 1213],
    pop: "",
    link: "#"
  },
  {
    label: "Shining Coast",
    loc: [1826, 968],
    pop: "",
    link: "#"
  },
  {
    label: "Hor River",
    loc: [2022, 1022],
    pop: "",
    link: "#"
  },
  {
    label: "Yator River",
    loc: [2369, 1224],
    pop: "",
    link: "#"
  },
  {
    label: "Bluetooth Rivers",
    loc: [1860, 489],
    pop: "",
    link: "#"
  },
  {
    label: "Redriver",
    loc: [1765, 707],
    pop: "",
    link: "#"
  },
  {
    label: "Moros River",
    loc: [1993, 681],
    pop: "",
    link: "#"
  },
  {
    label: "Gulf of Darkwaters",
    loc: [1675, 654],
    pop: "",
    link: "#"
  },
  {
    label: "Sunrise Islands",
    loc: [2022, 290],
    pop: "",
    link: "#"
  },
  {
    label: "Exus Islands",
    loc: [1219, 259],
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
