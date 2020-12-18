'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

const Canciones404 = () => {
  return (
    <div><p>Page not found 404</p>
      <Link to='/'><p>Volver al inicio</p></Link></div>
  );
}

export default Canciones404;