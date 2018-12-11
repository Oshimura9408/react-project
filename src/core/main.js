import ReactDom from 'react-dom';
import React from 'react';
import Root from './root';

// import Icon from '../components/icon/icon';

// polyfill
import '@babel/polyfill';
import 'whatwg-fetch';

const rootElement = document.querySelector('#root');

ReactDom.render(<Root />, rootElement);

// ReactDom.render((
//   <div>
//     <Icon name="home" />
//     <Icon name="camera" />
//     <Icon name="headphones" />
//   </div>
// ), document.getElementById('root'));
