import React from 'react';
import '../assets/styles/components/HeaderHome.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const HeaderHome = () => (
    <header className="headerHome">
        <img className="header__img" src={logo} alt="Platzi Logo" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
  </header>
)

export default HeaderHome;