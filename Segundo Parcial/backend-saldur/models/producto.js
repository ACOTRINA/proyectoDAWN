'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  producto.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    imagen: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};