var db = require('../sqlite_connection.js');

var UserDAO = function(){
    
    this.insert = function(values){
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO User (lName, fName, birthDate, gender, size, weight, email, password) VALUES (?,?,?,?,?,?,?,?)', values, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    };
    
    this.update = function(key, values){
        return new Promise((resolve, reject) => {
            db.run('UPDATE User SET lName = ?, fName = ?, birthDate = ?, gender = ? , size = ?, weight = ?, email = ?, password = ? WHERE id = ?', values, key, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    };
    
    this.delete = function(key){
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM User WHERE id = ?',key, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    };

    this.deleteAll = function(){
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM User', (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    };

    this.findAll = function(){
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM User', (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    };
    
    this.findByKey = function(key){
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM User WHERE id = ?', key, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    };
    
};

var dao = new UserDAO();
module.exports = dao;