const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    login: {
        get: (req, res, next) => {
            if (req.user) {
                return res.render("error/notFound.hbs", { pageTitle: "Not Found", username: req.user.username });
            }

            return res.render('user/login.hbs', { pageTitle: 'Login Page' });
        },
        post: (req, res, next) => {
            const { username, password } = req.body;

            const viewModel = { pageTitle: 'Login Page', message: 'Invalid username or password!' };

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                viewModel.message = errors.array()[0].msg;

                return res.render('user/login.hbs', viewModel);
            }

            models.user.findOne({ username }).then((user) => {
                if (!user) {
                    return res.render('user/login.hbs', viewModel);;
                }

                Promise.all([user, user.matchPassword(password)])
                    .then(([user, match]) => {
                        if (!match) {
                            return res.render('user/login.hbs', viewModel);
                        }

                        const token = jwt.createToken({ id: user._id });

                        res.cookie(config.cookie, token).redirect('/home/');
                    })
            })
        }
    },

    register: {
        get: (req, res, next) => {
            if (req.user) {
                return res.render("error/notFound.hbs", { pageTitle: "Not Found", username: req.user.username });
            }

            res.render('user/register.hbs', { pageTitle: 'Register' });
        },

        post: (req, res, next) => {
            const { username, password, repeatPassword, amount } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('user/register.hbs', { message: errors.array()[0].msg });
            }

            models.user.findOne({ username }).then((user) => {
                if (user) {
                    return res.render('user/register.hbs', { pageTitle: 'Register', message: 'Username already exists' });
                }

                models.user.create({ username, password, amount }).then((registeredUser) => {
                    const token = jwt.createToken({ id: registeredUser._id });

                    res.cookie(config.cookie, token).redirect('/home/');
                });
            });
        }
    },

    logout: {
        get: (req, res, next) => {
            if (!req.user) {
                res.redirect('/notFouund');
                return;
            }

            res.clearCookie(config.cookie).redirect('/home');
        }
    }
};