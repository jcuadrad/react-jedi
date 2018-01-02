import React from 'react';

import spaceship from '../../images/space.png'

import Stats from './Stats'

const Player = props => {
  let gameStats = null;
  let divStyle = { color: '#ee4235' }

  if (props.number === 1) {
    divStyle.color = '#2196f3'
  }

  // Game stats should be passed as prop when game is over
  if (props.player.gameStats) {
    gameStats = <Stats
      {...props.player.gameStats} 
      divStyle={divStyle} />;
  }
    return (
    <div className="container">
      <h2 style={divStyle}>Player {props.number} </h2>
      <h1>{props.player.name}</h1>
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