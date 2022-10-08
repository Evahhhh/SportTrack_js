var express = require('express');
var router = express.Router();
var user_dao = require('../sport-track-db/sport-track-db').user_dao;
router.get('/', function(req, res, next) {
  user_dao.findAll().then((rows) => {
    res.render('users', { title: 'Users', users: rows });
  }).catch((err) => {
    console.log("ERROR= " +err);
  });
});
module.exports = router;