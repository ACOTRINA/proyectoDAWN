var express = require('express');
var router = express.Router();
const multipart = require('connect-multiparty');  
var fs = require('fs');
const sequelize = require("sequelize");
const lista = require('../models').lista_producto;

router.get('/', function(req, res, next) {
    lista.findAll({
         
      })
      .then(listas => {
          res.send(listas)
      })
      .catch(error => res.status(400).send(error))
  });

router.post("/", function(req, res, next) {
    let nombre1= req.body.nombre;

    /*let reader = new FileReader();
    //let cantidad= req.body.cantidad;
    var blob1 = new Blob([new Uint8Array(req.body.imagen)]); 
    const imageUrl = URL.createObjectURL(blob1);  
    console.log(imageUrl);//blob:http://localhost:8100/c489.etc  
    reader.readAsDataURL(new Blob([new Uint8Array(i.imagen.data)])); 
    reader.onloadend = function() {
        base64data = reader.result;     
    }
    this.myFunction(base64data)*/

    
    //{ force: true }
    (async()=>{
        //await sequelize.sync();        
        const listas = await lista.create({
            nombre: nombre1,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        //.then(image =>{
            //fs.writeFileSync(__dirname + '/static/assets/tmp/tmp-jsa-header.png', image.data);		

        //})

        //await usuario.save();
        res.redirect('http://localhost:4200/listas')
})();

});


module.exports = router;
