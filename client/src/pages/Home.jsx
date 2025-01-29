import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Book Management System</h1>
      <p>
        This is a platform where you can register, log in, and manage books.
      </p>
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/books">
          <button>Book Listing</button>
        </Link>
        <Link to="/discover">
          <button>Book Discovery</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
