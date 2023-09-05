const { Product } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Product.bulkCreate([
      {
        title: 'СОСЕД ПО ДАЧЕ',
        discription:
          'Бургер с сочной котлетой из мраморной говядины, со свежим хрустящим огурцом, редисом, зеленью и листьями салата латук, с соусом чесночный ранч',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
      {
        title: 'ЧИЗБУРГЕР',
        discription:
          'булка для бургера белая, бургер из говядины 155 гр., соус Коктейльный, салат Латук свежий, помидоры свежие, ломтик сыра Чеддер, огурцы маринованные, соус сырный, специи: соль и перец, дроблёный',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
      {
        title: 'ЭЙЧ',
        discription:
          'Котлета из мраморной говядины, слайсы стейка из мраморной говядины, говяжий бекон, перец халапеньо, карамелизированный лук, соус ягодный барбекю.Подается со свежим хрустящим огурцом',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
      {
        title: 'ГАМБУРГЕР',
        discription:
          'булка для бургера белая, бургер из говядины 155 гр., соус Коктейльный, салат Латук свежий, помидоры свежие, огурцы маринованные, специи: соль и перец чёрный- дроблёный',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
      {
        title: 'КОРПОРАТИВ',
        discription:
          'Булка белая для бургера, бургер из говядины 155 гр., соус Барбекю, салат Латук свежий зелёный, помидоры свежие, огурцы маринованные, сыр Чеддер ломтик, соус сырный, бекон из мраморной говядины, специи: соль и перец черный дроблёный',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
      {
        title: 'БЛЮ ЧИЗ БУРГЕР',
        discription:
          'булка для бургера белая, бургер из говядины 155гр., соус Коктейльный, салат Латук свежий, помидоры свежие, огурцы маринованные, сыр Дор-Блю – с голубой плесенью, специи: соль и перец чёрный-дроблёный',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
      {
        title: 'ГОРЯЧАЯ ЦЫПА',
        discription:
          'булка для бургера, стейк классический в маринаде- филе куриной грудки в пшеничной панировке и льезоне, обжаренное во фритюре, салат Латук свежий, помидоры свежие , соус Майонез домашний, соус Чили сладкий, соус Хойсин – азиатский; салат Коул Слоу – из свежей капусты с морковью и зелёным укропом, заправленный домашним майонезом',
        img: 'https://gurmanoff.ru/assets/images/infografika/burger-lajt1.jpg',
        price: 400,
        weight: 350,
      },
    ]);
  },

  async down() {
    await Product.destroy({ where: {} });
  },
};
