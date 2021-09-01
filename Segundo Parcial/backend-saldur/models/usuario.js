'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.rol)
    }
  };
  usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: "usuarios"
  });
  return usuario;
};