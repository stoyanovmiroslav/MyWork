const models = require('../models');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    create: {
        get: (req, res, next) => {

            const viewModel = {
                pageTitle: 'Create',
                username: req.user.username
            };

            res.render('create.hbs', viewModel);
        },
        post: (req, res, next) => {
            const { merchant, total, category, vault,description, report } = req.body;
            const date = new Date();

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('create.hbs', {
                    message: errors.array()[0].msg,
                    username: req.user.username,
                    merchant, total, category, vault,description, report
                })
            }

            models.expenses.create({ merchant, total, category, vault,description, date, report: !!report, user: req.user.id }).then((createdCourse) => {
                res.redirect('/home/');
            })
        }
    },

    report: {
        get: (req, res, next) => {

            // const viewModel = {pageTitle: 'Report'};
            // return res.render('report.hbs', viewModel);

            const { reportId } = req.params;
            console.log(reportId);

            models.expenses.findById(reportId).then((report) => {
                report.localDate = report.date.toLocaleString();

                const viewModel = {
                    report,
                    pageTitle: 'Report',
                    username: req.user.username                
                }

                return res.render('report.hbs', viewModel);
            }).catch(err => {
                return res.redirect('/notFound')
            });
        }
    },

    stop: {
        get: (req, res, next) => {
            const { reportId } = req.params;

            models.expenses.findByIdAndRemove(reportId).then((removed) => {
                res.redirect('/home/');
            });
        }
    }
};