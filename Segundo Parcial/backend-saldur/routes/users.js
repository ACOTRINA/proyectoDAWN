var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
const user = require('../models').usuario;

var bd = '';
  

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
    console.log(bd)
     if (req.session && req.session.usuario === bd)
       return next();
     else
       return res.sendStatus(401);
  };

/* GET users listing. */
router.get('/', auth, function(req, res, next) {
  res.redirect("http://localhost:4200/user");
});

router.get('/admin', auth, function(req, res, next){
  res.redirect("http://localhost:4200/admin");
})

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
  bd = req.body.user;
  user.findAll({
    attributes: { exclude: [ "updatedAt"] }
  })
  .then(usuarios => {

  let contraseniabd;
  let usuario = req.body.user;
  let contrasenia = req.body.password;
  let rol = '';
    for(let usuario1 of usuarios){
      if(usuario1['correo'] == usuario){
        contraseniabd = usuario1['contrasenia'];
        rol = usuario1['rolId']

      }
    }

   //Validación
    if(contraseniabd == contrasenia && rol == '1') {
      //res.cookie('usuario', usuario, {expire: new Date() + 9999});
      req.session.usuario = usuario;
      res.redirect('/users');
    }else if(contraseniabd == contrasenia && rol == '2') {
      req.session.usuario = usuario;
      res.redirect('/users/admin');

    }else {
      //res.cookie('usuario', '', {expires: new Date(0)});
      req.session = null;
      res.redirect('http://localhost:4200/login')
    }
  })
  .catch(error => res.status(400).send(error))

});

module.exports = router;
