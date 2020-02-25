let portals_lg = L.layerGroup();

let portals_markers = [
  {
    label: "Fivestar Portal",
    loc: [1543, 3045],
    pop:
      'Also called "the Center" is located on a small hill near Fivestar. The Portal is the main hub for business within the capital and surrounding regions, and is crossed every day by thousands of people who travel to other cities or other parts of the continent, who for work, who for adventure.',
    link: "#"
  },
  {
    label: "Highpine Portal",
    loc: [2747, 3892],
    pop:
      '"Goin\' to the North" is a fairly common expression for travelers crossing a Portal to Highpine, in Laangor. For those coming from the South, it is advisable to pay attention to the sudden change in temperature and climate due to the northern position of the region',
    link: "#"
  },
  {
    label: "Geldast Portal",
    loc: [731, 4393],
    pop:
      'If you cross a Portal to Geldast, you go "to the Island", and rarely travel alone. It is often a destination for adventurers and mysterious seekers, as the jungles and landscapes of Inkari Island are still largely unexplored.',
    link: "#"
  },
  {
    label: "Westorn Portal",
    loc: [1013, 1294],
    pop:
      'If the destination of your trip with the Portal is Westorn, you go to "South" or to the "Hot Lands". The Portal is not close to any of the main cities but is an important hub for trade routes, allowing travelers to quickly reach many different territories such as the adjacent Portal Bay, the Thanaros desert to the south, the Faeland plains to the north, the Nayalis Forest to the east',
    link: "#"
  },
  {
    label: "Damodar Portal",
    loc: [1876, 715],
    pop:
      'Simply called "the West", the Portal is just a day\'s walk from Damodar, in Laentas. A very popular route for those coming from the Centre, it is one of the most used portals for the trade of large loads and caravans.',
    link: "#"
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
      "</p>"
  );
  marker.bindTooltip(portals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
