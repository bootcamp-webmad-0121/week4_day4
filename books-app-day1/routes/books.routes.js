const express = require('express')
const router = express.Router()

const Book = require('./../models/book.model')

// Endpoints
router.get('/', (req, res) => res.send('inicio libros'))




// Listado libros
router.get('/listado', (req, res) => {

    Book
        .find()
        .select('title')
        .then(books => res.render('books/books-list', { books }))
        .catch(err => console.log('ERROR:', err))
})




// Detalles del libro
router.get('/detalles/:book_id', (req, res) => {

    const book_id = req.params.book_id

    Book
        .findById(book_id)
        .then(book => res.render('books/book-details', book))
        .catch(err => console.log(err))

})


module.exports = router
