var db = require('../sqlite_connection.js');

var UserDAO = function(){
    
    this.insert = function(user, values){
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO User (lName, fName, birthDate, gender, size, weight, email, password) VALUES (?,?,?,?,?,?,?,?)', values, (err) => {
                if (err) {
                    reject(err); 
                } else {                    
                    //change the id by the database one
                    //have the idUser in the database
                    db.get('SELECT idUser FROM User WHERE email = ?', [values[6]],(err, row) => {
                        if (err) {
                            reject(err);
                        } else {
                            //change
                            user.setId(row.idUser);
                            resolve(user);
                        }
                    });
                }
            });
        });
    };
    
    this.update = function(key, values){
        return new Promise((resolve, reject) => {
            db.run('UPDATE User SET lName = ?, fName = ?, birthDate = ?, gender = ? , size = ?, weight = ?, email = ?, password = ? WHERE idUser = ?', [...values, key], (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve("User updated");
                }
            });
        });
    };
    
    this.delete = function(key){
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM User WHERE idUser = ?',key, (err, row) => {
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
            db.get('SELECT * FROM User WHERE idUser = ?', key, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    };

    this.findByEmail = function(key){
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM User WHERE email = ?', key, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    };

    this.findByEmail = function(key){
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM User WHERE email = ?', key, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    };

    this.connect = function(email,mdp){
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM User WHERE email = ? AND password = ?', [email,mdp], (err, row) => {
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