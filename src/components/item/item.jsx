import React, { Component } from 'react';

import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import createRequest from '../../serv-files/create-request';
import { fetchBook, updateBook, deleteBook } from '../../serv-files/api-config';

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

    toogleBook = () => {
      let { book } = this.state;

      console.log('toogleBook-', { ...book, isReaded: !book.isReaded });

      createRequest(updateBook, { id: this.props.match.params.id }, { isReaded: !book.isReaded, progress: book.isReaded ? '0%' : '100%' }).then((response) => {
        if (response.status === 'OK') {
          book = Object.assign(book, response.data);
          console.log('data', response.data);
          this.setState({ book });
          console.log('book', book);
        } else {
          this.setState({ });
        }
      });
    };

    onSubmit = (event) => {
      event.preventDefault();
    };

    deleteBook = () => {
      createRequest(deleteBook, { id: this.props.match.params.id }, null).then(({ status, data }) => {
        if (status === 'OK') {
          this.setState({ book: data });
        }
      });
    };


    render() {
      const { book } = this.state;
      return (
        <div className="book__item" data-id={book.id}>
          <div className="item__header">
            <h1>{book.name}</h1>
          </div>
          <div className="item--del">
            <Link to="/" onClick={this.deleteBook}>Удалить книгу</Link>
          </div>
          <div className="item__container">
            <div className="item__img">
              <a className="book__img" href="#">
                <img src={book.img} alt="" />
              </a>
              <form className="item__form" onSubmit={this.onSubmit}>
                <select value={book.isReaded ? 'Readed' : 'Read'} onChange={this.toogleBook}>
                  <option value="Read">Читаю</option>
                  <option value="Readed">Прочитал</option>
                </select>
              </form>
              <div className="item__progress">
                    Прочитано :
                {' '}
                {book.progress}
              </div>
            </div>
            <div className="item__info item--back">
              <div className="title info__title">информация</div>
              <div className="info__line info__genre">
                <span className="key">Жанр:</span>
                {book.genre}
              </div>
              <div className="info__line info__author">
                <span className="key">Автор:</span>
                {' '}
                          test
              </div>
            </div>
            <div className="item__rate item--back">
              <div className="title rate__title">Рейтинг</div>
              <div>
                          Рейтинг:
                {' '}
                {!book.isReaded ? 'Еще нет оценки' : <StarRatingComponent name="rate" starCount={5} value={book.rating} editing={false} />}
                {' '}

              </div>
            </div>
          </div>
          <div className="item__desc item--back">
            <div className="title item__title">Описание</div>
            <div className="desc__text">{book.description}</div>
          </div>
        </div>
      );
    }
}
