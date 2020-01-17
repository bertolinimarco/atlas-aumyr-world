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
    capitals_lg,
    cities_lg,
    keeps_lg,
    villages_lg,
    ruins_lg,
    locations_lg,
    observatories_lg,
    portals_lg
  ]
});

var bounds = [
  [0, 0],
  [3342, 4942]
];

map.fitBounds(bounds);

// Layers
// undergroundMap = L.imageOverlay("/images/aumyr-underground.jpg", bounds);

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
var aumyrBaseMap = L.imageOverlay("/images/aumyr-land.jpg", bounds).addTo(map);

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
var enable_debug = true;
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
// // Debug mode Draw mode (decomment in prod)
// var options = {
//   position: "topleft",
//   drawMarker: true,
//   drawPolyline: true,
//   drawRectangle: true,
//   drawPolygon: true,
//   drawCircle: true,
//   cutPolygon: true,
//   editMode: true,
//   removalMode: true
// };
// map.pm.addControls(options);

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
