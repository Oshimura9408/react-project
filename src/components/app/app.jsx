import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Books from '../books/books';
import About from '../about/about';

import Item from '../item/item';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Link to="/">Books</Link>
      <Link to="/about">About</Link>
      <Route exact path="/" component={Books} />
      <Route path="/about" component={About} />
      <Route path="/books/:id" component={Item} />
    </div>
  </BrowserRouter>
);

export default App;
