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

     for (let i = 0; i <1; i++) {
      await queryInterface.bulkInsert('tipos', [{
          nombre: 'Hidraulico',
          createdAt: new Date(),
          updatedAt: new Date(),
      }], {});
      }

      for (let i = 0; i <1; i++) {
        await queryInterface.bulkInsert('tipos', [{
            nombre: 'Transmision',
            createdAt: new Date(),
            updatedAt: new Date(),
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
