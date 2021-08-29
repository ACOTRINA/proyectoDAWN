var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Componentes Correo
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./controllers/configMensaje')
//...................................................

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Correo
app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})
//...................................

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
