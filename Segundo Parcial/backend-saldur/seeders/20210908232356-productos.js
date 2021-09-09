'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     for (let i = 1; i <6; i++) {
      await queryInterface.bulkInsert('Productos', [{
          nombre: 'Producto'+ i,
          codigo: 10+i,
          presentacion: "Caneca",
          tipoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
    }
    for (let i = 6; i <11; i++) {
      await queryInterface.bulkInsert('Productos', [{
          nombre: 'Producto'+ i,
          codigo: 20+i,
          presentacion: "Tanque",
          tipoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
 }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
