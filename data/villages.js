let villages_lg = L.layerGroup();

let villages_markers = [
  // Nordavind
  {
    label: "Treskor",
    loc: [2546, 444.5],
    pop: "",
    link: "#"
  },
  {
    label: "Odinport",
    loc: [2410.5, 790.5],
    pop: "",
    link: "#"
  },
  {
    label: "Laskhan",
    loc: [2719.5, 969],
    pop: "",
    link: "#"
  },
  {
    label: "Waybridge",
    loc: [2423, 1001],
    pop: "",
    link: "#"
  },
  {
    label: "Respirion",
    loc: [2654, 1123.5],
    pop: "",
    link: "#"
  },
  {
    label: "Lodoss",
    loc: [2886.5, 1094.5],
    pop: "",
    link: "#"
  },
  {
    label: "Urgul",
    loc: [2926, 1394],
    pop: "",
    link: "#"
  },
  {
    label: "Vast",
    loc: [2266, 817],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < villages_markers.length; i++) {
  marker = L.marker(villages_markers[i].loc, {
    icon: marker_icon_village
  }).addTo(villages_lg);
  marker
    .bindPopup
    // villages_markers[i].pop +
    //   '<hr><a href="' +
    //   villages_markers[i].link +
    //   '" target="_blank" rel="noopener">Leggi di più su ' +
    //   villages_markers[i].label +
    //   "</a>"
    ();
  marker.bindTooltip(villages_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
