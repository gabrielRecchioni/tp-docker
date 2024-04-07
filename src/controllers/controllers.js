const Book = require('../models/book.js');
const bookService = require('../services/services.js');

const bookController = {};

bookController.saveBook = (req, res, next) =>
  bookService
        .saveBook(new Book({
                title: req.body.title,
                author: req.body.author
              }))
        .then((data) => res.status(201).send(data))
        .catch(next);
        
bookController.getAllBooks = (req, res, next) =>
    bookService
        .getAllBooks()
        .then((data) => res.status(200).send(data))
        .catch(next);

bookController.getOneBook = (req, res, next) =>
    bookService
        .getOneBook(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch(next);


        
module.exports = bookController;