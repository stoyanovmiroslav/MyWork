const routers = require('../routers');
const authorize = require('../utils/autorize');

module.exports = (app) => {
    app.use('/api/user', routers.user);

    // app.use('/', routers.home);
    // app.use('/home', routers.home);
    // app.use('/expense', authorize(), routers.expense);
};