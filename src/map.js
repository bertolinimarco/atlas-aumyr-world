var aumyrCopy = '<a href="https://www.aumyr.world">Info</a>';
// var aumyrOtherCopy = '<span id="openModalInfo">Info</span>';

var landMap = L.tileLayer("", {
  id: "aumyr-land",
  attribution: aumyrCopy
});

// var otherMap = L.tileLayer("", {
//   id: "aumyr-other",
//   attribution: mapAttributes
// });

var map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 1,
  zoomControl: false,
  layers: [
    landMap,
    roads_lg,
    mountains_lg,
    islands_lg,
    waters_lg,
    hills_lg,
    forests_lg,
    deserts_lg,
    swamps_lg,
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
  [3200, 4800]
];

map.fitBounds(bounds);

// Layers
// otherMap = L.imageOverlay("/data/maps/aumyr-underground.jpg", bounds);

// BaseLayers
var baseLayers = {
  Aumyr: landMap
  // Altro Layer: otherMap
};

// Markers
var markers = {
  "Regioni<hr>": regions_lg,
  Capitali: capitals_lg,
  Città: cities_lg,
  Fortezze: keeps_lg,
  Villaggi: villages_lg,
  Luoghi: locations_lg,
  Osservatori: observatories_lg,
  Portali: portals_lg,
  Rovine: ruins_lg
};

// Init base Map
var aumyrBaseMap = L.imageOverlay("/data/maps/aumyr-min.jpg", bounds).addTo(
  map
);

// Concat Markers for search
var allMarkers = villages_markers.concat(
  roads_markers,
  mountains_markers,
  islands_markers,
  waters_markers,
  hills_markers,
  forests_markers,
  deserts_markers,
  swamps_markers,
  capitals_markers,
  cities_markers,
  keeps_markers,
  ruins_markers,
  locations_markers,
  observatories_markers,
  portals_markers
);

// console.table(allMarkers);

// Search
function getAllData(text, callResponse) {
  callResponse(allMarkers);
  return {
    abort: function() {
      // console.log("aborted request:" + text);
    }
  };
}

// Control Search
map.addControl(
  new L.Control.Search({
    propertyName: "label",
    sourceData: getAllData,
    textPlaceholder: "Cerca...",
    textErr: "Nessun luogo trovato",
    textCancel: "Annulla",
    hideMarkerOnCollapse: true,
    markerLocation: true,
    zoom: 1
  })
);

// Control Layers
L.control
  .layers(baseLayers, markers, {
    collapsed: true
  })
  .addTo(map);

// Control Zoom
L.control
  .zoom({
    position: "topleft"
  })
  .addTo(map);

// Plugin: Enable URL Hash
var hash = new L.Hash(map);

// Plugins: Fullscreen
map.addControl(
  new L.Control.Fullscreen({
    position: "topleft",
    title: "Fullscreen"
  })
);

// Plugins: Location Share
map.addControl(
  new L.Control.ShareLocation({
    position: "topleft",
    title: "Condividi Posizione"
  })
);

// Plugin: Marker cluster
// var clusterGroup = L.markerClusterGroup();
// clusterGroup.addLayer(cities_lg);
// clusterGroup.addLayer(villages_lg);
// clusterGroup.addLayer(keeps_lg);
// clusterGroup.addLayer(capitals_lg);
// clusterGroup.addLayer(locations_lg);
// clusterGroup.addLayer(ruins_lg);
// clusterGroup.addLayer(roads_lg);
// clusterGroup.addLayer(forests_lg);
// clusterGroup.addLayer(waters_lg);
// clusterGroup.addLayer(hills_lg);
// clusterGroup.addLayer(mountains_lg);
// clusterGroup.addLayer(swamps_lg);
// map.addLayer(clusterGroup);

// Debug: Show popup with coordinates
// var enable_debug = false;
// if (enable_debug == true) {
//   var popup = L.popup();
//   function onMapClick(e) {
//     popup
//       .setLatLng(e.latlng)
//       .setContent("Coordinate: " + e.latlng.toString())
//       .openOn(map);
//   }
//   map.on("click", onMapClick);
// }

// Debug: Draw mode
// var enable_draw = false;
// if (enable_draw == true) {
//   var options = {
//     position: "topleft",
//     drawMarker: true,
//     drawPolyline: true,
//     drawRectangle: true,
//     drawPolygon: true,
//     drawCircle: true,
//     cutPolygon: true,
//     editMode: true,
//     removalMode: true
//   };
//   map.pm.addControls(options);
// }

// //On zoom, show/hide labels
// var visible;

// // Change Tooltip size on zoom
// map.on("zoom", function() {
//   var zoomLevel = map.getZoom();
//   var tooltip = $(".leaflet-tooltip");

//   switch (zoomLevel) {
//     case -2:
//       tooltip.css("font-size", 0);
//       break;
//     case -1:
//       tooltip.css("font-size", 8);
//       break;
//     case 1:
//       tooltip.css("font-size", 14);
//       break;
//     default:
//       tooltip.css("font-size", 10);
//   }
// });

// Responsive
// window.addEventListener("resize", function(event) {
//   var width = document.documentElement.clientWidth;
//   if (width < 768) {
//     // map.setZoom(-1);
//     // $(".leaflet-control-zoom").css("display", "none");
//   } else {
//     // map.setZoom(1);
//   }
// });

// Toggle layer on zoom
// map.on("zoomend", function() {
//   var zoomlevel = map.getZoom();
//   if (zoomlevel <= -1) {
//     // map.removeLayer(villages_lg);
//     // // map.addLayer(capitals_lg);
//     // // map.removeLayer(capitals_lg);
//   }
//   if (zoomlevel >= 1) {
//     // map.addLayer(villages_lg);
//     // layers
//   }
//   console.log("Current Zoom Level =" + zoomlevel);
// });
