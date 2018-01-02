import React, { Component } from 'react';

import Player from './components/Player'
import GameData from './components/GameData'

export default class Game extends Component {
    render() {
        return (
        <div className="game-container">
            <div className="info-container">
                <Player/>
                <GameData/>
                <Player/>
            </div>
            <div className="bottom-container">
                <button>Next Match</button>
            </div>
        </div>
        )
    };
};

export default class Race {

    constructor(gold, distance) {
      this.gold = gold;
      this.distance = distance;
    }
  
    getTripTotal(cargo) {
      let trips = Math.ceil(this.gold/cargo);
      return (trips * 2) - 1;
    }
  
    getTime(spaceship) {
      let tripsWithCargo = Math.ceil(this.gold/spaceship.cargo);
      let tripsWithoutCargo = tripsWithCargo - 1;
  
      let timeWithCargo = ((this.distance/spaceship.speed) + 2) * tripsWithCargo;
      let timeWithoutCargo = (this.distance/spaceship.speed) * tripsWithoutCargo;
  
      return parseFloat((timeWithCargo + timeWithoutCargo).toFixed(4));
    }
  };