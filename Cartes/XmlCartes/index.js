window.addEventListener("DOMContentLoaded", function(event) {

  var tableys = document.getElementById('jsonTable');

var request = new XMLHttpRequest();
request.open('GET', 'https://arfp.eu/dataset/cards.json', true);
request.onload = function() {
  if (this.status === 200) {
    
      var cards = JSON.parse(this.responseText);
      console.log(cards);

      //au final pour passer aux exercices suivants je vais uniquement console.log les données des 4 cartes demandées
      //attack
      var maxAttack = getMax(cards, "attack");
      console.log("Card with the highest attack : id " + maxAttack.id + " - name " + maxAttack.name + " - played  " + maxAttack.played + " - victories " + maxAttack.victory + " - power " + maxAttack.mitigation + " - attack  " + maxAttack.attack + " - defense  " + maxAttack.armor);
      //armor
      var maxArmor = getMax(cards, "armor");
      console.log("Card with the highest armor : id " + maxArmor.id + " - name " + maxArmor.name + " - played " + maxArmor.played + " - victories  " + maxArmor.victory + " - power " + maxArmor.mitigation + " - attack " + maxArmor.attack + " - defense  " + maxArmor.armor);
      //played
      var maxPlayed = getMax(cards, "played");
      console.log("Most played card : id " + maxPlayed.id + " - name " + maxPlayed.name + " - played " + maxPlayed.played + " - victories  " + maxPlayed.victory + " - power " + maxPlayed.mitigation + " - attack  " + maxPlayed.attack + " -defense  " + maxPlayed.armor);
      //victory
      var maxVictories = getMax(cards, "victory");
      console.log("Most victorious card : id " + maxVictories.id + " - name " + maxVictories.name + " - played " + maxVictories.played + " - victories  " + maxVictories.victory + " - power " + maxVictories.mitigation + " - attack  " + maxVictories.attack + " - defense " + maxVictories.armor);

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