import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from '../components/search/search';
import Books from '../components/books/books';
// import Icon from '../components/icon/icon';


const Root = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Search} />
      <Route exact path="/" component={Books} />
    </div>
  </BrowserRouter>
);

// function Root() {
//   return (
//     <div>
//       <Icon name="home" />
//     </div>
//   );
// }


export default Root;

//
// function Root() {
//   return <Tasks />;
// }
//
// export default Root;
