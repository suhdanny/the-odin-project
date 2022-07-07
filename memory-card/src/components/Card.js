import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.url} alt="pokemon" />
            <div className="card--name">{props.name}</div>
        </div>
    );
}

export default Card;
