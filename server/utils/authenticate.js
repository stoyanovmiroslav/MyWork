const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../models');

function authenticate() {
    return function (req, res, next) {
        const token = req.cookies[config.cookie] || '';
        
        Promise.all([ jwt.verifyToken(token) ]).then(([data]) => {
            models.user.findById(data.id).then(user => {
                req.user = user;
                next();
            });
        }).catch(err => {
            next();
        });
    };
}

module.exports = authenticate;