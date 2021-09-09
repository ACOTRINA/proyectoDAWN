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
      this.belongsTo(models.tipo)
    }
  };
  producto.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    presentacion: DataTypes.STRING,
    tipoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};