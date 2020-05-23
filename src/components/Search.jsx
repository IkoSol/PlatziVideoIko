import React from 'react';
import { connect } from 'react-redux'
import classNames from 'classNames'
import '../assets/styles/components/Search.scss'
import { filterVideos } from '../actions'

const Search = (props) => {
    const { isHome, id, cover, title, year, contentRating, duration } = props
    const inputStyle = classNames('input',{
        isHome
    })
    const handleChange = event => {
        props.filterVideos(event.target.value)
    }
    return (
        <section className="search">
            <h2 className="search__title">¿Qué quieres ver hoy?</h2>
            <input 
                type="text" 
                className={inputStyle} 
                placeholder="Buscar..." 
                onChange={handleChange}
            />
        </section>
    )
}

const mapDispatchToProps = {
    filterVideos
}

export default connect(null, mapDispatchToProps)(Search);