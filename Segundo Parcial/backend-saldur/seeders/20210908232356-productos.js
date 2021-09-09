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
     await queryInterface.bulkInsert('Productos', [{
      nombre: 'Hidráulico AW-46',
      codigo: "AW-46",
      presentacion: "Caneca",
      tipoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
        }], {});
        await queryInterface.bulkInsert('Productos', [{
          nombre: 'Hidráulico AW-68',
          codigo: "AW-68",
          presentacion: "Caneca",
          tipoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
      await queryInterface.bulkInsert('Productos', [{
        nombre: 'Hidráulico',
        codigo: "AW-100",
        presentacion: "Tanque",
        tipoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

      await queryInterface.bulkInsert('Productos', [{
          nombre: 'Transmisión',
          codigo: "AW-150",
          presentacion: "Tanque",
          tipoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
      await queryInterface.bulkInsert('Productos', [{
        nombre: 'Transmisión SAE90',
        codigo: "SAE90",
        presentacion: "Tanque",
        tipoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Productos', [{
      nombre: 'SAE 40 CF/SL',
      codigo: "SAE140",
      presentacion: "Caneca",
      tipoId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
      await queryInterface.bulkInsert('Productos', [{
        nombre: 'SAE CF',
        codigo: "SAE200	",
        presentacion: "Tanque",
        tipoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
      await queryInterface.bulkInsert('Productos', [{
        nombre: 'SAE CI-4/SL',
        codigo: "SAE250",
        presentacion: "Caneca",
        tipoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
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
