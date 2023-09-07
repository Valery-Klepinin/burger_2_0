const router = require('express').Router();
const { Product, ProdOrder, Order } = require('../../db/models');

router

  .get('/', async (req, res) => {
    try {
      const order = await Order.findOne({
        where: { user_id: req.session.user_id, status: false },
        include: [{ model: ProdOrder, include: [{ model: Product }] }],
      });
      console.log(order);
      // const order = await Order.findOne({ where: { user_id: req.session.user_id, status: false } });
      // const prodOrders = await ProdOrder.findAll({ where: { order_id: order.id } });
      const products = order.ProdOrders.map((el) => el.Product);
      res.json(products);
    } catch ({ message }) {
      res.json({ message });
    }
  })

  .post('/', async (req, res) => {
    try {
      const { id, count } = req.body;

      const order = await Order.findOne({
        where: { user_id: req.session.user_id, status: false },
      });
      let prodOrder;
      if (order) {
        prodOrder = await ProdOrder.findOne({
          where: { order_id: order.id, product_id: id },
        });
        prodOrder
          ? await prodOrder.increment('count', { by: count })
          : await ProdOrder.create({ order_id: order.id, product_id: id, count: count });
      } else {
        const newOrder = await Order.create({ user_id: req.session.user_id, status: false });
        prodOrder = await ProdOrder.create({ order_id: newOrder.id, product_id: id, count: count });
      }

      res.json(prodOrder);
    } catch ({ message }) {
      res.json({ message });
    }
  });

module.exports = router;
