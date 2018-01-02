import React from 'react'

import gold from '../../images/gold.png'
import distance from '../../images/distance.png'

import Score from './Score'

const GameData = props => {
    return (
        <div className="container">
            <h2 color='white'>VS</h2>
            <Score s1={props.score[0]} s2={props.score[1]}/>
            <div className="info">
                <img src={gold} alt="gold" className="icon"/>
                <h3 color='white'>{props.gold} KG</h3>
            </div>
            <div className="info">
                <img src={distance} alt="distance" className="icon"/>
                <h3 color='white'>{props.distance} KM</h3>
            </div>
        </div>
    )
}

export default GameData;