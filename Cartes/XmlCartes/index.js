window.addEventListener("DOMContentLoaded", function(event) {

  var tableys = document.getElementById('jsonTable');

var request = new XMLHttpRequest();
request.open('GET', 'https://arfp.eu/dataset/cards.json', true);
request.onload = function() {
  if (this.status === 200) {
      var cards = JSON.parse(this.responseText);
      for(var i=0; i < cards.length; i++)
      {
          tableys.innerHTML += '<td>' + cards[i].id +'</td>' +
          '<td>' + cards[i].name + '</td>' +
          '<td>' + cards[i].level + '</td>' +
          '<td>' + cards[i].description + '</td>' +
          '<td>' + cards[i].power + '</td>' +
          '<td>' + cards[i].attack + '</td>' +
          '<td>' + cards[i].armor + '</td>' +
          '<td>' + cards[i].damage + '</td>' +
          '<td>' + cards[i].mitigation + '</td>' +
          '<td>' + cards[i].played + '</td>' +
          '<td>' + cards[i].victory + '</td>' +
          '<td>' + cards[i].defeat + '</td>' +
          '<td>' + cards[i].draw + '</td>';
          var maxPpg = getMax(cards, "attack");
          console.log("Top scorer: " + maxPpg.player + " - " + maxPpg.team);
         
      }
  }
};
request.send();

function getMax(arr, prop) {
  var max;
  for (var i=0 ; i<arr.length ; i++) {
      if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
          max = arr[i];
  }
  return max;
}


});