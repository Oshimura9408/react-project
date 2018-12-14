import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app/app';

// import Icon from '../components/icon/icon';

// polyfill
import '@babel/polyfill';
import 'whatwg-fetch';

const rootElement = document.querySelector('#root');

ReactDom.render(<App />, rootElement);
