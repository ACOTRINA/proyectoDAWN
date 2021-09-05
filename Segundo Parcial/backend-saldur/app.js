var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Componentes Correo
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./controllers/configMensaje')
const multipart = require('connect-multiparty'); 
//...................................................

//componentes sesiones
var cookieSession = require('cookie-session');
//...................................................

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require("./routes/productos");
var listasRouter = require("./routes/listas");

var app = express();

//Correo
app.use(bodyParser.json());
app.use(cors())
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})
//...................................

//sesion
app.use(cookieSession({
    name: 'session',
    keys: ['DAWM'],
    
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/productos", productosRouter);
app.use("/listas", listasRouter);

module.exports = app;
