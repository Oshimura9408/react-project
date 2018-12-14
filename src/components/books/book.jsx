import React, { Component, PureComponent } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from '../icon/icons.svg';

class Book extends PureComponent {
  render() {
    const { book, toogleBook } = this.props;

    console.log(`render-${book.id}`);

    return (
      <div
        className={`book ${book.isReaded ? 'book--readed' : ''}`}
        onClick={toogleBook}
        data-id={book.id}
      >
        <a className="book__img" href="#"><img src={book.img} alt="" /></a>
        <div className="book__desc">
          <Link className="book__title" to={`books/${book.id}`} book={book}>{book.name}</Link>
          <p>
                        Description:
            {book.description}
          </p>
        </div>
        <div className="book__rate">
          <span>
Rating:
            {book.rating}
          </span>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    isReaded: PropTypes.bool
  }).isRequired,
  toogleBook: PropTypes.func
};

export default Book;
