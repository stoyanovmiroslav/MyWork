const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../models');

function authorize() {
    return function (req, res, next) {
        if (!req.user) {
            return res.render("error/unauthorized.hbs", { pageTitle: "Unauthorized" });
        }

        next();
    }
    
    // return function (req, res, next) {
    //     const token = req.cookies[config.cookie] || '';
    //     Promise.all([
    //         jwt.verifyToken(token),
    //     ]).then(([data]) => {
    //         models.user.findById(data.id).then(user => {
    //             req.user = user;
    //             next();
    //         });
    //     }).catch(err => {
    //         res.render("error/unauthorized.hbs", { pageTitle: "Unauthorized" });
    //     });
    // };
};

module.exports = authorize;