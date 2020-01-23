let capitals_lg = L.layerGroup();

let capitals_markers = [
  {
    label: "Dunmere",
    loc: [2687, 475],
    pop:
      "<strong>Dunmere</strong> è un grosso insediamento di case dal tetto spiovente e appuntito, un’oasi di civiltà nelle montagne selvagge. Situata in una gola naturale che la protegge dalle incursioni della maggior parte delle creature delle montagne vicine, a Dunmere la gente si concentra a coltivare la terra, ma anche a combattere in arene pubbliche per dimostrare il proprio valore, commerciare o semplicemente bere idromele.",
    link: "https://www.aumyr.world/geography/nordavind.html#dunmere"
  },
  {
    label: "Brean",
    loc: [2856.5, 2122],
    pop: "",
    link: "#"
  },
  {
    label: "Nordur",
    loc: [2906, 2812],
    pop: "",
    link: "#"
  },
  {
    label: "Highpine",
    loc: [2719, 3937],
    pop: "",
    link: "#"
  },
  {
    label: "Silverstone",
    loc: [1863, 4333],
    pop: "",
    link: "#"
  },
  {
    label: "Khoralis",
    loc: [1254, 4465],
    pop: "",
    link: "#"
  },
  {
    label: "Meentum",
    loc: [629, 4566],
    pop: "",
    link: "#"
  },
  {
    label: "Atanis",
    loc: [2462, 2254],
    pop: "",
    link: "#"
  },
  {
    label: "Feldris",
    loc: [1375, 2497],
    pop: "",
    link: "#"
  },
  {
    label: "Fivestar",
    loc: [1498, 3070],
    pop: "",
    link: "#"
  },
  {
    label: "Veloras",
    loc: [2362, 3425],
    pop: "",
    link: "#"
  },
  {
    label: "Kaphnur",
    loc: [464, 3883],
    pop: "",
    link: "#"
  },
  {
    label: "Pendor",
    loc: [687, 2308],
    pop: "",
    link: "#"
  },
  {
    label: "Viriana",
    loc: [467, 1246],
    pop: "",
    link: "#"
  },
  {
    label: "Nayalis",
    loc: [921, 2219],
    pop: "",
    link: "#"
  },
  {
    label: "Elerin",
    loc: [1555, 1087],
    pop: "",
    link: "#"
  },
  {
    label: "Kartar",
    loc: [2259, 1126],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < capitals_markers.length; i++) {
  marker = L.marker(capitals_markers[i].loc, {
    icon: marker_icon_capital
  }).addTo(capitals_lg);
  marker.bindPopup(
    capitals_markers[i].pop +
      '<hr><a href="' +
      capitals_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      capitals_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(capitals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
