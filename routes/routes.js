/*
routes.js:
- Handles requests
- Creates records on database
*/

//Import sequelize
const db = require('../db');
const { Lead } = db.models;
const { Op } = db.Sequelize;

//Import express module
const express = require('express');
//Create router object
const router = express();

//.......Routes.......//

//Redirects to /books route
router.get('/',(req,res) =>{
   res.render('error')
})
//Shows the full list of books by querying all the records from the database
router.get('/books',(req,res) =>{

});
//Shows the create new book form
router.get('/books/new',(req,res) =>{

});
//Post a new book to the database
router.post('/books/new',(req,res) =>{

});
//Shows books detail form
router.get('/books/:id',(req,res) => {

})
//Updates book info in the database
router.post('/books/:id',(req,res) => {

})
//Deletes a book
router.post('/books/:id/delete',(req,res) => {

})


module.exports = router;