const router = require('express').Router();
const { Product } = require('../../db/models');

router
  .get('/', async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch ({ message }) {
      res.json({ message });
    }
  })
  .post('/', async (req, res) => {
    try {
      const { title, img, description, price, weight } = req.body;
      const newProduct = await Product.create({
        title,
        img,
        description,
        price,
        weight,
        user_id: 1,
      });
      res.json(newProduct);
    } catch ({ message }) {
      res.json({ message });
    }
  })
  .put('/:productId', async (req, res) => {
    try {
      const { title, img, description, price, weight} = req.body;
      const product = await Product.findOne({ where: { id: req.params.productId } });
      product.title = title;
      product.img = img;
      product.description = description;
      product.price = price;
      product.weight = weight;
      await product.save();
      res.json(product);
    } catch ({ message }) {
      res.json({ message });
    }
  })
  .delete('/:productId', async (req, res) => {
    try {
      const result = await Product.destroy({ where: { id: req.params.productId } });
      if (result > 0) {
        res.json(+req.params.productId);
        return;
      }
      res.json({ message: 'false' });
    } catch ({ message }) {
      res.json({ message });
    }
  });

module.exports = router;
