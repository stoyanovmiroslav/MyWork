const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const authenticate = require('../utils/authenticate');

module.exports = (app) => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(express.static('./static'));

    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(bodyParser.json())

    app.use(authenticate());
};