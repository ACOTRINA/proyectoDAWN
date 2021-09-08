var express = require('express');
var router = express.Router();

const tipo = require('../models').tipo;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/tipo', function(req, res, next){
    tipo.findAll({

    })
    .then(tipos => {
      res.send(tipos);
    })
})
module.exports = router;
