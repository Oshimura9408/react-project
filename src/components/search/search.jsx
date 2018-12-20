import React, { Component, createRef } from 'react';

class SearchBook extends Component {
    textRef = createRef();

    onSubmit = (event) => {
      const { searchBook } = this.props;
      event.preventDefault();

      console.log(this.textRef.current.value);
      searchBook(this.textRef.current.value);
    };

    render() {
      return (
        <form className="search" onSubmit={this.onSubmit}>
          <input
            ref={this.textRef}
            className="search__input input__title"
            type="text"
            placeholder="Поиск по названию"
          />
          <button className="btn__search" type="submit">Найти</button>
        </form>
      );
    }
}

export default SearchBook;
