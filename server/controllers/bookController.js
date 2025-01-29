const Book = require('../models/Book');
const User = require('../models/User');

const listBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const book = new Book({ title, author, genre, user: req.user._id });
  await book.save();
  res.status(201).json({ message: 'Book listed successfully' });
};

const getBooks = async (req, res) => {
  const books = await Book.find().populate('user', 'name email');
  res.json(books);
};

const findMatches = async (req, res) => {
  const { genre, author } = req.body;
  const books = await Book.find({ genre, author });
  res.json(books);
};

module.exports = { listBook, getBooks, findMatches };
