var db_connection = require('./sqlite_connection');
var user_dao = require('./DAO/user_dao');
var activity_dao = require('./DAO/activity_dao');
module.exports = {db: db_connection, user_dao: user_dao, activity_dao: activity_dao};