const { User } = require('../models');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'Admin',
        email: 'Admin_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
        isAdmin: true,
      },
      {
        name: 'Anton',
        email: 'anton_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
        
      },
      {
        name: 'Andrey',
        email: 'Andrey_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
      },
      {
        name: 'Valeron',
        email: 'Valeron_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
      },
      {
        name: 'Rustam',
        email: 'Rustam_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
      },
    ]);
  },

  async down() {
    await User.destroy({ where: {} });
  },
};
