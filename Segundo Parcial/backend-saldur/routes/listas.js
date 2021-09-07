var express = require('express');
var router = express.Router();
//const multipart = require('connect-multiparty');  
var fs = require('fs');
//const sequelize = require("sequelize");
const lista = require('../models').lista_producto;
const usuario = require('../models').usuario;
var idusuario = '';
router.get('/', function(req, res, next) {
    
    lista.findAll({
        include: [{ model: usuario }],
      })
      .then(listas => {
          res.send(listas)
      })
      .catch(error => res.status(400).send(error))
  });

router.post("/", function(req, res, next) {
    let nombre1= req.body.nombre;


    (async()=>{
        const listas = await lista.create({
            nombre: nombre1,
            usuarioId: idusuario,
            createdAt: new Date(),
            updatedAt: new Date()
        })

        res.redirect('http://localhost:4200/user/listas')
})();

});


module.exports = router;
