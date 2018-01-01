import React from 'react'
import PropTypes from 'prop-types'

import Score from './Score'

const GameData = props => {
    return (
        <div className="container">
            <h2 color='white'>VS</h2>
            <Score/>
            <div className="info">
                <img src="" alt=""/>
                <h3 color='white'>20 KG</h3>
            </div>
            <div className="info">
                <img src="" alt=""/>
                <h3 color='white'>1000 KM</h3>
            </div>
        </div>
    )
}

export default GameData;