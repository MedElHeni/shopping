var telephones = [
    {
        "marque": "Apple",
        "modele": "iPhone"
    },
    {
        "marque": "Samsung",
        "modele": "Galaxy"
    }
];
var json = JSON.stringify(telephones);
alert(JSON.parse(json)[1].marque);