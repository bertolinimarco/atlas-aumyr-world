let regions_lg = L.layerGroup();

let regions_markers = [
  {
    label: "Nordavind",
    loc: [
      [3000, 710],
      [2924, 228],
      [2614, 322],
      [2390, 420],
      [2300, 458],
      [2386, 634],
      [2208, 822],
      [2428, 1100],
      [2722, 1194],
      [2884, 1252],
      [2866, 1454],
      [3116, 1452],
      [3096, 1028]
    ],
    pop: "asdasd",
    link: "#"
  }
];

for (let i = 0; i < regions_markers.length; i++) {
  marker = L.polygon(regions_markers[i].loc, {
    className: "region region-" + regions_markers[i].label,
    icon: marker_icon_region
  }).addTo(regions_lg);
  marker.bindPopup(
    regions_markers[i].pop +
      '<hr><a href="' +
      regions_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      regions_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(regions_markers[i].label, {
    className: "region-tooltip",
    permanent: true,
    direction: "center"
  });
}
