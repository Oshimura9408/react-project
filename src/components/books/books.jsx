import React, { Component } from 'react';
import Book from './book';

import Icon from '../icon/icon';

import createRequest from '../../serv-files/create-request';
import { fetchBooks, fetchBook } from '../../serv-files/api-config';
import classNames from '../../class-names/class-names';

import SearchBook from '../search/search';
import Item from "../item/item";

class Books extends Component {
  state = {
    isLoading: true,
    books: [],
    test: ''
  };

  componentDidMount() {
    createRequest(fetchBooks).then(({ status, data }) => {
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
        <SearchBook />
        <Icon name="camera"/>
        {books.map(book => (
          <Book book={book} toogleBook={this.toogleBook} key={book.id} />
        ))}
      </div>
    );
  }
}

export default Books;
