var db = require('../sqlite_connection.js');

var ActivityDAO = function(){

    this.insert = function(activity,values){
        return new Promise((resolve, reject) => {
            db.run("INSERT INTO Activities(description, date, startTime, duration, distance ,cardiacFreqMin,cardiacFreqAvg, cardiacFreqMax, idUser VALUES (?,?,?,?,?,?,?,?,?)", values, (err) => {
                if (err) {
                    reject(err); 
                } else {  
                    //change the id by the database one
                    //have the idActivty in the database
                    db.get("SELECT idAct FROM Activities WHERE idUser = ? AND description = ? AND date = ?", [values[8],values[0],values[1]],(err, row) => {
                        if (err) {
                            reject(err);
                        } else {
                            //change
                            activity.setId(row.idAct);
                            resolve(activity);
                        }
                    });
                }
            });
        });
    }            

    this.update = function(key, values){
        return new Promise((resolve, reject) => {
            db.run("UPDATE Activities SET description = ?, date = ?, startTime = ?, duration = ? , distance = ?, cardiacFreqMin = ?,cardiacFreqAvg = ?, cardiacFreqMax = ? WHERE idAct = ?", [...values, key], (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve("Activity updated");
                }
            });
        });
    }

    this.delete = function(key){
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM Activities WHERE idAct = ?",key, (err, row) => {
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
            db.run("DELETE FROM Activities", (err, row) => {
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
            db.all("SELECT * FROM Activities", (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    }

    this.findById = function(key){
        return new Promise((resolve, reject) => {
            db.get("SELECT * FROM Activities WHERE idAct = ?",key, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(row);
                }
            });
        });
    }

    this.findByUser = function(key){
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM Activities WHERE idUser = ?",key, (err, rows) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

var dao = new ActivityDAO();
module.exports = dao;