import React, { Component } from 'react';

import Player from './components/Player'
import GameData from './components/GameData'

class Game extends Component {
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

export default Game;