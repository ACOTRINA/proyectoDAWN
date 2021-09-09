
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
   
  
  router.post("/", multipartMiddleware,(req,res,next)=>{
    
    let nombre1= req.body.nombre;
    let codigo1 = req.body.codigo;
    let presentacion1 = req.body.presentacion;
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
        console.log("alch")
        
        const producto = await Producto.create({
            codigo: codigo1,
            nombre: nombre1,
            presentacion: presentacion1,
            tipoId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        //.then(image =>{
            //fs.writeFileSync(__dirname + '/static/assets/tmp/tmp-jsa-header.png', image.data);		

        //})

        //await usuario.save();
        res.redirect('http://localhost:4200/')
       
    })();
    
    


});




  module.exports = router;
