const fonc = require('../controller/fonction.js');
const obj = require('../controller/objet.js');
const objbis = require('../controller/objetbis.js');

var fonction = new fonc()
var objet = new obj()
var objetbis = new objbis()

var parcours = {'nom' : "ActivityTest",
                'data' : [{'lat': 47.644795,'lon': -2.776605},
                          {'lat': 47.646870,'lon': -2.778911},
                          {'lat': 47.646197,'lon': -2.780220},
                          {'lat': 47.646992,'lon': -2.781068},
                          {'lat': 47.647867,'lon': -2.781744},
                          {'lat': 47.648510,'lon': -2.780145}
                         ]
};

console.log(fonction.calculDistanceTrajet(parcours))
console.log(objet.calculDistanceTrajet(parcours))
console.log(objetbis.calculDistanceTrajet(parcours))