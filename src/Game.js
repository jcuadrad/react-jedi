import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import { loadPlayer, loadPlayers, play } from './actions/player';
import { newGame } from './actions/game';

import Player from './components/Player'
import GameData from './components/GameData'

class Game extends Component {

    constructor(props) {
        super(props);

        this.loadPlayers = this.loadPlayers.bind(this);
        this.state = {
            isGameOver: this.props.isGameOver
        }

        let { player1, player2 } = this.props.playersReducer;
        let { gameInfo } = this.props.gameReducer;
    
        if (this.props.isGameOver && !player1.spaceship) {} 
            else {
                if (this.props.isGameOver && player1.spaceship)
                this.props.dispatch(play(gameInfo.gold, gameInfo.distance, player1, player2));
                else
                this.props.dispatch(newGame());
            }
    }

    loadPlayers() {
        this.props.dispatch(loadPlayers());
        this.props.dispatch(loadPlayer(1));
        this.props.dispatch(loadPlayer(2));
      }
    
    getPlayer(number) {
        let playerComponent = <h1 color='white'>Waiting</h1>;
        let player = this.props.playersReducer[`player${number}`];
    
        if ((player && player.loading) || (!player && number == 1)) {
          playerComponent = <h1 color='white'>Loading player...</h1>;
        } else if (player) {
          playerComponent = <Player number={number}
                    isComputer={false}
                    gameStats={player.gameStats}
                    player={player} />;
        }
    
        return playerComponent;
    }
    
      render() {
        let { player1, player2 } = this.props.playersReducer;
        if (this.props.isGameOver && !player1.gameStats) {
          return (
            console.log('Goingg'),
            <Redirect to="/"/>
            );
        }
    
        let { score, gameInfo, gameOngoing } = this.props.gameReducer;
    
        let playersJoined = false;
        if (!player1.loading && !player2.loading ) {
          playersJoined = true;
        }
    
        let changePlayerBtn = null;
        if (!this.state.isGameOver) {
          changePlayerBtn = <button className="change-button" onClick={() => {
            this.loadPlayers();
          }}>Change Players</button>;
        }
    
        let winner = null;
    
        if (this.state.isGameOver) {
          winner = <h1 winner={player1.winner}>{player1.winner ? 'YOU WON!!!' : 'YOU LOST :('}</h1>;
        }
    
        let url = this.state.isGameOver ? '/' : '/results';
    
        let playGame = <NavLink
          to={url}
          disabled={ !playersJoined || gameOngoing }
          className="play-button">{this.state.isGameOver ? 'Next Match' : 'Play'}</NavLink>

        return (
        <div className="game-container">
            <div className="winner-container">
                {winner}
            </div>
            <div className="info-container">
                {this.getPlayer(1)}
                <GameData 
                    score={score}
                    gold={gameInfo.gold}
                    distance={gameInfo.distance} />
                {this.getPlayer(2)}
            </div>
            <div className="bottom-container">
                {playGame}
                {changePlayerBtn}
            </div>
        </div>
        )
    };
};

export default connect(state => state)(Game);