/*
routes.js:
- Handles requests
- Creates records on database
*/

//Import sequelize
const db = require('../db');
const { Book } = db.models;
const { Op } = db.Sequelize;

//Import express module
const express = require('express');
//Create router object
const router = express();

let createOrError;

//Create Database records
async function create(title,author,genre,year){
   await db.sequelize.sync({ force: false });
 
   try {
    await Book.create({
        title: title,
        author: author, 
        genre: genre,
        year: year
     });
 
   } 
   //Error Handling
   catch (error) {
     if (error.name === 'SequelizeValidationError') {
       const errors = error.errors.map(err => err.message);
       console.error('Validation errors: ', errors);
       createOrError = errors;
       return errors;
     } else {
       throw error;
     }
   }
 };
 


//.......Routes.......//

//Redirects to /books route
router.get('/',(req,res) =>{
   res.redirect('/books');
})

//Shows the full list of books by querying all the records from the database
router.get('/books', async (req,res) =>{
   const books = await Book.findAll();
   res.render('index',{bookss:books});
});

//Shows the create new book form
router.get('/books/new',(req,res) =>{
   res.render('new-book');
});

//Post a new book to the database
router.post('/books/new',async (req,res) =>{
   const title = req.body.title;
   const author = req.body.author;
   const genre = req.body.genre;
   const year = req.body.year;
   //does not proceed until asynchronus operation has ended
   await create(title,author,genre,year);
   console.log(createOrError)
   if(createOrError === undefined){
      res.redirect('/books')   }
   else{
      res.render('new-book',{oops:'Oooops!',
      err1:createOrError[0],
      err2:createOrError[1],
      genre:genre,
      year:year
   });
     createOrError = undefined;
   }
});

//Shows books detail form
router.get('/books/:id',async (req,res) => {
   const id = req.params.id; //dynamic id
   const book = await Book.findByPk(id);
   //Render book only if it was returned from database
   if(book != null){
      res.render('update-book',{bookk:book});
    }
   else{
      res.render('error');
      console.log('Sorry, that book does not exists on the database')
   }
})

//Updates book info in the database
router.post('/books/:id',async (req,res) => {
   const id = req.body.id;
   console.log(id)
   const title = req.body.title;
   const author = req.body.author; 
   const genre = req.body.genre;
   const year =  req.body.year;
   await Book.update({
       title: title,
       author: author,
       genre: genre,
       year: year
   },{where:{id:id}});
   res.redirect('/books')
})

//Deletes a book
router.post('/books/:id/delete', async (req,res) => {
   const id = req.body.id;
   const title = req.body.title;
   const author = req.body.author; 
   const genre = req.body.genre;
   const year =  req.body.year;
   await Book.destroy(
      { 
        where:{id:id} 
      });
   res.redirect('/books')
})


module.exports = router;