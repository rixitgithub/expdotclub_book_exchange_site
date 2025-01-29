import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BookListing from './pages/BookListing';
import BookDiscovery from './pages/BookDiscovery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<BookListing />} />
        <Route path="/discover" element={<BookDiscovery />} />
      </Routes>
    </Router>
  );
};

export default App;
