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
  }
];

for (let i = 0; i < locations_markers.length; i++) {
  marker = L.marker(locations_markers[i].loc, {
    icon: marker_icon_location
  }).addTo(locations_lg);
  marker.bindPopup;
  locations_markers[i].pop +
    '<hr><a href="' +
    locations_markers[i].link +
    '" target="_blank" rel="noopener">Leggi di più su ' +
    locations_markers[i].label +
    "</a>";
  marker.bindTooltip(locations_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
