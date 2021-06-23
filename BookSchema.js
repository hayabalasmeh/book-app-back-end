'use strict'



//FIRST: YOU NEED TO CONNECT THE SERVER WITH MONGODB USING MONGOOSE
const mongoose = require('mongoose');
// mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

//SECOND YOU NEED TO CREATE THE SCHEMA 
const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String,
})


module.exports = bookSchema;