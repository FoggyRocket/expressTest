const express = require('express');
const router  = express.Router();
const Book = require('../models/Book.js')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books',(req,res,next)=>{
  Book.find().then(books=>{
    console.log('Cuantos libros',books)
    res.render('books',{books})
  }).catch(err=>console.log('el erro en find es:',err))
  
})

router.get('/books/:bookId', (req, res, next) => {
  let {bookId} = req.params

  Book.findById(bookId)
  .then(theBook => {
    console.log('El libro',theBook)
    res.render('bookDetail',{theBook});
  })
  .catch(error => {
    console.log('Error while retrieving book details: ', error);
  })

});


module.exports = router;
