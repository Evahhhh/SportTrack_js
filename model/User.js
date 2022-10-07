class User{

    __construc(){}

    init(id,lN, fN, birth, g, s, w, mail, pw){
        this.idUser = id;
        this.lName = lN;
        this.fName = fN;
        this.birthDate = birth;   
        this.gender = g;
        this.size = s;
        this.weight = w;
        this.email = mail;
        this.password = pw;
    }

    setId(id){
        this.idUser = id;
    }

    getID(){ return this.idUser; }
    getLName(){ return this.lName; }
    getFName(){ return this.fName; }
    getBirthDate(){ return this.birthDate; }
    getGender(){ return this.gender; }
    getSize(){ return this.size; }
    getWeight(){ return this.weight; }
    getEmail(){ return this.email; }
    getPassword(){ return this.password; }

    toTab(){
        return [this.lName, this.fName, this.birthDate, this.gender, this.size, this.weight, this.email, this.password];
    }
}

module.exports = User;