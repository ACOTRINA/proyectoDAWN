var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
const user = require('../models').usuario;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save', function(req, res, next){
  let name = req.body.nombre;
  let lastName = req.body.apellido;
  let usuario = req.body.usuario;
  

  //console.log(name);

  
  user.create({ nombre: name, apellido: lastName, fechaNacimiento: fech})
  .then(function(){
    res.redirect('http://localhost:4200/clientes')
  })

});

module.exports = router;
