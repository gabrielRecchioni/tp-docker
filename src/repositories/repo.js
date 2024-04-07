const bookModel = require('../models/book.js');

const bookRepository = {};

bookRepository.getAllBooks = async () => {
    const book = await bookModel.find();
    return book;
};

bookRepository.getOneBook = async (id) => {
    const book = await bookModel.findById(id);

    if (!book) {
        const error = new Error();
        error.status = 404;
        error.message = 'book with id = ' + id + ' not found';
        throw error;
    }

    return book;
};

bookRepository.saveBook = async (book) => {
    const bookCreated = await bookModel.create(book);
    return bookCreated;
};

module.exports = bookRepository;