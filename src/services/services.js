const bookRepository = require('../repositories/repo.js');

const bookService = {};

bookService.getAllBooks = () => bookRepository.getAllBooks();

bookService.getOneBook = (id) => bookRepository.getOneBook(id);

bookService.saveBook = (book) => bookRepository.saveBook(book);

module.exports = bookService;