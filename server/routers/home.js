const controllers = require('../controllers');
const router = require('express').Router();
const validator = require('../utils/validator');
const authorize = require('../utils/autorize');

router.get('/',  controllers.home.index.get);

router.post('/refill', authorize(), validator.refill, controllers.home.refill.post);

module.exports = router;