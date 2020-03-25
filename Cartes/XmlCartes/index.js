let request = new XMLHttpRequest;
request.open('GET', 'https://arfp.eu/dataset/cards.json');
request.responseType = 'text';
request.send();
request.onload = function() 
{
  if (this.status === 200) 
  {
  	let cards = JSON.parse(this.responseText),
    		baseBody = '';
    
    cards.map(function(d) {
    	baseBody =+ `
      	<tr>
        	<td>${d["id"]}</td>
        	<td>${d.name}</td>
        	<td>${d.level}</td>
        </tr>
      `;
    });
    
    document.querySelector('#jsonTable tbody').innerHTML = baseBody;
  }
}
