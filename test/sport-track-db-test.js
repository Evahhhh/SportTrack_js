var user_dao = require('../sport-track-db/sport-track-db').user_dao;
var db = require('../sport-track-db/sport-track-db').db_connection;

user_dao.deleteAll();

var value = ['Doe', 'John', '1990-01-01', 'M', 1.80, 80,'doe.john@grimp.io','123456'];
var value2 = ['Doe', 'Jane', '1990-01-01', 'F', 1.60, 60,'doe.jane@grimp.io','654321'];
user_dao.insert(value);
user_dao.insert(value2);

user_dao.findAll();