import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Books from '../books/books';
import About from '../about/about';
import SearchBook from '../search/search';
import { searchBook } from '../../serv-files/api-config';
import createRequest from '../../serv-files/create-request';

import AddBook from '../add-book/form';

import Item from '../item/item';

// const App = () => (
//   <BrowserRouter>
//     <div className="app">
//       <div className="page__header">
//         <div className="header__link">
//           <Link to="/">Книги</Link>
//           <Link to="/about">О приложении</Link>
//           <Link to="/add">Добавить книгу</Link>
//         </div>
//       </div>
//       <Route exact path="/" component={Books} />
//       <Route path="/about" component={About} />
//       <Route path="/books/:id" component={Item} />
//       <Route path="/add" component={AddBook} />
//     </div>
//   </BrowserRouter>
// );

class App extends Component {
    searchBook = (search) => {
      createRequest(searchBook, { search }, null).then(({ status, data }) => {
        if (status === 'OK') {
          this.setState({ isLoading: false, books: data });
          console.log(data, this.state, 'searchBook - data and state');
        }
      });
    };

    render() {
      return (
        <BrowserRouter>
          <div className="app">
            <div className="page__header">
              <div className="header__link">
                <Link to="/">Моя библиотека</Link>
                <Link to="/add">Добавить книгу</Link>
                <Link to="/about">О приложении</Link>
              </div>
              <SearchBook searchBook={this.searchBook} />
            </div>
            <Route exact path="/" component={Books} />
            <Route path="/about" component={About} />
            <Route path="/books/:id" component={Item} />
            <Route path="/add" component={AddBook} />
          </div>
        </BrowserRouter>
      );
    }
}


export default App;
