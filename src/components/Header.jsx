import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import classNames from 'classnames'

const Header = props => {
    const { user, setColor } = props
    const hasUser = Object.keys(user).length > 0 //se usa object.keys a user ya que user es un objeto y no se puede saber la longitud de un objeto
    const handleLogout = () => {
        props.logoutRequest({})
    }
    const inputStyle = classNames('header', setColor); //style header
    return (
        <header className={inputStyle}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Logo" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ? 
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img src={userIcon} alt="User Icon" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ? 
                        <li><a href="/">{user.name}</a></li>
                        : 
                        null
                    }
                    {hasUser ? 
                        <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => { //esto es para traerse una prop del state
    return {
        user: state.user
    }
}

const mapDispatchToProps = { //Esto es para traerse los actions 
    logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);