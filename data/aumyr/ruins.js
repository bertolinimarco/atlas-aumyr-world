let ruins_lg = L.layerGroup();

let ruins_markers = [
  {
    label: "Valimar",
    loc: [2343, 246.5],
    pop: "",
    link: "#"
  },
  {
    label: "Zimara",
    loc: [2993, 1990],
    pop: "",
    link: "#"
  },
  {
    label: "Gherzul",
    loc: [1705, 4032],
    pop: "",
    link: "#"
  },
  {
    label: "Xartar",
    loc: [2124, 1872],
    pop: "",
    link: "#"
  },
  {
    label: "Perdol",
    loc: [764, 4024],
    pop: "",
    link: "#"
  },
  {
    label: "Lheng",
    loc: [111, 3467],
    pop: "",
    link: "#"
  },
  {
    label: "Kandros",
    loc: [1822, 2363],
    pop: "",
    link: "#"
  },
  {
    label: "Lornat",
    loc: [2446, 3309],
    pop: "",
    link: "#"
  },
  {
    label: "Irem",
    loc: [304, 1712],
    pop: "",
    link: "#"
  },
  {
    label: "Olovar",
    loc: [498, 988],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < ruins_markers.length; i++) {
  marker = L.marker(ruins_markers[i].loc, {
    icon: marker_icon_ruin
  }).addTo(ruins_lg);
  marker.bindPopup(
    ruins_markers[i].pop +
      '<hr><a href="' +
      ruins_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      ruins_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(ruins_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
