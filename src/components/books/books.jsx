import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

// const books = [
//   {
//     id: '1',
//     img: 'https://via.placeholder.com/150',
//     genre: 'romance',
//     name: 'Twilight',
//     description: 'testtesttesttesttesttesttesttesttest',
//     rating: '4',
//     isReaded: false
//   },
//   {
//     id: '2',
//     img: 'https://via.placeholder.com/150',
//     genre: 'romance',
//     name: 'Fifty Shades Darker',
//     description: 'testtesttesttesttesttesttesttesttest',
//     rating: '4',
//     isReaded: true
//   },
//   {
//     id: '3',
//     img: 'https://via.placeholder.com/150',
//     genre: 'romance',
//     name: 'The Selection',
//     description: 'testtesttesttesttesttesttesttesttest',
//     rating: '4',
//     isReaded: false
//   },
//   {
//     id: '4',
//     img: 'https://via.placeholder.com/150',
//     genre: 'fantasy',
//     name: 'Harry Potter',
//     description: 'testtesttesttesttesttesttesttesttest',
//     rating: '4',
//     isReaded: true
//   },
//   {
//     id: '5',
//     img: 'https://via.placeholder.com/150',
//     genre: 'classics',
//     name: 'The Great Gatsby',
//     description: 'testtesttesttesttesttesttesttesttest',
//     rating: '2',
//     isReaded: true
//   }
// ];

// function Books() {
//   return (
//     <div className="books">
//       {books.map(data => (
//         <Book data={data} key={data.id} />
//       ))}
//     </div>
//   );
// }

class Books extends Component {
  state = {
    books: [
      {
        id: '1',
        img: 'https://via.placeholder.com/150',
        genre: 'romance',
        name: 'Twilight',
        description: 'testtesttesttesttesttesttesttesttest',
        rating: '4',
        isReaded: false
      },
      {
        id: '2',
        img: 'https://via.placeholder.com/150',
        genre: 'romance',
        name: 'Fifty Shades Darker',
        description: 'testtesttesttesttesttesttesttesttest',
        rating: '4',
        isReaded: true
      },
      {
        id: '3',
        img: 'https://via.placeholder.com/150',
        genre: 'romance',
        name: 'The Selection',
        description: 'testtesttesttesttesttesttesttesttest',
        rating: '4',
        isReaded: false
      },
      {
        id: '4',
        img: 'https://via.placeholder.com/150',
        genre: 'fantasy',
        name: 'Harry Potter',
        description: 'testtesttesttesttesttesttesttesttest',
        rating: '4',
        isReaded: true
      },
      {
        id: '5',
        img: 'https://via.placeholder.com/150',
        genre: 'classics',
        name: 'The Great Gatsby',
        description: 'testtesttesttesttesttesttesttesttest',
        rating: '2',
        isReaded: true
      }
    ]
  };

  toogleBook = (event) => {
    const { id } = event.currentTarget.dataset;

    this.setState(state => ({
      books: state.books.map((book) => {
        if (book.id === id) {
          return { ...book, isReaded: !book.isReaded };
        }
        return book;
      })
    }));
  };

  render() {
    const { books } = this.state;

    return (
      <div className="books">
        {books.map(book => (
          <Book book={book} toogleBook={this.toogleBook} key={book.id} />
        ))}
      </div>
    );
  }
}

export default Books;
