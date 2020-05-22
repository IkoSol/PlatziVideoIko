import React from 'react';
import classNames from 'classNames'
import '../assets/styles/components/Search.scss'

const Search = ({ isHome }) => {
    const inputStyle = classNames('input',{
        isHome
    })
    return (
        <section className="search">
            <h2 className="search__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className={inputStyle} placeholder="Buscar..." />
        </section>
    )
}

export default Search;