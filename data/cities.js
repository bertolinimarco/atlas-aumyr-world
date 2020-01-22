let cities_lg = L.layerGroup();

let cities_markers = [
  // Nordavind
  {
    label: "Hilden",
    loc: [2473.5, 457.5],
    pop: "",
    link: "#"
  },
  {
    label: "Endur",
    loc: [2328.5, 400.5],
    pop: "",
    link: "#"
  },
  {
    label: "Icegate",
    loc: [2510.5, 863.5],
    pop: "",
    link: "#"
  },
  {
    label: "Meremar",
    loc: [2881, 1171.5],
    pop: "",
    link: "#"
  },
  // Valdarn
  {
    label: "Daxxos",
    loc: [2678, 1331],
    pop: "",
    link: "#"
  },
  // Zeitan
  {
    label: "Zaldar",
    loc: [2924, 2645],
    pop: "",
    link: "#"
  },
  {
    label: "Fel-Doras",
    loc: [3029, 3187],
    pop: "",
    link: "#"
  },
  {
    label: "Innerdale",
    loc: [2737, 3537],
    pop: "",
    link: "#"
  },
  // Laangor
  {
    label: "Hundres",
    loc: [2457, 3814],
    pop: "",
    link: "#"
  },
  {
    label: "Trailstone",
    loc: [2461, 4245],
    pop: "",
    link: "#"
  },
  {
    label: "Ariadne",
    loc: [2702.5, 4457],
    pop: "",
    link: "#"
  },
  {
    label: "Sailwind",
    loc: [2538, 4666],
    pop: "",
    link: "#"
  },
  {
    label: "Thoras",
    loc: [2254, 4532],
    pop: "",
    link: "#"
  },
  {
    label: "Raven's Cove",
    loc: [2054, 4389],
    pop: "",
    link: "#"
  },
  // Jhert
  {
    label: "Pindar",
    loc: [1867, 3901],
    pop: "",
    link: "#"
  },
  {
    label: "Molos",
    loc: [1480, 4049],
    pop: "",
    link: "#"
  },
  // Inkari
  {
    label: "Jundarai",
    loc: [1274, 4254],
    pop: "",
    link: "#"
  },
  {
    label: "Radaris",
    loc: [977, 4390],
    pop: "",
    link: "#"
  },
  {
    label: "Geldast",
    loc: [688, 4370],
    pop: "",
    link: "#"
  },
  {
    label: "Heldar",
    loc: [599, 4324],
    pop: "",
    link: "#"
  },
  {
    label: "Nimirdaz",
    loc: [279, 4270],
    pop: "",
    link: "#"
  },
  {
    label: "Hang-Dar",
    loc: [186, 3969],
    pop: "",
    link: "#"
  },
  // Aumar
  {
    label: "Gamaran",
    loc: [2565, 2825],
    pop: "",
    link: "#"
  },
  {
    label: "Lakeside",
    loc: [2648, 2657],
    pop: "",
    link: "#"
  },
  {
    label: "Lamora",
    loc: [2164, 2545],
    pop: "",
    link: "#"
  },
  {
    label: "Erth",
    loc: [2686, 2304],
    pop: "",
    link: "#"
  },
  // Kessen
  {
    label: "Opur",
    loc: [1600, 2658],
    pop: "",
    link: "#"
  },
  // Dreamor
  {
    label: "Qadris",
    loc: [1790, 3640],
    pop: "",
    link: "#"
  },
  {
    label: "Morun",
    loc: [1343, 3419],
    pop: "",
    link: "#"
  },
  {
    label: "Greenriver",
    loc: [1336, 3829],
    pop: "",
    link: "#"
  },
  {
    label: "Kinderun",
    loc: [1140, 3338],
    pop: "",
    link: "#"
  },
  {
    label: "Lonestar",
    loc: [748, 2965],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < cities_markers.length; i++) {
  marker = L.marker(cities_markers[i].loc, { icon: marker_icon_city }).addTo(
    cities_lg
  );
  // marker.bindPopup(
  //   cities_markers[i].pop +
  //     '<hr><a href="' +
  //     cities_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     cities_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(cities_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
