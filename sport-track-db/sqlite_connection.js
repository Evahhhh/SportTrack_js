const sqlite3 = require('sqlite3').verbose();

// connexion bdd
 new sqlite3.Database('../sport-track-db/sport-track-db.db',(err) => {
    if  (err) {
        console.error(err.message);
    }
    console.log('Connected to the sport-track-db database.');
});
// exportation objet sqlite3.Database via commande module.exports = NOM OBJET 
module.exports = sqlite3 ;