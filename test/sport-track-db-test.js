var user_dao = require('../sport-track-db/sport-track-db').user_dao;
var db = require('../sport-track-db/sport-track-db').db_connection;

var values = ['Doe', 'John', '1990-01-01', 'M', 1.80, 80,'doe.john@grimp.io','123456'];
user_dao.insert(values,"hey");