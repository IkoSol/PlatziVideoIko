import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
import NotFound from '../containers/NotFound'


const Player = props => {
    const { id } = props.match.params //el id de params se manda desde App.js en el "/video/:id" gracias a React Router
    const hasPlaying = Object.keys(props.playing).length > 0

    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound />
};

const mapDispatchToProps = {
    getVideoSource
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);