'use strict'

require('dotenv').config;
const express = require('express');
const cors = require('cors');
const bookSchema = require('./BookSchema');
const userSchema = require('./UserSchema');
const userModel = require('./userModel')

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3031;

//FIRST: YOU NEED TO CONNECT THE SERVER WITH MONGODB USING MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(`mongodb://hayabalasmeh:1234@cluster0-shard-00-00.svu8n.mongodb.net:27017,cluster0-shard-00-01.svu8n.mongodb.net:27017,cluster0-shard-00-02.svu8n.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-lh448p-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

//SECOND YOU NEED TO CREATE THE SCHEMA 
// const bookSchema = new mongoose.Schema({
// name:String,
// description:String,
// status:String,
// })

// const userSchema = new mongoose.Schema({
//     email: String,
//     books: [bookSchema],
// });

//THIRD YOU NEED TO CREATE THE MODEL
// const bookModel = mongoose.model('book',bookSchema);// the name of the model will apear in the terminal 

// const userModel= mongoose.model('user',userSchema);

//FOURTH YOU NEED TO ADD THE DATA
// function seedBookCollection (){
//     const harry= new bookModel({
//      name:'Harry Potter and the Philosopher’s Stone',
//      description:'Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world.',
//      status:'available'
//     })
//     const pride = new bookModel({
//         name:'Pride and Prejudice, by Jane Austen',
//         description:'One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.',
//         status:"available"
//     })
//     const hobbit = new bookModel({
//         name:'The Hobbit, by J.R.R. Tolkien',
//         description:'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
//         status:'available'
//     })
//     harry.save();
//     pride.save();
//     hobbit.save();
// }
// seedBookCollection();


// function seedUserCollection (){
//     const firstUser = new userModel({
//         email:'hmbalasmeh@yahoo.com',
//         books: [
//             {
//                 name:'Harry Potter and the Philosopher’s Stone',
//                 description:'Join Harry Potter as he begins his journey into the world of magic, where he is the celebrated Boy Who Lived. Visit Hogwarts, meet your favourite characters and watch Harry grow into the one of the most famous literary characters in the world.',
//                 status:'available'

//             },
//             {
//                 name:'Pride and Prejudice, by Jane Austen',
//                 description:'One of the most famous novels of all time, Pride And Prejudice details the courtship of two opposed characters in a world where manners and courtesy are of the utmost importance.',
//                 status:"available"
//             },
//             {
//                 name:'The Hobbit, by J.R.R. Tolkien',
//                 description:'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
//                 status:'available'
//             }

//         ]
//     })
//     const secondUser = new userModel({
//         email:'sally.ammous@gmail.com',
//         books:[
//             {
//                 name:'Little Women, by Louisa May Alcott',
//                 description:'Join four sisters, each with their own prominent personality, as they come of age in charming 19th Century New England. Experience their struggles and revel in their flaws, as these girls become strong women.',
//                 status:'available'

//             },
//             {
//                 name:'Enough Already: Create Success on Your Own Terms by Mike Iamele',
//                 description:'Enough Already is a battle cry for the success seekers who are fed up trying to achieve someone else’s definition of success. Broken up into 12 steps, the book follows a journey through the 12 aspects of creating success on your own terms with homework and challenges at the end of each chapter to implement the work into your life immediately.By the end of the book, you’ll have a completed strategic plan to step up into the world and go after even some of your biggest dreams knowing that you are enough already.',
//                 status:"available"
//             },
//             {
//                 name:'The Hobbit, by J.R.R. Tolkien',
//                 description:'Although the movies are inexplicably long, The Hobbit was originally written as a short children’s book. Meet your favourite characters for the first time as the unforgettable Bilbo Baggins traverses the harsh landscapes of Middle Earth to challenge a dragon.',
//                 status:'available'
//             }
//         ]
//     })
//     firstUser.save();
//     secondUser.save();
// }

// seedUserCollection();








//http://localhost:3031/ hoom root
app.get('/', handleingHome);

function handleingHome(req, res) {
    res.send('Hello requester I am ready');
}
//http://localhost:3031/books?email=
app.get('/books', handleingProof);
app.post('/addbooks', handleingPost);
//http://localhost:3031/deletebooks/1?email=
app.delete('/deletebooks/:index', handelingdelete);
//http://localhost:3031/updatebook/3
app.put('/updatebook/:index', handleingUpdate);


function handleingProof(req, res) {
    let emailAdress = req.query.email;
    userModel.find({ email: emailAdress }, function (err, userData) {
        if (err) {
            res.send('Oops , something went error')
        } else {
            res.send(userData[0].books);
        }
    })


}
function handleingPost(req, res) {
    let newBook = req.body.book;
    let newEmail = req.body.email;

    userModel.find({ email: newEmail }, function (err, userData) {
        if (err) {
            res.send(err.message)
        } else {
            userData[0].books.push(newBook);
            userData[0].save();
            res.send(userData[0].books)
            // userData.books
        }
    })

}

function handelingdelete(req, res) {
    let newIndex = req.params.index;
    let newEmail = req.query.email;
    userModel.find({ email: newEmail }, function (err, userData) {
        if (err) {
            res.send(err.message)

        }
        else {
            userData[0].books.splice(newIndex, 1);
            userData[0].save();
            res.send(userData[0].books);
        }
    })

}

function handleingUpdate(req, res) {
    let newIndex = req.params.index;
    let updateBook = req.body.book;
    let newEmail = req.body.email;
    userModel.find({ email: newEmail }, function (err, userData) {
        if (err) {
            res.send(err.message)

        }
        else {

            userData[0].books.splice(newIndex, 1, updateBook);
            console.log(userData[0].books)
            userData[0].save();
            res.send(userData[0].books)
        }
    })
}




app.get('*', (req, resp) => {
    resp.send('error not found')
})
//LISTENING TO THE PORT
app.listen(PORT, () => {
    console.log(`listening to u :)`);
})

