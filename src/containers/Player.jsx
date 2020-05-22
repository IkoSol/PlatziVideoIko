import React from 'react';
import '../assets/styles/components/Player.scss'

const Player = props => {
    const { id } = props.match.params //el id de params se manda desde App.js en el "/video/:id" gracias a RectRouter
    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default Player;