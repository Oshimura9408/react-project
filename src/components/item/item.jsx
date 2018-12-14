import React, { Component } from 'react';

import createRequest from '../../serv-files/create-request';
import { fetchBook } from '../../serv-files/api-config';

export default class Item extends Component {
    state = {
      isLoading: true,
      book: []
    };

    componentDidMount() {
      createRequest(fetchBook).then(({ status, data }) => {
        if (status === 'OK') {
          this.setState({ isLoading: false, book: data });
        }
      });
    }

    render() {
      const { book } = this.state;

      return (
        <div
          className={`book ${book.isReaded ? 'book--readed' : ''}`}
          data-id={book.id}
        >
          <a className="book__img" href="#"><img src={book.img} alt="" /></a>
          <div className="book__desc">
            <a className="book__title">{book.name}</a>
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
