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
      await queryInterface.bulkInsert('usuarios', [{
          nombre: 'Nombre usuario '+i,
          apellido: 'Apellido usuario '+i,
          fechaNacimiento: new Date(),
          pais: "Pais",
          ciudad: "Ciudad",
          direccion: "Dirección usuario" +i,
          telefono: "Teléfono usuario" +i,
          correo: "usuario"+i+"@gmail.com",
          contrasenia: "usuario"+i,
          rolId: 1,
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
