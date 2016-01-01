/* Ez nem kell már
// a pozíció feldolgozása
function processPosition(pos){
   console.log(pos);
}

// Pillanatnyi tartózkodási hely lekérése
navigator.geolocation.getCurrentPosition(processPosition);
*/

// Ezt a Google fejlesztőből másoltuk
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

// Progress bar programozása
// 
function changeProgress(progress){
    if(!progress){
        // 
        progress=document.querySelector(".progress-value").value;
    }
    
    // Ha a kiolvasott érték tartalmaz nem száot, azt kiszedi reguláris kifezéssel
    // Minden nem szám elemet cseréld le egy üres sztringre
    progress = progress.replace(/,/g, "."); // vesszők pontra
    progress = progress.replace(/[^0-9\.]/g, ""); //nem (szám és pontot) semmire
    // mostmár a tizedesvesszőt is kezeli
    
    progress = parseFloat(progress,10);
    //console.log(progress);
    
    // Ha nem kapott értéket, vagy nem szám akkor gyere vissza
    if(!progress || isNaN(progress)){
        return;
    }
    
   var bar = document.querySelector(".progress .progress-bar")
   bar.style.width=progress + "%";
}


//Késleltetett megjelenítés:
// 5 sec múlva lefut a függvény
setTimeout(showModal, 5000);

function showModal(){
    //megkeressük a modális ablakot és elindítjuk
    $("#myModal").modal("show");
}

/*
//Időzítés névtelen függvénnyel
setTimeout( function (){
    //megkeressük a modális ablakot és elindítjuk
    $("#myModal").modal("show");
}, 5000);

*/

//Popower beállítása (inicializálása)
$('#popower1').popover()


