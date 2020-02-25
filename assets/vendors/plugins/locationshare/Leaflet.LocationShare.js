L.LocShare = {};
var LS = L.LocShare;
LS.Send = {};
LS.Send.Marker = {};
LS.Send.Popup = L.popup().setContent(
  '<div class="card"><div class="card-body"><input class="form-control" id="sendText" type="text" class="location-share" size="30" onkeyup="L.LocShare.Send.UpdateMessage( this )" placeholder=""/><button class="btn btn-primary btn-sm btn-block location-share-btn" onclick="copyPrompt()">Link</button></div></div>'
);
LS.Receive = {};
LS.Receive.Marker = {};
LS.Receive.Popup = L.popup();
var sendIcon = L.icon({
  iconUrl: "/assets/markers/icon-share-send.png",
  iconSize: [34, 41],
  iconAnchor: [16, 35],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28]
});

receiveIcon = L.icon({
  iconUrl: "/assets/markers/icon-share-receive.png",
  iconSize: [34, 41],
  iconAnchor: [16, 35],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28]
});

L.Map.addInitHook(function() {
  this.sharelocationControl = new L.Control.ShareLocation();
  this.addControl(this.sharelocationControl);
  this.whenReady(function() {
    populateMarker(this);
  });
});

L.Control.ShareLocation = L.Control.extend({
  options: {
    position: "bottomleft",
    title: ""
  },

  onAdd: function() {
    var container = L.DomUtil.create("div", "leaflet-bar leaflet-control");

    this.link = L.DomUtil.create("a", "leaflet-bar-part", container);
    this.link.title = this.options.title;
    var userIcon = L.DomUtil.create(
      "img",
      "img-responsive icon-share-button",
      this.link
    );
    userIcon.src = "/assets/markers/icon-share-button.png";
    this.link.href = "#";

    L.DomEvent.on(this.link, "click", this._click, this);

    return container;
  },

  _click: function(e) {
    L.DomEvent.stopPropagation(e);
    L.DomEvent.preventDefault(e);
    placeMarker(this._map);
  }
});

populateMarker = function(selectedMap) {
  // replace the line below with the results of any Url parser
  var intermediate = getJsonFromUrl();
  if (isFinite(intermediate.lat) && isFinite(intermediate.lng)) {
    LS.Receive.message = intermediate.M;
    LS.Receive.lat = +intermediate.lat;
    console.log(intermediate.lat);
    LS.Receive.lng = +intermediate.lng;
    console.log(intermediate.lng);
    var text =
      "<table><tr><td><p>" +
      LS.Receive.message +
      "</p></td><td><p>Lat: " +
      LS.Receive.lat +
      "</p><p>Lng: " +
      LS.Receive.lng +
      "</p></td></tr></table>";
    // LS.Receive.Popup.setContent(LS.Receive.message);
    LS.Receive.Marker = L.marker([LS.Receive.lat, LS.Receive.lng], {
      icon: receiveIcon
    });
    console.log(LS.Receive.Marker._latlng);
    LS.Receive.Marker.bindPopup(
      "<div class='card is-message'><div class='card-body'>" +
        LS.Receive.message +
        "</div></div>"
    );
    LS.Receive.Marker.addTo(selectedMap);
    LS.Receive.Marker.openPopup();
  }
};

function getJsonFromUrl() {
  var params = {};
  params.query = location.search.substr(1);
  params.parsed = decodeURIComponent(params.query);
  params.data = params.parsed.split("&");
  params.result = {};
  for (var i = 0; i < params.data.length; i++) {
    var item = params.data[i].split("=");
    params.result[item[0]] = item[1];
  }
  // This will return all of the data in the query parameters in object form
  // getJsonFromUrl() only splits on ampersand and equals -- jquery can do better
  // But so could you!! submit a pull request if you've got one!
  return params.result;
}

function copyPrompt() {
  window.prompt(
    "Copy:",
    "" +
      location.origin +
      location.pathname +
      "?" +
      "lat" +
      "=" +
      LS.Send.lat +
      "&" +
      "lng" +
      "=" +
      LS.Send.lng +
      "&" +
      "M" +
      "=" +
      LS.Send.Message
  );
}

function placeMarker(selectedMap) {
  //  var test = LS.Send.Marker._latlng
  //  if ( isFinite(test.lat) && isFinite(test.lng) ){
  if (!LS.Send.Marker._latlng) {
    // console.log('if (!LS.Send.Marker._latlng ) { passed!  line 95')
    LS.Send.Marker = L.marker(selectedMap.getCenter(), {
      draggable: true,
      icon: sendIcon
    });
    setSendValues(selectedMap.getCenter());
    LS.Send.Marker.on("dragend", function(event) {
      setSendValues(event.target.getLatLng());
      LS.Send.Marker.openPopup();
    });
    LS.Send.Marker.bindPopup(LS.Send.Popup);
    LS.Send.Marker.addTo(selectedMap);
  } else {
    LS.Send.Marker.setLatLng(selectedMap.getCenter());
  }
  //selectedMap.setView( location , 16 )
  LS.Send.Marker.openPopup();
  //  }
}

LS.Send.UpdateMessage = function(text) {
  var encodedForUrl = encodeURIComponent(text.value);
  LS.Send.Message = encodedForUrl;
};

function setSendValues(result) {
  LS.Send.lat = result.lat;
  LS.Send.lng = result.lng;
}
