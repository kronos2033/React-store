import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='footer'>
      <span className='footer__copyright'>&#169; React Store</span>
      <Link className='footer__link link' to='/about'>
        <span className='footer__info'>О магазине и доставке</span>
      </Link>
    </footer>
  );
}
