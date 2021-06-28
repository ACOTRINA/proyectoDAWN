var express = require('express');
var app = express();

// Para utilizar archivos estáticos (js, css, imágenes)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/index', (req, res) => {
    
    console.log('Ruta absoluta: '+ __dirname)

    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});