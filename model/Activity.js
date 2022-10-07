class Activity{

    __construc(){}

    init(id, desc, date, start, dur, dist, cFrqMin, cFrqAvg, cFrqMax, idU){
        this.idAct = id;
        this.description = desc; 
        this.date = date;
        this.startTime = start;
        this.duration = dur; 
        this.distance = dist;
        this.cardiacFreqMin = cFrqMin;
        this.cardiacFreqAvg = cFrqAvg;
        this.cardiacFreqMax = cFrqMax;
        this.idUser = idU;
    }

    setId(id){
        this.idAct = id;
    }

    getIdAct(){ return this.idAct; }
    getDescription(){ return this.description; }
    getDate(){ return this.date; }
    getStartTime(){return this.startTime; }
    getDuration(){ return this.duration; }
    getDistance(){ return this.distance; }
    getCardiacFreqMin(){ return this.cardiacFreqMin; }
    getCardiacFreqAvg(){ return this.cardiacFreqAvg; }
    getCardiacFreqMax(){ return this.cardiacFreqMax; }
    getIdUser(){ return this.idUser; }

    toTab(){
        return [this.description, this.date, this.startTime, this.duration, this.distance, this.cardiacFreqMin, this.cardiacFreqAvg, this.cardiacFreqMax, this.idUser];
    }
}

module.exports = Activity;