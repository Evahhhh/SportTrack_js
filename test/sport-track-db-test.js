const User = require('../model/User');
const Activity = require('../model/Activity');
var user_dao = require('../sport-track-db/sport-track-db').user_dao;
var activity_dao = require('../sport-track-db/sport-track-db').activity_dao;
var db = require('../sport-track-db/sport-track-db').db_connection;


var user1 = new User();
var user2 = new User();
var user3 = new User();

user1.init(123,'Doe', 'John', '1990-01-01', 'M', 1.80, 80,'doe.john@grimp.io','123456');
user2.init(123,'Done', 'Jane', '1990-01-01', 'F', 1.60, 60,'done.jane@grimp.io','654321');
user3.init(123,'Danvers', 'Martin', '1999-10-06', 'M', 1.84, 68,'martin.danvers@grimp.io','khenty');

var u1Tab = user1.toTab();
var u2Tab = user2.toTab();
var u3Tab = user3.toTab();

user_dao.deleteAll().then(() => {
    user_dao.findAll().then((rows) => {
        console.log("Tableau vide : ");
        console.log(rows);
        console.log('-----------------');
        user_dao.insert(user1,u1Tab).then(() => {
            user_dao.insert(user2,u2Tab).then(() => {
                user_dao.findAll().then((rows) => {
                    console.log("Tableau avec 2 utilisateurs : ");
                    console.log(rows);
                    console.log('-----------------');
                    user_dao.delete(user1.getID()).then(() => {
                        user_dao.findAll().then((rows) => {
                            console.log("Tableau avec 1 utilisateur (Doe John supprimé) : ");
                            console.log(rows);
                            console.log('-----------------');
                            user_dao.update(user2.getID(),u3Tab).then(() => {
                                user_dao.findAll().then((rows) => {
                                    console.log("Tableau avec 1 utilisateur (Done Jane modifié pour Danvers) : " );
                                    console.log(rows);
                                    console.log('-----------------');
                                    user_dao.findByKey(user2.getID()).then((row) => {   
                                        console.log("Utilisateur avec l'id " + user2.getID() +" : "); 
                                        console.log(row);
                                        console.log('-----------------');
                                        user_dao.deleteAll().then(() => {
                                            user_dao.findAll().then((rows) => {
                                                console.log("Tableau vide : ");
                                                console.log(rows);
                                                console.log('-----------------');
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


var act1 = new Activity();
var act2 = new Activity();

act1.init(123,'Course', '2019-01-01', '12:00:00', 3600, 10.0 , 120, 140, 160, 1);
act2.init(123,'Natation', '2010-01-01', '13:00:00', 4200, 5.0 , 150, 200, 220, 1);

var a1Tab = act1.toTab();
var a2Tab = act2.toTab();

activity_dao.deleteAll().then(() => {
    user_dao.insert(user1,u1Tab).then(() => {
        activity_dao.findAll().then((rows) => {
            console.log("Tableau vide : ");
            console.log(rows);
            console.log('-----------------');

            //modification idUser pour l'activité
            a1Tab[9] = user1.getID();
            a2Tab[9] = user1.getID();

            activity_dao.insert(act1,a1Tab).then(() => {
                activity_dao.insert(act2,a2Tab).then(() => {
                    activity_dao.findAll().then((rows) => {
                        console.log("Tableau avec 2 activités : ");
                        console.log(rows);
                        console.log('-----------------');
                        activity_dao.delete(act1.getID()).then(() => {
                            activity_dao.findAll().then((rows) => {
                                console.log("Tableau avec 1 activité (Course supprimée) : ");
                                console.log(rows);
                                console.log('-----------------');
                                activity_dao.update(act2.getID(),a1Tab).then(() => {
                                    activity_dao.findAll().then((rows) => {
                                        console.log("Tableau avec 1 activité (Natation modifiée pour Course) : " );
                                        console.log(rows);
                                        console.log('-----------------');
                                        activity_dao.findByKey(act2.getID()).then((row) => {   
                                            console.log("Activité avec l'id " + act2.getID() +" : "); 
                                            console.log(row);
                                            console.log('-----------------');
                                            activity_dao.deleteAll().then(() => {
                                                activity_dao.findAll().then((rows) => {
                                                    console.log("Tableau vide : ");
                                                    console.log(rows);
                                                    console.log('-----------------');
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});