import React, { Component } from 'react';
import Book from './book';

import createRequest from '../../serv-files/create-request';
import { fetchBooks, searchBook } from '../../serv-files/api-config';
import classNames from '../../class-names/class-names';
import SearchBook from '../search/search';

import visibilFilter from '../constants';

const text = {
  filters: {
    all: 'Все книги',
    read: 'Читаю',
    readed: 'Прочитано'
  }
};

class Books extends Component {
  state = {
    isLoading: true,
    books: [],
    filter: visibilFilter.ALL
  };

  componentDidMount() {
    createRequest(fetchBooks).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, books: data });
      }
    });
  }

  searchBook = (search) => {
    createRequest(searchBook, { search }, null).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, books: data });
        console.log(data, this.state, 'searchBook - data and state');
      }
    });
  };


  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  render() {
    const { books, isLoading, filter } = this.state;

    const filterBooks = books.filter((book) => {
      switch (filter) {
        case visibilFilter.READ:
          return !book.isReaded;

        case visibilFilter.READED:
          return book.isReaded;

        case visibilFilter.ALL:
        default:
          return true;
      }
    });

    return (

      <div className={classNames('books', { loading: isLoading })}>
        <div className="books__title" />
        <SearchBook searchBook={this.searchBook} />
        <div className="filters">
          {['ALL', 'READ', 'READED'].map(item => (
            <div
              className={`filter__item filter__item--${item.toLocaleLowerCase()}`}
              onClick={this.changeFilter.bind(this, visibilFilter[item])}
              key={item}
            >
              {text.filters[item.toLowerCase()]}
            </div>
          ))}
        </div>

        {filterBooks.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    );
  }
}

export default Books;
