'use strict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
const userSchema = require('./UserSchema')
const userModel= mongoose.model('user',userSchema);


function seedUserCollection (){
    const firstUser = new userModel({
        email:'hmbalasmeh@yahoo.com',
        books: [
            {
                name:'Harry Potter and the Philosopher’s Stone',
                description:'Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world.',
                status:'available'

            },
            {
                name:'Pride and Prejudice, by Jane Austen',
                description:'One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.',
                status:"available"
            },
            {
                name:'The Hobbit, by J.R.R. Tolkien',
                description:'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
                status:'available'
            }

        ]
    })
    const secondUser = new userModel({
        email:'sally.ammous@gmail.com',
        books:[
            {
                name:'Little Women, by Louisa May Alcott',
                description:'Join four sisters, each with their own prominent personality, as they come of age in charming 19th Century New England. Experience their struggles and revel in their flaws, as these girls become strong women.',
                status:'available'

            },
            {
                name:'Enough Already: Create Success on Your Own Terms by Mike Iamele',
                description:'Enough Already is a battle cry for the success seekers who are fed up trying to achieve someone else’s definition of success. Broken up into 12 steps, the book follows a journey through the 12 aspects of creating success on your own terms with homework and challenges at the end of each chapter to implement the work into your life immediately.By the end of the book, you’ll have a completed strategic plan to step up into the world and go after even some of your biggest dreams knowing that you are enough already.',
                status:"available"
            },
            {
                name:'The Hobbit, by J.R.R. Tolkien',
                description:'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
                status:'available'
            }
        ]
    })
    firstUser.save();
    secondUser.save();
}

module.exports= userModel;