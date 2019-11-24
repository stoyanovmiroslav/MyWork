const { check, body } = require('express-validator');

module.exports = {
    user: {
        login: [
            check('username', 'The username should be at least 4 characters long and should consist only english letters and digits')
                .isLength({ min: 4 })
                .isAlphanumeric(),

            check('password', 'The password should be at least 8 characters long')
                .isLength({ min: 8 })
                .isAlphanumeric(),
        ],

        register: [
            check('username', 'Username should be at least 4 characters long and should consist only english letters and digits')
                .isLength({ min: 4 })
                .isAlphanumeric(),

            check('password', 'Password should be at least 8 characters long')
                .isLength({ min: 8 })
                .isAlphanumeric(),

            check('repeatPassword')
                .isLength({ min: 8 })
                .isAlphanumeric()
                .withMessage('Repeat Password should be at least 8 characters long')
                .custom((value, { req }) => {
                    const { password } = req.body;
                    return value == password;
                })
                .withMessage('Passwords does not match!'),

            check('amount', 'Amount should be number')
                .isNumeric(),

            check('amount', 'Amount min value is 0')
                .custom((value, { req }) => value >= 0 && value < 1000)
        ]
    },

    expense: [
        check('merchant', 'Merchant should be at least 4 characters long')
            .isLength({ min: 4 }),

        check('total', 'Total should be positive number')
            .isNumeric()
            .custom((value) => value >= 0),

        check('category', 'Category field is requered!').exists(),

        check('description', 'Description should be minimum 10 characters long and 50 characters maximum!')
            .isLength({ min: 10, max: 50 }),
    ],

    refill: [
        check('amount', 'Amount should be positive number')
            .isNumeric()
            .custom((value) => value >= 0),
    ]
};