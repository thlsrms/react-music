import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import 'normalize.css/normalize.css'
import './sass/style.scss';

import App from './App';


render(
  <StrictMode>
    <App />
  </StrictMode>,

  document.getElementById('appRoot')
);

// Remove for Production build
if (module.hot) {
  module.hot.accept()
}
