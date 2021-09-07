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
     for (let i = 0; i <10; i++) {
      await queryInterface.bulkInsert('Productos', [{
          nombre: 'Hidraulico '+i,
          codigo: 10+i,
          tipo: "caneca",
          imagen: "./subidas/lbYGe94zfIybfgprEVZy6mvL.jpg",
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
