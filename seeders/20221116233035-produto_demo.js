'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [{
      nome: 'Samsung Galaxy M23 5G',
      preco: 1399.99,
      descricao: 'Celular',
      url_image: 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-m236blblzto/gallery/br-galaxy-m23-5g-sm-m236-422397-sm-m236blblzto-532184094?$650_519_PNG$',
      createdAt: new Date(),
      updatedAt: new Date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {})
  }
};
