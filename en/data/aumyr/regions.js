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
  },
  {
    label: "Zeitan",
    loc: [
      [3180, 2298],
      [3196, 3412],
      [2836.0402523280263, 3787.596275157705],
      [2792, 3662],
      [2654.153488972011, 3537.8356765123176],
      [2528, 3420],
      [2566, 3244],
      [2444, 2928],
      [2722, 2734],
      [2734, 2484],
      [2820, 2454]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Laangor",
    loc: [
      [2836.0402523280263, 3787.596275157705],
      [2990, 4009],
      [2900, 4378],
      [2932, 4610],
      [2872, 4734],
      [2638, 4770],
      [2292, 4686],
      [2088, 4542],
      [1982, 4444],
      [2054, 4250],
      [2206, 4258],
      [2324.4910282049514, 4009.7817253982485],
      [2542, 3566],
      [2654.153488972011, 3537.8356765123176],
      [2792, 3662]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Jhert",
    loc: [
      [2324.4910282049514, 4009.7817253982485],
      [2192, 3882],
      [2100, 3840],
      [2028, 3666],
      [1896, 3690],
      [1592, 3768],
      [1292, 3994],
      [1606, 4378],
      [1982, 4444],
      [2054, 4250],
      [2206, 4258]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Merosh",
    loc: [
      [2444, 2928],
      [2066, 2734],
      [1974, 3072],
      [2034, 3254],
      [1968.16, 3676.88],
      [2028, 3666],
      [2100, 3840],
      [2192, 3882],
      [2324.4910282049514, 4009.7817253982485],
      [2542, 3566],
      [2654.153488972011, 3537.8356765123176],
      [2528, 3420],
      [2528, 3420],
      [2566, 3244]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Aumar",
    loc: [
      [2268, 1450],
      [1936, 1614],
      [1850, 1702],
      [2134, 2490],
      [2064, 2582],
      [2066, 2734],
      [2444, 2928],
      [2722, 2734],
      [2734, 2484],
      [2820, 2454],
      [2662, 2166],
      [2572, 1930],
      [2290, 1558]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Kartaren",
    loc: [
      [1850, 1702],
      [1686, 1526],
      [1712, 1050],
      [1906, 894],
      [2010, 890],
      [2148, 820],
      [2266, 938],
      [2506, 1114],
      [2496, 1246],
      [2268, 1450],
      [1936, 1614]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Laentas",
    loc: [
      [1712, 1050],
      [1576, 646],
      [1716, 350],
      [2036, 106],
      [2206, 210],
      [2276, 362],
      [2329, 571],
      [2148, 820],
      [2010, 890],
      [1906, 894]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Faeland",
    loc: [
      [1850, 1702],
      [1626, 1810],
      [1592, 1916],
      [1380, 2242],
      [1114, 1734],
      [978, 1754],
      [954, 1278],
      [976, 936],
      [1576, 646],
      [1712, 1050],
      [1686, 1526]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Kessen",
    loc: [
      [1380, 2242],
      [1214, 2506],
      [1354, 2770],
      [1482, 2712],
      [2000.7209961860676, 2973.829383577273],
      [2066, 2734],
      [2064, 2582],
      [2134, 2490],
      [1850, 1702],
      [1626, 1810],
      [1592, 1916]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Dreamor",
    loc: [
      [1354, 2770],
      [1142, 2828],
      [958, 2766],
      [668, 2762],
      [560, 2854],
      [662, 3134],
      [754, 3198],
      [780, 3382],
      [600, 3780],
      [684, 3912],
      [838, 3932],
      [872, 4110],
      [976, 4142],
      [1292, 3994],
      [1592, 3768],
      [1896, 3690],
      [1968.16, 3676.88],
      [2034, 3254],
      [1974, 3072],
      [2000.7209961860676, 2973.829383577273],
      [1482, 2712]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Inkari",
    loc: [
      [872, 4110],
      [826, 4162],
      [404, 4158],
      [274, 3912],
      [64, 3810],
      [16, 4070],
      [182, 4698],
      [922, 4770],
      [1090, 4800],
      [1360, 4804],
      [1548, 4750],
      [1606, 4378],
      [1292, 3994],
      [976, 4142]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Gwaldur",
    loc: [
      [668, 2762],
      [758, 2534],
      [704, 2456],
      [378, 2458],
      [202, 2678],
      [8, 3150],
      [20, 3728],
      [64, 3810],
      [274, 3912],
      [404, 4158],
      [826, 4162],
      [872, 4110],
      [838, 3932],
      [684, 3912],
      [600, 3780],
      [780, 3382],
      [754, 3198],
      [662, 3134],
      [560, 2854]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Laendil",
    loc: [
      [704, 2456],
      [748, 2242],
      [820, 2120],
      [910, 1858],
      [978, 1754],
      [1114, 1734],
      [1380, 2242],
      [1214, 2506],
      [1354, 2770],
      [1142, 2828],
      [958, 2766],
      [668, 2762],
      [758, 2534]
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Thanaros",
    loc: [
      [976, 936],
      [704, 938],
      [370, 1128],
      [70, 1440],
      [36, 1906],
      [290, 2402],
      [378, 2458],
      [704, 2456],
      [748, 2242],
      [820, 2120],
      [910, 1858],
      [978, 1754],
      [954, 1278]
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