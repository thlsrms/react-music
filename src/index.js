import React, { Fragment } from 'react';
import { render } from 'react-dom';

import 'normalize.css/normalize.css'
import './sass/style.scss';

import App from './App';


render(
  <Fragment>
    <App />
  </Fragment>,

  document.getElementById('appRoot')
);

// Remove for Production build
if (module.hot) {
  module.hot.accept()
}
