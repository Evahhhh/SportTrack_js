var express = require("express");
const User = require('../model/User');
var router = express.Router();
var user_dao = require("../sport-track-db/sport-track-db").user_dao;

//afficher tous les users de la bdd
router.get("/", function (req, res, next) {
  res.render("users", { title: "Inscription" });
});

router.post("/", function (req, res, next) {
  try{
    var email = req.body.mail;                  //récupérer le mail du mail entré dans le formulaire
    user_dao.findByEmail(email).then((rows)=> {  //Rescence tout les user par id
      if(rows && Object.values(rows)) {
        res.render('error', {message: "L'email existe déjà", error: {status: 500, stack: "L'email existe déjà"}});
      } else {
        var us = new User();
        us.init(123,req.body.nom,req.body.prenom,req.body.datenaiss,req.body.sexe,
                parseInt(req.body.taille),parseInt(req.body.poids),email,req.body.mdp);
        user_dao.insert(us,us.toTab());
        
        res.render('user_add_valid');
      }
    });
  }catch(error){
    console.error(error);
  }
});

module.exports = router;