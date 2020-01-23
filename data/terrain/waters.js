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
  },
  {
    label: "Stretto di Korush",
    loc: [570, 4152],
    pop: "",
    link: "#"
  },
  {
    label: "Costa Selvaggia",
    loc: [350, 4132],
    pop: "",
    link: "#"
  },
  {
    label: "Costa Solitaria",
    loc: [70, 4254],
    pop: "",
    link: "#"
  },
  {
    label: "Lago Thun",
    loc: [2608, 2691],
    pop: "",
    link: "#"
  },
  {
    label: "Lago Magmoor",
    loc: [2353, 2520],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume Ator",
    loc: [2481, 2161],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume Mor",
    loc: [2551, 2346],
    pop: "",
    link: "#"
  },
  {
    label: "Grande Fiume",
    loc: [2102, 2605],
    pop: "",
    link: "#"
  },
  {
    label: "Lago Meras",
    loc: [2200, 2004],
    pop: "",
    link: "#"
  },
  {
    label: "Mare della Notte",
    loc: [1192, 3046],
    pop: "",
    link: "#"
  },
  {
    label: "Baia del Drago",
    loc: [300, 3470],
    pop: "",
    link: "#"
  },
  {
    label: "Lagoprofondo",
    loc: [333, 3178],
    pop: "",
    link: "#"
  },
  {
    label: "Costa del Riposo",
    loc: [269, 2877],
    pop: "",
    link: "#"
  },
  {
    label: "Golfo della Visione",
    loc: [427, 2527],
    pop: "",
    link: "#"
  },
  {
    label: "Costa delle Sabbie",
    loc: [276, 1985],
    pop: "",
    link: "#"
  },
  {
    label: "Baia del Nulla",
    loc: [214, 1560],
    pop: "",
    link: "#"
  },
  {
    label: "Golfo di Viriana",
    loc: [500, 1418],
    pop: "",
    link: "#"
  },
  {
    label: "Costa Ombrosa",
    loc: [666, 1078],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume della Notte",
    loc: [1011, 1986],
    pop: "",
    link: "#"
  },
  {
    label: "Baia di Myrdon",
    loc: [1325, 1144],
    pop: "",
    link: "#"
  },
  {
    label: "Baia del Portale",
    loc: [929, 1213],
    pop: "",
    link: "#"
  },
  {
    label: "Costa Splendente",
    loc: [1826, 968],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume Hor",
    loc: [2022, 1022],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume Yator",
    loc: [2369, 1224],
    pop: "",
    link: "#"
  },
  {
    label: "Fiumi Denteblu",
    loc: [1860, 489],
    pop: "",
    link: "#"
  },
  {
    label: "Fiumerosso",
    loc: [1765, 707],
    pop: "",
    link: "#"
  },
  {
    label: "Fiume Moros",
    loc: [1993, 681],
    pop: "",
    link: "#"
  },
  {
    label: "Golfo di Acquescure",
    loc: [1675, 654],
    pop: "",
    link: "#"
  },
  {
    label: "Isole dell'Alba",
    loc: [2022, 290],
    pop: "",
    link: "#"
  },
  {
    label: "Isole di Exus",
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
