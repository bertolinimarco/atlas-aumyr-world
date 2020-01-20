var mapAttributes =
  '&copy; CC BY SA 4.0 | <a href="https://www.aumyr.world" target="_blank" rel="noopener">Aumyr</a>';

var landMap = L.tileLayer("", {
  id: "aumyr-land",
  attribution: mapAttributes
});

var map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 1,
  layers: [
    landMap,
    regions_lg
    // roads_lg,
    // mountains_lg,
    // islands_lg,
    // waters_lg,
    // hills_lg,
    // capitals_lg,
    // cities_lg,
    // keeps_lg,
    // villages_lg,
    // ruins_lg,
    // locations_lg,
    // observatories_lg,
    // portals_lg
  ]
});

var bounds = [
  [0, 0],
  [3200, 4800]
];

map.fitBounds(bounds);

// Layers
// undergroundMap = L.imageOverlay("/data/maps/aumyr-underground.jpg", bounds);

// BaseLayers
var baseLayers = {
  Aumyr: landMap // "Superficie?"
  // Sottosuolo: undergroundMap
};

// Markers
var markers = {
  "Regioni<hr>": regions_lg,
  "Capitali <div class='icon-marker marker-city'></div>": capitals_lg,
  Città: cities_lg,
  Fortezze: keeps_lg,
  Villaggi: villages_lg,
  Rovine: ruins_lg,
  Luoghi: locations_lg,
  Osservatori: observatories_lg,
  Portali: portals_lg
};

// Init base Map
var aumyrBaseMap = L.imageOverlay("/data/maps/aumyr-land-2.jpg", bounds).addTo(
  map
);

// On zoom, show/hide labels
var visible;

//// Change Tooltip size on zoom
// map.on("zoomstart", function() {
//   var zoomLevel = map.getZoom();
//   var tooltip = $(".leaflet-tooltip");

//   switch (zoomLevel) {
//     case -2:
//       tooltip.css("font-size", 8);
//       break;
//     case -1:
//       tooltip.css("font-size", 10);
//       break;
//     case 0:
//       tooltip.css("font-size", 12);
//       break;
//     case 1:
//       tooltip.css("font-size", 14);
//       break;
//     case 2:
//       tooltip.css("font-size", 16);
//       break;
//     default:
//       tooltip.css("font-size", 10);
//   }
// });

// Control Layers
L.control.layers(baseLayers, markers, { collapsed: false }).addTo(map);

// Mouse Position
// L.control.mousePosition().addTo(map);

// Hash
var hash = new L.Hash(map);

// Plugins: Fullscreen
map.addControl(new L.Control.Fullscreen());

// Plugins: Search

// Debug mode: Get coordinates
var enable_debug = false;
if (enable_debug == true) {
  // Show popup with coordinates
  var popup = L.popup();
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Coordinate: " + e.latlng.toString())
      .openOn(map);
  }
  map.on("click", onMapClick);
}
// Debug mode Draw mode (decomment in prod)
var options = {
  position: "topleft",
  drawMarker: true,
  drawPolyline: true,
  drawRectangle: true,
  drawPolygon: true,
  drawCircle: true,
  cutPolygon: true,
  editMode: true,
  removalMode: true
};
map.pm.addControls(options);

// // Responsive
// window.addEventListener('resize', function(event){
// // get the width of the screen after the resize event
// var width = document.documentElement.clientWidth;
// // tablets are between 768 and 922 pixels wide
// // phones are less than 768 pixels wide
// if (width < 768) {
//     // set the zoom level to 10
//     map.setZoom(-1);
// }  else {
//     // set the zoom level to 8
//     map.setZoom(1);
// }
// });
