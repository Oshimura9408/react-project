import ReactDom from 'react-dom';
import React from 'react';
import Root from './root';

// const rootElement = document.querySelector('#root');
//
// ReactDom.render(<Root />, rootElement);


import Icon from '../components/icon/icon';

ReactDom.render((
  <div>
    <Icon name="home" />
    <Icon name="camera" />
    <Icon name="headphones" />
  </div>
), document.getElementById('root'));