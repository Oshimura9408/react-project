import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon/icons.svg';

function Book({ data }) {
  return (
    <div className={`book ${data.isReaded ? 'book__readed' : ''}`}>
      <a className="book__img" href="#"><img src={data.img} alt="" /></a>
      <div className="book__desc">
        <a className="book__title" href="#">{data.name}</a>
        <p>
Description:
          {data.description}
        </p>
      </div>
      <div className="book__rate">
        <span>
Rating:
          {data.rating}
        </span>
      </div>
    </div>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    isReaded: PropTypes.bool
  }).isRequired
};

export default Book;
