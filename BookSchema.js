'use strict'



//FIRST: YOU NEED TO CONNECT THE SERVER WITH MONGODB USING MONGOOSE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});

//SECOND YOU NEED TO CREATE THE SCHEMA 
const bookSchema = new mongoose.Schema({
    name:String,
    description:String,
    status:String,
    })
    
  
module.exports =  bookSchema;  