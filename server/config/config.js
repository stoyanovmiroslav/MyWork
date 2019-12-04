const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3001,
        dbURL: 'mongodb://localhost:27017/',
        cookie: 'x-auth-token'
    },
    production: {
        port: process.env.PORT || 3001,
        dbURL: 'mongodb://localhost:27017/',
        cookie: 'x-auth-token'
    }
};

module.exports = config[env];