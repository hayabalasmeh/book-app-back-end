'use strict'

const mongoose = require('mongoose');
// mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = require('./BookSchema');
const bookModel = mongoose.model('book', bookSchema);

function seedBookCollection() {
    const harry = new bookModel({
        name: 'Harry Potter and the Philosopher’s Stone',
        description: 'Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world.',
        status: 'available'
    })
    const pride = new bookModel({
        name: 'Pride and Prejudice, by Jane Austen',
        description: 'One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.',
        status: "available"
    })
    const hobbit = new bookModel({
        name: 'The Hobbit, by J.R.R. Tolkien',
        description: 'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
        status: 'available'
    })
    harry.save();
    pride.save();
    hobbit.save();
}

module.exports = seedBookCollection