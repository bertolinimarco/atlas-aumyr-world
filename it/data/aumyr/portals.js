let portals_lg = L.layerGroup();

let portals_markers = [
  {
    label: "Portale di Fivestar",
    loc: [1543, 3045],
    pop:
      "Detto anche “il Centro” si trova su una piccola collina nelle vicinanze di Fivestar. ",
    link: "https://www.aumyr.world/geography/#portali"
  },
  {
    label: "Portale di Highpine",
    loc: [2747, 3892],
    pop:
      "Andare al “Nord” è un’espressione piuttosto comune per i viaggiatori che attraversano un Portale diretti a Highpine, nel Laangor.",
    link: "https://www.aumyr.world/geography/#portali"
  },
  {
    label: "Portale di Geldast",
    loc: [731, 4393],
    pop:
      "E’ spesso meta di avventurieri e cercatori di misteri, visto che le giungle e i paesaggi dell’isola di Inkari sono ancora largamente inesplorati.",
    link: "https://www.aumyr.world/geography/#portali"
  },
  {
    label: "Portale di Westorn",
    loc: [1013, 1294],
    pop:
      "Se la meta del proprio viaggio con il Portale è a Westorn, si va a “Sud” o nelle “Terre calde”.",
    link: "https://www.aumyr.world/geography/#portali"
  },
  {
    label: "Portale di Damodar",
    loc: [1876, 715],
    pop:
      "Una tratta molto popolare per chi viene dal Centro, è uno dei portali più utilizzati per il commercio di grandi carichi e carovane.",
    link: "https://www.aumyr.world/geography/#portali"
  }
];

for (let i = 0; i < portals_markers.length; i++) {
  marker = L.marker(portals_markers[i].loc, {
    icon: marker_icon_portal
  }).addTo(portals_lg);
  marker.bindPopup(
    "<div class='card is-portal'><div class='card-body'>" +
      "<p>" +
      portals_markers[i].pop +
      "</p><hr><a href='" +
      portals_markers[i].link +
      "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>"
  );
  marker.bindTooltip(portals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
