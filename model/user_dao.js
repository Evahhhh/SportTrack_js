var db = require('../sport-track-db/sqlite_connection.js');

var UserDAO = function(){

    this.insert = function(values, callback){
        db.run('INSERT INTO User (lName, fName, birthDate, gender, size, weight, email, password) VALUES (?,?,?,?,?,?,?,?)', values, function(err){
            callback(err);
        });
    };

    this.update = function(key, values, callback){
        db.run('UPDATE User SET lName = ?, fName = ?, birthDate = ?, gender = ? , size = ?, weight = ?, email = ?, password = ? WHERE id = ?', values, key, function(err){
            callback(err);
        });
    };

    this.delete = function(key, callback){
        db.run('DELETE FROM User WHERE id = ?', key, function(err){
            callback(err);
        });
    };

    this.findAll = function(callback){
        db.all('SELECT * FROM User', function(err, rows){
            callback(err, rows);
        });
    };

    this.findByKey = function(key, callback){
        db.get('SELECT * FROM User WHERE id = ?', key, function(err, row){
            callback(err, row);
        });
    };
};

var dao = new UserDAO();
module.exports = dao;