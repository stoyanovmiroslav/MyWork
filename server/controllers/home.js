const config = require('../config/config');
const models = require('../models');
const { validationResult } = require('express-validator');

module.exports = {
    index: {
        get: (req, res, next) => {
            const viewModel = { pageTitle: 'Home Page' };
            if (!req.user) {
                return res.render('home.hbs', viewModel);
            }

            models.expenses.find({ user: req.user.id }).then((expenses) => {
                expenses.forEach(expense => { expense.localDate = expense.date.toLocaleString() });

                res.render('home.hbs', { pageTitle: 'Home Page', expenses, username: req.user.username });
            })
        }
    },

    refill: {
        post: (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                models.expenses.find({ user: req.user.id }).then((expenses) => {

                    expenses.forEach(expense => { expense.localDate = expense.date.toLocaleString() });
                    return res.render('home.hbs', {
                        pageTitle: 'Home Page',
                        expenses,
                        message: errors.array()[0].msg,
                        username: req.user.username
                    });
                });
            } else {
                const { amount } = req.body;
                models.user.findById(req.user.id).then((user) => {
                    user.amount += +amount;
                    user.save();

                    return res.redirect('/home');
                });

                // const { amount } = req.body;

                // req.user.amount += +amount; 
                // models.user.create(req.user).then(u => {
                //     return res.redirect('/home');
                // });
            }
        }
    }
};