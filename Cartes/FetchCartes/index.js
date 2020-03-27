fetch('https://arfp.eu/dataset/cards.json')
    .then(function (response) {
        response.json()
            .then(function (value) {
                console.log(value);
            });
    });