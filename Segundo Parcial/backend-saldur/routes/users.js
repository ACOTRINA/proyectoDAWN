var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
const user = require('../models').usuario;

let bd = {
  'usuario': 'abc@example.com',
  'contrasenia': '123'
  }

  router.get('/listausuarios', function(req, res, next){
    user.findAll({
      attributes: { exclude: [ "updatedAt"] }
    })
    .then(usuarios => {
      res.send(usuarios);
    })
    .catch(error => res.status(400).send(error))

  });
  
  var auth = function(req, res, next) {
     if (req.session && req.session.usuario === bd['usuario'])
       return next();
     else
       return res.sendStatus(401);
  };

/* GET users listing. */
router.get('/', auth, function(req, res, next) {
  res.redirect("http://localhost:4200/user");
});

router.post('/save', function(req, res, next){
  let name = req.body.nombre;
  let lastName = req.body.apellido;
  let correo = req.body.correo;
  let password =  req.body.password;

  (async()=>{
    const listas = await user.create({ nombre: name, apellido: lastName, fechaNacimiento: new Date(), pais: "Ecuador", ciudad: "Seleccione una", teléfono: "Ingrese teléfono", correo: correo, contrasenia: password, rolId: 1 })

    res.redirect('http://localhost:4200/')
})();

});



router.post('/validate', function(req, res, next) {
  let usuario = req.body.user;
  let contrasenia = req.body.password;

  //Validación
  if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {
    //res.cookie('usuario', usuario, {expire: new Date() + 9999});
    req.session.usuario = usuario;
    res.redirect('/users');
  } else {
    //res.cookie('usuario', '', {expires: new Date(0)});
    req.session = null;
    res.redirect('http://localhost:4200/login')
  }

});

module.exports = router;
