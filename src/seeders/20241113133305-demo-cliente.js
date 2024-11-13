"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "clientes",
      [
        {
          id: 1,
          nomeCompleto: "Vinicius Souza do Espirito Santo",
          telefone: "1199999999",
          email: "vinicius@gmail.com",
          enderecoPrincipal: "Vila Olimpia",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};
