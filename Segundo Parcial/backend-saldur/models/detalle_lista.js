'use strict';
const {
  Model
} = require('sequelize');
const lista_productos = require('./lista_producto');
const producto = require('./producto');
module.exports = (sequelize, DataTypes) => {
  class detalle_lista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.producto.belongsToMany(models.lista_producto, {through: this})
      models.lista_producto.belongsToMany(models.producto, {through: this})
      //this.belongsTo(models.producto);
      //this.belongsTo(models.lista_Productos);

      
    }
  };
  detalle_lista.init({
    fechaCreacion: DataTypes.DATE,
    numeroProductos: DataTypes.INTEGER,
    listaId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalle_lista',
    tableName: "detalle_listas"
  });
  return detalle_lista;
};