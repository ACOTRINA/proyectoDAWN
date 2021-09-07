
var express = require('express');
var router = express.Router();
const multipart = require('connect-multiparty');  
var fs = require('fs');

const sequelize = require("sequelize");
const Producto = require('../models').producto;

const multipartMiddleware = multipart({  
    uploadDir: './subidas'
});
/*const myFunction=(base64data) => {
    let mySrc = this.sanitizer.bypassSecurityTrustUrl('data:png;base64,' + base64data);
    return mySrc;
  }*/

/* GET productos listing. */
router.get('/', function(req, res, next) {
    Producto.findAll({
         
      })
      .then(productos => {
          res.send(productos)
      })
      .catch(error => res.status(400).send(error))
  });
  //app.get('/:img', function(req, res){
    //res.sendFile( `imagenes/${img}` );
//});
   
  





  module.exports = router;
