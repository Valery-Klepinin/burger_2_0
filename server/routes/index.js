const router = require('express').Router();

const usersApiRouter = require('./api/users.api.routes');
const productsApiRouter = require('./api/products.api.routes');
const authApiRouter = require('./api/auth.api.routes');
const busketApiRouter = require('./api/busket.api.routes');
router.use('/api/users', usersApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/products', productsApiRouter);
router.use('/api/basket', busketApiRouter);
module.exports = router;
               