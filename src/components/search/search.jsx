import React, { Component, createRef } from 'react';

class SearchBook extends Component {
    textRef = createRef();

    onSubmit = (event) => {
      event.preventDefault();

      console.log(this.textRef.current.value);
    };

    render() {
      return (
        <form className="search" onSubmit={this.onSubmit}>
          <input
            ref={this.textRef}
            className="search__input input__title"
            type="text"
            placeholder="Filter by title, description"
          />
          <button className="btn__search" type="submit">Search</button>
        </form>
      );
    }
}

export default SearchBook;
