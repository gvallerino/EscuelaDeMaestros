var longitud;
var latitud;

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function cargarPosiciones() {
    document.addEventListener("deviceready", onDeviceReady, false);
    onDeviceReady();
}

function verMapa() {

    longitud = document.getElementById('longitud');
    latitud = document.getElementById('latitud');
    var myCenter = new google.maps.LatLng(latitud.value, longitud.value);

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

function onSuccess(position) {
    
    longitud = document.getElementById('longitud');
    latitud = document.getElementById('latitud');

    longitud.value=position.coords.longitude;
    latitud.value=position.coords.latitude;
}

// Creo la función onError
//Le paso el mensaje de error deseado
function onError(error) {
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}