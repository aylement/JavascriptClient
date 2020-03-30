window.addEventListener("DOMContentLoaded", function(event) {

    var tableys = document.getElementById('jsonTable');

    fetch('https://arfp.eu/dataset/value.json')
    .then(response => {
        response.json()
            .then(console.log);
    });
  //le code ne fonctionne pas et je me retrouve avec cette erreur "Blocage d’une requête multiorigines (Cross-Origin Request) : la politique « Same Origin » ne permet pas de consulter la ressource distante située sur https://arfp.eu/dataset/value.json. Raison : l’en-tête CORS « Access-Control-Allow-Origin » est manquant."
  // je n'ai pas accès au serveur apache alors impossible de régler ce problème
     //au final pour passer aux exercices suivants je vais uniquement console.log les données des 4 cartes demandées
      //attack
      var maxAttack = getMax(value, "attack");
      console.log("Card with the highest attack : id " + maxAttack.id + " - name " + maxAttack.name + " - played  " + maxAttack.played + " - victories " + maxAttack.victory + " - power " + maxAttack.mitigation + " - attack  " + maxAttack.attack + " - defense  " + maxAttack.armor);
      //armor
      var maxArmor = getMax(value, "armor");
      console.log("Card with the highest armor : id " + maxArmor.id + " - name " + maxArmor.name + " - played " + maxArmor.played + " - victories  " + maxArmor.victory + " - power " + maxArmor.mitigation + " - attack " + maxArmor.attack + " - defense  " + maxArmor.armor);
      //played
      var maxPlayed = getMax(value, "played");
      console.log("Most played card : id " + maxPlayed.id + " - name " + maxPlayed.name + " - played " + maxPlayed.played + " - victories  " + maxPlayed.victory + " - power " + maxPlayed.mitigation + " - attack  " + maxPlayed.attack + " -defense  " + maxPlayed.armor);
      //victory
      var maxVictories = getMax(value, "victory");
      console.log("Most victorious card : id " + maxVictories.id + " - name " + maxVictories.name + " - played " + maxVictories.played + " - victories  " + maxVictories.victory + " - power " + maxVictories.mitigation + " - attack  " + maxVictories.attack + " - defense " + maxVictories.armor);

      for(var i=0; i < value.length; i++)
      {
          tableys.innerHTML += '<td>' + value[i].id +'</td>' +
          '<td>' + value[i].name + '</td>' +
          '<td>' + value[i].level + '</td>' +
          '<td>' + value[i].description + '</td>' +
          '<td>' + value[i].power + '</td>' +
          '<td>' + value[i].attack + '</td>' +
          '<td>' + value[i].armor + '</td>' +
          '<td>' + value[i].damage + '</td>' +
          '<td>' + value[i].mitigation + '</td>' +
          '<td>' + value[i].played + '</td>' +
          '<td>' + value[i].victory + '</td>' +
          '<td>' + value[i].defeat + '</td>' +
          '<td>' + value[i].draw + '</td>';
         
      }
    
  


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