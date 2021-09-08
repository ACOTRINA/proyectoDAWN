var express = require('express');
var router = express.Router();
//const multipart = require('connect-multiparty');  
var fs = require('fs');
//const sequelize = require("sequelize");
const lista = require('../models').lista_producto;
const producto = require('../models').producto;
const detalle = require('../models').detalle_lista;


router.get('/', function(req, res, next){
    //let idlista = req.body.idlista;
  
    detalle.findAll({

      attributes: { exclude: [ "updatedAt", "createdAt"] },
      //include: [{ model: producto, lista }],
  
  
    })
    .then(detalles => {
      res.send(detalles);
    })
    .catch(error => res.status(400).send(error))
  
  
      //res.redirect("http://localhost:4200/admin/" + idusuario);
  
  
  });


  module.exports = router;
