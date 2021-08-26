import React from 'react';
import './Header.css';
import Cart from '../Cart/Cart';
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

export default function Header({ counter }) {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='header-logo' />
      </Link>
      <p className='header__title'>
        <b>R</b>eact <b>S</b>tore
      </p>
      <Link to='/purchases'>
        <Cart counter={counter} />
      </Link>
    </header>
  );
}
