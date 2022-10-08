class Data{

    __construc(){}

    init(id, t, cFrq, long, lat, alt, idA){
        this.idData = id;
        this.time = t;   
        this.cardiacFreq = cFrq;
        this.longitude = long;
        this.latitude = lat;
        this.altitude = alt;
        this.idAct = idA;
    }

    setId(id){
        this.idData = id;
    }

    getIdData(){ return this.idData; }
    getTime(){ return this.time; }
    getCardiacFreq(){ return this.cardiacFreq; }
    getLongitude(){ return this.longitude; }
    getLatitude(){ return this.latitude; }
    getAltitude(){ return this.altitude; }
    getIdAct(){ return this.idAct; }

    toTab(){
        return [this.time, this.cardiacFreq, this.longitude, this.latitude, this.altitude, this.idAct];
    }
}

module.exports = Data;