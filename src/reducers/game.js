import { START_GAME, RESET, END_GAME } from '../actiontypes/game';

const initState = {
  score: [0,0],
  isGameOver: false,
  gameOngoing: false,
  gameInfo: {
    gold: Math.floor(Math.random() * 9999) + 100,
    distance: Math.floor(Math.random() * 99999) + 1000
  }
};

export default function Game (state = initState, action) {
  switch(action.type) {
    case START_GAME:
      return {
          ...state,
          gameOngoing: true
      }
    
    case END_GAME:
      let playerOneScore = state.score[0] + (action.playload.playerOneWon ? 1 : 0);
      let playerTwoScore = state.score[1] + (!action.playload.playerOneWon ? 1 : 0);

      return {
        ...state,
        score: [playerOneScore, playerTwoScore],
        gameOngoing: false,
        isGameOver: true
      }
    case RESET:
      return {
        ...state,
        isGameOver: false,
        gameOngoing: false,
        gameInfo: {
          gold: Math.floor(Math.random() * 9999) + 100,
          distance: Math.floor(Math.random() * 99999) + 1000
        }
      }
    default:
      return state;
  }
}