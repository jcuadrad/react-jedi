import { START_GAME, RESET, END_GAME } from '../actiontypes/game';
import { loadPlayer, loadPlayers } from './player';

export const gameOngoing = () => {
  return dispatch => {
    dispatch({
      type: START_GAME
    });
  }
}

export const gameFinished = (playerOneWon) => {
  return dispatch => {
    dispatch({
      type: END_GAME,
      playload: {
        playerOneWon: playerOneWon
      }
    });
  }
}

export const newGame = () => {
  return dispatch => {
    dispatch({
      type: RESET
    });
    dispatch(loadPlayers());
    dispatch(loadPlayer(1));
    dispatch(loadPlayer(2));
  }
}
