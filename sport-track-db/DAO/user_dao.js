var db = require('../sqlite_connection.js');

var UserDAO = function(){
    
    this.insert = function(values, callback){
        db.run('INSERT INTO User (lName, fName, birthDate, gender, size, weight, email, password) VALUES (?,?,?,?,?,?,?,?)', values);
        callback();
    };
    
    this.update = function(key, values){
        db.run('UPDATE User SET lName = ?, fName = ?, birthDate = ?, gender = ? , size = ?, weight = ?, email = ?, password = ? WHERE id = ?', values, key);
    };
    
    this.delete = function(key){
        db.run('DELETE FROM User WHERE id = ?', key);
    };

    this.deleteAll = function(callback){
        db.run('DELETE FROM User');
        callback();   
    };

    this.findAll = function(){
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM User', (err, row) => {
                if (err) {
                    reject(err); // optional: you might choose to swallow errors.
                } else {
                    resolve(row)
                }
            });
        });
    };
    
    this.findByKey = function(key){
        return db.get('SELECT * FROM User WHERE id = ?', key);
    };
    
};

var dao = new UserDAO();
module.exports = dao;