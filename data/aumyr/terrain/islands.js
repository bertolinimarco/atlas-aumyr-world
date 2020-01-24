let islands_lg = L.layerGroup();

let islands_markers = [
  {
    label: "Penisola di Voros",
    loc: [2734, 1013],
    pop: "",
    link: "#"
  },
  {
    label: "Bariaur",
    loc: [2894, 1524],
    pop: "",
    link: "#"
  },
  {
    label: "Dusken",
    loc: [2018.5, 191.5],
    pop: "",
    link: "#"
  },
  {
    label: "Sunwatch",
    loc: [2138, 316.5],
    pop: "",
    link: "#"
  },
  {
    label: "Skyreel",
    loc: [2145, 511],
    pop: "",
    link: "#"
  },
  {
    label: "Lightbringer",
    loc: [1937.5, 364.5],
    pop: "",
    link: "#"
  },
  {
    label: "Deadmor",
    loc: [1490, 3897],
    pop: "",
    link: "#"
  },
  {
    label: "Etheris",
    loc: [1366, 3992],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < islands_markers.length; i++) {
  marker = L.marker(islands_markers[i].loc, {
    icon: marker_icon_water
  }).addTo(islands_lg);
  // marker.bindPopup(
  //   islands_markers[i].pop +
  //     '<hr><a href="' +
  //     islands_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     islands_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(islands_markers[i].label, {
    permanent: true,
    direction: "center",
    className: "label-islands"
  });
}
