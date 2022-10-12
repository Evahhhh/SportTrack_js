var express = require('express');
var router = express.Router();
var user_dao = require('../sport-track-db/sport-track-db').user_dao;

//afficher tous les users de la bdd
router.get('/', function(req, res, next) {
  console.log("hey")
  res.render('users'),{ title: 'Inscription' };
});

router.post('/', function(req, res, next) {
  // user_dao.insert(req.body).then((rows) => {
  //   res.redirect('/users');
  // }).catch((err) => {
  //   console.log("ERROR= " +err);
  // });
});

module.exports = router;