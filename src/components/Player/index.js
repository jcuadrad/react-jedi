import React from 'react';
import PropTypes from 'prop-types';

import spaceship from '../../images/space.png'

import Stats from './Stats'

const Player = props => {
    return (
    <div className="container">
      <h3>Player 1 </h3>
      <h2>Luke Skywalker</h2>
      <p>Human</p>
      <div className="spaceship">
        <img src={spaceship} alt="spaceship" className="spaceship-image" />
        <p>Spaceship name</p>
        <Stats/>
      </div>
    </div>
    )
}

export default Player;