let regions_lg = L.layerGroup();

let regions_markers = [
  {
    label: "Nordavind",
    loc: [
      [2818, 380],
      [3060, 792],
      [3042, 1320],
      [2872, 1412],
      [2774, 1368],
      [2798, 1194],
      [2644, 1116],
      [2506, 1114],
      [2266, 938],
      [2148, 820],
      [2329, 571],
      [2276, 362],
      [2574, 286],
      [2734, 230]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Valdarn",
    loc: [
      [2506, 1114],
      [2496, 1246],
      [2268, 1450],
      [2290, 1558],
      [2572, 1930],
      [2662, 2166],
      [2820, 2454],
      [3180, 2298],
      [3198, 1996],
      [2945.725511187239, 1372.1014880633766],
      [2872, 1412],
      [2774, 1368],
      [2798, 1194],
      [2644, 1116]
    ],
    pop: "",
    link: "#"
  }
];

for (let i = 0; i < regions_markers.length; i++) {
  marker = L.polygon(regions_markers[i].loc, {
    className: "region region-" + regions_markers[i].label,
    icon: marker_icon_region
  }).addTo(regions_lg);
  // marker.bindPopup(
  //   regions_markers[i].pop +
  //     '<hr><a href="' +
  //     regions_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     regions_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(regions_markers[i].label, {
    className: "region-tooltip",
    permanent: true,
    direction: "center"
  });
}
