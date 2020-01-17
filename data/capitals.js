let capitals_lg = L.layerGroup();

let capitals_markers = [
  {
    label: "Fivestar",
    loc: [1562, 3147],
    pop:
      "<strong>Fivestar</strong> è la più grande città del mondo conosciuto, con i suoi grandi templi, le sue torri millenarie e i suoi palazzi antichi. La leggenda vuole che nel punto esatto in cui i Cinque arrivarono su Aumyr, ora sorga la città, inserita in un promontorio di roccia lavica al centro del Mare della Notte.",
    link: "https://www.aumyr.world/geography/dreamor.html#fivestar"
  }
];

for (let i = 0; i < capitals_markers.length; i++) {
  marker = L.marker(capitals_markers[i].loc, {
    icon: marker_icon_capital
  }).addTo(capitals_lg);
  marker.bindPopup(
    capitals_markers[i].pop +
      '<hr><a href="' +
      capitals_markers[i].link +
      '" target="_blank" rel="noopener">Leggi di più su ' +
      capitals_markers[i].label +
      "</a>"
  );
  marker.bindTooltip(capitals_markers[i].label, {
    // permanent: true,
    // direction: "bottom"
  });
}
