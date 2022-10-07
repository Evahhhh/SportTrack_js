var db = require('../sqlite_connection.js');

var UserDAO = function(){
    
    this.insert = function(values){
        db.run('INSERT INTO User (lName, fName, birthDate, gender, size, weight, email, password) VALUES (?,?,?,?,?,?,?,?)', values, call(console.log));
    };
    
    this.update = function(key, values){
        db.run('UPDATE User SET lName = ?, fName = ?, birthDate = ?, gender = ? , size = ?, weight = ?, email = ?, password = ? WHERE id = ?', values, key, call(console.log));
    };
    
    this.delete = function(key){
        db.run('DELETE FROM User WHERE id = ?', key, call(console.log));
    };

    this.deleteAll = function(){
        db.run('DELETE FROM User', call(console.log));
    };

    this.findAll = function(){
        db.all('SELECT * FROM User', call(console.log));
    };
    
    this.findByKey = function(key){
        db.get('SELECT * FROM User WHERE id = ?', key, call(console.log));
    };
    
    function call(callback){
        setTimeout(()=>callback(1),10000);
    }
};

var dao = new UserDAO();
module.exports = dao;