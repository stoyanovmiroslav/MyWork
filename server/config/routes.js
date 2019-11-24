const routers = require('../routers');
const authorize = require('../utils/autorize');

module.exports = (app) => {
    app.use('/', routers.home);

    app.use('/home', routers.home);

    app.use('/user', routers.user);

    app.use('/expense', authorize(), routers.expense);

    app.use('*', (req, res, next) => {
        res.render('error/notFound.hbs', { pageTitle: 'Not Found' });
    })
};