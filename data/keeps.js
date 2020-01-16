let keeps_lg = L.layerGroup();

let keeps_markers = [
  {
    label: "Amakur",
    loc: [1507, 2896],
    pop:
      "L’antica fortezza di Amakur è stata per anni sede di una organizzazione della Confraternita dedita al pattugliamento del Mare della Notte in cerca di attività criminale e di contrabbando.",
    link: "https://www.aumyr.world/geography/dreamor.html#amakur"
  }
];

for (let i = 0; i < keeps_markers.length; i++) {
  marker = L.marker(keeps_markers[i].loc, { icon: marker_icon_keep }).addTo(
    keeps_lg
  );
  marker.bindPopup(
    keeps_markers[i].pop +
      '<hr><a href="' +
      keeps_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      keeps_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(keeps_markers[i].label);
}
