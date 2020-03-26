window.addEventListener("DOMContentLoaded", function(event) {

  var tableys = document.getElementById('jsonTable');

var request = new XMLHttpRequest();
request.open('GET', 'https://arfp.eu/dataset/cards.json', true);
request.onload = function() {
  if (this.status === 200) {
    
      var cards = JSON.parse(this.responseText);
      var arrItems =[];
      arrItems = JSON.parse(this.responseText);
      var maxAttack = getMax(cards, "attack");
      //pour l'instant je teste getMax, ensuite je met en place la carte
      console.log("Top Value name and victory number: " + maxAttack.name + " - " + maxAttack.victory);

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

         
      }
  }
};
request.send();

// grâce à la fonction getMax je peux récupérer la valeur de mon choix (attaque, victoire.. etc)
function getMax(arr, prop) {
  var max;
  for (var i=0 ; i<arr.length ; i++) {
      if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
          max = arr[i];
  }
  return max;
}
});