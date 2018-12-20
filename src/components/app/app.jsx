import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Books from '../books/books';
import About from '../about/about';

import AddBook from '../add-book/form';

import Item from '../item/item';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Link to="/">Books</Link>
      <Link to="/about">About</Link>
      <Link to="/add">Add book</Link>
      <Route exact path="/" component={Books} />
      <Route path="/about" component={About} />
      <Route path="/books/:id" component={Item} />
      <Route path="/add" component={AddBook} />
    </div>
  </BrowserRouter>
);

export default App;
