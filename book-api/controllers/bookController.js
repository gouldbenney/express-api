const Book = require('../models/book')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const bookController = {}

bookController.addBook = async ( req, res) => {
    try {
        let book = new book(req.body)
        let result = await book.save()
        res.status(201).send({message: 'Book created', result})
    } catch (error) {
        console.log(error)
    }
}

bookController.getBooks = async (req, res) => {
    try {
        let book = await Book.find({title: req.params.title})
        book ? res.status(200).send({message: 'Book available', book}) : res.status(400).send({message: 'Book unavailable'})
    } catch (error) {
        console.log(error)
    }
}

//update book
bookController.updateBook = async (req,res) => {

//destructuring user detail
    const {title, body, social,author,like,dislike,authorRole,category,readTime,image,bookImage} = req.body
    
    try {
         let book=  await Book.findOneAndUpdate(
            {_id: req.params.id},
            {title, body, social,author,like,dislike,authorRole,category,readTime,image,bookImage}
        )
        if(book){
            res.status(200).send({message:'Book updated successfully', book})
        }else{
            res.status(400).send({message:'Could not update book'})
        }
    } catch (error) {
        console.log(error)
    }
}

//deleting book
bookController.deleteBook = async ( req,res ) => {
    try {
      let book=  await Book.findOneAndDelete({_id: req.params.id})
      if(book){  
      res.status(200).send({message: 'Book deleted successfully'})
      }else{
          res.status(400).send({message: 'Could not delete book'})
      }
    } catch (error) {
        console.log(error)
    }
}


module.exports = bookController