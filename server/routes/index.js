const router = require('express').Router();

const usersApiRouter = require('./api/users.api.routes');
const productsApiRouter = require('./api/products.api.routes');
const authApiRouter = require('./api/auth.api.routes');

router.use('/api/users', usersApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/products', productsApiRouter);

module.exports = router;
