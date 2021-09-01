'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalle_listas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaCreacion: {
        type: Sequelize.DATE
      },
      numeroProductos: {
        type: Sequelize.INTEGER
      },
      listaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
               model: 'lista_productos',
               key: 'id'
        }
      },
      productoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
               model: 'productos',
               key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detalle_listas');
  }
};