import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Canciones</h1>
      <NavLink exact to='/' activeClassName='activePageLink'>Inicio</NavLink>
      <NavLink to='/create'  activeClassName='activePageLink'>Crear</NavLink>
      <NavLink to='/faq'  activeClassName='activePageLink'>FAQ</NavLink>
    </header>
  );
}

export default Header;