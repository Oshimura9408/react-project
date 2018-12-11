import React from 'react';

function Search() {
  return (
    <form className="search">
      <input className="search__input input__title" type="text" placeholder="Filter by title, description" />
      <div className="filter__rate">
        <p>Rate</p>
        <input className="search__input input__rate" type="text" />
        <input className="search__input input__rate" type="text" />
      </div>

      <ul className="search__filter">
        <li className="list__item list__item--active">All</li>
        <li className="list__item ">Read</li>
        <li className="list__item ">Readed</li>
      </ul>

    </form>
  );
}

export default Search;
