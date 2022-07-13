let searchbtn = document.querySelector("#searchbtn");
let theLocation = document.querySelector("#theLocation");
let theTimezone = document.querySelector("#theTimezone");
let theisp = document.querySelector("#theisp");
let theIPaddress = document.querySelector("#theIPaddress");
let idbox = document.querySelector("#idbox");
let map = document.querySelector("#map");
const ipifykey = "at_0x01tVWE7TRd1J2zBv8SRnL2K5ARD";
const ipifyurl ="https://geo.ipify.org/api";
let currValue = idbox.value;

searchbtn.addEventListener("click", onClick)


function grabIPData(){
//ipify api

currValue;
ipifykey;
$(function () {
   $.ajax({
       url: "https://geo.ipify.org/api/v1",
       data: {apiKey: ipifykey, ipAddress: currValue},
       success: function(data) {
       //  $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
       theIPaddress.innerHTML = data.ip
       theLocation.innerHTML = data.location.city + " " + data.location.region + " " + data.location.postalCode
       theTimezone.innerHTML = data.location.timezone 
       theisp.innerHTML = data.isp

       function updateMAP(update_map = [data.location.lat, data.location.lng]){
     map =   map.remove();
      map = L.map('map').setView(update_map, 10)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

       L.marker(update_map).addTo(map)
     }
       updateMAP();
      
        
;       }
   });
});

}


function onClick(){
   idbox.value = "";
   grabIPData();
}


//leaflet api

 map = L.map('map', {
    center: [0, 0],
    zoom: 10,
     trackResize: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([0, 0]).addTo(map)


function updateMAP(update_map = [data.location.lat, data.location.lng]){
    map.off();
//   map.remove();
  map = L.map('map').setView(update_map, 10)
   L.marker(update_map).addTo(map)
 }