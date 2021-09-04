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
  let correo = req.body.correo;
  let password =  req.body.password;

  

  //console.log(name);

  (async()=>{
    const listas = await user.create({ nombre: name, apellido: lastName, fechaNacimiento: new Date(), pais: "Ecuador", ciudad: "Seleccione una", teléfono: "Ingrese teléfono", correo: correo, contrasenia: password, rolId: 1 })

    res.redirect('http://localhost:4200/')
})();

});

module.exports = router;
