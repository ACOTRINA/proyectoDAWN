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
     /*for (let i = 0; i <10; i++) {
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
    }*/
      for (let i = 0; i <1; i++) {
        await queryInterface.bulkInsert('usuarios', [{
            nombre: 'Nombre admin ',
            apellido: 'Apellido admin ',
            fechaNacimiento: new Date(),
            pais: "Pais",
            ciudad: "Ciudad",
            direccion: "Dirección admin",
            telefono: "Teléfono admin",
            correo: "admin@gmail.com",
            contrasenia: "admin",
            rolId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    }
    await queryInterface.bulkInsert('usuarios', [{
      nombre: 'Diana',
      apellido: 'Ramirez ',
      fechaNacimiento: new Date(),
      pais: "Ecuador",
      ciudad: "Guayaquil",
      direccion: "Dirección Diana",
      telefono: "Teléfono Diana",
      correo: "diana@gmail.com",
      contrasenia: "diana",
      rolId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  
  await queryInterface.bulkInsert('usuarios', [{
    nombre: 'Ronny',
    apellido: 'Andrade',
    fechaNacimiento: new Date(),
    pais: "Ecuador",
    ciudad: "Guayaquil",
    direccion: "Dirección Ronny",
    telefono: "Teléfono Ronny",
    correo: "ronny@gmail.com",
    contrasenia: "ronny",
    rolId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  await queryInterface.bulkInsert('usuarios', [{
    nombre: 'Ricardo',
    apellido: 'Salazar',
    fechaNacimiento: new Date(),
    pais: "Ecuador",
    ciudad: "Guayaquil",
    direccion: "Dirección Ricardo",
    telefono: "Teléfono Ricardo",
    correo: "ricardo@gmail.com",
    contrasenia: "ricardo",
    rolId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('usuarios', [{
      nombre: 'Arlette',
      apellido: 'Cotrina',
      fechaNacimiento: new Date(),
      pais: "Ecuador",
      ciudad: "Guayaquil",
      direccion: "Dirección Arlette",
      telefono: "Teléfono Arlette" ,
      correo: "arlette@gmail.com",
      contrasenia: "arlette",
      rolId: 1,
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
