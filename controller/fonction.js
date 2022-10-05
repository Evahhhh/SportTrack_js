class CalculDistance{
    __construc(){}

    calculDistance2PointsGPS(lat1,lon1,lat2,lon2){
        return 6371*Math.acos(Math.sin(this.degreVersRad(lat2))*Math.sin(this.degreVersRad(lat1))+Math.cos(this.degreVersRad(lat2))*Math.cos(this.degreVersRad(lat1))*Math.cos(this.degreVersRad(lon2)-this.degreVersRad(lon1)))
    }
    
    calculDistanceTrajet(parcours){
        var distTotale = 0
        for (var i = 0; i < parcours.data.length-1; i++) {
           distTotale = distTotale + this.calculDistance2PointsGPS((parcours.data[i].lat), (parcours.data[i].lon),(parcours.data[i+1].lat),(parcours.data[i+1].lon))
        }
        return distTotale
    }
    
    degreVersRad(deg){
        return Math.PI*(deg)/180
    }
}

module.exports = CalculDistance