import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

import createRequest from '../../core/create-request';
import { fetchTasks } from '../../core/api-config';
import classNames from '../../class-names/class-names';

class Books extends Component {
  state = {
    isLoading: true,
    books: []
  };

  componentDidMount() {
    createRequest(fetchTasks).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, books: data });
      }
    });
  }

  toogleBook = (event) => {
    const { id } = event.currentTarget.dataset;

    this.setState(state => ({
      books: state.books.map((book) => {
        if (book.id === id) {
          return { ...book, isReaded: !book.isReaded };
        }
        return book;
      })
    }));
  };

  render() {
    const { books, isLoading } = this.state;

    return (
      <div className={classNames('books', { loading: isLoading })}>
        {books.map(book => (
          <Book book={book} toogleBook={this.toogleBook} key={book.id} />
        ))}
      </div>
    );
  }
}

export default Books;
