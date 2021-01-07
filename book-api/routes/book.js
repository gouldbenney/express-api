const router = require('express').Router()

const { addBooks, getBooks,updateBook ,deleteBook, postBook} = require('../controllers/auth')

//creating blog
router.post('/api/newbook', addBook)

//retrieving books
router.get('/api/books', getBooks)

//updating bookControllerrouter
router.patch('/api/update-book', updateBook)

//deleting a book
router.delete('api/delete-book',deleteBook)


module.exports = router