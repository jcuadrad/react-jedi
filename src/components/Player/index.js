import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats'

const Player = props => {
    return (
    <div className="container">
      <h3>Player 1 </h3>
      <h2>Luke Skywalker</h2>
      <p>Human</p>
      <div className="spaceship">
        <img src="" alt=""/>
        <p>Spaceship name</p>
        <Stats/>
      </div>
    </div>
    )
}

export default Player;