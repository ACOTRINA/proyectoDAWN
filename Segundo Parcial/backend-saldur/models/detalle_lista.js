'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalle_lista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.producto.belongsToMany(models.lista_producto, {through: this, foreignKey: 'productoId'})
      models.lista_producto.belongsToMany(models.producto, {through: this, foreignKey: 'listaId'})
    }
  };
  detalle_lista.init({
    numeroProductos: DataTypes.INTEGER,
    listaId: DataTypes.INTEGER,
    productoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalle_lista',
  });
  return detalle_lista;
};