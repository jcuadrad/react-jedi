import React from 'react';

import spaceship from '../../images/space.png'

import Stats from './Stats'

const Player = props => {
  let gameStats = null;
  let divStyle = { color: 'red' }

  if (props.number === 1) {
    divStyle.color = 'blue'
  }

  // Game stats should be passed as prop when game is over
  if (props.player.gameStats) {
    gameStats = <Stats
      {...props.player.gameStats} 
      divStyle={divStyle} />;
  }
    return (
    <div className="container">
      <h3 style={divStyle}>Player {props.number} </h3>
      <h2>{props.player.name}</h2>
      <p>{props.isComputer ? 'Computer' : 'Human' }</p>
      <div className="spaceship">
        <img src={spaceship} alt="spaceship" className="spaceship-image" />
        <p>{props.player.spaceship.name}</p>
        {gameStats}
      </div>
    </div>
    )
}

export default Player;