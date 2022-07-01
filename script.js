let searchbtn = document.querySelector("#searchbtn");
let idbox = document.querySelector("#idbox");
// let tmap = document.querySelector("#map")

searchbtn.addEventListener("click", onClick)


function onClick(){
    let buttonValue = searchbtn.value;
    let currValue = idbox.value;
    console.log(buttonValue);
   console.log(currValue);
   idbox.value = "";
}


 map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});