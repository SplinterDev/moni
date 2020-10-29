import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <Link to={'/'} id="home-link">Moni</Link>
    </header>
  )
}

export default Header;
