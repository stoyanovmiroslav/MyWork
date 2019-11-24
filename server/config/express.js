const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const authenticate = require('../utils/authenticate');

module.exports = (app) => {
    app.engine('hbs', handlebars({
        layoutsDir: 'views',
        defaultLayout: 'layout',
        partialsDir: 'views/partials',
        extname: 'hbs'
    }));

    app.use(express.static('./static'));

    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(authenticate());
};