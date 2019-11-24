const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const expensesSchema = new Schema({

    merchant : {
        type: String,
        required: true
    },

    //default now
    date : {
        type: Date,
        required: true
    },

    total : {
        type: Number,
        required: true
    },

    category  : {
        type: String,
        required: true
    },
    
    //minimum 10 characters, maximum 50 characters
    description  : {
        type: String,
        required: true
    },

    report   : {
        type: Boolean,
        required: true
    },

    user   : {
        type: ObjectId,
        ref: 'User',
        required: true
    }
});


module.exports = new Model('Expenses', expensesSchema);


// const courseSchema = new Schema({

//     title: {
//         type: String,
//         required: true
//     },

//     description: {
//         type: String,
//         required: true
//     },

//     imageUrl: {
//         type: String,
//         required: true
//     },

//     isPublic: {
//         type: Boolean,
//         required: true
//     },

//     createdAt: {
//         type: Date,
//         required: true
//     },

//     users: [{
//         type: ObjectId,
//         ref: 'User'
//     }],

//     creator: {
//         type: ObjectId,
//         ref: 'User',
//         required: true
//     }

// });