import React, { Component } from 'react';

import StarRatingComponent from 'react-star-rating-component';
import createRequest from '../../serv-files/create-request';
import { fetchBook } from '../../serv-files/api-config';

import Icon from '../icon/icon';

export default class Item extends Component {
    state = {
      isLoading: true,
      book: [],
      test: 'test'
    };

    componentDidMount() {
      createRequest(fetchBook, { id: this.props.match.params.id }, null).then(({ status, data }) => {
        if (status === 'OK') {
          this.setState({ book: data });
        }
      });
    }

    handleChange = (event) => {
      this.setState({ test: event.target.value });

    };

    render() {
      const { book, test } = this.state;
        console.log(test);
      return (
        <div
          className="book__item"
          data-id={book.id}
        >
          <div className="item__header">
            <h1>{book.name}</h1>
          </div>
          <div className="item__container">
            <div className="item__img">
              <a className="book__img" href="#"><img src={book.img} alt="" /></a>
              <form>
                <select value={test} onChange={this.handleChange}>
                  <option value="Read">Read</option>
                  <option value="Readed">Readed</option>
                </select>
              </form>

            </div>
            <div className="item__info">
              <div className="title info__title">
                      information
              </div>
              <div className="info__line info__genre">
                <span className="key">Genre:</span>
                {book.genre}
              </div>
              <div className="info__line info__author">
                <span className="key">Author:</span>
                {' '}
test
              </div>
            </div>
            <div className="item__rate">
              <div className="title rate__title">
                    rating
              </div>
              <div>
                Rating:
                {' '}
                <StarRatingComponent
                  name="rate"
                  starCount={5}
                  value={book.rating}
                  editing={false}
                />
              </div>
            </div>
          </div>
          <div className="item__desc">
            <div className="title item__title">
Description
            </div>
            <div className="desc__text">
              {book.description}
            </div>

          </div>
        </div>
      );
    }
}
