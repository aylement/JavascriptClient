const tableys = document.querySelector("#jsonTable > tbody")
function loadData () {
const request = new XMLHttpRequest();
request.open("GET", "https://arfp.eu/dataset/cards.json");
request.onload = () => {
  try {
    const cards = JSON.parse(request.responseText);
    putData(cards);
  }   catch (e){
        console.warn("error loading the json");
  } 
};
request.send();
}

function putData (cards) {
      cards.forEach((row) => {
       console.log(row);
    });
}
document.addEventListener("DOMContentLoaded", () => { loadData(); });