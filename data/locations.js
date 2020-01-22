let locations_lg = L.layerGroup();

let locations_markers = [
  // Nordavind
  {
    label: "Picco di Kharnat",
    loc: [2464, 630],
    pop: "",
    link: "#"
  },
  //Valdarn
  {
    label: "Pietre Parlanti",
    loc: [2723, 1533],
    pop: "",
    link: "#"
  },
  // Zeitan
  {
    label: "Morius",
    loc: [2940, 2534],
    pop: "",
    link: "#"
  },
  {
    label: "Valle dell'Eco",
    loc: [3007, 3299],
    pop: "",
    link: "#"
  },
  // Laangor
  {
    label: "Campoverde",
    loc: [2581, 3989],
    pop: "",
    link: "#"
  },
  {
    label: "Cava delle Pietre Rosse",
    loc: [2316, 4378],
    pop: "",
    link: "#"
  },
  // Inkari
  {
    label: "Ghar-Melon",
    loc: [159, 4075],
    pop: "",
    link: "#"
  },
  {
    label: "Bocca di Pietra",
    loc: [1097, 4602],
    pop: "",
    link: "#"
  },
  // Aumar
  {
    label: "Radura di Bel-Vor",
    loc: [2380, 1713],
    pop: "",
    link: "#"
  },
  {
    label: "Oldcross",
    loc: [2377, 2799],
    pop: "",
    link: "#"
  },
  // Kessen
  {
    label: "Fonte Lucente",
    loc: [2076, 2454],
    pop: "",
    link: "#"
  },
  {
    label: "Torre di Pietra",
    loc: [1792, 1782],
    pop: "",
    link: "#"
  },
  {
    label: "Uduel",
    loc: [1534, 2192],
    pop: "",
    link: "#"
  },
  {
    label: "Uvarth",
    loc: [1918, 2840],
    pop: "",
    link: "#"
  },
  // Dreamor
  {
    label: "Grotte di Balur",
    loc: [1029, 3260],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < locations_markers.length; i++) {
  marker = L.marker(locations_markers[i].loc, {
    icon: marker_icon_location
  }).addTo(locations_lg);
  marker.bindPopup(
    locations_markers[i].pop +
      '<hr><a href="' +
      locations_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      locations_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(locations_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
