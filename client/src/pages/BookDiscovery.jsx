import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookDiscovery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('http://localhost:5000/api/books');
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Discovery</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDiscovery;
