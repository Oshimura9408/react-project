import React from 'react';
import Book from './book';

const books = [
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
];

// function Books() {
//   return (
//     <div className="books">
//       {books.map(data => (
//         <div className="book" key={data.id}>
//           <a href="#"><img src={data.img} alt="" /></a>
//           <div className="book__desc">
//             <a className="book__title" href="#">{data.name}</a>
//             <p>Description: {data.description}</p>
//           </div>
//           <div className="book__rate">
//             <span>Rating: {data.rating}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

function Books() {
  return (
    <div className="books">
      {books.map(data => (
        <Book data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Books;
