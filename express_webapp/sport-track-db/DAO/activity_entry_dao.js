var db = require('../sqlite_connection.js');

var ActivityEntryDAO = function(){

    this.insert = function(data,values){
        return new Promise((resolve, reject) => {
            db.run("INSERT INTO Data(time, cardiacFreq, longitude, latitude,altitude, idAct) VALUES (?,?,?,?,?,?)", values, (err) => {
                if (err) {
                    reject(err); 
                } else {  
                    //change the id by the database one
                    //have the idActivty in the database
                    db.get("SELECT idData FROM Data WHERE idAct = ? AND time = ? AND cardiacFreq = ? AND longitude = ? AND latitude= ? AND altitude = ?", [values[5],values[0],values[1],values[2],values[3],values[4]],(err, row) => {
                        if (err) {
                            reject(err);
                        } else {
                            //change
                            data.setId(row.idData);
                            resolve(data);
                        }
                    });
                }
            });
        });
    }

    this.update = function(key, values){
        return new Promise((resolve, reject) => {
            db.run("UPDATE Data SET time=?, cardiacFreq=?, longitude=?, latitude=?, altitude=? , idAct=? where idData =?", [...values, key], (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve("ActivityEntry/Data updated");
                }
            });
        });
    }

    this.delete = function(key){
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM Data WHERE idData = ?",key, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    }

    this.deleteAll = function(){
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM Data", (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    }

    this.findAll = function(){
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM Data ORDER BY idData", (err, rows) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(rows);
                }
            });
        });
    }

    this.findById = function(key){
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM Data WHERE idData = ?",key, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    }
}

var dao = new ActivityEntryDAO();
module.exports = dao;