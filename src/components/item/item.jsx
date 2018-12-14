import React, { Component } from 'react';

import createRequest from '../../serv-files/create-request';
import { fetchBook } from '../../serv-files/api-config';

import Icon from '../icon/icon';

export default class Item extends Component {
    state = {
      isLoading: true,
      book: []
    };

    componentDidMount() {
      createRequest(fetchBook, { id: this.props.match.params.id }, null).then(({ status, data }) => {
        if (status === 'OK') {
          this.setState({ book: data });
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
            <div className="stars">
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
            </div>
            <span>
Rating:
              {book.rating}
            </span>
          </div>
        </div>
      );
    }
}
