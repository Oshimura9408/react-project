import React, { Component } from 'react';
import Book from './book';

import createRequest from '../../serv-files/create-request';
import { fetchBooks, searchBook } from '../../serv-files/api-config';
import classNames from '../../class-names/class-names';

import SearchBook from '../search/search';

class Books extends Component {
  state = {
    isLoading: true,
    books: [],
    currentBook: []
  };

  componentDidMount() {
    createRequest(fetchBooks).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, books: data });
      }
    });
  }

  searchBook = (name) => {
    createRequest(searchBook, { name }, null).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ books: [data] });
        console.log(data, this.state, 'searchBook - data and state');
      }
    });
  };


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
        <SearchBook searchBook={this.searchBook} />
        {books.map(book => (
          <Book book={book} toogleBook={this.toogleBook} key={book.id} />
        ))}
      </div>
    );
  }
}

export default Books;
