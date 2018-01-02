import React from 'react'
import PropTypes from 'prop-types'

import gold from '../../images/gold.png'
import distance from '../../images/distance.png'

import Score from './Score'

const GameData = props => {
    return (
        <div className="container">
            <h2 color='white'>VS</h2>
            <Score/>
            <div className="info">
                <img src={gold} alt="gold" className="icon"/>
                <h3 color='white'>20 KG</h3>
            </div>
            <div className="info">
                <img src={distance} alt="distance" className="icon"/>
                <h3 color='white'>1000 KM</h3>
            </div>
        </div>
    )
}

export default GameData;