import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV === 'development') {
  const eruda = require('eruda');
  eruda.init();
}

ReactDOM.render(<h1>Hi!</h1>, document.getElementById('root'));
