var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productosSchema = new Schema({
	'productoNombre' : String,
	'productoCodigo' : String,
	'stock' : String,
	'precio' : String
});

module.exports = mongoose.model('productos', productosSchema);
