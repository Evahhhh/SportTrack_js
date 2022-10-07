var user_dao = require('../sport-track-db/sport-track-db').user_dao;



var db = require('../sport-track-db/sport-track-db').db_connection;


var value = ['Doe', 'John', '1990-01-01', 'M', 1.80, 80,'doe.john@grimp.io','123456'];
var value2 = ['Done', 'Jane', '1990-01-01', 'F', 1.60, 60,'done.jane@grimp.io','654321'];

user_dao.deleteAll(() => { 
    user_dao.insert(value, () => {
        user_dao.insert(value2, () => {
            user_dao
                .findAll()
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    });
});

