const { Router } = require('express');
const bookController = require('../controllers/controllers.js');
const bookRoutes = Router();

bookRoutes.post('/books',bookController.saveBook)
bookRoutes.get('/books', bookController.getAllBooks);
bookRoutes.get('/books/:id', bookController.getOneBook);

module.exports = bookRoutes;