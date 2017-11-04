document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}



function verMapa() {


  var myCenter = new google.maps.LatLng(-34.616244, -58.497793);

  var mapProp = {
    center: myCenter,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}
