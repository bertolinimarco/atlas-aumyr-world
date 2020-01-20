let capitals_lg = L.layerGroup();

let capitals_markers = [
  {
    label: "Dunmere",
    loc: [2687, 475],
    pop:
      "<strong>Dunmere</strong> è un grosso insediamento di case dal tetto spiovente e appuntito, un’oasi di civiltà nelle montagne selvagge. Situata in una gola naturale che la protegge dalle incursioni della maggior parte delle creature delle montagne vicine, a Dunmere la gente si concentra a coltivare la terra, ma anche a combattere in arene pubbliche per dimostrare il proprio valore, commerciare o semplicemente bere idromele.",
    link: "https://www.aumyr.world/geography/nordavind.html#dunmere"
  },
  {
    label: "Brean",
    loc: [2856.5, 2122],
    pop: "",
    link: "#"
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
    direction: "bottom"
  });
}
