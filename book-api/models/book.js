const mongoose = require('mongoose')

 const bookSchema = mongoose.Schema({
     title:{
         type: String,
         unique: true,
         required: [true, 'Title is required']
     },
     author: {
        type: String,
        required: [true, 'Author is required']
     },
     description: {
         type: String,
         required: [true, 'Body is required']
     },
     social: {
        type: [
           {
           _id:0,
           google: {
              type: String,
              required: [true, 'Google is required']
           },
           linkedIn:{
              type: String
           }
        }
      ],
        required: [true, 'Social media links is required'],
        default: undefined
     },
     like:{
        type: Number,
        default: 0
     },
     dislike:{
        type: Number,
        default: 0
     },
     date:{
        type: Date,
        default: Date.now
     },
     authorRole: {
      type: String,
      required: [true, 'AuthorRole is required']
      },
      category: {
         type: String,
         required: [true, 'Category is required']
      },
      readTime: {
         type: String,
         required: [true, 'Read time is required']
      },
      bookImage: {
         type: String
      },
      image: {
         type: String
      } 
    },
     {
        timestamps: true,
        writeConcern: {
          w: 'majority',
          j: true,
          wtimeout: 1000
    }
 })

 const Book = mongoose.models('book', bookSchema)
 module.exports = book