const router = require('express').Router();
const controllers = require('../controllers');
const validator = require('../utils/validator');
const authorize = require('../utils/autorize');

// router.get('/login', controllers.user.login.get);
// router.post('/login', validator.user.login, controllers.user.login.post);

// router.get('/register', controllers.user.register.get);
router.post('/register', controllers.user.register.post);

// router.get('/logout', controllers.user.logout.get);

module.exports = router;