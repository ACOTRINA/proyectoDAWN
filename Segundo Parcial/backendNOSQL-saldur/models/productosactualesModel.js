var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productosactualesSchema = new Schema({
	'productos' : Array
});

module.exports = mongoose.model('productosactuales', productosactualesSchema);
