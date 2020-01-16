let cities_lg = L.layerGroup();

let cities_markers = [
  {
    label: "Morun",
    loc: [1411, 3491],
    pop:
      "Per diversi anni la città si è resa teatro di sanguinose lotte tra la Confraternita e una potente gilda di ladri insediati in queste zone.",
    link: "https://www.aumyr.world/geography/dreamor.html#morun"
  }
];

for (let i = 0; i < cities_markers.length; i++) {
  marker = L.marker(cities_markers[i].loc, { icon: marker_icon_city }).addTo(
    cities_lg
  );
  marker.bindPopup(
    cities_markers[i].pop +
      '<hr><a href="' +
      cities_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      cities_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(cities_markers[i].label);
}
