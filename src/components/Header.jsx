import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Platzi Logo" />
  </header>
)

export default Header;