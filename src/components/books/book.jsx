import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import Icon from '../icon/icon';

class Book extends PureComponent {
  render() {
    const { book } = this.props;

    console.log(`render-${book.id}`);

    return (
      <Link to={`books/${book.id}`} book={book.id}>
        <div
          className={`book ${book.isReaded ? 'book--readed' : ''}`}
          data-id={book.id}
        >
          <a className="book__img" href="#"><img src={book.img} alt="" /></a>
          <div className="book__desc">
            <span className="book__title">{book.name}</span>
            <p>
              Описание :
              {' '}
              {book.description}
            </p>
          </div>
          <div className="book__rate">
            <div className="stars">
              <span>
                Рейтинг:
              </span>
              <StarRatingComponent
                name="rate"
                starCount={5}
                value={book.rating}
                editing={false}
              />
            </div>
            <div className="book__progress">
            Прочитано :
              {' '}
              {book.progress}
            </div>
          </div>
        </div>
      </Link>
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
    rating: PropTypes.number.isRequired,
    isReaded: PropTypes.bool
  }).isRequired
};

export default Book;
