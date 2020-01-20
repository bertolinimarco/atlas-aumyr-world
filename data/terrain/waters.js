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
