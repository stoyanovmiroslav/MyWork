const router = require('express').Router();
const controllers = require('../controllers');
const authorize = require('../utils/autorize');
const validator = require('../utils/validator')

router.get('/create', controllers.expense.create.get);
router.post('/create', validator.expense, controllers.expense.create.post);

router.get('/report/:reportId', controllers.expense.report.get);

router.get('/stop/:reportId', controllers.expense.stop.get);


module.exports = router;