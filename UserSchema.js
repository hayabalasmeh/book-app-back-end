'use strict'
const bookSchema = require('./BookSchema')


//FIRST: YOU NEED TO CONNECT THE SERVER WITH MONGODB USING MONGOOSE
const mongoose = require('mongoose');
// mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

//SECOND YOU NEED TO CREATE THE SCHEMA 
const userSchema = new mongoose.Schema({
    email: String,
    books: [bookSchema],
})

module.exports = userSchema;